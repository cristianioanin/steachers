"use strict";(self.webpackChunksteachers=self.webpackChunksteachers||[]).push([[583],{50:(w,_,c)=>{c.r(_),c.d(_,{ExercisesModule:()=>F});var p=c(895),r=c(433),m=c(298),u=(()=>{return(n=u||(u={})).UNDEFINED="\u{1f615}",n.ADD=" + ",n.SUBTRACT=" - ",n.MULTIPLY=" x ",n.DIVIDE=" : ",u;var n})(),a=c(990);function E(n=1,i=0){return Math.floor(Math.random()*(n+1))+i}var t=c(256),h=c(949);function S(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.validateAttempt())}),t._uU(1," Verific\u0103 "),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("disabled",e.currentState===e.ExerciseStateEnum.NEW&&e.form.pristine||e.form.invalid)}}function T(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.generateNewExercise())}),t._uU(1," Urm\u0103torul exerci\u021biu "),t.qZA()}}let l=(()=>{class n{constructor(e){this.historyService=e,this.ExerciseStateEnum=a.R,this.operands=[],this.operandsCount=2,this.maxDigits=2,this.expectedResult=null,this.currentState=a.R.NEW,this.attemptStateMap=new Map([[a.R.NEW,""],[a.R.CORRECT,"Corect! \u{1f63b}"],[a.R.WRONG,"Gre\u0219it! \u{1f640}"]]),this.operationSign=u.UNDEFINED,this.maxNumber=null,this.conditionToPass=null,this.form=new r.cw({response:new r.NI(null,r.kI.required)})}ngOnInit(){this.generateNewExercise()}calcResultForCurrentOperands(){return NaN}validateAttempt(){const e=Number(this.form.controls.response.value);this.currentState=e===this.expectedResult?a.R.CORRECT:a.R.WRONG,this.historyService.logExercise$.next({operands:this.operands,operator:this.operationSign,result:e,state:this.currentState})}generateNewExercise(){if(this.operands=[],this.form.reset(),this.currentState=a.R.NEW,this.operandsCount>1){const e=this.maxNumber??function b(n){return Math.pow(10,n)-1}(this.maxDigits);let o=this.operandsCount;for(;o>0;)this.operands.push(E(e)),o--;const s=this.calcResultForCurrentOperands();return console.log("potential res: ",s),null===this.conditionToPass||this.conditionToPass(s)?void(this.expectedResult=s):this.generateNewExercise()}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.q))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-math-operation-base"]],decls:12,vars:5,consts:[[3,"formGroup"],[1,"exercise__expression"],["type","number","formControlName","response","placeholder","???",1,"exercise__response"],[1,"exercise__control"],[3,"disabled","click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"disabled","click"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5," = "),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"div",3),t.YNc(8,S,2,1,"button",4),t.YNc(9,T,2,0,"button",5),t.qZA()(),t.TgZ(10,"div"),t._uU(11),t.qZA()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(3),t.Oqu(o.operands.join(o.operationSign)),t.xp6(5),t.Q6J("ngIf",o.currentState===o.ExerciseStateEnum.NEW),t.xp6(1),t.Q6J("ngIf",o.currentState!==o.ExerciseStateEnum.NEW),t.xp6(2),t.Oqu(o.attemptStateMap.get(o.currentState)))},dependencies:[p.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u],styles:[".exercise__control[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),n})();function Z(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.validateAttempt())}),t._uU(1," Verific\u0103 "),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("disabled",e.currentState===e.ExerciseStateEnum.NEW&&e.form.pristine||e.form.invalid)}}function N(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.generateNewExercise())}),t._uU(1," Urm\u0103torul exerci\u021biu "),t.qZA()}}let d=(()=>{class n extends l{constructor(){super(...arguments),this.maxDigits=3,this.operationSign=u.ADD,this.conditionToPass=e=>e<1001}calcResultForCurrentOperands(){return this.operands.reduce((e,o)=>e+o,0)}}return n.\u0275fac=function(){let i;return function(o){return(i||(i=t.n5z(n)))(o||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["app-addition"]],features:[t.qOj],decls:12,vars:5,consts:[[3,"formGroup"],[1,"exercise__expression"],["type","number","formControlName","response","placeholder","???",1,"exercise__response"],[1,"exercise__control"],[3,"disabled","click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"disabled","click"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5," = "),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"div",3),t.YNc(8,Z,2,1,"button",4),t.YNc(9,N,2,0,"button",5),t.qZA()(),t.TgZ(10,"div"),t._uU(11),t.qZA()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(3),t.Oqu(o.operands.join(o.operationSign)),t.xp6(5),t.Q6J("ngIf",o.currentState===o.ExerciseStateEnum.NEW),t.xp6(1),t.Q6J("ngIf",o.currentState!==o.ExerciseStateEnum.NEW),t.xp6(2),t.Oqu(o.attemptStateMap.get(o.currentState)))},dependencies:[p.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u],styles:[".exercise__control[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),n})();function v(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.validateAttempt())}),t._uU(1," Verific\u0103 "),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("disabled",e.currentState===e.ExerciseStateEnum.NEW&&e.form.pristine||e.form.invalid)}}function A(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.generateNewExercise())}),t._uU(1," Urm\u0103torul exerci\u021biu "),t.qZA()}}let f=(()=>{class n extends l{constructor(){super(...arguments),this.maxNumber=100,this.operationSign=u.DIVIDE,this.conditionToPass=e=>0!==this.operands[1]&&e===parseInt(e.toString())}calcResultForCurrentOperands(){let e=this.operands[0];for(let o=1;o<this.operands.length;++o)e/=this.operands[o];return e}}return n.\u0275fac=function(){let i;return function(o){return(i||(i=t.n5z(n)))(o||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["app-division"]],features:[t.qOj],decls:12,vars:5,consts:[[3,"formGroup"],[1,"exercise__expression"],["type","number","formControlName","response","placeholder","???",1,"exercise__response"],[1,"exercise__control"],[3,"disabled","click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"disabled","click"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5," = "),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"div",3),t.YNc(8,v,2,1,"button",4),t.YNc(9,A,2,0,"button",5),t.qZA()(),t.TgZ(10,"div"),t._uU(11),t.qZA()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(3),t.Oqu(o.operands.join(o.operationSign)),t.xp6(5),t.Q6J("ngIf",o.currentState===o.ExerciseStateEnum.NEW),t.xp6(1),t.Q6J("ngIf",o.currentState!==o.ExerciseStateEnum.NEW),t.xp6(2),t.Oqu(o.attemptStateMap.get(o.currentState)))},dependencies:[p.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u],styles:[".exercise__control[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),n})();function M(n,i){if(1&n&&(t.TgZ(0,"li")(1,"a",3),t._uU(2),t.qZA()()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("routerLink",e.routerLink),t.xp6(1),t.Oqu(e.name)}}let x=(()=>{class n{constructor(){this.operationsRoutes=[{name:"Adun\u0103ri",routerLink:"add"},{name:"Sc\u0103deri",routerLink:"subtract"},{name:"\xcenmul\u021biri",routerLink:"multiply"},{name:"\xcemp\u0103r\u021biri",routerLink:"divide"}]}}return n.\u0275fac=function(e){return new(e||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-exercises"]],decls:4,vars:1,consts:[[1,"navbar"],[1,"navbar-list"],[4,"ngFor","ngForOf"],[1,"navbar-link",3,"routerLink"]],template:function(e,o){1&e&&(t.TgZ(0,"nav",0)(1,"ul",1),t.YNc(2,M,3,2,"li",2),t.qZA()(),t._UZ(3,"router-outlet")),2&e&&(t.xp6(2),t.Q6J("ngForOf",o.operationsRoutes))},dependencies:[p.sg,m.lC,m.yS]}),n})();function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.validateAttempt())}),t._uU(1," Verific\u0103 "),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("disabled",e.currentState===e.ExerciseStateEnum.NEW&&e.form.pristine||e.form.invalid)}}function q(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.generateNewExercise())}),t._uU(1," Urm\u0103torul exerci\u021biu "),t.qZA()}}let g=(()=>{class n extends l{constructor(){super(...arguments),this.maxNumber=10,this.operationSign=u.MULTIPLY}calcResultForCurrentOperands(){return this.operands.reduce((e,o)=>e*o,1)}}return n.\u0275fac=function(){let i;return function(o){return(i||(i=t.n5z(n)))(o||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["app-multiplication"]],features:[t.qOj],decls:12,vars:5,consts:[[3,"formGroup"],[1,"exercise__expression"],["type","number","formControlName","response","placeholder","???",1,"exercise__response"],[1,"exercise__control"],[3,"disabled","click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"disabled","click"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5," = "),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"div",3),t.YNc(8,J,2,1,"button",4),t.YNc(9,q,2,0,"button",5),t.qZA()(),t.TgZ(10,"div"),t._uU(11),t.qZA()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(3),t.Oqu(o.operands.join(o.operationSign)),t.xp6(5),t.Q6J("ngIf",o.currentState===o.ExerciseStateEnum.NEW),t.xp6(1),t.Q6J("ngIf",o.currentState!==o.ExerciseStateEnum.NEW),t.xp6(2),t.Oqu(o.attemptStateMap.get(o.currentState)))},dependencies:[p.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u],styles:[".exercise__control[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),n})();function O(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",6),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.validateAttempt())}),t._uU(1," Verific\u0103 "),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("disabled",e.currentState===e.ExerciseStateEnum.NEW&&e.form.pristine||e.form.invalid)}}function k(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",7),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.generateNewExercise())}),t._uU(1," Urm\u0103torul exerci\u021biu "),t.qZA()}}const y=[{path:"",component:x},{path:"add",component:d},{path:"subtract",component:(()=>{class n extends l{constructor(){super(...arguments),this.maxDigits=3,this.operationSign=u.SUBTRACT,this.conditionToPass=e=>e>=0}calcResultForCurrentOperands(){let e=this.operands[0];for(let o=1;o<this.operands.length;++o)e-=this.operands[o];return e}}return n.\u0275fac=function(){let i;return function(o){return(i||(i=t.n5z(n)))(o||n)}}(),n.\u0275cmp=t.Xpm({type:n,selectors:[["app-subtraction"]],features:[t.qOj],decls:12,vars:5,consts:[[3,"formGroup"],[1,"exercise__expression"],["type","number","formControlName","response","placeholder","???",1,"exercise__response"],[1,"exercise__control"],[3,"disabled","click",4,"ngIf"],[3,"click",4,"ngIf"],[3,"disabled","click"],[3,"click"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"span"),t._uU(3),t.qZA(),t.TgZ(4,"span"),t._uU(5," = "),t.qZA(),t._UZ(6,"input",2),t.qZA(),t.TgZ(7,"div",3),t.YNc(8,O,2,1,"button",4),t.YNc(9,k,2,0,"button",5),t.qZA()(),t.TgZ(10,"div"),t._uU(11),t.qZA()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(3),t.Oqu(o.operands.join(o.operationSign)),t.xp6(5),t.Q6J("ngIf",o.currentState===o.ExerciseStateEnum.NEW),t.xp6(1),t.Q6J("ngIf",o.currentState!==o.ExerciseStateEnum.NEW),t.xp6(2),t.Oqu(o.attemptStateMap.get(o.currentState)))},dependencies:[p.O5,r._Y,r.Fj,r.wV,r.JJ,r.JL,r.sg,r.u],styles:[".exercise__control[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}"]}),n})()},{path:"multiply",component:g},{path:"divide",component:f}];let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(y)]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[p.ez,m.Bz,r.UX,U]}),n})()}}]);