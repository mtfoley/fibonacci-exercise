import { filterValues, generateFibonacci, MAX_SAFE_INT } from "./utilities.mjs";

function getResultsHTML(results) {
  // If no results, return table cell indicating no results
  if (results.length == 0) return '<tr><td colspan="2">No Results</td></tr>';
  // Start with header row
  // Iterate to add table row for each result
  let html = "";
  results.forEach(({ value }, i) => {
    html += `<tr><th scope="row">${i + 1}</th><td>${value.toLocaleString()}</td></tr>`;
  });
  html = `<caption>Fibonacci Sequence</caption>
    <tbody>
    <tr><th scope=\"col\">Index</th><th scope=\"col\">Value</th></tr>${html}</tbody>`;
  return html;
}

function setupPage() {
  // Assign page elements to variables
  let evenCheck = document.getElementById("filter-even");
  let primeCheck = document.getElementById("filter-prime");
  let oddDigitCheck = document.getElementById("filter-odd-digit");
  let resultContainer = document.getElementById("results");
  let resultInfo = document.getElementById("results-info");
  // Utility function for generating filter list expected by filterValues()
  const getFilters = function () {
    let filterStrings = [];
    if (evenCheck.checked) filterStrings.push("even");
    if (primeCheck.checked) filterStrings.push("prime");
    if (oddDigitCheck.checked) filterStrings.push("oddDigit");
    return filterStrings;
  };
  // Populate dynamic portions of page. Applies filters on each run.
  const populate = function () {
    const results = filterValues(fibonacci, getFilters());
    resultInfo.innerHTML = `Maximum supported value is ${MAX_SAFE_INT.toLocaleString()}. Number of results = ${
      results.length
    }`;
    resultContainer.innerHTML = getResultsHTML(results);
  };
  // Run populate() anytime a filtering checkbox is changed.
  evenCheck.addEventListener("change", populate);
  primeCheck.addEventListener("change", populate);
  oddDigitCheck.addEventListener("change", populate);
  // Run populate() for initial display.
  populate();
}

// Initialize fibonacci set ahead of page load and filter against it for user interactions
const fibonacci = generateFibonacci();

// If this is running in a web browser, initialize page behaviors.
if (window) window.onload = setupPage;
