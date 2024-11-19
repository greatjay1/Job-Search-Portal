
function getJobs(){

let userInput = document.querySelector(".input-form").value;
let jobs =  document.querySelector("#jobs");
let ErrorD = document.querySelector(".pError");


// fetch(`https://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=Digital%20${userInput}`)

fetch(`https://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=Digital%20${userInput}`)
.then(response => response.ok ? response.json() : Promise.reject("Error fetching API"))
.then(data =>{



  



    for (let index = 0; index < 10; index++) {

        // const jobTitle = data[index].title;

        console.log(data[index].title);



        jobs.innerHTML = `
        <div class="container result-page">
            <div class="row">
        <div class="col-md-2"><img src="Images/job-list1.png" alt="" srcset=""></div>
        <div class="col-md-7">
        
        <h2 class="job-title">${data[index].title}</h2>
        
        <i class="fa-solid fa-briefcase"></i> Creative Agency   <span class="pay-details"> <i class="fa-solid fa-location-dot"></i> Athens, Greece   </span>  <i class="fa-solid fa-sack-dollar"></i> $3500 - $4000
        
        </div>
        <div class="col-md-3">
        
            <button class="result-btn">Apply for Job</button>
            <h6> 7 hours ago</h6>
        </div>
            </div>
        </div>`;

document.body.appendChild(jobs);
        
             
    }

    

})

.catch(() =>{

    ErrorD.innerHTML = " keyword not found, please try another one"

});

}


