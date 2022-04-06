const main = document.querySelector(".main_content");
const section = document.querySelectorAll(".section");
const controls = document.querySelectorAll(".controls");
const control = document.querySelectorAll(".control");
    
function PageTrans(){
    for(i = 0; i < control.length; i++){
        control[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll(".btn_active");
            currentBtn[0].className = currentBtn[0].className.replace('btn_active', '');
            this.className += ' btn_active';
         })
    }

    main.addEventListener('click',(e)=>{
        const id = e.target.dataset.id;
        if(id){
            controls.forEach(cont=>{
                cont.classList.remove('active');
            })
            e.target.classList.add('active');

            section.forEach(sec=>{
                sec.classList.remove('active');
            })
           
            const elem = document.getElementById(id);
            elem.classList.add('active');
        }
    })
}

PageTrans();