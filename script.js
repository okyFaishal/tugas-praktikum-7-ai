const rules = {
  "Overheating": ["Noisy fan", "High temperature", "Slow performance"],
  "RAM Issue": ["Slow performance", "Application crash", "Blue screen"],
  "Hard Drive Failure": ["Corrupted data", "Abnormal sound", "Slow boot"],
  "Virus Infection": ["Slow performance", "Ad pop-ups", "Missing files"],
  "Driver Issue": ["Device error", "Blue screen", "Slow performance"],
  "Network Problem": ["Internet disconnect", "Websites not loading"],
  "Power Supply Failure": ["Sudden shutdown", "Does not turn on"],
  "Display Issue": ["Blank screen", "Lines on screen", "Color distortion"],
  "Software Conflict": ["Application crash", "Slow performance", "Error message"],
  "Operating System Error": ["Blue screen", "Slow boot", "Corrupted files"],
};

// Load symptoms into two columns
function loadSymptoms() {
  const symptomsDiv = document.getElementById("symptoms");
  const allSymptoms = Array.from(
    new Set(Object.values(rules).flat())
  ); // Get unique symptoms

  // Split symptoms into two columns
  const midpoint = Math.ceil(allSymptoms.length / 2);
  const columns = [
    allSymptoms.slice(0, midpoint),
    allSymptoms.slice(midpoint),
  ];

  // Add symptoms into each column
  columns.forEach((symptoms, index) => {
    const columnDiv = document.createElement("div");
    columnDiv.classList.add("checkbox-column");

    symptoms.forEach((symptom) => {
      const container = document.createElement("div");
      container.classList.add("checkbox-container");

      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.value = symptom;
      checkbox.id = symptom;

      const label = document.createElement("label");
      label.htmlFor = symptom;
      label.innerText = symptom;

      container.appendChild(checkbox);
      container.appendChild(label);
      columnDiv.appendChild(container);
    });

    symptomsDiv.appendChild(columnDiv);
  });
}

// Backward chaining to diagnose based on selected symptoms
function backwardChaining(selectedSymptoms, rules) {
  const diagnoses = [];
  for (const [problem, requirements] of Object.entries(rules)) {
    if (requirements.some((symptom) => selectedSymptoms.includes(symptom))) {
      diagnoses.push(problem);
    }
  }
  return diagnoses;
}

function diagnose() {
  const selectedSymptoms = Array.from(
    document.querySelectorAll("#symptoms input[type=checkbox]:checked")
  ).map((checkbox) => checkbox.value);

  const diagnosis = backwardChaining(selectedSymptoms, rules);

  const resultDiv = document.getElementById("result");
  if (diagnosis.length > 0) {
    resultDiv.innerHTML = `<strong>Diagnosis:</strong> ${diagnosis.join(", ")}`;
  } else {
    resultDiv.innerHTML = "No matching diagnosis found.";
  }
}

// Load symptoms when the page is accessed
document.addEventListener("DOMContentLoaded", loadSymptoms);
