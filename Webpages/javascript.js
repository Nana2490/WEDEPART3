var year = new Date().getFullYear();

var date = ` Privacy Statement: SheFit Fitness Gym is committed to protecting your personal information. We do not share or sell your details to any third parties.
<br> &copy; Mphatso Phiri Codes ${year}. All Rights Reserved.`;

document.getElementsByTagName('footer')[0].innerHTML = date;

const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "s1.maildns.net",
        Username : "username",
        Password : "password",
        To : 'them@website.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}