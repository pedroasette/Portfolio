//Selectiong output section
const display = document.querySelector("output");

//array that will help with validation of characters
let validation = []

//attaching click event listener 
document.querySelector("#keypad").addEventListener("click", e => {
    if(e.target.dataset.value && e.target.dataset.action) {
        handlingCalc(e.target.dataset.value, e.target.dataset.action);
    } else if (e.target.dataset.value) {
        handlingCalc(e.target.dataset.value);
    } else if (e.target.dataset.action) {
        handlingCalc(false, e.target.dataset.action);
    }
    
}) 

//attaching keyboard event listener
document.addEventListener("keypress", e => {
    const key = e.key;

    if ("0123456789.".includes(key)) {
        handlingCalc(key)
    } else if ("*/+-".includes(key)) {
        handlingCalc(key, true)
    } else if (key === "=") {
        handlingCalc(false, "equals")
    } else if (key === "c") {
        handlingCalc(false, "clear")
    }
})


document.querySelectorAll("button").forEach(btn => {
btn.addEventListener("keydown", e => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault(); 
    btn.click(); // 
  }
});
});

function handlingCalc(value = false, action = false) {
    //checking for multiple 0s at the begining
    if (validation.length === 0 && value == 0) {
        display.innerText = 0;
    }

    //checking for multiple 0s after a operator
    else if(value == 0 && "/*+-".includes(validation[validation.length - 2]) && validation[validation.length - 1] == 0) {
        
    } else {

        //checking if the clicked element was a number or . and if 
        let comparision1 = "0123456789."
        if(validation.length === 0 || typeof validation[validation.length - 1] === "string") {
            if (comparision1.includes(value)) {
            validation.push(value);
        }
   
        }
        
    }

    //checking if button is an action
    if(action) {
        
        //if e.target has a value, make sure we dont have multiple operators in a sequence
        if(value) {
            if(validation.length !== 0) {
                if("/*+-".includes(validation[validation.length - 1])) {
                    validation[validation.length - 1] = value
                } else {
                    validation.push(value)
                }
            }
     }
        
    }

 
   //clear display
   if(action === "clear") {
       validation.length = 0;
       display.innerText = 0;
   }

   //equal sign
   if(action === "equals") {
      let result = eval(display.innerText);
      validation.length = 0;
      validation.push(result);     
   }
   //if display is not empty, make validation 
   if (validation.length !== 0){
        display.innerText = " ";
        validation.forEach(element => {
            display.innerText += element;
        })
    }
 }    