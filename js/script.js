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