// ////////////////elements to pass into renderToDom function//////////////////
// let bootstrapIntro = `<div class="card text-center">
//       <div class="card-header">Welcome</div>
//       <div class="card-body">
//         <h5 class="card-title">Sorting Hat</h5>
//         <p class="card-text">
//           Are you ready to discover your Hogwarts house?
//         </p>
//         <a href="#" class="btn btn-primary" id="introButton">
//           Let's gooooo
//         </a>
//       </div>
//       <div class="card-footer text-muted"></div>
//     </div>`;

// let bootstrapForm =
//   // prettier-ignore.. (even though i don't think that's doing anything)
//   ///////input includes required
//   ////////a div with id of formError with a line that shows when empty string is submitted
//   `\<form>
//     <div class="mb-3">
//       <label for="inputName" class="form-label">Enter your name:</label>
//       <input
//         type="text"
//         class="form-control"
//         id="inputName"
//         aria-describedby="nameHelp"
//         required
//       >
//       <div id="formError" class="form-text" style="color: red; display: none;">
//        Oops! It looks like you forgot to enter your name. Please fill in the field to continue.</div>
//       </div>
//     </div>
//     <button type="submit" class="btn btn-primary" id="submitButton">Submit</button>
//   </form>`;

// let bootstrapCard = `<div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`;

// //obj array for testing later
// const firstYears = [
//   {
//     Name: "Test",
//     House: "Gryffindor",
//     ID: "1",
//   },
//   {
//     Name: "Test 2",
//     House: "Ravenclaw",
//     ID: "2",
//   },
// ];
// //************************************//
// //**********INTRO BUTTON**************//
// //************************************//

// //setting the location
// const targetingApp = document.querySelector("#app");

// //function to put the bootstrap card in the HTML
// const renderToDom = (element) => {
//   targetingApp.innerHTML += element;
// };
// renderToDom(bootstrapIntro);

// //************************************//
// //**********FORM**********************//
// //************************************//

// //add an event listener to the intro button to get the form to show up when clicked. prob do that by listening for click on that specific id and when that happens, pass the form element into renderToDom function

// //let's assign that button to a variable for ease of readability
// const introButton = document.getElementById("introButton");

// //event listener to get the form to show up when intro button is clicked
// introButton.addEventListener("click", () => {
//   renderToDom(bootstrapForm);

//   //////////////////////////////////////////
//   ////////////////submitting the form///////
//   //////////////////////////////////////////

//   //setting the location
//   // const targetingApp = document.querySelector("#app");

//   //assign id's from the form to variables
//   const inputName = document.querySelector("#inputName");
//   const formError = document.querySelector("#formError");
//   const submitButton = document.querySelector("#submitButton");

//   //event listener for submit click
//   const handleSubmit = (e) => {
//     // e.preventDefault();

//     //hide the error message initially
//     formError.style.display = "none";
//     // ////honestly may need to comment this back in. i'm curious. right now if it's added, it gets rid of the browser's error message that came from me putting required for the input in form//prevent refresh when clicked (the default bx of a "submit" button type)
//     //check if inputName is an empty string, and display error message if it is. it's default is "display: none" in the form
//     if (inputName.value === "") {
//       formError.style.display = "block";
//       //else, create that person and render cards to dom
//     } else {
//       //************************************//
//       //**********first years on dom**********************//
//       //************************************//

//       //put default cards on dom for now
//       renderToDom(bootstrapCard);
//       //clear the form input
//       inputName.value = "";
//       //ensure the error msg is hidden, just in case the first if happened first
//       formError.style.display = "none";

//       //************************************//
//       //**********TO DO**********************//
//       //************************************//

//       //use .map to loop thru the defaults

//       ////create new based on form input, assign a random house

//       ///////delete functionality lol
//     }
//   };
//   submitButton.addEventListener("click", handleSubmit);
// });

// -----------------------------
// ////////////////elements to pass into renderToDom function//////////////////
// let bootstrapIntro = `<div class="card text-center">
//       <div class="card-header">Welcome</div>
//       <div class="card-body">
//         <h5 class="card-title">Sorting Hat</h5>
//         <p class="card-text">
//           Are you ready to discover your Hogwarts house?
//         </p>
//         <a href="#" class="btn btn-primary" id="introButton">
//           Let's gooooo
//         </a>
//       </div>
//       <div class="card-footer text-muted"></div>
//     </div>`;

// let bootstrapForm =
//   // prettier-ignore.. (even though i don't think that's doing anything)
//   ///////input includes required
//   ////////a div with id of formError with a line that shows when empty string is submitted
//   `\<form>
//     <div class="mb-3">
//       <label for="inputName" class="form-label">Enter your name:</label>
//       <input
//         type="text"
//         class="form-control"
//         id="inputName"
//         aria-describedby="nameHelp"
//         required
//       >
//       <div id="formError" class="form-text" style="color: red; display: none;">
//        Oops! It looks like you forgot to enter your name. Please fill in the field to continue.</div>
//       </div>
//     </div>
//     <button type="submit" class="btn btn-primary" id="submitButton">Submit</button>
//   </form>`;

// let bootstrapCard = `<div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">Card title</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`;

// //obj array for testing later
// const firstYears = [
//   {
//     name: "Test",
//     house: "Gryffindor",
//     id: "1",
//   },
//   {
//     name: "Test 2",
//     house: "Ravenclaw",
//     id: "2",
//   },
// ];
// //************************************//
// //**********INTRO BUTTON**************//
// //************************************//

// //setting the location
// const targetingApp = document.querySelector("#app");

// //function to put the bootstrap card in the HTML
// const renderToDom = (element) => {
//   targetingApp.innerHTML += element;
// };
// renderToDom(bootstrapIntro);

// //************************************//
// //**********FORM**********************//
// //************************************//

// //add an event listener to the intro button to get the form to show up when clicked. prob do that by listening for click on that specific id and when that happens, pass the form element into renderToDom function

// //let's assign that button to a variable for ease of readability
// const introButton = document.getElementById("introButton");

// //event listener to get the form to show up when intro button is clicked
// introButton.addEventListener("click", () => {
//   renderToDom(bootstrapForm);
//   const cardsOnDom = (array) => {
//     let domString = "";
//     for (person of array) {
//       domString += `<div class="card" style="width: 18rem;">
//   <img src="..." class="card-img-top" alt="...">
//   <div class="card-body">
//     <h5 class="card-title">${person.name}</h5>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>`;
//     }
//     renderToDom(domString);
//   };
//   cardsOnDom(firstYears);

//   //////////////////////////////////////////
//   ////////////////submitting the form///////
//   //////////////////////////////////////////

//   //setting the location
//   // const targetingApp = document.querySelector("#app");

//   //assign id's from the form to variables
//   const inputName = document.querySelector("#inputName");
//   const formError = document.querySelector("#formError");
//   const submitButton = document.querySelector("#submitButton");

//   //event listener for submit click
//   submitButton.addEventListener("click", (e) => {
//     // e.preventDefault();

//     //hide the error message initially
//     formError.style.display = "none";
//     // ////honestly may need to comment this back in. i'm curious. right now if it's added, it gets rid of the browser's error message that came from me putting required for the input in form//prevent refresh when clicked (the default bx of a "submit" button type)
//     //check if inputName is an empty string, and display error message if it is. it's default is "display: none" in the form
//     if (inputName.value === "") {
//       formError.style.display = "block";
//       //else, create that person and render cards to dom
//     } else {
//       //************************************//
//       //**********first years on dom**********************//
//       //************************************//

//       //put default cards on dom for now
//       renderToDom(bootstrapCard);
//       //clear the form input
//       inputName.value = "";
//       //ensure the error msg is hidden, just in case the first if happened first
//       formError.style.display = "none";

//       //************************************//
//       //**********TO DO**********************//
//       //************************************//

//       //use .map to loop thru the defaults

//       ////create new based on form input, assign a random house

//       ///////delete functionality lol
//     }
//   });
// });
