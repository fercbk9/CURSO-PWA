function sumarUno( numero ){
    var promesa = new Promise((resolve,reject) => {
        if( numero >= 7){
            reject('Numero demasiado alto');
        }
        setTimeout( function() {
            resolve(numero + 1);
        },800);
    });
    return promesa;
}

/*sumarUno(5).then( nuevoNumero => {
    sumarUno(nuevoNumero).then( nuevoNumero2 => {
        console.log(nuevoNumero2);
    });
});*/


sumarUno(8)
        .then( nuevoValor => console.log(nuevoValor))
        .catch( error => {
            console.log('ERROR EN PROMESA');
            console.log(error);
        });

sumarUno(5)
        .then( sumarUno )
        .then( sumarUno )
        .then( nuevoNumero => {
            console.log(nuevoNumero);
        })
        .catch( error => {
            console.log('ERROR EN PROMESA');
            console.log(error);
        });
