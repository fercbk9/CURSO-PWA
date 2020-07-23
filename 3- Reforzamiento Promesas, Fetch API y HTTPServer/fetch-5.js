fetch('https://reqres.in/api/users/1000')
.then(resp => {
    if(resp.ok){
        return resp.clone().json();
    }else{
        console.log('No existe el usuario');
    }
})
.then(console.log)
.catch(error => {
    console.log("Error en la peticion");
    console.log(error);
})
