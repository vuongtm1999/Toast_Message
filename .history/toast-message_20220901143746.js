


function toast({ title = '', message = '', type = 'info', duration = 3000}){
    const main = document.getElementById('toast');
    console.log(message)

    if(main){
        const toast = document.createElement("div");
        main.innerHTML = `<div class="toast toast--${type}">
                            <div class="toast__icon">
                            <i class="fas fa-check-circle"></i>
                            </div>
                            <div class="toast__body">
                            <h3 class="toast__title">${title}</h3>
                            <p class="toast__msg">${message}ssss</p>
                            </div>
                            <div class="toast__close">
                            <i class="fas fa-times"></i>
                            </div>
                        </div>`

        
        main.appendChild(toast)
    }

    

}