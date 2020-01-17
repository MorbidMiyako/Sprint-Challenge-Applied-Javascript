// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
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

function card(article) {

  const card = document.createElement("div"),
    cardHeadline = document.createElement("div"),
    cardAuthor = document.createElement("div"),
    cardImg = document.createElement("div"),
    cardImgSrc = document.createElement("img"),
    cardSpan = document.createElement("span");

  card.classList.add("card");
  cardHeadline.classList.add("headline");
  cardAuthor.classList.add("author");
  cardImg.classList.add("img-container");

  card.append(cardHeadline, cardAuthor);
  cardAuthor.appendChild(cardImg);
  cardImg.appendChild(cardImgSrc);

  cardHeadline.textContent = article.headline
  cardImgSrc.src = article.authorPhoto;
  cardSpan.textContent = article.authorName

  return card
}

axios.get("https://lambda-times-backend.herokuapp.com/articles")
  .then(response => {

    response.data.articles.javascript.forEach((article) => {
      document.querySelector(".cards-container").append(card(article))
    })

    response.data.articles.bootstrap.forEach((article) => {
      document.querySelector(".cards-container").append(card(article))
    })

    response.data.articles.technology.forEach((article) => {
      document.querySelector(".cards-container").append(card(article))
    })

    response.data.articles.jquery.forEach((article) => {
      document.querySelector(".cards-container").append(card(article))
    })

    response.data.articles.node.forEach((article) => {
      document.querySelector(".cards-container").append(card(article))
    })

  })
