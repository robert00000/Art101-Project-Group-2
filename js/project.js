


// <a href='https://www.macrotrends.net/countries/USA/united-states/birth-rate'>U.S. Birth Rate 1950-2021</a>


const xlabels = [];
const ylabels = [];


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
// var lineObj = $.ajax({
//     "id": 1,
//    "name": "Contraceptive prevalence: Any method (Percent)",
//    "shortName": "CPAnyP",
//    "description": "Percentage of women of reproductive age (15-49 years) who are currently using any method of contraception",
//    "displayName": "Any",
//    "dimAge": false,
//    "dimSex": false,
//    "dimVariant": true,
//    "dimCategory": true,
//    "defaultAgeId": 31,
//    "defaultSexId": 2,
//    "defaultVariantId": 4,
//    "defaultCategoryId": 100,
//    "variableType": "relative",
//    "unitScaling": 0.01,
//    "numberOfDecimals": 1,
//    "isThousandSeparatorSpace": false,
//    "formatString": "#0.0",
//    "unitShortLabel": "%",
//    "unitLongLabel": "per cent",
//    "nClassesDefault": 5,
//    "downloadFileName": "PercentageContraceptive_AnyMethod",
//    "topicId": 5,
//    "sourceId": 15,
//    "topic": null,
//    "source": {
//      "id": 15,
//      "name": "Estimates and Projections of Family Planning Indicators",
//      "sourceYear": 2020,
//      "startYear": 1970,
//      "endYear": 2030,
//      "citation": "United Nations, Department of Economic and Social Affairs, Population Division (2020). Model-based Estimates and Projections of Family Planning Indicators 2020, custom data acquired via website.",
//      "url": "http://www.un.org/en/development/desa/population/theme/family-planning/cp_model.asp"
//         success: function(data) {
//              // do stuff
//             console.log(data);
//             //Variables to get data from the image in simplified form.
//             var imgUrl = data.img;
//             var title = data.title;
//             var alt = data.alt;
//
//             //$("#output").text(title);
//             $("#image").attr("title", title);
//             $("#output").text(title);
//
//             $("#image").attr("src", imgUrl, "alt", alt);
//
//             $("#alt").text(alt);
//           //  $("#alt").text(alt);
//         },
async function getData(){
  const response = await fetch('https://population.un.org/dataportal/data/indicators/47/locations/840/start/1990/end/2021/line/linetimeplot/api');
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
