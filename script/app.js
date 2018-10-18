//Set-up of form interaction
(function() {
  const form = document.getElementById('weatherForm');
  const cityInput = document.getElementById('cityInput');
  const feedback = document.querySelector('.feedback');

  //class

  form.addEventListener('submit', event => {
    event.preventDefault();
    const city = cityInput.value;
    if (city.length === 0) {
      showFeedback('City Input cannot be empty');
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
