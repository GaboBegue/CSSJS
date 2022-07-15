# CSSJS

Create style sheet with javascript simulating Bootstrap

# Introduction

I really like Bootstrap, taking its idea of ​​creating styles from the "Class" attribute of HTML tags, I thought of creating the style sheet with Javascript.

And here is the result.

## Installation

Step 1 : Create a 'style' tag in <head> with id ="cssjs" in your HTML

```bash
  <style id="cssjs">
  </style>
```

Step 2 : Create a 'script' tag before the </body> tag in your HTML

```bash
  <script src="cssjs.js"></script>
  </body>
```
    
## How is CSSJS used?


1. Classes must start with a class name to be reused in other tags

```bash
  <div class="header"></div>
  
```
2. Next and followed by a space (as in Bootstrap) the property-value is written

```bash
  <div class="header p-30px txa-center bg-white">
  
```
The example above is the same as writing CSS in 'style' tag ...

```bash
.header {
    padding: 30px;
    text-align: center;
    background: white;
}
```

3. To reuse the class in another HTML element, just use the same class name

```bash
  <div class = "header p-30px txa-center bg-white">
  </div>
  <div class = "header"></div>
  </div>
  
```

4. In CSSJS the "-" sign separates properties from values.
If you need to enter multiple values for the same property, use the "_" sign as shown below.

```bash
  <div class = "header p-14px_16px bd-2px_solid_black">
  </div>  
  
```
The example above is the same as writing CSS in 'style' tag ...

```bash
.header {
    padding: 14px 16px;
    border: 2px solid black;    
}
```

5. Values are written the same as in CSS.
Many values take a "-" sign, to avoid errors in CSSJS and only for those values the "," sign is used as in the example below.

```bash
  <div class="topnav">
      <a class="links d-inline,block" href="#">Link</a>
      <a class="links" href="#">Link</a>
      <a class="links" href="#">Link</a>
      <a class="links" href="#" style="float:right">Link</a>
   </div> 
  
```
The example above is the same as writing CSS in 'style' tag ...

```bash
.links {
    display: inline-block;    
}
```
6. If you need to add a pseudo-class by calling the class it is in, you can call it after defining all the properties and values of the main class to call, as in the following example

```bash
  <div class="topnav">
      <a class="links d-inline,block bgc-#333 links:hover bgc-#ddd" href="#">Link</a>
      <a class="links" href="#">Link</a>
      <a class="links" href="#">Link</a>
      <a class="links" href="#" style="float:right">Link</a>
   </div> 
  
```
The example above is the same as writing CSS in 'style' tag ...

```bash
.links {
    display: inline-block;
    background-color: #333;
}

.links:hover {
    background-color: #ddd;
}
```

7. In the example above you can also see that colors can be called in hexadecimal format.

## Reference listing of how to call the properties (you can change the abbreviations to your liking in the code).

```bash
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
```

## EXAMPLE

```bash
<!DOCTYPE html>
<html>
<head>
<style id="cssjs">
* {
  box-sizing: border-box;
}
</style>
</head>
<body>
  <div class="principal ffam-Arial p-10px bg-#f1f1f1 m-0px">

    <div class="header p-30px txa-center bg-white">
      <h1 class="titulo fsz-50px">My Website</h1>
      <p>Resize the browser window to see the effect.</p>
    </div>

    <div class="topnav ovfw-hidden bgc-#333">
      <a class="enlace float-left d-block c-#f2f2f2 txa-center p-14px_16px txd-none enlace:hover bgc-#ddd c-black" href="#">Link</a>
      <a class="enlace" href="#">Link</a>
      <a class="enlace" href="#">Link</a>
      <a class="enlace" href="#" style="float:right">Link</a>
    </div>

    <div class="row m-1px row:after cont-'' d-table cls-both">
      <div class="leftcolumn float-left w-75%">
        <div class="card bgc-white p-20px mt-20px">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Dec 7, 2017</h5>
          <div class="fakeimg bgc-#aaa w-100% p-20px" style="height:200px;">Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
        <div class="card">
          <h2>TITLE HEADING</h2>
          <h5>Title description, Sep 2, 2017</h5>
          <div class="fakeimg" style="height:200px;">Image</div>
          <p>Some text..</p>
          <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
      <div class="rightcolumn float-left w-25% bgc-#f1f1f1 pl-20px">
        <div class="card">
          <h2>About Me</h2>
          <div class="fakeimg" style="height:100px;">Image</div>
          <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
        </div>
        <div class="card">
          <h3>Popular Post</h3>
          <div class="fakeimg"><p>Image</p></div>
          <div class="fakeimg"><p>Image</p></div>
          <div class="fakeimg"><p>Image</p></div>
        </div>
        <div class="card">
          <h3>Follow Me</h3>
          <p>Some text..</p>
        </div>
      </div>
    </div>

    <div class="footer p-20px txa-center bg-#ddd mt-20px">
      <h2>Footer</h2>
    </div>
</div>
<script src="cssjs.js"></script>

</body>
</html>
```

## I hope you like this project and whoever wants to participate to improve the code or implement more functionality will always be welcome.

## Thanks.
