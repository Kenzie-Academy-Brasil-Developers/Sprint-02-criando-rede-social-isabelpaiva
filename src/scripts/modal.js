

function renderModal() {
    const modal = document.querySelector('.modal__container')
    const buttons = document.querySelectorAll('.button-open-post')
    
  
    for(let i = 0; i < buttons.length; i++) {
      const button = buttons[i]
  
      button.addEventListener('click', () => {
        const modalContent = createModal(button.dataset.id)

        modal.innerHTML = ' '
        modal.appendChild(modalContent)
        modal.showModal()
        closeModal()
      })
    }
  }
  
renderModal()

function createModal(id){

    //USER
    let divImg = document.createElement('div')
   let divUser = document.createElement('div')
   const userImg = document.createElement('img')
   const userName = document.createElement('h2')
   const userStack = document.createElement('p')

    //POST
    const modalClose = document.createElement('button')
    const modalContainer = document.createElement('div')
    const modalTitle = document.createElement('h2')
    const modalDescription = document.createElement('p')
    
 

    let element = {}
    let user = {}

    for (let i =0; i < posts.length; i++){
        if (posts[i].id_post === Number(id)){
            element = posts[i]
        }

    }

    for (let i =0; i < users.length; i++){
      if (users[i].id === Number(element.user)){
          user = users[i]
      }
    }

    modalContainer.classList.add('div__modal')


    //USER
    userName.innerText = user.user
    userName.classList.add('userName')

    userStack.innerText = user.stack
    userStack.classList.add('userStack')

    userImg.src = user.img
    userImg.classList.add('userImg')

    //POST
    modalTitle.innerText = element.title
    modalTitle.classList.add('modal__title')

    modalDescription.innerText = element.text
    modalDescription.classList.add('modal__description')
  
    modalClose.innerText = 'X'
    modalClose.classList.add('modal__btn')

    divImg.appendChild(userImg)
    divUser.append(userName, userStack)
   

    modalContainer.append(divImg,divUser, modalTitle, modalDescription, modalClose, )

    return modalContainer
}

function closeModal(){
    const modal = document.querySelector('.modal__container')
    const closeBtn = document.querySelector('.modal__btn')

    closeBtn.addEventListener('click', () =>{
        modal.close()
    })
}
