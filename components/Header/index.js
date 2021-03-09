

// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">February, 28, 2021</span>
//    <h1>Gabi Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component



/*


  function articleMaker(title, date, content){

  //create the elecments

  const article = document.createElement("div");
  const articleTitle = document.createElement("h2");
  const articleDate = document.createElement("p");
  const articleContent = document.createElement("p"); 
  const expandButton = document.createElement("span");

  */

  function header(title, content, temp) {

const headerContent = document.createElement("div")
const headerDate =  document.createElement("span")
const headerTitle = document.createElement("h1")
const headerTemp = document.createElement ("span")


// append everthing to header data


  headerContent.appendChild(headerDate);
  headerContent.appendChild(headerTitle);
  headerContent.appendChild(headerTemp);
  

  
  // add content 



headerDate.textContent = date
headerTitle.textContent = h1
headerTemp.textContent = temp


// add classes 

 
headerContent.classList.add("header");
headerDate.classList.add("date");
headerTitle.classList.add("h1");
headerTemp.classList.add("temp")


return header;
  };





// Use this object for the component you created.
const newDate = new Date(headerContent.title, headerContent.date, headerContent.temp);
// console.log(newDate);
const headerContent = [
    {
        date: newDate.toDateString(),
        title: "Gabi Times",
        temp: "98°"
    }
]; 

/*const header = document.querySelector(".header")
data.map(function(item){
  header.appendChild(gabiTimes(item.title, item.date, item.temp))
}); */