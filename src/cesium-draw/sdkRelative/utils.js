import { geojsonTypes } from '../constants';
import { pointSelectStyle, pointStyle } from './customStyle';

export const getCesiumLngLag = p => {
    const pick = window.viewer.scene.pick(p);
    const ray = window.viewer.camera.getPickRay(p);
    const position = window.viewer.scene.globe.pick(ray, window.viewer.scene);
    if (!position) return null;
    const cartographic = Cesium.Cartographic.fromCartesian(position);
    const lat = Cesium.Math.toDegrees(cartographic.latitude);
    const lng = Cesium.Math.toDegrees(cartographic.longitude);
    const height = window.viewer.camera.positionCartographic.height / 1000;
    return { lng: Number(lng), lat: Number(lat), height: Number(height) };
};

export const getCesiumEntity = e => {
    if (!e) return null;
    const pointPosition = e.endPosition || e.position;
    const pick = window.viewer.scene.pick(pointPosition) || {};
    const { lng, lat, height } = getCesiumLngLag(pointPosition) || {};
    if (!lng || !lat || !height) return null;
    pick.clickLngLat = [lng, lat, height];
    pick.entityList = window.viewer?.scene.drillPick(pointPosition);
    return pick;
};

export const getLngLatDifference = (startPosition, endPosition) => {
    const startLnglat = getCesiumLngLag(startPosition);
    const endLnglat = getCesiumLngLag(endPosition);
    if (!startLnglat || !endLnglat) return null;
    return {
        lng: startLnglat.lng - endLnglat.lng,
        lat: startLnglat.lat - endLnglat.lat,
    };
};

function changePointStyle(childrens, isSelect) {
    const style = isSelect ? pointSelectStyle : pointStyle;
    childrens.forEach(children => {
        Object.keys(style).forEach(key => {
            children.point[key] = style[key];
        });
    });
}

export const changeEntityStyle = (entity, isSelect) => {
    if (!entity) return;
    const { geojsonType } = entity.feature;
    switch (geojsonType) {
        case geojsonTypes.POINT:
            changePointStyle(entity._children, isSelect);
            break;

        default:
            break;
    }
};

export const moveFeature = (entity, position) => {
    const ray = window.viewer.camera.getPickRay(position);
    const cartesian = window.viewer.scene.globe.pick(ray, window.viewer.scene);
    entity._children.forEach(children => {
        switch (children.featureType) {
            case geojsonTypes.POINT:
                children.position = cartesian;
                break;

            default:
                break;
        }
    });
};

export const updateFeature = (entity, position) => {
    if (!entity) return;
    const { geojsonType } = entity.feature;
    const lngLat = getCesiumLngLag(position);
    switch (geojsonType) {
        case geojsonTypes.POINT:
            entity.feature.coordinates = [lngLat.lng, lngLat.lat];
            entity.feature.drawStep = [[lngLat.lng, lngLat.lat]];
            break;

        default:
            break;
    }
};
