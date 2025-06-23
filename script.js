 let display = document.
 getElementById("display");
     // numbers 1234567890
function appendNunber(num) {
 if(display.innerText == "0")
      {
        display.innerText = num;
      }
      else{
        display.innerText += num;
      }
      }


      function appendOperator(op) {
        display.innerText += op;
      }

      function clearDisplay() {
        display.innerText = "0"
      }

      function calculat() {
        try{
            display.innerText = eval
            (display.innerText);
        }
        catch  {
            display.innerText = "error"
        }
      }

      function backSpace() {
        let current = display.innerText;
        if(current.length>1){
            display.innerText = current.slice(0, -1);
        }
        else{
            display.innerText = "0";
        }
      }
