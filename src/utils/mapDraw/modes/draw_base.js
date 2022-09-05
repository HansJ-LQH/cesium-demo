class DrawBase {
    constructor(api) {
        this.viewer = api.viewer;
        this.handler = null;
    }

    changeCursor(type) {
        this.viewer.scene.canvas.style.cursor = type;
    }
}
export default DrawBase;
