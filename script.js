"use strict"





// Šalis: Portugalija, joje gyvena 10.26 mln. gyventojų.
// Valstybės plotas: 92212 km², plotas tenkantis vienam gyventojui: 8987.52 m².

// Italy 301,230 km2  60,31
// Sweden 450,295 km2 10,4
// Kazakhstan 2,724,900 19,082,467
// Estonia 45,339 1,328,439

var countries = [
    {country: "Italy", population: 60310000 , area: 92212 },
    {country: "Sweden", population: 1040000, area: 450295 },
    {country: "Kazakhstan", population: 19082467, area: 2724900},
    {country: "Estonia", population: 1328439, area: 45339 },
    {country: "Lithuania", population: 2795680,  area: 65300 }
]


for (var x of countries){
    var density = x.area * 1000000 / x.population
    var densityRounded = x.density.toFixed(2) 
    var populationRounded = x.population.toFixed(2)
console.log(`${x.country} , joje gyvena: ${x.populationRounded} gyventojų.`)
console.log(`Valstybės plotas: ${x.area} km2, plotas tenkantis vienam gyventojui: ${x.densityRounded} m²`);
}



