console.log("Script is loaded and running.");

document.getElementById('akanForm').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form submission
  console.log("Form submitted.");

  const birthdate = document.getElementById('birthdate').value;
  console.log("Birthdate input value:", birthdate);

  const day = parseInt(birthdate.split("-")[2]);
  const month = parseInt(birthdate.split("-")[1]);
  const year = parseInt(birthdate.split("-")[0]);
  console.log("Parsed day:", day, "Parsed month:", month, "Parsed year:", year);

  const genderInput = document.querySelector('input[name="gender"]:checked');
  console.log("Gender input:", genderInput ? genderInput.value : "No gender selected");

  // Input validation
  if (isNaN(day) || day < 1 || day > 31) {
    alert("Please enter a valid day (1-31).");
    console.log("Invalid day input.");
    return;
  }

  if (isNaN(month) || month < 1 || month > 12) {
    alert("Please enter a valid month (1-12).");
    console.log("Invalid month input.");
    return;
  }

  if (!genderInput) {
    alert("Please select your gender.");
    console.log("No gender selected.");
    return;
  }

  const gender = genderInput.value;
  console.log("Selected gender:", gender);

  // Extract century (CC) and year (YY)
  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = day;
  console.log("Century (CC):", CC, "Year (YY):", YY, "Month (MM):", MM, "Day (DD):", DD);

  // Akan name formula:
  const d = Math.floor(((4 * CC - 2 * CC - 1) + (5 * YY) + Math.floor(26 * (MM + 1) / 10) + DD) % 7);
  console.log("Raw day index (d):", d);

  const dayIndex = ((d + 7) % 7); // Ensure it's a positive index between 0–6
  console.log("Final day index (dayIndex):", dayIndex);

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let akanName = "";
  if (gender === "male") {
    akanName = maleNames[dayIndex];
  } else {
    akanName = femaleNames[dayIndex];
  }

  console.log("Generated Akan name:", akanName);

  document.getElementById('result').innerText =
    `You were born on a ${daysOfWeek[dayIndex]}. Your Akan name is: ${akanName}`;
});
