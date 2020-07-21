function sumarLento (numero){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve(numero + 1);
        },800);    
    });
}

let sumarRapido = (numero) =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(numero + 1),300);
    });
}

let cosas = [ sumarRapido(10),sumarLento(5),true,'Hola Mundo' ];

sumarLento(5)
        .then(console.log);
sumarRapido(10)
        .then(console.log);

Promise.all(cosas)
.then( respuestas => console.log(respuestas))
.catch(console.log)