window.addEventListener("load", function load(event){
    
    var japanese_el = document.getElementById("japanese");
    var english_el = document.getElementById("english");
    var feedback_el = document.getElementById("feedback");
    var button_el = document.getElementById("translate");
    var chart_el = document.getElementById("show-chart");    
    var refresh_el = document.getElementById("refresh-button");
    
    var feedback_timeout;
    var last_pick;
    
    var hirigana = aaronland.jpana.tables.hirigana();
    var english = Object.keys(hirigana);

    var show_chart = function(){

	var dlg = document.getElementById("chart");

	if (! dlg){
	    dlg = aaronland.jpana.chart.generate_dialog(hirigana);
	    document.body.appendChild(dlg);
	}

	dlg.showModal();
	return false;
    };
    
    var pick = function(){

	var english_text = "";
	
	while (english_text == "") {
	    
	    var idx = Math.floor(Math.random() * english.length);
	    english_text = english[idx];

	    if (english_text.startsWith("x-")){
		english_text = "";
	    }
	}
	
	var japanese_text = hirigana[english[idx]];

	if (japanese_text == last_pick){
	    return pick();
	}

	last_pick = japanese_text;
	
	// console.log(japanese_text);
	// console.log(english_text);
	
	japanese_el.innerText = japanese_text;
	english_el.value = "";
	
	button_el.onclick = function(){

	    // feedback_el.innerText = "";

	    if (feedback_timeout){
		clearTimeout(feedback_timeout);
	    }
	    
	    var input = english_el.value;
	    input = input.toLowerCase();
	    
	    enc_en = escape(input);
	    enc_jp = japanese_text;
	    
	    if (input == english_text){

		feedback_el.innerText = "That is correct. '" + enc_jp + "' is '" + enc_en + "'";

		feedback_timeout = setTimeout(function(){
		    feedback_el.innerText = "";
		}, 5000);
		
		pick();
		return false;
	    }
	    
	    feedback_el.innerText = "Incorrect. '" + enc_en + "' is not '" + enc_jp + "'" ;
	    english_el.value = "";
	    return false;
	};
    }

    refresh_el.onclick = function(){
	pick();
	return false;
    };
    
    chart_el.onclick = show_chart;

    if (document.body.getAttribute("data-offline-scope") != "") {
	
	aaronland.jpana.offline.init();
    } 

    refresh_el.ondblclick = function(){
	aaronland.jpana.offline.purge_with_confirmation();
	return false;
    };

    // TBD...
    // https://stackoverflow.com/questions/56351216/ios-safari-unwanted-scroll-when-keyboard-is-opened-and-body-scroll-is-disabled
    
    pick();
});
