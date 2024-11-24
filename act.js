// JavaScript Document
function appear(){
	data=document.getElementById("t1");
	btext=document.getElementById("tb1")
	console.log(data);
	if (data.innerHTML=="&nbsp;"){
		data.innerHTML="Here!";
		btext.innerHTML="Remove!"		
	}else{
		data.innerHTML="&nbsp;";
		btext.innerHTML="Appear!"
	}
}
function cchange(){
	r=Math.floor(Math.random()*255)
	g=Math.floor(Math.random()*255)
	b=Math.floor(Math.random()*255)
	document.getElementById("t2").style.color="rgb("+r+","+g+","+b+")";
}

function calc(){
	cal=document.getElementById('t3')
	op=Math.round(Math.random()*3)
	n1=Math.floor(Math.random()*100)
	n2=Math.floor(Math.random()*100)
	if(op==0){
		ans=n1+n2
		cal.innerHTML=n1+"+"+n2+"="+ans;
	} else if(op==1){
		ans=n1-n2
		cal.innerHTML=n1+"-"+n2+"="+ans;
	} else if(op==2){
		ans=n1*n2
		cal.innerHTML=n1+"x"+n2+"="+ans;
	} else if(op==3){
		ans=n1/n2
		ans=ans.toFixed(2)
		cal.innerHTML=n1+"/"+n2+"="+ans;
	}
}
function ani(){
	text=document.getElementById("t4")
	text.innerHTML="WEE";
	text.style.fontSize=0;
	n=1
	interval=setInterval(ani2,20);
	function ani2(){
			
		
		if (n<=100){text.style.fontSize=n+"px";}
		if(n>100){text.style.fontSize=200-n+"px";}
		n++	
		
	if (n==200){
		clearInterval(interval);
		text.style.fontSize="40pt";
		text.innerHTML="&nbsp;";
	}}
			
	
	
	
		
	}	

