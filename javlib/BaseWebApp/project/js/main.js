$(document).ready(function(){

  getWeather();
})
function getWeather(arg1){

  var url="https://api.openweathermap.org/data/2.5/weather?q="+arg1+"&units=imperial&APPID="+apikey;
  $.ajax(url,{success:function(data){
$(".city").text(data.name);
$(".temp").text(data.main.temp);
  }})
}
function searchWeather(){
  var seekQuery=$(".search").val();
  getWeather(seekQuery);
}