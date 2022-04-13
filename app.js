(function(){
    [...document.querySelectorAll(".control")].forEach(button=>{
        button.addEventListener('click',function(){
            document.querySelector('.btn_active').classList.remove('btn_active');
            this.classList.add('btn_active');
            document.querySelector('.active').classList.remove('active');
            document.getElementById(button.dataset.id).classList.add('active'); 
        })
    })
})();
    function themeChange(){
        let some = document.querySelector(".theme_btn");
        some.addEventListener('click',()=>{
            let boo = document.body;
            boo.classList.toggle('light_mode');
        })
    }
    