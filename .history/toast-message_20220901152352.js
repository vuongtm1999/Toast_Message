


function toast({ title = '', message = '', type = 'info', duration = 3000}){
    const main = document.getElementById('toast');
    const toast = document.createElement("div");
    const closeBtn = document.getElementsByClassName("toast__close")
    console.log(closeBtn)

    if(main){
        const delay = (duration / 1000).toFixed(2);
        setTimeout(function(){
            main.removeChild(toast);
        }, duration + 1000)

        toast.classList.add("toast", `toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`

        toast.innerHTML = `
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
                        `

        
        main.appendChild(toast)
    }



    

}