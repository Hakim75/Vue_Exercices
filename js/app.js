let vm  = new Vue({
    el: "#app",
    data: {
        seconds : 0 
    },
    mounted: function() {
        this.$interval = setInterval(() => {
            console.log("test")
            this.seconds ++
        },1000)
    },
    destroyed: function(){
        clearInterval(this.$interval)
    },
})