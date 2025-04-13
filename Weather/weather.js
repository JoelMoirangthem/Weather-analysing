
// const location = document.getElementById("city")
async function getWeather() {
    
    
    try{

        let location = document.getElementById("city").value;
        
        const apiKey = '83b009f07671edd5dc4584c6c3941bd6';
        
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;
        
        let response = await fetch(url);
        
        let data = await response.json();
        if (data.cod === 200){

            let details = data.main;
            console.log(details);
    
    // sourcery skip: use-object-destructuring
            let temp = details.temp;

            if (temp <= 10 ){

                
                document.getElementById("MODE").innerText = "Cloudy Cold"
            }
            else if (temp <= 20 && temp >= 11) {
                
                document.getElementById("MODE").innerText = "Cloudy Spring"
            }  
            else if (temp <= 30 && temp >= 21) {
               
                document.getElementById("MODE").innerText = "Sunny Pleasant"
            }
            else if (temp >= 31 && temp <= 35){
                
                document.getElementById("MODE").innerText = "Warm Summer"
            }
            else if (temp >= 36 && temp <= 45){
                
                document.getElementById("MODE").innerText = "Hot Schorching"
            }
            else{
                
                document.getElementById("MODE").innerText = "Very Hot Heatwave"
            }

            document.getElementById("location").innerText = `Weather in ${location}`;
            document.getElementById("temp").innerText = "Temperature : " + temp + " °C";
            document.getElementById("hum").innerText = "Humidity : " + details.humidity + " %";
            document.getElementById("Pressure").innerText = "Pressure : " + details.pressure + " hPa";





        }
        else{
            alert("Enter the city Name :")
        }

        
    }
    
    
    catch(error){
        console.log("error to fetch the data",error);
    }
}
