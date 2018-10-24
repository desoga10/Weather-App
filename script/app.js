//class initited
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

//Set-up of form interaction
(function() {
  const form = document.getElementById('weatherForm');
  const cityInput = document.getElementById('cityInput');
  const feedback = document.querySelector('.feedback');

  //class
  const ajax = new AjaxWeather(); //Instance of ajaxWeather class above
  form.addEventListener('submit', event => {
    event.preventDefault();
    const city = cityInput.value;
    if (city.length === 0) {
      showFeedback('City Input cannot be empty');
    } else {
      ajax.getWeather(city).then(data => console.log(data));
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
