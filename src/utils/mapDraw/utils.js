export const getCesiumLngLag = p => {
    const pick = window.viewer.scene.pick(p);
    const ray = window.viewer.camera.getPickRay(p);
    const position = window.viewer.scene.globe.pick(ray, window.viewer.scene);
    const cartographic = Cesium.Cartographic.fromCartesian(position);
    const lat = Cesium.Math.toDegrees(cartographic.latitude);
    const lng = Cesium.Math.toDegrees(cartographic.longitude);
    const height = window.viewer.camera.positionCartographic.height / 1000;
    return { lng, lat, height };
};
