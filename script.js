function calculate(){
    // get values and parsing them to float values

    const bill = parseFloat(document.getElementById("billAmount").value);
    const serviceCharge = parseFloat(document.getElementById("ServiceQuality").value);
    const foodQuality = parseFloat(document.getElementById("FoodQuality").value);
    if (bill === null || bill === undefined || bill === ''){
        return alert("Please select the bill amount");
    }
    let tip = (bill * ((serviceCharge + foodQuality)/10) * 1.0)/100;
    tip = parseFloat(tip.toFixed(2));

    const pay = bill + tip;

    // display calculated values
    document.getElementById("tip").innerHTML = `<h3 id="tip">Tip Amount: ₹${tip}</h3>`;
    document.getElementById("pay").innerHTML =  `<h2 id="pay">Total Amount: ₹ ${pay}</h2>`
}