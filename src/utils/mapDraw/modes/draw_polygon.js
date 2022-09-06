import { getCesiumLngLag } from '../utils';
import { modes, geojsonTypes } from '../constants';
import publisher from '../publisher';
import DrawBase from './draw_base';

class DrawPolygon extends DrawBase {
    constructor(api) {
        super(api);
        this.feature = {
            drawType: modes.DRAW_POLYGON,
            geojsonType: geojsonTypes.POLYGON,
            coordinates: [],
            drawStep: [],
            customStyle: {},
        };
        this.parent = null;
        this.currentStepIndex = 0;
        this.activityPointCoordinates = [];
        this.test = [];
    }

    onClick(e) {
        console.log(`HJJ -> DrawPolygon -> onClick -> e`, e);
        const { lng, lat } = getCesiumLngLag(e.position);
        this.addPoint([lng, lat]);
        // 增加活动线
        if (this.currentStepIndex === 0) {
            this.activityLineHead = this.viewer.entities.add({
                polyline: {
                    positions: new Cesium.CallbackProperty(() => {
                        return Cesium.Cartesian3.fromDegreesArray([
                            ...this.feature.drawStep[this.feature.drawStep.length - 1],
                            ...this.activityPointCoordinates,
                        ]);
                    }, false),
                    width: 5,
                    material: Cesium.Color.RED,
                },
                parent: this.parent,
            });
        } else if (this.currentStepIndex === 2) {
            this.viewer.entities.add({
                polyline: {
                    positions: new Cesium.CallbackProperty(() => {
                        return Cesium.Cartesian3.fromDegreesArray([
                            ...this.activityPointCoordinates,
                            ...this.feature.drawStep[0],
                        ]);
                    }, false),
                    width: 5,
                    material: Cesium.Color.RED,
                },
                parent: this.parent,
            });
            this.viewer.entities.add({
                polygon: {
                    hierarchy: new Cesium.CallbackProperty(() => {
                        return Cesium.Cartesian3.fromDegreesArray(this.test);
                    }, false),
                    material: Cesium.Color.fromCssColorString('red'),
                },
                parent: this.parent,
            });
            this.addLine();
        } else this.addLine();
        this.currentStepIndex += 1;
    }

    onRightClick(e) {
        this.onClick(e);
        this.addLine(true);
        const { lng, lat } = getCesiumLngLag(e.position);
        this.addPoint([lng, lat]);
        this.onStop();
    }

    onMouseMove(e) {
        const { lng, lat } = getCesiumLngLag(e.endPosition);
        this.activityPointCoordinates = [lng, lat];
        if (this.currentStepIndex > 1) {
            this.test = [...this.feature.drawStep.flat(),lng, lat];
        }
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

    addLine(isStop = false) {
        const { drawStep } = this.feature;
        let coordinates = [...drawStep[drawStep.length - 2], ...drawStep[drawStep.length - 1]];
        if (isStop) coordinates = [...drawStep[drawStep.length - 1], ...drawStep[0]];
        coordinates = viewer.entities.add({
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
    const drawPolygonHandler = new DrawPolygon(api);
    drawPolygonHandler.init();
}
