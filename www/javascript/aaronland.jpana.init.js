window.addEventListener("load", function load(event){

    var close_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
    
    var japanese_el = document.getElementById("japanese");
    var english_el = document.getElementById("english");
    var feedback_el = document.getElementById("feedback");
    var button_el = document.getElementById("translate");
    var chart_el = document.getElementById("show-chart");    

    var feedback_timeout;
    var last_pick;
    
    var hirigana = aaronland.jpana.tables.hirigana();
    var english = Object.keys(hirigana);

    var build_chart = function(table) {

	var chart = document.createElement("div");
	chart.setAttribute("id", "chart-grid");
	chart.setAttribute("class", "chart grid");

	for (en_text in table) {
	    
	    var jp_text = table[en_text];

	    if (en_text.startsWith("x-")){
		en_text = "";
		jp_text = "";
	    }

	    var cell = document.createElement("div");
	    cell.setAttribute("class", "chart-cell grid-cell");

	    var jp = document.createElement("div");
	    jp.setAttribute("class", "chart-cell-jp");
	    jp.appendChild(document.createTextNode(jp_text));

	    var en = document.createElement("div");
	    en.setAttribute("class", "chart-cell-en");
	    en.appendChild(document.createTextNode(en_text));

	    cell.appendChild(jp);
	    cell.appendChild(en);
	    chart.appendChild(cell);
	}

	var close_header = document.createElement("div");
	close_header.setAttribute("id", "close-header");
	
	var close_form = document.createElement("form");
	close_form.setAttribute("method", "dialog");
	close_form.setAttribute("class", "chart-close");

	var close_btn = document.createElement("button");
	close_btn.setAttribute("id", "chart-close-button");	
	close_btn.setAttribute("class", "btn");
	close_btn.innerHTML = close_svg;

	close_form.appendChild(close_btn);
	close_header.appendChild(close_form);

	var wrapper = document.createElement("div");
	wrapper.setAttribute("id", "chart-wrapper");
	
	wrapper.appendChild(close_header);	
	wrapper.appendChild(chart);

	var dlg = document.createElement("dialog");
	dlg.setAttribute("id", "chart");

	dlg.appendChild(wrapper);
	return dlg;
    };

    var show_chart = function(){

	var dlg = document.getElementById("chart");

	if (! dlg){
	    dlg = build_chart(hirigana);
	    document.body.appendChild(dlg);
	}

	console.log(dlg);
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
	    return false;
	};
    }

    chart_el.onclick = show_chart;
    pick();
});
