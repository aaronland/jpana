window.addEventListener("load", function load(event){

    var japanese_el = document.getElementById("japanese");
    var english_el = document.getElementById("english");
    var feedback_el = document.getElementById("feedback");
    var button_el = document.getElementById("translate");
    var help_el = document.getElementById("help");    
    
    var hirigana = aaronland.jpana.tables.hirigana();
    var english = Object.keys(hirigana);

    var pick = function(){

	var idx = Math.floor(Math.random() * english.length);

	var english_text = english[idx];
	var japanese_text = hirigana[english[idx]];

	// console.log(japanese_text);
	// console.log(english_text);
	
	japanese_el.innerText = japanese_text;
	
	button_el.onclick = function(){

	    var input = english_el.value;
	    
	    if (input == english_text){
		pick();
	    }
	    
	    return false;
	};
    }

    pick();
});
