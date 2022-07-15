/* CSSJS Project,
   Author: Gabriel Beguerie,
   Github : https://github.com/GaboBegue/CSSJS ,
   License: MIT License Copyright 2022 */

const referenceCSS = {
	// Properties
	acon : 'align-content: ',
	ait : 'align-items: ',
	asel : 'align-self: ',
	allp : 'all: ',
	an : 'animation: ',
	andel : 'animation-delay: ',
	andir : 'animation-direction: ',
	andu : 'animation-duration: ',
	anfm : 'animation-fill-mode: ',
	antc : 'animation-iteration-count: ',
	annm : 'animation-name: ',
	anps : 'animation-play-state: ',
	antf : 'animation-timing-function: ',
	bkvi : 'backface-visibility: ',
	bg : 'background: ',
	bgat : 'background-attachment: ',
	bgbm : 'background-blend-mode: ',
	bgcli : 'background-clip: ',
	bgc : 'background-color: ',
	bgimg : 'background-image: ',
	bgori : 'background-origin: ',
	bgpos : 'background-position: ',
	bgrpt : 'background-repeat: ',
	bgsz : 'background-size: ',
	bd : 'border: ',
	bdb : 'border-bottom: ',
	bdbc : 'border-bottom-color: ',
	bdblr : 'border-bottom-left-radius: ',
	bdbrr : 'border-bottom-right-radius: ',
	bdbs : 'border-bottom-style: ',
	bdbw : 'border-bottom-width: ',
	bdcll: 'border-collapse: ',
	bdclr : 'border-color: ',
	bdimg: 'border-image: ',
	bdimgo: 'border-image-outset: ',
	bdimgr: 'border-image-repeat: ',
	bdimgsl: 'border-image-slice: ',
	bdimgsc : 'border-image-source: ',
	bdimgw : 'border-image-width: ',
	bdl : 'border-left: ',
	bdlclr : 'border-left-color: ',
	bdlsty : 'border-left-style: ',
	bdlw : 'border-left-width: ',
	bdrad: 'border-radius: ',
	bdr : 'border-right: ',
	bdrcol : 'border-right-color: ',
	bdrsty : 'border-right-style: ',
	bdrw : 'border-right-width: ',
	bdspa : 'border-spacing: ',
	bdsty : 'border-style: ',
	bdt : 'border-top: ',
	bdtclr : 'border-top-color: ',
	bdtlrad : 'border-top-left-radius: ',
	bdtrrad : 'border-top-right-radius: ',
	bdtsty : 'border-top-style: ',
	bdtw : 'border-top-width: ',
	bdw : 'border-width: ',
	b : 'bottom: ',
	boxsha : 'box-shadow: ',
	boxsiz : 'box-sizing: ',
	capsd : 'caption-side: ',
	cls : 'clear: ',
	cli : 'clip: ',
	c : 'color: ',
	colc : 'column-count: ',
	colf : 'column-fill: ',
	colg : 'column-gap: ',
	colr : 'column-rule: ',
	colrc : 'column-rule-color: ',
	colrs : 'column-rule-style: ',
	colrw : 'column-rule-width: ',
	colspn : 'column-span: ',
	colw : 'column-width: ',
	colms : 'columns: ',
	cont : 'content: ',
	cntin : 'counter-increment: ',
	cntres : 'counter-reset: ',
	cur : 'cursor: ',
	dir : 'direction: ',
	d : 'display: ',
	empc : 'empty-cells: ',
	filt : 'filter: ',
	flex : 'flex: ',
	flexb : 'flex-basis: ',
	flexd : 'flex-direction: ',
	flexf : 'flex-flow: ',
	flexg : 'flex-grow: ',
	flexsh : 'flex-shrink: ',
	flexwrp : 'flex-wrap: ',
	float : 'float: ',
	f : 'font: ',
	fface : '@font-face: ',
	ffam : 'font-family: ',
	fsz : 'font-size: ',
	fsza : 'font-size-adjust: ',
	fstch : 'font-stretch: ',
	fsty :'font-style: ',
	fv : 'font-variant: ',
	fw : 'font-weight: ',
	hangp : 'hanging-punctuation: ',
	h : 'height: ',
	jcont : 'justify-content: ',
	keyf : '@keyframes: ',
	l : 'left: ',
	letspa : 'letter-spacing: ',
	lineh : 'line-height: ',
	ltsty : 'list-style: ',
	lstyimg : 'list-style-image: ',
	lstypos : 'list-style-position: ',
	lstytp : 'list-style-type: ',
	m : 'margin: ',
	mb : 'margin-bottom: ',
	ml : 'margin-left: ',
	mr : 'margin-right: ',
	mt : 'margin-top: ',
	maxh : 'max-height: ',
	maxw : 'max-width: ',
	media : '@media: ',
	minh : 'min-height: ',
	minw : 'min-width: ',
	navd : 'nav-down: ',
	navi : 'nav-index: ',
	navl : 'nav-left: ',
	navr : 'nav-right: ',
	navu : 'nav-up: ',
	op : 'opacity: ',
	ord : 'order: ',
	outl : 'outline: ',
	outlc : 'outline-color: ',
	outlof : 'outline-offset: ',
	outlsty : 'outline-style: ',
	outlw : 'outline-width: ',
	ovfw : 'overflow: ',
	ovfwx : 'overflow-x: ',
	ovfwy : 'overflow-y: ',
	p : 'padding: ',
	pb : 'padding-bottom: ',
	pl : 'padding-left: ',
	pr : 'padding-right: ',
	pt : 'padding-top: ',
	pgba : 'page-break-after: ',
	pgbb : 'page-break-before: ',
	pgbi : 'page-break-inside: ',
	pe : 'perspective: ',
	peog : 'perspective-origin: ',
	pos : 'position: ',
	qt : 'quotes: ',
	rsz : 'resize: ',
	r : 'right: ',
	tabsz : 'tab-size: ',
	tbll : 'table-layout: ',
	txa : 'text-align: ',
	txall : 'text-align-last: ',
	txd : 'text-decoration: ',
	txin : 'text-indent: ',
	txovfw : 'text-overflow: ',
	txsha : 'text-shadow: ',
	txtr : 'text-transform: ',
	t : 'top: ',
	tr : 'transform: ',
	trfor : 'transform-origin: ',
	trsty : 'transform-style: ',
	tra : 'transition: ',
	trade : 'transition-delay: ',
	tradu : 'transition-duration: ',
	trapr : 'transition-property: ',
	tratf : 'transition-timing-function: ',
	ussel : 'user-select: ',
	val : 'vertical-align: ',
	vis : 'visibility: ',
	whspa : 'white-space: ',
	w : 'width: ',
	wob : 'word-break: ',
	wosp : 'word-spacing: ',
	wowr : 'word-wrap: ',
	zix : 'z-index: ',
}


function style(elementos){
	var result = [];       	
	var elemento = elementos.split(' ');
	var resultadoClass = "";
        
	for (var i = 0; i < elemento.length; i++) {
	    if (elemento[i].includes("-") == false && i == 0) {
	        resultadoClass = "." + elemento[i] + " {";
	    } else if (elemento[i].includes("-") == false && i > 0 && result.length > 0) {
	        var final = result.forEach((item) => {resultadoClass += item + " "});
	        resultadoClass  += "}\n";
	        result = [];
	        resultadoClass += "." + elemento[i] + " {";        
	        
	        
	    } else if (elemento[i].includes("-")){		    
	        var atrib = elemento[i].split('-');
	        var sty1 = new String(referenceCSS[atrib[0]]);
	        var sty2 = "";
	        if (atrib[1].includes("_")){ 
	        	sty2 = new String(atrib[1].replace(/_/g, " "));	        	
	        } else if (atrib[1].includes(",")){
	        	sty2 = new String(atrib[1].replace(/,/g, "-"));
	        } else {
	        	sty2 = new String(atrib[1]);
	        }	        
	    
	        if (sty2 == 'undefined'){
	            result.push(sty1.concat(`${atrib[1]};`));
	        } else if (sty2 != 'undefined'){
	    	    result.push(sty1.concat(`${sty2};`));
	        }	 
	    }
	     
	}

	if (result.length > 0){
	    var final = result.forEach((item) => {resultadoClass += item + " "});
	    resultadoClass  += "} ";	    
	    return resultadoClass;
	}
	
}



function dom (){
	var elementos = document.body.querySelectorAll("*");
	console.log(elementos)
	elementos.forEach((node) => {
		if (node.nodeName !== "SCRIPT" && style(node.className) !== undefined){
		    document.getElementById("cssjs").innerHTML += style(node.className) + '\n'}});
 };

 dom();

