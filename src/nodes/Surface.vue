<template>
     <rect 
     ref="surface" 
     transform="translate(0, 0)" 
     id="surface" 
     x="-80" 
     y="-80" 
     :width="width+80" 
     :height="height+80" 
     fill="url(#grid)" 
     @mousemove="onMouseMove"
     @mousedown="onMouseDown"
     @mouseup="onMouseUp"
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
            required: true
        },
        height: {
            type: Number,
            required: true
        }
    },
    data: () => ({
        gridCellH: 80,
        gridCellW: 80
    }),
    methods: {
        onDrag(evt) {
            this.updatePosition(evt)
            let dx = this.X % this.gridCellW
            let dy = this.Y % this.gridCellH
            document.getElementById('graph').setAttribute('transform', 'translate('+this.X+','+this.Y+')')
            this.$refs['surface'].setAttribute('transform', 'translate('+dx+','+dy+')')
        },

    }
    
}
</script>