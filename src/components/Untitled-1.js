{
    
    map3DTilesTest() {
        const szTileset = new Cesium.Cesium3DTileset({
            url: new Cesium.Resource({
                url: `https://cityos.sz.gov.cn/gw/TILE_3D_MODEL/sz/shenzhen/tileset.json?time=${Date.now()}`,
                headers: {
                    'szvsud-license-key':
                        'ZBGxP5HNTWsBm9CylbTb/y/fDUZ1tSSOuS7tGiA7R7MgAou3RBv+Cp2oQYrar2Fp',
                },
            }),
            skipLevelOfDetail: true,
            skipLevels: 1,
            skipScreenSpaceErrorFactor: 16,
            immediatelyLoadDesiredLevelOfDetail: false,
            loadSiblings: true,
            cullWithChildrenBounds: true,
            cullRequestsWhileMoving: true,
            cullRequestsWhileMovingMultiplier: 0.01,
            preloadWhenHidden: true,
            progressiveResolutionHeightFraction: 0.1,
            dynamicScreenSpaceErrorDensity: 500,
            dynamicScreenSpaceErrorFactor: 1,
            dynamicScreenSpaceError: true,
            show: true,
        });
        this.viewer.scene.primitives.add(szTileset);
    },

    loadModel(name, lng, lat, src) {
        const position = Cesium.Cartesian3.fromDegrees(lng, lat, 1);
        // 指定姿态
        const hpr = new Cesium.HeadingPitchRoll(
            Cesium.Math.toRadians(89),
            Cesium.Math.toRadians(0),
            Cesium.Math.toRadians(0)
        );
        const orientation = Cesium.Transforms.headingPitchRollQuaternion(position, hpr);
        if (this.viewer.entities.getById(name)) return;
        const entityPoint = this.viewer.entities.add({
            id: name,
            // 自己指定的位置
            position,
            // 使用自己指定的姿态角
            orientation,
            model: {
                uri: `model/xiadong.glb`,
                minimumPixelSize: 1,
            },
            path: {
                resolution: 1,
                material: new Cesium.PolylineGlowMaterialProperty({
                    glowPower: 1.0,
                    color: Cesium.Color.YELLOW,
                }),
                width: 1,
            },
            properties: { name, info: '测试模型带参信息' },
            detailTitle: 'model',
            src,
        });
    }
}