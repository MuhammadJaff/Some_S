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
    document.querySelector('.submit_btn').addEventListener('click',(e)=>{
        e.preventDefault();
        var email = document.querySelector('.email').value;
        var nameOf = document.querySelector('.name_input').value;
        var message = document.querySelector('.message').value;
        var subject = document.querySelector('.subject').value;
        console.log(email, nameOf, subject, message);
        Email.send({
            Host : "smtp.gmail.com",
            Username : "muhammadjaff04@gmail.com",
            Password : "xysycnbnmshocrcx",
            To : 'muhammadjaff04@gmail.com',
            From : email,
            Subject : subject,
            Body : `Mail: ${email } From: ${nameOf}, Subject: ${subject} message: ${message}`
        })
        .then(msg => alert(msg));
    })
})();