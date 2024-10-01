// Build the metadata panel
function buildMetadata(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // get the metadata field
    const metaD = data.metadata;
    console.log(metaD);

    // Filter the metadata for the object with the desired sample number
    // console.log(metaD[0].id)
    let filterMetadata = metaD.filter(metaD => metaD.id === +sample);
    console.log(filterMetadata);

    // Use d3 to select the panel with id of `#sample-metadata`
    const Mypanel = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    Mypanel.html("")

    // Inside a loop, you will need to use d3 to append new
    // tags for each key-value in the filtered metadata.
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
function buildCharts(sample) {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the samples field
    const samplesD = data.samples;
    console.log(samplesD);

    // Filter the samples for the object with the desired sample number
    let filterSampdata = samplesD.filter(samplesD => samplesD.id === sample);
    console.log(filterSampdata);

  // Declare variables outside the loop
  let otu_ids, otu_labels, sample_values;

  // Iterate over each object in the filtered array
  filterSampdata.forEach(sampleObj => {
    otu_ids = sampleObj.otu_ids;
    otu_labels = sampleObj.otu_labels;
    sample_values = sampleObj.sample_values;

    // Log or process each sample's data
    console.log("OTU IDs:", otu_ids);
    console.log("OTU Labels:", otu_labels);
    console.log("Sample Values:", sample_values); })

  // Build a Bubble Chart
// Plotly Bubble Chart
  var trace = {
    x: otu_ids,
    y: sample_values,
    text: otu_labels,
    mode: 'markers',
    marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Viridis',
        showscale: true},
    hoverinfo: 'text: sample_values' // Place hoverinfo here, not in marker
  };

  var bubbleData = [trace];

  // Layout for the bubble chart
  var layout = {
    title: 'Bacteria Cultures Per Sample',
    xaxis: { title: 'OTU ID' },
    yaxis: { title: 'Number of Bacteria' },
    showlegend: false
  };

  // Create the bubble chart
  Plotly.newPlot('bubble', bubbleData, layout);


// Plotly Bar Chart
  // For the Bar Chart, map the otu_ids to a list of strings for your yticks
  // NOTE: original seems to already be in order of largest to smallest Svalues
    const yTicks = otu_ids.slice(0, 10).reverse().map((id) => {
      return `OTU ID ${id}`; // Combine ID with corresponding label
    });
    const values = sample_values.slice(0, 10).reverse()

  // Build a Bar Chart
    // Don't forget to slice and reverse the input data appropriately
    const traceBub = {
      x: values,
      y: yTicks,
      type: 'bar',
      orientation: 'h',
      text: otu_labels.slice(0, 10).reverse(),
      hoverinfo: 'text, values'
    };
  
    const layoutBub = {
      title: 'Top 10 Bacteria Cultures Found',
      xaxis: { title: 'Number of Bacteria' },
      };

    // Render the Bar Chart
    Plotly.newPlot('bar', [traceBub], layoutBub);

  });
}

// Function to run on page load
function init() {
  d3.json("https://static.bc-edx.com/data/dl-1-2/m14/lms/starter/samples.json").then((data) => {

    // Get the names field
    const namesD = data.names;
    console.log(namesD);

    // Use d3 to select the dropdown with id of `#selDataset`
    const myDropdown = d3.select("#selDataset");

    // Use the list of sample names to populate the select options
    // Hint: Inside a loop, you will need to use d3 to append a new option for each sample name.
    
    // bind sample names to dropdown & append to dropdown
    namesD.forEach(namesD => {
      myDropdown.append("option")
          .text(namesD) // Set the text of the option
          .property("value", namesD); // Set the value of the option
    });

    // Get the first sample from the list
    let firstS = namesD[0]
    console.log(`first sample: ${firstS}`)

    // Build charts and metadata panel with the first sample
    buildMetadata(firstS);
    buildCharts(firstS);
  });
}

// Function for event listener
function optionChanged(newSample) {
  console.log(newSample) //check
  
  //event listener
  d3.select("#selDataset").on("change", function() {
    const newSample = d3.select(this).property("value");
    optionChanged(newSample);
  });

  // Build charts and metadata panel each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
}

// Initialize the dashboard
init();
