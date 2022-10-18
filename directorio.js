let amigos=[];

let btnGuardar=document.querySelector("#btnGuardar");
let btnCancelar=document.querySelector("#btnCancelar");



let lista=document.querySelector(".listaAmigos");
let formulario=document.querySelector("#formulario");

pintar();

function limpiar(){
    formulario[0].value="";
    formulario[1].value="";
    formulario[2].value="";
    formulario[3].value="";
}

function pintar(){
    if(amigos.length>0)
    {
        lista.innerHTML="";
        amigos.forEach((contacto)=>{
            let amigo=document.createElement("div");
            amigo.innerHTML=`<p>${contacto.nombre}</p><button class="muestraDetalles"><input type="hidden" value="${contacto.telefono}"/>Detalles</button>`;
            lista.appendChild(amigo);
        });
        let botones=document.getElementsByClassName("muestraDetalles");
        for (let i = 0; i < botones.length; i++) {
            const element = botones[i];
            element.addEventListener("click",()=>{
                showDetalles(element.children[0].value); 
            });
        }
    }
    else{
        lista.innerHTML="<h2>No tenemos amigos</h2>";
    }    
}

function showDetalles(tel){
    let detalles = document.getElementById("detallesAmigos");
    let amigo = amigos.find(a=>{
        if(a.telefono==tel)
        {
            return a;
        }
    });
    detalles.innerHTML=`<img src="${amigo.foto}" alt="">
    <h3>${amigo.nombre}</h3>
    <p><span>Telefono:</span>${amigo.telefono}</p>
    <p><span>Correo:</span>${amigo.correo}</p>
    <button id="cerrar">cerrar</button>`;
    detalles.classList.remove("oculto");
    cerrar();
}

function cerrar(){
    let cerrar=document.getElementById("detallesAmigos");
    cerrar.addEventListener("click", quitar =>{
        let detalles=document.getElementById("detallesAmigos");
        detalles.classList.add("oculto");
    })

}

btnCancelar.addEventListener("click",(event)=>{
    limpiar();
    event.preventDefault();
})


btnGuardar.addEventListener("click",(event)=>{
    let contacto={
        nombre:formulario["nombre"].value,
        telefono:formulario["telefono"].value,
        correo:formulario["correo"].value,
        foto:formulario["foto"].value
    };

    amigos.push(contacto);
    limpiar();
    pintar();
    event.preventDefault();
    
})