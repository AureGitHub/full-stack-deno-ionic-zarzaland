"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5009],{5009:(v,m,n)=>{n.r(m),n.d(m,{CasaPagePageModule:()=>P});var u=n(177),c=n(4341),l=n(4742),e=n(8464),r=n(9393),h=n(8986),C=n(467);const g=[{title:"Compras",icon:"cart-outline",path:"/casa/compras/",key:"compras"},{title:"Gastos",icon:"cash-outline",path:"/casa/gastos/",key:"gastos",roles:[e.Role.admin]},{title:"Agenda",remixicon:"ri-calendar-schedule-line",path:"/casa/agenda/",key:"agenda"}];var t=n(4438);const i=[{path:"",component:(()=>{var a;class s extends e.BasePage{constructor(o){super(o),this.basePageService=o,this.menuItems=g,this.entityName="accion"}ngOnInit(){return(0,C.A)(function*(){})()}}return(a=s).\u0275fac=function(o){return new(o||a)(t.rXU(e.BasePageService))},a.\u0275cmp=t.VBU({type:a,selectors:[["app-casa"]],features:[t.Vt3],decls:6,vars:1,consts:[[3,"menuItems"]],template:function(o,p){1&o&&(t.j41(0,"ion-grid")(1,"ion-row")(2,"ion-col"),t.nrm(3,"app-menu-buttons",0),t.k0s()(),t.j41(4,"ion-row"),t.nrm(5,"ion-col"),t.k0s()()),2&o&&(t.R7$(3),t.Y8G("menuItems",p.menuItems))},dependencies:[l.hU,l.lO,l.ln,e.MenuButtonsComponent]}),s})()},{path:"compras",loadChildren:()=>n.e(6171).then(n.bind(n,6171)).then(a=>a.CompraPageModule),canActivate:[e.RolGuard]},{path:"gastos",loadChildren:()=>n.e(2072).then(n.bind(n,2072)).then(a=>a.GastosPageModule),canActivate:[e.RolGuard]},{path:"agenda",loadChildren:()=>n.e(6408).then(n.bind(n,6408)).then(a=>a.AgendaPageModule),canActivate:[e.RolGuard]}];i.forEach(a=>{a.data={menuItems:g}});let P=(()=>{var a;class s{}return(a=s).\u0275fac=function(o){return new(o||a)},a.\u0275mod=t.$C({type:a}),a.\u0275inj=t.G2t({imports:[u.MD,c.YN,c.X1,l.bv,h.iI.forChild(i),e.SharedComponentsModule,e.MenuButtonsModule,r.ft]}),s})()}}]);