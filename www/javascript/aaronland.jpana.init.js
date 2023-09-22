window.addEventListener("load", function load(event){

    var japanese_el = document.getElementById("japanese");
    var english_el = document.getElementById("english");
    var feedback_el = document.getElementById("feedback");
    var button_el = document.getElementById("translate");
    var chart_el = document.getElementById("show-chart");    
    
    var hirigana = aaronland.jpana.tables.hirigana();
    var english = Object.keys(hirigana);

    var build_chart = function(table) {

	var chart = document.createElement("div");
	chart.setAttribute("class", "chart grid");

	for (en_text in table) {
	    
	    var jp_text = table[en_text];

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

	var dlg = document.createElement("dialog");
	dlg.setAttribute("id", "chart");

	dlg.appendChild(chart);
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

    chart_el.onclick = show_chart;
    pick();
});
