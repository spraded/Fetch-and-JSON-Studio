window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
      response.json().then(function(data){
        console.log(data);
        const astronauts = document.getElementById("container");
        for (let i = 0; i < data.length; i++){
        astronauts.innerHTML += `
            <div class="astronaut">
                <div class="bio">
                <h3>${data[i].firstName} ${data[i].lastName}</h3>
                <ul>
                    <li>Hours in space: ${data[i].hoursInSpace}</li>
                    <li id="active">Active: ${data[i].active}</li>
                    <li>Skills: ${data[i].skills}</li>
                </div>
                <img class="avatar" src=${data[i].picture} height=250></img>
            </div>
            `;
        }
      });
    });
  });

