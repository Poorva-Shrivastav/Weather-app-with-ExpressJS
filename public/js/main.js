const cityname = document.getElementById("cityname")
const submit = document.getElementById("submit")
const city_name = document.getElementById("city_name")

const temp = document.getElementById("temp")
const temp_status = document.getElementById("temp_status")

const hideData = document.querySelector(".data-hide")

const getInfo = async(e) => {
    e.preventDefault();
    let cityValue = cityname.value;
    if(cityValue === ""){
        city_name.innerText = `Please enter the city name`
        hideData.classList.add("data-hide")
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&units=metric&appid=965cb447461086887d8125f92e9dad55`
            const response = await fetch(url)
            const data = await response.json()
            const arrayData = [data]

            city_name.innerText = `${arrayData[0].name}, ${arrayData[0].sys.country}`
            temp.innerText = arrayData[0].main.temp;
            // temp_status.innerText = arrayData[0].weather[0].main

            let weatherNow = arrayData[0].weather[0].main
            //condition to check weather condition
            if(weatherNow === "Clear"){
                temp_status.innerHTML = 
                "<i class='fas fa-sun' style='color: #eccc68'></i>"
            }
            else if(weatherNow === "Clouds"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color: #f1f2f6'></i>"
            }
            else if(weatherNow === "Rain"){
                temp_status.innerHTML = 
                "<i class='fas fa-cloud-rain' style='color: #a4b0be'></i>"
            }
            else{
                temp_status.innerHTML = 
                "<i class='fas fa-cloud' style='color:#f1f2f6'></i>"
            }

            hideData.classList.remove("data-hide")

        }catch{
            city_name.innerText=`Please enter the correct city name`
            hideData.classList.add("data-hide")
        }
        
        
    }

}

submit.addEventListener("click", getInfo)