var aaronland = aaronland || {};
aaronland.jpana = aaronland.jpana || {};

aaronland.jpana.chart = (function(){

    var close_svg = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/></svg>';
    
    var self = {

	'generate_dialog': function(table) {

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
	    
	},
    };
    
    return self;

})();
