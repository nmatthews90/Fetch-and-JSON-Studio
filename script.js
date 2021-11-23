// TODO: add code here
window.addEventListener("load", function () {
  fetch("https://handlers.education.launchcode.org/static/astronauts.json")
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const container = document.getElementById("container");

      let astronautInfo = "";

      for (let astronaut of json) {
        astronautInfo += `<div class="astronaut">
            <div class="bio">
                <h3>${astronaut.firstName}</h3>
                <ul>
                    <li>Hours in space: ${astronaut.hoursInSpace}</li>
                    <li>Active: ${astronaut.active}</li>
                    <li>Skills: ${astronaut.skills}</li>
                </ul>
            </div>
            <img class="avatar" src="${astronaut.picture}">
            </div>`;
      }

      container.innerHTML = astronautInfo;
    });
});
