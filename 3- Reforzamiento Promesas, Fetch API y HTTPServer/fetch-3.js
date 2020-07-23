//POST
//'https://reqres.in/api/users'

let usuario = {
    nombre: 'Fernando',
    edad:23
}

fetch('https://reqres.in/api/users',{
    method: 'POST',
    body: JSON.stringify(usuario),
    headers: {
        'Content-Type':'application/json'
    }
})
.then(resp => resp.json())
.then(respObj =>{
    console.log(respObj);
})
.catch(error => {
    console.log("ERROR EN LA PETICION");
    console.log(error);
});
