function convertDecimalToTime(decimal) {
    var hours = Math.floor(decimal);
    var minutes = Math.round((decimal - hours) * 60);
    var suffix = hours >= 12 ? "PM" : "AM";

    if (isNaN(hours) || hours < 0 || hours >= 24) { 
      alert("Invalid input for hours. Please enter a valid TIME between: 0.00 - 23.99" );
      document.getElementById("decimalInput").value = ""; 
      return null; // or return a default value, such as "12:00 AM" 
    } else if (hours > 12) { 
        hours = hours - 12; 
    } else if (hours === 0) { 
        hours = 12; 
    } 

    var time = hours + ":" + (minutes < 10 ? "0" : "") + minutes + " " + suffix;
    return time;
  }

  function convertAndDisplay() {
    var decimal = document.getElementById("decimalInput").value;
    var time = convertDecimalToTime(decimal);
    document.getElementById("timeOutput").innerHTML = time;
    //document.getElementById("decimalInput").value = "";
  }
  function clearDisplay() {
    document.getElementById("decimalInput").value = "";
  }
