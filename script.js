const apiKey = "c1316b2937edce5ccab172c43139efeb"; 

function getWeather() {
  const city = document.getElementById("city").value;
  const result = document.getElementById("weatherResult");

  if (city === "") {
    result.innerHTML = "Please enter a city name.";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const weather = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>🌡️ Temp:</strong> ${data.main.temp} °C</p>
        <p><strong>☁️ Condition:</strong> ${data.weather[0].main}</p>
        <p><strong>💧 Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>💨 Wind:</strong> ${data.wind.speed} m/s</p>
      `;
      result.innerHTML = weather;
    })
    .catch(error => {
      result.innerHTML = "City not found. Please try again.";
    });
}
