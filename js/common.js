/*for blogspot Remove m=1 from mobile device url*/
var uri=window.location.href,pos=uri.search(/%3D|%3D%3D|&m=1|\?m=1/);
if(pos>0)window.history.replaceState({},document.title,uri.substring(0,pos));
var i,prm={},w=window,d=document,wiw=w.innerWidth,wih=w.innerHeight,
url=w.location.href, baseURL=w.location.protocol+'//'+w.location.host+w.location.pathname;
function encode(a){return encodeURIComponent(a)}
function decode(a){return decodeURIComponent(a)}
function strobj(o){return JSON.stringify(o)}
function inarr(a,v){return a.indexOf(v)>=0}
function isarr(a){return Array.isArray(a)}
function isset(a){return typeof a !== 'undefined'}
function ishtml(a){return /<[a-z/][\s\S]*>/i.test(a)}
function isstr(a){return typeof a==='string'||a instanceof String}
function iselm(a){return a instanceof Element||a instanceof HTMLDocument}
function isobj(a){return a && typeof a==='object' && a.constructor===Object}
function nocash(url){return url+(url.indexOf('?')>0?'&v=':'?v=')+new Date().getTime()}
function parse(a,t){return new DOMParser().parseFromString(a,t===void 0?'text/html':t)}
function elm(t,at,ht){let k,e=d.createElement(t);if(isobj(at))for(k in at)e.setAttribute(k,at[k]);e.innerHTML=ht||at;return e}
function toelm(a){return elm('div',a).firstChild}
function byid(a,b){return (b||d)['getElementselid'](a)}
function selall(a,b){return (b||d)['querySelectorAll'](a)}
function select(a,b){if(ishtml(a))a=toelm(a);return iselm(a)?a:(b||d)['querySelector'](a)}
function loop(a,cb){a=isstr(a)?selall(a):(iselm(a)?[a]:a); for(i=0;i<a.length;i++)cb(a[i],i)}
function each(a,fn,v){a=isstr(a)?selall(a):(iselm(a)?[a]:a);for(i=0;i<a.length;i++)a[i][fn]=v}
function insert(a,b,p){loop(b, function(e){(e)['insertAdjacentHTML'](p||'beforeend',a)})}/*beforebegin,afterbegin,beforeend,afterend*/
function append(a,b){(iselm(b)?b:select(b))['appendChild'](iselm(a)?a: select(a))}
function ajax(url,fn,d,m){
   var xh=new XMLHttpRequest();
   xh.open((m||(d?'POST':'GET')),url,true);
   xh.setRequestHeader('Content-Type','application/x-www-form-urlencoded;charset=UTF-8');
   xh.onreadystatechange=function(){if(this.readyState==4&&this.status==200)fn(this.responseText)};
   xh.send(d);
}
function req2obj(u){let p,pr={},po=(u||w.location.search).substr(1).split('&');for(i in po){p=po[i].split('=');pr[p[0]]=p[1]}return pr}
function obj2req(o){let pa;if(isset(o.prm))for(i in o.prm)pa[i]=i+'='+o.prm[i];return pa.join('&')}
function parseURL(u){
   let sp, a=elm('a',{href:u||url});
   return {protocol:a.protocol,
               host:a.host,
           hostname:a.hostname,
               port:a.port,
               path:a.pathname,
             search:a.search,
               pram:req2obj(a.search),
               hash:a.hash};
}
function _width(e){
   let css=e.currentStyle||w.getComputedStyle(e);
   return parseFloat(css.width)+parseFloat(css.marginLeft)+parseFloat(css.marginRight)
}
function filter(val, elms, start){
   loop(elms, function(elm){
      let txtval = elm.textContent || elm.innerText;
      if(txtval){
         if(start||true) elm.style.display=txtval.toLowerCase().startsWith(val.toLowerCase())?'':'none';
         else elm.style.display=txtval.toLowerCase().indexOf(val.toLowerCase())>-1?'':'none';
      }
   })
}
function toggle(el,nc){
   loop(el,function(e){
      if(e.classList) e.classList.toggle(nc);
      else{
         let cls=e.className.split(' '),
         i=cls.indexOf(nc);
         e.className = i>=0 ? cls.splice(i, 1): cls.push(nc).join(" ");
      }
   })
}
function storage(name, value){
   if(name=='clear')localStorage.clear();
   else if(value === void 0)return localStorage.getItem(name);
   else if(value=='remove')localStorage.removeItem(name);
   else localStorage.setItem(name, value);
}
function paging(listlen, page, limit, sbtn){
   page = page!==void 0?Number(page):(isset(prm.page)?Number(prm.page):1);
   limit= limit!==void 0?Number(limit):(isset(prm.limit)?Number(prm.limit):30);
   sbtn = sbtn!==void 0?Number(sbtn):3;
   var btns='', _url = url.replace(/&page=\d+/g,''), first, last, start, end, totpag, totbtn, offset, i;
   if(_url.substr(_url.length-1)=='&') _url = _url.slice(0, -1);
   if(listlen>limit){
      offset = (page*limit)-limit; 
      totbtn = (sbtn*2)+1; 
      totpag = Math.ceil(listlen/limit);
      for(i=1;i<=totpag;i++){
         start = page>=totpag-sbtn ? totpag-totbtn : page-sbtn;
         end    = page<=sbtn?totbtn:page+sbtn;
         if( i >= start && i <= end){
            first = (page>=sbtn && totpag>totbtn) ? '<a href="'+_url+'&page='+1+'">first</a>':'';
            btns += '<a href="'+_url+'&page='+i+'"'+ (i==page? ' class="active"' : '') +'>'+i+'</a>';
            last = (page<totpag-sbtn)?'<a href="'+_url+'&page='+totpag+'">last</a>':'';
         }
      }
      /*if(totpag>=page) list = list.slice(offset, page<totpag ? offset+limit : list.length);*/
      if(totpag>page)list=offset+' to '+(offset+limit);else if(totpag==page)list=offset+' '+listlen;else list='nill';
      return list+'<div class="row paging">'+first+btns+last+'</div>';
   }
}
function carousel(a){
   var index=0,thisX1=0,thisX2=0, initX,
   slider=document.querySelector(a.slider || '#slider'),
   prev=slider.querySelector(a.prev || '.prev'),
   next=slider.querySelector(a.next || '.next'),
   items=slider.querySelector(a.tiles || '.tiles'),
   slides=items.querySelectorAll((a.tiles || '.tiles') + ' > *'),
   tileSize=_width(slides[0]),
   cloneFirst=slides[0].cloneNode(true),
   cloneLast=slides[slides.length - 1].cloneNode(true),
   allowShift=a.shift || true;
   // Clone first and last slide
   items.appendChild(cloneFirst);
   items.insertBefore(cloneLast, slides[0]);
   var total = (items.querySelectorAll((a.tiles || '.tiles') + ' > *').length);
   slider.style = 'width:' + a.width + 'px;height:' + a.height + 'px';
   items.style = 'width:' + (tileSize * total) + 'px';
   //slider.classList.add('loaded');
   prev.addEventListener('click', function(){moveItem(-1)});
   next.addEventListener('click', function() {moveItem(1)});
   function moveItem(dir, action) {
      items.classList.add('shifting');
      if (allowShift) {
         if (!action) {
            initX=items.offsetLeft;
         }
         if (dir == 1) {
            items.style.left = (initX - tileSize) + "px";
            index++;
         } else if (dir == -1) {
            items.style.left = (initX + tileSize) + "px";
            index--;
         }
      };
      allowShift=false;
   }
   // Mouse and Touch events
   items.onmousedown=dragStart;
   items.ontouchstart=dragStart;
   items.ontouchend=dragEnd;
   items.ontouchmove=dragItem;
   function dragStart(e) {
      e=e || window.event;
      e.preventDefault();
      initX=items.offsetLeft;
      thisX1 = (e.type == 'touchstart') ? e.touches[0].clientX : e.clientX;
      document.onmouseup=dragEnd;
      document.onmousemove=dragItem;
   }
   function dragItem(e) {
      e=e || window.event;
      thisX2 = (e.type == 'touchmove') ? thisX1 - e.touches[0].clientX : thisX1 - e.clientX;
      thisX1 = (e.type == 'touchmove') ? e.touches[0].clientX : e.clientX;
      items.style.left = (items.offsetLeft - thisX2) + "px";
   }
   function dragEnd(e) {
      document.onmouseup=null;
      document.onmousemove=null;
   }
   items.addEventListener('transitionend', checkIndex);
   function checkIndex() {
      items.classList.remove('shifting');
      if (index == -1) {
         items.style.left = -(slides.length * tileSize) + "px";
         index=slides.length - 1;
      }
      if (index == slides.length) {
         items.style.left = -(1 * tileSize) + "px";
         index=0;
      }
      allowShift=true;
   }
   if (a.autoplay == true) {
      setTimeout(function next() {
         moveItem(1);
         setTimeout(next, a.speed || 1000);
      }, 10);
   }
}
/*Responsive position for chield elements inside parent element*/
function responsive(p, c){
	p = select(p); c = selall(c);
	var pw = p.offsetWidth, cw=_width(c[0]), rows = 640<pw ? 5 : 10,
	rcnum = Math.floor(pw/cw),
	rempx = Math.floor(pw-rcnum*cw);
	if(c.length==1){
		let boxes = rows*rcnum, boxdata = '';
		for(let i=0; i<boxes; i++) boxdata += '<div class="box pseudo"></div>';
		select('.wrapper').innerHTML = boxdata;
	}
	p.style.padding = '0 '+rempx/2+'px';
}
