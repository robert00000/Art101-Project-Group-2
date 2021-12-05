


// <a href='https://www.macrotrends.net/countries/USA/united-states/birth-rate'>U.S. Birth Rate 1950-2021</a>


const xlabels = [1,2,3,4,5,6,7,8,9,10 ];
const ylabels = [10,20,30,40,5,15,60,10];


chartIt();
async function chartIt(){
  //await getData();
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        label: "year",
        labels: xlabels,
          datasets: [{
              label: 'Number of Births',
              data: ylabels,
              borderWidth: 1
          }]
      },
  });
}

async function getData(){
  const response = await fetch('united-states-births.csv');
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
