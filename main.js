//array of objects
const firstYears = [
  {
    name: "Test",
    house: "Gryffindor",
    id: 1,
  },
  {
    name: "Test 2",
    house: "Ravenclaw",
    id: 2,
  },
];

//setting the location
const targetingApp = document.querySelector("#app");

//function to put the bootstrap elements in the HTML
const renderToDom = (element) => {
  targetingApp.innerHTML += element;
};

//************************************//
//*******INTRO HEADER AND BUTTON******//
//************************************//
renderToDom(`<div class="card text-center">
      <div class="card-header">Welcome</div>
      <div class="card-body">
        <h5 class="card-title">Sorting Hat</h5>
        <p class="card-text">
          Are you ready to discover your Hogwarts house?
        </p>
        <a href="#" class="btn btn-primary" id="introButton">
          Let's gooooo
        </a>
      </div>
      <div class="card-footer text-muted"></div>
    </div>`);

//************************************//
//**********CARDS ON DOM**************//
//************************************//

//loop to get all the objects from firstYears array into the HTML. i'll need to change this to .map() later
////todolist
const cardsOnDom = (array) => {
  let domString = "";
  for (const person of array) {
    domString += `<div class="card" style="width: 18rem;">
<img src="..." class="card-img-top" alt="...">
<div class="card-body">
  <h5 class="card-title">${person.name}</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;
  }
  document.querySelector("#cards").innerHTML = domString;
};

//************************************//
//**********FILTER BY HOUSE***********//
//************************************//

////////TODOLIST

//************************************//
//******* FORM and DEFAULT CARDS******//
//************************************//

// Variable for intro button
const introButton = document.getElementById("introButton");

//event listener to get the form and existing cards to show up when intro button is clicked
introButton.addEventListener("click", () => {
  //form
  renderToDom(`<form>
    <div class="mb-3">
      <label for="inputName" class="form-label">Enter your name:</label>
      <input 
        type="text" 
        class="form-control" 
        id="inputName" 
        aria-describedby="nameHelp"
        required
      >
      <div id="formError" class="form-text" style="color: red; display: none;">
       Oops! It looks like you forgot to enter your name. Please fill in the field to continue.</div>
      </div>
    </div>
    <button type="submit" class="btn btn-primary" id="submitButton">Submit</button>
  </form>`);
  //default cards
  cardsOnDom(firstYears);

  //assign id's from the form to variables
  const inputName = document.querySelector("#inputName");
  const formError = document.querySelector("#formError");
  const submitButton = document.querySelector("#submitButton");

  //////////////////////////////////////////
  ////////////////submitting the form///////
  //////////////////////////////////////////

  //event listener for submit click
  submitButton.addEventListener("click", (e) => {
    //prevent form from refresh on submit
    e.preventDefault();

    //hide the error message initially
    formError.style.display = "none";

    // Check if inputName is an empty string, and display error message if it is
    if (inputName.value === "") {
      formError.style.display = "block";

      //else, create that person and render cards to dom
    } else {
      //create new firstYear object (new student)
      const newStudent = {
        //theis key value works bc above we used query selector to assign specific ids of form to variables (e.g. inputName variable)
        name: inputName.value,
        house: "Random House", //placeholder for house assignment logic (todolist)
        id: firstYears.length + 1,
      };

      //add new student to firstYears array
      firstYears.push(newStudent);

      // Re-render the cards on the DOM with the updated array
      cardsOnDom(firstYears);

      //clear the form input
      inputName.value = "";

      //ensure the error msg is hidden, just in case the first if happened first
      formError.style.display = "none";
    }
  });
});

///expel (TODOLIST)
