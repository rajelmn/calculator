let numbers = ['zero','one', 'two', 'three' , 'four', 'five', 'six', 'seven', 'eight', 'nine', 'plus', 'equal', 'minus'];
let input = document.getElementById('calculator-output');


const value = '';
let i = 0;
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
        //  input.value = Number(input.value);
        result += Number(input.value);
         input.value = '';
         console.log(result)
         break;
         case 'minus':
            result -= Number(input.value);
            input.value = '';
            break
       case 'equal':
         console.log(result);
         console.log(input.value)
         if(result) input.value = result + Number(input.value);   
         console.log(input.value)      
     }
   })
})

