class DrawBase {
    constructor(api) {
        this.viewer = api.viewer;
        this.api = api;
        this.handler = null;
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
