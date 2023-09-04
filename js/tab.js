'use strict';

function hideInfoContent () {
    info.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('active');
    })
}

function showInfoContent (i = 0){
    info[i].style.display = 'block';
    info[i].classList.add('active');
}

const blockBtn = document.querySelector('.btn-block'),
    btns = blockBtn.querySelectorAll('button'),
    info = document.querySelectorAll('.info');

hideInfoContent();
showInfoContent();

blockBtn.addEventListener('click', (e) => {
    const target = e.target;
    if(target && target.nodeName == 'BUTTON'){
        btns.forEach((item, i) => {
            if(target == item){
                hideInfoContent();
                showInfoContent(i);
            }
        })
    }
});