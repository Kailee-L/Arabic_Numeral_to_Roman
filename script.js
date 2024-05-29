function convert(){
      const result= document.getElementById("output");
      const arabicnum = document.getElementById("number");
	  
      if (arabicnum.value=="" ){
        result.innerHTML= "Please enter a valid number";
      }
      else if (arabicnum.value <=0){
        result.innerHTML="Please enter a number greater than or equal to 1";
      }
      else if (arabicnum.value >=4000){
        result.innerHTML="Please enter a number less than or equal to 3999"  ;
      }
      
      else{
        result.innerHTML= converter(arabicnum.value);
      }

}
function converter(num){

      let result="";
      let arabics=[1000,900,500,400,100,90,50,40,10,9,5,4,1];
      let romans=["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
      for (let i=0;i<arabics.length;++i ){
            while (num >=arabics[i]){
                  result+=romans[i];
                  num-=arabics[i];
            }
            
      }
      return result;

}