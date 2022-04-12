var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
	video.autoplay = false;
	video.loop = false;
	});


 document.querySelector("#play").addEventListener("click", function() {
 console.log("Play Video");
 video.play();
 console.log("The current volume is " + video.volume);
 document.querySelector("#volume").innerHTML = video.volume * 100 + "%";

 });

 document.querySelector("#pause").addEventListener("click", function() {
 console.log("Pause Video");
 video.pause();
 });

 document.querySelector("#slower").addEventListener("click", function() {
	console.log("Current speed is "+ video.playbackRate);
	video.playbackRate *= .95;
	console.log("New speed is "+ video.playbackRate)
	
	});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Current speed is "+ video.playbackRate);
	video.playbackRate /= .95;
	console.log("New speed is "+ video.playbackRate)
		
});

document.querySelector("#mute").addEventListener("click", function() {
	console.log("The value of mute is " + video.muted);
	
	if(video.muted == true){
		video.muted = false;
		document.querySelector("#volume").innerHTML = video.volume*100 + "%";
		document.querySelector("#mute").innerHTML = "Mute"

	}
	else{
		video.muted = true;
		document.querySelector("#volume").innerHTML = "0%";
		document.querySelector("#mute").innerHTML = "Unmute"
	
	}

	
	//if am currently muted (muted == true) set muted to false and update the text in the button
	//else set muted to true and update the text in the button 
	
		
});


document.querySelector("#slider").addEventListener("click", function() {
	console.log(this.value);
	video.volume = this.value/100;
	document.querySelector("#volume").innerHTML = this.value + "%";
	
	
	//use this.value to update the video volume AND update the volume element below
});



document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime)
	video.currentTime+=15;

	console.log(video.currentTime)
	if (video.currentTime == video.duration){
		video.load();

	}
	
});

document.getElementById("vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.getElementById("orig").addEventListener("click", function() {
	video.classList.remove("oldSchool")
});

