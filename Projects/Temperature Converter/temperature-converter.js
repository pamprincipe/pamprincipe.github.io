// for dark mode
function turnDark() {
    let image = document.getElementById('moon');
    const body = document.body;
    const nodeList = document.querySelectorAll('.form-control.custom'); 
    // const inputNum = document.getElementById('input-num');
    
    if (image.src.includes('moon.svg')) {
        image.src = 'assets/moon1.svg';
        body.style.backgroundColor = '#191923ff';

        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.backgroundColor = '#191923ff'; 
            nodeList[i].style.color = '#ffffff';
        }

        // Change the placeholder color to white
        const style = document.createElement('style');
        style.innerHTML = `#input-num::placeholder { color: white; }`;
        document.head.appendChild(style);

    } else {
        image.src = 'assets/moon.svg';
        body.style.backgroundColor = '#ffffff';   

        for (let i = 0; i < nodeList.length; i++) {
            nodeList[i].style.backgroundColor = '#ffffff'; 
            nodeList[i].style.color = '#000000';
        }

        // Change the placeholder color to black or the default
        const style = document.createElement('style');
        style.innerHTML = `#input-num::placeholder { color: black; }`;
        document.head.appendChild(style);
    }
}


// // image changer na anonymous func
// const myImg = document.querySelector("img");
// var body = document.body;

// myImg.onclick = () => {
//     const mySrc = myImg.getAttribute("src");
//     if (mySrc === "assets/moon.svg") {
//         myImg.setAttribute("src", "assets/moon1.svg");
//         body.style.backgroundColor = '#191923ff';
//     } else {
//         myImg.setAttribute("src", "assets/moon.svg");
//         body.style.backgroundColor = '#ffffff';
//     }
// };

function convertTemperature() {
    var getNum = document.querySelector("input").value;
    var inputNum = Number(getNum);
    var fromSelect = document.getElementById("from-select").value;
    var toSelect = document.getElementById("to-select").value;
    var fromFtoC = (inputNum - 32) * 0.5556;
    var fromKtoC = inputNum - 273.15;
    var fromCtoF = (inputNum * 0.5556) + 32;
    var fromKtoF = (inputNum - 273.15) * (9 / 5) + 32;
    var fromCtoK = inputNum + 273.15;
    var fromFtoK = (inputNum - 32) * (0.5556) + 273.15;
    
    // Log the values to the console
    console.log("Input Number: " + inputNum);
    console.log("From: " + fromSelect);
    console.log("To: " + toSelect);
    console.log("Answer: " + fromFtoC.toFixed(2));

    if (toSelect === "1") {
        if (fromSelect === "2") {
            var ans = fromFtoC % 1 === 0 ? fromFtoC.toFixed(0) : fromFtoC.toFixed(2);
            document.getElementById("answer").innerHTML = ans + "&deg;C";
        } else if (fromSelect === "3") {
            var ans = fromKtoC % 1 === 0 ? fromKtoC.toFixed(0) : fromKtoC.toFixed(2);
            document.getElementById("answer").innerHTML = ans + "&deg;C";
        } else {
            document.getElementById("answer").innerHTML = inputNum + "&deg;C";
        }
    } else if (toSelect === "2") {
        if (fromSelect === "1") {
            var ans = fromCtoF % 1 === 0 ? fromCtoF.toFixed(0) : fromCtoF.toFixed(2);
            document.getElementById("answer").innerHTML = ans + "&deg;F";
        } else if (fromSelect === "3") {
            var ans = fromKtoF % 1 === 0 ? fromKtoF.toFixed(0) : fromKtoF.toFixed(2);
            document.getElementById("answer").innerHTML = ans + "&deg;F";
        } else {
            document.getElementById("answer").innerHTML = inputNum + "&deg;F";
        }
    } else if (toSelect === "3") {
        if (fromSelect === "1") {
            var ans = fromCtoK % 1 === 0 ? fromCtoK.toFixed(0) : fromCtoK.toFixed(2);
            document.getElementById("answer").innerHTML = ans + "K";
        } else if (fromSelect === "2") {
            var ans = fromFtoK % 1 === 0 ? fromFtoK.toFixed(0) : fromFtoK.toFixed(2);
            document.getElementById("answer").innerHTML = ans + "K";
        } else {
            document.getElementById("answer").innerHTML = inputNum + "K";
        }
    } else {
        console.log("Choose an option.");
    }
}

// Execute conversion on button click
document.getElementById("btn-convert").onclick = convertTemperature;

// Execute conversion when Enter key is pressed
document.querySelector("input").addEventListener("keydown", function(press) {
    if (press.key === "Enter") {
        convertTemperature();
    }
});


// if (fromSelect === "2" && toSelect === "1") {
//     var celsAns = (inputNum - 32)*0.5556;
//     // document.getElementById("answer").innerHTML = celsAns;
    
// }

// document.querySelector("html").addEventListener("click", function () {
//   alert("Ouch! Stop poking me!");
// });

