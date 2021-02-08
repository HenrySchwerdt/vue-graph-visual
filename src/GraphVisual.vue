<template>
    <svg id="svg"  :width="width" :height="height" @wheel="onWheel" >
        <defs>
            <pattern id="smallGrid" width="8" height="8" patternUnits="userSpaceOnUse">
            <path d="M 8 0 H 0 V 8" fill="none" stroke="gray" stroke-width="0.5" />
            </pattern>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <rect width="80" height="80" fill="url(#smallGrid)" />
            <path d="M 80 0 H 0 V 80" fill="none" stroke="gray" stroke-width="2" />
            </pattern>
        </defs>
       <Surface :width="width" :height="height" />
        <g id="graph" >
            <GraphNode />
             <GraphNode />
        </g>
    </svg>
</template>


<script>
import GraphNode from './nodes/GraphNode'
import Surface from './nodes/Surface'
import ZoomMixin from './nodes/mixins/ZoomMixin'

export default {
    mixins: [ZoomMixin],
    props: {
        width: {
            type: Number,
            default: 500
        },
        height: {
            type: Number,
            default: 500
        }
    },
    components: {
        GraphNode,
        Surface
    }
    
}
</script>
