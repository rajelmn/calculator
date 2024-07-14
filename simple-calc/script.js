let numbers = ['zero','one', 'two', 'three' , 'four', 'five', 'six', 'seven', 'eight', 'nine', 'plus', 'equal', 'minus', 'divide', 'mul', 'modulo', 'AC', 'DEL'];
let input = document.getElementById('calculator-output');

let isMinus = false;
let isMul = false;
let isPlus = false;
let isDivide = false;
let isModulo = false;
const value = '';

input.value = value;
let result = 0;
numbers.forEach( number => {
   document.getElementById(number).addEventListener('click', () => {
     switch(number) {
       case 'zero':
          input.value += 0;
          break;
       case 'one': 
          input.value += 1;
          break;
       case 'two':
         input.value += 2;
         break;
       case 'three':
         input.value += 3;
         break;
       case 'four':
         input.value += 4;
         break
       case 'five':
         input.value += 5;
         break
       case 'six':
         input.value += 6;
         break;
       case 'seven':
         input.value += 7;
         break;
       case 'eight':
         input.value += 8;
         break;
       case 'nine': 
       input.value += 9;
       break;
       case 'plus':
         result = Number(input.value)
         input.value = '';
         isPlus = true;
         break;
         case 'minus':
            result = Number(input.value);
            input.value = '';
            isMinus = true;
            break
        case 'mul': 
           result = Number(input.value);
           isMul = true;
           input.value = '';
           break;
        case 'divide': 
           result = Number(input.value);
           isDivide = true;
           input.value = '';
           break;
        case 'modulo':
            result = Number(input.value);
            isModulo = true;
            input.value = '';
            break;
        case 'AC':
            input.value = '';
            result = 0;
            break;
        case 'DEL': 
       input.value = (input.value).slice(0 , (input.value).length - 1);
        
        break;
       case 'equal':
              if(isPlus) {
                input.value = result + Number(input.value);
                result = +input.value;
                isPlus = false;
              }
              else if(isMinus) {
                input.value =result - input.value;
                result = +input.value;
                isMinus = false;
              }
              else if (isMul) {
                input.value = result * input.value;
                isMul = false
              }
              else if(isDivide) {
                input.value = result / input.value;
                isMul = false;
              }
              else if(isModulo) {
                input.value = result % input.value;
                isModulo = false;
              }
     }
   })
})


