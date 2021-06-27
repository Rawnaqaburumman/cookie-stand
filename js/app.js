'use strict';
let Seattle = {
    mincust: 23,
    maxcust: 65,
    avg: 6.3,
    hours: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
    cookies: [],
    randomcustomerhour: [],

    ranodomcust: function () {
        for (let j = 0; j < 14; j++) {
            this.randomcustomerhour.push(getRandomArbitrary(23, 65))

        }

    },
    cookiesnumber: function () {
        for (let i = 0; i < 14; i++) {
            let num = Math.floor(this.randomcustomerhour[i] * this.avg)

            this.cookies.push(num);

        }
    }
}
//The end of seatle object

Seattle.ranodomcust();
Seattle.cookiesnumber();
console.log(Seattle)

function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min)
}


//------------------------ Tokyo object--------------------------------------------------------------------
let Tokyo = {
    mincust: 3,
    maxcust: 24,
    avg: 1.2,
    hours: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
    cookies: [],
    randomcustomerhour: [],

    ranodomcust: function () {
        for (let j = 0; j < 14; j++) {
            this.randomcustomerhour.push(getRandomArbitrary(23, 65))

        }

    },
    cookiesnumber: function () {
        for (let i = 0; i < this.hours.length; i++) {
            let num = Math.floor(this.randomcustomerhour[i] * this.avg)
            this.cookies.push(num);
            // console.log(this.cookies);
        }
    }
}
//The end of Tokyo object
Tokyo.ranodomcust();
Tokyo.cookiesnumber();
console.log(Tokyo);




//----------------- Dubai object---------------------------------------------------------------------------

let Dubai = {
    mincust: 11,
    maxcust: 38,
    avg: 3.7,
    hours: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
    cookies: [],
    randomcustomerhour: [],

    ranodomcust: function () {
        for (let j = 0; j < 14; j++) {
            this.randomcustomerhour.push(getRandomArbitrary(23, 65))

        }

    },
    cookiesnumber: function () {
        for (let i = 0; i < this.hours.length; i++) {
            let num = Math.floor(this.randomcustomerhour[i] * this.avg)
            this.cookies.push(num);
            // console.log(this.cookies);
        }
    }
}
//The end of Dubai object
Dubai.ranodomcust();
Dubai.cookiesnumber();
console.log(Dubai);


//------------------ Paris object ------------------------------------------------------------------------

let Paris = {
    mincust: 20,
    maxcust: 38,
    avg: 2.3,
    hours: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
    cookies: [],
    randomcustomerhour: [],

    ranodomcust: function () {
        for (let j = 0; j < 14; j++) {
            this.randomcustomerhour.push(getRandomArbitrary(23, 65))

        }

    },
    cookiesnumber: function () {
        for (let i = 0; i < this.hours.length; i++) {
            let num = Math.floor(this.randomcustomerhour[i] * this.avg)
            this.cookies.push(num);
            // console.log(this.cookies);
        }
    }
}
//The end of Paris object
Paris.ranodomcust();
Paris.cookiesnumber();
console.log(Paris);



//---------------- Lima object-----------------------------------------------------------------------------
let Lima = {
    mincust: 2,
    maxcust: 16,
    avg: 4.6,
    hours: [6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7],
    cookies: [],
    randomcustomerhour: [],

    ranodomcust: function () {
        for (let j = 0; j < 14; j++) {
            this.randomcustomerhour.push(getRandomArbitrary(23, 65))

        }

    },
    cookiesnumber: function () {
        for (let i = 0; i < this.hours.length; i++) {
            let num = Math.floor(this.randomcustomerhour[i] * this.avg)
            this.cookies.push(num);
            // console.log(this.cookies);
        }
    }
}
//The end of Dubai object
Lima.ranodomcust();
Lima.cookiesnumber();
console.log(Lima);

let parent = document.getElementById('begin');
let header2 = document.createElement('h2');
parent.appendChild(header2);
header2.textContent = 'Seattle ';

let unOrderedList_1 = document.createElement('ul');
parent.appendChild(unOrderedList_1);

for (let i = 0; i < Seattle.cookies.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList_1.appendChild(listItem);
    listItem.textContent = `${Seattle.hours[i]} pm ${Seattle.cookies[i]}`
}

//--------------------------------------------------------------------------------

let header2_2 = document.createElement('h2');
parent.appendChild(header2_2);
header2_2.textContent = 'Tokyo';

let unOrderedList_2 = document.createElement('ul');
parent.appendChild(unOrderedList_2);
for (let i = 0; i < Tokyo.cookies.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList_2.appendChild(listItem);
    listItem.textContent = `${Tokyo.hours[i]} pm ${Tokyo.cookies[i]}`
}

//-------------------------------------------------------------------------------------

let header2_3 = document.createElement('h2');
parent.appendChild(header2_3);
header2_3.textContent = 'Dubai';


let unOrderedList_3 = document.createElement('ul');
parent.appendChild(unOrderedList_3);
for (let i = 0; i < Dubai.cookies.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList_3.appendChild(listItem);
    listItem.textContent = `${Dubai.hours[i]} pm ${Dubai.cookies[i]}`
}

//----------------------------------------------------------------------------------------


let header2_4 = document.createElement('h2');
parent.appendChild(header2_4);
header2_4.textContent = 'Lima';

let unOrderedList_4 = document.createElement('ul');
parent.appendChild(unOrderedList_4);
for (let i = 0; i < Lima.cookies.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList_4.appendChild(listItem);
    listItem.textContent = `${Lima.hours[i]} pm ${Lima.cookies[i]}`
}
//--------------------------------------------------------------------------------------
let header2_5 = document.createElement('h2');
parent.appendChild(header2_5);
header2_5.textContent = 'Paris';

let unOrderedList_5 = document.createElement('ul');
parent.appendChild(unOrderedList_5);
for (let i = 0; i < Lima.cookies.length; i++) {
    let listItem = document.createElement('li');
    unOrderedList_5.appendChild(listItem);
    listItem.textContent = `${Lima.hours[i]} pm ${Lima.cookies[i]}`;

}


for(let k=0;k<this.hours.length;k++);{
    if(k=0) {
        sumof6=Paris.cookies[0]+Tokyo.cookies[0] +Lima.cookies[0]+ Dubai.cookies[0] + Seattle.cookies[0]}
        
        
        
   } 

  

   let paraghraph = document.createElement('p');
   parent.appendChild(paraghraph);
   paraghraph.textContent = sumof6 ;