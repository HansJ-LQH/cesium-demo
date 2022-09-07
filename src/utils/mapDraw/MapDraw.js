import Pubsub from 'pubsub-js';
import eventTopics from './eventTopics';
import modes from './modes';
import publisher from './publisher';
import EventHandler from './eventHandler';

const { Cesium } = window;

class MapDraw {
    constructor(options) {
        this.viewer = options.viewer || window.viewer;
        this.drawType = '';
        this.pubsub = Pubsub;
        this.eventTopics = eventTopics;
        this.features = new Map();
        publisher.init(this);
        this.eventHandler = new EventHandler(this.viewer);
    }

    getPositionFeature(position) {
        const entityList = this.viewer.scene.drillPick(position);
        if (entityList.length > 0 && entityList[0].id?.parent) return entityList[0].id?.parent;
        return null;
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
}

export default MapDraw;
