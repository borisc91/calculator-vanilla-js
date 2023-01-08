operand = document.querySelectorAll('.operand');
equal = document.querySelector('.equal');
let rezultat = [];
numButton = document.querySelectorAll('.numbers');
input = document.querySelector('input');
let c = document.querySelector('.c');
let kib = false;

for( let but of numButton){

    but.addEventListener('click', function(){
        if(kib === false || input.value === '0' ){
           input.value=but.innerText
        }
    
        else{
            input.value+=but.innerText
        }

        
       kib = true;
        
  })
   }


for( let operator of operand){
    operator.addEventListener('click', function(){
        rezultat.push(parseInt(input.value));
        kib = false;
        rezultat.push(operator.innerText)        
    })
}


c.addEventListener('click', function() {
    rezultat=[];
    input.value = 0;
})

    equal.addEventListener('click', function() { 
        rezultatt()
        })   

    function rezultatt(){

        if(kib === false ){
            
            alert('Dodaj broj')     
           rezultat[0]=0
        
        }
        
        else{
        rezultat.push(parseInt(input.value));
        izracunaj()
        }
      
input.value = rezultat[0];
rezultat = [];
kib = false;
    }

   function izracunaj(){
    while(rezultat.length > 1){
        
        if(rezultat[rezultat.indexOf('%') + 1] === 0 && rezultat.indexOf('%') !== -1){
            alert('Ne mozemo da delimo sa nulom!');
            rezultat=[0];
        }
        else if(rezultat.find(broj => broj === '%') === '%'){
          let prvi=  rezultat[rezultat.indexOf('%') -1] / rezultat[rezultat.indexOf('%') +1];
          
          rezultat.splice(rezultat.indexOf('%') -1, 3, prvi);
          
      }
      
      else if(rezultat.find(broj => broj === '*') === '*'){
          let prvi=  rezultat[rezultat.indexOf('*') -1] * rezultat[rezultat.indexOf('*') +1];
          rezultat.splice(rezultat.indexOf('*') -1, 3, prvi);
          
      }

      else if((rezultat.find(broj => broj === '+') === '+') && (rezultat.indexOf('+')< rezultat.indexOf('-') || rezultat.indexOf('-') === -1))
      {
     
          let prvi=  rezultat[rezultat.indexOf('+') -1] + rezultat[rezultat.indexOf('+') +1];
         rezultat.splice(rezultat.indexOf('+') -1, 3, prvi);
        }

      else if (rezultat.find(broj => broj === '-') === '-'){
          let prvi=  rezultat[rezultat.indexOf('-') -1] - rezultat[rezultat.indexOf('-') +1];
          rezultat.splice(rezultat.indexOf('-') -1, 3, prvi);
          
      }
      else{
       rezultat = [0]; 
    }
}
}; 
