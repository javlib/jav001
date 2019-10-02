$(document).ready(function(){

  getWeather();
})

function getWeather(){

  var url="api.openweathermap.org/data/2.5/weather?q=Madrid&APPID="+apiKey;
  $.ajax(url,{success: function(data){
    console.log(data);
  }})
}