
// Sets variable for video which you need throughout rest of code
var video

video = document.querySelector('#player1');

// This code sets the code so the video doesn't play on loop when you open page
window.addEventListener('load', function() {
	console.log('Good job opening the window');
	video.autoplay = false;
	video.loop = false;
	video.load();
})

// // This code plays the video when user presses play
document.querySelector('#play').addEventListener('click', function() {
	console.log('Play Video');
	video.play();
	// NEED TO ADD SOMETHING WITH VOLUME
});

// This code pausees the video when the user clicks pause
document.querySelector('#pause').addEventListener('click', function() {
	console.log('Pause Video')
	video.pause();
})

// This code sets the playbackRate to 10% less when the user clicks the slow down button
document.querySelector('#slower').addEventListener('click', function() {
	video.playbackRate = video.playbackRate - .10;
		console.log('Slowed Video to', video.playbackRate)
})

// This code speeds up the video 
document.querySelector('#faster').addEventListener('click', function() {
	video.playbackRate = video.playbackRate + .10;
		console.log('Sped Up Video to', video.playbackRate)
})

// This code skips ahead by 10 seconds
document.querySelector('#skip').addEventListener('click', function() {
	video.currentTime = video.currentTime + 10;
		console.log('Skip Ahead to', video.currentTime)

})

// This code allows user to mute the video
// ERROR it is not displaying right  
document.querySelector('#mute').addEventListener('click', function() {
	if (video.muted == false) {
		console.log('Mute Video')
		video.muted = true;
		document.querySelector('#mute').innerHTML = "Unmute"
	}
	else {
		video.muted = false;
		console.log('Unmuted Video')
		document.querySelector('#mute').innerHTML = 'Mute'
	}
})

// This code changes the volume based on the slider 
document.querySelector('#slider').addEventListener('change', function() {
	video.volume = this.value / 100;
		document.querySelector('#volume').innerHTML = video.volume * 100 + '%';
		console.log('Video Volume is', video.volume);
})

// This styles the video element using the class in css .oldSchool
document.querySelector('#vintage').addEventListener('click', function() {
	video.classList.add('oldSchool');
	console.log('Style is vintage')
})

// This removes the old school styles and styles the video in the original style
document.querySelector('#orig').addEventListener('click', function() {
	video.classList.remove('oldSchool');
	console.log('Style is original');
})
