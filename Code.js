function goodVsEvil(good, evil){
 var arrGood = ['1','2','3','3','4','10'];
 var arrEvil = ['1','2','2','2','3','5','10'];
 var sumGood = 0, sumEvil = 0;
 var str='', j = 0;
 //console.log("arrGood[j]: "+arrGood[0]);
 for (var i = 0; j <= 6 && i <= good.length; i++){
   if (good[i] == " " || i==good.length){
   /*console.log("sumGood: "+sumGood);
     console.log("j: "+j);
     console.log("parseInt(arrGood[j]): "+arrGood[j]);
     console.log("parseInt(str): "+str);*/
     sumGood += arrGood[j] * str;
  //console.log("sumGood: "+sumGood);
     j++;
     str='';
   }
   else{
     str += ''+good[i];
   }
   
   //console.log("str: "+str);
 }
 j=0;
 for (var i = 0; j <= 7 && i <= evil.length; i++){
   if (evil[i] == " " || i==evil.length){
   /*console.log("sumGood: "+sumGood);
     console.log("j: "+j);
     console.log("parseInt(arrGood[j]): "+arrEvil[j]);
     console.log("parseInt(str): "+str);*/
     sumEvil += arrEvil[j] * str;
  //console.log("sumGood: "+sumEvil);
     j++;
     str='';
   }
   else{
     str += ''+evil[i];
   }
   
   //console.log("str: "+str);
 }
 //console.log("fin");
 if (sumGood < sumEvil)
   return "Battle Result: Evil eradicates all trace of Good";
 else if (sumGood > sumEvil)
   return "Battle Result: Good triumphs over Evil";
 else
   return "Battle Result: No victor on this battle field";
}


/*******TDD Code*************
Test.expect( goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1') === 'Battle Result: Evil eradicates all trace of Good', 'Evil should win' );
Test.expect( goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0') === 'Battle Result: Good triumphs over Evil', 'Good should win' );
Test.expect( goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0') === 'Battle Result: No victor on this battle field', 'Should be a tie' );
****************************/
