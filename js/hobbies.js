//display clubs
var clubs = false;
document.querySelector("#clubs").addEventListener("click", function() {
    if(clubs){
        document.querySelector('#clubstxt').style.display = 'none';
        clubs = false;
    }
    else{
        document.querySelector('#clubstxt').style.display = 'block';
        clubs = true;	
    }
	
});

var hobs = false;
document.querySelector("#hobs").addEventListener("click", function() {
    if(hobs){
        document.querySelector('#hobstxt').style.display = 'none';
        hobs = false;
    }
    else{
        document.querySelector('#hobstxt').style.display = 'block';
        hobs = true;	
    }
	
});

var baja = false;
document.querySelector("#baja").addEventListener("click", function() {
    if(baja){
        document.querySelector('#bajatxt').style.display = 'none';
        baja = false;
    }
    else{
        document.querySelector('#bajatxt').style.display = 'block';
        baja = true;	
    }
	
});

var wz = false;
document.querySelector("#wisezoom").addEventListener("click", function() {
    if(wz){
        document.querySelector('#wztxt').style.display = 'none';
        wz = false;
    }
    else{
        document.querySelector('#wztxt').style.display = 'block';
        wz = true;	
    }
	
});

var ws = false;
document.querySelector("#ws").addEventListener("click", function() {
    if(ws){
        document.querySelector('#wstxt').style.display = 'none';
        ws = false;
    }
    else{
        document.querySelector('#wstxt').style.display = 'block';
        ws = true;	
    }
	
});
var aiv = false;
document.querySelector("#aiv").addEventListener("click", function() {
    if(aiv){
        document.querySelector('#aivtxt').style.display = 'none';
        aiv = false;
    }
    else{
        document.querySelector('#aivtxt').style.display = 'block';
        aiv = true;	
    }
	
});

var sg = false;
document.querySelector("#stage").addEventListener("click", function() {
    if(sg){
        document.querySelector('#sgtxt').style.display = 'none';
        sg = false;
    }
    else{
        document.querySelector('#sgtxt').style.display = 'block';
        sg = true;	
    }
	
});

var ol = false;
document.querySelector("#olympic").addEventListener("click", function() {
    if(ol){
        document.querySelector('#omtxt').style.display = 'none';
        ol = false;
    }
    else{
        document.querySelector('#omtxt').style.display = 'block';
        ol = true;	
    }
	
});

var b = false;
document.querySelector("#bread").addEventListener("click", function() {
    if(b){
        document.querySelector('#breadtxt').style.display = 'none';
        b = false;
    }
    else{
        document.querySelector('#breadtxt').style.display = 'block';
        b = true;	
    }
	
});

var lake = false;
document.querySelector("#lake").addEventListener("click", function() {
    if(lake){
        document.querySelector('#laketxt').style.display = 'none';
        lake = false;
    }
    else{
        document.querySelector('#laketxt').style.display = 'block';
        lake = true;	
    }
	
});

var horse = false;
document.querySelector("#horse").addEventListener("click", function() {
    if(horse){
        document.querySelector('#horsetxt').style.display = 'none';
        horse = false;
    }
    else{
        document.querySelector('#horsetxt').style.display = 'block';
        horse = true;	
    }
	
});

//focus


var baja = false;
document.querySelector("#baja").addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        if(baja){
            document.querySelector('#bajatxt').style.display = 'none';
            baja = false;
        }
        else{
            document.querySelector('#bajatxt').style.display = 'block';
            baja = true;	
        }
    }
    
	
});

var wz = false;
document.querySelector("#wisezoom").addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        if(wz){
            document.querySelector('#wztxt').style.display = 'none';
            wz = false;
        }
        else{
            document.querySelector('#wztxt').style.display = 'block';
            wz = true;	
        }
    }
    
	
});

var ws = false;
document.querySelector("#ws").addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        if(ws){
            document.querySelector('#wstxt').style.display = 'none';
            ws = false;
        }
        else{
            document.querySelector('#wstxt').style.display = 'block';
            ws = true;	
        }
    }
    
	
});
var aiv = false;
document.querySelector("#aiv").addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        if(aiv){
            document.querySelector('#aivtxt').style.display = 'none';
            aiv = false;
        }
        else{
            document.querySelector('#aivtxt').style.display = 'block';
            aiv = true;	
        }
    }
    
	
});

var sg = false;
document.querySelector("#stage").addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        if(sg){
            document.querySelector('#sgtxt').style.display = 'none';
            sg = false;
        }
        else{
            document.querySelector('#sgtxt').style.display = 'block';
            sg = true;	
        }
    }
	
});

var ol = false;
document.querySelector("#olympic").addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        if(ol){
            document.querySelector('#omtxt').style.display = 'none';
            ol = false;
        }
        else{
            document.querySelector('#omtxt').style.display = 'block';
            ol = true;	
        }
    }
	
});

var b = false;
document.querySelector("#bread").addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        if(b){
            document.querySelector('#breadtxt').style.display = 'none';
            b = false;
        }
        else{
            document.querySelector('#breadtxt').style.display = 'block';
            b = true;	
        }
    }
	
});

var lake = false;
document.querySelector("#lake").addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        if(lake){
            document.querySelector('#laketxt').style.display = 'none';
            lake = false;
        }
        else{
            document.querySelector('#laketxt').style.display = 'block';
            lake = true;	
        }
    }   
});

var horse = false;
document.querySelector("#horse").addEventListener("keypress", function(event) {
    if(event.key === "Enter"){
        if(horse){
            document.querySelector('#horsetxt').style.display = 'none';
            horse = false;
        }
        else{
            document.querySelector('#horsetxt').style.display = 'block';
            horse = true;	
        }
    }
	
});