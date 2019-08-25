window.onload=function(){
	var video = document.getElementsByTagName('video')[0];
	if (video) {
		video.addEventListener('click',function(){
		    video.play();
		},false);
	}
}
