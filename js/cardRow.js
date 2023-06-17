let cardRow = document.querySelector(".card__row");

function getData(url) {
  class ErrorResponse extends Error {
    constructor(status, message) {
      super(message);
      this.status = status;
    }
  }

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          reject(new ErrorResponse(res.status, "Url is error"));
        }
      })
      .then((res) => {
        resolve(res);
      });
  });
}

function getCard({
  name,
  flags,
  population,
  capital,
  region,
  borders,
  timezones,
  currencies,
  subregion,
}) {
  return `  <div class="wrap card_wrapper animate pop">
    <div class="overlay">
      <div class="overlay-content animate slide-left delay-2">
        <h1 class="animate country_name slide-left pop delay-4">${name.common}</h1>
        <p
          class="animate capital slide-left pop delay-5"
          style="color: white; margin-bottom: 2.5rem"
        >
          <span>Capital:</span> <em>${capital}</em>
        </p>
        <p
          class="animate capital slide-left pop delay-5"
          style="color: white; margin-bottom: 2.5rem"
        >
          <span>Population:</span> <em>${population}</em>
        </p>
        <p
          class="animate capital slide-left pop delay-5"
          style="color: white; margin-bottom: 2.5rem"
        >
          <span>Region:</span> <em>${region}</em>
        </p>
      </div>
      <div
        class="image-content animate slide delay-5"
        style="
          background-image: url('${flags.svg}');
          position: absolute;
          top: 0;
          right: 0;
          width: 60vmin;
          height: 100%;
          background-size: cover;
          transition: 0.3s ease-in-out;
          background-repeat: no-repeat;
          background-position: start;

        "
      ></div>
      <div class="dots animate">
        <div class="dot animate slide-up delay-6"></div>
        <div class="dot animate slide-up delay-7"></div>
        <div class="dot animate slide-up delay-8"></div>
      </div>
    </div>
    <div class="text">
      <p>
      Welcome to  <span class = "bold">${name.common}!</span> <br>

      <span class = "bold">${name.common}!</span> is a beautiful country located in <span class = "bold">${region}!</span>. It is bordered by <span class = "bold">(${borders}!)</span>. and has a population of approximately <span class = "bold">${population}</span> people. 
      As an independent nation, <span class = "bold">${name.common}</span> has a unique identity and is proud of its Coat of Arms. Additionally, you may also encounter English being spoken in certain regions.
      <span class = "bold">${name.common}!</span> follows the <span class = "bold">${timezones}</span> time zone, so make sure to adjust your watches accordingly. The country's capital city, <span class = "bold">${capital}</span> , serves as the political, economic, and cultural hub. Explore its bustling streets, visit historical landmarks, and indulge in local cuisine to get a taste of the vibrant city life.
      When it comes to nature, <span class = "bold">${name.common}!</span> has it all. From picturesque beaches and lush forests to towering mountains and vast deserts, the country offers diverse landscapes waiting to be explored. Don't miss the opportunity to visit [FamousNationalPark], where you can witness the stunning flora and fauna that call it home.
      
      </p>
      <p>
      With a rich and diverse cultural heritage, <span class = "bold">${name.common}!</span> celebrates numerous festivals throughout the year. Experience the vibrant colors, traditional music, and captivating dance performances that reflect the country's unique traditions and customs. Join in the festivities and immerse yourself in the local culture.
      No visit to <span class = "bold">${name.common}!</span> is complete without savoring its delicious cuisine. Indulge in, among other local specialties. Each dish reflects the country's culinary traditions and will leave you craving for more.
      We look forward to welcoming you to <span class = "bold">${name.common}!</span>, where you can experience the warm hospitality, explore the breathtaking landscapes, and immerse yourself in the vibrant culture. Enjoy your stay and create unforgettable memories in this fascinating country! <br>
      <span class = "bold">${name.common}!</span> 's subregion: <span class = "bold">${subregion}!</span>
      </p>
    </div>
  </div>`;
}


let choosenRegion = document.querySelector(".all-region");

function pagination() {
  var items = $(".card__row .wrap");
  var numItems = items.length;
  var perPage = 10;

  items.slice(perPage).hide();

  $("#pagination-container").pagination({
    items: numItems,
    itemsOnPage: perPage,
    prevText: "&laquo;",
    nextText: "&raquo;",
    onPageClick: function (pageNumber) {
      var showFrom = perPage * (pageNumber - 1);
      var showTo = showFrom + perPage;
      items.hide().slice(showFrom, showTo).show();
    },
  });
}

async function getCountries(url) {

  cardRow.innerHTML = `
  <div id="loading">
    <div class="spinnerContainer">
    <div class="spinner"></div>
    <div class="loader">
      <p>Diyorbek</p>
      <div class="words">
        <span class="word">API</span>
        <span class="word">Searching</span>
        <span class="word">Pagination</span>
        <span class="word">Options</span>
        <span class="word">Voice command</span>
      </div>
    </div>
   </div>
  </div>`


  let countries = await getData(url);
  cardRow.innerHTML = "";
  countries.map((country)=>{
    cardRow.innerHTML += getCard(country);
  })

  pagination();
}

getCountries("https://restcountries.com/v3.1/all");

document.getElementById("input").addEventListener("keyup", function (event) {
  let searchQuery = event.target.value.trim();
  if(searchQuery){
    getCountries(`https://restcountries.com/v3.1/name/${searchQuery}`);
  }
});

function changeRegion(region) {
  choosenRegion.textContent = `${region}`;
  if(region==="All"){
    getCountries("https://restcountries.com/v3.1/all");
  }else{
    getCountries(`https://restcountries.com/v3.1/region/${region}`);
  }
}

