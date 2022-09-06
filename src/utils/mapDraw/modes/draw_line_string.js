import { getCesiumLngLag } from '../utils';
import { modes, geojsonTypes } from '../constants';
import publisher from '../publisher';
import DrawBase from './draw_base';

class DrawLineString extends DrawBase {
    constructor(api) {
        super(api);
        this.feature = {
            drawType: modes.DRAW_LINE_STRING,
            geojsonType: geojsonTypes.LINE_STRING,
            coordinates: [],
            drawStep: [],
            customStyle: {},
        };
        this.parent = null;
        this.currentStepIndex = 0;
        this.activityLineCoordinates = [];
    }

    onClick(e) {
        const { lng, lat } = getCesiumLngLag(e.position);
        this.addPoint([lng, lat]);
        // 增加活动线
        if (this.currentStepIndex === 0) {
            this.activityLineCoordinates.push(...[lng, lat]);
            this.activityLineCoordinates.push(...[lng, lat]);
            this.activityLine = viewer.entities.add({
                polyline: {
                    positions: new Cesium.CallbackProperty(() => {
                        return Cesium.Cartesian3.fromDegreesArray(this.activityLineCoordinates);
                    }, false),
                    // positions: Cesium.Cartesian3.fromDegreesArray([-75, 35, -125, 35]),
                    width: 5,
                    material: Cesium.Color.RED,
                },
                parent: this.parent,
            });
        } else this.addLine();
        this.currentStepIndex += 1;
    }

    onRightClick(e) {
        const { lng, lat } = getCesiumLngLag(e.position);
        this.addPoint([lng, lat]);
        this.onStop();
    }

    onMouseMove(e) {
        if (this.currentStepIndex === 0) return;
        const { lng, lat } = getCesiumLngLag(e.endPosition);
        this.activityLineCoordinates = [
            ...this.feature.drawStep[this.feature.drawStep.length - 1],
            lng,
            lat,
        ];
    }

    onStop() {
        this.addFeature();
        this.handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
        this.handler.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
        this.handler.removeInputAction(Cesium.ScreenSpaceEventType.RIGHT_CLICK);
        this.changeCursor('');
    }

    addPoint(coordinates) {
        viewer.entities.add({
            position: Cesium.Cartesian3.fromDegrees(...coordinates),
            point: {
                pixelSize: 5,
                color: Cesium.Color.RED,
                outlineColor: Cesium.Color.WHITE,
                outlineWidth: 2,
            },
            parent: this.parent,
        });
        this.feature.drawStep.push(coordinates);
    }

    addLine() {
        const { drawStep } = this.feature;
        const coordinates = [...drawStep[drawStep.length - 2], ...drawStep[drawStep.length - 1]];
        viewer.entities.add({
            polyline: {
                positions: Cesium.Cartesian3.fromDegreesArray(coordinates),
                width: 5,
                material: Cesium.Color.RED,
            },
            parent: this.parent,
        });
    }

    addFeature() {
        this.parent.feature = {
            ...this.feature,
            coordinates: this.feature.drawStep,
            id: this.parent.id,
        };
        publisher.featureAdded(this.parent);
    }

    init() {
        this.parent = this.viewer.entities.getOrCreateEntity();
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        this.handler.setInputAction(
            this.onClick.bind(this),
            Cesium.ScreenSpaceEventType.LEFT_CLICK
        );
        this.handler.setInputAction(
            this.onMouseMove.bind(this),
            Cesium.ScreenSpaceEventType.MOUSE_MOVE
        );
        this.handler.setInputAction(
            this.onRightClick.bind(this),
            Cesium.ScreenSpaceEventType.RIGHT_CLICK
        );
        this.changeCursor('crosshair');
    }
}

export default function(api) {
    const drawLineStringHandler = new DrawLineString(api);
    drawLineStringHandler.init();
}
