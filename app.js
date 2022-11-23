const app = Vue.createApp({
    template: `
    <h1> Hola Mundo </h1>
    <p>Desde app.js</p>
    `
})

app.mount('#myApp') // le decimos a nuestra aplicacion que se monte ahí en el id creado en el html 