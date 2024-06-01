const authorContainer = document.getElementById('author-container');

const loadMoreBtn = document.getElementById('load-more-btn');

// The fetch() method returns a Promise, which is a placeholder object that will either be fulfilled if your request is successful, or rejected if your request is unsuccessful. If the Promise is fulfilled, it resolves to a Response object, and you can use the .then() method to access the Response.

// Fetch authors data
fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json').then((res) => console.log(res));
