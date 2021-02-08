<template>
    <rect
    ref="node" 
    :x="x" 
    :y="y" 
    :width="width" 
    :height="height"  
    fill="#aaaaaa" 
    @mouseup="onMouseUp"
    @mousedown="onMouseDown"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    />
</template>
<script>
import DraggableMixin from './mixins/DraggableMixin'
export default {
    mixins: [DraggableMixin],
    props: {
        width: {
            type: Number,
            default: 50
        },
        height: {
            type: Number,
            default: 50
        },
        x: {
            type: Number,
            default: 0
        },
        y: {
            type: Number,
            default: 0
        }
    }
    
}
</script>