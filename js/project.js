// <a href='https://www.macrotrends.net/countries/USA/united-states/birth-rate'>U.S. Birth Rate 1950-2021</a>
const xlabels = [];
const ylabels = [];
var fileName = "United-states-births.csv";
//var file = document.querySelector(filename).files[0];

$("#content").toggleClass("padding");

chartIt();
async function chartIt(){
  await getData();
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        label: "year",
        labels: xlabels,
          datasets: [{
              label: 'Number of Births in millions',
              data: ylabels,
              borderWidth: 1
          }]
      },
  });
}
//Gets the data from hosted site and parses it.
async function getData(){
  //The fetch function allows the hosted file to be read and splits the data into values.
  response = await fetch('https://raw.githubusercontent.com/robert00000/Art101-Project-Group-2/main/births.csv');
  const data = await response.text();
  const table = data.split('\n').slice(1);
  table.forEach(row =>{
    const columns = row.split(',');
    const year = columns[0];
    xlabels.push(year)
    const birth = columns[1];
    ylabels.push(birth);
    console.log(year, birth);
  })
}
//
// $("#button").click(function(){
//   console.log("Button pushed")
//
// })
