var w=window, d=document, wiw=w.innerWidth, base=location.protocol+'//'+location.host+location.pathname;
function gebyid(a,b){return (b||d)["getElementById"](a)}
function select(a,b){return (b||d)["querySelector"](a)}
function selall(a,b){return (b||d)["querySelectorAll"](a)}
function is_elm(a){return a instanceof Element||a instanceof HTMLDocument}
function is_str(a){return typeof a==='string'||a instanceof String}
function is_obj(a){return a && typeof a==='object' && a.constructor===Object}
function is_set(a){return typeof a!=='undefined'}
function is_arr(a){return Array.isArray(a)}
function in_arr(a,v){return a.indexOf(v)>-1}
function append(a,b){return (select(b))['appendChild'](a)}
function insert(a,b,p='beforeend'){return (select(b))['insertAdjacentHTML'](p,a)}//beforebegin,afterbegin,beforeend,afterend

function each(a,fn,v){var els=selall(a);for(let i=0;i<els.length;i++)els[i][fn]=v}
function loop(a,cb){var els=selall(a);for(let i=0;i<els.length;i++)cb(els[i])}

function ajax(url, fn, data=null, method){
    if(method === void 0) method = data==null?'GET':'POST';
    var xh = new XMLHttpRequest();
    xh.open(method, url, true);
    xh.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xh.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) fn(this.responseText);
    };
    xh.send(data);
}
function elm(tag, attr, html, nl='\n'){
    var elm = document.createElement(tag);
    if(is_obj(attr)) for(const[k, v] of Object.entries(attr)) elm.setAttribute(k, v);
    else if(is_str(attr) && html === void 0) elm.innerHTML = attr;
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
      el.className = i>=0 ? cls.splice(i, 1) : cls.push(nc).join(" ");
   }
}
/*Responsive position for chield elements inside parent element*/
function responsive(pelm, celm){
   var  pw = pelm.offsetWidth, cw = eWidth(celm),
   nce = Math.floor(pw/cw),
   rst = Math.floor(pw-nce*cw),
   css = '*{margin:0;padding:0;box-sizing:border-box}\n';
   css += '.'+pelm.className+'{padding:0 '+(rst/2)+'px}';
   is_set(select('#dcss')) ? select('#dcss').innerHTML = css : append(elm('style',{id:'dcss'}, css), 'head');
}
