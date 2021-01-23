(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{pezr:function(t,e,s){"use strict";s.r(e),s.d(e,"AutoModule",function(){return C});var n=s("ofXK"),o=s("tyNb"),r=s("fXoL"),l=s("PcbD"),i=s("+7WK"),a=s("upny"),c=s("rAk/"),h=s("2Vo4");let u=(()=>{class t{constructor(){this._numbers=Object(c.b)(),this._histories=Object(c.a)(),this._chances={},this._chosenNumbers$=new h.a([]),this._stepPercentage=1/45}get chosenNumbers$(){return this._chosenNumbers$.asObservable()}chooseNumbers(){this._numbers=Object(c.b)(),this._histories=Object(c.a)();const t=[];for(;t.length<6;){this._calculateChances();const e=this._chooseOne();e&&(this._removeChosenOne(e),t.push(e))}this._chosenNumbers$.next(t)}_calculateChances(){const t={};let e=0;this._histories.forEach(s=>{s.numbers.forEach(s=>{t[s]||(t[s]=0),t[s]++,e++})}),Object.keys(t).forEach(s=>{const n=parseInt(s,void 0);t[n]=t[n]/e,t[n]=this._stepPercentage+(this._stepPercentage-t[n]),t[n-1]&&(t[n]+=t[n-1])}),this._chances=t}_chooseOne(){const t=Math.random(),e=Object.keys(this._chances).find(e=>{const s=parseInt(e,void 0),n=this._chances[s-1]||0,o=this._chances[s];if(n&&o&&t>n&&t<=o)return!0});if(e)return parseInt(e,void 0)}_removeChosenOne(t){this._histories.forEach(e=>{e.numbers=e.numbers.filter(e=>e!==t)})}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Ab({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=s("fsCM");function p(t,e){if(1&t&&(r.Ib(0,"app-lotto-ball",3),r.gc(1),r.Hb()),2&t){const t=e.$implicit;r.Vb("color",t.color),r.ub(1),r.hc(" ",t.value," ")}}let d=(()=>{class t{constructor(t,e){this.lottoService=t,this.subscriptionService=e,this.rolling=new r.n,this.ready=new r.n,this.chosenNumbers=[],this.lottoBalls=[new a.a,new a.a,new a.a,new a.a,new a.a,new a.a],this._delay=700,this._orderedValues=[],this._ballIndex=0}ngOnInit(){this._subscribeChosenNumbers(),this._subscribeBallStopped()}ngAfterViewInit(){this.roll()}_subscribeChosenNumbers(){const t=this.lottoService.chosenNumbers$.subscribe(t=>{t.length>=6&&(this.chosenNumbers=t,this._orderTheChosenValues(),this._graduallySetTheValues())});this.subscriptionService.store("_subscribeChosenNumbers",t)}_orderTheChosenValues(){this._orderedValues=this.chosenNumbers.sort((t,e)=>t-e)}roll(){this.rolling.emit(),this._rollTheBalls(),this._ballIndex=0,this.lottoService.chooseNumbers()}_rollTheBalls(){this.lottoBalls.forEach(t=>t.roll(!0))}_graduallySetTheValues(){clearTimeout(this._timer),this._timer=setTimeout(()=>{const t=this.lottoBalls[this._ballIndex],e=this._orderedValues[this._ballIndex];t&&e&&t.stop(e)},this._delay)}_subscribeBallStopped(){const t=this.lottoBalls.map((t,e)=>t.stopped.subscribe(()=>{this._ballIndex=e+1,this._ballIndex<6?this._graduallySetTheValues():this.ready.emit(this._orderedValues)}));this.subscriptionService.store("_subscribeBallStopped",t)}}return t.\u0275fac=function(e){return new(e||t)(r.Eb(u),r.Eb(l.a))},t.\u0275cmp=r.yb({type:t,selectors:[["app-auto-picker"]],viewQuery:function(t,e){if(1&t&&r.ic(i.a,!0),2&t){let t;r.Xb(t=r.Pb())&&(e.lottoBallList=t)}},outputs:{rolling:"rolling",ready:"ready"},features:[r.tb([l.a])],decls:4,vars:1,consts:[[1,"lotto-ball-container"],[3,"color",4,"ngFor","ngForOf"],[3,"click"],[3,"color"]],template:function(t,e){1&t&&(r.Ib(0,"div",0),r.ec(1,p,2,2,"app-lotto-ball",1),r.Hb(),r.Ib(2,"app-lotto-button",2),r.Ob("click",function(){return e.roll()}),r.gc(3," \uc7ac\ucd94\ucca8\n"),r.Hb()),2&t&&(r.ub(1),r.Vb("ngForOf",e.lottoBalls))},directives:[n.h,b.a,i.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;flex-direction:column;flex-wrap:wrap;box-sizing:border-box;padding:45px 0}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto}.lotto-ball-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.lotto-ball-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto}@media screen and (max-width:600px){.lotto-ball-container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;flex-wrap:wrap;max-width:170px}.lotto-ball-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto}}app-lotto-button[_ngcontent-%COMP%]{margin-top:45px}app-lotto-ball[_ngcontent-%COMP%]{width:50px}@media screen and (max-width:600px){app-lotto-ball[_ngcontent-%COMP%]:nth-child(n+4){margin-top:10px}}app-lotto-ball[_ngcontent-%COMP%] + app-lotto-ball[_ngcontent-%COMP%]{margin-left:10px}@media screen and (max-width:600px){app-lotto-ball[_ngcontent-%COMP%] + app-lotto-ball[_ngcontent-%COMP%]:nth-child(4){margin-left:0}}"]}),t})();var _=s("G4K7");function f(t,e){if(1&t&&r.Fb(0,"app-lotto-result",2),2&t){const t=r.Sb();r.Vb("chosenNumbers",t.chosenNumbers)}}const m=[{path:"",component:(()=>{class t{constructor(){this.chosenNumbers=[],this.showResult=!1}ngOnInit(){}onRollingStart(){this.showResult=!1,this.chosenNumbers=[]}onBallsReady(t){this.chosenNumbers=t,this.showResult=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.yb({type:t,selectors:[["app-auto"]],decls:2,vars:1,consts:[[3,"ready","rolling"],[3,"chosenNumbers",4,"ngIf"],[3,"chosenNumbers"]],template:function(t,e){1&t&&(r.Ib(0,"app-auto-picker",0),r.Ob("ready",function(t){return e.onBallsReady(t)})("rolling",function(){return e.onRollingStart()}),r.Hb(),r.ec(1,f,1,1,"app-lotto-result",1)),2&t&&(r.ub(1),r.Vb("ngIf",e.showResult))},directives:[d,n.i,_.a],styles:["[_nghost-%COMP%]{display:block;width:100%}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=r.Cb({type:t}),t.\u0275inj=r.Bb({factory:function(e){return new(e||t)},imports:[[o.g.forChild(m)],o.g]}),t})();var w=s("YEBS"),y=s("//Jv");let O=(()=>{class t{}return t.\u0275mod=r.Cb({type:t}),t.\u0275inj=r.Bb({factory:function(e){return new(e||t)},imports:[[n.b,w.a,y.a]]}),t})();var x=s("Uwnq");let C=(()=>{class t{}return t.\u0275mod=r.Cb({type:t}),t.\u0275inj=r.Bb({factory:function(e){return new(e||t)},imports:[[n.b,g,O,x.a]]}),t})()}}]);