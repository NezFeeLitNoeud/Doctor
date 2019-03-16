// function color() {
// 	document.getElementsByClassName('cercle').style.backgroundColor = "red";
// }

var int = document.getElementById('intro');


function epaule() {
 	var ep = document.getElementById('tepaule');
 	var couleur = document.getElementById('epaule');
      
    if(ep.style.display == 'block') {
    	ep.style.display = 'none';
    	couleur.style.backgroundColor = 'black';
    	couleur.style.opacity = "0.7";
    	int.style.display = "block";
   	} else {
        ep.style.display = 'block';
        couleur.style.backgroundColor = 'red';
        couleur.style.opacity = "0.7"
        int.style.display = "none";

    }
}


function coude(){
 	var cd = document.getElementById('tcoude');
    var couleurC = document.getElementById('coude');

    if(cd.style.display == 'block') {
        cd.style.display = 'none';
        couleurC.style.backgroundColor = 'black';
    	couleurC.style.opacity = "0.7";
    	int.style.display = "block";
    } else {
        cd.style.display = 'block';
        couleurC.style.backgroundColor = 'red';
        int.style.display = "none";
    	couleurC.style.opacity = "0.7" 
    }
}

function poignet() {
 	var tp = document.getElementById('tpoignet');
 	var couleurP = document.getElementById('poignet');

    if (tp.style.display == 'block') {
        tp.style.display = 'none';
        couleurP.style.backgroundColor = 'black';
    	couleurP.style.opacity = "0.7";
    	int.style.display = "block";
    } else {
        tp.style.display = 'block';
        couleurP.style.backgroundColor = 'red';
    	couleurP.style.opacity = "0.7"
    	int.style.display = "none";
    }
}


function hanche() {
 	var ha = document.getElementById('thanche');
 	var couleurH = document.getElementById('hanche');
 
    if(ha.style.display == 'block') {
        ha.style.display = 'none';
        couleurH.style.backgroundColor = 'black';
    	couleurH.style.opacity = "0.7";
    	int.style.display = "block";
    } else {
        ha.style.display = 'block';
        couleurH.style.backgroundColor = 'red';
    	couleurH.style.opacity = "0.7"
    	int.style.display = "none";
    }
}

function genoux() {
 	var ge = document.getElementById('tgenoux');
  	var couleurG = document.getElementById('genoux');
 
    if(ge.style.display == 'block') {
        ge.style.display = 'none';
        couleurG.style.backgroundColor = 'black';
    	couleurG.style.opacity = "0.7"
    	int.style.display = "block";
    } else {
        ge.style.display = 'block';
        couleurG.style.backgroundColor = 'red';
    	couleurG.style.opacity = "0.7";
    	int.style.display = "none";
    	}
	}

function cheville() {
 	var tc = document.getElementById('tcheville');
 	var couleurCh = document.getElementById('cheville');

    if(tc.style.display == 'block') {
        tc.style.display = 'none';
        couleurCh.style.backgroundColor = 'black';
    	couleurCh.style.opacity = "0.7";
    	int.style.display = "block";
    } else {
        tc.style.display = 'block';
        couleurCh.style.backgroundColor = 'red';
    	couleurCh.style.opacity = "0.7"
    	int.style.display = "none";
     }
}
