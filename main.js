//array of houses
const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

//array of objects
const firstYears = [
  {
    name: "Harry Potter",
    house: houses[0],
    id: 1,
  },
  {
    name: "Snape, Snape, Sevvverous Snape",
    house: houses[3],
    id: 2,
  },

  {
    name: "burt",
    house: houses[1],
    id: 3,
  },

  {
    name: "jan",
    house: houses[2],
    id: 4,
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

//use .map() to pass the array of firstYears thru arrayAsCards function, which uses interpolation to put the name and house on the bootstrap card
//(TODOLIST) add delete button to the card
const cardsOnDom = (array) => {
  let domString = "";
  const arrayAsCards = (person) => {
    domString += `<div class="card" style="width: 18rem;">
<div class="card-body" style="border: 2px solid black; border-radius: 5px;">
  <h5 class="card-title">${person.name}</h5>
  <p class="card-text">${person.house}</p>
  <a href="#" class="btn btn-primary" id="expel--${person.id}">Expel</a>
</div>
</div>`;
  };
  array.map(arrayAsCards);
  document.querySelector("#cards").innerHTML = domString;
};

//alterntive cardsOnDom for my expelled students to pass through
const expelledCardsOnDom = (array) => {
  let expelledDomString = "";
  const arrayAsCards = (person) => {
    expelledDomString += `<div class="card" style="width: 18rem;">
<div class="card-body" style="border: 2px solid black; border-radius: 5px;">
  <h5 class="card-title">${person.name}</h5>
  <p class="card-text"></p>
  <p class="card-text"> Oh no! ${person.name} went to the dark side.</p>
</div>
</div>`;
  };
  array.map(arrayAsCards);
  document.querySelector("#expelledCards").innerHTML += expelledDomString;
};

//************************************//
//**********FILTER BY HOUSE***********//
//************************************//

/////function to filter by house
const filter = (array, house) => {
  //we will pass firstYears array and a house into the fx
  const houseArray = []; //create an empty array

  for (const member of array) {
    if (house === member.house) {
      //if the house we input is equal to the member's house...
      houseArray.push(member); //...add them to the array
    }
  }
  return houseArray; //return the array that is populated with members of that house
};

//////connect the html house buttons to the JS
const allButton = document.querySelector("#all");
const gryffindorButton = document.getElementById("gryffindor");
const hufflepuffButton = document.getElementById("hufflepuff");
const ravenclawButton = document.getElementById("ravenclaw");
const slytherinButton = document.getElementById("slytherin");

/////event listeners for buttons

//all button... //nervous about this for after a student is expelled? (todolist) --.readme says sort should just be for non-expelled students
allButton.addEventListener("click", () => {
  cardsOnDom(firstYears);
});

//gryffindor
gryffindorButton.addEventListener("click", () => {
  const gryffindorMembers = filter(firstYears, "Gryffindor");
  cardsOnDom(gryffindorMembers);
});

//hufflepuff
hufflepuffButton.addEventListener("click", () => {
  const hufflepuffMembers = filter(firstYears, "Hufflepuff");
  cardsOnDom(hufflepuffMembers);
});

//ravenclaw
ravenclawButton.addEventListener("click", () => {
  const ravenclawMembers = filter(firstYears, "Ravenclaw");
  cardsOnDom(ravenclawMembers);
});

//slytherin
slytherinButton.addEventListener("click", () => {
  const slytherinMembers = filter(firstYears, "Slytherin");
  cardsOnDom(slytherinMembers);
});

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

  document.querySelector(".all-buttons").style.display = "block";

  //assign id's from the form to variables
  const inputName = document.querySelector("#inputName");
  const formError = document.querySelector("#formError");
  const submitButton = document.querySelector("#submitButton");

  //default cards
  cardsOnDom(firstYears);
  document.querySelector("#cards").style.display = "block";

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

      //************************************//
      //******* CREATE**********************//
      //************************************//

      //else, create that person and render cards to dom
    } else {
      //create new firstYear object (new student)
      const newStudent = {
        //this key value works bc above we used query selector to assign specific ids of form to variables (e.g. inputName variable)
        name: inputName.value,
        house: houses[Math.floor(Math.random() * houses.length)], //assigns new student to a random house!!
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

//************************************//
//******* EXPEL***********************//
//************************************//

//target the cards div
const cards = document.querySelector("#cards");

//add event listener to capture clicks

cards.addEventListener("click", (e) => {
  //think of 'e' as as HERE is the click is happening

  //target the specific expel button (since there are multiple on the page)
  //.target is part of JavaScript, specifically within the Event object, which is automatically provided when an event occurs (like a click or key press). When an event happens, the event handler function receives an Event object (in this case, 'e'), which contains information about the event, including .target.
  if (e.target.id.includes("expel")) {
    //destructuring:
    //const [, id]: the comma is a placeholder, indicating that the first value of the array is ignored. The second value (whatever is after the "--") is assigned to the const "id," which we are also delcaring here
    //above, in the cards, the expel button's ID is: id="expel--${firstYears.id}". with e.taget.id, we are retrieving that, and we are splitting it at the --, which gives us the array [expel, #].
    //we assign const id = #
    //we're basically just getting the # id of the card who's expel button we clicked, and assigning that to const id
    const [, id] = e.target.id.split("--");
    //The findIndex() method of Array instances returns the index of the first element in an array that satisfies the provided testing function. If no elements satisfy the testing function, -1 is returned.
    //so here, we are finding the first instance that a firstYears id matches the const id that we assigned in the previous step). And we are assigning that to the const "index"
    //// Number() just makes sure id is converted to a number (if it's not already)
    //tldr: we're finding where the id of an obj in firstYears matches the id of where we clicked, and assigning that to const index
    const index = firstYears.findIndex((e) => e.id === Number(id));
    //remove index (which we just declared and assigned in the previous step) from the array, and assign it to const removed
    ////splice can do other things, but in this case (X, #) or for us (index, 1), X is the position of the item to remove, and # is the number of elements to remove, starting from X.
    //also we assign the thing that we removed to a const "removed", so that we can pass it into expelledCardsOnDom
    const removed = firstYears.splice(index, 1);
    //now let's repaint the DOM with our firstYears and our expelled
    cardsOnDom(firstYears);
    expelledCardsOnDom(removed);
  }
});
