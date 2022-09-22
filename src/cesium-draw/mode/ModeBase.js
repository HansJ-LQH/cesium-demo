/* eslint-disable class-methods-use-this */
import * as Constants from '../constants';
import * as customStyle from '../sdkRelative/customStyle';
import symbolPublisher from '../sdkRelative/symbolPublisher';

class ModeBase {
    constructor(mapDraw) {
        this.modeName = '';
        this.api = mapDraw;
        this.viewer = mapDraw.viewer;
        this.constants = Constants;
        this.customStyle = customStyle;
        this.symbolPublisher = symbolPublisher;
        this.onSetup();
    }

    onSetup() {
    }

    onClick(e) {
    }

    onMouseDown(e) {
    }

    onMouseMove(e) {
    }

    onMouseUp(e) {
    }

    onRightClick(e) {
    }

    onDoubleClick(e) {
    }

    onStop() {
        this.changeCursor('');
        this.api.changeMode('simple_select');
    }

    /**
     * 切换鼠标指针样式
     * @param {string} type 指针样式: 1. crosshair / 十字线; 2. pointer / 手; 3. move / 可移动; 4. default / 默认
     */
    changeCursor(type) {
        this.viewer.scene.canvas.style.cursor = type;
    }

    mapControllerEnable(isMove) {
        this.viewer.scene.screenSpaceCameraController.enableRotate = isMove;
        this.viewer.scene.screenSpaceCameraController.enableZoom = isMove;
    }
}

export default ModeBase;
