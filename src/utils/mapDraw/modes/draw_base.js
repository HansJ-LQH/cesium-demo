import { getCesiumLngLag } from '../utils';
import publisher from '../publisher';
import { modes, geojsonTypes } from '../constants';

class DrawBase {
    constructor(api) {
        this.viewer = api.viewer;
        this.api = api;
        this.handler = null;
        this.getCesiumLngLag = getCesiumLngLag;
        this.publisher = publisher;
        this.modes = modes;
        this.geojsonTypes = geojsonTypes;
    }

    changeCursor(type) {
        this.viewer.scene.canvas.style.cursor = type;
    }

    changeMapController(isMove) {
        this.viewer.scene.screenSpaceCameraController.enableRotate = isMove;
        this.viewer.scene.screenSpaceCameraController.enableZoom = isMove;
    }
}
export default DrawBase;
