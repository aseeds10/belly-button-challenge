// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    const metadata = data.metadata;
    console.log(metadata);

    // Filter the metadata for the object with the desired sample number
    sampleNum = 940; //change to desired integer
    filterMetadata = metadata.filter(metadata => metadata.id === sampleNum);
    console.log(filterMetadata);
    // Use d3 to select the panel with id of `#sample-metadata`
    const Mypanel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    Mypanel.html("")

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
    
    // MY ATTEMPT 1
    // for (let i = 0; i < filterMetadata.length; i++) {
    //   const row = myPanel[i]; //current row
      // Mypanel.append("#new-tag").text(`${key}: ${value}`);

    // RECCOMMENDED
    if (filterMetadata.length > 0) { // Check if there is any filtered metadata
      const row = filterMetadata[0]; // Get the first (and should be the only) object from the filtered metadata
      for (const [key, value] of Object.entries(row)) { // Use Object.entries to loop through key-value pairs
        Mypanel.append("p").text(`${key}: ${value}`); // Append a new paragraph for each key-value
      }
    } else {
      Mypanel.append("p").text("No metadata found for the selected sample number."); // Handle case with no results
    }
  });
}

// function to build both charts
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field


    // Filter the samples for the object with the desired sample number


    // Get the otu_ids, otu_labels, and sample_values


    // Build a Bubble Chart


    // Render the Bubble Chart


    // For the Bar Chart, map the otu_ids to a list of strings for your yticks


    // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately


    // Render the Bar Chart

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field


    // Use d3 to select the dropdown with id of `#selDataset`


    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new
    // option for each sample name.


    // Get the first sample from the list


    // Build charts and metadata panel with the first sample

  });
}

// Function for event listener
function optionChanged(newSample) {
  // Build charts and metadata panel each time a new sample is selected

}

// Initialize the dashboard
init();
