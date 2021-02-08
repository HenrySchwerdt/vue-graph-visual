import MouseEventsMixin from './MouseEventsMixin'
export default {
    mixins: [MouseEventsMixin],
    data: () => ({
        X: 0,
        Y: 0,
    }),
    methods: {
        onDrag(evt){
            this.updatePosition(evt)
            this.$refs['node'].setAttribute('transform', 'translate('+ this.X + ','+ this.Y+ ')')
        },
        updatePosition(evt){
            let dX = this.mouseX - evt.clientX
            let dY = this.mouseY - evt.clientY
            this.X -= dX
            this.Y -= dY
            this.mouseX = evt.clientX
            this.mouseY = evt.clientY
        }
    }
}