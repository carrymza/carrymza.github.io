function convertTime() {
  var militaryTime = document.getElementById("militaryTime").value;
  var hour = militaryTime.substring(0, 2);
  var minute = militaryTime.substring(2, 4);
  
  if (hour > 12) {
    hour = hour - 12;
    var suffix = "PM";
  } else {
    var suffix = "AM";
  }

  var normalTime = hour +":" + minute + " " + suffix;
  document.getElementById("normalTime").innerHTML = normalTime;
}

