import { getCesiumLngLag } from '../utils';
import { modes, geojsonTypes } from '../constants';
import publisher from '../publisher';
import DrawBase from './draw_base';

class DrawPoint extends DrawBase {
    constructor(api) {
        super(api);
        this.feature = {
            drawType: modes.DRAW_POINT,
            geojsonType: geojsonTypes.POINT,
            coordinates: [],
            drawStep: [],
            customStyle: {},
        };
    }

    onClick(e) {
        const pick = this.viewer.scene.pick(e.position) || {};
        const { lng, lat, height } = getCesiumLngLag(e.position);
        pick.position = [Number(lng), Number(lat), Number(height)];
        this.addFeature([pick.position[0], pick.position[1]]);
        this.onStop();
    }

    onStop() {
        this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
        this.changeCursor('');
    }

    addFeature(coordinates) {
        const parent = this.viewer.entities.getOrCreateEntity();
        const point = viewer.entities.add({
            name: 'Draw Point',
            position: Cesium.Cartesian3.fromDegrees(...coordinates),
            point: {
                pixelSize: 5,
                color: Cesium.Color.RED,
                outlineColor: Cesium.Color.WHITE,
                outlineWidth: 2,
            },
            parent,
        });
        parent.feature = { ...this.feature, coordinates, id: parent.id, step: coordinates };
        publisher.featureAdded(parent);
    }

    init() {
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        this.handler.setInputAction(
            this.onClick.bind(this),
            Cesium.ScreenSpaceEventType.LEFT_CLICK
        );
        this.changeCursor('crosshair');
    }
}

export default function(api) {
    const drawPointHandler = new DrawPoint(api);
    drawPointHandler.init();
}
