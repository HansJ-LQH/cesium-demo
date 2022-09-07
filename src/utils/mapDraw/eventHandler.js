import publisher from './publisher';
import { geojsonTypes } from './constants';
import { pointStyle, pointSelectStyle } from './customStyle';

export default class EventHandler {
    constructor(viewer) {
        this.viewer = viewer;
        this.currentSelectFeature = null;
        this.handler = null;
        this._initClickEvent();
        this._drawState = ''; // 无, 绘制中, 选中
    }

    _setSelectStyle() {
        this.currentSelectFeature.parent._children.forEach(children => {
            switch (children.featureType) {
                case geojsonTypes.POINT:
                    Object.keys(pointSelectStyle).forEach(key => {
                        children.point[key] = pointSelectStyle[key];
                    });
                    break;
                default:
                    break;
            }
        });
    }

    _removeSelectStyle() {
        if (this.currentSelectFeature) {
            this.currentSelectFeature.parent._children.forEach(children => {
                switch (children.featureType) {
                    case geojsonTypes.POINT:
                        Object.keys(pointStyle).forEach(key => {
                            children.point[key] = pointStyle[key];
                        });
                        break;
                    default:
                        break;
                }
            });
        }
    }

    _onSelectFeature(e) {
        const entityList = this.viewer.scene.drillPick(e.position);
        if (entityList.length > 0 && entityList[0].id?.parent && this._drawState !== 'selected') {
            this._drawState = 'selected';
            this.currentSelectFeature = entityList[0].id;
            this._setSelectStyle();
            this.currentSelectFeature?.parent?.feature?.ctx?.editStart();
            publisher.featureSelected(entityList[0].id?.parent);
        } else {
            this._drawState = '';
            this.currentSelectFeature?.parent?.feature?.ctx?.editStop();
            this._removeSelectStyle();
            this.currentSelectFeature = null;
        }
    }

    _initClickEvent() {
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        this.handler.setInputAction(
            this._onSelectFeature.bind(this),
            Cesium.ScreenSpaceEventType.LEFT_CLICK
        );
    }
}
