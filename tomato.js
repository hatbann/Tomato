const input = $('input');
const btn = $('#tomatoBtn');
const pinataOpen = $('.open');
const pinataClosed = $('.closed');
const hearts = document.querySelectorAll('.heart');
const form = $('#tomato_form');
const ul = $('.tomato_ul');
let num = $('#leftNum');
const resetBtn = $('#resetBtn');

const tomatos = [];
let tomatoNum = 0;
let tomatoRef = '';
input.bind('input', getTomato);

btn.bind('click', stackTomato);

function getTomato(e) {
  tomatoRef = e.target.value;
}

function stackTomato(e) {
  e.preventDefault();
  tomatos.push(tomatoRef);
  tomatoRef = '';
  tomatoNum++;
  input.val('');
  console.log(tomatoNum);
  num.text(3 - tomatoNum);
  if (tomatoNum === 3) {
    console.log(tomatos);
    console.log('끝!');
    makeTransparent();
    makeTomatoList(tomatos);
    const numDiv = $('#num');
    numDiv.text('');
  }
}

function makeTransparent() {
  pinataOpen.addClass('transparent');
  pinataClosed.removeClass('transparent');
  ul.removeClass('transparent');
  hearts.forEach(function (heart) {
    $(heart).removeClass('transparent');
  });
}

function makeTomatoList(tomatos) {
  form.addClass('transparent');
  let list1 = document.createElement('li');
  let text1 = document.createTextNode(tomatos[0]);
  list1.appendChild(text1);
  let list2 = document.createElement('li');
  let text2 = document.createTextNode(tomatos[1]);
  list2.appendChild(text2);
  let list3 = document.createElement('li');
  let text3 = document.createTextNode(tomatos[2]);
  list3.appendChild(text3);

  ul.append(list1, list2, list3);
}

function enterPage(){
  location.replace('./tomato.html');
}

function goIntro(){
  location.replace('./tomatoIntro.html');
}

function reset(){
  window.location.href = window.location.href;
}



$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('#BottomButton').fadeOut();
    } else {
      $('#BottomButton').fadeIn();
    }
  });

  $('#BottomButton').click(function () {
    $('html').animate({ scrollTop: $('#footer').offset().top }, 600);
  });
});
