const stepsInput = document.getElementById("step");           // <input> for steps
const distanceInput = document.getElementById("distance");     // <input> for distance
const caloriesInput = document.getElementById("calories");     // <input> for calories

const totalSteps = document.getElementById("StepsDone");       // <span> showing total steps
const totalDistance = document.getElementById("DistanceWalked"); // <span> showing total distance
const totalCalories = document.getElementById("CaloriesBurned"); // <span> showing total calories
const confirmation = document.getElementById("Done");

window.onload = function() { // Run after the DOM is loaded
      totalSteps.textContent = localStorage.getItem("step") || 0;        // Restore steps or default 0
      totalDistance.textContent = localStorage.getItem("distance") || 0;  // Restore distance or default 0
      totalCalories.textContent = localStorage.getItem("calories") || 0;  // Restore calories or default 0
    };

document.getElementById("save").addEventListener("click", function() {
      // Parse user input; use 0 if field is empty/invalid
      let steps = parseInt(stepsInput.value) || 0;            // Convert steps to integer
      let distance = parseFloat(distanceInput.value) || 0;    // Convert distance to float
      let calories = parseInt(caloriesInput.value) || 0;      // Convert calories to integer

      // Compute new totals by adding inputs to current totals displayed
      let newSteps = steps + parseInt(totalSteps.textContent);               // Add steps
      let newDistance = distance + parseFloat(totalDistance.textContent);    // Add distance
      let newCalories = calories + parseInt(totalCalories.textContent);      // Add calories

      // Update the UI with the new totals
      totalSteps.textContent = newSteps;                 // Show updated steps total
      totalDistance.textContent = newDistance.toFixed(2); // Show distance with 2 decimals
      totalCalories.textContent = newCalories;           // Show updated calories total

      // Persist totals in localStorage so they survive reloads
      localStorage.setItem("steps", newSteps);                         // Save steps
      localStorage.setItem("distance", newDistance.toFixed(2));        // Save distance (string)
      localStorage.setItem("calories", newCalories);                   // Save calories
      
      Done.textContent = "Distance saved successfully";
      Done.style.color = "white";

      stepsInput.value = "";
      distanceInput.value = "";
      caloriesInput.value = "";

});

document.getElementById("reset").addEventListener("click", function() {
      // Reset the totals in the UI
      totalSteps.textContent = 0;        // Zero steps
      totalDistance.textContent = 0;     // Zero distance
      totalCalories.textContent = 0;     // Zero calories

      // Persist zeros so storage matches the UI
      localStorage.setItem("steps", 0);        // Save zero steps
      localStorage.setItem("distance", 0);     // Save zero distance
      localStorage.setItem("calories", 0);     // Save zero calories

      // Show a red message indicating a reset happened
      Done.textContent = "distance has been resetted"; // Arabic reset text
      Done.style.color = "red";                   // Make it red for emphasis
    });