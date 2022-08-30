<template>
    <div class="home">
        <CesiumMap />
        <CesiumTools />
    </div>
</template>

<script>
import CesiumMap from '../components/CesiumMap.vue';
import CesiumTools from '../components/CesiumTools.vue';

export default {
    name: 'Home',
    components: {
        CesiumMap,
        CesiumTools,
    },
};
</script>
<style lang="scss" scoped></style>
