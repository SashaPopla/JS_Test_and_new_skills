'use strict';

const objStudents = {
    js:[{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],

        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};

function getTotalProgress(data) { // цикл
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)) {
        if (Array.isArray(course)) {
            students += course.length;

            for (let i = 0; i < course.length; i++) {
                total += course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)) {
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++) {
                    total += subCourse[i].progress;
                }
            }
        }
    }

    return total / students;
}

//console.log(getTotalProgress(objStudents));

function getTotalProgressByRecursin (data) { // рекурсия
    if(Array.isArray(data)){
        let total = 0;
        
        for(let i = 0; i < data.length; i++){
            total += data[i].progress;
        }

        return [total, data.length];
    } else {
        let total = [0, 0];
        
        for (const subData of Object.values(data)) {
            const subDataArr = getTotalProgressByRecursin(subData);
            total[0] += subDataArr[0];
            total[1] += subDataArr[1];
        }

        return total;
    }
}

const result = getTotalProgressByRecursin(objStudents);
//console.log(result[0]/result[1]);

window.addEventListener('DOMContentLoaded', () => {
    const wrapper = document.querySelector('.wrapper'),
          blocks = wrapper.querySelectorAll('div');

    blocks.forEach((block) => {
        block.addEventListener('click',(e)=>{
            e.preventDefault();
            e.target.remove();
        })
    });

    /*----------------------------------------------*/

    const blockBtn = document.querySelector('.btn-block'),
        btns = blockBtn.querySelectorAll('button'),
        info = document.querySelectorAll('.info');

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

    const blockDay = document.querySelector('.date'),
        blockHour = blockDay.querySelector('.hour'),
        blockMinet = blockDay.querySelector('.minet'),
        blockSecond = blockDay.querySelector('.second');

    setInterval(() => {
        let dateIsNow = new Date();

        blockHour.innerHTML = dateIsNow.getHours() + ':';
        blockMinet.innerHTML = dateIsNow.getMinutes() + ':';
        blockSecond.innerHTML = dateIsNow.getSeconds();    

    }, 1000)
});