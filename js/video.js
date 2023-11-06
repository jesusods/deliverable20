var video;

window.addEventListener("load", function() {
	video = document.getElementById("player1");
	video.autoplay = false
	video.loop = false

});

document.querySelector("#play").addEventListener("click", function() {

	video.volume = (document.getElementById("slider").value)/100;
	video.play();

});

document.querySelector("#pause").addEventListener("click", function() {
	
	video.pause()

});

document.querySelector("#vintage").addEventListener("click", function() {
	

	video.className = "oldSchool"

});

document.querySelector("#orig").addEventListener("click", function() {
	

	video.className = "video"
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * .90
	console.log(video.playbackRate)
});

document.querySelector("#faster").addEventListener("click", function() {
	

	video.playbackRate = video.playbackRate * 1.10
	console.log(video.playbackRate)

});

document.querySelector("#skip").addEventListener("click", function() {

	let newTime = video.currentTime + 10
	if(newTime > video.seekable.end(0)){
		video.currentTime = 0
	}else{
		video.currentTime = newTime
	}
	console.log(video.currentTime)
});
document.querySelector("#mute").addEventListener("click", function() {

	video.muted = !video.muted

});

document.querySelector("#slider").addEventListener("input", function() {

	video.volume = (document.getElementById("slider").value)/100;

});