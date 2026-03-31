async function getFact() {
  try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,region,flags");
    const data = await response.json();

    const random = data[Math.floor(Math.random() * data.length)];

    document.getElementById("country").innerText = random.name.common;
    document.getElementById("fact").innerText =
      "Capital: " + (random.capital ? random.capital[0] : "N/A");
    document.getElementById("extra").innerText =
      "Region: " + random.region;

  } catch (error) {
    document.getElementById("fact").innerText = "Error loading data 😢";
  }
}