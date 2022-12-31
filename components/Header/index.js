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


function createHeader(headers){
    const header = document.createElement("div");
    const dates = document.createElement("span");
    const h1 = document.createElement("h1");
    const temps = document.createElement("span");

    header.appendChild(dates);
    header.appendChild(h1);
    header.appendChild(temps);

    dates.textContent=headers[0].date;
    h1.textContent=headers[0].title;
    temps.textContent=headers[0].temp;

    header.classList.add("header");
    dates.classList.add("date");
    temps.classList.add("temp");

return header;
   


}
const headerContainer = document.querySelector(".header-container");


headerContainer.appendChild(createHeader(headerContent))

console.log(headerContent[0].date);
console.log(headerContent[0].title);
console.log(headerContent[0].temp);