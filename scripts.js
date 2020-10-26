document.addEventListener('DOMContentLoaded' , () => {
    var button = document.querySelector('button');
    button.addEventListener('click',function(e){
        let text = document.getElementById('email').value;
        let message = document.querySelector('.message');
        if (ValidateEmail(text)) {
            message.textContent = ("Thank You! Your email address " + text + " has been added to our mailing list.");
        }else{
            message.textContent = ("Please enter a valid email address.");
        }
        e.preventDefault();
        
    });
});

function ValidateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return (reg.test(email));
}
