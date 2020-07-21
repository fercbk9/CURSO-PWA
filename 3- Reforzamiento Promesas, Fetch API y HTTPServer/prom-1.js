/*function sumarUno( numero, callback ){
    return setTimeout( function() {
        callback(numero + 1);
    },800);
}*/

function sumarUno( numero, callback ){
    if(numero >= 7){
        callback('Numero demasiado alto');
        return;
    }
    setTimeout( function() {
        callback(null,numero + 1);
    },800);
}

/*sumarUno(5,function ( nuevoValor) {
    console.log(nuevoValor);
});

sumarUno(5,function ( nuevoValor ) {
    sumarUno(nuevoValor, function( nuevoValor2 ){
        console.log(nuevoValor2);
    });
});

sumarUno(5,function ( nuevoValor ) {
    sumarUno(nuevoValor, function( nuevoValor2 ){
        sumarUno(nuevoValor2, function( nuevoValor3 ){
            console.log(nuevoValor3);
        });
    });
});*/

sumarUno(5,function (error, nuevoValor ) {
    if(error){
        console.log(error);
        return;
    }
    sumarUno(nuevoValor, function(error, nuevoValor2 ){
        if(error){
            console.log(error);
            return;
        }
        sumarUno(nuevoValor2, function(error, nuevoValor3 ){
            if(error){
                console.log(error);
                return;
            }
            console.log(nuevoValor3);
        });
    });
});