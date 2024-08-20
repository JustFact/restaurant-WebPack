import restaurantImage from './restaurant.jpg'

const home = (()=>{
const heading = document.createElement("h1");
heading.innerText = 'Webpack Restaurant';

const image = document.createElement("img");
image.src = restaurantImage;

const paragraph = document.createElement("p");
paragraph.innerText = 'This restaurant is the best!'

const elements = [heading, image, paragraph];

return {elements}

})();

export default home.elements;