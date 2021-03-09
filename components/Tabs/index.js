// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://gabitimes.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>


// const myTopics = [
//     "javascript",
//     "bootstrap",
//     "technology",
//     "jquery",
//     "node.js"
// ]


function createTopic (toPics){

    const tab =document.createElement("div");
    tab.textContent=toPics;

return tab;
    
}

const trendingTopics =document.querySelector(".topics");

axios.get("https://gabitimes.herokuapp.com/topics")
.then( result => {
    

    result.data.topics.forEach(element => {
        trendingTopics.appendChild(createTopic(element))
    });

    
});

