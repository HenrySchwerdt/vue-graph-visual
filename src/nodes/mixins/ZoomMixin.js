export default {
    data: () => ({
        scale: 1,
        zoomID: 'graph'
    }),
    methods: {
        onWheel(evt) {
            evt.preventDefault()
            this.scale += evt.deltaY * -0.01;

            // Restrict scale
            this.scale = Math.min(Math.max(.125, this.scale), 4);

            
            document.getElementById(this.zoomID).setAttribute('transform', `scale(${this.scale})`)
        }
    }
}