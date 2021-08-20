document.getElementById('deposit-button').addEventListener('click', function(){
   const depositInput = document.getElementById('deposit-input');
   const newDepositAmount = depositInput.value;
   
//   update deposit
    const depositTotal = document.getElementById('deposit-total');

    const previousDepositTotal=depositTotal.innerText;
    const newDepositTotal= parseFloat (previousDepositTotal)+ parseFloat( newDepositAmount) ;

   depositTotal.innerText= newDepositTotal;

  

//    update balance
  const balanceTotal=document.getElementById('balance-total');
  const  balanceTotalText= balanceTotal.innerText;
 const previousBalanceTotal = parseFloat(balanceTotalText);
 const newBalanceTotal= previousBalanceTotal + parseFloat(newDepositAmount)  ;
 balanceTotal.innerText= newBalanceTotal;
// clear input field
 depositInput.value='';

});


// withdraw section
document.getElementById('withdraw-button').addEventListener('click',function(){
      const withdrawInput =document.getElementById('withdraw-input');
      const withdrawAmountText =withdrawInput.value;
      const newWithdrawAmount =parseFloat(withdrawAmountText);
      

    //   set withdraw total

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal= parseFloat(previousWithdrawText);
    const newWithdrawTotal =previousWithdrawTotal+newWithdrawAmount;

    withdrawTotal.innerText=newWithdrawTotal;


    // update balance total

    const balanceTotal= document.getElementById('balance-total');
    const previousBalanceText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(previousBalanceText);

    const newBalanceTotal=previousBalanceTotal-newWithdrawTotal;

    balanceTotal.innerText=newBalanceTotal;

    // clear input field
    withdrawInput.value='';


})
 