import restaurantImage from './restaurant.jpg'

const home = (()=>{
const heading = document.createElement("h1");
heading.innerText = 'Webpack Restaurant';

const image = document.createElement("img");
image.src = restaurantImage;

const paragraph = document.createElement("p");
paragraph.innerText = 'This restaurant is the best!'

const mainContent = document.getElementById("content");
mainContent.appendChild(heading);
mainContent.appendChild(image);
mainContent.appendChild(paragraph);

})();

export default home;