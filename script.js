








document.querySelector('.day').addEventListener('click', function(){
    document.getElementsByClassName('day')[0].style.display = 'none';
    document.getElementsByClassName('night')[0].style.display = 'inline-block';
    document.body.style.background = '#fff';
    document.getElementsByClassName('clock')[0].style.boxShadow = ` inset 0px 0px 6px 8px green `;
    document.getElementsByClassName('analog')[0].style.boxShadow = `inset 0px 3px 5px grey`;
});
document.querySelector('.night').addEventListener('click', function(){
    this.style.display = 'none';
    document.body.style.background = '#000';
    document.getElementsByClassName('day')[0].style.display = 'inline-block';
    document.getElementsByClassName('clock')[0].style.boxShadow = ` 0px 0px 19px 9px green`;
    document.getElementsByClassName('analog')[0].style.boxShadow = `rgb(100 148 237 / 88%) 0px 0px 19px 11px`;
});