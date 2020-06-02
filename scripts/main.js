
//Time adapting colors
if(new Date().getHours()>=6 && new Date().getHours()<=18){
	document.body.onload = function(){
		document.body.style.backgroundColor = "#FC7753";}
	} else {
		document.body.onload = function(){
			document.body.style.backgroundColor = "#000000";
		}
	}

function showDate () {
	var clock = document.getElementById('showDate');
	var date = new Date();

	var hours = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var month = date.getMonth();
	var day = date.getDate();
	var year = date.getFullYear();
	var weekDay=date.getDay();

	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	var weekDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

//Year, month, day
	document.getElementById('showDate').innerHTML=year + ' ' + months[month] + ' ' + day +  ', ' + weekDays[weekDay-1];

//Clock ticking	
	var secondsAngle=seconds*6;
	document.getElementById('secondArrow').style.transform='rotateZ('+ secondsAngle +'deg)';


	var minutesAngle=minutes*6;
	document.getElementById('minuteArrow').style.transform='rotateZ('+ minutesAngle +'deg)';

	var hoursAngle=hours*30;
	document.getElementById('hourArrow').style.transform='rotateZ('+ hoursAngle +'deg)';

/*//Time left
	var timeLeft = function(angle){
		document.getElementById('left').innerHTML='Don\'t worry. Only ' + (new Date(2021, 3, 4).getTime()/60-minutes) +' minutes left until you can see your family again';
			if(angle>=0 && angle<=45){
				document.getElementById('left').style.animationPlayState = 'running';
				
			}else{
				document.getElementById('left').style.animationPlayState = 'paused';
				document.getElementById('left').style.display = "none";
				// document.getElementById('left').innerHTML='';
			}
	}
	timeLeft(secondsAngle);*/
//Time left on Mars
// document.getElementById('timeLeft').onclick = function(){
	document.getElementById('timeLeftText').innerHTML='Don\'t worry. Only ' + (new Date(2021, 3, 4).getTime()/60-minutes) +' minutes left until you can see your family again';
	document.getElementById('timeLeftText').style.animationPlayState = 'running';
	document.getElementById('timeLeftText').style.visibility = 'visible';
// }



}
setInterval(showDate,1000);



//Themes
document.getElementById('happy').onclick = function(){
	document.body.style.backgroundColor = "#7A9B76";
}

document.getElementById('sad').onclick = function(){
	document.body.style.backgroundColor = "#2B2D42";
}

document.getElementById('sun').onclick = function(){
	document.body.style.backgroundColor = "#FC7753";
}

document.getElementById('moon').onclick = function(){
	document.body.style.backgroundColor = "#000000";
}


