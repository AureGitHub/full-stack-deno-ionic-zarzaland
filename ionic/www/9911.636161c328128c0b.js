"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9911],{9911:(p,d,n)=>{n.r(d),n.d(d,{InversionesPageModule:()=>P});var c=n(177),v=n(4341),i=n(8974),s=n(8464),u=n(9393),h=n(8986),g=n(467);const f=[{title:"Bolsa",icon:"bar-chart-outline",path:"/inversiones/bolsa/",key:"bolsa",roles:[s.Role.god]},{title:"Dep\xf3sitos, letras..",remixicon:"ri-bank-fill",path:"/inversiones/fondo/",key:"fondo",roles:[s.Role.god]},{title:"Estad\xedsticas",remixicon:"ri-bar-chart-grouped-line",path:"/inversiones/estadisticas/",key:"estadisticas",roles:[s.Role.god]}];var o=n(4438);const I=[{path:"",component:(()=>{var e;class a extends s.BasePage{constructor(t,r,m){super(t,r,m),this.myHttpService=t,this.seguridadService=r,this.myHttpService_EXEC=m,this.menuItems=f,this.entityName="accion"}ngOnInit(){return(0,g.A)(function*(){})()}}return(e=a).\u0275fac=function(t){return new(t||e)(o.rXU(s.MyHttpService),o.rXU(s.SeguridadService),o.rXU(s.MyHttpService_EXEC))},e.\u0275cmp=o.VBU({type:e,selectors:[["app-inversiones"]],features:[o.Vt3],decls:6,vars:1,consts:[[3,"menuItems"]],template:function(t,r){1&t&&(o.j41(0,"ion-grid")(1,"ion-row")(2,"ion-col"),o.nrm(3,"app-menu-buttons",0),o.k0s()(),o.j41(4,"ion-row"),o.nrm(5,"ion-col"),o.k0s()()),2&t&&(o.R7$(3),o.Y8G("menuItems",r.menuItems))},dependencies:[i.hU,i.lO,i.ln,s.MenuButtonsComponent]}),a})()},{path:"bolsa",loadChildren:()=>Promise.all([n.e(2076),n.e(3539)]).then(n.bind(n,3539)).then(e=>e.BolsaPageModule),canActivate:[s.RolGuard]},{path:"fondo",loadChildren:()=>Promise.all([n.e(2076),n.e(9934)]).then(n.bind(n,9934)).then(e=>e.FondoPageModule),canActivate:[s.RolGuard]},{path:"estadisticas",loadChildren:()=>n.e(1151).then(n.bind(n,1151)).then(e=>e.EstadisticasPageModule),canActivate:[s.RolGuard]}];let P=(()=>{var e;class a{}return(e=a).\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[c.MD,v.YN,v.X1,i.bv,h.iI.forChild(I),s.SharedComponentsModule,s.MenuButtonsModule,u.ft]}),a})()}}]);