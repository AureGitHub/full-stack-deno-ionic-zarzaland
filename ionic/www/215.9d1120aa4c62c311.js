"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[215],{215:(b,s,t)=>{t.r(s),t.d(s,{FondoPageModule:()=>P});var u=t(177),f=t(4341),a=t(8974),i=t(8464),m=t(1547),h=t(8986),p=t(467),o=t(4438);const y=[{path:"",component:(()=>{var e;class d extends i.BasePage{constructor(n,r,g,l){super(n,r,l),this.myHttpService=n,this.seguridadService=r,this.utilService=g,this.myHttpService_EXEC=l,this.addEmpresa=!1,this.columns=[{name:"Donde",prop:"descripcion",type:"text"},{name:"Fi",prop:"fechainicio",type:"date",OrderInit:"DESC"},{name:"Ff",prop:"fechafin",type:"date",OrderInit:"DESC"},{name:"Importe",prop:"importe",type:"number"},{name:"Beneficios",prop:"beneficios",type:"number"}],this.entityName="finanzas/fondo"}ngOnInit(){var n=this;return(0,p.A)(function*(){n.Init()})()}handleRefresh(n){return(0,p.A)(function*(){n.target.complete()})()}}return(e=d).\u0275fac=function(n){return new(n||e)(o.rXU(i.MyHttpService),o.rXU(i.SeguridadService),o.rXU(i.UtilService),o.rXU(i.MyHttpService_EXEC))},e.\u0275cmp=o.VBU({type:e,selectors:[["fondo"]],features:[o.Vt3],decls:9,vars:8,consts:[["slot","fixed",3,"ionRefresh"],[1,"router-outlet"],[1,"col-2"],[1,"col-3"],[1,"col-7"],[3,"loadOnInit","canAddEntity","canUpdateEntity","title","entityName","columns","refresh","withCache"]],template:function(n,r){1&n&&(o.j41(0,"ion-refresher",0),o.bIt("ionRefresh",function(l){return r.handleRefresh(l)}),o.nrm(1,"ion-refresher-content"),o.k0s(),o.j41(2,"ion-grid",1)(3,"ion-row"),o.nrm(4,"ion-col",2)(5,"ion-col",3)(6,"ion-col",4),o.k0s(),o.j41(7,"ion-row"),o.nrm(8,"my-table",5),o.k0s()()),2&n&&(o.R7$(8),o.Y8G("loadOnInit",!0)("canAddEntity",r.user.isAdmin)("canUpdateEntity",r.user.isAdmin)("title","Fondos")("entityName",r.entityName)("columns",r.columns)("refresh",r.tableRefresh)("withCache",!0))},dependencies:[a.hU,a.lO,a.To,a.Ki,a.ln,i.MyTableComponent],styles:[".itemTreeCompra[_ngcontent-%COMP%]{font-size:12px;padding-bottom:10px}.infoBeneInver[_ngcontent-%COMP%]{font-size:11px;color:navy}.precioTotal[_ngcontent-%COMP%]{color:#fff;background-color:navy}.head[_ngcontent-%COMP%]{border:solid 2px;padding:5px}.detail[_ngcontent-%COMP%]{border:solid 1px;padding:5px;background-color:#90ee90}.name-date[_ngcontent-%COMP%]{display:flex;flex-direction:column}.precio-beneficio[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:1px}.acciones[_ngcontent-%COMP%]{background-color:navy;color:#fff;padding:3px}.beneficio[_ngcontent-%COMP%]{background-color:green;color:#fff;padding:3px}.perdida[_ngcontent-%COMP%]{background-color:red;color:#fff;padding:3px;font-size:11px}.fondo-beneficio[_ngcontent-%COMP%]{background-color:#bef3be}.fondo-perdida[_ngcontent-%COMP%]{background-color:#f5cece}.fondo-activo[_ngcontent-%COMP%]{background-color:gray;color:#fff}.compra[_ngcontent-%COMP%]{background-color:#add8e6;border:solid 1px;width:98%}.venta[_ngcontent-%COMP%]{background-color:#ffa07a;border:solid 1px;width:98%}.dividendo[_ngcontent-%COMP%]{background-color:green;color:#fff;border:solid 1px;width:98%}"]}),d})()}];let P=(()=>{var e;class d{}return(e=d).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[u.MD,f.YN,f.X1,a.bv,h.iI.forChild(y),i.SharedComponentsModule,m.bG]}),d})()}}]);