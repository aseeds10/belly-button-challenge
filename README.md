# Belly Button Biodiversity Dashboard

## Table of Contents
- [Project Overview](#project-overview)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Features](#features)
- [Code Snippets](#code-snippets)
- [Acknowledgments](#acknowledgments)

---

## Project Overview
This project builds an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels. The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs) were present in over 70% of people, while others were relatively rare.

The application provides an interactive view of the dataset, offering insights into the frequency of various microbial species in human belly buttons. Users can select a test subject from a dropdown menu to view the relevant data visualizations.

**Live Demo**: https://aseeds10.github.io/belly-button-challenge/

---

## Technologies Used
- **JavaScript**: For dynamic content and interactivity
- **D3.js**: Data-driven document manipulation to render graphs and charts
- **Plotly**: For creating interactive plots
- **HTML/CSS**: For structuring and styling the app

---

## Installation
1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/aseeds10/belly-button-challenge.git

Install Plotly and D3.js libraries by adding the following scripts in your HTML file:
html
Copy
<script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
<script src="https://d3js.org/d3.v7.min.js"></script>

## Features
Interactive Bubble Chart: Displays the most abundant microbes found in human belly buttons.
Dynamic Pie Chart: Visualizes the top microbial species by frequency.
Dropdown Menu: Allows users to select and explore different test subjects' data.
Detailed Information: Displays metadata about the selected test subject, including demographic details and microbial diversity.
## Code Snippets

### Bubble Sort
This code snippet creates a dynamic bubble chart to visualize the most abundant microbes in the dataset.
```javascript Plotly.newPlot('bubble', [{ x: otu_ids, y: sample_values, text: otu_labels, mode: 'markers', marker: { size: sample_values, color: otu_ids, colorscale: 'YlGnBu' } }], layout);
```



### Pie Chart
This code generates an interactive pie chart showing the top microbial species by frequency for a selected test subject.

```javascript Plotly.
Plotly.newPlot('pie', [{
    values: sample_values,
    labels: otu_ids,
    hoverinfo: 'label+percent',
    type: 'pie'
}], layout);
```


## Acknowledgments 
Special thanks to Xpert Learning Assistant for assistance debugging and setting up the template for creating the bubble chart with Plotly.
Dataset from the Rob Dunn Lab: Belly Button Biodiversity.
Plotly and D3.js for their libraries, which were used to create the interactive visualizations.
