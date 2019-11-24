$(document).ready(function(){
  $("#ch3form").submit(function(event){
    var validInput = false;
    var fruit = $('input[name="fruit"]');
    var year = $('input[name="standing"]');

    if(fruit.is(":checked")){
      console.log("fruit");
      validInput = true;
    }
    else{
      alert("You must pick a fruit!");
      event.preventDefault();
    }

    if(year.is(":checked")){
      console.log("year");
      validInput = true;
    }
    else{
      alert("You must pick a year!");
      event.preventDefault();
    }

    return validInput;
  })
})


// $("#ch3form").submit(function(){
//   if($('input[name="fruit"]').prop('checked'))
//   return true;
//
//   alert("You must pick a fruit!")
//   return false;
  // event.preventDefault();

// javascript
// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;

    // Advanced Answer
    // if(document.querySelector('input[name="fruit"]:checked'))
    //     return true;

    // alert("You must pick a fruit!")
    // return false;
