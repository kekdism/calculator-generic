(function(){"use strict";var t={4758:function(t,i,e){var n=e(6369),r=function(){var t=this,i=t._self._c;return i("div",{attrs:{id:"app"}},[i("CalculatorVue")],1)},s=[],a=function(){var t=this,i=t._self._c;return i("div",{staticClass:"backdrop"},[i("div",{staticClass:"calculator"},[i("div",{staticClass:"display"},[i("div",{staticClass:"history"},[t._v(t._s(t.history.value))]),i("div",{staticClass:"screen"},[t._v(t._s(t.screen.value))])]),i("div",{staticClass:"numpad"},t._l(t.buttonList,(function(e,n){return i("div",{key:n,staticClass:"button-placer",style:{gridArea:n}},[i("button",{staticClass:"button",attrs:{type:"button"},on:{click:e.action}},[t._v(" "+t._s(e.text)+" ")])])})),0)])])},o=[],l=(e(7658),e(3781)),c=e(714),u=e(2482),h=e(9614),p=e(2575),Z=e(8829),f=new WeakMap,v=new WeakMap,d=new WeakMap,y=new WeakMap,b=new WeakMap,x=new WeakSet,w=new WeakSet,O=new WeakSet,g=new WeakSet,k=new WeakSet,m=new WeakSet;class C{constructor(t={}){(0,l.Z)(this,m),(0,l.Z)(this,k),(0,l.Z)(this,g),(0,l.Z)(this,O),(0,l.Z)(this,w),(0,l.Z)(this,x),(0,u.Z)(this,"history",{value:""}),(0,u.Z)(this,"screen",{value:"0"}),(0,c.Z)(this,f,{writable:!0,value:0}),(0,c.Z)(this,v,{writable:!0,value:{firstOperand:null,operationToApply:null,secondOperand:null}}),(0,c.Z)(this,d,{writable:!0,value:!1}),(0,c.Z)(this,y,{writable:!0,value:[0,1,2,3,4,5,6,7,8,9]}),(0,c.Z)(this,b,{writable:!0,value:{add:{action:(t,i)=>t+i,text:"+",arity:"binary"},sub:{action:(t,i)=>t-i,text:"-",arity:"binary"},mult:{action:(t,i)=>t*i,text:"*",arity:"binary"},div:{action:(t,i)=>0===i?"Error":t/i,text:"/",arity:"binary"},sqrt:{action:t=>t<0?"Error":Math.sqrt(t),text:"√",arity:"unary"},sign:{action:t=>-1*t,text:"±",arity:"unary"},per:{action:t=>t/100,text:"%",arity:"unary"}}});for(const[i,e]in Object.entries(t))(0,Z.Z)(this,b)[i].text=e}getCalculatorButtons(){const t={};return(0,Z.Z)(this,y).forEach((i=>t[`num${i}`]={action:(0,h.Z)(this,k,W).call(this,i),text:i})),Object.entries((0,Z.Z)(this,b)).forEach((([i,e])=>{t[i]=(0,h.Z)(this,x,_).call(this,e)})),{...t,equal:{action:()=>(0,h.Z)(this,O,A).call(this),text:"="},reset:{action:()=>(0,h.Z)(this,m,j).call(this),text:"C"}}}}function _(t){switch(t.arity){case"unary":return{text:t.text,action:()=>{const i=t.action((0,Z.Z)(this,f));(0,Z.Z)(this,v).operationToApply?(0,Z.Z)(this,v).secondOperand={value:i,text:`${t.text}(${(0,Z.Z)(this,f)})`}:(0,Z.Z)(this,v).firstOperand={value:i,text:`${t.text}(${(0,Z.Z)(this,f)})`},(0,p.Z)(this,f,i),this.screen.value=(0,Z.Z)(this,f).toLocaleString(),(0,h.Z)(this,g,T).call(this)}};case"binary":return{text:t.text,action:()=>((0,p.Z)(this,d,!1),(0,Z.Z)(this,v).operationToApply?(0,Z.Z)(this,f)===(0,Z.Z)(this,v).firstOperand.value?((0,Z.Z)(this,v).operationToApply=t,(0,h.Z)(this,g,T).call(this),void(0,p.Z)(this,f,0)):((0,h.Z)(this,w,S).call(this),(0,Z.Z)(this,v).firstOperand={value:(0,Z.Z)(this,f),text:(0,Z.Z)(this,f).toString()},(0,Z.Z)(this,v).operationToApply=t,(0,h.Z)(this,g,T).call(this),void(0,p.Z)(this,f,0)):((0,Z.Z)(this,v).firstOperand={value:(0,Z.Z)(this,f),text:(0,Z.Z)(this,f).toString()},(0,Z.Z)(this,v).operationToApply=t,(0,h.Z)(this,g,T).call(this),void(0,p.Z)(this,f,0)))}}}function S(){(0,p.Z)(this,d,!0);const{firstOperand:t,operationToApply:i,secondOperand:e}=(0,Z.Z)(this,v),n=i.action(t.value,e.value);(0,p.Z)(this,v,{firstOperand:null,operationToApply:null,secondOperand:null}),(0,p.Z)(this,f,n),this.screen.value=(0,Z.Z)(this,f).toLocaleString()}function A(){(0,Z.Z)(this,v).secondOperand={value:(0,Z.Z)(this,f),text:(0,Z.Z)(this,f).toString()},(0,h.Z)(this,g,T).call(this,"="),(0,h.Z)(this,w,S).call(this)}function T(...t){const i=[];for(let e in(0,Z.Z)(this,v))i.push((0,Z.Z)(this,v)[e]?.text);this.history.value=[...i,...t].join(" ")}function W(t){return()=>{((0,Z.Z)(this,d)||"Error"===this.screen.value)&&((0,p.Z)(this,d,!1),(0,h.Z)(this,m,j).call(this));const i=(0,Z.Z)(this,f).toString()+t.toString();i.length>10||((0,p.Z)(this,f,Number(i)),this.screen.value=(0,Z.Z)(this,f).toLocaleString())}}function j(){this.history.value="",this.screen.value=0,(0,p.Z)(this,f,0),(0,p.Z)(this,v,{firstOperand:null,operationToApply:null,secondOperand:null})}var M=new C,E={name:"calculator-component",data:()=>({history:M.history,screen:M.screen}),computed:{mockArray(){const t=[];for(let i=1;i<21;i++)t.push(i);return t},buttonList(){return M.getCalculatorButtons()},gridAreaValue(t){return"but("+t+")"}},methods:{increase(){this.screen+=1}}},$=E,L=e(1001),P=(0,L.Z)($,a,o,!1,null,null,null),q=P.exports,V={name:"Calculator-app",components:{CalculatorVue:q}},B=V,F=(0,L.Z)(B,r,s,!1,null,null,null),N=F.exports;n.ZP.config.productionTip=!1,new n.ZP({render:t=>t(N)}).$mount("#app")}},i={};function e(n){var r=i[n];if(void 0!==r)return r.exports;var s=i[n]={exports:{}};return t[n](s,s.exports,e),s.exports}e.m=t,function(){var t=[];e.O=function(i,n,r,s){if(!n){var a=1/0;for(u=0;u<t.length;u++){n=t[u][0],r=t[u][1],s=t[u][2];for(var o=!0,l=0;l<n.length;l++)(!1&s||a>=s)&&Object.keys(e.O).every((function(t){return e.O[t](n[l])}))?n.splice(l--,1):(o=!1,s<a&&(a=s));if(o){t.splice(u--,1);var c=r();void 0!==c&&(i=c)}}return i}s=s||0;for(var u=t.length;u>0&&t[u-1][2]>s;u--)t[u]=t[u-1];t[u]=[n,r,s]}}(),function(){e.n=function(t){var i=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(i,{a:i}),i}}(),function(){e.d=function(t,i){for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,i){return Object.prototype.hasOwnProperty.call(t,i)}}(),function(){var t={143:0};e.O.j=function(i){return 0===t[i]};var i=function(i,n){var r,s,a=n[0],o=n[1],l=n[2],c=0;if(a.some((function(i){return 0!==t[i]}))){for(r in o)e.o(o,r)&&(e.m[r]=o[r]);if(l)var u=l(e)}for(i&&i(n);c<a.length;c++)s=a[c],e.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return e.O(u)},n=self["webpackChunkcalculator_generic"]=self["webpackChunkcalculator_generic"]||[];n.forEach(i.bind(null,0)),n.push=i.bind(null,n.push.bind(n))}();var n=e.O(void 0,[998],(function(){return e(4758)}));n=e.O(n)})();
//# sourceMappingURL=app.a3265946.js.map