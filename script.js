//first active slider
var first=document.getElementsByClassName('first');
var active=0;
function displaySlide(n){
	active=n;
	setMargin(n);
}
function setMargin(num){
	if(num==1){
		first[0].style.marginLeft='0%';
	}
	if(num==2){
		first[0].style.marginLeft='-20%';
	}
	if(num==3){
		first[0].style.marginLeft='-40%';
	}
	if(num==4){
		first[0].style.marginLeft='-60%';
	}
}