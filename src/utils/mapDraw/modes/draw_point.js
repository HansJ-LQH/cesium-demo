import DrawBase from './draw_base';
import { pointStyle } from '../customStyle';

class DrawPoint extends DrawBase {
    constructor(api) {
        super(api);
        this.feature = {
            drawType: this.modes.DRAW_POINT,
            geojsonType: this.geojsonTypes.POINT,
            coordinates: [],
            drawStep: [],
            customStyle: {},
        };
        this.parent = null;
        this.isEdit = false;
    }

    onClick(e) {
        const pick = this.viewer.scene.pick(e.position) || {};
        const { lng, lat, height } = this.getCesiumLngLag(e.position);
        pick.position = [Number(lng), Number(lat), Number(height)];
        this.addFeature([pick.position[0], pick.position[1]]);
        this.onStop();
    }

    onStop() {
        this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
        this.changeCursor('');
        this.api.drawState = '';
    }

    onMouseDown(e) {
        const target = this.api.getPositionFeature(e.position);
        this.isEdit = target?.id === this.parent.id;
        this.changeMapController(!this.isEdit);
    }

    onMouseMove(e) {
        if (!this.isEdit) return;
        this.changeCursor('move');
        const ray = this.viewer.camera.getPickRay(e.endPosition);
        const cartesian = this.viewer.scene.globe.pick(ray, this.viewer.scene);
        this.parent._children[0].position = cartesian;
    }

    onMouseUp(e) {
        this.isEdit = false;
        this.changeCursor('');
        const { lng, lat } = this.getCesiumLngLag(e.position);
        this._setCoordinates([lng, lat]);
    }

    editStart() {
        if (this.isEdit) return;
        this.changeMapController(false);
        this.handler.setInputAction(
            this.onMouseDown.bind(this),
            Cesium.ScreenSpaceEventType.LEFT_DOWN
        );
        this.handler.setInputAction(
            this.onMouseMove.bind(this),
            Cesium.ScreenSpaceEventType.MOUSE_MOVE
        );
        this.handler.setInputAction(this.onMouseUp.bind(this), Cesium.ScreenSpaceEventType.LEFT_UP);
    }

    editStop() {
        this.isEdit = false;
        this.changeMapController(true);
        this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOWN);
        this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP);
        // 发布一个feature更新事件
    }

    addFeature(coordinates) {
        this.parent = this.viewer.entities.getOrCreateEntity();
        const point = this.viewer.entities.add({
            name: 'Draw Point',
            position: Cesium.Cartesian3.fromDegrees(...coordinates),
            point: pointStyle,
            parent: this.parent,
            featureType: this.geojsonTypes.POINT,
        });
        this.parent.feature = {
            ...this.feature,
            coordinates,
            id: this.parent.id,
            drawStep: coordinates,
            ctx: this,
        };
        this.publisher.featureAdded(this.parent);
    }

    init() {
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        this.handler.setInputAction(
            this.onClick.bind(this),
            Cesium.ScreenSpaceEventType.LEFT_CLICK
        );
        this.changeCursor('crosshair');
    }

    _setCoordinates(coordinates) {
        this.feature.coordinates = coordinates;
        this.feature.drawStep = coordinates;
    }
}

export default function(api) {
    const drawPointHandler = new DrawPoint(api);
    drawPointHandler.init();
    api.drawState = 'drawing';
}
