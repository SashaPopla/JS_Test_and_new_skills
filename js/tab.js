'use strict';

const blockBtn = document.querySelector('.btn-block'),
    btns = blockBtn.querySelectorAll('button');

const infoBlock = document.querySelector('.info-block'),
    info = document.querySelectorAll('.info');

blockBtn.addEventListener('click', (e) => {
    //console.dir(e.target);
    if(e.target && e.target.nodeName == 'BUTTON' && e.target.outerText == 'See first'){
        if(!info[0].classList.contains('active')){
            info[0].classList.add('active');
        }
        else{
            info[0].classList.remove('active');
        }
        console.log(info[0].classList.contains('active'));
    }
    else if(e.target && e.target.nodeName == 'BUTTON' && e.target.outerText == 'See second'){
        if(!info[1].classList.contains('active')){
            info[1].classList.add('active');
        }
        else{
            info[1].classList.remove('active');
        }
    }
    else if(e.target && e.target.nodeName == 'BUTTON' && e.target.outerText == 'See third'){
        if(!info[2].classList.contains('active')){
            info[2].classList.add('active');
        }
        else{
            info[2].classList.remove('active');
        }
    }

});
