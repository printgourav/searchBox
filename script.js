const endpoint = 'https://gist.githubusercontent.com/printgourav/454e2665818b0cdc8afbd7581f848804/raw/2153580a0ac5021a2eb0c9769b2ed0d26b8e00a1/Cities.json';
const cities = [];
fetch(endpoint)
.then(blob => blob.json())
.then(data => cities.push(...data));

/*let value;

let query = document.querySelector(".search");
query.addEventListener("input",() =>{
 value = query.value;
});

setTimeout(() => {
    console.log("Value after 5 seconds:", value);
  }, 5000);
*/

function findMatches(wordToMatch, arr){
    return arr.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex) 
    });
}


function displayMatches(){
   // console.log(this);  here this would be searchInput
   const matchArray = findMatches(this.value,cities) 
   console.log(this.value);
   console.log(...matchArray);
   const html = matchArray.map(place =>{
   return `
    <li>
        <span class="name">${place.city},</br> ${place.state}</br></span>
        <span class="population">${place.population}</br></span>
        <span class="coordinates">${place.longitude},</br> ${place.latitude}</br></span>
    </li>
   `;
   }).join('');
   suggestions.innerHTML = html;
}

/*function wordMatch(){
    console.log(this);
    console.log(this.value)
}
*/

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
// searchInput.addEventListener('keyup', displayMatches);
// searchInput.addEventListener('Input', wordhMatch);
