(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{pezr:function(t,e,n){"use strict";n.r(e),n.d(e,"AutoModule",function(){return T});var s=n("ofXK"),o=n("tyNb"),r=n("fXoL"),a=n("PcbD"),c=n("+7WK"),i=n("upny"),l=n("rAk/"),u=n("2Vo4"),h=n("G4K7"),b=n("AytR");const{production:p}=b.a;let d=(()=>{class t{constructor(){this._histories=Object(l.a)(),this._chances={},this._chosenNumbers$=new u.a([]),this._stepPercentage=1/45}get chosenNumbers$(){return this._chosenNumbers$.asObservable()}chooseNumbers(){this._histories=Object(l.a)();const t=[];for(;t.length<6;){this._calculateChances();const e=this._chooseOne();e&&(this._removeChosenOne(e),t.push(e))}p||this._calculateCountsForRanks(this._createChosenNumberMap(t))._5thRank.count<9?this._chosenNumbers$.next(t):setTimeout(()=>{this.chooseNumbers()})}_calculateChances(){const t={};let e=0;this._histories.forEach(n=>{[...n.numbers].forEach(n=>{n&&(t[n]||(t[n]=0),t[n]++,e++)})}),Object.keys(t).forEach(n=>{const s=parseInt(n,void 0);t[s]=t[s]/e,p&&(t[s]=this._stepPercentage+(this._stepPercentage-t[s])),t[s-1]&&(t[s]+=t[s-1])}),this._chances=t}_chooseOne(){const t=Math.random(),e=Object.keys(this._chances).find(e=>{const n=parseInt(e,void 0),s=this._chances[n-1]||0,o=this._chances[n];if(s&&o&&t>s&&t<=o)return!0});if(e)return parseInt(e,void 0)}_removeChosenOne(t){this._histories.forEach(e=>{e.numbers=e.numbers.filter(e=>e!==t),t===e.bonus&&delete e.bonus})}_createChosenNumberMap(t){const e={};return t.forEach(t=>{e[t]=!0}),e}_calculateCountsForRanks(t={}){const e={_1stRank:new h.b(1),_2ndRank:new h.b(2),_3rdRank:new h.b(3),_4thRank:new h.b(4),_5thRank:new h.b(5)};return Object(l.a)().forEach(n=>{this._distributeRanks(e,n,t)}),e}_distributeRanks(t,e,n={}){switch(e.numbers.filter(t=>n[t]).length){case 6:t._1stRank.count++;break;case 5:n[e.bonus]?t._2ndRank.count++:t._3rdRank.count++;break;case 4:t._4thRank.count++;break;case 3:t._5thRank.count++}return t}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Cb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var f=n("fsCM");function _(t,e){if(1&t&&(r.Kb(0,"app-lotto-ball",3),r.jc(1),r.Jb()),2&t){const t=e.$implicit;r.Yb("color",t.color),r.wb(1),r.kc(" ",t.value," ")}}let m=(()=>{class t{constructor(t,e){this.lottoService=t,this.subscriptionService=e,this.rolling=new r.n,this.ready=new r.n,this.chosenNumbers=[],this.lottoBalls=[new i.a,new i.a,new i.a,new i.a,new i.a,new i.a],this._delay=700,this._orderedValues=[],this._ballIndex=0}ngOnInit(){this._subscribeChosenNumbers(),this._subscribeBallStopped()}ngAfterViewInit(){this.roll()}_subscribeChosenNumbers(){const t=this.lottoService.chosenNumbers$.subscribe(t=>{t.length>=6&&(this.chosenNumbers=t,this._orderTheChosenValues(),this._graduallySetTheValues())});this.subscriptionService.store("_subscribeChosenNumbers",t)}_orderTheChosenValues(){this._orderedValues=this.chosenNumbers.sort((t,e)=>t-e)}roll(){this.rolling.emit(),this._rollTheBalls(),this._ballIndex=0,this.lottoService.chooseNumbers()}_rollTheBalls(){this.lottoBalls.forEach(t=>t.roll(!0))}_graduallySetTheValues(){clearTimeout(this._timer),this._timer=setTimeout(()=>{const t=this.lottoBalls[this._ballIndex],e=this._orderedValues[this._ballIndex];t&&e&&t.stop(e)},this._delay)}_subscribeBallStopped(){const t=this.lottoBalls.map((t,e)=>t.stopped.subscribe(()=>{this._ballIndex=e+1,this._ballIndex<6?this._graduallySetTheValues():this.ready.emit(this._orderedValues)}));this.subscriptionService.store("_subscribeBallStopped",t)}}return t.\u0275fac=function(e){return new(e||t)(r.Gb(d),r.Gb(a.a))},t.\u0275cmp=r.Ab({type:t,selectors:[["app-auto-picker"]],viewQuery:function(t,e){if(1&t&&r.lc(c.a,!0),2&t){let t;r.ac(t=r.Sb())&&(e.lottoBallList=t)}},outputs:{rolling:"rolling",ready:"ready"},features:[r.vb([a.a])],decls:4,vars:1,consts:[[1,"lotto-ball-container"],[3,"color",4,"ngFor","ngForOf"],[3,"click"],[3,"color"]],template:function(t,e){1&t&&(r.Kb(0,"div",0),r.hc(1,_,2,2,"app-lotto-ball",1),r.Jb(),r.Kb(2,"app-lotto-button",2),r.Rb("click",function(){return e.roll()}),r.jc(3," \uc7ac\ucd94\ucca8\n"),r.Jb()),2&t&&(r.wb(1),r.Yb("ngForOf",e.lottoBalls))},directives:[s.h,f.a,c.a],styles:["[_nghost-%COMP%]{display:flex;align-items:center;flex-direction:column;flex-wrap:wrap;box-sizing:border-box;padding:45px 0}[_nghost-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto}.lotto-ball-container[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;flex-wrap:wrap}.lotto-ball-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto}@media screen and (max-width:600px){.lotto-ball-container[_ngcontent-%COMP%]{display:flex;align-items:flex-start;justify-content:center;flex-wrap:wrap;max-width:170px}.lotto-ball-container[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:0 0 auto}}app-lotto-button[_ngcontent-%COMP%]{margin-top:45px}app-lotto-ball[_ngcontent-%COMP%]{width:50px}@media screen and (max-width:600px){app-lotto-ball[_ngcontent-%COMP%]:nth-child(n+4){margin-top:10px}}app-lotto-ball[_ngcontent-%COMP%] + app-lotto-ball[_ngcontent-%COMP%]{margin-left:10px}@media screen and (max-width:600px){app-lotto-ball[_ngcontent-%COMP%] + app-lotto-ball[_ngcontent-%COMP%]:nth-child(4){margin-left:0}}"]}),t})();function w(t,e){if(1&t&&r.Hb(0,"app-lotto-result",2),2&t){const t=r.Vb();r.Yb("chosenNumbers",t.chosenNumbers)}}const y=[{path:"",component:(()=>{class t{constructor(){this.chosenNumbers=[],this.showResult=!1}ngOnInit(){}onRollingStart(){this.showResult=!1,this.chosenNumbers=[]}onBallsReady(t){this.chosenNumbers=t,this.showResult=!0}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Ab({type:t,selectors:[["app-auto"]],decls:2,vars:1,consts:[[3,"ready","rolling"],[3,"chosenNumbers",4,"ngIf"],[3,"chosenNumbers"]],template:function(t,e){1&t&&(r.Kb(0,"app-auto-picker",0),r.Rb("ready",function(t){return e.onBallsReady(t)})("rolling",function(){return e.onRollingStart()}),r.Jb(),r.hc(1,w,1,1,"app-lotto-result",1)),2&t&&(r.wb(1),r.Yb("ngIf",e.showResult))},directives:[m,s.i,h.a],styles:["[_nghost-%COMP%]{display:block;width:100%}"]}),t})()}];let g=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[o.g.forChild(y)],o.g]}),t})();var C=n("YEBS"),x=n("//Jv");let v=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[s.b]]}),t})(),k=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[s.b,v]]}),t})(),O=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[s.b]]}),t})();n("HDdC"),n("DH7j"),n("lJxs"),n("XoHu"),n("Cfvw");let R=(()=>{class t{constructor(){this._accessors=[]}add(t,e){this._accessors.push([t,e])}remove(t){for(let e=this._accessors.length-1;e>=0;--e)if(this._accessors[e][1]===t)return void this._accessors.splice(e,1)}select(t){this._accessors.forEach(e=>{this._isSameGroup(e,t)&&e[1]!==t&&e[1].fireUncheck(t.value)})}_isSameGroup(t,e){return!!t[0].control&&t[0]._parent===e._control._parent&&t[1].name===e.name}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Cb({token:t,factory:t.\u0275fac}),t})(),j=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)}}),t})(),N=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},providers:[R],imports:[j]}),t})(),E=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[s.b]]}),t})(),M=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[s.b]]}),t})(),P=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[s.b]]}),t})(),S=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[s.b,k,O,v,N,E,M,P]]}),t})(),D=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[s.b]]}),t})(),I=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[s.b]]}),t})(),B=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[s.b,C.a,x.a,S,D,k,N,I]]}),t})();var V=n("Uwnq");let T=(()=>{class t{}return t.\u0275mod=r.Eb({type:t}),t.\u0275inj=r.Db({factory:function(e){return new(e||t)},imports:[[s.b,g,B,V.a]]}),t})()}}]);