'use strict';

function addClassAction (index){

    if(!index.classList.contains('active')){
        index.classList.add('active');
    }
    else{
        index.classList.remove('active');
    }
}

const blockBtn = document.querySelector('.btn-block'),
    btns = blockBtn.querySelectorAll('button');

const info = document.querySelectorAll('.info');

blockBtn.addEventListener('click', (e) => {
    //console.dir(e.target);
    if(e.target && e.target.nodeName == 'BUTTON' && e.target.outerText == 'See first'){
        closePrefAction(info[0], info);
    }
    else if(e.target && e.target.nodeName == 'BUTTON' && e.target.outerText == 'See second'){
        closePrefAction(info[1], info);
    }
    else if(e.target && e.target.nodeName == 'BUTTON' && e.target.outerText == 'See third'){
        closePrefAction(info[2], info);
    }

});
