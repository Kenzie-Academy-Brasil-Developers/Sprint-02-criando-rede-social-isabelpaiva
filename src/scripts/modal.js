

function renderModal() {
    const modal = document.querySelector('.modal__container')
    const buttons = document.querySelectorAll('.button-open-post')
    
  
    for(let i = 0; i < buttons.length; i++) {
      const button = buttons[i]
  
      button.addEventListener('click', () => {
        const modalContent = createModal(button.dataset.id)

        modal.innerHTML = ''
        modal.appendChild(modalContent)
        modal.showModal()
        closeModal()
      })
    }
  }
  
renderModal()

function createModal(id){
    const modalContainer = document.createElement('div')
    const modalTitle = document.createElement('h2')
    const modalDescription = document.createElement('p')
    const modalClose = document.createElement('button')

    let element = []

    console.log(id)

    for (let i =0; i < posts.length; i++){
        if (posts[i].id != Number){
            element = posts[i]
        }
    }
    
    modalContainer.classList.add('div__modal')

    modalTitle.innerText = element.title
    modalTitle.classList.add('modal__title')

    modalDescription.innerText = element.text
    modalDescription.classList.add('modal__description')
  
    modalClose.innerText = 'Ver Menos'
    modalClose.classList.add('modal__btn')

    modalContainer.append(modalTitle, modalDescription, modalClose)

    console.log(modalTitle)
    console.log(element)

    return modalContainer
}

function closeModal(){
    const modal = document.querySelector('.modal__container')
    const closeBtn = document.querySelector('.modal__btn')

    closeBtn.addEventListener('click', () =>{
        modal.close()
    })
}