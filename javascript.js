const events = [];

// changes display from "none" to "block" for 4 seconds on any calling event
function displayContent(f){
    let elem = document.getElementById(f.id).closest(".example").querySelector(".result")
   
    elem.style.display = "block"; 
    setTimeout(function(){ elem.style.display = "none"}, 4000);
}

function search() {
   let query = document.getElementById("search-content").value;
   let id = document.getElementById(query);

   if (id != null) {
       id.style.width = "97%";
       setTimeout(function(){ id.style.width = "90%";}, 8000);
       id.scrollIntoView();
   }
}


// // For later use (with db) for easily manipulating events stored as json
// function Event (name, description, exampleType, example, message) {
//     this.name = name;
//     this.description = description;
//     this.exampleType = exampleType;
//     this.example = example;
//     this.message = message;
// }

// function addEvent(name, description, exampleType, example, message) {
//     let newEvent = new Event(name, description, exampleType, example, message);

//     events.push(newEvent)
// }

// function displayEvents() {
//     let doc = document.getElementById("dom-events");

//     for (let x in events) {
//         let html =  `<div class="row" id="${events[x].name}">
//                         <div class="name" id="${events[x].name}-event">
//                             <h2><a href="https://developer.mozilla.org/en-US/docs/Web/Events/${events[x].name}" target="_blank">${events[x].name}</a></h2>
//                         </div>
//                         <div class="description">
//                             <p>${events[x].description}</p>
//                         </div>
//                         <div class="example">
//                             <div class="sample">
//                                 <h4><u>${events[x].name.toUpperCase()}</u> the ${events[x].exampleType}:</h4>
//                                 ${events[x].example}
//                             </div>
//                             <div class="result text-result" id="${events[x].name}-result">
//                                 ${events[x].name}!
//                             </div>
//                         </div>
//                     </div>`;
//         console.log(html)
//         doc.insertAdjacentHTML('beforeend',html)
//     }   
// }


