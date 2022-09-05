export const classes = {
    CONTROL_BASE: 'mapboxgl-ctrl',
    CONTROL_PREFIX: 'mapboxgl-ctrl-',
    CONTROL_BUTTON: 'mapbox-gl-draw_ctrl-draw-btn',
    CONTROL_BUTTON_LINE: 'mapbox-gl-draw_line',
    CONTROL_BUTTON_POLYGON: 'mapbox-gl-draw_polygon',
    CONTROL_BUTTON_POINT: 'mapbox-gl-draw_point',
    CONTROL_BUTTON_MARKER: 'mapbox-gl-draw_marker',
    CONTROL_BUTTON_CIRCLE: 'mapbox-gl-draw_circle',
    CONTROL_BUTTON_RECTANGLE: 'mapbox-gl-draw_rectangle',
    CONTROL_BUTTON_TRASH: 'mapbox-gl-draw_trash',

    CONTROL_BUTTON_COMBINE_FEATURES: 'mapbox-gl-draw_combine',
    CONTROL_BUTTON_UNCOMBINE_FEATURES: 'mapbox-gl-draw_uncombine',
    CONTROL_GROUP: 'mapboxgl-ctrl-group',
    ATTRIBUTION: 'mapboxgl-ctrl-attrib',
    ACTIVE_BUTTON: 'active',
    BOX_SELECT: 'mapbox-gl-draw_boxselect',
};

export const sources = {
    HOT: 'mapbox-gl-draw-hot',
    COLD: 'mapbox-gl-draw-cold',
};

export const cursors = {
    ADD: 'add',
    MOVE: 'move',
    DRAG: 'drag',
    POINTER: 'pointer',
    NONE: 'none',
};

export const types = {
    POLYGON: 'polygon',
    LINE: 'line_string',
    POINT: 'point',
    CIRCLE: 'circle',
    RECTANGLE: 'rectangle',
    MARKER: 'marker',
    ATTACK_ARROW: 'attack_arrow',
    ARC: 'arc',
    TAILED_ATTACK_ARROW: 'tailed_attack_arrow',
    STRAIGHT_ARROW: 'straight_arrow',
    ELLIPSE: 'ellipse',
    TEXT: 'text',
    CURVE: 'curve',
    SECTOR: 'sector',
    FREEHAND_LINE: 'freehand_line',
    FREEHAND_POLYGON: 'freehand_polygon',
};

export const geojsonTypes = {
    FEATURE: 'Feature',
    POLYGON: 'Polygon',
    LINE_STRING: 'LineString',
    POINT: 'Point',
    FEATURE_COLLECTION: 'FeatureCollection',
    MULTI_PREFIX: 'Multi',
    MULTI_POINT: 'MultiPoint',
    MULTI_LINE_STRING: 'MultiLineString',
    MULTI_POLYGON: 'MultiPolygon',
    CIRCLE: 'Polygon',
    RECTANGLE: 'Polygon',
    MARKER: 'Marker',
    ATTACK_ARROW: 'Polygon',
    ARC: 'LineString',
    TAILED_ATTACK_ARROW: 'Polygon',
    STRAIGHT_ARROW: 'LineString',
    ELLIPSE: 'Polygon',
    TEXT: 'Text',
    CURVE: 'LineString',
    SECTOR: 'Polygon',
    FREEHAND_LINE: 'LineString',
    FREEHAND_POLYGON: 'Polygon',
};

export const modes = {
    DRAW_LINE_STRING: 'draw_line_string',
    DRAW_POLYGON: 'draw_polygon',
    DRAW_POINT: 'draw_point',
    DRAW_CIRCLE: 'draw_circle',
    DRAW_RECTANGLE: 'draw_rectangle',
    SIMPLE_SELECT: 'simple_select',
    DIRECT_SELECT: 'direct_select',
    STATIC: 'static',
    DRAW_MARKER: 'draw_marker',
    DRAW_ATTACK_ARROW: 'draw_attack_arrow',
    DRAW_ARC: 'draw_arc',
    DRAW_TAILED_ATTACK_ARROW: 'draw_tailed_attack_arrow',
    DRAQ_STRAIGHT_ARROW: 'draw_straight_arrow',
    DRAW_ELLIPSE: 'draw_ellipse',
    DRAW_TEXT: 'draw_text',
    DRAW_CURVE: 'draw_curve',
    DRAW_SECTOR: 'draw_sector',
    DRAW_FREEHAND_LINE: 'draw_freehand_line',
    DRAW_FREEHAND_POLYGON: 'draw_freehand_polygon',
};

export const events = {
    CREATE: 'draw.create',
    DELETE: 'draw.delete',
    UPDATE: 'draw.update',
    SELECTION_CHANGE: 'draw.selectionchange',
    MODE_CHANGE: 'draw.modechange',
    ACTIONABLE: 'draw.actionable',
    RENDER: 'draw.render',
    COMBINE_FEATURES: 'draw.combine',
    UNCOMBINE_FEATURES: 'draw.uncombine',
};

export const updateActions = {
    MOVE: 'move',
    CHANGE_COORDINATES: 'change_coordinates',
};

export const meta = {
    FEATURE: 'feature',
    MIDPOINT: 'midpoint',
    VERTEX: 'vertex',
};

export const activeStates = {
    ACTIVE: 'true',
    INACTIVE: 'false',
};

export const interactions = [
    'scrollZoom',
    'boxZoom',
    'dragRotate',
    'dragPan',
    'keyboard',
    'doubleClickZoom',
    'touchZoomRotate',
];

export const measure = {
    DISTANCE_SOURCE: 'mapbox-gl-draw-distance-source',
    DISTANCE_LAYER_POINT: 'mapbox-gl-draw-distance-layer-point',
    DISTANCE_LAYER_LINE: 'mapbox-gl-draw-distance-layer-line',
    AREA_SOURCE: 'mapbox-gl-draw-area-source',
    AREA_LAYER_POINT: 'mapbox-gl-draw-area-layer-point',
    AREA_LAYER_LINE: 'mapbox-gl-draw-area-layer-line',
    AREA_LAYER_POLYGON: 'mapbox-gl-draw-area-layer-polygon',
    POINT_SOURCE: 'mapbox-gl-draw-point-source',
    POINT_LAYER: 'mapbox-gl-draw-point-layer',
};

export const LAT_MIN = -90;
export const LAT_RENDERED_MIN = -85;
export const LAT_MAX = 90;
export const LAT_RENDERED_MAX = 85;
export const LNG_MIN = -270;
export const LNG_MAX = 270;
