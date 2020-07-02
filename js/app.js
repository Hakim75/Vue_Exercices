let vm  = new Vue({
    el: "#app",
    data: {
        red: true,
        green: false,
        success:true,
        message:'',
        firstname: 'Jean',
        lastname: 'Facteur'
       
    },
    computed: { //computed permet de n'utiliser le code que quand la variable a l'intérieur est modifiée au contraire de méthods.
        cls: function(){
            console.log("cls called")
           return this.success === true ? "success" : "error"
        },
        testColor: function() {
            if (this.red) {
                this.green = true
                this.red = false
            } else {
                this.green = false
                this.red = true
            }
        },
        fullname: {
        get: function(){
            return this.firstname + ' ' + this.lastname
        },
        set: function(value){
            let parts = value.split(" ")
            this.firstname = parts[0]
            this.lastname = parts[1]
            
        }
    }
   
}})