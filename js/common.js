var uri = window.location.toString();
if (uri.indexOf("%3D", "%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("%3D%3D", "%3D%3D") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("%3D%3D"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("&m=1", "&m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("&m=1"));
    window.history.replaceState({}, document.title, clean_uri);
}
var uri = window.location.toString();
if (uri.indexOf("?m=1", "?m=1") > 0) {
    var clean_uri = uri.substring(0, uri.indexOf("?m=1"));
    window.history.replaceState({}, document.title, clean_uri);
};
var clist={ad :'Andorra',ae :'United Arab Emirates',af :'Afghanistan',al :'Albania',am :'Armenia',ao :'Angola',ar :'Argentina',at :'Austria',au :'Australia',aw :'Aruba',az :'Azerbaijan',ba :'Bosnia And Herzegovina',bb :'Barbados',bd :'Bangladesh',be :'Belgium',bf :'Burkina Faso',bg :'Bulgaria',bh :'Bahrain',bn :'Brunei Darussalam',bo :'Bolivia',br :'Brazil',bs :'Bahamas',by :'Belarus',ca :'Canada',cd :'Congo, Republic',cg :'Congo',ch :'Switzerland',ci :'Cote D\'ivoire',cl :'Chile',cm :'Cameroon',cn :'China',co :'Colombia',cr :'Costa Rica',cu :'Cuba',cv :'Cabo Verde',cw :'Curacao',cy :'Cyprus',cz :'Czech Republic',de :'Germany',dk :'Denmark',do :'Dominican Republic',dz :'Algeria',ec :'Ecuador',ee :'Estonia',eg :'Egypt',eh :'Western Sahara',es :'Spain',et :'Ethiopia',fi :'Finland',fj :'Fiji',fo :'Faroe Islands',fr :'France',gd :'Grenada',ge :'Georgia',gh :'Ghana',gi :'Gibraltar',gm :'Gambia',gn :'Guinea',gp :'Guadeloupe',gq :'Equatorial Guinea',gr :'Greece',gt :'Guatemala',gu :'Guam',gy :'Guyana',hk :'Hong Kong',hn :'Honduras',hr :'Croatia',ht :'Haiti',hu :'Hungary',id :'Indonesia',ie :'Ireland',il :'Israel',in :'India',int :'International',iq :'Iraq',ir :'Iran',is :'Iceland',it :'Italy',jm :'Jamaica',jo :'Hashemite Kingdom Of Jordan',jp :'Japan',ke :'Kenya',kg :'Kyrgyzstan',kh :'Cambodia',kn :'Saint Kitts And Nevis',kp :'Korea, Republic',kr :'Korea (south)',kw :'Kuwait',kz :'Kazakhstan',la :'Lao People\'s',lb :'Lebanon',li :'Liechtenstein',lk :'Sri Lanka',lt :'Lithuania',lu :'Luxembourg',lv :'Latvia',ly :'Libya',ma :'Morocco',mc :'Monaco',md :'Moldova',me :'Montenegro',mg :'Madagascar',mk :'Macedonia',mm :'Myanmar',mn :'Mongolia',mo :'Macao',mt :'Malta',mv :'Maldives',mx :'Mexico',my :'Malaysia',mz :'Mozambique',ne :'Niger',ng :'Nigeria',ni :'Nicaragua',nl :'Netherlands',no :'Norway',np :'Nepal',nz :'New Zealand',om :'Oman',pa :'Panama',pe :'Peru',ph :'Philippines',pk :'Pakistan',pl :'Poland',pr :'Puerto Rico',ps :'Palestine',pt :'Portugal',py :'Paraguay',qa :'Qatar',ro :'Romania',rs :'Serbia',ru :'Russia',rw :'Rwanda',sa :'Saudi Arabia',sd :'Sudan',se :'Sweden',sg :'Singapore',si :'Slovenia',sk :'Slovakia',sl :'Sierra Leone',sm :'San Marino',sn :'Senegal',so :'Somalia',sr :'Suriname',sv :'El Salvador',sx :'Sint Maarten',sy :'Syrian Arab Republic',tg :'Togo',th :'Thailand',tj :'Tajikistan',tm :'Turkmenistan',tn :'Tunisia',tr :'Turkey',tt :'Trinidad And Tobago',tw :'Taiwan',tz :'Tanzania',ua :'Ukraine',ug :'Uganda',uk :'United Kingdom',us :'United States',uy :'Uruguay',uz :'Uzbekistan',ve :'Venezuela',vi :'Virgin Islands',vn :'Viet Nam',xk :'xk',ye :'Yemen',za :'South Africa',zw :'Zimbabwe',unsorted :'Unsorted'},
    group=['auto','business','classic','comedy','documentary','education','entertainment','family','fashion','food','general','health','history','hobby','kids','legislative','lifestyle','local','movies','music','news','quiz','religious','sci-fi','shop','sport','travel','weather','other'];

var w=window, d=document, wiw=w.innerWidth,
base  =location.protocol+'//'+location.host+location.pathname,
isset =function(a){return typeof a !== 'undefined'},
isarr =function(a){return Array.isArray(a)},
inarr =function(a,v){return a.indexOf(v)>-1},
iselm =function(a){return a instanceof Element||a instanceof HTMLDocument}
isstr =function(a){return typeof a==='string'||a instanceof String}
isobj =function(a){return a && typeof a==='object' && a.constructor===Object}
fall  =function(a,b){return (b||d)['querySelectorAll'](a)},
find  =function(a,b){return (b||d)['querySelector'](a)},
byid  =function(a,b){return (b||d)['getElementById'](a)},
append=function(a,b){return (select(b))['appendChild'](a)},
insert=function(a,b,p='beforeend'){return (select(b))['insertAdjacentHTML'](p,a)},/*beforebegin,afterbegin,beforeend,afterend*/
each  =function(a,fn,v){var els=selall(a);for(let i=0;i<els.length;i++)els[i][fn]=v},
loop  =function(a,cb){var els=selall(a);for(let i=0;i<els.length;i++)cb(els[i])},
ajax  =function(url,fn,data=null,method){
        if(method == void 0) method = data==null?'GET':'POST';
        var xh = new XMLHttpRequest();
        xh.open(method, url, true);
        xh.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
        xh.onreadystatechange = function(){
          if(this.readyState == 4 && this.status == 200) fn(this.responseText);
        };
        xh.send(data);
      };

function elm(tag, attr, html, nl='\n'){
   var elm = document.createElement(tag);
   if(isobj(attr)) for(const[k, v] of Object.entries(attr)) elm.setAttribute(k, v);
   else if(isstr(attr) && html === void 0) elm.innerHTML = attr;
   if(html !== void 0) elm.innerHTML = is_arr(html) ? html.join(nl) : html;
   return elm;
}
function url(url, attr, each=false){
   if(!each) url= url+'?v='+new Date().getTime();
   let ext = url.split(/\#|\?/)[0].split('.').pop().trim();
   if(ext=='js') return elm('script', attr||{src:url, type:'text/javascript'});
   else if(ext=='css') return elm('link', attr||{href:url, rel:'stylesheet'});
   else if(ext=='jpg'||ext=='png'||ext=='gif'||ext=='svg'||ext=='bmp') return elm('img', attr||{src:url});
   return elm('a', attr||{href:url});
}
function eWidth(elm){
   var css = elm.currentStyle||w.getComputedStyle(elm);
   return parseFloat(css.width)+parseFloat(css.marginLeft)+parseFloat(css.marginRight);
}
function filter(val, slector, start=true){
   var els = selall(slector);
   for(let i = 0; i < els.length; i++) {
      let txtval = els[i].textContent || els[i].innerText;
      if(txtval){
         if(start) els[i].style.display = txtval.toLowerCase().startsWith(val.toLowerCase()) ? '' : 'none';
         else els[i].style.display = txtval.toLowerCase().indexOf(val.toLowerCase())>-1 ? '' : 'none';
      }
   }
}
function toggleClass(el,nc){
   if(el.classList) el.classList.toggle(nc);
   else{
      let cls=el.className.split(' '),
      i=cls.indexOf(nc);
      el.className = i>=0 ? cls.splice(i, 1): cls.push(nc).join(" ");
   }
}
/*Responsive position for chield elements inside parent element*/
function responsive(pelm, celm){
   var  pelmw = pelm.offsetWidth,
   celmw = eWidth(celm),
   ncelm = Math.floor(pelmw/celmw),
   extra = Math.floor(pelmw-ncelm*celmw);
   find('#css').innerHTML = '.'+pelm.className+'{padding:0 '+(extra/2)+'px}';
}
