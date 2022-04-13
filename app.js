(function(){
    [...document.querySelectorAll(".control")].forEach(button=>{
        button.addEventListener('click',function(){
            document.querySelector('.btn_active').classList.remove('btn_active');
            this.classList.add('btn_active');
            document.querySelector('.active').classList.remove('active');
            document.getElementById(button.dataset.id).classList.add('active'); 
        })
    })
    document.querySelector(".theme_btn").addEventListener('click',()=>{
        document.body.classList.toggle("light_mode");
    });
    [...document.querySelectorAll(".like")].forEach(like => {
            like.addEventListener('click',()=>{
                alert("Thank you!")
            });
    });
    [...document.querySelectorAll(".dislike")].forEach(dlike => {
        dlike.addEventListener('click',()=>{
            alert("Please send feedback")
        })
    });
})();