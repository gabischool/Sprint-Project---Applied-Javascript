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

// const headerTitle = [
//     "February, 28, 2021",
//     "Gabi Times",
//     "98°",
// ];

const headerContent = [
    {
        date: "February, 28, 2021",
        title: "Gabi Times",
        temp: "98°"
    }
];

const headerContainer = document.querySelector(".header-container")

headerContent.forEach(data => {
    headerContainer.appendChild(headerGabi(data.date, data.title, data.temp));
});

function headerGabi(date, title, temp) {
    const header = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerDegree = document.createElement('span')

    // set the styles
    header.classList.add('header')
    headerDate.classList.add('date')
    headerDegree.classList.add('temp')

    // set the content
    headerDate.textContent = date;
    headerTitle.textContent = title;
    headerDegree.textContent = temp;

    // put together
    header.appendChild(headerDate)
    header.appendChild(headerTitle)
    header.appendChild(headerDegree)

    return header
}
