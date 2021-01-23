
// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://gabitimes.herokuapp.com/topics
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const articleContainer = document.querySelector('.cards-container')


const allArticles = ["https://gabitimes.herokuapp.com/articles"];

allArticles.forEach(function (index, element) {
    axios.get(index, element)
        .then(data => {

            console.log("test", data.data.articles)
            const articleData = data.data.articles.javascript[2];
            articleContainer.appendChild(createArticles(articleData));
        })
        .catch(error => {
            // Handles failure:
            console.log("The Server is currently down", error);
        });
})


function createArticles(allArticles) {
    // create the elements
    const card = document.createElement('div')
    const CardHeadline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const imgSource = document.createElement('img')
    const AuthName = document.createElement('span')


    // set the styles
    card.classList.add('card')
    CardHeadline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    // set the content
    author.textContent = allArticles.authorName;
    imgSource.src = allArticles.authorPhoto;
    CardHeadline.textContent = allArticles.headline;

    // put together
    card.appendChild(CardHeadline)
    card.appendChild(author)
    author.appendChild(imgContainer)
    imgContainer.appendChild(imgSource)
    author.appendChild(AuthName)


    return card
}
