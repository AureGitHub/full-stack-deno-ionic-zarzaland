"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3153],{3153:(z,c,a)=>{a.r(c),a.d(c,{FinanzasPageModule:()=>P});var d=a(177),m=a(4341),r=a(8974),s=a(8464),p=a(9393),f=a(8986),u=a(467);const h=[{title:"Bolsa",icon:"bar-chart-outline",path:"/finanzas/bolsa/",key:"bolsa",roles:[s.Role.god]},{title:"Dep\xf3sitos, letras..",remixicon:"ri-bank-fill",path:"/finanzas/fondo/",key:"fondo",roles:[s.Role.god]},{title:"Estad\xedsticas",remixicon:"ri-bar-chart-grouped-line",path:"/finanzas/estadisticas/",key:"estadisticas",roles:[s.Role.god]}];var n=a(4438);let g=(()=>{var e;class o extends s.BasePage{constructor(t){super(t),this.basePageService=t,this.columns=[{name:"Descripci\xf3n",prop:"descripcion",type:"text",OrderInit:"ASC"}],this.entityName="finanzas/empresa"}ngOnInit(){var t=this;return(0,u.A)(function*(){t.Init()})()}}return(e=o).\u0275fac=function(t){return new(t||e)(n.rXU(s.BasePageService))},e.\u0275cmp=n.VBU({type:e,selectors:[["gestor-empresas"]],features:[n.Vt3],decls:4,vars:7,consts:[[1,"router-outlet"],[3,"loadOnInit","canAddEntity","canUpdateEntity","title","entityName","columns","refresh"]],template:function(t,i){1&t&&(n.j41(0,"ion-grid",0)(1,"ion-row")(2,"ion-col"),n.nrm(3,"my-table",1),n.k0s()()()),2&t&&(n.R7$(3),n.Y8G("loadOnInit",!0)("canAddEntity",i.user.isAdmin)("canUpdateEntity",i.user.isAdmin)("title","Empresas")("entityName",i.entityName)("columns",i.columns)("refresh",i.tableRefresh))},dependencies:[r.hU,r.lO,r.ln,s.MyTableComponent]}),o})();function y(e,o){1&e&&(n.j41(0,"ion-row")(1,"ion-col"),n.nrm(2,"gestor-empresas"),n.k0s()())}let v=(()=>{var e;class o extends s.BasePage{constructor(t){super(t),this.basePageService=t,this.menuItems=h,this.addEmpresa=!1,this.entityName="accion"}ngOnInit(){return(0,u.A)(function*(){})()}}return(e=o).\u0275fac=function(t){return new(t||e)(n.rXU(s.BasePageService))},e.\u0275cmp=n.VBU({type:e,selectors:[["app-finanzas"]],features:[n.Vt3],decls:9,vars:3,consts:[[3,"menuItems"],["shape","round","size","small",3,"click","color"],["slot","start","name","business-outline"],[4,"ngIf"]],template:function(t,i){1&t&&(n.j41(0,"ion-grid")(1,"ion-row")(2,"ion-col"),n.nrm(3,"app-menu-buttons",0),n.k0s()(),n.j41(4,"ion-row")(5,"ion-col")(6,"ion-button",1),n.bIt("click",function(){return i.addEmpresa=!i.addEmpresa}),n.nrm(7,"ion-icon",2),n.k0s()()(),n.DNE(8,y,3,0,"ion-row",3),n.k0s()),2&t&&(n.R7$(3),n.Y8G("menuItems",i.menuItems),n.R7$(3),n.Y8G("color",i.addEmpresa?"warning":"success"),n.R7$(2),n.Y8G("ngIf",i.addEmpresa))},dependencies:[d.bT,r.Jm,r.hU,r.lO,r.iq,r.ln,s.MenuButtonsComponent,g]}),o})();var C=a(1547);let E=(()=>{var e;class o{}return(e=o).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[d.MD,m.YN,m.X1,r.bv,s.SharedComponentsModule,C.bG]}),o})();const M=[{path:"",component:v},{path:"bolsa",loadChildren:()=>a.e(7890).then(a.bind(a,7890)).then(e=>e.BolsaPageModule),canActivate:[s.RolGuard]},{path:"fondo",loadChildren:()=>a.e(215).then(a.bind(a,215)).then(e=>e.FondoPageModule),canActivate:[s.RolGuard]},{path:"estadisticas",loadChildren:()=>a.e(2106).then(a.bind(a,2106)).then(e=>e.EstadisticasPageModule),canActivate:[s.RolGuard]}];let P=(()=>{var e;class o{}return(e=o).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[d.MD,m.YN,m.X1,r.bv,f.iI.forChild(M),s.SharedComponentsModule,s.MenuButtonsModule,p.ft,E]}),o})()}}]);