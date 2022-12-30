// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">February, 28, 2021</span>
//    <h1>Gabi Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// Use this object for the component you created.
const newDate = new Date();
const headerContent = [
    {
        date: newDate.toDateString(),
        title: "Gabi Times",
        temp: "98°"
    }
];
function data(title, date, temp) {
    // step1: create elements
let header = document.createElement('div')
let datespan = document.createElement('span')
let title1 = document.createElement('h1')
let tempspan = document.createElement('span')

// step2: connect elements 
header.appendChild(datespan)
header.appendChild(title1)
header.appendChild(tempspan)

//step3: add content
datespan.textContent = date;
title1.textContent = title;
tempspan.textContent = temp;

// step4: add classes
header.classList.add('header')
datespan.classList.add('date')
tempspan.classList.add('temp')


return header
}

//SElECTION
const headerContainer = document.querySelector('.header-container')

// ADD COMMPONENT TO DOM 

headerContent.map(function(item) {
headerContainer.appendChild(data(item.title,item.date,item.temp))
})


