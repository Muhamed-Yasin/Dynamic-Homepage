const time = document.getElementById('time');
const greeting = document.getElementById('greeting');
const Name1 = document.getElementById('name');
const focus = document.getElementById('focus');

const showtime = ( ) =>{
    let today = new Date();
    let hour = today.getHours( );
    let mins = today.getMinutes( );
    let secs = today.getSeconds( );

var ampm;
if(hour>=12){
    ampm = 'PM';
    hour = hour - 12;
}
else{
    ampm = 'AM';
}
time.innerHTML =`<b>${hour}:${zero(mins)}:${zero(secs)} ${ampm}</b>`;
console.log(time);
setTimeout(showtime,1000);
}

const setbg = ( ) =>{
    let today = new Date();
    let hour = today.getHours( );
    if(hour<12){
        document.body.style.backgroundImage = "url('bgmorning.jpg')";
        greeting.textContent = 'Good Morning';
    }
    else if (hour < 18){
        document.body.style.backgroundImage = "url('bgevening.jpg')";
        greeting.textContent = 'Good Afternoon';
    }
    else{
        document.body.style.backgroundImage = "url('bgnight.jpg')";
        greeting.textContent = 'Good Night';
    }
}

const zero = (n) =>{
    if(n<10){
        n = '0' + n;
        return n;
    }
    else{
return n;
    }
}

const getName = ( ) =>{
    if(localStorage.getItem('name') === null){
        Name1.textContent = '{ENTER NAME}';
    }
    else{
        Name1.textContent =localStorage.getItem('name');
    }
}


const getFocus = ( ) =>{
    if(localStorage.getItem('focus') === null){
        focus.textContent = '{Enter Focus}';
    }
    else{
        focus.textContent = localStorage.getItem('focus');
    }
}

const setName = (e) =>{
    if(e.type === 'keypress'){
        if(e.which == 13 || e.keycode == 13){
            localStorage.setItem('name',e.target.textContent);
            Name1.blur( );
        }
    }
    else {
        localStorage.setItem('name', e.target.textContent);
      }
}

function setFocus(e) {
    if (e.type === 'keypress') {
      if (e.which == 13 || e.keyCode == 13) {
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    } else {
      localStorage.setItem('focus', e.target.innerText);
    }
  }


Name1.addEventListener('keypress', setName);
Name1.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

showtime();
setbg();
getName();
getFocus( );