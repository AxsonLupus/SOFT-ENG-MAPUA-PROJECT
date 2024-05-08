<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Alarm Page</title>
  <style>
    .alarm-container {
      max-width: 600px;
      margin: 20px auto;
    }

    #alarms-list {
      list-style: none;
      padding: 0;
    }

    .alarm-item {
      margin-bottom: 10px;
      cursor: pointer;
      border: 1px solid #ccc;
      padding: 5px;
    }

    .delete-button {
      margin-left: 5px;
      cursor: pointer;
    }
	
	
  </style>
</head>
<body>

  <div class="alarm-container">
    <h1>Alarm Page</h1>

    <form id="alarmForm">
      <label for="initialFloor">Initial Floor:</label>
      <select id="initialFloorAlarm" onchange="populateInitialLocations()">
        <option value="G">Ground Floor</option>
        <option value="2">Floor 2</option>
        <option value="3">Floor 3</option>
		<option value="4">Floor 4</option>
        <option value="5">Floor 5</option>
		<option value="6">Floor 6</option>
      </select>

      <label for="initialLocation">Initial Location:</label>
      <select id="initialLocationAlarm">
        <option value=" "> </option>
        <!-- Initial location options will be populated dynamically based on floor selection -->
      </select>

      <label for="desiredFloor">Desired Floor:</label>
      <select id="desiredFloorAlarm" onchange="populateDesiredLocations()">
        <option value=" "> </option>
        <option value="G">Ground Floor</option>
        <option value="2">Floor 2</option>
        <option value="3">Floor 3</option>
		<option value="4">Floor 4</option>
        <option value="5">Floor 5</option>
		<option value="6">Floor 6</option>
      </select>

      <label for="desiredLocation">Desired Location:</label>
      <select id="desiredLocationAlarm">
        <option value=" "> </option>
        <!-- Desired location options will be populated dynamically based on floor selection -->
      </select>

      <label for="alarmTime">Alarm Time:</label>
      <input type="time" id="alarmTime" required>

      <fieldset>
        <legend>Select Days:</legend>
        <label><input type="checkbox" name="day" value="Monday"> Monday</label>
        <label><input type="checkbox" name="day" value="Tuesday"> Tuesday</label>
        <label><input type="checkbox" name="day" value="Wednesday"> Wednesday</label>
        <label><input type="checkbox" name="day" value="Thursday"> Thursday</label>
        <label><input type="checkbox" name="day" value="Friday"> Friday</label>
        <label><input type="checkbox" name="day" value="Saturday"> Saturday</label>
        <label><input type="checkbox" name="day" value="Sunday"> Sunday</label>
      </fieldset>

      <button type="button" onclick="setAlarm()">Set Alarm</button>
    </form>

    <ul id="alarms-list" onclick="loadAlarm(event)"></ul>

    <button onclick="backToMainPage()">Back to Main Page</button>
	
	 <button onclick="triggerAlarm()">Trigger Alarm</button>
  </div>

  <!-- dito ung sound lagay nalang kayo para iba-->
  <audio id="alarmSound" loop>
    <source src="sound/alarm.mp3" type="audio/mpeg">
  </audio>

  <script>
    function populateInitialLocations() {
      // Placeholder for populating initial locations based on selected floor
      var floor = document.getElementById('initialFloorAlarm').value;
      var initialLocationDropdown = document.getElementById('initialLocationAlarm');
      initialLocationDropdown.innerHTML = '';

      if (floor === 'G') {
        initialLocationDropdown.innerHTML = `
          <option value=""> </option>
<option value="Admin Assist">Admin Assist</option>
<option value="Admin Office">Admin Office</option>
<option value="Book Store">Book Store</option>
<option value="Canteen">Canteen</option>
<option value="Clinic">Clinic</option>
<option value="Elevator Lobby">Elevator Lobby</option>
<option value="Student Lounge 1">Student Lounge 1</option>
<option value="Student Lounge 2">Student Lounge 2</option>
<option value="Hallway">Hallway</option>
<option value="Lobby Area">Lobby Area</option>
<option value="Orientation Room">Orientation Room</option>
<option value="Student Council">Student Council</option>
<option value="SOCIP">SOCIP</option>
<option value="Registrar">Registrar</option>
<option value="Treasury">Treasury</option>
<option value="Waiting Area">Waiting Area</option>
<option value="Admission">Admission</option>
<option value="Multi Purpose">Multi Purpose</option>
<option value="Tech Room">Tech Room</option>
        `;
      } else if (floor === '2') {
        initialLocationDropdown.innerHTML = `
          <option value=" "> </option>
          <option value="Transformer Room">Transformer Room</option>
		  <option value="Computer Lab 201 ">Computer Lab 201 </option>
		  <option value="Lecture Room 202  ">Lecture Room 202 </option>
		  <option value="Lecture Room 203  ">Lecture Room 203 </option>
		  <option value="Lecture Room 20 ">Lecture Room 204 </option>
		  <option value="Lecture Room 205 ">Lecture Room 205 </option>
		  <option value="Lecture Room 206  ">Lecture Room 206 </option>
		  <option value="Lecture Room 207 ">Lecture Room 207</option>
		  <option value="Lecture Room 208 ">Lecture Room 208 </option>
		  <option value="Physics Lab 209 ">Physics Lab 209 </option>
		  <option value="Biology Lab 210 ">Biology Lab 210 </option>
		  <option value="Chemistry Lab 211 ">Chemistry Lab 211 </option>
		  <option value="Case Study 3  ">Case Study 3 </option>
		  <option value="Lecture Room 212 ">Lecture Room 212 </option>
		  <option value="Lecture Room 213 ">Lecture Room 213 </option>
		  <option value="Lecture Room 214  ">Lecture Room 214 </option>
		  <option value="Lecture Room 215 ">Lecture Room 215 </option>
		  <option value="Lecture Room 216  ">Lecture Room 216 </option>
		  <option value="Lecture Room 217 ">Lecture Room 217 </option>
		  <option value="Lecture Room 218 ">Lecture Room 218 </option>
		  <option value="Lecture Room 220 ">Lecture Room 220 </option>
		  <option value="Lecture Room 221 ">Lecture Room 221 </option>
		  <option value="Lecture Room 222  ">Lecture Room 222 </option>
		  <option value="Lecture Room 223  ">Lecture Room 223 </option>
		  <option value=" "> </option>
        `;
      } else if (floor === '3') {
        initialLocationDropdown.innerHTML = `
          <option value=" "> </option>
          <option value="Technical Section "> Technical Section </option>
          <option value=" Dry Pantry"> Dry Pantry </option>
          <option value="GSR-2 "> GSR-2 </option>
          <option value="GSR-1 "> GSR-1</option>
          <option value=" Game Devt Computer Lab 301 "> Game Devt Computer Lab 301</option>
          <option value="MAC LAB 302 "> MAC LAB 302</option>
          <option value="Lecture Room 303 "> Lecture Room 303</option>
          <option value="lecture Room 304 "> lecture Room 304</option>
          <option value="Computer Lab 305 "> Computer Lab 305</option>
          <option value="Lecture Room 306 "> Lecture Room 306</option>
          <option value="Computer Lab 307 "> Computer Lab 307</option>
          <option value="Lecture Room 308 "> Lecture Room 308</option>
          <option value="AVR 309 "> AVR 309</option>
          <option value="Library "> Library </option>
          <option value="Fire Exit 3 "> Fire Exit 3</option>
          <option value="Fire Exit 4 "> Fire Exit 4</option>
          <option value="Elevator Lobby "> Elevator Lobby</option>
          <option value="Storage "> Storage</option>
          <option value="DOIT Office "> DOIT Office</option>
          <option value="HP/UniX/Linux Lab 310 "> HP/UniX/Linux Lab 310</option>
          <option value="Open Lab 311 "> Open Lab 311</option>
          <option value="Reserach Lab Chair 312 "> Reserach Lab Chair 312</option>
          <option value=" Research Lab Aimco 313 "> Research Lab Aimco 313</option>
          <option value="Research Lab Primal 314 "> Research Lab Primal 314</option>
          <option value="Research Lab ICT 315 "> Research Lab ICT 315</option>
          <option value="Computer Lab 316 "> Computer Lab 316</option>
          <option value="Computer Lab 317 "> Computer Lab 317</option>
          <option value="Computer Lab 318 "> Computer Lab 318</option>
          <option value="Lecture Room 319 "> Lecture Room 319</option>
          <option value="Computer Lab 320 "> Computer Lab 320</option>
          <option value="Computer Lab 321 "> Computer Lab 321</option>
          <option value="Computer Lab 322 "> Computer Lab 322</option>
          <option value="Computer Lab 323 "> Computer Lab 323</option>
          <option value="Lecture Room 324 "> Lecture Room 324</option>
          <option value="Lecture Room 325 "> Lecture Room 325</option>
        `;
      } else if (floor === '4') {
        initialLocationDropdown.innerHTML = `
          <option value=" "> </option>
          <option value="Elevator Lobby ">Elevator Lobby</option>
          <option value="PC Hardware Lan 401 ">PC Hardware Lan 401 </option>
		  <option value="CISCO Lab 402 ">CISCO Lab 402</option>
          <option value="Skills Lab 403  ">Skills Lab 403 </option>
		  <option value="Skills Lab 404 ">Skills Lab 404 </option>
		  <option value="CCESO  ">CCESO  </option>
		  <option value="PE ">PE </option>
		  <option value="Computer Lab 405 ">Computer Lab 405</option>
		  <option value="Computer Lab 406 ">Computer Lab 406</option>
		  <option value="Computer Lab 407 ">Computer Lab 407 </option>
		  <option value="Lecture Room 408 ">Lecture Room 408 </option>
		  <option value="Computer Lab 409 ">Computer Lab 409 </option>
		  <option value="Lecture Lab 410 ">Lecture Lab 410 </option>
		  <option value="CISCO Lab 411 ">CISCO Lab 411 </option>
		  <option value="ILMO ">ILMO </option>
		  <option value="ILMO STO ">ILMO STO </option>
		  <option value="Roof Deck ">Roof Deck </option>
		  <option value=" "> </option>
        `;
      } else if (floor === '5') {
        initialLocationDropdown.innerHTML = `
          <option value=" "> </option>
		  <option value="Elevator Lobby ">Elevator Lobby </option>
			<option value="Magic lab 501 ">Magic lab 501 </option>
			<option value="Art Studio 502 ">Art Studio 502 </option>
			<option value="Magic Lab 503 ">Magic Lab 503 </option>
			<option value="Lecture Room 504 ">Lecture Room 504 </option>
			<option value="SMS Faculty ">SMS Faculty </option>
			<option value="Lecture Room 505  ">Lecture Room 505 </option>
			<option value="Lecture Room 506 ">Lecture Room 506 </option>
			<option value="Magic Lab 507 ">Magic Lab 507 </option>
			<option value="News Room 508 ">News Room 508 </option>
			<option value="TV Production Studio 509  ">TV Production Studio 509 </option>
			<option value="Sound Lock ">Sound Lock </option>
			<option value="Control Room ">Control Room </option>
			<option value="Radio Production Studio 510 ">Radio Production Studio 510 </option>
			<option value="Photography Studio 511 ">Photography Studio 511 </option>
		  <option value=" "> </option>
        `;
      } else if (floor === '6') {
        initialLocationDropdown.innerHTML = `
          <option value=" "> </option>
          <option value="Elevator Lobby ">Elevator Lobby </option>
		  <option value="Toilet Room ">Toilet Room</option>
		  <option value="Multi-Faith Prayer Room">Multi-Faith Prayer Room </option>
          <option value="Pantry  ">Pantry </option>
		  <option value="Accreditation Office  ">Accreditation Office </option>
		  <option value="Conference Room ">Conference Room </option>
          <option value="Computer Lab 601 ">Computer Lab 601 </option>
		  <option value="Drawinhg Lab 602  ">Drawinhg Lab 602 </option>
		  <option value="Lecture Room 603 ">Lecture Room 603</option>
          <option value="Lecture Room 604 ">Lecture Room 604 </option>
		  <option value="Lecture Room 605 ">Lecture Room 605 </option>
		  <option value="Lecture Room 606 ">Lecture Room 606 </option>
          <option value="Lecture Room 607 ">Lecture Room 607 </option>
		  <option value="ISLAM Prayer Room ">ISLAM Prayer Room </option>
		  <option value="ETYSBM ">ETYSBM </option>
          <option value="SLHS ">SLHS </option>
		  <option value="Transient Office ">Transient Office </option>
        `;
      }
	  
    }
	
	  document.addEventListener('click', function() {
      // Pause the alarm sound when any user interaction occurs
      document.getElementById('alarmSound').pause();
  });

    function populateDesiredLocations() {
      // Placeholder for populating desired locations based on selected floor
      var floor = document.getElementById('desiredFloorAlarm').value;
      var desiredLocationDropdown = document.getElementById('desiredLocationAlarm');
      desiredLocationDropdown.innerHTML = ''; // Clear previous options

      if (floor === 'G') {
        desiredLocationDropdown.innerHTML = `
          <option value="Admin Assist">Admin Assist</option>
<option value="Admin Office">Admin Office</option>
<option value="Book Store">Book Store</option>
<option value="Canteen">Canteen</option>
<option value="Clinic">Clinic</option>
<option value="Elevator Lobby">Elevator Lobby</option>
<option value="Student Lounge 1">Student Lounge 1</option>
<option value="Student Lounge 2">Student Lounge 2</option>
<option value="Hallway">Hallway</option>
<option value="Lobby Area">Lobby Area</option>
<option value="Orientation Room">Orientation Room</option>
<option value="Student Council">Student Council</option>
<option value="SOCIP">SOCIP</option>
<option value="Registrar">Registrar</option>
<option value="Treasury">Treasury</option>
<option value="Waiting Area">Waiting Area</option>
<option value="Admission">Admission</option>
<option value="Multi Purpose">Multi Purpose</option>
<option value="Tech Room">Tech Room</option>
        `;
      } else if (floor === '2') {
        desiredLocationDropdown.innerHTML = `
          <option value=" "> </option>
          <option value="Transformer Room">Transformer Room</option>
		  <option value="Computer Lab 201 ">Computer Lab 201 </option>
		  <option value="Lecture Room 202  ">Lecture Room 202 </option>
		  <option value="Lecture Room 203  ">Lecture Room 203 </option>
		  <option value="Lecture Room 20 ">Lecture Room 204 </option>
		  <option value="Lecture Room 205 ">Lecture Room 205 </option>
		  <option value="Lecture Room 206  ">Lecture Room 206 </option>
		  <option value="Lecture Room 207 ">Lecture Room 207</option>
		  <option value="Lecture Room 208 ">Lecture Room 208 </option>
		  <option value="Physics Lab 209 ">Physics Lab 209 </option>
		  <option value="Biology Lab 210 ">Biology Lab 210 </option>
		  <option value="Chemistry Lab 211 ">Chemistry Lab 211 </option>
		  <option value="Case Study 3  ">Case Study 3 </option>
		  <option value="Lecture Room 212 ">Lecture Room 212 </option>
		  <option value="Lecture Room 213 ">Lecture Room 213 </option>
		  <option value="Lecture Room 214  ">Lecture Room 214 </option>
		  <option value="Lecture Room 215 ">Lecture Room 215 </option>
		  <option value="Lecture Room 216  ">Lecture Room 216 </option>
		  <option value="Lecture Room 217 ">Lecture Room 217 </option>
		  <option value="Lecture Room 218 ">Lecture Room 218 </option>
		  <option value="Lecture Room 220 ">Lecture Room 220 </option>
		  <option value="Lecture Room 221 ">Lecture Room 221 </option>
		  <option value="Lecture Room 222  ">Lecture Room 222 </option>
		  <option value="Lecture Room 223  ">Lecture Room 223 </option>
		  <option value=" "> </option>
        `;
      } else if (floor === '3') {
        desiredLocationDropdown.innerHTML = `
          <option value="Technical Section "> Technical Section </option>
          <option value=" Dry Pantry"> Dry Pantry </option>
          <option value="GSR-2 "> GSR-2 </option>
          <option value="GSR-1 "> GSR-1</option>
          <option value=" Game Devt Computer Lab 301 "> Game Devt Computer Lab 301</option>
          <option value="MAC LAB 302 "> MAC LAB 302</option>
          <option value="Lecture Room 303 "> Lecture Room 303</option>
          <option value="lecture Room 304 "> lecture Room 304</option>
          <option value="Computer Lab 305 "> Computer Lab 305</option>
          <option value="Lecture Room 306 "> Lecture Room 306</option>
          <option value="Computer Lab 307 "> Computer Lab 307</option>
          <option value="Lecture Room 308 "> Lecture Room 308</option>
          <option value="AVR 309 "> AVR 309</option>
          <option value="Library "> Library </option>
          <option value="Fire Exit 3 "> Fire Exit 3</option>
          <option value="Fire Exit 4 "> Fire Exit 4</option>
          <option value="Elevator Lobby "> Elevator Lobby</option>
          <option value="Storage "> Storage</option>
          <option value="DOIT Office "> DOIT Office</option>
          <option value="HP/UniX/Linux Lab 310 "> HP/UniX/Linux Lab 310</option>
          <option value="Open Lab 311 "> Open Lab 311</option>
          <option value="Reserach Lab Chair 312 "> Reserach Lab Chair 312</option>
          <option value=" Research Lab Aimco 313 "> Research Lab Aimco 313</option>
          <option value="Research Lab Primal 314 "> Research Lab Primal 314</option>
          <option value="Research Lab ICT 315 "> Research Lab ICT 315</option>
          <option value="Computer Lab 316 "> Computer Lab 316</option>
          <option value="Computer Lab 317 "> Computer Lab 317</option>
          <option value="Computer Lab 318 "> Computer Lab 318</option>
          <option value="Lecture Room 319 "> Lecture Room 319</option>
          <option value="Computer Lab 320 "> Computer Lab 320</option>
          <option value="Computer Lab 321 "> Computer Lab 321</option>
          <option value="Computer Lab 322 "> Computer Lab 322</option>
          <option value="Computer Lab 323 "> Computer Lab 323</option>
          <option value="Lecture Room 324 "> Lecture Room 324</option>
          <option value="Lecture Room 325 "> Lecture Room 325</option>
        `;
      } else if (floor === '4') {
        desiredLocationDropdown.innerHTML = `
          <option value=" "> </option>
          <option value=" "> </option>
          <option value="Elevator Lobby ">Elevator Lobby</option>
          <option value="PC Hardware Lan 401 ">PC Hardware Lan 401 </option>
		  <option value="CISCO Lab 402 ">CISCO Lab 402</option>
          <option value="Skills Lab 403  ">Skills Lab 403 </option>
		  <option value="Skills Lab 404 ">Skills Lab 404 </option>
		  <option value="CCESO  ">CCESO  </option>
		  <option value="PE ">PE </option>
		  <option value="Computer Lab 405 ">Computer Lab 405</option>
		  <option value="Computer Lab 406 ">Computer Lab 406</option>
		  <option value="Computer Lab 407 ">Computer Lab 407 </option>
		  <option value="Lecture Room 408 ">Lecture Room 408 </option>
		  <option value="Computer Lab 409 ">Computer Lab 409 </option>
		  <option value="Lecture Lab 410 ">Lecture Lab 410 </option>
		  <option value="CISCO Lab 411 ">CISCO Lab 411 </option>
		  <option value="ILMO ">ILMO </option>
		  <option value="ILMO STO ">ILMO STO </option>
		  <option value="Roof Deck ">Roof Deck </option>
        `;
      } else if (floor === '5') {
        desiredLocationDropdown.innerHTML = `
          <option value=" "> </option>
		  <option value="Elevator Lobby ">Elevator Lobby </option>
			<option value="Magic lab 501 ">Magic lab 501 </option>
			<option value="Art Studio 502 ">Art Studio 502 </option>
			<option value="Magic Lab 503 ">Magic Lab 503 </option>
			<option value="Lecture Room 504 ">Lecture Room 504 </option>
			<option value="SMS Faculty ">SMS Faculty </option>
			<option value="Lecture Room 505  ">Lecture Room 505 </option>
			<option value="Lecture Room 506 ">Lecture Room 506 </option>
			<option value="Magic Lab 507 ">Magic Lab 507 </option>
			<option value="News Room 508 ">News Room 508 </option>
			<option value="TV Production Studio 509  ">TV Production Studio 509 </option>
			<option value="Sound Lock ">Sound Lock </option>
			<option value="Control Room ">Control Room </option>
			<option value="Radio Production Studio 510 ">Radio Production Studio 510 </option>
			<option value="Photography Studio 511 ">Photography Studio 511 </option>
		  <option value=" "> </option>
        `;
      }else if (floor === '6') {
        desiredLocationDropdown.innerHTML = `
          <option value=" "> </option>
          <option value="Elevator Lobby ">Elevator Lobby </option>
		  <option value="Toilet Room ">Toilet Room</option>
		  <option value="Multi-Faith Prayer Room">Multi-Faith Prayer Room </option>
          <option value="Pantry  ">Pantry </option>
		  <option value="Accreditation Office  ">Accreditation Office </option>
		  <option value="Conference Room ">Conference Room </option>
          <option value="Computer Lab 601 ">Computer Lab 601 </option>
		  <option value="Drawinhg Lab 602  ">Drawinhg Lab 602 </option>
		  <option value="Lecture Room 603 ">Lecture Room 603</option>
          <option value="Lecture Room 604 ">Lecture Room 604 </option>
		  <option value="Lecture Room 605 ">Lecture Room 605 </option>
		  <option value="Lecture Room 606 ">Lecture Room 606 </option>
          <option value="Lecture Room 607 ">Lecture Room 607 </option>
		  <option value="ISLAM Prayer Room ">ISLAM Prayer Room </option>
		  <option value="ETYSBM ">ETYSBM </option>
          <option value="SLHS ">SLHS </option>
		  <option value="Transient Office ">Transient Office </option>
        `;
      }
    }

function setAlarm() {
    var initialFloor = document.getElementById('initialFloorAlarm').value;
    var initialLocation = document.getElementById('initialLocationAlarm').value;
    var desiredFloor = document.getElementById('desiredFloorAlarm').value;
    var desiredLocation = document.getElementById('desiredLocationAlarm').value;
    var alarmTime = document.getElementById('alarmTime').value;
    var selectedDays = [];
    document.querySelectorAll('input[name="day"]:checked').forEach(function(checkbox) {
        selectedDays.push(checkbox.value);
    });

    if (initialFloor.trim() === '' || initialLocation.trim() === '' || desiredFloor.trim() === '' || desiredLocation.trim() === '' || alarmTime.trim() === '' || selectedDays.length === 0) {
        alert('Please fill all fields and select at least one day for the alarm.');
        return;
    }

    var alarmItem = document.createElement('li');
    alarmItem.classList.add('alarm-item');
    alarmItem.textContent = `${initialFloor} Floor, ${initialLocation} to ${desiredFloor} Floor, ${desiredLocation} - Alarm at ${alarmTime}, Days: ${selectedDays.join(', ')}`;

    alarmItem.setAttribute('data-initial-floor', initialFloor);
    alarmItem.setAttribute('data-initial', initialLocation);
    alarmItem.setAttribute('data-desired-floor', desiredFloor);
    alarmItem.setAttribute('data-desired', desiredLocation);
    alarmItem.setAttribute('data-time', alarmTime);
    alarmItem.setAttribute('data-days', JSON.stringify(selectedDays)); // Store selected days

    var deleteButton = document.createElement('button');
    deleteButton.classList.add('delete-button');
    deleteButton.textContent = 'X';
    deleteButton.onclick = function() {
        alarmItem.remove();
        saveAlarms();
    };

    alarmItem.appendChild(deleteButton);

    document.getElementById('alarms-list').appendChild(alarmItem);

    // Schedule playing the alarm sound
var audio = document.getElementById('alarmSound');
var currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
if (selectedDays.includes(currentDay)) {
    var alarmDateTime = new Date();
    var alarmTimeParts = alarmTime.split(':');
    alarmDateTime.setHours(parseInt(alarmTimeParts[0]));
    alarmDateTime.setMinutes(parseInt(alarmTimeParts[1]));
    var timeUntilAlarm = alarmDateTime - new Date();
    if (timeUntilAlarm > 0) {
        setTimeout(function() {
            audio.play();
        }, timeUntilAlarm);
    }
}

    // Show popup message if both conditions are met
    var clickedOnScreen = false;
    document.addEventListener('click', function() {
        clickedOnScreen = true;
        if (!audio.paused && clickedOnScreen) {
            // Show popup message
            alert('Alarm activated');
        }
    });

    saveAlarms();

    // Clear form fields and checkboxes
    document.getElementById('initialFloorAlarm').value = '';
    document.getElementById('initialLocationAlarm').value = '';
    document.getElementById('desiredFloorAlarm').value = '';
    document.getElementById('desiredLocationAlarm').value = '';
    document.getElementById('alarmTime').value = '';
    document.querySelectorAll('input[name="day"]:checked').forEach(function(checkbox) {
        checkbox.checked = false;
    });
}

//--------------------------------------------------------------------------------------------------------

function checkConditionsAndShowPopup() {
    var audio = document.getElementById('alarmSound');
    var clickedOnScreen = false;

    if (!audio.paused && clickedOnScreen) {
        // Show popup message
        alert('Alarm activated');
    }
}



function triggerAlarm() {
    var initialFloor = document.getElementById("initialFloorInput").value;
    var initialLocation = document.getElementById("initialLocationInput").value;
    var finalFloor = document.getElementById("finalFloorInput").value;
    var finalLocation = document.getElementById("finalLocationInput").value;

    var url = `Main Page.html?initialFloor=${initialFloor}&initialLocation=${initialLocation}&finalFloor=${finalFloor}&finalLocation=${finalLocation}`;

    window.location.href = url;
}


function monitorAlarmConditions() {
    // Assuming you have variables condition1Met and condition2Met that track the two conditions

    if (condition1Met && condition2Met) {
        transferData();
    }
}

// Transfer data from local storage to main page
function transferData() {
    var savedData = JSON.parse(localStorage.getItem('savedData'));

    // Transfer data to main page 
    document.getElementById('initialFloor').value = savedData.initialFloor;
    document.getElementById('initialLocation').value = savedData.initialLocation;
    document.getElementById('desiredFloor').value = savedData.desiredFloor;
    document.getElementById('desiredLocation').value = savedData.desiredLocation;

    // Automatically fill dropdown boxes with saved data
    document.getElementById('initialFloorDropdown').value = savedData.initialFloor;
    document.getElementById('initialLocationDropdown').value = savedData.initialLocation;
    document.getElementById('desiredFloorDropdown').value = savedData.desiredFloor;
    document.getElementById('desiredLocationDropdown').value = savedData.desiredLocation;
}

monitorAlarmConditions();


	function conditionTransfer(){
		if(condition1 && contiion2)
	
	}




//--------------------------------------------------------------------------------------------------------

    function saveAlarms() {
      var alarms = document.querySelectorAll('.alarm-item');
      var alarmsData = [];

      alarms.forEach(function(alarm) {
        var days = JSON.parse(alarm.getAttribute('data-days')); // Parse stored days
        var daysString = days.join(', '); // Convert array of days to a comma-separated string
        alarmsData.push({
          initialFloor: alarm.getAttribute('data-initial-floor'),
          initial: alarm.getAttribute('data-initial'),
          desiredFloor: alarm.getAttribute('data-desired-floor'),
          desired: alarm.getAttribute('data-desired'),
          time: alarm.getAttribute('data-time'),
          days: daysString // Store selected days as a string
        });
      });

      localStorage.setItem('alarms', JSON.stringify(alarmsData));
    }
	
	function loadAlarms() {
  var storedAlarms = localStorage.getItem('alarms');
  if (storedAlarms) {
    var alarmsData = JSON.parse(storedAlarms);

    alarmsData.forEach(function(alarmData) {
      var alarmItem = document.createElement('li');
      alarmItem.classList.add('alarm-item');
      alarmItem.textContent = `${alarmData.initialFloor} Floor, ${alarmData.initial} to ${alarmData.desiredFloor} Floor, ${alarmData.desired} - Alarm at ${alarmData.time}, Days: ${alarmData.days}`;

      alarmItem.setAttribute('data-initial-floor', alarmData.initialFloor);
      alarmItem.setAttribute('data-initial', alarmData.initial);
      alarmItem.setAttribute('data-desired-floor', alarmData.desiredFloor);
      alarmItem.setAttribute('data-desired', alarmData.desired);
      alarmItem.setAttribute('data-time', alarmData.time);
      alarmItem.setAttribute('data-days', alarmData.days);

      var deleteButton = document.createElement('button');
      deleteButton.classList.add('delete-button');
      deleteButton.textContent = 'X';
      deleteButton.onclick = function() {
        alarmItem.remove();
        saveAlarms();
      };

      alarmItem.appendChild(deleteButton);
      document.getElementById('alarms-list').appendChild(alarmItem);
    });
  }
}

    function loadAlarm(event) {

	   if (event.target.classList.contains('alarm-item') || event.target.classList.contains('delete-button')) {
        if (!event.target.classList.contains('delete-button')) {
          var initialFloor = event.target.getAttribute('data-initial-floor');
          var initialLocation = event.target.getAttribute('data-initial');
          var desiredFloor = event.target.getAttribute('data-desired-floor');
          var desiredLocation = event.target.getAttribute('data-desired');
          var time = event.target.getAttribute('data-time');
          var days = JSON.parse(event.target.getAttribute('data-days')); // Parse stored days

          alert(`Alarm set from ${initialFloor} Floor, ${initialLocation} to ${desiredFloor} Floor, ${desiredLocation} at ${time}, Days: ${days.join(', ')}`);
        }
      }
    }

    function backToMainPage() {
      window.location.href = 'Main Page.html';
    }

    window.addEventListener('load', loadAlarms);
  </script>

</body>
</html>document.addEventListener("DOMContentLoaded", function() {
  // Get the canvas element
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");

  // Create an image object
  var backgroundImage = new Image();

  // Set the source of the image
  backgroundImage.src = "images/pic1.png"; // Replace with the actual path to your image

  // Once the image is loaded, draw it on the canvas
    backgroundImage.onload = function () {
        // Set the canvas size to match the desired image size
        canvas.width = 1073;
        canvas.height = 595;

        // Draw the image on the canvas with the specified size
        ctx.drawImage(backgroundImage, 0, 0, 1073, 595);
    };
});

class Graph {
  constructor() {
      this.vertices = new Map();
  }

  addVertex(id, x, y) {
      if (!this.vertices.has(id)) {
          this.vertices.set(id, { id, x, y, neighbors: [] });
      }
  }

  addEdge(vertex1Id, vertex2Id) {
      const vertex1 = this.vertices.get(vertex1Id);
      const vertex2 = this.vertices.get(vertex2Id);

      if (!vertex1 || !vertex2) {
          console.error("One or more vertices not found!");
          return;
      }

      vertex1.neighbors.push(vertex2);
      vertex2.neighbors.push(vertex1); // for undirected graph
  }

  bfs(startVertexId, endVertexId) {
      const visited = new Set();
      const queue = [[this.vertices.get(startVertexId)]];

      while (queue.length > 0) {
          const path = queue.shift();
          const currentVertex = path[path.length - 1];

          if (visited.has(currentVertex.id)) {
              continue;
          }

          visited.add(currentVertex.id);

          const neighbors = currentVertex.neighbors;

          for (const neighbor of neighbors) {
              const newPath = [...path, neighbor];

              if (neighbor.id === endVertexId) {
                  return newPath;
              } else {
                  queue.push(newPath);
              }
          }
      }

      return null; // If no path is found
  }
}




  
  function findShortestPath() {

    startVertex = document.getElementById('initialLocationBookmark').value;
    endVertex = document.getElementById('desiredLocationBookmark').value;
    var backgroundImage = new Image();
    backgroundImage.src = "images/pic1.png"; 

    //console.log(startVertex)
    const graph = new Graph();
  graph.addVertex('elevator', 455, 365) //elevator
  graph.addVertex('fire-exit-elevator', 410, 305) //fire-exit-elevator
  graph.addVertex('canteen', 230, 290) //canteen
  graph.addVertex('Student lounge 1', 470, 195) //Student lounge 1
  graph.addVertex('hallway', 590, 275) //hallway
  graph.addVertex('clinic', 700, 245) //clinic
  graph.addVertex('orientation room', 785, 260) //orientation room
  graph.addVertex('counsellor', 920, 275) //counsellor
  graph.addVertex('multi-purpose', 945, 280) //multi-purpose
  graph.addVertex('tech serve', 990, 290) //tech serve
  graph.addVertex('student council', 785, 310) //student council
  graph.addVertex('SOCIP', 820, 310) //SOCIP
  graph.addVertex('Registrar', 790, 365) //Registrar
  graph.addVertex('admission', 840, 410) //admission
  graph.addVertex('treasury', 840, 470) //treasury
  graph.addVertex('student lounge 2', 700, 360) // student lounge 2
  graph.addVertex('waiting area', 785, 440) // waiting area
  graph.addVertex('fire exit 2', 640, 400) //fire exit 2
  graph.addVertex('lobby area', 640, 440) //lobby area
  graph.addVertex('bookstore',370 ,515 ) //bookstore
  graph.addVertex('1', 455, 435) //1
  graph.addVertex('2', 455, 305) //2
  graph.addVertex('3', 455, 275) //3
  graph.addVertex('4', 350 ,275) //4
  graph.addVertex('5', 350, 195) //5
  graph.addVertex('6',700, 275) //6
  graph.addVertex('7',785, 275) //7
  graph.addVertex('8',845 , 285) //8
  graph.addVertex('9', 920, 285) //9
  graph.addVertex('10', 945, 300) //10
  graph.addVertex('11',990, 300) //11
  graph.addVertex('12', 820, 275) //12
  graph.addVertex('13', 845, 440) //13
  graph.addVertex('14', 640, 550 ) //14
  graph.addVertex('15', 455, 550 ) //15
  graph.addVertex('16',370 , 550 )//16
  graph.addVertex('17',845 , 365 )//17
  graph.addVertex('18',700, 440)//18
  graph.addVertex('19',640, 435)//19
  graph.addVertex('20',820, 290)//20
  

  
  graph.addEdge('elevator', '1'); //elevator to lobby
  graph.addEdge('elevator', '2'); //elevator to stairs
  graph.addEdge('elevator', '3'); //elevator to lobby
  graph.addEdge('fire-exit-elevator', '2'); //fire-exit edge
  graph.addEdge('canteen', '4'); //canteen to near canteen exit
  graph.addEdge('Student lounge 1', '5');  //student lounge to canteen entrancce
  graph.addEdge('Student lounge 1', '3'); //student lounge to elevator
  graph.addEdge('hallway', '3'); //hallway to elevator
  graph.addEdge('hallway', '6');  //hallway to clinic
  graph.addEdge('clinic', '6'); //clinic edge
  graph.addEdge('orientation room', '7'); //orientation room edge 
  graph.addEdge('counsellor', '9'); //counsellor edge
  graph.addEdge('multi-purpose', '10'); //multipurpose edge
  graph.addEdge('tech serve', '11'); //techserve edge
  graph.addEdge('student council', '7'); //council edge
  graph.addEdge('SOCIP', '20'); //SOCIP edge
  graph.addEdge('Registrar', '17'); //registrar edge
  graph.addEdge('admission', 'treasury');
  graph.addEdge('admission', '17');
  graph.addEdge('treasury', 'admission'); //treasury to admission
  graph.addEdge('student lounge 2', '6'); //lounge to hallway
  graph.addEdge('student lounge 2', '18'); //lounge to waiting
  graph.addEdge('waiting area', '18'); //waiting area edge
  graph.addEdge('fire exit 2', '19'); //fire exit edge
  graph.addEdge('lobby area', '14'); //entrance
  graph.addEdge('lobby area', '1'); //lobby to elevator
  graph.addEdge('bookstore', '16'); //bookstore edge

  graph.addEdge('15', '16');
  graph.addEdge('18', '19');
  graph.addEdge('16', '15');
  graph.addEdge('15', '1');
  graph.addEdge('3', '4');
  graph.addEdge('8', '17');
  graph.addEdge('14', '15');
  graph.addEdge('5', '4');
  graph.addEdge('6', '7');
  graph.addEdge('7', '13');
  graph.addEdge('13', '8');
  graph.addEdge('8', '9');
  graph.addEdge('9', '10');
  graph.addEdge('10', '11');
  graph.addEdge('7', '8');
  graph.addEdge('7', '11');
  graph.addEdge('7', '10');
  graph.addEdge('6', '20');
  graph.addEdge('treasury', '8');
  graph.addEdge('9', '20');  
  graph.addEdge('11', '20');  //tech to SOCIP
  graph.addEdge('11', '8');  //tech to reg room
  graph.addEdge('6', '11');  //tech to clinic
  graph.addEdge('hallway', '11');  //tech to hallway
  graph.addEdge('Student Lounge 1', '11');  //tech to stud lounge 1
  graph.addEdge('2', '3');
  graph.addEdge('hallway', '8');  

  const shortestPath = graph.bfs(startVertex, endVertex);
  var canvas = document.getElementById('canvas');
  var ctx = canvas.getContext('2d');

  // Clear the canvas
  //ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  
  if (shortestPath) {
    console.log(`Shortest path from ${startVertex} to ${endVertex}: ${shortestPath.join(' -> ')}`);

    // Draw the image on the canvas
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
    ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Set the line color
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;

    // Draw lines along the shortest path
    for (let i = 0; i < shortestPath.length - 1; i++) {
        const currentVertex = shortestPath[i];
        const nextVertex = shortestPath[i + 1];

        // Draw a line between currentVertex and nextVertex
        ctx.beginPath();
        ctx.moveTo(currentVertex.x, currentVertex.y);
        ctx.lineTo(nextVertex.x, nextVertex.y);
        ctx.stroke();
    }
} else {
    console.log(`No path found from ${startVertex} to ${endVertex}`);
}

  }

  
  
  