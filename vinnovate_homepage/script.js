// var mode = 1;
//
// function changeMode(){
//   if(mode===1){
//     mode = 2;
//
//   }else{
//     mode = 1;
//   }
//
// }

var mode;
startbtn();

function changeMode(){
  if(mode===1){
      mode = 2;
    }else{
      mode = 1;
    }
}
//
// function myFunction(){
//   var element = document.body;
//   element.classList.toggle("dark");
//   changeMode();
//   var nav = document.getElementsByTagName('nav');
//   if(mode==1){
//     nav.classList.remove('darknav');
//     nav.classList.add('lightnav');
//   }else{
//     nav.classList.remove('lightnav');
//     nav.classList.add('darknav');
//   }
// }
//
function startbtn(){
  mode = 1;
}

function myFunction(){
  var element = document.body;
  element.classList.toggle("dark");
  var nav = document.getElementsByTagName('nav')[0];
  nav.classList.toggle("darknav");
  changeMode();
  if(mode===1){
    document.getElementById('change-mode').innerHTML = "I want dark mode";
  }else{
    document.getElementById('change-mode').innerHTML = "I want light mode";
  }
}


var TxtRotate = function(el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtRotate.prototype.tick = function() {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

  var that = this;
  var delta = 300 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function() {
    that.tick();
  }, delta);
};

window.onload = function() {
  var elements = document.getElementsByClassName('txt-rotate');
  for (var i=0; i<elements.length; i++) {
    var toRotate = elements[i].getAttribute('data-rotate');
    var period = elements[i].getAttribute('data-period');
    if (toRotate) {
      new TxtRotate(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid white }";
  document.body.appendChild(css);
};
