console.log('hello world');

function displayKilometers(){
    let kilometers = document.getElementById("kiloInput").value;
    const mileMultiplier = 1.60934;
    let miles;
    
    miles = Number(kilometers) * mileMultiplier;

    let converterOutput = `The distance of ${kilometers} kms is equal to ${miles} miles!`

    document.getElementById("kiloMeterConverted").innerHTML = converterOutput;
}