let searchForm=document.querySelector(".search")
let apiResDiv=document.querySelector("#responData")
searchForm.addEventListener(
    "submit",
    async (event)=>{
        event.preventDefault()
        let cityName=event.target.cityName.value
       console.log(cityName)

       /*api url*/

       let apiRespons=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=8ce6c6dbc9a051b56514b7c8fdc55792&units=metric`)
       let data=await apiRespons.json()
       console.log(data)

let currentDate= new Date()

if(data.cod=="404"){
    apiResDiv.innerHTML= "No City Found"
}
else{
apiResDiv.innerHTML=`
         <div class="weatherSection">
            <div class="weartercard">
                <div class="topcardcontent">
                    <div>
                        <div class="location">📍${data.name}</div>
                         <div class="date">${currentDate.toDateString()} |
                         ${currentDate.toLocaleTimeString()}
                         </div>
                        <div class="temp">${data.main.temp}°</div>
                        <div class="condition">${data.weather[0].description}</div>
                    </div>
                    <div>
                    <img class="weather-icon" src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt=""></div>
                </div>
                <div class="startcard">
                    <div class="start">
                        <h4>Humidity</h4>
                        <p>${data.main.humidity}%</p>
                    </div>
                    <div class="start">
                        <h4>Wind</h4>
                        <p>${data.wind.speed}</p>
                    </div>
                    <div class="start">
                        <h4>Feels Like</h4>
                        <p>${data.main.feels_like}°C</p>
                    </div>
                    <div class="start">
                        <h4>Pressure</h4>
                        <p>${data.main.pressure}</p>
                    </div>
                </div>
            </div>
        </div>
       `
}
       

    }
)