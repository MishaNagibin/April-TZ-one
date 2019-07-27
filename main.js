block1.onmouseover = block1.onmouseout = handler;

function handler(event) {

  if (event.type == 'mouseover' && event.target.id == 'block1') {
    event.target.style.background = 'blue'
  }
   if (event.type == 'mouseover' && event.target.id == 'block2') {
    event.target.style.background = 'red'
  }

   if (event.type == 'mouseover' && event.target.classList.contains("block3")) {
      var block3_1 = document.querySelector("#block3_1");
      var block3_2 = document.querySelector("#block3_2");
      block3_1.style.background = 'purple';
      block3_2.style.background = 'purple';
  }

  if (event.type == 'mouseout') {
    event.target.style.background = ''
  }

  if (event.type == 'mouseout' && event.target.classList.contains("block3")) {
    var block3_1 = document.querySelector("#block3_1");
    var block3_2 = document.querySelector("#block3_2");
    block3_1.style.background = '';
    block3_2.style.background = '';
  }
}