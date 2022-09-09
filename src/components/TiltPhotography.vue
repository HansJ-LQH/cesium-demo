<!-- 倾斜摄影工具条 -->
<template>
    <div class="tilt-photography-tools" v-if="tiltPhotographyVisibility">
        <div class="title">加载倾斜摄影</div>
        <!-- <div class="list">
            <div
                class="list-item"
                v-for="(item, index) in cesium3DTilesetList"
                :key="index"
                @click="clickItem(item)"
            >
                {{ item.label }}
            </div>
        </div> -->
        <el-table :data="cesium3DTilesetList" border style="width: 100%" :row-style="rowStyle">
            <el-table-column type="index" width="50"> </el-table-column>
            <el-table-column prop="label" label="日期" width="180"> </el-table-column>
            <el-table-column prop="uploadTime" label="上传时间" width="80"> </el-table-column>
            <el-table-column label="操作" width="50">
                <template slot-scope="scope">
                    <el-button @click="clickItem(scope.row)" type="text" size="small"
                        >查看</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import mapSdk from '../utils/MapSdk';

export default {
    name: 'TiltPhotography',
    data() {
        return {
            cesium3DTilesetList: [
                {
                    label: '高桥',
                    url: 'https://higis.img.net/b3dm/gaoqiao_b3dm/tileset.json',
                    heightDifference: -45.0,
                    uploadTime: '2022-9-8',
                },
                {
                    label: '江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270.0,
                    uploadTime: '2022-9-8',
                },
                {
                    label: '江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270.0,
                    uploadTime: '2022-9-8',
                },
                {
                    label:
                        '江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270.0,
                    uploadTime: '2022-9-8',
                },
            ],
        };
    },
    computed: {
        ...mapState({
            tiltPhotographyVisibility: state => state.tiltPhotographyVisibility || false,
        }),
    },
    components: {},

    methods: {
        clickItem(options) {
            mapSdk.add3DTileset(options);
        },
    },
};
</script>
<style lang="scss" scoped>
.tilt-photography-tools {
    position: fixed;
    top: 176px;
    left: 70px;
    border: 1px solid #d3d3d3;
    background-color: #ffffff;
    padding: 20px;
    .list {
        margin-top: 10px;
        .list-item {
            cursor: pointer;
            border: 1px solid #d3d3d3;
            padding: 5px 10px;
            margin: 5px 0;
        }
    }
}
</style>
<style lang="scss">
.el-table .el-table__cell {
    padding: 4px 0;
}
</style>
