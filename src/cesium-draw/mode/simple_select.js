/* eslint-disable class-methods-use-this */
import ModeBase from './ModeBase';
import symbolPublisher from '../sdkRelative/symbolPublisher';
import {
    getCesiumEntity,
    getLngLatDifference,
    changeEntityStyle,
    moveFeature,
    updateFeature,
} from '../sdkRelative/utils';

class SimpleSelect extends ModeBase {
    constructor(mapDraw) {
        super(mapDraw);
        this.modeName = 'simple_select';
        this.isSelect = false;
        this.isEdit = false;
        this.currentSelectFeature = null;
        this.lastSelectFeature = null;
    }

    onSetup() {}

    onClick(e) {
        const entity = getCesiumEntity(e);
        this.isSelect = !!entity?.id?.parent;
        this.currentSelectFeature = this.isSelect ? entity?.id?.parent : null;
        if (this.isSelect) {
            symbolPublisher.symbolSelected(entity.id.parent);
            this.changeCursor('move');
            changeEntityStyle(this.currentSelectFeature, this.isSelect);
            this.currentSelectFeature = entity?.id?.parent;
        } else {
            changeEntityStyle(this.lastSelectFeature, this.isSelect);
        }
        this.lastSelectFeature = this.currentSelectFeature;
    }

    onMouseDown(e) {
        const entity = getCesiumEntity(e);
        const isEqual = entity?.id?.parent?.id === this.currentSelectFeature?.id;
        if (this.isSelect && this.currentSelectFeature && isEqual) {
            this.mapControllerEnable(false);
            this.isEdit = true;
        }
    }

    onMouseMove(e) {
        if (!e) return;
        const entity = getCesiumEntity(e);
        if (!entity) return;
        if (this.isSelect) this.changeCursor(entity.id ? 'move' : 'default');
        else this.changeCursor(entity.id ? 'pointer' : 'default');
        if (this.isEdit) {
            const difference = getLngLatDifference(e.startPosition, e.endPosition);
            moveFeature(this.currentSelectFeature, e.endPosition);
        }
    }

    onMouseUp(e) {
        if (this.isEdit) {
            moveFeature(this.currentSelectFeature, e.position);
            updateFeature(this.currentSelectFeature, e.position);
            this.mapControllerEnable(true);
            this.isEdit = false;
            symbolPublisher.symbolUpdated(this.currentSelectFeature);
        }
    }
}

export default SimpleSelect;
