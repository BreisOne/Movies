console.log('hola mundo')

const getUserAll = new Promise ((todoBien, todoMal)=>{
    // llamar a un api
    // timer dentro de javascrip
        // setInterval
        setTimeout(function(){
            // luego de 3 segundo
            todoBien('Todo mal :(');
        }, 5000)
    });
const getUser = new Promise ((todoBien, todoMal)=>{
    // llamar a un api
    // timer dentro de javascrip
        // setInterval
        setTimeout(function(){
            // luego de 3 segundo
            todoBien('Todo mal :(');
        }, 3000)
    });
// Ejecutar la promesa y manejar el estado de éxito y falla de la promesa
// getUser
//     .then(function todoBien(){
//         console.log('Todo esta bien en la vida')
//     })
//     .catch(function todoMal(msg){
//         console.log(msg)
//     });

// Ejecutar multiples promesas

Promise.all([
    getUser,
    getUserAll,
])
.then(function todoBien(msg){
    console.log(msg)
})
.catch(function todoMal(msg){
    console.log(msg)
})

// Método .race solo se ejecuta la promesa que termine primero
Promise.race([
    getUser,
    getUserAll,
])
.then(function todoBien(msg){
    console.log(msg)
})
.catch(function todoMal(msg){
    console.log(msg)
})
