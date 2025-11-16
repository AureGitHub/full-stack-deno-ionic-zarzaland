import"./chunk-D7YIWJQY.js";import{a as y4}from"./chunk-KJEV6NA2.js";import{$ as D,$b as M4,B as _,Ba as $1,Bb as c4,Cb as a4,D as k1,Db as l4,E as y,Eb as e4,F as d,Fa as X1,Fb as r4,G as z,Gb as i4,H as j,Hb as s4,I as A1,Ib as n4,J as P1,Lb as o4,M as r2,Mc as N4,N as T1,Nb as f4,O as A,Ob as t4,P as b,Pb as m4,Q as F1,Qb as z4,R as B1,Rb as p4,V as D1,Xb as u4,Y as R1,Z as M,Zb as d4,_ as Q,ac as L4,ca as i2,cc as v4,da as s2,db as Y1,dc as g4,ea as n2,ec as h4,f as _2,fa as H1,fb as K1,fc as C4,g as S1,ga as J,ha as o2,i as K,ia as _1,ja as E1,jc as x4,ka as E2,l as G,la as I1,m as q,ma as C2,mb as Q1,na as P,o as b1,oa as O1,qa as U1,r as N1,ra as W1,rc as S4,s as g,sa as G1,sc as b4,ta as q1,ua as j1,v as e2,va as V1,vb as J1,x as p2,y as y1,yb as Z1,z as w1}from"./chunk-EENDQBIP.js";import"./chunk-BNIJ3X2T.js";import"./chunk-TQJFVUNX.js";import"./chunk-XZGK7ZA7.js";import"./chunk-IPOTPHHM.js";import"./chunk-HXT7NW3W.js";import"./chunk-C7ZOD4DU.js";import"./chunk-EUTKHXLC.js";import"./chunk-KA7FWHEC.js";import"./chunk-CXNJJW2I.js";import"./chunk-CO3DYFKM.js";import"./chunk-RF7KNEQE.js";import"./chunk-J54ZEZCO.js";import"./chunk-HOU3Z2GS.js";import"./chunk-BYQAMOC3.js";import"./chunk-VXHG3QIR.js";import"./chunk-MTTA6DDO.js";import"./chunk-CNPXEUJC.js";import"./chunk-EMYUXUF4.js";import"./chunk-Y4PFSAAR.js";import"./chunk-TVOMSU7V.js";import"./chunk-2YWV2TBO.js";import"./chunk-GEK2GCCQ.js";import"./chunk-JZGUXWEV.js";import"./chunk-U7BNZF35.js";import"./chunk-7A6E5OXO.js";import"./chunk-WMMW5CXS.js";import{a as h1,b as C1,e as x1}from"./chunk-JHI3MBHO.js";function V2(c,l){(l==null||l>c.length)&&(l=c.length);for(var a=0,e=Array(l);a<l;a++)e[a]=c[a];return e}function C0(c){if(Array.isArray(c))return c}function x0(c){if(Array.isArray(c))return V2(c)}function S0(c,l){if(!(c instanceof l))throw new TypeError("Cannot call a class as a function")}function w4(c,l){for(var a=0;a<l.length;a++){var e=l[a];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(c,i3(e.key),e)}}function b0(c,l,a){return l&&w4(c.prototype,l),a&&w4(c,a),Object.defineProperty(c,"prototype",{writable:!1}),c}function b2(c,l){var a=typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(!a){if(Array.isArray(c)||(a=n1(c))||l&&c&&typeof c.length=="number"){a&&(c=a);var e=0,r=function(){};return{s:r,n:function(){return e>=c.length?{done:!0}:{done:!1,value:c[e++]}},e:function(o){throw o},f:r}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var i,s=!0,n=!1;return{s:function(){a=a.call(c)},n:function(){var o=a.next();return s=o.done,o},e:function(o){n=!0,i=o},f:function(){try{s||a.return==null||a.return()}finally{if(n)throw i}}}}function L(c,l,a){return(l=i3(l))in c?Object.defineProperty(c,l,{value:a,enumerable:!0,configurable:!0,writable:!0}):c[l]=a,c}function N0(c){if(typeof Symbol<"u"&&c[Symbol.iterator]!=null||c["@@iterator"]!=null)return Array.from(c)}function y0(c,l){var a=c==null?null:typeof Symbol<"u"&&c[Symbol.iterator]||c["@@iterator"];if(a!=null){var e,r,i,s,n=[],o=!0,t=!1;try{if(i=(a=a.call(c)).next,l===0){if(Object(a)!==a)return;o=!1}else for(;!(o=(e=i.call(a)).done)&&(n.push(e.value),n.length!==l);o=!0);}catch(p){t=!0,r=p}finally{try{if(!o&&a.return!=null&&(s=a.return(),Object(s)!==s))return}finally{if(t)throw r}}return n}}function w0(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k0(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function k4(c,l){var a=Object.keys(c);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(c);l&&(e=e.filter(function(r){return Object.getOwnPropertyDescriptor(c,r).enumerable})),a.push.apply(a,e)}return a}function f(c){for(var l=1;l<arguments.length;l++){var a=arguments[l]!=null?arguments[l]:{};l%2?k4(Object(a),!0).forEach(function(e){L(c,e,a[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(c,Object.getOwnPropertyDescriptors(a)):k4(Object(a)).forEach(function(e){Object.defineProperty(c,e,Object.getOwnPropertyDescriptor(a,e))})}return c}function P2(c,l){return C0(c)||y0(c,l)||n1(c,l)||w0()}function H(c){return x0(c)||N0(c)||n1(c)||k0()}function A0(c,l){if(typeof c!="object"||!c)return c;var a=c[Symbol.toPrimitive];if(a!==void 0){var e=a.call(c,l||"default");if(typeof e!="object")return e;throw new TypeError("@@toPrimitive must return a primitive value.")}return(l==="string"?String:Number)(c)}function i3(c){var l=A0(c,"string");return typeof l=="symbol"?l:l+""}function w2(c){"@babel/helpers - typeof";return w2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(l){return typeof l}:function(l){return l&&typeof Symbol=="function"&&l.constructor===Symbol&&l!==Symbol.prototype?"symbol":typeof l},w2(c)}function n1(c,l){if(c){if(typeof c=="string")return V2(c,l);var a={}.toString.call(c).slice(8,-1);return a==="Object"&&c.constructor&&(a=c.constructor.name),a==="Map"||a==="Set"?Array.from(c):a==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?V2(c,l):void 0}}var A4=function(){},o1={},s3={},n3=null,o3={mark:A4,measure:A4};try{typeof window<"u"&&(o1=window),typeof document<"u"&&(s3=document),typeof MutationObserver<"u"&&(n3=MutationObserver),typeof performance<"u"&&(o3=performance)}catch{}var P0=o1.navigator||{},P4=P0.userAgent,T4=P4===void 0?"":P4,$=o1,C=s3,F4=n3,x2=o3,t7=!!$.document,W=!!C.documentElement&&!!C.head&&typeof C.addEventListener=="function"&&typeof C.createElement=="function",f3=~T4.indexOf("MSIE")||~T4.indexOf("Trident/"),I2,T0=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,F0=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Whiteboard)?.*/i,t3={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},B0={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},m3=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],w="classic",v2="duotone",z3="sharp",p3="sharp-duotone",u3="chisel",d3="etch",M3="jelly",L3="jelly-duo",v3="jelly-fill",g3="notdog",h3="notdog-duo",C3="slab",x3="slab-press",S3="thumbprint",b3="utility",N3="utility-duo",y3="utility-fill",w3="whiteboard",D0="Classic",R0="Duotone",H0="Sharp",_0="Sharp Duotone",E0="Chisel",I0="Etch",O0="Jelly",U0="Jelly Duo",W0="Jelly Fill",G0="Notdog",q0="Notdog Duo",j0="Slab",V0="Slab Press",$0="Thumbprint",X0="Utility",Y0="Utility Duo",K0="Utility Fill",Q0="Whiteboard",k3=[w,v2,z3,p3,u3,d3,M3,L3,v3,g3,h3,C3,x3,S3,b3,N3,y3,w3],m7=(I2={},L(L(L(L(L(L(L(L(L(L(I2,w,D0),v2,R0),z3,H0),p3,_0),u3,E0),d3,I0),M3,O0),L3,U0),v3,W0),g3,G0),L(L(L(L(L(L(L(L(I2,h3,q0),C3,j0),x3,V0),S3,$0),b3,X0),N3,Y0),y3,K0),w3,Q0)),J0={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},Z0={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},c6=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),a6={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-press":{regular:"faslpr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},whiteboard:{semibold:"fawsb"}},A3=["fak","fa-kit","fakd","fa-kit-duotone"],B4={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},l6=["kit"],e6="kit",r6="kit-duotone",i6="Kit",s6="Kit Duotone",z7=L(L({},e6,i6),r6,s6),n6={kit:{"fa-kit":"fak"},"kit-duotone":{"fa-kit-duotone":"fakd"}},o6={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},f6={kit:{fak:"fa-kit"},"kit-duotone":{fakd:"fa-kit-duotone"}},D4={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},O2,S2={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},t6=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-utility","fa-utility-duo","fa-utility-fill"],m6="classic",z6="duotone",p6="sharp",u6="sharp-duotone",d6="chisel",M6="etch",L6="jelly",v6="jelly-duo",g6="jelly-fill",h6="notdog",C6="notdog-duo",x6="slab",S6="slab-press",b6="thumbprint",N6="utility",y6="utility-duo",w6="utility-fill",k6="whiteboard",A6="Classic",P6="Duotone",T6="Sharp",F6="Sharp Duotone",B6="Chisel",D6="Etch",R6="Jelly",H6="Jelly Duo",_6="Jelly Fill",E6="Notdog",I6="Notdog Duo",O6="Slab",U6="Slab Press",W6="Thumbprint",G6="Utility",q6="Utility Duo",j6="Utility Fill",V6="Whiteboard",p7=(O2={},L(L(L(L(L(L(L(L(L(L(O2,m6,A6),z6,P6),p6,T6),u6,F6),d6,B6),M6,D6),L6,R6),v6,H6),g6,_6),h6,E6),L(L(L(L(L(L(L(L(O2,C6,I6),x6,O6),S6,U6),b6,W6),N6,G6),y6,q6),w6,j6),k6,V6)),$6="kit",X6="kit-duotone",Y6="Kit",K6="Kit Duotone",u7=L(L({},$6,Y6),X6,K6),Q6={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},J6={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},$2={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},Z6=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],P3=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fawsb","fatl","fans","fands","faes","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(t6,Z6),c8=["solid","regular","light","thin","duotone","brands","semibold"],T3=[1,2,3,4,5,6,7,8,9,10],a8=T3.concat([11,12,13,14,15,16,17,18,19,20]),l8=["aw","fw","pull-left","pull-right"],e8=[].concat(H(Object.keys(J6)),c8,l8,["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","inverse","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul","width-auto","width-fixed",S2.GROUP,S2.SWAP_OPACITY,S2.PRIMARY,S2.SECONDARY]).concat(T3.map(function(c){return"".concat(c,"x")})).concat(a8.map(function(c){return"w-".concat(c)})),r8={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},O="___FONT_AWESOME___",X2=16,F3="fa",B3="svg-inline--fa",c2="data-fa-i2svg",Y2="data-fa-pseudo-element",i8="data-fa-pseudo-element-pending",f1="data-prefix",t1="data-icon",R4="fontawesome-i2svg",s8="async",n8=["HTML","HEAD","STYLE","SCRIPT"],D3=["::before","::after",":before",":after"],R3=(function(){try{return!0}catch{return!1}})();function g2(c){return new Proxy(c,{get:function(a,e){return e in a?a[e]:a[w]}})}var H3=f({},t3);H3[w]=f(f(f(f({},{"fa-duotone":"duotone"}),t3[w]),B4.kit),B4["kit-duotone"]);var o8=g2(H3),K2=f({},a6);K2[w]=f(f(f(f({},{duotone:"fad"}),K2[w]),D4.kit),D4["kit-duotone"]);var H4=g2(K2),Q2=f({},$2);Q2[w]=f(f({},Q2[w]),f6.kit);var m1=g2(Q2),J2=f({},Q6);J2[w]=f(f({},J2[w]),n6.kit);var d7=g2(J2),f8=T0,_3="fa-layers-text",t8=F0,m8=f({},J0),M7=g2(m8),z8=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],U2=B0,p8=[].concat(H(l6),H(e8)),d2=$.FontAwesomeConfig||{};function u8(c){var l=C.querySelector("script["+c+"]");if(l)return l.getAttribute(c)}function d8(c){return c===""?!0:c==="false"?!1:c==="true"?!0:c}C&&typeof C.querySelector=="function"&&(_4=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]],_4.forEach(function(c){var l=P2(c,2),a=l[0],e=l[1],r=d8(u8(a));r!=null&&(d2[e]=r)}));var _4,E3={styleDefault:"solid",familyDefault:w,cssPrefix:F3,replacementClass:B3,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};d2.familyPrefix&&(d2.cssPrefix=d2.familyPrefix);var m2=f(f({},E3),d2);m2.autoReplaceSvg||(m2.observeMutations=!1);var u={};Object.keys(E3).forEach(function(c){Object.defineProperty(u,c,{enumerable:!0,set:function(a){m2[c]=a,M2.forEach(function(e){return e(u)})},get:function(){return m2[c]}})});Object.defineProperty(u,"familyPrefix",{enumerable:!0,set:function(l){m2.cssPrefix=l,M2.forEach(function(a){return a(u)})},get:function(){return m2.cssPrefix}});$.FontAwesomeConfig=u;var M2=[];function M8(c){return M2.push(c),function(){M2.splice(M2.indexOf(c),1)}}var V=X2,E={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function L8(c){if(!(!c||!W)){var l=C.createElement("style");l.setAttribute("type","text/css"),l.innerHTML=c;for(var a=C.head.childNodes,e=null,r=a.length-1;r>-1;r--){var i=a[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(e=i)}return C.head.insertBefore(l,e),c}}var v8="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function E4(){for(var c=12,l="";c-- >0;)l+=v8[Math.random()*62|0];return l}function z2(c){for(var l=[],a=(c||[]).length>>>0;a--;)l[a]=c[a];return l}function z1(c){return c.classList?z2(c.classList):(c.getAttribute("class")||"").split(" ").filter(function(l){return l})}function I3(c){return"".concat(c).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function g8(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,'="').concat(I3(c[a]),'" ')},"").trim()}function T2(c){return Object.keys(c||{}).reduce(function(l,a){return l+"".concat(a,": ").concat(c[a].trim(),";")},"")}function p1(c){return c.size!==E.size||c.x!==E.x||c.y!==E.y||c.rotate!==E.rotate||c.flipX||c.flipY}function h8(c){var l=c.transform,a=c.containerWidth,e=c.iconWidth,r={transform:"translate(".concat(a/2," 256)")},i="translate(".concat(l.x*32,", ").concat(l.y*32,") "),s="scale(".concat(l.size/16*(l.flipX?-1:1),", ").concat(l.size/16*(l.flipY?-1:1),") "),n="rotate(".concat(l.rotate," 0 0)"),o={transform:"".concat(i," ").concat(s," ").concat(n)},t={transform:"translate(".concat(e/2*-1," -256)")};return{outer:r,inner:o,path:t}}function C8(c){var l=c.transform,a=c.width,e=a===void 0?X2:a,r=c.height,i=r===void 0?X2:r,s=c.startCentered,n=s===void 0?!1:s,o="";return n&&f3?o+="translate(".concat(l.x/V-e/2,"em, ").concat(l.y/V-i/2,"em) "):n?o+="translate(calc(-50% + ".concat(l.x/V,"em), calc(-50% + ").concat(l.y/V,"em)) "):o+="translate(".concat(l.x/V,"em, ").concat(l.y/V,"em) "),o+="scale(".concat(l.size/V*(l.flipX?-1:1),", ").concat(l.size/V*(l.flipY?-1:1),") "),o+="rotate(".concat(l.rotate,"deg) "),o}var x8=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 7 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 7 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 7 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 7 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 7 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 7 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 7 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 7 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 7 Sharp Duotone";
  --fa-font-slab-regular: normal 400 1em/1 "Font Awesome 7 Slab";
  --fa-font-slab-press-regular: normal 400 1em/1 "Font Awesome 7 Slab Press";
  --fa-font-whiteboard-semibold: normal 600 1em/1 "Font Awesome 7 Whiteboard";
  --fa-font-thumbprint-light: normal 300 1em/1 "Font Awesome 7 Thumbprint";
  --fa-font-notdog-solid: normal 900 1em/1 "Font Awesome 7 Notdog";
  --fa-font-notdog-duo-solid: normal 900 1em/1 "Font Awesome 7 Notdog Duo";
  --fa-font-etch-solid: normal 900 1em/1 "Font Awesome 7 Etch";
  --fa-font-jelly-regular: normal 400 1em/1 "Font Awesome 7 Jelly";
  --fa-font-jelly-fill-regular: normal 400 1em/1 "Font Awesome 7 Jelly Fill";
  --fa-font-jelly-duo-regular: normal 400 1em/1 "Font Awesome 7 Jelly Duo";
  --fa-font-chisel-regular: normal 400 1em/1 "Font Awesome 7 Chisel";
  --fa-font-utility-semibold: normal 600 1em/1 "Font Awesome 7 Utility";
  --fa-font-utility-duo-semibold: normal 600 1em/1 "Font Awesome 7 Utility Duo";
  --fa-font-utility-fill-semibold: normal 600 1em/1 "Font Awesome 7 Utility Fill";
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function O3(){var c=F3,l=B3,a=u.cssPrefix,e=u.replacementClass,r=x8;if(a!==c||e!==l){var i=new RegExp("\\.".concat(c,"\\-"),"g"),s=new RegExp("\\--".concat(c,"\\-"),"g"),n=new RegExp("\\.".concat(l),"g");r=r.replace(i,".".concat(a,"-")).replace(s,"--".concat(a,"-")).replace(n,".".concat(e))}return r}var I4=!1;function W2(){u.autoAddCss&&!I4&&(L8(O3()),I4=!0)}var S8={mixout:function(){return{dom:{css:O3,insertCss:W2}}},hooks:function(){return{beforeDOMElementCreation:function(){W2()},beforeI2svg:function(){W2()}}}},U=$||{};U[O]||(U[O]={});U[O].styles||(U[O].styles={});U[O].hooks||(U[O].hooks={});U[O].shims||(U[O].shims=[]);var R=U[O],U3=[],W3=function(){C.removeEventListener("DOMContentLoaded",W3),k2=1,U3.map(function(l){return l()})},k2=!1;W&&(k2=(C.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(C.readyState),k2||C.addEventListener("DOMContentLoaded",W3));function b8(c){W&&(k2?setTimeout(c,0):U3.push(c))}function h2(c){var l=c.tag,a=c.attributes,e=a===void 0?{}:a,r=c.children,i=r===void 0?[]:r;return typeof c=="string"?I3(c):"<".concat(l," ").concat(g8(e),">").concat(i.map(h2).join(""),"</").concat(l,">")}function O4(c,l,a){if(c&&c[l]&&c[l][a])return{prefix:l,iconName:a,icon:c[l][a]}}var N8=function(l,a){return function(e,r,i,s){return l.call(a,e,r,i,s)}},G2=function(l,a,e,r){var i=Object.keys(l),s=i.length,n=r!==void 0?N8(a,r):a,o,t,p;for(e===void 0?(o=1,p=l[i[0]]):(o=0,p=e);o<s;o++)t=i[o],p=n(p,l[t],t,l);return p};function G3(c){return H(c).length!==1?null:c.codePointAt(0).toString(16)}function U4(c){return Object.keys(c).reduce(function(l,a){var e=c[a],r=!!e.icon;return r?l[e.iconName]=e.icon:l[a]=e,l},{})}function Z2(c,l){var a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},e=a.skipHooks,r=e===void 0?!1:e,i=U4(l);typeof R.hooks.addPack=="function"&&!r?R.hooks.addPack(c,U4(l)):R.styles[c]=f(f({},R.styles[c]||{}),i),c==="fas"&&Z2("fa",l)}var L2=R.styles,y8=R.shims,q3=Object.keys(m1),w8=q3.reduce(function(c,l){return c[l]=Object.keys(m1[l]),c},{}),u1=null,j3={},V3={},$3={},X3={},Y3={};function k8(c){return~p8.indexOf(c)}function A8(c,l){var a=l.split("-"),e=a[0],r=a.slice(1).join("-");return e===c&&r!==""&&!k8(r)?r:null}var K3=function(){var l=function(i){return G2(L2,function(s,n,o){return s[o]=G2(n,i,{}),s},{})};j3=l(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var n=i[2].filter(function(o){return typeof o=="number"});n.forEach(function(o){r[o.toString(16)]=s})}return r}),V3=l(function(r,i,s){if(r[s]=s,i[2]){var n=i[2].filter(function(o){return typeof o=="string"});n.forEach(function(o){r[o]=s})}return r}),Y3=l(function(r,i,s){var n=i[2];return r[s]=s,n.forEach(function(o){r[o]=s}),r});var a="far"in L2||u.autoFetchSvg,e=G2(y8,function(r,i){var s=i[0],n=i[1],o=i[2];return n==="far"&&!a&&(n="fas"),typeof s=="string"&&(r.names[s]={prefix:n,iconName:o}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:n,iconName:o}),r},{names:{},unicodes:{}});$3=e.names,X3=e.unicodes,u1=F2(u.styleDefault,{family:u.familyDefault})};M8(function(c){u1=F2(c.styleDefault,{family:u.familyDefault})});K3();function d1(c,l){return(j3[c]||{})[l]}function P8(c,l){return(V3[c]||{})[l]}function Z(c,l){return(Y3[c]||{})[l]}function Q3(c){return $3[c]||{prefix:null,iconName:null}}function T8(c){var l=X3[c],a=d1("fas",c);return l||(a?{prefix:"fas",iconName:a}:null)||{prefix:null,iconName:null}}function X(){return u1}var J3=function(){return{prefix:null,iconName:null,rest:[]}};function F8(c){var l=w,a=q3.reduce(function(e,r){return e[r]="".concat(u.cssPrefix,"-").concat(r),e},{});return k3.forEach(function(e){(c.includes(a[e])||c.some(function(r){return w8[e].includes(r)}))&&(l=e)}),l}function F2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.family,e=a===void 0?w:a,r=o8[e][c];if(e===v2&&!c)return"fad";var i=H4[e][c]||H4[e][r],s=c in R.styles?c:null,n=i||s||null;return n}function B8(c){var l=[],a=null;return c.forEach(function(e){var r=A8(u.cssPrefix,e);r?a=r:e&&l.push(e)}),{iconName:a,rest:l}}function W4(c){return c.sort().filter(function(l,a,e){return e.indexOf(l)===a})}var G4=P3.concat(A3);function B2(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.skipLookups,e=a===void 0?!1:a,r=null,i=W4(c.filter(function(v){return G4.includes(v)})),s=W4(c.filter(function(v){return!G4.includes(v)})),n=i.filter(function(v){return r=v,!m3.includes(v)}),o=P2(n,1),t=o[0],p=t===void 0?null:t,m=F8(i),h=f(f({},B8(s)),{},{prefix:F2(p,{family:m})});return f(f(f({},h),_8({values:c,family:m,styles:L2,config:u,canonical:h,givenPrefix:r})),D8(e,r,h))}function D8(c,l,a){var e=a.prefix,r=a.iconName;if(c||!e||!r)return{prefix:e,iconName:r};var i=l==="fa"?Q3(r):{},s=Z(e,r);return r=i.iconName||s||r,e=i.prefix||e,e==="far"&&!L2.far&&L2.fas&&!u.autoFetchSvg&&(e="fas"),{prefix:e,iconName:r}}var R8=k3.filter(function(c){return c!==w||c!==v2}),H8=Object.keys($2).filter(function(c){return c!==w}).map(function(c){return Object.keys($2[c])}).flat();function _8(c){var l=c.values,a=c.family,e=c.canonical,r=c.givenPrefix,i=r===void 0?"":r,s=c.styles,n=s===void 0?{}:s,o=c.config,t=o===void 0?{}:o,p=a===v2,m=l.includes("fa-duotone")||l.includes("fad"),h=t.familyDefault==="duotone",v=e.prefix==="fad"||e.prefix==="fa-duotone";if(!p&&(m||h||v)&&(e.prefix="fad"),(l.includes("fa-brands")||l.includes("fab"))&&(e.prefix="fab"),!e.prefix&&R8.includes(a)){var S=Object.keys(n).find(function(k){return H8.includes(k)});if(S||t.autoFetchSvg){var x=c6.get(a).defaultShortPrefixId;e.prefix=x,e.iconName=Z(e.prefix,e.iconName)||e.iconName}}return(e.prefix==="fa"||i==="fa")&&(e.prefix=X()||"fas"),e}var E8=(function(){function c(){S0(this,c),this.definitions={}}return b0(c,[{key:"add",value:function(){for(var a=this,e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(n){a.definitions[n]=f(f({},a.definitions[n]||{}),s[n]),Z2(n,s[n]);var o=m1[w][n];o&&Z2(o,s[n]),K3()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(a,e){var r=e.prefix&&e.iconName&&e.icon?{0:e}:e;return Object.keys(r).map(function(i){var s=r[i],n=s.prefix,o=s.iconName,t=s.icon,p=t[2];a[n]||(a[n]={}),p.length>0&&p.forEach(function(m){typeof m=="string"&&(a[n][m]=t)}),a[n][o]=t}),a}}])})(),q4=[],f2={},t2={},I8=Object.keys(t2);function O8(c,l){var a=l.mixoutsTo;return q4=c,f2={},Object.keys(t2).forEach(function(e){I8.indexOf(e)===-1&&delete t2[e]}),q4.forEach(function(e){var r=e.mixout?e.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(a[s]=r[s]),w2(r[s])==="object"&&Object.keys(r[s]).forEach(function(n){a[s]||(a[s]={}),a[s][n]=r[s][n]})}),e.hooks){var i=e.hooks();Object.keys(i).forEach(function(s){f2[s]||(f2[s]=[]),f2[s].push(i[s])})}e.provides&&e.provides(t2)}),a}function c1(c,l){for(var a=arguments.length,e=new Array(a>2?a-2:0),r=2;r<a;r++)e[r-2]=arguments[r];var i=f2[c]||[];return i.forEach(function(s){l=s.apply(null,[l].concat(e))}),l}function a2(c){for(var l=arguments.length,a=new Array(l>1?l-1:0),e=1;e<l;e++)a[e-1]=arguments[e];var r=f2[c]||[];r.forEach(function(i){i.apply(null,a)})}function Y(){var c=arguments[0],l=Array.prototype.slice.call(arguments,1);return t2[c]?t2[c].apply(null,l):void 0}function a1(c){c.prefix==="fa"&&(c.prefix="fas");var l=c.iconName,a=c.prefix||X();if(l)return l=Z(a,l)||l,O4(Z3.definitions,a,l)||O4(R.styles,a,l)}var Z3=new E8,U8=function(){u.autoReplaceSvg=!1,u.observeMutations=!1,a2("noAuto")},W8={i2svg:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return W?(a2("beforeI2svg",l),Y("pseudoElements2svg",l),Y("i2svg",l)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot;u.autoReplaceSvg===!1&&(u.autoReplaceSvg=!0),u.observeMutations=!0,b8(function(){q8({autoReplaceSvgRoot:a}),a2("watch",l)})}},G8={icon:function(l){if(l===null)return null;if(w2(l)==="object"&&l.prefix&&l.iconName)return{prefix:l.prefix,iconName:Z(l.prefix,l.iconName)||l.iconName};if(Array.isArray(l)&&l.length===2){var a=l[1].indexOf("fa-")===0?l[1].slice(3):l[1],e=F2(l[0]);return{prefix:e,iconName:Z(e,a)||a}}if(typeof l=="string"&&(l.indexOf("".concat(u.cssPrefix,"-"))>-1||l.match(f8))){var r=B2(l.split(" "),{skipLookups:!0});return{prefix:r.prefix||X(),iconName:Z(r.prefix,r.iconName)||r.iconName}}if(typeof l=="string"){var i=X();return{prefix:i,iconName:Z(i,l)||l}}}},F={noAuto:U8,config:u,dom:W8,parse:G8,library:Z3,findIconDefinition:a1,toHtml:h2},q8=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=l.autoReplaceSvgRoot,e=a===void 0?C:a;(Object.keys(R.styles).length>0||u.autoFetchSvg)&&W&&u.autoReplaceSvg&&F.dom.i2svg({node:e})};function D2(c,l){return Object.defineProperty(c,"abstract",{get:l}),Object.defineProperty(c,"html",{get:function(){return c.abstract.map(function(e){return h2(e)})}}),Object.defineProperty(c,"node",{get:function(){if(W){var e=C.createElement("div");return e.innerHTML=c.html,e.children}}}),c}function j8(c){var l=c.children,a=c.main,e=c.mask,r=c.attributes,i=c.styles,s=c.transform;if(p1(s)&&a.found&&!e.found){var n=a.width,o=a.height,t={x:n/o/2,y:.5};r.style=T2(f(f({},i),{},{"transform-origin":"".concat(t.x+s.x/16,"em ").concat(t.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:l}]}function V8(c){var l=c.prefix,a=c.iconName,e=c.children,r=c.attributes,i=c.symbol,s=i===!0?"".concat(l,"-").concat(u.cssPrefix,"-").concat(a):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:f(f({},r),{},{id:s}),children:e}]}]}function $8(c){var l=["aria-label","aria-labelledby","title","role"];return l.some(function(a){return a in c})}function M1(c){var l=c.icons,a=l.main,e=l.mask,r=c.prefix,i=c.iconName,s=c.transform,n=c.symbol,o=c.maskId,t=c.extra,p=c.watchable,m=p===void 0?!1:p,h=e.found?e:a,v=h.width,S=h.height,x=[u.replacementClass,i?"".concat(u.cssPrefix,"-").concat(i):""].filter(function(I){return t.classes.indexOf(I)===-1}).filter(function(I){return I!==""||!!I}).concat(t.classes).join(" "),k={children:[],attributes:f(f({},t.attributes),{},{"data-prefix":r,"data-icon":i,class:x,role:t.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(S)})};!$8(t.attributes)&&!t.attributes["aria-hidden"]&&(k.attributes["aria-hidden"]="true"),m&&(k.attributes[c2]="");var N=f(f({},k),{},{prefix:r,iconName:i,main:a,mask:e,maskId:o,transform:s,symbol:n,styles:f({},t.styles)}),T=e.found&&a.found?Y("generateAbstractMask",N)||{children:[],attributes:{}}:Y("generateAbstractIcon",N)||{children:[],attributes:{}},B=T.children,l2=T.attributes;return N.children=B,N.attributes=l2,n?V8(N):j8(N)}function j4(c){var l=c.content,a=c.width,e=c.height,r=c.transform,i=c.extra,s=c.watchable,n=s===void 0?!1:s,o=f(f({},i.attributes),{},{class:i.classes.join(" ")});n&&(o[c2]="");var t=f({},i.styles);p1(r)&&(t.transform=C8({transform:r,startCentered:!0,width:a,height:e}),t["-webkit-transform"]=t.transform);var p=T2(t);p.length>0&&(o.style=p);var m=[];return m.push({tag:"span",attributes:o,children:[l]}),m}function X8(c){var l=c.content,a=c.extra,e=f(f({},a.attributes),{},{class:a.classes.join(" ")}),r=T2(a.styles);r.length>0&&(e.style=r);var i=[];return i.push({tag:"span",attributes:e,children:[l]}),i}var q2=R.styles;function l1(c){var l=c[0],a=c[1],e=c.slice(4),r=P2(e,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(u.cssPrefix,"-").concat(U2.GROUP)},children:[{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(U2.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(u.cssPrefix,"-").concat(U2.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:l,height:a,icon:s}}var Y8={found:!1,width:512,height:512};function K8(c,l){!R3&&!u.showMissingIcons&&c&&console.error('Icon with name "'.concat(c,'" and prefix "').concat(l,'" is missing.'))}function e1(c,l){var a=l;return l==="fa"&&u.styleDefault!==null&&(l=X()),new Promise(function(e,r){if(a==="fa"){var i=Q3(c)||{};c=i.iconName||c,l=i.prefix||l}if(c&&l&&q2[l]&&q2[l][c]){var s=q2[l][c];return e(l1(s))}K8(c,l),e(f(f({},Y8),{},{icon:u.showMissingIcons&&c?Y("missingIconAbstract")||{}:{}}))})}var V4=function(){},r1=u.measurePerformance&&x2&&x2.mark&&x2.measure?x2:{mark:V4,measure:V4},u2='FA "7.1.0"',Q8=function(l){return r1.mark("".concat(u2," ").concat(l," begins")),function(){return c0(l)}},c0=function(l){r1.mark("".concat(u2," ").concat(l," ends")),r1.measure("".concat(u2," ").concat(l),"".concat(u2," ").concat(l," begins"),"".concat(u2," ").concat(l," ends"))},L1={begin:Q8,end:c0},N2=function(){};function $4(c){var l=c.getAttribute?c.getAttribute(c2):null;return typeof l=="string"}function J8(c){var l=c.getAttribute?c.getAttribute(f1):null,a=c.getAttribute?c.getAttribute(t1):null;return l&&a}function Z8(c){return c&&c.classList&&c.classList.contains&&c.classList.contains(u.replacementClass)}function c5(){if(u.autoReplaceSvg===!0)return y2.replace;var c=y2[u.autoReplaceSvg];return c||y2.replace}function a5(c){return C.createElementNS("http://www.w3.org/2000/svg",c)}function l5(c){return C.createElement(c)}function a0(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=l.ceFn,e=a===void 0?c.tag==="svg"?a5:l5:a;if(typeof c=="string")return C.createTextNode(c);var r=e(c.tag);Object.keys(c.attributes||[]).forEach(function(s){r.setAttribute(s,c.attributes[s])});var i=c.children||[];return i.forEach(function(s){r.appendChild(a0(s,{ceFn:e}))}),r}function e5(c){var l=" ".concat(c.outerHTML," ");return l="".concat(l,"Font Awesome fontawesome.com "),l}var y2={replace:function(l){var a=l[0];if(a.parentNode)if(l[1].forEach(function(r){a.parentNode.insertBefore(a0(r),a)}),a.getAttribute(c2)===null&&u.keepOriginalSource){var e=C.createComment(e5(a));a.parentNode.replaceChild(e,a)}else a.remove()},nest:function(l){var a=l[0],e=l[1];if(~z1(a).indexOf(u.replacementClass))return y2.replace(l);var r=new RegExp("".concat(u.cssPrefix,"-.*"));if(delete e[0].attributes.id,e[0].attributes.class){var i=e[0].attributes.class.split(" ").reduce(function(n,o){return o===u.replacementClass||o.match(r)?n.toSvg.push(o):n.toNode.push(o),n},{toNode:[],toSvg:[]});e[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?a.removeAttribute("class"):a.setAttribute("class",i.toNode.join(" "))}var s=e.map(function(n){return h2(n)}).join(`
`);a.setAttribute(c2,""),a.innerHTML=s}};function X4(c){c()}function l0(c,l){var a=typeof l=="function"?l:N2;if(c.length===0)a();else{var e=X4;u.mutateApproach===s8&&(e=$.requestAnimationFrame||X4),e(function(){var r=c5(),i=L1.begin("mutate");c.map(r),i(),a()})}}var v1=!1;function e0(){v1=!0}function i1(){v1=!1}var A2=null;function Y4(c){if(F4&&u.observeMutations){var l=c.treeCallback,a=l===void 0?N2:l,e=c.nodeCallback,r=e===void 0?N2:e,i=c.pseudoElementsCallback,s=i===void 0?N2:i,n=c.observeMutationsRoot,o=n===void 0?C:n;A2=new F4(function(t){if(!v1){var p=X();z2(t).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!$4(m.addedNodes[0])&&(u.searchPseudoElements&&s(m.target),a(m.target)),m.type==="attributes"&&m.target.parentNode&&u.searchPseudoElements&&s([m.target],!0),m.type==="attributes"&&$4(m.target)&&~z8.indexOf(m.attributeName))if(m.attributeName==="class"&&J8(m.target)){var h=B2(z1(m.target)),v=h.prefix,S=h.iconName;m.target.setAttribute(f1,v||p),S&&m.target.setAttribute(t1,S)}else Z8(m.target)&&r(m.target)})}}),W&&A2.observe(o,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function r5(){A2&&A2.disconnect()}function i5(c){var l=c.getAttribute("style"),a=[];return l&&(a=l.split(";").reduce(function(e,r){var i=r.split(":"),s=i[0],n=i.slice(1);return s&&n.length>0&&(e[s]=n.join(":").trim()),e},{})),a}function s5(c){var l=c.getAttribute("data-prefix"),a=c.getAttribute("data-icon"),e=c.innerText!==void 0?c.innerText.trim():"",r=B2(z1(c));return r.prefix||(r.prefix=X()),l&&a&&(r.prefix=l,r.iconName=a),r.iconName&&r.prefix||(r.prefix&&e.length>0&&(r.iconName=P8(r.prefix,c.innerText)||d1(r.prefix,G3(c.innerText))),!r.iconName&&u.autoFetchSvg&&c.firstChild&&c.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=c.firstChild.data)),r}function n5(c){var l=z2(c.attributes).reduce(function(a,e){return a.name!=="class"&&a.name!=="style"&&(a[e.name]=e.value),a},{});return l}function o5(){return{iconName:null,prefix:null,transform:E,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function K4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},a=s5(c),e=a.iconName,r=a.prefix,i=a.rest,s=n5(c),n=c1("parseNodeAttributes",{},c),o=l.styleParser?i5(c):[];return f({iconName:e,prefix:r,transform:E,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:o,attributes:s}},n)}var f5=R.styles;function r0(c){var l=u.autoReplaceSvg==="nest"?K4(c,{styleParser:!1}):K4(c);return~l.extra.classes.indexOf(_3)?Y("generateLayersText",c,l):Y("generateSvgReplacementMutation",c,l)}function t5(){return[].concat(H(A3),H(P3))}function Q4(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!W)return Promise.resolve();var a=C.documentElement.classList,e=function(m){return a.add("".concat(R4,"-").concat(m))},r=function(m){return a.remove("".concat(R4,"-").concat(m))},i=u.autoFetchSvg?t5():m3.concat(Object.keys(f5));i.includes("fa")||i.push("fa");var s=[".".concat(_3,":not([").concat(c2,"])")].concat(i.map(function(p){return".".concat(p,":not([").concat(c2,"])")})).join(", ");if(s.length===0)return Promise.resolve();var n=[];try{n=z2(c.querySelectorAll(s))}catch{}if(n.length>0)e("pending"),r("complete");else return Promise.resolve();var o=L1.begin("onTree"),t=n.reduce(function(p,m){try{var h=r0(m);h&&p.push(h)}catch(v){R3||v.name==="MissingIcon"&&console.error(v)}return p},[]);return new Promise(function(p,m){Promise.all(t).then(function(h){l0(h,function(){e("active"),e("complete"),r("pending"),typeof l=="function"&&l(),o(),p()})}).catch(function(h){o(),m(h)})})}function m5(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;r0(c).then(function(a){a&&l0([a],l)})}function z5(c){return function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=(l||{}).icon?l:a1(l||{}),r=a.mask;return r&&(r=(r||{}).icon?r:a1(r||{})),c(e,f(f({},a),{},{mask:r}))}}var p5=function(l){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},e=a.transform,r=e===void 0?E:e,i=a.symbol,s=i===void 0?!1:i,n=a.mask,o=n===void 0?null:n,t=a.maskId,p=t===void 0?null:t,m=a.classes,h=m===void 0?[]:m,v=a.attributes,S=v===void 0?{}:v,x=a.styles,k=x===void 0?{}:x;if(l){var N=l.prefix,T=l.iconName,B=l.icon;return D2(f({type:"icon"},l),function(){return a2("beforeDOMElementCreation",{iconDefinition:l,params:a}),M1({icons:{main:l1(B),mask:o?l1(o.icon):{found:!1,width:null,height:null,icon:{}}},prefix:N,iconName:T,transform:f(f({},E),r),symbol:s,maskId:p,extra:{attributes:S,styles:k,classes:h}})})}},u5={mixout:function(){return{icon:z5(p5)}},hooks:function(){return{mutationObserverCallbacks:function(a){return a.treeCallback=Q4,a.nodeCallback=m5,a}}},provides:function(l){l.i2svg=function(a){var e=a.node,r=e===void 0?C:e,i=a.callback,s=i===void 0?function(){}:i;return Q4(r,s)},l.generateSvgReplacementMutation=function(a,e){var r=e.iconName,i=e.prefix,s=e.transform,n=e.symbol,o=e.mask,t=e.maskId,p=e.extra;return new Promise(function(m,h){Promise.all([e1(r,i),o.iconName?e1(o.iconName,o.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var S=P2(v,2),x=S[0],k=S[1];m([a,M1({icons:{main:x,mask:k},prefix:i,iconName:r,transform:s,symbol:n,maskId:t,extra:p,watchable:!0})])}).catch(h)})},l.generateAbstractIcon=function(a){var e=a.children,r=a.attributes,i=a.main,s=a.transform,n=a.styles,o=T2(n);o.length>0&&(r.style=o);var t;return p1(s)&&(t=Y("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),e.push(t||i.icon),{children:e,attributes:r}}}},d5={mixout:function(){return{layer:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.classes,i=r===void 0?[]:r;return D2({type:"layer"},function(){a2("beforeDOMElementCreation",{assembler:a,params:e});var s=[];return a(function(n){Array.isArray(n)?n.map(function(o){s=s.concat(o.abstract)}):s=s.concat(n.abstract)}),[{tag:"span",attributes:{class:["".concat(u.cssPrefix,"-layers")].concat(H(i)).join(" ")},children:s}]})}}}},M5={mixout:function(){return{counter:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.title,i=r===void 0?null:r,s=e.classes,n=s===void 0?[]:s,o=e.attributes,t=o===void 0?{}:o,p=e.styles,m=p===void 0?{}:p;return D2({type:"counter",content:a},function(){return a2("beforeDOMElementCreation",{content:a,params:e}),X8({content:a.toString(),title:i,extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-counter")].concat(H(n))}})})}}}},L5={mixout:function(){return{text:function(a){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,i=r===void 0?E:r,s=e.classes,n=s===void 0?[]:s,o=e.attributes,t=o===void 0?{}:o,p=e.styles,m=p===void 0?{}:p;return D2({type:"text",content:a},function(){return a2("beforeDOMElementCreation",{content:a,params:e}),j4({content:a,transform:f(f({},E),i),extra:{attributes:t,styles:m,classes:["".concat(u.cssPrefix,"-layers-text")].concat(H(n))}})})}}},provides:function(l){l.generateLayersText=function(a,e){var r=e.transform,i=e.extra,s=null,n=null;if(f3){var o=parseInt(getComputedStyle(a).fontSize,10),t=a.getBoundingClientRect();s=t.width/o,n=t.height/o}return Promise.resolve([a,j4({content:a.innerHTML,width:s,height:n,transform:r,extra:i,watchable:!0})])}}},i0=new RegExp('"',"ug"),J4=[1105920,1112319],Z4=f(f(f(f({},{FontAwesome:{normal:"fas",400:"fas"}}),Z0),r8),o6),s1=Object.keys(Z4).reduce(function(c,l){return c[l.toLowerCase()]=Z4[l],c},{}),v5=Object.keys(s1).reduce(function(c,l){var a=s1[l];return c[l]=a[900]||H(Object.entries(a))[0][1],c},{});function g5(c){var l=c.replace(i0,"");return G3(H(l)[0]||"")}function h5(c){var l=c.getPropertyValue("font-feature-settings").includes("ss01"),a=c.getPropertyValue("content"),e=a.replace(i0,""),r=e.codePointAt(0),i=r>=J4[0]&&r<=J4[1],s=e.length===2?e[0]===e[1]:!1;return i||s||l}function C5(c,l){var a=c.replace(/^['"]|['"]$/g,"").toLowerCase(),e=parseInt(l),r=isNaN(e)?"normal":e;return(s1[a]||{})[r]||v5[a]}function c3(c,l){var a="".concat(i8).concat(l.replace(":","-"));return new Promise(function(e,r){if(c.getAttribute(a)!==null)return e();var i=z2(c.children),s=i.filter(function(R2){return R2.getAttribute(Y2)===l})[0],n=$.getComputedStyle(c,l),o=n.getPropertyValue("font-family"),t=o.match(t8),p=n.getPropertyValue("font-weight"),m=n.getPropertyValue("content");if(s&&!t)return c.removeChild(s),e();if(t&&m!=="none"&&m!==""){var h=n.getPropertyValue("content"),v=C5(o,p),S=g5(h),x=t[0].startsWith("FontAwesome"),k=h5(n),N=d1(v,S),T=N;if(x){var B=T8(S);B.iconName&&B.prefix&&(N=B.iconName,v=B.prefix)}if(N&&!k&&(!s||s.getAttribute(f1)!==v||s.getAttribute(t1)!==T)){c.setAttribute(a,T),s&&c.removeChild(s);var l2=o5(),I=l2.extra;I.attributes[Y2]=l,e1(N,v).then(function(R2){var g0=M1(f(f({},l2),{},{icons:{main:R2,mask:J3()},prefix:v,iconName:T,extra:I,watchable:!0})),H2=C.createElementNS("http://www.w3.org/2000/svg","svg");l==="::before"?c.insertBefore(H2,c.firstChild):c.appendChild(H2),H2.outerHTML=g0.map(function(h0){return h2(h0)}).join(`
`),c.removeAttribute(a),e()}).catch(r)}else e()}else e()})}function x5(c){return Promise.all([c3(c,"::before"),c3(c,"::after")])}function S5(c){return c.parentNode!==document.head&&!~n8.indexOf(c.tagName.toUpperCase())&&!c.getAttribute(Y2)&&(!c.parentNode||c.parentNode.tagName!=="svg")}var b5=function(l){return!!l&&D3.some(function(a){return l.includes(a)})},N5=function(l){if(!l)return[];var a=new Set,e=l.split(/,(?![^()]*\))/).map(function(o){return o.trim()});e=e.flatMap(function(o){return o.includes("(")?o:o.split(",").map(function(t){return t.trim()})});var r=b2(e),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;if(b5(s)){var n=D3.reduce(function(o,t){return o.replace(t,"")},s);n!==""&&n!=="*"&&a.add(n)}}}catch(o){r.e(o)}finally{r.f()}return a};function a3(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(W){var a;if(l)a=c;else if(u.searchPseudoElementsFullScan)a=c.querySelectorAll("*");else{var e=new Set,r=b2(document.styleSheets),i;try{for(r.s();!(i=r.n()).done;){var s=i.value;try{var n=b2(s.cssRules),o;try{for(n.s();!(o=n.n()).done;){var t=o.value,p=N5(t.selectorText),m=b2(p),h;try{for(m.s();!(h=m.n()).done;){var v=h.value;e.add(v)}}catch(x){m.e(x)}finally{m.f()}}}catch(x){n.e(x)}finally{n.f()}}catch(x){u.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(s.href," (").concat(x.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(x){r.e(x)}finally{r.f()}if(!e.size)return;var S=Array.from(e).join(", ");try{a=c.querySelectorAll(S)}catch{}}return new Promise(function(x,k){var N=z2(a).filter(S5).map(x5),T=L1.begin("searchPseudoElements");e0(),Promise.all(N).then(function(){T(),i1(),x()}).catch(function(){T(),i1(),k()})})}}var y5={hooks:function(){return{mutationObserverCallbacks:function(a){return a.pseudoElementsCallback=a3,a}}},provides:function(l){l.pseudoElements2svg=function(a){var e=a.node,r=e===void 0?C:e;u.searchPseudoElements&&a3(r)}}},l3=!1,w5={mixout:function(){return{dom:{unwatch:function(){e0(),l3=!0}}}},hooks:function(){return{bootstrap:function(){Y4(c1("mutationObserverCallbacks",{}))},noAuto:function(){r5()},watch:function(a){var e=a.observeMutationsRoot;l3?i1():Y4(c1("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}},e3=function(l){var a={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return l.toLowerCase().split(" ").reduce(function(e,r){var i=r.toLowerCase().split("-"),s=i[0],n=i.slice(1).join("-");if(s&&n==="h")return e.flipX=!0,e;if(s&&n==="v")return e.flipY=!0,e;if(n=parseFloat(n),isNaN(n))return e;switch(s){case"grow":e.size=e.size+n;break;case"shrink":e.size=e.size-n;break;case"left":e.x=e.x-n;break;case"right":e.x=e.x+n;break;case"up":e.y=e.y-n;break;case"down":e.y=e.y+n;break;case"rotate":e.rotate=e.rotate+n;break}return e},a)},k5={mixout:function(){return{parse:{transform:function(a){return e3(a)}}}},hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-transform");return r&&(a.transform=e3(r)),a}}},provides:function(l){l.generateAbstractTransformGrouping=function(a){var e=a.main,r=a.transform,i=a.containerWidth,s=a.iconWidth,n={transform:"translate(".concat(i/2," 256)")},o="translate(".concat(r.x*32,", ").concat(r.y*32,") "),t="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),p="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(o," ").concat(t," ").concat(p)},h={transform:"translate(".concat(s/2*-1," -256)")},v={outer:n,inner:m,path:h};return{tag:"g",attributes:f({},v.outer),children:[{tag:"g",attributes:f({},v.inner),children:[{tag:e.icon.tag,children:e.icon.children,attributes:f(f({},e.icon.attributes),v.path)}]}]}}}},j2={x:0,y:0,width:"100%",height:"100%"};function r3(c){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return c.attributes&&(c.attributes.fill||l)&&(c.attributes.fill="black"),c}function A5(c){return c.tag==="g"?c.children:[c]}var P5={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-mask"),i=r?B2(r.split(" ").map(function(s){return s.trim()})):J3();return i.prefix||(i.prefix=X()),a.mask=i,a.maskId=e.getAttribute("data-fa-mask-id"),a}}},provides:function(l){l.generateAbstractMask=function(a){var e=a.children,r=a.attributes,i=a.main,s=a.mask,n=a.maskId,o=a.transform,t=i.width,p=i.icon,m=s.width,h=s.icon,v=h8({transform:o,containerWidth:m,iconWidth:t}),S={tag:"rect",attributes:f(f({},j2),{},{fill:"white"})},x=p.children?{children:p.children.map(r3)}:{},k={tag:"g",attributes:f({},v.inner),children:[r3(f({tag:p.tag,attributes:f(f({},p.attributes),v.path)},x))]},N={tag:"g",attributes:f({},v.outer),children:[k]},T="mask-".concat(n||E4()),B="clip-".concat(n||E4()),l2={tag:"mask",attributes:f(f({},j2),{},{id:T,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[S,N]},I={tag:"defs",children:[{tag:"clipPath",attributes:{id:B},children:A5(h)},l2]};return e.push(I,{tag:"rect",attributes:f({fill:"currentColor","clip-path":"url(#".concat(B,")"),mask:"url(#".concat(T,")")},j2)}),{children:e,attributes:r}}}},T5={provides:function(l){var a=!1;$.matchMedia&&(a=$.matchMedia("(prefers-reduced-motion: reduce)").matches),l.missingIconAbstract=function(){var e=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};e.push({tag:"path",attributes:f(f({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=f(f({},i),{},{attributeName:"opacity"}),n={tag:"circle",attributes:f(f({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return a||n.children.push({tag:"animate",attributes:f(f({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:f(f({},s),{},{values:"1;0;1;1;0;1;"})}),e.push(n),e.push({tag:"path",attributes:f(f({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:a?[]:[{tag:"animate",attributes:f(f({},s),{},{values:"1;0;0;0;0;1;"})}]}),a||e.push({tag:"path",attributes:f(f({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:f(f({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:e}}}},F5={hooks:function(){return{parseNodeAttributes:function(a,e){var r=e.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return a.symbol=i,a}}}},B5=[S8,u5,d5,M5,L5,y5,w5,k5,P5,T5,F5];O8(B5,{mixoutsTo:F});var L7=F.noAuto,s0=F.config,v7=F.library,n0=F.dom,o0=F.parse,g7=F.findIconDefinition,h7=F.toHtml,f0=F.icon,C7=F.layer,D5=F.text,R5=F.counter;var _5=["*"],E5=(()=>{class c{defaultPrefix="fas";fallbackIcon=null;fixedWidth;set autoAddCss(a){s0.autoAddCss=a,this._autoAddCss=a}get autoAddCss(){return this._autoAddCss}_autoAddCss=!0;static \u0275fac=function(e){return new(e||c)};static \u0275prov=_2({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),I5=(()=>{class c{definitions={};addIcons(...a){for(let e of a){e.prefix in this.definitions||(this.definitions[e.prefix]={}),this.definitions[e.prefix][e.iconName]=e;for(let r of e.icon[2])typeof r=="string"&&(this.definitions[e.prefix][r]=e)}}addIconPacks(...a){for(let e of a){let r=Object.keys(e).map(i=>e[i]);this.addIcons(...r)}}getIconDefinition(a,e){return a in this.definitions&&e in this.definitions[a]?this.definitions[a][e]:null}static \u0275fac=function(e){return new(e||c)};static \u0275prov=_2({token:c,factory:c.\u0275fac,providedIn:"root"})}return c})(),O5=c=>{throw new Error(`Could not find icon with iconName=${c.iconName} and prefix=${c.prefix} in the icon library.`)},U5=()=>{throw new Error("Property `icon` is required for `fa-icon`/`fa-duotone-icon` components.")},m0=c=>c!=null&&(c===90||c===180||c===270||c==="90"||c==="180"||c==="270"),W5=c=>{let l=m0(c.rotate),a={[`fa-${c.animation}`]:c.animation!=null&&!c.animation.startsWith("spin"),"fa-spin":c.animation==="spin"||c.animation==="spin-reverse","fa-spin-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-spin-reverse":c.animation==="spin-reverse"||c.animation==="spin-pulse-reverse","fa-pulse":c.animation==="spin-pulse"||c.animation==="spin-pulse-reverse","fa-fw":c.fixedWidth,"fa-border":c.border,"fa-inverse":c.inverse,"fa-layers-counter":c.counter,"fa-flip-horizontal":c.flip==="horizontal"||c.flip==="both","fa-flip-vertical":c.flip==="vertical"||c.flip==="both",[`fa-${c.size}`]:c.size!==null,[`fa-rotate-${c.rotate}`]:l,"fa-rotate-by":c.rotate!=null&&!l,[`fa-pull-${c.pull}`]:c.pull!==null,[`fa-stack-${c.stackItemSize}`]:c.stackItemSize!=null};return Object.keys(a).map(e=>a[e]?e:null).filter(e=>e!=null)},g1=new WeakSet,t0="fa-auto-css";function G5(c,l){if(!l.autoAddCss||g1.has(c))return;if(c.getElementById(t0)!=null){l.autoAddCss=!1,g1.add(c);return}let a=c.createElement("style");a.setAttribute("type","text/css"),a.setAttribute("id",t0),a.innerHTML=n0.css();let e=c.head.childNodes,r=null;for(let i=e.length-1;i>-1;i--){let s=e[i],n=s.nodeName.toUpperCase();["STYLE","LINK"].indexOf(n)>-1&&(r=s)}c.head.insertBefore(a,r),l.autoAddCss=!1,g1.add(c)}var q5=c=>c.prefix!==void 0&&c.iconName!==void 0,j5=(c,l)=>q5(c)?c:Array.isArray(c)&&c.length===2?{prefix:c[0],iconName:c[1]}:{prefix:l,iconName:c},V5=(()=>{class c{stackItemSize=C2("1x");size=C2();_effect=I1(()=>{if(this.size())throw new Error('fa-icon is not allowed to customize size when used inside fa-stack. Set size on the enclosing fa-stack instead: <fa-stack size="4x">...</fa-stack>.')});static \u0275fac=function(e){return new(e||c)};static \u0275dir=w1({type:c,selectors:[["fa-icon","stackItemSize",""],["fa-duotone-icon","stackItemSize",""]],inputs:{stackItemSize:[1,"stackItemSize"],size:[1,"size"]}})}return c})(),$5=(()=>{class c{size=C2();classes=E2(()=>{let a=this.size(),e=a?{[`fa-${a}`]:!0}:{};return C1(h1({},e),{"fa-stack":!0})});static \u0275fac=function(e){return new(e||c)};static \u0275cmp=p2({type:c,selectors:[["fa-stack"]],hostVars:2,hostBindings:function(e,r){e&2&&R1(r.classes())},inputs:{size:[1,"size"]},ngContentSelectors:_5,decls:1,vars:0,template:function(e,r){e&1&&(F1(),B1(0))},encapsulation:2,changeDetection:0})}return c})(),z0=(()=>{class c{icon=P();title=P();animation=P();mask=P();flip=P();size=P();pull=P();border=P();inverse=P();symbol=P();rotate=P();fixedWidth=P();transform=P();a11yRole=P();renderedIconHTML=E2(()=>{let a=this.icon()??this.config.fallbackIcon;if(!a)return U5(),"";let e=this.findIconDefinition(a);if(!e)return"";let r=this.buildParams();G5(this.document,this.config);let i=f0(e,r);return this.sanitizer.bypassSecurityTrustHtml(i.html.join(`
`))});document=K(b1);sanitizer=K($1);config=K(E5);iconLibrary=K(I5);stackItem=K(V5,{optional:!0});stack=K($5,{optional:!0});constructor(){this.stack!=null&&this.stackItem==null&&console.error('FontAwesome: fa-icon and fa-duotone-icon elements must specify stackItemSize attribute when wrapped into fa-stack. Example: <fa-icon stackItemSize="2x" />.')}findIconDefinition(a){let e=j5(a,this.config.defaultPrefix);if("icon"in e)return e;let r=this.iconLibrary.getIconDefinition(e.prefix,e.iconName);return r??(O5(e),null)}buildParams(){let a=this.fixedWidth(),e={flip:this.flip(),animation:this.animation(),border:this.border(),inverse:this.inverse(),size:this.size(),pull:this.pull(),rotate:this.rotate(),fixedWidth:typeof a=="boolean"?a:this.config.fixedWidth,stackItemSize:this.stackItem!=null?this.stackItem.stackItemSize():void 0},r=this.transform(),i=typeof r=="string"?o0.transform(r):r,s=this.mask(),n=s!=null?this.findIconDefinition(s):null,o={},t=this.a11yRole();t!=null&&(o.role=t);let p={};return e.rotate!=null&&!m0(e.rotate)&&(p["--fa-rotate-angle"]=`${e.rotate}`),{title:this.title(),transform:i,classes:W5(e),mask:n??void 0,symbol:this.symbol(),attributes:o,styles:p}}static \u0275fac=function(e){return new(e||c)};static \u0275cmp=p2({type:c,selectors:[["fa-icon"]],hostAttrs:[1,"ng-fa-icon"],hostVars:2,hostBindings:function(e,r){e&2&&(T1("innerHTML",r.renderedIconHTML(),N1),k1("title",r.title()??void 0))},inputs:{icon:[1,"icon"],title:[1,"title"],animation:[1,"animation"],mask:[1,"mask"],flip:[1,"flip"],size:[1,"size"],pull:[1,"pull"],border:[1,"border"],inverse:[1,"inverse"],symbol:[1,"symbol"],rotate:[1,"rotate"],fixedWidth:[1,"fixedWidth"],transform:[1,"transform"],a11yRole:[1,"a11yRole"]},outputs:{icon:"iconChange",title:"titleChange",animation:"animationChange",mask:"maskChange",flip:"flipChange",size:"sizeChange",pull:"pullChange",border:"borderChange",inverse:"inverseChange",symbol:"symbolChange",rotate:"rotateChange",fixedWidth:"fixedWidthChange",transform:"transformChange",a11yRole:"a11yRoleChange"},decls:0,vars:0,template:function(e,r){},encapsulation:2,changeDetection:0})}return c})();var p0=(()=>{class c{static \u0275fac=function(e){return new(e||c)};static \u0275mod=y1({type:c});static \u0275inj=S1({})}return c})();var u0={prefix:"fas",iconName:"tree",icon:[448,512,[127794],"f1bb","M224-32c7 0 13.7 3.1 18.3 8.5l136 160c6.1 7.1 7.4 17.1 3.5 25.6S369.4 176 360 176l-24.9 0 75.2 88.5c6.1 7.1 7.4 17.1 3.5 25.6S401.4 304 392 304l-38.5 0 88.8 104.5c6.1 7.1 7.4 17.1 3.5 25.6S433.4 448 424 448l-168 0 0 64c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-64-168 0c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L94.5 304 56 304c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6L112.9 176 88 176c-9.4 0-17.9-5.4-21.8-13.9s-2.6-18.5 3.5-25.6l136-160C210.3-28.9 217-32 224-32z"]};var d0={prefix:"fas",iconName:"euro-sign",icon:[448,512,[8364,"eur","euro"],"f153","M73.3 192C100.8 99.5 186.5 32 288 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-65.6 0-122 39.5-146.7 96L272 192c13.3 0 24 10.7 24 24s-10.7 24-24 24l-143.2 0c-.5 5.3-.8 10.6-.8 16s.3 10.7 .8 16L272 272c13.3 0 24 10.7 24 24s-10.7 24-24 24l-130.7 0c24.7 56.5 81.1 96 146.7 96l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-101.5 0-187.2-67.5-214.7-160L40 320c-13.3 0-24-10.7-24-24s10.7-24 24-24l24.6 0c-.7-10.5-.7-21.5 0-32L40 240c-13.3 0-24-10.7-24-24s10.7-24 24-24l33.3 0z"]};var M0={prefix:"fas",iconName:"building",icon:[384,512,[127970,61687],"f1ad","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-384c0-35.3-28.7-64-64-64L64 0zM176 352l32 0c17.7 0 32 14.3 32 32l0 80-96 0 0-80c0-17.7 14.3-32 32-32zM96 112c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zM240 96l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16zM96 240c0-8.8 7.2-16 16-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32zm144-16l32 0c8.8 0 16 7.2 16 16l0 32c0 8.8-7.2 16-16 16l-32 0c-8.8 0-16-7.2-16-16l0-32c0-8.8 7.2-16 16-16z"]};var Y5={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},L0=Y5;var K5=c=>[c,"EUR","symbol","1.2-2","es-ES"];function Q5(c,l){c&1&&(d(0,"div",17),j(1,"ion-spinner",18),d(2,"p"),M(3,"Cargando propiedades..."),z()())}function J5(c,l){if(c&1&&(d(0,"ion-card",19)(1,"ion-card-content"),j(2,"ion-icon",20),d(3,"h3"),M(4,"Error al cargar propiedades"),z(),d(5,"p"),M(6),z()()()),c&2){let a=b();g(6),Q(a.error)}}function Z5(c,l){if(c&1&&j(0,"fa-icon",34),c&2){let a=b(4);y("icon",a.faBuilding)}}function c7(c,l){c&1&&j(0,"i",35)}function a7(c,l){if(c&1){let a=r2();d(0,"span",36)(1,"span",37),A("click",function(){G(a);let r=b().$implicit,i=b(3);return q(i.openFechapagoModal(r))}),M(2),J(3,"date"),z()()}if(c&2){let a=b().$implicit;g(2),D(" ",a.fechapago?o2(3,1,a.fechapago,"dd/MM/yyyy"):""," ")}}function l7(c,l){if(c&1){let a=r2();d(0,"ion-card",25)(1,"ion-card-header")(2,"div",26),_(3,Z5,1,1,"fa-icon",27)(4,c7,1,0,"i",28),d(5,"ion-card-title"),M(6),z()(),d(7,"ion-card-subtitle"),M(8),z()(),d(9,"ion-card-content")(10,"div",29)(11,"fa-icon",30),A("click",function(){let r=G(a).$implicit,i=b(3);return q(i.openDetalle(r))}),z(),j(12,"span",31),_(13,a7,4,4,"span",32),j(14,"span",31),d(15,"fa-icon",33),A("click",function(){let r=G(a).$implicit,i=b(3);return q(i.openArriendoModal(r.id))}),z()()()()}if(c&2){let a=l.$implicit,e=b(3);g(3),y("ngIf",a.catastrotipoid===1),g(),y("ngIf",a.catastrotipoid===2),g(2),Q(a.direccion),g(2),Q(a.referenciacatastral),g(3),y("icon",e.faInfoCircle),g(2),y("ngIf",a.fechapago),g(2),y("icon",e.faEuroSign)}}function e7(c,l){if(c&1&&(A1(0),d(1,"div",23),_(2,l7,16,7,"ion-card",24),z(),P1()),c&2){let a=b(2);g(2),y("ngForOf",a.filteredCatastros)}}function r7(c,l){c&1&&(d(0,"p",38),M(1,"No hay propiedades registradas."),z())}function i7(c,l){if(c&1&&(d(0,"div",21),_(1,e7,3,1,"ng-container",22)(2,r7,2,0,"ng-template",null,0,E1),z()),c&2){let a=D1(3),e=b();g(),y("ngIf",e.filteredCatastros.length>0)("ngIfElse",a)}}function s7(c,l){if(c&1&&(d(0,"tr")(1,"td"),M(2),J(3,"date"),z(),d(4,"td"),M(5),J(6,"currency"),z(),d(7,"td"),M(8),z()()),c&2){let a=l.$implicit;g(2),Q(a.fechapago?o2(3,3,a.fechapago,"dd/MM/yyyy"):"-"),g(3),Q(a.importe!==void 0&&a.importe!==null?_1(6,6,H1(12,K5,a.importe)):"-"),g(3),Q(a.quien)}}function n7(c,l){if(c&1){let a=r2();d(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),M(3,"Detalle de Pago"),z(),d(4,"ion-buttons",39)(5,"ion-button",40),A("click",function(){G(a);let r=b();return q(r.closeFechapagoModal())}),M(6,"Cerrar"),z()()()(),d(7,"ion-content")(8,"div")(9,"table",41)(10,"thead")(11,"tr")(12,"th"),M(13,"Pago"),z(),d(14,"th"),M(15,"Importe"),z(),d(16,"th"),M(17,"Qui\xE9n"),z()()(),d(18,"tbody"),_(19,s7,9,14,"tr",42),z()(),d(20,"div",43)(21,"ion-button",44),A("click",function(){G(a);let r=b();return q(r.closeFechapagoModal())}),M(22,"Cerrar"),z()()()()}if(c&2){let a=b();g(19),y("ngForOf",a.lstPagosCatastro)}}function o7(c,l){if(c&1){let a=r2();d(0,"div")(1,"p")(2,"strong"),M(3,"Felipe:"),z(),M(4),z(),d(5,"p")(6,"strong"),M(7,"Pol\xEDgono:"),z(),M(8),z(),d(9,"p")(10,"strong"),M(11,"Parcela:"),z(),M(12),z(),d(13,"p")(14,"strong"),M(15,"Superficie construida:"),z(),M(16),z(),d(17,"p")(18,"strong"),M(19,"Superficie parcela:"),z(),M(20),z(),d(21,"p")(22,"strong"),M(23,"Uso:"),z(),M(24),z(),d(25,"p")(26,"strong"),M(27,"Valor suelo:"),z(),M(28),J(29,"number"),z(),d(30,"p")(31,"strong"),M(32,"Valor construcci\xF3n:"),z(),M(33),J(34,"number"),z(),d(35,"p")(36,"strong"),M(37,"Valor catastral:"),z(),M(38),J(39,"number"),z(),d(40,"div",43)(41,"ion-button",44),A("click",function(){G(a);let r=b(2);return q(r.closeDialog())}),M(42,"Cerrar"),z()()()}if(c&2){let a=b(2);g(4),D(" ",a.selectedCatastro.felipe?"S\xED":"No"),g(4),D(" ",a.selectedCatastro.poligono||"-"),g(4),D(" ",a.selectedCatastro.parcela||"-"),g(4),D(" ",a.selectedCatastro.superficieconstruida," m\xB2"),g(4),D(" ",a.selectedCatastro.superficieparcela," m\xB2"),g(4),D(" ",a.selectedCatastro.uso),g(4),D(" ",o2(29,9,a.selectedCatastro.valorsuelo,"1.2-2")," \u20AC"),g(5),D(" ",o2(34,12,a.selectedCatastro.valorconstruccion,"1.2-2")," \u20AC"),g(5),D(" ",o2(39,15,a.selectedCatastro.valorcatastral,"1.2-2")," \u20AC")}}function f7(c,l){if(c&1){let a=r2();d(0,"ion-header")(1,"ion-toolbar")(2,"ion-title"),M(3,"Detalle Catastro"),z(),d(4,"ion-buttons",39)(5,"ion-button",40),A("click",function(){G(a);let r=b();return q(r.closeDialog())}),M(6,"Cerrar"),z()()()(),d(7,"ion-content"),_(8,o7,43,18,"div",45),z()}if(c&2){let a=b();g(8),y("ngIf",a.selectedCatastro)}}var v0=class c{constructor(l,a,e,r,i){this.router=l;this.cdr=a;this.pageTitleService=e;this.apiService=r;this.modalController=i;h4({"business-outline":x4,"alert-circle-outline":C4,"home-outline":S4,"leaf-outline":b4})}showPagado=!1;showFechapagoModal=!1;openFechapagoModal(l){this.showFechapagoModal=!0,this.loadPagos(l?.id)}closeFechapagoModal(){this.showFechapagoModal=!1,this.lstPagosCatastro=[]}ionViewWillEnter(){this.loadCatastros()}loading=!1;error=null;catastros=[];lstPagosCatastro=[];showFelipe=!0;showAgrario=!0;showResidencial=!1;searchText="";filteredCatastros=[];showDialog=!1;selectedCatastro=null;faTree=u0;faBuilding=M0;faInfoCircle=L0;faEuroSign=d0;ngOnInit(){console.log("entra en init de GestionPropiedadesPage"),this.pageTitleService.setTitle("Gesti\xF3n de Propiedades"),this.loadCatastros()}refreshArriendos(){this.loadCatastros()}openArriendoModal(l){return x1(this,null,function*(){let a=yield this.modalController.create({component:(yield import("./chunk-2JITSDX4.js")).ArriendoFormModalComponent,componentProps:{isEdit:!1,arriendo:{catastroid:l}}});yield a.present();let{data:e,role:r}=yield a.onWillDismiss();r==="confirm"&&e&&this.refreshArriendos()})}loadCatastros(){this.loading=!0,this.error=null,this.catastros=[],this.apiService.get("/app-alquiler/catastro").subscribe({next:l=>{console.log("response",l),l.success&&Array.isArray(l.data)?this.catastros=[...l.data]:this.catastros=[],this.applyFilter(),this.loading=!1,this.cdr.markForCheck()},error:l=>{this.error=l.message||"Error al cargar propiedades",this.loading=!1,this.cdr.markForCheck()}})}loadPagos(l){this.lstPagosCatastro=[],this.apiService.get(`/app-alquiler/arriendos-pagos/${l}`).subscribe({next:a=>{a.success&&Array.isArray(a.data)?this.lstPagosCatastro=[...a.data]:this.lstPagosCatastro=[]},error:a=>{}})}onFelipeChange(){this.applyFilter()}onAgrarioChange(){this.applyFilter()}onResidencialChange(){this.applyFilter()}onSearchChange(){this.applyFilter()}onPagadoChange(){this.applyFilter()}applyFilter(){let l=[...this.catastros];if(this.showFelipe||(l=l.filter(a=>!a.felipe)),this.showAgrario||(l=l.filter(a=>a.catastrotipoid!==2)),this.showResidencial||(l=l.filter(a=>a.catastrotipoid!==1)),this.showPagado&&(l=l.filter(a=>!!a.fechapago)),this.searchText.trim()){let a=this.searchText.trim().toLowerCase();l=l.filter(e=>e.direccion.toLowerCase().includes(a)||e.referenciacatastral.toLowerCase().includes(a))}this.filteredCatastros=l}openDetalle(l){this.selectedCatastro=l,this.showDialog=!0}closeDialog(){this.showDialog=!1,this.selectedCatastro=null}static \u0275fac=function(a){return new(a||c)(e2(X1),e2(O1),e2(y4),e2(N4),e2(v4))};static \u0275cmp=p2({type:c,selectors:[["app-gestion-propiedades"]],decls:33,vars:11,consts:[["emptyList",""],[1,"gestion-propiedades-content",3,"fullscreen"],[1,"table-section"],[1,"search-section"],[1,"search-row"],[2,"flex","1"],[1,"buscador-label"],["placeholder","Direcci\xF3n o referencia...",1,"buscador-input",3,"ngModelChange","ionInput","ngModel"],[1,"checks-row"],[1,"check-col"],[1,"check-label"],[3,"ngModelChange","ionChange","ngModel"],["class","loading-container",4,"ngIf"],["class","error-card",4,"ngIf"],["class","table-wrapper",4,"ngIf"],[3,"didDismiss","isOpen"],[2,"height","48px"],[1,"loading-container"],["name","crescent"],[1,"error-card"],["name","alert-circle-outline","color","danger"],[1,"table-wrapper"],[4,"ngIf","ngIfElse"],[1,"catastro-grid"],["class","catastro-card",4,"ngFor","ngForOf"],[1,"catastro-card"],[1,"icon-title-row"],["style","color: #1976d2;",3,"icon",4,"ngIf"],["class","ri-tree-fill","style","color: green; font-size: 2rem;",4,"ngIf"],[1,"card-actions-row"],["title","Ver detalle",1,"detalle-icon",2,"color","#1976d2","cursor","pointer",3,"click","icon"],[1,"actions-spacer"],["class","fechapago-label-centered",4,"ngIf"],["title","Alquiler / Valor",1,"alquiler-icon",2,"color","#2ecc40","cursor","pointer",3,"click","icon"],[2,"color","#1976d2",3,"icon"],[1,"ri-tree-fill",2,"color","green","font-size","2rem"],[1,"fechapago-label-centered"],[2,"cursor","pointer",3,"click"],[1,"debug-info"],["slot","end"],[3,"click"],[1,"fechapago-table"],[4,"ngFor","ngForOf"],[2,"text-align","center","margin-top","24px"],["color","primary",3,"click"],[4,"ngIf"]],template:function(a,e){a&1&&(d(0,"ion-content",1)(1,"div",2)(2,"div",3)(3,"div",4)(4,"ion-item",5)(5,"ion-label",6),M(6,"Buscar"),z(),d(7,"ion-input",7),n2("ngModelChange",function(i){return s2(e.searchText,i)||(e.searchText=i),i}),A("ionInput",function(){return e.onSearchChange()}),z()()(),d(8,"div",8)(9,"div",9)(10,"div",10),M(11,"Felipe"),z(),d(12,"ion-checkbox",11),n2("ngModelChange",function(i){return s2(e.showFelipe,i)||(e.showFelipe=i),i}),A("ionChange",function(){return e.onFelipeChange()}),z()(),d(13,"div",9)(14,"div",10),M(15,"Agrario"),z(),d(16,"ion-checkbox",11),n2("ngModelChange",function(i){return s2(e.showAgrario,i)||(e.showAgrario=i),i}),A("ionChange",function(){return e.onAgrarioChange()}),z()(),d(17,"div",9)(18,"div",10),M(19,"Residencial"),z(),d(20,"ion-checkbox",11),n2("ngModelChange",function(i){return s2(e.showResidencial,i)||(e.showResidencial=i),i}),A("ionChange",function(){return e.onResidencialChange()}),z()(),d(21,"div",9)(22,"div",10),M(23,"Pagado"),z(),d(24,"ion-checkbox",11),n2("ngModelChange",function(i){return s2(e.showPagado,i)||(e.showPagado=i),i}),A("ionChange",function(){return e.onPagadoChange()}),z()()()(),_(25,Q5,4,0,"div",12)(26,J5,7,1,"ion-card",13)(27,i7,4,2,"div",14),d(28,"ion-modal",15),A("didDismiss",function(){return e.closeFechapagoModal()}),_(29,n7,23,1,"ng-template"),z(),d(30,"ion-modal",15),A("didDismiss",function(){return e.closeDialog()}),_(31,f7,9,1,"ng-template"),z()(),j(32,"div",16),z()),a&2&&(y("fullscreen",!0),g(7),i2("ngModel",e.searchText),g(5),i2("ngModel",e.showFelipe),g(4),i2("ngModel",e.showAgrario),g(4),i2("ngModel",e.showResidencial),g(4),i2("ngModel",e.showPagado),g(),y("ngIf",e.loading),g(),y("ngIf",e.error&&!e.loading),g(),y("ngIf",!e.loading&&!e.error),g(),y("isOpen",e.showFechapagoModal),g(2),y("isOpen",e.showDialog))},dependencies:[V1,U1,W1,g4,c4,a4,l4,e4,r4,i4,s4,n4,o4,f4,t4,m4,z4,p4,u4,d4,M4,L4,J1,Z1,Q1,Y1,K1,p0,z0,q1,j1,G1],styles:[".fechapago-table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse;margin-top:16px;margin-bottom:8px}.fechapago-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .fechapago-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border:1px solid #ccc;padding:8px 12px;text-align:center;font-size:1rem}.fechapago-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#f5f5f5;font-weight:700}.fechapago-label-centered[_ngcontent-%COMP%]{font-size:1rem;color:navy;font-weight:700;margin:0 8px;text-align:center;letter-spacing:1px;background:#f08080;border-radius:4px;padding:2px 8px;box-shadow:none;display:inline-block}ion-modal[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]{padding:40px 32px 32px;border-radius:18px}ion-modal[_ngcontent-%COMP%]   ion-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{padding:16px 12px}.icon-title-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:6px;height:2.5rem}.icon-title-row[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%], .icon-title-row[_ngcontent-%COMP%]   .ri-tree-fill[_ngcontent-%COMP%]{display:flex;align-items:center;height:2rem;line-height:1;vertical-align:middle;margin-top:2px}.card-actions-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;width:100%}.actions-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.alquiler-icon[_ngcontent-%COMP%]{font-size:1.3rem;margin-right:2px}.detalle-icon[_ngcontent-%COMP%]{font-size:1.4rem;margin-left:4px;transition:color .2s}.detalle-icon[_ngcontent-%COMP%]:hover{color:#1565c0}.buscador-label[_ngcontent-%COMP%]{margin-right:8px}.buscador-input[_ngcontent-%COMP%]{margin-left:8px}.search-section[_ngcontent-%COMP%]{margin-bottom:20px;padding:8px 0}.search-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:16px;margin-bottom:8px}.checks-row[_ngcontent-%COMP%]{display:flex;gap:32px;align-items:flex-start;margin-top:0;justify-content:flex-start}.check-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:4px}.check-label[_ngcontent-%COMP%]{font-size:.95rem;font-weight:500;margin-bottom:2px;text-align:center}.checks-row[_ngcontent-%COMP%]{display:flex;gap:16px;align-items:center;margin-top:8px}.gestion-propiedades-content[_ngcontent-%COMP%]{background:var(--ion-color-light)}.table-section[_ngcontent-%COMP%]{padding:20px 20px 40px;max-width:1200px;margin:0 auto}ion-modal[_ngcontent-%COMP%]{--width: 520px;--height: 560px;min-height:320px;max-height:700px;margin-left:80px}@media (max-width: 500px){ion-modal[_ngcontent-%COMP%]{--width: 95vw;--height: 80vh;margin-left:0}}.loading-container[_ngcontent-%COMP%]{text-align:center;padding:40px;background:#fff;border-radius:12px;box-shadow:0 2px 8px #0000001a}.loading-container[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{margin-bottom:16px}.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin:0}.error-card[_ngcontent-%COMP%]{text-align:center;border-radius:12px;box-shadow:0 2px 8px #0000001a}.error-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:3rem;margin-bottom:16px}.error-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:var(--ion-color-danger);margin-bottom:8px}.error-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--ion-color-medium);margin-bottom:20px}.table-wrapper[_ngcontent-%COMP%]{width:100%;background:#fff;border-radius:12px;box-shadow:0 2px 8px #0000001a;padding:16px;margin-bottom:40px}.catastro-grid[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:16px}.catastro-card[_ngcontent-%COMP%]{flex:1 1 calc(25% - 16px);min-width:280px;max-width:400px;box-sizing:border-box;margin-bottom:16px}.catastro-card[_ngcontent-%COMP%]   ion-card-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:8px}.catastro-card[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .catastro-card[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:1.2rem!important;margin-right:0}.icon-title-row[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], .icon-title-row[_ngcontent-%COMP%]   fa-icon[_ngcontent-%COMP%]{font-size:2rem!important;margin-right:0}.catastro-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:1rem;font-weight:500;margin-bottom:0}.catastro-card[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:.85rem;color:#666}@media (max-width: 1200px){.catastro-card[_ngcontent-%COMP%]{flex:1 1 calc(25% - 16px)}}@media (max-width: 900px){.catastro-card[_ngcontent-%COMP%]{flex:1 1 calc(33.333% - 16px)}}@media (max-width: 600px){.catastro-card[_ngcontent-%COMP%]{flex:1 1 100%}}.debug-info[_ngcontent-%COMP%]{text-align:center;color:var(--ion-color-medium);font-size:.8rem;margin-top:16px;font-style:italic}@media (max-width: 768px){.table-section[_ngcontent-%COMP%]{padding-bottom:60px}}"]})};export{v0 as GestionPropiedadesPage};
