import Pubsub from 'pubsub-js';
import eventTopics from './eventTopics';
import modes from './modes';
import publisher from './publisher';

const { Cesium } = window;

class MapDraw {
    constructor(options) {
        this.viewer = options.viewer || window.viewer;
        this.drawType = '';
        this.pubsub = Pubsub;
        this.eventTopics = eventTopics;
        this.features = new Map();
        publisher.init(this);
        this._initClickEvent();
    }

    changeMode(mode, options = {}) {
        this.drawType = mode;
        const drawHandler = modes[mode](this);
    }

    removeFeature(id) {
        const parent = this.features.get(id);
        if (parent) {
            parent?._children?.forEach(child => {
                this.viewer.entities.remove(child);
            });
            this.viewer.entities.removeById(id);
        }
        this.features.delete(id);
    }

    _onSelectFeature(e) {
        const entityList = this.viewer.scene.drillPick(e.position);
        if (entityList.length > 0 && entityList[0].id?.parent)
            publisher.featureSelected(entityList[0].id?.parent);
    }

    _initClickEvent() {
        this.handler = new Cesium.ScreenSpaceEventHandler(this.viewer.scene.canvas);
        this.handler.setInputAction(
            this._onSelectFeature.bind(this),
            Cesium.ScreenSpaceEventType.LEFT_CLICK
        );
    }
}

export default MapDraw;
