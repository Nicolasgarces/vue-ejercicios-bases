const app = Vue.createApp({
    // template: `
    // <h1> Hola Mundo </h1>
    // <p>{{ Desde app.js }}</p> 
    // `
    //doble llave {{}} para colocar el resultado de una expresion en javascript

    data() {
        return {
            quote: "I'm Batman",
            author: 'Bruce Wayne'
        }
    },
    methods: {
        changeQuote(){
            console.log('Hola Mundo' )
            this.author = 'Nicolas Garces' // para manipular una propiedad usamos el "this." para referenciar que vamos acceder a ella misma
            this.capitalize()
        },
        capitalize(){
            this.quote = this.quote.toUpperCase()

        }
    }
})

app.mount('#myApp') // le decimos a nuestra aplicacion que se monte en el id creado en el html 