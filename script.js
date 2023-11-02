let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
})
  
  // Do all of your work inside the document.addEventListener  

  // Part 1

const mainTitle = document.querySelector("#main-title")
console.log(mainTitle)
mainTitle.textContent = "Hi, my name is Susan.  Welcome to my HomePage"

  
  // Part 2
  const jsBody = document.querySelector ("body")
  console.log(jsBody)
  jsBody.style.backgroundColor = ("green")

  // Part 3
const faveThings  = document.querySelector("#favorite-things");
console.log(faveThings)
if (faveThings.hasChildNodes()) {
  faveThings.removeChild(faveThings.children[5]);
}

  // Part 4
  const specialTitleClassElements = document.querySelectorAll('.special-titleclass');
  for (const element of specialTitleClassElements) {
    element.style.fontSize = '2rem';
  }

  // Part 5
  const sideBar = document.querySelector("#past-races");
  console.log(sideBar)
  if (sideBar.hasChildNodes()) {
    sideBar.removeChild(sideBar.children[3]);
  }

  // Part 6
const newPastRaces = document.createElement('li');
newPastRaces.textContent = 'Nairobi';
const pastRaces = document.querySelector('#past-races');
pastRaces.appendChild(newPastRaces);

  // Part 7
  
const newBlog = document.createElement ("div")
console.log(newBlog)
newBlog.className = ("blog-post")

const newPara = document.createElement ("p")
const newH2 = document.createElement ("h2")


  // Part 8


  // Part 9





