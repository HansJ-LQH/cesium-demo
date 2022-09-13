<!-- 倾斜摄影工具条 -->
<template>
    <div class="tilt-photography-tools" :class="transformName">
        <div class="title">加载倾斜摄影</div>
        <el-table :data="currentList" border class="list-table" style="width: 100%">
            <el-table-column prop="index" label="序号" align="center" width="50"> </el-table-column>
            <el-table-column label="名称" width="180">
                <template slot-scope="scope">
                    <div
                        :title="scope.row.label"
                        class="text-overflow-ellipsis"
                        style="width:180px"
                    >
                        {{ scope.row.label }}
                    </div>
                </template>
            </el-table-column>
            <el-table-column prop="uploadTime" label="上传时间" align="center" width="80">
            </el-table-column>
            <el-table-column label="操作" width="50">
                <template slot-scope="scope">
                    <el-button @click="clickItem(scope.row)" type="text" size="small"
                        >查看</el-button
                    >
                </template>
            </el-table-column>
        </el-table>
        <el-pagination
            background
            layout="prev, pager, next"
            :page-size="20"
            :total="paginationTotal"
            @current-change="currentPageIndexChange"
        >
        </el-pagination>
        <div class="close-btn" @click="closeTiltPhotographyTools" v-if="transformName === 'L2R'">
            &lt;
        </div>
        <div class="close-btn" @click="closeTiltPhotographyTools" v-else>
            &gt;
        </div>
    </div>
</template>

<script>
import mapSdk from '../utils/MapSdk';

export default {
    name: 'TiltPhotography',
    data() {
        return {
            cesium3DTilesetList: [
                {
                    label: '高桥',
                    url: 'https://higis.img.net/b3dm/gaoqiao_b3dm/tileset.json',
                    heightDifference: -45,
                    uploadTime: '2022-9-8',
                    index: 1,
                },
                {
                    label: '江华县',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 2,
                },
                {
                    label: '江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 3,
                },
                {
                    label:
                        '江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 4,
                },
                {
                    label:
                        '江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 5,
                },
                {
                    label: '高桥',
                    url: 'https://higis.img.net/b3dm/gaoqiao_b3dm/tileset.json',
                    heightDifference: -45,
                    uploadTime: '2022-9-8',
                    index: 6,
                },
                {
                    label: '江华县',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 7,
                },
                {
                    label: '江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 8,
                },
                {
                    label:
                        '江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 9,
                },
                {
                    label:
                        '江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 10,
                },
                {
                    label: '高桥',
                    url: 'https://higis.img.net/b3dm/gaoqiao_b3dm/tileset.json',
                    heightDifference: -45,
                    uploadTime: '2022-9-8',
                    index: 11,
                },
                {
                    label: '江华县',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 12,
                },
                {
                    label: '江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 13,
                },
                {
                    label:
                        '江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 14,
                },
                {
                    label:
                        '江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 15,
                },
                {
                    label: '高桥',
                    url: 'https://higis.img.net/b3dm/gaoqiao_b3dm/tileset.json',
                    heightDifference: -45,
                    uploadTime: '2022-9-8',
                    index: 16,
                },
                {
                    label: '江华县',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 17,
                },
                {
                    label: '江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 18,
                },
                {
                    label:
                        '江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 19,
                },
                {
                    label:
                        '江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 20,
                },
                {
                    label: '高桥',
                    url: 'https://higis.img.net/b3dm/gaoqiao_b3dm/tileset.json',
                    heightDifference: -45,
                    uploadTime: '2022-9-8',
                    index: 21,
                },
                {
                    label: '江华县',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 22,
                },
                {
                    label: '江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 23,
                },
                {
                    label:
                        '江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 24,
                },
                {
                    label:
                        '江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村江华县白芒营镇小贝村',
                    url: 'https://higis.img.net/b3dm/3D_Unknown/tileset.json',
                    heightDifference: -270,
                    uploadTime: '2022-9-8',
                    index: 25,
                },
            ],
            currentPageIndex: 0,
            transformName: '',
        };
    },
    computed: {
        paginationTotal() {
            return this.cesium3DTilesetList.length;
        },
        currentList() {
            const startIndex = this.currentPageIndex * 20;
            return this.cesium3DTilesetList.slice(startIndex, startIndex + 20);
        },
    },
    components: {},

    methods: {
        clickItem(options) {
            mapSdk.add3DTileset(options);
        },
        currentPageIndexChange(index) {
            this.currentPageIndex = index - 1;
        },
        closeTiltPhotographyTools() {
            this.transformName = this.transformName === 'L2R' ? 'R2L' : 'L2R';
        },
    },
};
</script>
<style lang="scss" scoped>
.tilt-photography-tools {
    position: fixed;
    top: 0;
    left: 0;
    border: 1px solid #d3d3d3;
    background-color: #ffffff;
    padding: 20px;
    transform: translateX(-100%);
    .list-table {
        margin: 20px 0;
    }
    .close-btn {
        position: absolute;
        top: 50%;
        right: -15px;
        background-color: #fff;
        cursor: pointer;
        transform: translateY(-50%);
        height: 100px;
        line-height: 100px;
        width: 16px;
        border-radius: 0 8px 8px 0;
    }
}
.L2R {
    animation: leftToRight 0.5s forwards;
}

@keyframes leftToRight {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(0%);
    }
}
.R2L {
    animation: RightToLeft 0.5s forwards;
}

@keyframes RightToLeft {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>
<style lang="scss">
.el-table .el-table__cell {
    padding: 4px 0;
}
.text-overflow-ellipsis {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}
</style>
