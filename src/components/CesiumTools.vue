<!-- Cesium Tools -->
<template>
    <div class="cesium-tools">
        <div class="cesium-tools-btn" @click="resetZoomView">H</div>
        <div class="cesium-tools-btn" @click="resetPitch">L</div>
        <div class="cesium-tools-btn" @click="changeZoomLevel(1)">+</div>
        <div class="cesium-tools-btn">{{ currentLevel }}</div>
        <div class="cesium-tools-btn" @click="changeZoomLevel(-1)">-</div>
    </div>
</template>

<script>
import mapSdk from '../utils/MapSdk';

export default {
    data() {
        return {
            currentLevel: 2,
        };
    },

    components: {},

    methods: {
        resetZoomView() {
            mapSdk.resetZoomView();
        },
        resetPitch() {
            mapSdk.resetPitch();
        },
        changeZoomLevel(zoom) {
            const newZoomLevel = this.currentLevel + zoom;
            if (newZoomLevel < 1 || newZoomLevel > 24) return;
            this.currentLevel = newZoomLevel;
            mapSdk.zoomLevel(newZoomLevel);
        },
        _zoomChanged() {
            const height = Math.ceil(mapSdk.viewer.camera.positionCartographic.height);
            this.currentLevel = +mapSdk.heightToZoom(height);
        },
    },

    mounted() {
        mapSdk.viewer.camera.moveEnd.addEventListener(this._zoomChanged);
    },
};
</script>
<style lang="scss" scoped>
.cesium-tools {
    position: fixed;
    top: 20px;
    left: 20px;
    display: flex;
    flex-direction: column;
    border-top: 1px solid #d3d3d3;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    .cesium-tools-btn {
        display: block;
        width: 30px;
        height: 30px;
        border-bottom: 1px solid #d3d3d3;
        background-color: #fff;
        line-height: 30px;
        text-align: center;
        cursor: pointer;
    }
}
</style>
