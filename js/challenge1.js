// listening for a click. add listener to scubscribe but effect to emailField element
	$("#subscribe").click(function(){
		console.log("checked");
		$("#emailField").toggle("fast");

		
		// if($(this).is("checked")){
		// 	console.log("check");
		// 	x.css("display", "block");
		// }
		// else{
		// 	x.css("display", "none");
		// }
	});
// });

// subscribe.onchange = function() {
// 	var x = document.querySelector("#emailField");
// 	if (this.checked){
// 		console.log("selected");
//     	x.style.display = "block";
//   	} else {
//   		console.log("Not selected");
//     	x.style.display = "none";
//   	}
// }

  	// Advanced Option....
//   	x.style.display == "block" ?
//		x.style.display = "none" :
// 		x.style.display = "block";
