var allboxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12, #resetbox, #images, #bg1, #bg2, #bg3, #bg4, #bg5, #bg6, #bg7, #bg8, #bg9, #bg10, #bg11, #bg12, #htext1, #htext2, #htext5, #sidetext3, #sidetext4, #vtext1, #vtext2, #vtext3, #vtext4, #vtext5');
	for(var i=0; allboxes[i]; i++){
 	var changebox =  allboxes[i];
 	changebox.style.transitionDuration = "0.8s";
}

function Letter() {

	var allboxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12, #box13, #box14, #box15, #box16, #box17, #box18, #box19, #box20, #box21, #box22, #box23, #box24, #box25, #box26, #bg1, #bg2, #bg3, #bg4, #bg5, #bg6, #bg7, #bg8, #bg9, #bg10, #bg11, #bg12');
	var hortext = document.querySelectorAll('#htext1, #htext2, #htext3, #htext5, #vtext1, #vtext2, #vtext3, #vtext4, #vtext5')


	for(var i=0; allboxes[i]; i++){
    var changebox =  allboxes[i];
    changebox.style.opacity = "0";
	}

	for(var i=0; hortext[i]; i++){
    var changehortext =  hortext[i];
    changehortext.style.opacity = "30%";
	}

	// show resetbox
	document.getElementById("resetbox").style.opacity  = "1";

	document.getElementById("sidetext3").style.opacity  = "1";
	document.getElementById("sidetext4").style.opacity  = "1";
}


function Click1() {
	Letter();
	document.getElementById("box1").style.opacity  = "1";

	document.getElementById("bg1").style.opacity  = "0.7";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext1").style.opacity  = "1";
}

function Click2() {
	Letter();
	document.getElementById("box2").style.opacity  = "1";

	document.getElementById("bg2").style.opacity  = "0.7";

	document.getElementById("htext6").style.opacity  = "1";

	document.getElementById("vtext2").style.opacity  = "1";
}

function Click3() {
	Letter();
	document.getElementById("box3").style.opacity  = "1";

	document.getElementById("bg3").style.opacity  = "0.7";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext4").style.opacity  = "1";
}

function Click4() {
	Letter();
	document.getElementById("box4").style.opacity  = "1";

	document.getElementById("bg4").style.opacity  = "0.7";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext1").style.opacity  = "1";
}

function Click5() {
	Letter();
	document.getElementById("box5").style.opacity  = "1";

	document.getElementById("bg5").style.opacity  = "0.7";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext2").style.opacity  = "1";
}

function Click6() {
	Letter();
	document.getElementById("box6").style.opacity  = "1";

	document.getElementById("bg6").style.opacity  = "0.7";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext4").style.opacity  = "1";
}

function Click7() {
	Letter();
	document.getElementById("box7").style.opacity  = "1";

	document.getElementById("bg7").style.opacity  = "0.7";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext5").style.opacity  = "1";
}

function Click8() {
	Letter();
	document.getElementById("box8").style.opacity  = "1";

	document.getElementById("bg8").style.opacity  = "0.7";

	document.getElementById("htext3").style.opacity  = "1";

	document.getElementById("vtext2").style.opacity  = "1";
}

function Click9() {
	Letter();
	document.getElementById("box9").style.opacity  = "1";

	document.getElementById("bg9").style.opacity  = "0.7";

	document.getElementById("htext5").style.opacity  = "1";

	document.getElementById("vtext5").style.opacity  = "1";
}

function Click10() {
	Letter();
	document.getElementById("box10").style.opacity  = "1";

	document.getElementById("bg10").style.opacity  = "0.7";

	document.getElementById("htext2").style.opacity  = "1";

	document.getElementById("vtext2").style.opacity  = "1";
}

function Click11() {
	Letter();
	document.getElementById("box11").style.opacity  = "1";

	document.getElementById("bg11").style.opacity  = "0.7";

	document.getElementById("htext2").style.opacity  = "1";

	document.getElementById("vtext3").style.opacity  = "1";
}

function Click12() {
	Letter();
	document.getElementById("box12").style.opacity  = "1";

	document.getElementById("bg12").style.opacity  = "0.7";

	document.getElementById("htext1").style.opacity  = "1";

	document.getElementById("vtext2").style.opacity  = "1";
}

function Reset() {
	var allboxes = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9, #box10, #box11, #box12');
	var hortext = document.querySelectorAll('#htext1, #htext2, #htext3, #htext5, #vtext1, #vtext2, #vtext3, #vtext4, #vtext5')
	var iletters = document.querySelectorAll('#bg1, #bg2, #bg3, #bg4, #bg5, #bg6, #bg7, #bg8, #bg9, #bg10, #bg11, #bg12')


	for(var i=0; allboxes[i]; i++){
    var changebox =  allboxes[i];
    changebox.style.opacity = "1";
	}	

	for(var i=0; hortext[i]; i++){
    var changehortext =  hortext[i];
    changehortext.style.opacity = "100%";
	}	
	
	for(var i=0; iletters[i]; i++){
    var changeiletters =  iletters[i];
    changeiletters.style.opacity = "0";
	}	

	// hide resetbox
	document.getElementById("resetbox").style.opacity  = "0";

	document.getElementById("sidetext3").style.opacity  = "30%";



}
