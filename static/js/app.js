// Assign the data from `data.js` to a descriptive variable
var sightings = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
    // clear body
    d3.select("tbody").html("");

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  

  var filteredData = sightings.filter(sighting => sighting.datetime === inputValue);
  


  filteredData.forEach(sighting=>{
    var row=d3.select("tbody").append("tr");
      
      row.append("td").text(sighting.datetime);
      row.append("td").text(sighting.city);
      row.append("td").text(sighting.state);
      row.append("td").text(sighting.country);
      row.append("td").text(sighting.shape);
      row.append("td").text(sighting.durationMinutes);
      row.append("td").text(sighting.comments);
});
});
