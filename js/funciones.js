
const lista = document.getElementById("lista")
const cuerpo = document.querySelector("#cuerpo")
const nombreIngresar = document.querySelector("#nombreingresado")
const acordeIngresar = document.querySelector("#acordesingresados")
/*function agregarCancion(){
    let nombre = prompt("Ingrese Nombre del tema:")
    let acordes = prompt("Ingrese acordes:")
    let artista = prompt("Ingrese nombre del Artista")
    nuevaLista.push(new Cancion(nombre, acordes, artista))
        console.table(nuevaLista)

}*/
function agregarCancionRhcp(){
    let input2 = document.querySelector("#nombreingresado").value
    let input3 = document.querySelector("#acordesingresados").value
    cancionesRHCP.push(new Cancion(input2, input3))
    localStorage.setItem("nuevascanciones", cancionesRHCP)

}



function buscarCancionRhcp() {
    let input1 = document.querySelector("#nombrecancion").value
    const resultado = cancionesRHCP.find(Cancion => Cancion.nombre === input1)
        if (resultado){
            const li = document.createElement("li")
            li.innerText = resultado.acordes
            lista.append(li)
        } else {
            const li = document.createElement("li")
            li.innerText = "No se encuentra en la lista"
            lista.append(li)
        }
    }


    function mostrarNombresRHCP() {
        const cuerpo = document.querySelector("#cuerpo")
        cuerpo.innerHTML = ""
        cancionesRHCP.forEach(Cancion => {
                        cuerpo.innerHTML += ` <tr>    
                        <td>${Cancion.nombre}</td>
                      </tr>`
            })
            
        }
  
