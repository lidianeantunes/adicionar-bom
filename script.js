// function mostrarmouse(event){
//     console.log(`eixo X: ${event.pagex} Eixo Y ${event.pageY}`)
//     if(event.pageX == 3 && pageY == 6){
//         alert("por favor nao sai. tem boblo")
//     }
// }
// window.onmousemove = mostrarmouse;

let email = document.querySelectorAll('input');

let botao = document.querySelector('button');

function cadastrar(){
    localStorage.setItem('email', email.vale);
}
butao.onclick = cadastrar;
