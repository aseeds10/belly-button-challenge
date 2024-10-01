// Build the metadata panel
//ME NOTE: input only sample id number when running code?
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    const metaD = data.metadata;
    console.log(metaD);

    // Filter the metadata for the object with the desired sample number
    // let sampleNum = metaD.id //not hardcoding sample# BUT does not limit it in the function...will this be an issue?
    let filterMetadata = metaD.filter(metaD => metaD.id === sample);
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
      Mypanel.append("p").text("No metadata found for the selected sample number.");
    }
  });
}

// function to build both charts
//ME NOTE: input only sample id # to run correctly
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    const samplesD = data.samples;
    console.log(samplesD);

    // Filter the samples for the object with the desired sample number
    let filterSampdata = samplesD.filter(samplesD => samplesD.id === sample);
    console.log(filterSampdata);

    // Get the otu_ids, otu_labels, and sample_values
    let otu_ids = filterSampdata.otu_ids;
    let otu_labels = filterSampdata.otu_labels;
    let sample_values = filterSampdata.sample_values;
    console.log([otu_ids, otu_labels, sample_values]);

  // Build a Bubble Chart
    // Set dimensions for the bubble chart
    const width = 800;
    const height = 400;

    // Create an SVG container for the bubble chart
    const svg = d3.select("#bubble")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

    // Create bubbles
    const bubbles = svg.selectAll(".bubble")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "bubble")
      .attr("cx", d => d.otu_ids) //x value
      .attr("cy", d => d.sample_values) //y value
      // .attr("cy", d => height - d.sample_value) // y-value; Invert y-axis for better visualization
      // .attr("r", d => d.sample_value / 2) // Use sample_value for marker size
      .attr("r", d => d.sample_value) // Use sample_value for marker size
      // .style("fill", "steelblue");
      .style("fill", d => d3.schemeCategory10[d.otu_id % 10]) // Use otu_id for marker colors
      .style("opacity", 0.7);
    
    svg.selectAll(".label")
      .data(data)
      .enter()
      .append("text")
      .attr("class", "label")
      // .attr("x", d => d.otu_id * 10) // Scale otu_id for better visualization
      .attr("x", d => d.otu_id) // label x axis
      // .attr("y", d => height - d.sample_value)
      .attr("y", d => d.sample_value)
      .attr("dy", ".35em") // Adjust vertical alignment
      .attr("text-anchor", "middle")
      .text(d => d.label);

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
