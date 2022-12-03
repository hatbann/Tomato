const input = $('input');
const btn = $('#tomatoBtn');
const pinataOpen = $('.open');
const pinataClosed = $('.closed');
const hearts = document.querySelectorAll('.heart');
const form = $('#tomato_form');
const ul = $('.tomato_ul');
let leftnum = $('#leftNum');
const poster = $('#policePagePoster');
const cancelBtn = $('#disappearAgainBtn');
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
  let tomato = $('#throwtomato');
  tomato_y = tomato.offset().top;
  console.log(tomato_y);
  tomatos.push(tomatoRef);
  tomatoRef = '';
  tomatoNum++;
  input.val('');
  leftnum.text(tomatoNum);
  tomato.removeClass('transparent');
  tomato.stop().animate({
    top : "+140"
  },1500);
  setTimeout(function(){
    tomato.addClass('transparent');
    tomato.css({
      "position" : "absoulte",
      "top": "370px"
    })
  },2000);
  if (tomatoNum === 3) {
    console.log(tomatos);
    console.log('끝!');
    const numDiv = $('#num');
    numDiv.text('');
    setTimeout(goTomato4, 2000);
  }
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

function goIntro() {
  location.replace('./tomatoIntro.html');
}

function reset() {
  window.location.href = window.location.href;
}

//피나타 사라지게 하기
$('.pinata').click(function (e) {
  let pinata = $(e.currentTarget);
  pinata.addClass('transparent');
});

$('#land').click(function(e){
  alert('이건 사라지지않아요! 다음장으로 넘어가주세요!');
  
});

$('#tapPage').click(function(e){
  goTomato2();
})




$('#star').click(function(e){
  let star = $('#star');
  let xBtn = $('#xBtn');
  let msg = $('#messege');

  star.addClass('transparent');
  xBtn.removeClass('transparent');
  msg.removeClass('transparent');
});

$('#xBtn').click(function(e){
  let star = $('#star');
  let xBtn = $('#xBtn');
  let msg = $('#messege');

  star.removeClass('transparent');
  xBtn.addClass('transparent');
  msg.addClass('transparent');
})
/* ------------페이지 이동 -------------*/
function goTomato1() {
  location.replace('./tomato1.html');
}

function goTapto() {
  location.replace('./tapto.html');
}

function goTomato2(){
  location.replace('./tomato2.html');
}

function goTomato3() {
  location.replace('./tomato3.html');
}

function goTomato4() {
  location.replace('./tomato4.html');
}

function goCongrat() {
  location.replace('./Congratulation.html');
}

function goIntro() {
  location.replace('./tomatoIntro.html');
}
