new Vue({ 
    el: '#app',
    data: {
        message: 'salut',
        link: 'https://www.youtube.com/?gl=FR&hl=fr',
        title: 'test rappel de variable',
        cls: 'success',
        persons: ['séBAstien','Viande','Hakim']
    },
    methods: {
        close: function() {
          this.success = false  
        },
        style: function() {
            if(this.success){
                return {background: "green"}
            }else {
                return {background: "red"}
            }
        }
    },
})