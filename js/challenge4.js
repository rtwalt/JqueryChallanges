$(document).ready(function(){
  $("form").submit(function(event){
    var validInput = true;
    var name = $("#fullname").val();
    var address = $("#streetaddr").val();
    console.log(name);

    if (name == 0){
      $("#nameerrormsg").css("display", "block");
      event.preventDefault();
      validInput = false;
    }
    else{
      $("#nameerrormsg").css("display", "none");
    }

    if (address == 0){
      $("#addrerrormsg").css("display", "block");
      event.preventDefault();
      validInput = false;
    }
    else{
      $("#addrerrormsg").css("display", "none");
    }

    return validInput;
  })
})


//
//   $("img").mouseover(function() {
//     $("#image").css("background-image", url(' "+$(this).attr("src")+" ')");
//     $("#image").html(this).attr("alt");
// })
//   $("img").mouseout(function(){
//


// ch4form.onsubmit = function() {
//     var validInput = true;
//     var name = document.querySelector("#fullname")
//     var address = document.querySelector("#streetaddr")
//     console.log("Here");
//     console.log(name);
//     console.log(address)
//     if (name.value.length == 0){
//         document.querySelector("#nameerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#nameerrormsg").style.display = "none";
//     }
//
//     if (address.value.length == 0){
//         document.querySelector("#addrerrormsg").style.display = "block";
//         validInput = false;
//     }
//     else {
//         document.querySelector("#addrerrormsg").style.display = "none";
//     }
//
//     return validInput;
// }
