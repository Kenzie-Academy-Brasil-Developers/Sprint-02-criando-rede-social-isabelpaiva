let divContainer = document.querySelector('.container-div')
let ulPost = document.createElement('ul')
ulPost.classList.add('ulPost')
divContainer.append(ulPost)


                          //posts
function criarCardPostFeed(element){

  for (let i = 0; i < element.length; i++){

      // console.log(element[i].user)
      let liPost = document.createElement('li')
      liPost.classList.add('lista-posts')
      ulPost.appendChild(liPost)

      for (let j = 0; j < users.length; j++){
        if (users[j].id == element[i].user){
          
          let divUser = document.createElement('div')
          liPost.appendChild(divUser)
          divUser.classList.add('divUser')


          let userPhoto = document.createElement('img')
          divUser.appendChild(userPhoto)
          userPhoto.src = users[j].img
          userPhoto.classList.add('userPhoto')
          
          let divUsuario = document.createElement('div')
          divUsuario.classList.add('divUsuario')
          divUser.appendChild(divUsuario)

          let nameUser = document.createElement('p')
          divUsuario.appendChild(nameUser)
          nameUser.innerText = users[j].user
          nameUser.classList.add('nameUser')

          let stackUser = document.createElement('p')
          divUsuario.appendChild(stackUser)
          stackUser.innerText = users[j].stack
          stackUser.classList.add('stackUser')


          
        }
      
      }
      
      let nameId = document.createElement('h4')
      nameId.classList.add('nameId')
      liPost.appendChild(nameId)
      nameId.innerText = element[i].title

      let textId = document.createElement('p')
      textId.classList.add('textId')
      liPost.appendChild(textId)
      textId.innerText = element[i].text

      let buttonOpenPost = document.createElement('button')
      buttonOpenPost.classList.add('button-open-post')
      buttonOpenPost.innerText = 'Abrir post'
      liPost.appendChild(buttonOpenPost)
      buttonOpenPost.dataset.id = element[i].id_post

      buttonOpenPost.id = element[i].user



      let iconFavorito = document.createElement('img')
      iconFavorito.classList.add('icon-favorito')
      iconFavorito.src = '/src/assets/img/Vector.png'
        liPost.appendChild(iconFavorito)
        

  }

}
criarCardPostFeed(posts)

