
function getJobs(){

let userInput = document.querySelector(".input-form").value;
let jobs =  document.querySelector("#jobs");
let ErrorD = document.querySelector(".pError");


// fetch(`https://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=Digital%20${userInput}`)

fetch(`https://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=Digital%20${userInput}`)
.then(response => response.ok ? response.json() : Promise.reject("Error fetching API"))
.then(data =>{



     for (let index = 0; index < 8; index++) {
        
        // const jobTitle = data[index].title;

        console.log(data[index].title);



        jobs.innerHTML += `
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

          
      
    }

    

})

.catch(() =>{

    ErrorD.innerHTML = " keyword not found, please try another one"

});

}


function getVacancies(SearchValue){
    let err = document.querySelector(".errDisplay");
    let FilterJobs = document.getElementById("FilterJobs");

     fetch(`https://api.lmiforall.org.uk/api/v1/vacancies/search?keywords=${SearchValue}`)
    .then(response => response.ok ? response.json() : Promise.reject("Error fetching API"))
    .then(data =>{
       
    
         for (let index = 0; index < 5; index++) {
            
            // const jobTitle = data[index].title;
    
      
    
            FilterJobs.innerHTML += `
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

            
    
              
          
        }
    
        
    
    })
    
    .catch(() =>{
    
        err.innerHTML = " keyword not found, please try another one"
    
    });

    FilterJobs.innerHTML = "";
    
    }
    





    function calculatePay(){

        let jobTitle = document.getElementById("job-title").value;
        let salary = document.getElementById("salary").value;
        let tax = document.getElementById("tax").value;
        let ni = document.getElementById("ni").value;
        // let workhour = document.getElementById("workhour").value;

        let hour = document.querySelector("#hour").value;
        let day = document.querySelector("#day").value;
        let week = document.querySelector("#week").value;
        let year = document.querySelector("#year").value;
        let output = document.querySelector(".resultOutput");

        if(document.getElementById("hour").checked){

           

            output.innerHTML = `Hourly pay for ${jobTitle} is ${Math.round(salary/730)-(tax)-(ni)}GBP `;
            output.style.color="green";
        }

        else if (document.getElementById("day").checked){

     
            output.innerHTML = `Daily pay for ${jobTitle} is ${Math.round(salary/30)-(tax)-(ni)}GBP `;
            output.style.color="green";

        }

        else if (document.getElementById("week").checked){

            output.innerHTML = `Weekly pay for ${jobTitle} is ${Math.round(salary/7)-(tax)-(ni)}GBP `;
            
            output.style.color="green";
        }

        else if (document.getElementById("year").checked){

            
            output.innerHTML = `Yearly pay for ${jobTitle} is ${Math.round(salary*12)-(tax)-(ni)}GBP `;
            output.style.color="green";
        }

        else{
        output.innerHTML = "Please select either HOUR, DAY, WEEK or YEAR"
        output.style.color="red";
            
        }



    }