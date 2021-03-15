const Weather = function(array){
    this.measurements = array;
    console.log(this)
}



Weather.prototype.getAvgTemperature = function(){
    const average = array => this.measurements.reduce((a, b) => a + b) / this.measurements.length;
    const avgTemp = document.querySelector("#avg-temp");
    avgTemp.innerText = this.average;
}


const day1 = new Weather([-2, 4.4, 3]);
day1.getAvgTemperature();
console.log( day1.getAvgTemperature());