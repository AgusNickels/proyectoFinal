fetch('http://localhost:3005/perros',)
.then(res => res.json())
.then(data => {
    console.log(data);
    const html = data.map(perro => {
       return `<div class='perro'><h3>${perro.raza}</h3><a class='delete-button'>Eliminar</a></div>`;
    }).join('');
    document.querySelector('.main').innerHTML = html;
});

document.addEventListener('click', e =>{
    if(e.target.matches('a')){
        const perro = e.target.closest('div');

        fetch('http://localhost:3005/perros/3', {method: 'DELETE'})
        .then(res => {
            if(res.ok){
                console.log("Funcionó");
            }else{
                console.log("No funcionó");
            }
        })
    }
})