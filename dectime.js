function convertDecimalToTime(decimal) {
    var hours = Math.floor(decimal);
    var minutes = Math.round((decimal - hours) * 60);
    var suffix = hours >= 12 ? "PM" : "AM";

    if (hours < 0 || hours >= 24) { 
      alert(hours.toFixed(2) + " is an invalid value for hours. Remember to enter hours between: 0.00 - 23.99" ); 
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
  }
