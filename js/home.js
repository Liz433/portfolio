//display about me
var read = false;

document.querySelector("#read").addEventListener("click", function() {
    if(read){
        document.querySelector('#readtxt').style.display = 'none';
        read = false;
    }
    else{
        document.querySelector('#readtxt').style.display = 'block';
        read = true;	
    }
	
});
