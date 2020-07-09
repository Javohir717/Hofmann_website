var text = document.querySelector('.text');
var str = text.innerHTML;
text.innerHTML = '';
var count = 0;
var timer;

function print() {
 text.innerHTML += str.charAt(count);
 count++;
 if (str.length <= count) {
  clearInterval(timer);
  slick();
 }
}

timer = setInterval(print, 70);

// form

var btnTop = document.querySelector('.btnTop');
var btnTimer;
btnTop.style.display = 'none';

btnTop.addEventListener('click', toTop);

function toTop() {
 var scrolled = window.pageYOffset;
 if (scrolled > 0) {
  scrolled -= 100;
  scrollTo(0, scrolled);
  btnTimer = setTimeout(toTop, 25);
 }
}

window.addEventListener('scroll', function () {
 if (pageYOffset > 1200) {
  btnTop.style.display = 'block';
 } else {
  btnTop.style.display = 'none';
 }
 console.log(pageYOffset);
});

var hidden = document.querySelector('.hidden');
var eyeClosed = document.querySelector('.eye_closed');
var eyeOpened = document.querySelector('.eye_opened');

hidden.addEventListener('click', function () {
 // hide.type = 'text'; 
 // eyeClosed.style.display = 'none';
 if (hidden.type == 'text') {
  // hide.type = 'password';
  eyeClosed.style.display = 'block';
  eyeOpened.style.display = 'none';
 }
 else{
  hidden.type = 'password';  
  eyeOpened.style.display = 'block';  
 }
});

eyeClosed.addEventListener('click', function () {
 if (hidden.type == 'text') {
  hidden.type = 'password';
  eyeClosed.style.display = 'none';
  eyeOpened.style.display = 'block';
 }
 else{
  hidden.type = 'password';  
  eyeOpened.style.display = 'block';  
 }
});

eyeOpened.addEventListener('click', function () {
 if (hidden.type == 'password') {
  hidden.type = 'text';
  eyeClosed.style.display = 'block';
  eyeOpened.style.display = 'none';
 }
 else{
  hidden.type = 'text';  
  eyeOpened.style.display = 'block';  
 }
})

$('.form__send').click(function (e) {
 e.preventDefault()
})

// nav

// $(document).ready(function () {
//     var header = $('header');
//     var nav = $('header .nav');
    
//     $(window).scroll(function () {
//         if ($(this).scrollTop() >= header.innerHeight() - nav.innerHeight()) {
//             nav.addClass('fixed-top').css('opacity', 0).animate({
//                 opacity: 1,
//             }, 600);
//         }
//     })
// });


