const main = document.querySelector(".main_content");
const section = document.querySelectorAll(".section");
const controls = document.querySelector(".controls");
const control = document.querySelectorAll(".control");
    
function PageTrans(){
    for(i = 0; i < control.length; i++){
        control[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll(".btn_active");
            currentBtn[0].className = currentBtn[0].className.replace('btn_active', '');
            this.className += ' btn_active';
         })
    }
}

PageTrans();