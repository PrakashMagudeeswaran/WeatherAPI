const apiKey = "c46817594bb1e4aaa182d69ba3030eb7"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; 

async function checkweather(city){
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  var data= await response.json();
  console.log(data)
  var citi=data.name;
  var tempture=data.main.temp;
  var tempturemax=data.main.temp_max;
  var tempturemin=data.main.temp_min;
  var pressure=data.main.pressure;
  var humdity=data.main.humidity;
  var windspeed=data.wind.speed;
  var winddeg=data.wind.deg;
  var windgust=data.wind.gust;
  var latitude=data.coord.lat;
  var longitude=data.coord.lon;
  cityn(citi);
  temperature(tempture);
  temperaturemax(tempturemax);
  temperaturemin(tempturemin);
  humidity(humdity);
  wind(windspeed);
  windg(windgust);
  press(pressure);
  winddegree(winddeg)
  lat(latitude)
  lon(longitude);
}
      
function cityn(citi){
  let area = document.querySelector(".city");
  area.textContent=citi;
}
function temperature(tempture){
  let tempr= document.querySelector(".temperature");
  let picture=document.getElementById("icon1")
  let content=document.getElementById("context")
  if(tempture>30){
    picture.src='rocklee2.png';
    tempr.textContent=tempture+"°C";
    content.textContent="Ah, my fellow ninja with the shirtless swagger! But hey, even mighty warriors need to stay hydrated, right? So, keep that water bottle by your side like it's your ninja weapon of choice. And when it comes to dressing, why cover up that chiseled bod with anything other than the finest cotton threads? Airy, breathable, and oh-so-comfortable—just like you deserve!💧👕☀️"
  }
  else if(tempture>22){
    picture.src='rocklee.png';
    tempr.textContent=tempture+"°C";
    content.textContent="Ah, the legendary Rock Lee, clad in his finest cotton armor, braving the mid-hot climate like a true warrior! But heed this sage advice, my friend: hydration is still key, even when you're not flaunting those rippling muscles! Keep that water bottle close, for even in the milder heat, dehydration can strike when you least expect it. And as for attire, let breathable cotton be your trusted companion, offering comfort and coolness in equal measure.💧👕☀️"
   } 
   else if(tempture>18){
    picture.src='rocklee.png';
    tempr.textContent=tempture+"°C";
    content.textContent="Ah, basking in the gentle embrace of a pleasant climate, our hero Rock Lee dons his favorite cotton attire, ready to dance with the breeze and soak in the sunshine. With each step, Lee feels the soft caress of the wind, his cotton clothing fluttering like a banner of comfort and joy. And oh, the joy of hydration! Sipping cool water like a connoisseur of refreshment, he savors every drop, feeling invigorated and alive.🌞🍃💧"
   }
   else if(tempture>10){
    picture.src='rocklee.png';
    tempr.textContent=tempture+"°C";
    content.textContent="Ah, in the embrace of a cooler climate, our hero Rock Lee finds solace in the crispness of the air and the gentle chill that kisses his skin.Lee, ever the embodiment of resilience, welcomes this change with open arms, his cotton attire now a shield against the brisk breeze. As he takes in the scenery, surrounded by the symphony of rustling leaves and the faint scent of autumn, he can't help but feel a sense of tranquility wash over him.🍂🌬️✨"
   } 
   else if(tempture>1){
    picture.src='rocklee.png';
    tempr.textContent=tempture+"°C";
    content.textContent="In the realm of temperatures dipping below 10°C, our intrepid Rock Lee finds himself in a world transformed by the icy touch of winter.Bundled up in layers upon layers of cozy cotton, he ventures forth, his breath creating delicate clouds in the chilly air. As he navigates the wintry landscape, each step crunching softly on the snow-covered ground, he feels a sense of adventure coursing through his veins. For there is beauty to be found in the cold, my friends, a quiet serenity that blankets the world in a shimmering embrace.  ❄️🧣🌨️"
   }
   else if(tempture<1){
    picture.src='rocklee.png';
    tempr.textContent=tempture+"°C";
    content.textContent="Ah, when the temperature plunges into the negatives, our fearless Rock Lee finds himself in a winter wonderland of epic proportions!With each step, he leaves behind a trail of footprints in the snow, a testament to his journey through the icy wilderness. And oh, the beauty of it all! The world transformed into a sparkling paradise, where even the simplest of things become a marvel to behold. So let us revel in the magic of sub-zero temperatures, my friends, for in the heart of winter lies a beauty that is truly awe-inspiring.❄️🧤🌨️"
   }
   }

function temperaturemax(tempturemax){
  let tempr= document.getElementById("tempmax");
    tempr.textContent=tempturemax+"°C";
    tempr.style.color="red"  
}
function temperaturemin(tempturemin){
  let tempr= document.getElementById("tempmin");
    tempr.textContent=tempturemin+"°C"; 
    tempr.style.color="green" 
}
function humidity(humdity){
  let hum=document.getElementById("humidity");
  hum.textContent=humdity+"%";
}
function wind(windspeed){
  let win=document.getElementById("windspeed");
  win.textContent=windspeed+"Km/hr";
}
function lat(latitude){
  let win=document.getElementById("longi");
  win.textContent=latitude+"°";
}
function lon(longitude){
  let win=document.getElementById("lati");
  win.textContent=longitude+"°";
}
function press(pressure){
  let win=document.getElementById("pressure");
  win.textContent=pressure+"hPa";
}
function winddegree(winddeg){
  let win=document.getElementById("winddeg");
  win.textContent=winddeg+"°";
}
function windg(windgust){
  let win=document.getElementById("windgust");
  if(windgust==undefined){
    win.textContent="Not Determined"
  }
  else{
  win.textContent=windgust+"Km/hr";}
}

const button=document.querySelector(".button");
button.addEventListener("click",getInput,false);

function getInput(){
  let city=document.querySelector(".input").value;
  checkweather(city);
};
