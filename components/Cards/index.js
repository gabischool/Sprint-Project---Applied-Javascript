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
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
function articlemaker(head,img,authorspan,articlTitile){


    //add element
    const card = document.createElement("div")
    card.setAttribute("data-subject",articlTitile);
    const headline = document.createElement("div")
    const author = document.createElement("div")
    const imgContianer = document.createElement("div")
    const image = document.createElement("img")
    const spanName = document.createElement("span")


    //connect element
    card.appendChild(headline)
    card.appendChild(author)
    card.appendChild(spanName)
    author.appendChild(imgContianer)
    imgContianer.appendChild(image)


    //add classes
     card.classList.add("card")
     headline.classList.add("headline")
     author.classList.add("author")
     imgContianer.classList.add("img-container")


    // add content
    headline.textContent= head
    image.src =img
    spanName.textContent= authorspan


   
     return card
}
//select where to put article
const cardsContainer =document.querySelector('.cards-container')

//http/api
axios.get("https://gabitimes.herokuapp.com/articles")

.then(res => {
    // console.log(res.data.articles);



    //loop object
    object =res.data.articles
    for (const property in object) {
        // console.log(`${property}: ${object[property]}`);

      }



     //js
      const javascript =object.javascript
    
      // javascript.setAttribute("data-subject", javascript);
    javascript.forEach(item => {
        
        const head1 = item.headline
        const img1 = item.authorPhoto
        const authorspan1 = item.authorName

        //add dataset tab 
        const javascript="javascript"

        //add card dom
        cardsContainer.appendChild(articlemaker(head1,img1,authorspan1,javascript))
    });
  
   

    //boostrap

    const  bootstrap = object.bootstrap
    bootstrap.forEach(item => {
        
        const head2 = item.headline
        const img2 = item.authorPhoto
        const authorspan2 = item.authorName

        //add dataset tab 
        const bootstrap="bootstrap"

        //add card dom
        cardsContainer.appendChild(articlemaker(head2,img2,authorspan2,bootstrap))
    });



    //technology

    const technology =object.technology
    technology.forEach(item => {
        
        const head3 = item.headline
        const img3 = item.authorPhoto
        const authorspan3 = item.authorName
        
        //add dataset tab 
        const technology="technology"
         
           //add card dom 
        cardsContainer.appendChild(articlemaker(head3,img3,authorspan3,technology))
    });


    //j-query

    const jquery =object.jquery
    jquery.forEach(item => {
        
        const head4 = item.headline
        const img4 = item.authorPhoto
        const authorspan4 = item.authorName

         //add data set tab div 
        const jquery="jquery"

         // add card dom
        cardsContainer.appendChild(articlemaker(head4,img4,authorspan4,jquery))
    });



    //node.js
    
    const node =object.node
    node.forEach(item => {
       
        const head5 = item.headline
        const img5 = item.authorPhoto
        const authorspan5 = item.authorName

        //add data set tab div 
        const node="node"

        //add card dom
        cardsContainer.appendChild(articlemaker(head5,img5,authorspan5,node))

})


  
    });
