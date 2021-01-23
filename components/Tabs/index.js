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



const divTopics = document.querySelector('.topics')


const myTopics = ["https://gabitimes.herokuapp.com/topics"]

myTopics.forEach(myData => {
    axios.get(myData).then(data => {

        console.log('Topics:', data.data.topics)

        divTopics.appendChild(createTopics(data.data.topics));

    })
        .catch(error => {
            // Handles failure:
            console.log("The Server is currently down", error);
        });
});



function createTopics(myTopics) {
    // create the elements
    const topicTabs = document.createElement('div')

    // set the styles
    topicTabs.classList.add('tab')

    // set the content
    topicTabs.textContent = myTopics;


    // put together


    return topicTabs
}

