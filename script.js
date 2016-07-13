

$("#txt").css({ color: "blue", fontSize: "36px"});


$(document).ready(function() {
  function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var ampm = amOrPm(h);
    h = convertHours(h);
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    oddOrEven(s);
    $("#txt").html(h + ":" + m + ":" + s + ampm)
    setTimeout(startTime, 500);
  }

  function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
    return i;
  }

  function convertHours(i) {
    if (i > 12) {
        i = i - 12;
    }
    return i;
  }

  function amOrPm(i) {
    if (i < 12) {
        return "AM";
    } else {
        return "PM";
    }
  }

  function oddOrEven(i) {
    if (i % 2 === 1) {
        $("#txt").css({ color: "red"});
    } else {
        $("#txt").css({ color: "green"});
    }
  }
  function fiveBackground(i) {
    if ($("#txt").css("background-color") === "rgb(255, 255, 0)") {
        $("#txt").css({"background-color": "rgb(0, 0, 0)"});
    } else  {
        $("#txt").css({"background-color": "rgb(255, 255, 0)"});
    }

    setTimeout(fiveBackground, 5000); 
}
  fiveBackground();
  startTime();
});
