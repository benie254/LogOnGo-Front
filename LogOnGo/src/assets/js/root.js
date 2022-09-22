


// recently added

// $(document).ready(function(){
//     var contForm = document.getElementById("contForm")
//     $(contForm).submit(function(event){
//       event.preventDefault()
//       form = $(contForm)
  
//       $.ajax({
//         'url':'/ajax/contact/',
//         'type':'POST',
//         'data':form.serialize(),
//         'dataType':'json',
//         'success':function(data){
//           alert(data['success'])
//         },
//       })
//       $('#subject').val('')
//       $('#message').val('')
//     })
//   })

// function secondAlert(){
//   return window.alert("Hello!");
// }

function togglePLogs(){
  var btn = document.getElementById("pLogsBtn");
  var overLay = document.getElementById("pLogs");
  if(btn.style.display && overLay.style.display === 'none'){
    btn.style.display = 'block';
    overLay.style.display = 'block';
  } else {
    btn.style.display = 'none';
    overLay.style.display = 'none';
  }
  // if(overLay.style.display === 'block'){
  //   overLay.style.display = 'none';
  // } else {
  //   overLay.style.display = 'block';
  // }
}
function toggleProfileLogForm(){
  var form = document.getElementById("profileLogForm");
  if(form.style.display === 'block'){
    form.style.display = 'none';
  } else {
    form.style.display = 'block';
  }
}
function toggleProfileMpesaForm(){
  var form = document.getElementById("profileMpesaForm");
  if(form.style.display === 'block'){
    form.style.display = 'none';
  } else {
    form.style.display = 'block';
  }
}
  
function myTotal(){
  var today = document.getElementById("tester-todayJS").textContent;
  var yesterday = document.getElementById("tester-yesterdayJS").textContent;
  // console.log(total)
  // console.log('today:',today)
  var init = document.getElementById("initial").textContent;
  return alert(init);
  // return document.getElementById("total-todayJS").innerHTML += '<h1>1</h1>';
} 

function toggleInitUpdateForm(){
    var hide = document.getElementById('initUpdateForm');
    if(hide.style.display === 'block'){
        hide.style.display = 'none';
    } else {
        hide.style.display = 'block';
    }
}
function togglePumpsUpdateForm(){
    var hide = document.getElementById('pumpsUpdateForm');
    if(hide.style.display === 'block'){
        hide.style.display = 'none';
    } else {
        hide.style.display = 'block';
    }
}
function togglePPUpdateForm(){
    var hide = document.getElementById('ppUpdateForm');
    if(hide.style.display === 'block'){
        hide.style.display = 'none';
    } else {
        hide.style.display = 'block';
    }
}
function toggleLogForm(){
    var form = document.getElementById('logForm');
    if(form.style.display === 'block'){
        form.style.display = 'none';
    } else {
        form.style.display = 'block';
    }
}
  function myTotalGas(){
    var today = document.getElementById("tester-today-gas").textContent;
    var yesterday = document.getElementById("tester-yesterday-gas").textContent;
    // console.log(total)
    var print = document.getElementById("total-today-gas").innerHTML = today-yesterday;
    return print
  } 
  function amountTodayGas(){
    var litres = document.getElementById("total-today-gas").textContent;
    var price = document.getElementById("price-gas").textContent;
    var amount = document.getElementById("amount-today-gas").innerHTML = price*litres;
    return amount
  }
  
  function getBalGas(){
    var init = document.getElementById("initial-gas").textContent;
    var sold = document.getElementById("total-today-gas").textContent;
    var order = document.getElementById("new-order-gas").textContent;
    var bal =  document.getElementById("bal-gas").textContent;
    var bal0 =  document.getElementById("bal0-gas").textContent;
    if ((!parseInt(bal0) || parseInt(bal0) === '' || parseInt(bal0) === 0) && (!parseInt(order) || parseInt(order) === '' || parseInt(order) === 0)){
      return document.getElementById("bal-gas").value = parseInt((init - sold));
    } else if (!parseInt(order)){
      return document.getElementById("bal-gas").value = parseInt((bal0 - sold));
    } else if (!parseInt(bal0)){
      return document.getElementById("bal-gas").value = parseInt((init - sold))+parseInt(order);
    } else {
      return document.getElementById("bal-gas").value = parseInt((bal0 - sold))+parseInt(order);
    }
  }
  function getBalHomeGas(){
    var init = document.getElementById("initial-gas").textContent;
    var sold = document.getElementById("total-today-gas").textContent;
    var order = document.getElementById("new-order-gas").textContent;
    var bal0 =  document.getElementById("bal0-gas").textContent;
    if ((!parseInt(bal0) || bal0 === '') && (!parseInt(order) || order === '')){
      return document.getElementById("bal-home-gas").value = parseInt((init - sold));
    } else if (!parseInt(order)){
      return document.getElementById("bal-home-gas").value = parseInt((bal0 - sold));
    } else if (!parseInt(bal0)){
      return document.getElementById("bal-home-gas").value = parseInt((init - sold))+parseInt(order);
    } else {
      return document.getElementById("bal-home-gas").value = parseInt((bal0 - sold))+parseInt(order);
    }
  }
  
  function myTotalDiesel(){
    var today = document.getElementById("tester-today-diesel").textContent;
    var yesterday = document.getElementById("tester-yesterday-diesel").textContent;
    // console.log(total)
    return document.getElementById("total-today-diesel").innerHTML = today-yesterday;
  } 
  function amountTodayDiesel(){
    var litres = document.getElementById("total-today-diesel").textContent;
    var price = document.getElementById("price-diesel").textContent;
    var amount = document.getElementById("amount-today-diesel").innerHTML = price*litres;
    return amount
  }
  
  function getBalDiesel(){
    var init = document.getElementById("initial-diesel").textContent;
    var sold = document.getElementById("total-today-diesel").textContent;
    var order = document.getElementById("new-order-diesel").textContent;
    var bal =  document.getElementById("bal-diesel").textContent;
    var bal0 =  document.getElementById("bal0-diesel").textContent;
    if ((!parseInt(bal0) || parseInt(bal0) === '' || parseInt(bal0) === 0) && (!parseInt(order) || parseInt(order) === '' || parseInt(order) === 0)){
      return document.getElementById("bal-diesel").value = parseInt((init - sold));
    } else if (!parseInt(order)){
      return document.getElementById("bal-diesel").value = parseInt((bal0 - sold));
    } else if (!parseInt(bal0)){
      return document.getElementById("bal-diesel").value = parseInt((init - sold))+parseInt(order);
    } else {
      return document.getElementById("bal-diesel").value = parseInt((bal0 - sold))+parseInt(order);
    }
  }
  function getBalHomeDiesel(){
    var init = document.getElementById("initial-diesel").textContent;
    var sold = document.getElementById("total-today-diesel").textContent;
    var order = document.getElementById("new-order-diesel").textContent;
    var bal0 =  document.getElementById("bal0-diesel").textContent;
    if ((!parseInt(bal0) || bal0 === '') && (!parseInt(order) || order === '')){
      return document.getElementById("bal-home-diesel").value = parseInt((init - sold));
    } else if (!parseInt(order)){
      return document.getElementById("bal-home-diesel").value = parseInt((bal0 - sold));
    } else if (!parseInt(bal0)){
      return document.getElementById("bal-home-diesel").value = parseInt((init - sold))+parseInt(order);
    } else {
      return document.getElementById("bal-home-diesel").value = parseInt((bal0 - sold))+parseInt(order);
    }
  }
  
  
  
  function amountToday(){
    var litres = document.getElementById("total-today").textContent;
    var price = document.getElementById("price").textContent;
    var amount = document.getElementById("amount-today").innerHTML = price*litres;
    return amount
  }
  
  function getBal(){
    var init = document.getElementById("initial").textContent;
    var sold = document.getElementById("total-today").textContent;
    var order = document.getElementById("new-order").textContent;
    var bal =  document.getElementById("bal").textContent;
    var bal0 =  document.getElementById("bal0").textContent;
    if ((!parseInt(bal0) || parseInt(bal0) === '' || parseInt(bal0) === 0) && (!parseInt(order) || parseInt(order) === '' || parseInt(order) === 0)){
      return document.getElementById("bal").value = parseInt((init - sold));
    } else if (!parseInt(order)){
      return document.getElementById("bal").value = parseInt((bal0 - sold));
    } else if (!parseInt(bal0)){
      return document.getElementById("bal").value = parseInt((init - sold))+parseInt(order);
    } else {
      return document.getElementById("bal").value = parseInt((bal0 - sold))+parseInt(order);
    }
  }
  function getBalHome(){
    var init = document.getElementById("initial").textContent;
    var sold = document.getElementById("total-today").textContent;
    var order = document.getElementById("new-order").textContent;
    var bal0 =  document.getElementById("bal0").textContent;
    if ((!parseInt(bal0) || bal0 === '') && (!parseInt(order) || order === '')){
      return document.getElementById("bal-home").value = parseInt((init - sold));
    } else if (!parseInt(order)){
      return document.getElementById("bal-home").value = parseInt((bal0 - sold));
    } else if (!parseInt(bal0)){
      return document.getElementById("bal-home").value = parseInt((init - sold))+parseInt(order);
    } else {
      return document.getElementById("bal-home").value = parseInt((bal0 - sold))+parseInt(order);
    }
  }
  
  
  function getBalDetails(){
    var init = document.getElementById("initial2").textContent;
    var sold = document.getElementById("total-today2").textContent;
    var order = document.getElementById("new-order2").textContent;
    var bal0 =  document.getElementById("bal0-2").textContent;
    if ((!parseInt(bal0) || bal0 === '') && (!parseInt(order) || order === '')){
      return document.getElementById("bal-details").value = parseInt((init - sold));
    } else if (!parseInt(order)){
      return document.getElementById("bal-details").value = parseInt((bal0 - sold));
    } else if (!parseInt(bal0)){
      return document.getElementById("bal-details").value = parseInt((init - sold))+parseInt(order);
    } else {
      return document.getElementById("bal-details").value = parseInt((bal0 - sold))+parseInt(order);
    }
  }
  function printData(){
    // document.getElementsByClassName("print").style.display = "none"
    return window.print();
  }
  function printMpesaData(){
    // document.getElementsByClassName("print").style.display = "none"
    return window.print();
  }
  function refreshPrint(){
    return location.reload()
  }
  function refreshPrintMpesa(){
    return location.reload()
  }
  $(document).ready(function(){
    var balForm =  document.getElementById("balForm");
    $(balForm).submit(function(event){
      event.preventDefault()
      form = $(balForm)
      $.ajax({
        'url':'/ajax/balance/',
        'type':'POST',
        'data':form.serialize(),
        'dataType':'json',
        'success':function(data){
          alert(data['success'])
        }, 
      })
      $('#balance').val('')
    })
  });
  // function newTank(){
  //   var bal =  document.getElementById("bal").textContent;
  //   if (!parseInt(bal)){
  //     return document.getElementById("initial").innerHTML = parseInt((init - sold));
  //   } else {
  //     return document.getElementById("bal").innerHTML = parseInt((init - sold))+parseInt(order);
  //   }
  // }
  function myTotalReport(){
    var today = document.getElementById("tester-today-report").value;
    var yesterday = document.getElementById("tester-yesterday-report").value;
    // console.log(total)
    var print = document.getElementById("total-today-report").value = today-yesterday;
    return print
  } 
  function amountTodayReport(){
    var litres = document.getElementById("total-today-report").value;
    var price = document.getElementById("price-report").textContent;
    var amount = document.getElementById("amount-today-report").value = price*litres;
    return amount
  }
  
  
  function myTotal2(){
    var today = document.getElementById("tester-today2").textContent;
    var yesterday = document.getElementById("tester-yesterday2").textContent;
    // console.log(total)
    var print = document.getElementById("total-today2").innerHTML = today-yesterday;
    return print
  } 
  function amountToday2(){
    var litres = document.getElementById("total-today2").textContent;
    var price = document.getElementById("price2").textContent;
    var amount = document.getElementById("amount-today2").innerHTML = price*litres;
    return amount
  }
  function getBal2(){
    var init = document.getElementById("initial2").textContent;
    var sold = document.getElementById("total-today2").textContent;
    var order = document.getElementById("new-order2").textContent;
    var bal0 =  document.getElementById("bal0-2").textContent;
    var bal2 = document.getElementById("bal2").value;
    if ((!parseInt(bal0) || bal0 === '') && (!parseInt(order) || order === '')){
      return document.getElementById("bal2").value = parseInt((init - sold));
    } else if (!parseInt(order)){
      return document.getElementById("bal2").value = parseInt((bal0 - sold));
    } else if (!parseInt(bal0)){
      return document.getElementById("bal2").value = parseInt((init - sold))+parseInt(order);
    } else {
      return document.getElementById("bal2").value = parseInt((bal0 - sold))+parseInt(order);
    }
  }
  function myTotalP(){
    var today = document.getElementById("tester-today-p").textContent;
    var yesterday = document.getElementById("tester-yesterday-p").textContent;
    // console.log(total)
    var print = document.getElementById("total-today-p").innerHTML = today-yesterday;
    return print
  } 
  function amountTodayP(){
    var litres = document.getElementById("total-today-p").textContent;
    var price = document.getElementById("price-p").textContent;
    var amount = document.getElementById("amount-today-p").innerHTML = price*litres;
    return amount
  }
  function getBalP(){
    var init = document.getElementById("initial-p").textContent;
    var sold = document.getElementById("total-today-p").textContent;
    var order = document.getElementById("new-order-p").textContent;
    var bal0 =  document.getElementById("bal0-p").textContent;
    var bal2 = document.getElementById("bal-p").value;
    if ((!parseInt(bal0) || bal0 === '') && (!parseInt(order) || order === '')){
      return document.getElementById("bal-p").value = parseInt((init - sold));
    } else if (!parseInt(order)){
      return document.getElementById("bal-p").value = parseInt((bal0 - sold));
    } else if (!parseInt(bal0)){
      return document.getElementById("bal-p").value = parseInt((init - sold))+parseInt(order);
    } else {
      return document.getElementById("bal-p").value = parseInt((bal0 - sold))+parseInt(order);
    }
  }
  function myTotal3(){
    var today = document.getElementsByClassName("tester-today3").textContent;
    var yesterday = document.getElementsByClassName("tester-yesterday3").textContent;
    // console.log(total)
    var print = document.getElementsByClassName("total-today3").innerHTML = today-yesterday;
    return print
  } 
  function amountToday3(){
    var litres = document.getElementsByClassName("total-today3").textContent;
    var price = document.getElementsByClassName("price3").textContent;
    var amount = document.getElementsByClassName("amount-today3").innerHTML = price*litres;
    return amount
  }
  function getBal3(){
    var bal0 =  document.getElementsByClassName("bal0-3").textContent;
    var init = document.getElementsByClassName("initial3").textContent;
    var sold = document.getElementsByClassName("total-today3").textContent;
    var order = document.getElementById("new-order3").textContent;
    if ((!parseInt(bal0) || bal0 === '') && (!parseInt(order) || order === '')){
      return document.getElementsByClassName("bal-3").value = parseInt((init - sold));
    } else if (!parseInt(order)){
      return document.getElementsByClassName("bal-3").value = parseInt((bal0 - sold));
    } else if (!parseInt(bal0)){
      return document.getElementsByClassName("bal-3").value = parseInt((init - sold))+parseInt(order);
    } else {
      return document.getElementsByClassName("bal-3").value = parseInt((bal0 - sold))+parseInt(order);
    }
  }
  
  function showPass(){
   return document.getElementById("id_password").type='text';
  }
  function hidePass(){
    return document.getElementById("id_password").type='password';
   }
  
  
  function myFunction() {
      var x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
    }
  
  function toggleLog(){
      var hide = document.getElementById("logForm");
      if (hide.style.display === "block"){
          hide.style.display = "none";
      } else{
          hide.style.display = "block";
      }
  }
  function togglePetrol(){
    var hide = document.getElementById("petrolLog");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleDiesel(){
    var hide = document.getElementById("dieselLog");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleGas(){
    var hide = document.getElementById("gasLog");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleOrder(){
    var hide = document.getElementById("fuelReceived");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleDieselOrder(){
    var hide = document.getElementById("dieselReceived");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleGasOrder(){
    var hide = document.getElementById("gasReceived");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleFuelReg(){
    var hide = document.getElementById("RegFuel");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleMPesa(){
    var hide = document.getElementById("mpesaForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleFuelReceivedForm(){
    var hide = document.getElementById("fuelReceivedForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleFuelRecvdForm(){
    var hide = document.getElementById("fuelRecvdForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleDieselRecvdForm(){
    var hide = document.getElementById("dieselRecvdForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleDieselLog(){
    var hide = document.getElementById("dieselForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleGasRecvdForm(){
    var hide = document.getElementById("gasRecvdForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleGasLog(){
    var hide = document.getElementById("gasForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleContact(){
    var hide = document.getElementById("contForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleSave(){
    var hide = document.getElementById("balForm");
    if (hide.style.display === "none"){
        hide.style.display = "block";
    } else{
        hide.style.display = "none";
    }
  }
  function toggleDailyTotal(){
    var hide = document.getElementById("dailyTotal");
    var hide2 = document.getElementById("dailyTotal2");
    if (hide.style.display === "none" && hide2.style.display === "none"){
        hide.style.display = "block";
        hide2.style.display = "block";
    } else{
        hide.style.display = "none";
        hide2.style.display = "none";
    }
  }
  function toggleUpdateLogDetailsForm(){
    var hide = document.getElementById("updateLogDetailsForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleReportForm(){
    var hide = document.getElementById("reportForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleReportForm2(){
    var hide = document.getElementById("reportForm2");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleUpdateMpesaLogDetailsForm(){
    var hide = document.getElementById("updateMpesaLogDetailsForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function togglePrint(){
    var hide = document.getElementById("printData");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function togglePrintMpesaData(){
    var hide = document.getElementById("printMpesaData");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleUpdatePetrolPumps(){
    var hide = document.getElementById("updatePetrolPumpsForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleUpdatePetrolPrice(){
    var hide = document.getElementById("updatePetrolPriceForm");
    var hide2 = document.getElementById("updatePetrolPriceForm2");
    var hide3 = document.getElementById("updatePetrolPriceForm3");
    var hide4 = document.getElementById("updatePetrolPriceForm4");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else if (hide2.style.display === "block"){
        hide2.style.display = "none";
    } else if (hide3.style.display === "block"){
      hide3.style.display = "none";
    }  else if (hide4.style.display === "block"){
      hide4.style.display = "none";
    } else{
      hide.style.display = "block";
      hide2.style.display = "block";
      hide3.style.display = "block";
      hide4.style.display = "block";
  }
  }
  function toggleUpdatePetrolAmount(){
    var hide = document.getElementById("updatePetrolAmountForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleUpdateDieselPumps(){
    var hide = document.getElementById("updateDieselPumpsForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleUpdateDieselAmount(){
    var hide = document.getElementById("updateDieselAmountForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleUpdateDieselPrice(){
    var hide = document.getElementById("updateDieselPriceForm");
    var hide2 = document.getElementById("updateDieselPriceForm2");
    var hide3 = document.getElementById("updateDieselPriceForm3");
    var hide4 = document.getElementById("updateDieselPriceForm4");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else if (hide2.style.display === "block"){
        hide2.style.display = "none";
    } else if (hide3.style.display === "block"){
      hide3.style.display = "none";
    }  else if (hide4.style.display === "block"){
      hide4.style.display = "none";
    } else{
      hide.style.display = "block";
      hide2.style.display = "block";
      hide3.style.display = "block";
      hide4.style.display = "block";
  }
  }
  function toggleUpdateGasPumps(){
    var hide = document.getElementById("updateGasPumpsForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleUpdateGasAmount(){
    var hide = document.getElementById("updateGasAmountForm");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleUpdateGasPrice(){
    var hide = document.getElementById("updateGasPriceForm");
    var hide2 = document.getElementById("updateGasPriceForm2");
    var hide3 = document.getElementById("updateGasPriceForm3");
    var hide4 = document.getElementById("updateGasPriceForm4");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else if (hide2.style.display === "block"){
        hide2.style.display = "none";
    } else if (hide3.style.display === "block"){
      hide3.style.display = "none";
    }  else if (hide4.style.display === "block"){
      hide4.style.display = "none";
    } else{
      hide.style.display = "block";
      hide2.style.display = "block";
      hide3.style.display = "block";
      hide4.style.display = "block";
  }
  }
  function myPumps(){
    var petrolOne = document.getElementById("petrol-one");
    var petrolTwo = document.getElementById("petrol-two");
    var petrolThree = document.getElementById("petrol-three");
    var petrolFour = document.getElementById("petrol-four");
    var pumpNo = document.getElementById("pumpNo").textContent;
    if (parseInt(pumpNo) === 2){
      petrolTwo.style.display = 'block';
      petrolOne.style.display = 'none';
    } else if(parseInt(pumpNo) === 3){
      petrolThree.style.display = 'block';
      petrolOne.style.display = 'none';
    } else if (parseInt(pumpNo) === 4){
      petrolFour.style.display = 'block';
      petrolOne.style.display = 'none';
    }
  }
  function dieselPumps(){
    var dieselOne = document.getElementById("diesel-one");
    var dieselTwo = document.getElementById("diesel-two");
    var dieselThree = document.getElementById("diesel-three");
    var dieselFour = document.getElementById("diesel-four");
    var pumpNo = document.getElementById("dieselPumpNo").textContent;
    if (parseInt(pumpNo) === 2){
      dieselTwo.style.display = 'block';
      dieselOne.style.display = 'none';
    } else if(parseInt(pumpNo) === 3){
      dieselThree.style.display = 'block';
      dieselOne.style.display = 'none';
    } else if (parseInt(pumpNo) === 4){
      dieselFour.style.display = 'block';
      dieselOne.style.display = 'none';
    }
  }
  function gasPumps(){
    var gasOne = document.getElementById("gas-one");
    var gasTwo = document.getElementById("gas-two");
    var gasThree = document.getElementById("gas-three");
    var gasFour = document.getElementById("gas-four");
    var pumpNo = document.getElementById("gasPumpNo").textContent;
    if (parseInt(pumpNo) === 2){
      gasTwo.style.display = 'block';
      gasOne.style.display = 'none';
    } else if(parseInt(pumpNo) === 3){
      gasThree.style.display = 'block';
      gasOne.style.display = 'none';
    } else if (parseInt(pumpNo) === 4){
      gasFour.style.display = 'block';
      gasOne.style.display = 'none';
    }
  }
  
  
  function toggleOrderInfo(){
    var hide = document.getElementById("orderInfo");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleDieselOrderInfo(){
    var hide = document.getElementById("dieselOrderInfo");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleGasOrderInfo(){
    var hide = document.getElementById("gasOrderInfo");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function togglePetrolRcvd(){
    var hide = document.getElementById("petrolReceived");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleDieselRcvd(){
    var hide = document.getElementById("dieselReceived");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  function toggleGasRcvd(){
    var hide = document.getElementById("gasReceived");
    if (hide.style.display === "block"){
        hide.style.display = "none";
    } else{
        hide.style.display = "block";
    }
  }
  
  var contForm = document.getElementById("contForm")
  // $(function(){
  //   function submitState(el) {
   
  //      var $form = $(el),
  //          $requiredInputs = $form.find('input:required'),
  //          $submit = $form.find('input[type="submit"]');
   
  //      $submit.attr('disabled', 'disabled');
   
  //      $requiredInputs.keyup(function () {
   
  //        $form.data('empty', 'false');
   
  //        $requiredInputs.each(function() {
  //          if ($(this).val() === '') {
  //            $form.data('empty', 'true');
  //          }
  //        });
   
  //        if ($form.data('empty') === 'true') {
  //          $submit.attr('disabled', 'disabled').attr('title', 'fill in all required fields');
  //        } else {
  //          $submit.removeAttr('disabled').attr('title', 'click to submit');
  //        }
  //      });
  //    }
   
  //    // apply to each form element individually
  //    submitState('#contForm');
  //   //  submitState('#login_user');
  //  });
  
   $(function(){
    function submitState(el) {
   
       var $form = $(el),
           $requiredInputs = $form.find('textarea:required'),
           $submit = $form.find('input[type="submit"]');
   
       $submit.attr('disabled', 'disabled');
   
       $requiredInputs.keyup(function () {
   
         $form.data('empty', 'false');
   
         $requiredInputs.each(function() {
           if ($(this).val() === '') {
             $form.data('empty', 'true');
           }
         });
   
         if ($form.data('empty') === 'true') {
           $submit.attr('disabled', 'disabled').attr('title', 'fill in all required fields');
         } else {
           $submit.removeAttr('disabled').attr('title', 'click to submit');
         }
       });
     }
   
     // apply to each form element individually
     submitState('#contForm');
    //  submitState('#login_user');
   });

   
   function toggleNext(){
    var img = document.getElementById("img2");
    var img1 = document.getElementById("img1");
    var next = document.getElementById("next");
    // img.style.opacity = '1';
    img.style.display = 'block';
    img1.style.display = 'none';

   }

   function toggleNext2(){
    var img = document.getElementById("img3");
    var img1 = document.getElementById("img1");
    var img2 = document.getElementById("img2");
    var next = document.getElementById("next2");
    // img.style.opacity = '1';
    img.style.display = 'block';
    img1.style.display = 'none';
    img2.style.display = 'none';
   }