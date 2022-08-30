<!-- 倾斜摄影工具条 -->
<template>
    <div class="tilt-photography-tools" v-if="tiltPhotographyVisibility">倾斜摄影工具条</div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'TiltPhotography',
    data() {
        return {};
    },
    computed: {
        ...mapState({
            tiltPhotographyVisibility: state => state.tiltPhotographyVisibility || false,
        }),
    },
    components: {},

    methods: {},
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
}
</style>
