$(document).ready(function() {
	
	var timeStampsArray = [];
	
	$(".img-container > img").each(function() {
		var thisTimeStamp = $(this).data("timestamp");
		timeStampsArray.push(thisTimeStamp);
		//	timeStampsArray.push(this);
	});
	
	timeStampsArray.push("99:99");
	
	$("#audio").bind("timeupdate", function() {
		var audioSecs = this.currentTime;
		convertTimeStamp(audioSecs);
	});
	
	var convertTimeStamp = function(time) {
			var rem = parseInt(time, 10),
				mins = Math.floor(rem / 60, 10),
				secs = rem - mins * 60;
			if (secs < 10) {
				secs = 0 + "" + secs;
			}
			if (mins < 10) {
				mins = 0 + "" + mins;
			}
			var regTime = mins + ":" + secs;
			//console.log(regTime);
			compareTime(regTime);
			//return regTime;
		}
		//timeStampsArray.push(regTime);
	
	console.log(timeStampsArray);
	
	var compareTime = function(t) {
		l = timeStampsArray.length;
		for (i = 0; i < l - 1; i++) {
			if (t >= timeStampsArray[i] && t < timeStampsArray[i + 1]) {
				changeImg(i);
				//console.log(t + "//" + timeStampsArray[i]);
				return;
			} else {
				i + 1;
			}
		}
	}
	
	var changeImg = function(n) {
		$("#active").addClass("hide").removeAttr('id');
		$("img:eq(" + n + ")").removeClass("hide").attr('id', 'active');
	}
});
