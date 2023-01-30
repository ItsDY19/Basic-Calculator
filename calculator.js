/*let display = document.getElementById('display_panel');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '÷':
                display.innerText += "/";
                break;
            case '×':
                display.innerText += "*";
            break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case 'DEL':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});*/

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