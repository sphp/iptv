/*Remove m=1 from mobile device url*/
var uri=window.location.href,pos=uri.search(/%3D|%3D%3D|&m=1|\?m=1/);
if(pos>0)window.history.replaceState({},document.title,uri.substring(0,pos));

var w = window, d=document, wW=w.innerWidth, wH=w.innerHeight, url=w.location.href,
baseUrl = w.location.protocol+'//'+w.location.host+w.location.pathname,
selid = function(a,b){return (b||d)['getElementselid'](a)},
isset = function(a){return typeof a !== 'undefined'},
inarr = function(a,v){return a.indexOf(v)>=0},
isarr = function(a){return Array.isArray(a)},
strobj= function(obj){return JSON.stringify(obj)},
select= function(a,b){return (b||d)['querySelector'](a)},
selall= function(a,b){return (b||d)['querySelectorAll'](a)},
nlist = function(n){return NodeList.prototype.isPrototypeOf(n)},
isstr = function(a){return typeof a==='string'||a instanceof String},
iselm = function(a){return a instanceof Element||a instanceof HTMLDocument},
getkey= function(obj,val){return Object.keys(obj).find(key=>obj[key]===val)},
isobj = function(a){return a && typeof a==='object' && a.constructor===Object},
nocash= function(url){return url+(url.indexOf('?')>0?'&v=':'?v=')+new Date().getTime()},
_loop = function(a,fn){a=isstr(a)?selall(a):(nlist(a)?a:[a]);for(let i=0;i<a.length;i++)fn(a[i],i)},
_each = function(a,fn,v){a=isstr(a)?selall(a):(nlist(a)?a:[a]);for(let i=0;i<a.length;i++)a[i][fn]=v},
_insert= function(a,b,p='beforeend'){_loop(b, function(e){(e)['insertAdjacentHTML'](p,a)})}, /*beforebegin,afterbegin,beforeend,afterend*/
_append= function(a,b){if(b!==void 0)b=iselm(b)?b:select(b);(b||d.body)['appendChild'](iselm(a) ? a:select(a))},
_encode= function(str,b64=true){return b64?btoa(encodeURIComponent(str)):encodeURIComponent(str)},
_decode= function(str,b64=true){return decodeURIComponent( b64 ? atob(str):str)},
_ajax  = function(url,fn,data=null,method){
				if(method==void 0) method=data==null?'GET':'POST';
				var xh=new XMLHttpRequest();
				xh.open(method,url,true);
				xh.setRequestHeader('Content-Type','application/x-www-form-urlencoded; charset=UTF-8');
				xh.onreadystatechange=function(){if(this.readyState==4&&this.status==200)fn(this.responseText)};
				xh.send(data);
			};

function elm(tag,attr,html,nl='\n'){
	var e=document.createElement(tag);
	if(isobj(attr))for(const[k, v] of Object.entries(attr))e.setAttribute(k,v);
	else if(isstr(attr)&&html===void 0)e.innerHTML=attr;
	if(html!==void 0)e.innerHTML=isarr(html)?html.join(nl):html;
	return e;
}
function eWidth(elm){
	var css = elm.currentStyle||w.getComputedStyle(elm);
	return parseFloat(css.width)+parseFloat(css.marginLeft)+parseFloat(css.marginRight);
}
function url(url, attr, each=false){
		if(!each) url= url+'?v='+new Date().getTime();
		let ext = url.split(/\#|\?/)[0].split('.').pop().trim();
		if(ext=='js') return elm('script', attr||{src:url, type:'text/javascript'});
		else if(ext=='css') return elm('link', attr||{href:url, rel:'stylesheet'});
		else if(ext=='jpg'||ext=='png'||ext=='gif'||ext=='svg'||ext=='bmp') return elm('img', attr||{src:url});
		return elm('a', attr||{href:url});
}
function filter(val, elms, start=true){
	_loop(elms, function(elm){
		let txtval = elm.textContent || elm.innerText;
		if(txtval){
			if(start) elm.style.display = txtval.toLowerCase().startsWith(val.toLowerCase()) ? '' : 'none';
			else elm.style.display = txtval.toLowerCase().indexOf(val.toLowerCase())>-1 ? '' : 'none';
		}
	})
}
function toggle(el,nc){
	_loop(el,function(e){
		if(e.classList) e.classList.toggle(nc);
		else{
			let cls=e.className.split(' '),
			i=cls.indexOf(nc);
			e.className = i>=0 ? cls.splice(i, 1): cls.push(nc).join(" ");
		}
	})
}
/*Responsive position for chield elements inside parent element*/
function responsive(p, c){
	p = select(p); c = selall(c);
	var pw = p.offsetWidth, cw=eWidth(c[0]), rows = 640<pw ? 5 : 10,
	rcnum = Math.floor(pw/cw),
	rempx = Math.floor(pw-rcnum*cw);
	if(c.length==1){
			let boxes = rows*rcnum, boxdata = '';
			for(let i=0; i<boxes; i++) boxdata += '<div class="box pseudo"></div>';
			select('.wrapper').innerHTML = boxdata;
	}
	p.style.padding = '0 '+rempx/2+'px';
}
function storage(name, value){
	if(name=='clear')localStorage.clear();
	else if(value === void 0)return localStorage.getItem(name);
	else if(value=='remove')localStorage.removeItem(name);
	else localStorage.setItem(name, value);
}
function pagination(totalPage, thisPage){
	var _url = url.replace(/&page=\d+/g,''),first,last;
	if(_url.substr(_url.length-1)=='&') _url = _url.slice(0, -1);
	thisPage = Number(thisPage);
	html = '';
	for (var i = 1; i <= totalPage; i++){
		let start = thisPage-3, end = thisPage+3;
		if(thisPage < 4 ) end += 4 - thisPage;
		if(thisPage > totalPage-4 ) start = start-(3-(totalPage-thisPage));
		if( i >= start && i <= end){
			first = (thisPage>4 && totalPage>7) ? '<a href="'+_url+'&page='+1+'">first</a>' : '';
			html += '<a href="'+_url+'&page='+i+'"'+ (i==thisPage? ' class="active"' : '') +'>'+i+'</a>';
			last = (i==totalPage) ? '' : '<a href="'+_url+'&page='+totalPage+'">last</a>';
		}
	}
	return '<div class="row paging">'+first+html+last+'</div>';
}
var clist={ad :'Andorra',ae :'United Arab Emirates',af :'Afghanistan',al :'Albania',am :'Armenia',ao :'Angola',ar :'Argentina',at :'Austria',au :'Australia',aw :'Aruba',az :'Azerbaijan',ba :'Bosnia And Herzegovina',bb :'Barbados',bd :'Bangladesh',be :'Belgium',bf :'Burkina Faso',bg :'Bulgaria',bh :'Bahrain',bn :'Brunei Darussalam',bo :'Bolivia',br :'Brazil',bs :'Bahamas',by :'Belarus',ca :'Canada',cd :'Congo, Republic',cg :'Congo',ch :'Switzerland',ci :'Cote D\'ivoire',cl :'Chile',cm :'Cameroon',cn :'China',co :'Colombia',cr :'Costa Rica',cu :'Cuba',cv :'Cabo Verde',cw :'Curacao',cy :'Cyprus',cz :'Czech Republic',de :'Germany',dk :'Denmark',do :'Dominican Republic',dz :'Algeria',ec :'Ecuador',ee :'Estonia',eg :'Egypt',eh :'Western Sahara',es :'Spain',et :'Ethiopia',fi :'Finland',fj :'Fiji',fo :'Faroe Islands',fr :'France',gd :'Grenada',ge :'Georgia',gh :'Ghana',gi :'Gibraltar',gm :'Gambia',gn :'Guinea',gp :'Guadeloupe',gq :'Equatorial Guinea',gr :'Greece',gt :'Guatemala',gu :'Guam',gy :'Guyana',hk :'Hong Kong',hn :'Honduras',hr :'Croatia',ht :'Haiti',hu :'Hungary',id :'Indonesia',ie :'Ireland',il :'Israel',in :'India',int :'International',iq :'Iraq',ir :'Iran',is :'Iceland',it :'Italy',jm :'Jamaica',jo :'Hashemite Kingdom Of Jordan',jp :'Japan',ke :'Kenya',kg :'Kyrgyzstan',kh :'Cambodia',kn :'Saint Kitts And Nevis',kp :'Korea, Republic',kr :'Korea (south)',kw :'Kuwait',kz :'Kazakhstan',la :'Lao People\'s',lb :'Lebanon',li :'Liechtenstein',lk :'Sri Lanka',lt :'Lithuania',lu :'Luxembourg',lv :'Latvia',ly :'Libya',ma :'Morocco',mc :'Monaco',md :'Moldova',me :'Montenegro',mg :'Madagascar',mk :'Macedonia',mm :'Myanmar',mn :'Mongolia',mo :'Macao',mt :'Malta',mv :'Maldives',mx :'Mexico',my :'Malaysia',mz :'Mozambique',ne :'Niger',ng :'Nigeria',ni :'Nicaragua',nl :'Netherlands',no :'Norway',np :'Nepal',nz :'New Zealand',om :'Oman',pa :'Panama',pe :'Peru',ph :'Philippines',pk :'Pakistan',pl :'Poland',pr :'Puerto Rico',ps :'Palestine',pt :'Portugal',py :'Paraguay',qa :'Qatar',ro :'Romania',rs :'Serbia',ru :'Russia',rw :'Rwanda',sa :'Saudi Arabia',sd :'Sudan',se :'Sweden',sg :'Singapore',si :'Slovenia',sk :'Slovakia',sl :'Sierra Leone',sm :'San Marino',sn :'Senegal',so :'Somalia',sr :'Suriname',sv :'El Salvador',sx :'Sint Maarten',sy :'Syrian Arab Republic',tg :'Togo',th :'Thailand',tj :'Tajikistan',tm :'Turkmenistan',tn :'Tunisia',tr :'Turkey',tt :'Trinidad And Tobago',tw :'Taiwan',tz :'Tanzania',ua :'Ukraine',ug :'Uganda',uk :'United Kingdom',us :'United States',uy :'Uruguay',uz :'Uzbekistan',ve :'Venezuela',vi :'Virgin Islands',vn :'Viet Nam',xk :'xk',ye :'Yemen',za :'South Africa',zw :'Zimbabwe',unsorted :'Unsorted'}, group=['auto','business','classic','comedy','documentary','education','entertainment','family','fashion','food','general','health','history','hobby','kids','legislative','lifestyle','local','movies','music','news','quiz','religious','sci-fi','shop','sport','travel','weather','other'];
_loop('link[href]' ,function(e){e.href=nocash(e.href)});/*Force load External CSS*/
_loop('script[src]',function(e){e.src =nocash(e.src )});/*Force load External JS*/