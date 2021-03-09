// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://gabitimes.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>


//   <div class="author">.....

//     <div class="img-container">--
//       <img src={url of authors image} />
//     </div>---

//     <span>By {authors name}</span>
//   </div>...

// </div>
//
// Create a card for each of the articles and add the card to the DOM.


function articleCards (articlecard){
    const card = document.createElement("div");
// main element

    const headline = document.createElement("div");
    const author = document.createElement("div");
    const imgContainer = document.createElement("div");
    const  url= document.createElement("img");
    const span = document.createElement("span");


    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer)
    author.appendChild(url);
    author.appendChild(span);
    return card;




}


axios.get("https://gabitimes.herokuapp.com/articles")
.then( result =>{
    console.log(result.data.articles);
})