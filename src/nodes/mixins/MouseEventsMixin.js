export default {
    data: () => ({
        mouseDown: false,
        mouseX: 0,
        mouseY: 0
    }),
    methods: {
        onMouseDown(evt) {
            if (evt && (evt.which === 2 || evt.which === 4)){
                evt.preventDefault()
                document.getElementById('svg').style.cursor = 'move'
                this.mouseDown = true
                this.mouseX = evt.clientX
                this.mouseY = evt.clientY
            }
        },
        onMouseMove(evt) {
            if(this.mouseDown){
                this.onDrag(evt)
            }
        },
        onMouseLeave(evt) {
            if(this.mouseDown){
                evt.preventDefault()
                this.mouseDown = false
                document.getElementById('svg').style.cursor = 'default'
            }
        },
        onMouseUp(evt) {
            if(this.mouseDown){
                evt.preventDefault()
                this.mouseDown = false
                document.getElementById('svg').style.cursor = 'default'
            }
        },
    }
}