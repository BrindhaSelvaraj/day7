var req = new XMLHttpRequest();
req.open("GET", "https://restcountries.com/v2/all");
req.send();

req.onload = function () {
  var countries = JSON.parse(req.responseText);
  //console.log(countries)
  //console.log(
   // countries.filter((item) => item.currencies[0].code == "AFN"),
   // "countries"
  //);
  // 1. Get all the countries from Asia continent/region using Filter function
  var asiaCountries = countries.filter((country) => country.region === "Asia");
  console.log("Countries in Asia:", asiaCountries);

  // 2. Get all the countries with a population of less than 2 lakhs using Filter function
  var countriesWithLowPopulation = countries.filter(
    (country) => country.population < 200000
  );
  var result = countriesWithLowPopulation.map(
    (countriesWithLowPopulation) => countriesWithLowPopulation.name
  );

  console.log(`Countries with Population less than 2 lakhs:
    ${result}`);

  // 3. Print the details (name, capital, flag) using forEach function
  countries.forEach(function (country) {
    console.log("Name: " + country.name);
    console.log("Capital: " + country.capital);
    console.log("Flag: " + country.flag);
    console.log("---------------");
  });

  // 4. Print the total population of countries using reduce function
  var totalPopulation = countries.reduce(function (acc, country) {
    return acc + country.population;
  }, 0);
  console.log("Total Population: " + totalPopulation);

  // 5. Print the country that uses US dollars as currency
  
    res1=countries.filter((item) =>
      item.currencies?.find((val) => val.symbol == "$") );
    var op=res1.map(ele=>ele.name)
    console.log(op)
    
 

};
