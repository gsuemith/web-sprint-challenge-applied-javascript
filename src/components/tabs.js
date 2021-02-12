const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  let topicsDiv = document.createElement("div");
  topicsDiv.className = "topics";

  // create tab element from each topic 
  topics.forEach(topic => {
    let tab = document.createElement("div");
    tab.className = "tab";
    tab.textContent = topic;
    
    //add each topic to DOM
    topicsDiv.appendChild(tab);

    //stretch
    //Filters articles by topic
    //clicking topic again removes filter *still buggy*
    tab.addEventListener("click", e => {
      e.stopPropagation();
      let allCards = document.querySelectorAll('.card');
      
      allCards.forEach(card => {
        if(!card.className.includes(topic)){
          card.classList.add('filtered');
        }
        else{
          card.classList.remove('filtered');
        }
      });
    })
  });

  return topicsDiv;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  let entry = document.querySelector(selector);

  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
    .then(res => {
      entry.appendChild(Tabs(res.data.topics))
    })
    .catch(err => console.log(err))

  //stretch
  //resets filter;
  entry.addEventListener("click", e => {
    let allCards = document.querySelectorAll('.card');
    allCards.forEach(card => card.classList.remove('filtered'));
  });
}

export { Tabs, tabsAppender }
