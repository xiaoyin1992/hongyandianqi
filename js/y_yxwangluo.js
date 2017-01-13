window.onload = function() {
	var oBtn = document.getElementById('y_ditu_left');
	var aBtn = oBtn.getElementsByTagName('span');
//	alert(aBtn.length)
	var oDiv = document.getElementById('y_city');
	var aDiv = oDiv.getElementsByTagName('span');
	for(var i = 0;i<aBtn.length;i++){
		aBtn[i].index = i;
		aBtn[i].onclick = function(){
			for(var i = 0;i<aBtn.length;i++){
				aBtn[i].style.border = '';
				aDiv[i].style.display = 'none'
			}
			this.style.border = '2px solid #6a9cee';
			aDiv[this.index].style.display = 'block';
		}
	}
//	var aBtn = document.querySelectorAll('.y_ditu_left>span');
//	var aDiv = document.querySelectorAll('.y_city>span');
//	alert(aDiv.length)
	
}