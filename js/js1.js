'use strict';

const seleris = {
    john: 500,
    ann: 1000,
    oleg: 5000
};

// Object isn`t right working with for...of

seleris[Symbol.iterator] = function(){
    return {
        curret: this.john,
        last: this.oleg,

        next () {
            if(this.curret < this.last){
                this.curret += 500;
                return {done: false, value: this.curret}
            }
            else{
                return {done: true}
            }
        }
    }
}

for (const iterator of seleris) {
    console.log(iterator);
}