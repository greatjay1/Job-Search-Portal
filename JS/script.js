
function getJobs(){

let userInput = document.querySelector(".input-form").value;
let jobTitle =  document.querySelector(".job-title");


fetch(`https://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=Digital%20${userInput}`)
.then(response => response.ok ? response.json() : Promise.reject("Error fetching API"))
.then(data =>{

    var json = JSON.parse(data);
    jobTitle.innerHTML = json["name"];

    console.log(json["name"]);

})

.catch(() =>{

    jobTitle.innerHTML = "Unable to display";

});



// let theMain = data

// for (let index = 0; index < data.length; index++) {
//     const element = data[index];
    
// }



}