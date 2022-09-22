/* eslint-disable class-methods-use-this */
import ModeBase from './ModeBase';
import { getCesiumLngLag } from '../sdkRelative/utils';

class DrawPoint extends ModeBase {
    constructor(mapDraw) {
        super(mapDraw);
        this.modeName = 'draw_point';
        this.parent = null;
    }

    onSetup() {
        this.changeCursor('crosshair');
        this.feature = {
            drawType: this.constants.modes.DRAW_POINT,
            geojsonType: this.constants.geojsonTypes.POINT,
            coordinates: [],
            drawStep: [],
            customStyle: {},
        };
    }

    onClick(e) {
        const position = getCesiumLngLag(e.position);
        this.addFeature([position.lng, position.lat]);
        this.onStop();
    }

    addFeature(coordinates) {
        this.parent = this.viewer.entities.getOrCreateEntity();
        const point = this.viewer.entities.add({
            name: 'Draw Point',
            position: Cesium.Cartesian3.fromDegrees(...coordinates),
            point: this.customStyle.pointStyle,
            parent: this.parent,
            featureType: this.constants.geojsonTypes.POINT,
        });
        this.parent.feature = {
            ...this.feature,
            coordinates,
            id: this.parent.id,
            drawStep: [coordinates],
            ctx: this,
        };
        this.symbolPublisher.symbolAdded(this.parent);
    }
}

export default DrawPoint;
