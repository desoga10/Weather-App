//class initiated
class AjaxWeather {
  constructor() {
    this.apiKey = '0cabe9a7ee3017fe704ccb6803b92839';
  }
  async getWeather(city) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${
      this.apiKey
    }`;
    const weatherData = await fetch(url);
    const weather = weatherData.json();
    return weather;
  }
}

//Another class initiated
class Display {
  constructor() {
    this.result = document.querySelector('.results');
    this.cityName = document.getElementById('cityName');
    this.cityCountry = document.getElementById('cityCountry');
    this.cityIcon = document.getElementById('cityIcon');
    this.cityTemp = document.getElementById('cityTemp');
    this.cityHumidity = document.getElementById('cityHumidity');
  }
  showWeather(data) {
    console.log(data);
  }
}

//Set-up of form interaction
(function() {
  const form = document.getElementById('weatherForm');
  const cityInput = document.getElementById('cityInput');
  const feedback = document.querySelector('.feedback');

  //class
  const ajax = new AjaxWeather(); //Instance of ajaxWeather class above
  const display = new Display();
  form.addEventListener('submit', event => {
    event.preventDefault();
    const city = cityInput.value;
    if (city.length === 0) {
      showFeedback('City Input cannot be empty');
    } else {
      ajax.getWeather(city).then(data => display.showWeather(data));
    }
  });

  function showFeedback(text) {
    feedback.classList.add('showItem');
    feedback.innerHTML = `<p>${text}</p>`;

    setTimeout(() => {
      feedback.classList.remove('showItem');
    }, 3000);
  }
})();
