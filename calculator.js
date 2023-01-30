function updateDisplay(val) {
    var display = document.getElementById("display_panel");
    if (val == "C") {
        display.value = "";
    } 
    else if(val == "DEL"){
        display.value = display.value.slice(0, -1);
    }
    else if (val == "=") {
        display.value = eval(display.value);
    } 
    else {
        display.value += val;
    }
  }