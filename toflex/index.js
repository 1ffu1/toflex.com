var left = document.getElementById('left');
var home = document.getElementById('home');

// تعريف الكائنين لتخزين العناصر
var options = {};
var optionsText = {};

for (var i = 0; i < 6; i++) {
    options[`option${i}`] = document.getElementById(`option${i}`);
    optionsText[`option${i}`] = document.getElementById(`optionText${i}`);
}

// تأكد من أن العناصر موجودة قبل تغيير خصائصها
if (options['option0']) {
    options['option0'].style.opacity = '1';
}

left.addEventListener('mouseenter', function() {
    left.style.width = '150px';
    for (var i = 0; i <6; i++) {
        optionsText[`option${i}`].style.color = '#fff';
    }
});

left.addEventListener('mouseleave', function() {
    left.style.width = '50px';
    
    for (var i = 0; i <6; i++) {
        optionsText[`option${i}`].style.color = '#ffff0000';
    }
});



const search = document.getElementById('search');
var sliders = {};
const slider0 = document.getElementById('slider0');
const slider1 = document.getElementById('slider1');
var Poster;

function displayList(movies , num) {
    if (num === 0) {
        slider0.innerHTML = '';
    } 
    else if (num === 1 ){
        slider1.innerHTML = '';
    }
    for (let i = 0; i < movies.length; i++) {
        const newDiv = document.createElement('div');
        newDiv.className = 'sliedItem';
        newDiv.dataset.id = movies[i].imdbID;
        if (movies[i].Poster != 'N/A') Poster=(movies[i].Poster);
        newDiv.innerHTML = `
          <img src="${Poster}" alt="movie" class="movieImage">
          <div class="info">
            <div class="filmInfo">
              <p class="filmTitle">${movies[i].Title}</p>
              <p class="filmdisc">${movies[i].Year}</p>
            </div>  
            <div class="right">
              <div class="imdb">IMDB</div>
              <p class="imn">${movies[i].imdbRating}</p>
            </div>
          </div>
        `;
        if (num === 0) {
            slider0.appendChild(newDiv);
        } 
        else if (num === 1 ){
            slider1.appendChild(newDiv);
        }
        console.log(num);
    
       
      }
    }

async function load(searchTerm , num){
    const URL = `https://omdbapi.com/?s=${searchTerm}&page=1&apikey=3f2ac092`;
    const res = await fetch(`${URL}`);
    const data = await res.json();

    if (data.Response === 'True'){
        console.log(data.Search);
        displayList(data.Search, num);
    }
}
function searchStart(){
    
     let searchTerm = (search.value);
     load(searchTerm);

    }

    let searchTerm = ("game");
    load(searchTerm,0);
    searchTerm = ("war");
    load(searchTerm,1);



    
    
