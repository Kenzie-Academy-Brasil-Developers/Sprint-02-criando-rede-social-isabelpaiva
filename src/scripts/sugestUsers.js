//ID dos usuários sugeridos para seguir
const sugestUsers = [3, 7, 6];

const sugestUserUl = document.getElementsByClassName('ul-sugest')

let div = document.querySelector('.sugestUsersContainer')
let ul = document.createElement('ul')
ul.classList.add('ul-sugest')
div.appendChild(ul)

function criarCardSugestUsers(user){    

        let li = document.createElement('li')
        li.classList.add('lista-sugest')
        ul.appendChild(li)

        

        let img = document.createElement('img')
        img.src = user.img
        li.appendChild(img)
        img.classList.add('imgUsuario')
        console.log(img)

        let div = document.createElement('div')
        div.classList.add('div-card')
        li.appendChild(div)

        let nomeUsuario = document.createElement('p')
        li.classList.add('nomeUsuario')
        nomeUsuario.innerText = user.user
        div.appendChild(nomeUsuario)

        let stackUsuario = document.createElement('small')
        stackUsuario.classList.add('stackUsuario')
        stackUsuario.innerText = user.stack
        div.appendChild(stackUsuario)

        let buttonSeguirUsuario = document.createElement('button')
        buttonSeguirUsuario.classList.add('btn-card')
        buttonSeguirUsuario.innerText = 'Seguindo'
        li.appendChild(buttonSeguirUsuario)
        ul.appendChild(li)  
}

function listSugestUser(){
   
    users.forEach(element => {
        if(element.id == 3 || element.id == 7 || element.id == 6){
            criarCardSugestUsers(element)
        }
    })
}

listSugestUser()

