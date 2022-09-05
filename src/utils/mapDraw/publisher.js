import Pubsub from 'pubsub-js';
import eventTopics from './eventTopics';

class SymbolPublisher {
    constructor() {
        this.mapDraw = null;
    }

    init(mapDraw) {
        this.mapDraw = mapDraw;
    }

    featureAdded(option) {
        Pubsub.publish(eventTopics.drawInformation, option);
        this.mapDraw.features.set(option.id, option);
    }

    featureSelected(option) {
        Pubsub.publish(eventTopics.graphicsSelected, option);
    }
}

export default new SymbolPublisher();
