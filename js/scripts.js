
// Load Random Avatar

// $.ajax({
//   url: 'https://randomuser.me/api/?inc=name,picture,email',
//   dataType: 'json',
//   success: function(response) {
//     users = response.results;
//   }
//   let member = document.querySelector('members');
//   let li = document.createElement('li');
//   for (i=0; i < users.lenght; i++){
//   li.innerHTML = document.createElement('span');
//   span.innerHTML= document.createElement('image');
//
//   image. innerHTML= users[i].picture;
//   image.innerHTML = users[i].name
//   }
// });

// $.ajax({
//   url: 'https://randomuser.me/api/?inc=name,picture,email',
//   dataType: 'json',
//   success: function(response) {
//     users = response.results;
//     // populate(users);
//     const formatName = function(name){
//       return name[0].toUpperCase() + name.slice(1);
//     };
//     //render to html
//     function render(randomUser){
//       const newMembersSection = document.getElementByClassName('newMembers');
//       // const recentActivitySection = document
//       for (let i=0; i<users.length; i++){
//         const user= users[i];
//
//         const
//       }
//     }



        // for (let i=0; i<users.length; i++){
        //   const {email, picture, name} = users[i];
        //
        //   const userPic= picture.thumbnail;
        //   const userFirstName = formatName(name.first);
        //   const memberLastName = formatName(name.last);
        //   const userName = `${memberFirstName} ${memberLastName}`;
            // }


  // }
  // });




// =============
// CHARTS
// =============
Chart.defaults.global.defaultFontColor = '#808080';
Chart.defaults.global.defaultFontFamily = "Roboto, Helvetica, Tahoma, Arial, sans-serif";


// Traffic Line Graph
new Chart(document.getElementById('lineChart'), {
    responsive: true,
    type: 'line',
    data: {
        labels:["","16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3", "4-10", "11-17", "18-24", "25-31"],
        datasets:[{
          label:'testing',
          data: ['',500, 1000, 750, 1250, 1750, 1250, 1500, 1000, 1500, 2000, 1500, 2001],
          backgroundColor:'rgba(112, 96, 189, 0.2)',
          borderColor: 'rgb(112, 96, 189)',
          borderWidth: 1,
          lineTension: .1,
          pointBackgroundColor: 'rgb(254, 254, 254)',
          pointBorderColor: 'rgb(112, 96, 189)',
          pointBorderWidth: 2,
          borderWidth: .8,
        }]
    },
    options: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero:true
          }
        }]
      }
    }
});

  var ctx = document.getElementById("barChart");
 new Chart(ctx, {
      responsive: true,
      type: 'bar',
      data: {
          labels: ["Su", "M", "T", "W", "R", "F", "S"],
          datasets: [{
              label:false,
              data: [75, 175, 100, 125, 200, 160, 100],
              backgroundColor:
                  'rgb(112, 96, 189)'

          }]
      },
      options: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
          scales: {
              yAxes: [{
                  dataset:[50,100,150,200,250],
                  ticks: {
                      beginAtZero:true
                  }
              }]
          }
      }
  });





new Chart(document.getElementById("pieChart"),{
  type:'doughnut',
  data: {
    labels: ['phones', 'tablets','desktop'],
    datasets:[ {
      data: [20, 20, 60],
      backgroundColor: ['rgb(86, 151, 208)', 'rgb(53, 198, 154)', 'rgb(112, 96, 189)']
  }]
  },
  options: {
    title:{
      display:false,
    },
    legend:{
      display: 'true',
      position: 'right',
      labels:{
        boxWidth: 20,
        fontSize: 20,
      }
    }
  }
});



///////
//Form Validity
//////
const searchUser = document.querySelector('.search-user');
const userMessage = document.querySelector('.message-user');
const submit = document.getElementById('submit');
const error = document.querySelector('.error');
let search = false;
let message = false;

submit.addEventListener('click',function(event){
  event.preventDefault();
  if (searchUser.value){
    search = true;
  }
  if (userMessage.value){
    message = true;
  }
  if(search==true && message == true){
    error.innerHTML = "Message Sent";
    error.className = "error sent";
  } else {

    error.innerHTML = "Invalid field.";
    error.className = "error active";
  }
});



// if(userMessage==false){
//   error.innerHTML= "Message sent!";
//
// }else if(userMessage==true){
//   error.innerHTML = "Please leave a message.";
//   event.preventDefault();
// };

// userMessage.addEventListener('textarea', function (event){
//   // check if field is valid
//   if(userMessage.validity.valid){
//     // remove any errors
//     error.innerHTML = ""; //reset any content
//     error.className = "error"; //reset visual state of message
//   }
// }, false);
//   submit.addEventListener('submit', function(event){
//     //check if field is valid when trying to send
//     if(!userMessage.validity.valid){
//       error.innerHTML= "Please leave a message";
//       error.className = "error active";
//       //prevent form from being present
//       event.preventDefault();
//     }
//   },false);




//call timezone function for select menu


//
// // holds xmlhttp request object that has its own set of properties and functions (methods)
// var xhr - new XMLHttpRequest();
// //callback fucntion
// xhr.onreadystatechange = function (){
//   if(xhr.readyState === 4){
//     //property of xmlhttp reqeust object
//     // xhr.responseText
//     //typeof xhr.responseText looks at item and returns word based on what type of js it is
//
//     //JSON.parse is method built into web browsers. converts string to object. json formatted data must be array, object or array of objects with "key"/"value" pairs
//     let employees = JSON.parse(xhr.responseText);
//
//     let satusHTML = '<ul class="bulleted">';
//     for (i= 0; i<employees.lenght; i += 1){
//       if(employees[i].inoffice === true) {
//         satusHTML += '<li class="in">';
//       } else {
//         satusHTML += '<li class="out">';
//       }
//       satusHTML += employees[i].name;
//       satusHTML += '</li>';
//     }
//     satusHTML += '</ul>';
//     document.getElementById('employeeList').innerHTML = statusHTML;
//   }
// };
// //open a request
// //IRL point to serverside script with json data, for now just using a plain text file
// xhr.open('GET', 'data/employees.json')
// //callback function (line 15) doesnt do anything until we receive a response
// xhr.send();
