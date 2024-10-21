//elements to pass into renderToDom function
let bootstrapIntro = `<div class="card text-center">
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
    </div>`;

let bootstrapForm = `<form>
<div class="mb-3">
  <label for="exampleInputEmail1" class="form-label">Enter your name:</label>
  <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
  <div id="emailHelp" class="form-text">(this line will display an error msg when empty form is submitted. jk no it won't lol. there's a better way. i think. bc a popup came when i did it without an @ for email. so i think i can use that somehow. actually i will need to get rid of it too. and use whatever concept is in place for that to have it happen for an empty string submit instead)</div>
</div>
<button type="submit" class="btn btn-primary id="submitButton">Submit</button>
</form>`;

// `<div class="row g-3 align-items-center">
//   <div class="col-auto">
//     <label for="inputPassword6" class="col-form-label">Type your name</label>
//   </div>
//   <div class="col-auto">
//     <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
//   </div>
//   <div class="col-auto">
//     <span id="passwordHelpInline" class="form-text">
//       (this line will display an error msg when empty form is submitted)
//     </span>
//   </div>
// </div>`;

//obj array for testing later
const firstYears = [
  {
    Name: "Test",
    House: "Gryffindor",
    ID: "1",
  },
  {
    Name: "Test 2",
    House: "Ravenclaw",
    ID: "2",
  },
];
//************************************//
//**********INTRO BUTTON**************//
//************************************//

//setting the location
const targetingApp = document.querySelector("#app");

//function to put the bootstrap card in the HTML
const renderToDom = (element) => {
  let domString = "";
  domString += element;
  targetingApp.innerHTML = domString;
};
renderToDom(bootstrapIntro);

//************************************//
//**********FORM**********************//
//************************************//

//add an event listener to the intro button to get the form to show up when clicked. prob do that by listening for click on that specific id and when that happens, pass the form element into renderToDom function

//let's assign that button to a variable for ease of readability
const introButton = document.getElementById("introButton");

//event listener
introButton.addEventListener("click", () => renderToDom(bootstrapForm));
