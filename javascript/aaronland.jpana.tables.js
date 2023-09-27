var aaronland = aaronland || {};
aaronland.jpana = aaronland.jpana || {};

aaronland.jpana.tables = (function(){

    var self = {
	
	hirigana: function(){

	    return {
		
		// Monographs
		
		"a": "あ",
		"i": "い",
		"u": "う",
		"e": "え",
		"o": "お",
		
		/*
		"xa": "ぁ",
		"xi": "ぃ",
		"xu": "ぅ",
		"xe": "ぇ",
		"xo": "ぉ",
		"la": "ぁ",
		"li": "ぃ",
		"lu": "ぅ",
		"le": "ぇ",
		"lo": "ぉ",
		 */
		
		"ka": "か",
		"ki": "き",
		"ku": "く",
		"ke": "け",
		"ko": "こ",

		"sa": "さ",
		"shi": "し",				
		// "si": "し",
		"su": "す",
		"se": "せ",
		"so": "そ",

		"ta": "た",
		"chi": "ち",		
		// "ti": "ち",
		"tsu": "つ",		
		// "tu": "つ",
		"te": "て",		
		"to": "と",	

		"na": "な",
		"ni": "に",
		"nu": "ぬ",
		"ne": "ね",
		"no": "の",
		
		"ha": "は",
		"hi": "ひ",
		"fu": "ふ",
		// "hu": "ふ",
		"he": "へ",
		"ho": "ほ",

		"ma": "ま",
		"mi": "み",
		"mu": "む",
		"me": "め",
		"mo": "も",

		"ya": "や",
		"x-yi": "",
		"yu": "ゆ",
		"ye": "いぇ",
		"yo": "よ",

		"ra": "ら",
		"ri": "り",
		"ru": "る",
		"re": "れ",
		"ro": "ろ",
				
		"wa": "わ",
		//"wa": "うぁ",
		"wi": "うぃ",		
		//"wi": "ゐ",
		"": "",
		"we": "うぇ",		
		//"we": "ゑ",
		"wo": "を",		
		//"wo": "うぉ",

		// Monographs with diacritics 

		"ga": "が",
		"gi": "ぎ",
		"gu": "ぐ",
		"ge": "げ",
		"go": "ご",
		
		"za": "ざ",
		"x-zi": "",
		// "zi": "じ",
		"zu": "ず",
		"ze": "ぜ",
		"zo": "ぞ",

		"da": "だ",
		"di": "ぢ",
		"du": "づ",		
		"de": "で",
		"do": "ど",

		"ba": "ば",
		"bi": "び",
		"bu": "ぶ",
		"be": "べ",
		"bo": "ぼ",
		
		"pa": "ぱ",
		"pi": "ぴ",
		"pu": "ぷ",
		"pe": "ぺ",
		"po": "ぽ",

		// Digraphs

		"kya": "きゃ",
		"x-kyi": "",
		"kyu": "きゅ",
		"x-kye": "",
		"kyo": "きょ",

		"sha": "しゃ",
		"x-shi": "",
		"shu": "しゅ",
		"x-she": "",
		"sho": "しょ",
		
		// "sya": "しゃ",
		// "x-syi": "",
		// "syu": "しゅ",
		// "x-sye": "",
		// "syo": "しょ",

		"cha": "ちゃ",		
		"x-chi": "",
		"chu": "ちゅ",		
		"che": "ちぇ",
		"cho": "ちょ",

		"nya": "にゃ",
		"x-nyi": "",
		"nyu": "にゅ",
		"x-nye": "",
		"nyo": "にょ",
		
		"hya": "ひゃ",
		"x-hyi": "",
		"hyu": "ひゅ",
		"x-hye": "",
		"hyo": "ひょ",

		"mya": "みゃ",
		"x-myi": "",		
		"myu": "みゅ",
		"x-mye": "",		
		"myo": "みょ",

		"rya": "りゃ",
		"x-ryi": "",		
		"ryu": "りゅ",
		"x-rye": "",		
		"ryo": "りょ",

		// Digraphs with diacritics

		"gya": "ぎゃ",
		"x-gyi": "",
		"gyu": "ぎゅ",
		"x-gye": "",		
		"gyo": "ぎょ",
		
		"ja": "じゃ",
		"ji": "じ",		
		"ju": "じゅ",
		"x-je": "",
		"jo": "じょ",

		"dha": "ぢゃ",
		"dhi": "でぃ",
		"dhu": "でゅ",		
		//"dhu": "ぢゅ",
		"dhe": "ぢぇ",
		"dho": "ぢょ",

		"bya": "びゃ",
		"x-byi": "",		
		"byu": "びゅ",
		"x-bye": "",		
		"byo": "びょ",

		"pya": "ぴゃ",
		"x-pyi": "",		
		"pyu": "ぴゅ",
		"x-pye": "",		
		"pyo": "ぴょ",
		
		//
		
		"fa": "ふぁ",
		"fi": "ふぃ",
		"x-fu": "",
		"fe": "ふぇ",
		"fo": "ふぉ",
				
		"va": "ゔぁ",
		"vi": "ゔぃ",
		"vu": "ゔ",
		"ve": "ゔぇ",
		"vo": "ゔぉ",
		
		// "tya": "ちゃ",
		// "x-tyi": "",
		// "tyu": "ちゅ",
		// "tye": "ちぇ",
		// "tyo": "ちょ",
		
		// TBD...
		// "dwu": "どぅ",					

		/*
		"xya": "ゃ",
		"x-xyi": "",		
		"xyu": "ゅ",
		"x-xye": "",		
		"xyo": "ょ",
		
		"lya": "ゃ",
		"x-lyi": "",		
		"lyu": "ゅ",
		"x-lye": "",		
		"lyo": "ょ",
		 */
		
		
		"n": "ん",		
	    };
	},
    };

    return self;
    
})();
