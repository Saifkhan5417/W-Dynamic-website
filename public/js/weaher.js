// const async = require("hbs/lib/async");

const time = document.getElementById("time");
const day = document.getElementById("day");
const temp = document.getElementById("temp");
const btn = document.getElementById("btn");
const city = document.getElementById("city");
const search = document.getElementById("search");
const country = document.getElementById("country");
const mood = document.getElementById("mood");

const getDateTime = () => {
  let getTime = new Date();
  let newDate = getTime.getDate();
  let newTime = getTime.getHours();
  let newMin = getTime.getMinutes();
  let newsec = getTime.getSeconds();
    console.log(setTimeout( newsec, 1000));
  if (newMin < 10) {
    time.innerHTML = newTime + ":" + 0 + newMin+":"+newsec;
  } else {
    time.innerHTML = newTime + ":" + newMin+":"+newsec;
  }
  setTimeout( getDateTime, 1000)
  let newDay = getTime.getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednasday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let newMon = getTime.getMonth();
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let newYear = getTime.getFullYear();
  day.innerHTML =
    days[newDay] +
    "    " +
    "    " +
    "    ," +
    newDate +
    " " +
    months[newMon] +
    " " +
    newYear;

  return newTime, newMin, newYear, days[newDay], months[newMon], newDate,newsec;
};
getDateTime();

// Api work

const getInfo = async (event) => {
  event.preventDefault();
  getsearch = search.value;
  
  if (getsearch=="") {
    alert("Enter Any Location")
    console.log("Enter Any Location")
  }else{
  try {
    
    let url = `https://api.weatherapi.com/v1/current.json?key=3f663890df054cefa8954759220604&q=${getsearch}&aqi=yes`;
    const getApi = await fetch(url);
    const jsonData = await getApi.json();
    const arrData = [jsonData];
    temp.innerHTML = arrData[0].current.temp_c + "°C";
    // mood of weather
    mood.innerHTML = arrData[0].current.condition.text;
    // set city and country name
    let s_city = arrData[0].location.name;
    city.innerHTML = s_city;
    let s_country = arrData[0].location.country;
    console.log(s_country);
    country.innerHTML = s_country;
  
  } catch (error) {
    console.log(error);
  }}
  
  //   alert(getsearch);
};

btn.addEventListener("click", getInfo);
getsearch = " ";
