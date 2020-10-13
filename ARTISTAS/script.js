function lit() {
    let name= prompt("¿Quién es este artista?");
    let nombre = document.getElementById("nombre");
    
    let generoMusical= prompt("¿De qué genero es este artista?");
    let genero = document.getElementById("genero");

    let NacionalidadL= prompt("¿Cúal es la nacionalidad de este artista?");
    let nacionalidad = document.getElementById("nacionalidad");

    let cancionL= prompt("Di el nombre de alguna cancion de este artista");
     let cancion = document.getElementById("cancion");

    nombre.innerHTML="<i>"+ name + "</i>"
    genero.innerHTML="<i>"+ generoMusical + "</i>"
    nacionalidad.innerHTML="<i>"+ NacionalidadL + "</i>"
    cancion.innerHTML="<i>"+ cancionL + "</i>"
}
function tdh() {
    let name= prompt("¿Quién es este artista?");
    let nombre = document.getElementById("Nombre");
    let generoM= prompt("¿De qué genero es esta artista?");
    let gener = document.getElementById("Musica");
    let Pais= prompt("¿Cúal es la nacionalidad de este artista?");
    let pais = document.getElementById("pais");

    let cancionL= prompt("Di el nombre de alguna cancion de este artista");
     let cancion = document.getElementById("Cancion");

    nombre.innerHTML="<i>"+ name + "</i>"
    gener.innerHTML="<i>"+ generoM + "</i>"
    pais.innerHTML="<i>"+ Pais + "</i>"
    cancion.innerHTML="<i>"+ cancionL + "</i>"
}
function khea() {
    let name= prompt("¿Quién es este artista?");
    let nombre = document.getElementById("name");
    
    let generoMusical= prompt("¿De qué genero es este artista?");
    let genero = document.getElementById("music");

    let NacionalidadL= prompt("¿Cúal es la nacionalidad de este artista?");
    let nacionalidad = document.getElementById("country");

    let cancionL= prompt("Di el nombre de alguna cancion de este artista");
     let cancion = document.getElementById("song");

    nombre.innerHTML="<i>"+ name + "</i>"
    genero.innerHTML="<i>"+ generoMusical + "</i>"
    nacionalidad.innerHTML="<i>"+ NacionalidadL + "</i>"
    cancion.innerHTML="<i>"+ cancionL + "</i>"
}