const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  // Create Elements
  let card = document.createElement('div');
  let headline = document.createElement('div');
  let author = document.createElement('author');
  let imgContainer = document.createElement('div');
  let imgAuthor = document.createElement('img');
  let spanAuthor = document.createElement('span');

  // Structure elements
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  imgContainer.appendChild(imgAuthor);
  author.appendChild(spanAuthor);

  // Add classnames
  card.className = "card";
  headline.className = "headline";
  author.className = "author";
  imgContainer.className = "img-container";

  //Stretch
  card.classList.add(article.tech)

  // Add content
  headline.textContent = article.headline;
  imgAuthor.src = article.authorPhoto;
  spanAuthor.textContent = "By " + article.authorName;

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  let entry = document.querySelector(selector);

  let url = `https://lambda-times-api.herokuapp.com/articles`;
  axios.get(url).then(res => {
     // spreading all articles
    let articles = [       
      ...res.data.articles.javascript.map(a => {
        // adding tech property to object
        a.tech = 'javascript'; return a;  
      }), 
      ...res.data.articles.bootstrap.map(a => {
        a.tech = 'bootstrap'; return a;
      }),
      ...res.data.articles.technology.map(a => {
        a.tech = 'technology'; return a;
      }),
      ...res.data.articles.jquery.map(a => {
        a.tech = 'jquery'; return a;
      }),
      ...res.data.articles.node.map(a => {
        a.tech = 'node.js'; return a;
      })
    ];

    // Add articles to DOM
    articles.forEach(article => {
      entry.appendChild(Card(article));
    })
  })
}

export { Card, cardAppender }
