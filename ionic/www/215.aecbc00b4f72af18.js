"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[215],{215:(P,l,t)=>{t.r(l),t.d(l,{FondoPageModule:()=>m});var p=t(177),s=t(4341),r=t(4742),i=t(8464),g=t(8986),f=t(467),o=t(4438);const u=[{path:"",component:(()=>{var e;class d extends i.BasePage{constructor(n){super(n),this.basePageService=n,this.addEmpresa=!1,this.columns=[{name:"Donde",prop:"descripcion",type:"text"},{name:"Fi",prop:"fechainicio",type:"date",OrderInit:"DESC"},{name:"Ff",prop:"fechafin",type:"date",OrderInit:"DESC"},{name:"Importe",prop:"importe",type:"number"},{name:"Beneficios",prop:"beneficios",type:"number"}],this.entityName="finanzas/fondo"}ngOnInit(){var n=this;return(0,f.A)(function*(){n.Init()})()}handleRefresh(n){return(0,f.A)(function*(){n.target.complete()})()}}return(e=d).\u0275fac=function(n){return new(n||e)(o.rXU(i.BasePageService))},e.\u0275cmp=o.VBU({type:e,selectors:[["fondo"]],features:[o.Vt3],decls:9,vars:8,consts:[["slot","fixed",3,"ionRefresh"],[1,"router-outlet"],[1,"col-2"],[1,"col-3"],[1,"col-7"],[3,"loadOnInit","canAddEntity","canUpdateEntity","title","entityName","columns","refresh","withCache"]],template:function(n,a){1&n&&(o.j41(0,"ion-refresher",0),o.bIt("ionRefresh",function(h){return a.handleRefresh(h)}),o.nrm(1,"ion-refresher-content"),o.k0s(),o.j41(2,"ion-grid",1)(3,"ion-row"),o.nrm(4,"ion-col",2)(5,"ion-col",3)(6,"ion-col",4),o.k0s(),o.j41(7,"ion-row"),o.nrm(8,"my-table",5),o.k0s()()),2&n&&(o.R7$(8),o.Y8G("loadOnInit",!0)("canAddEntity",a.user.isAdmin)("canUpdateEntity",a.user.isAdmin)("title","Fondos")("entityName",a.entityName)("columns",a.columns)("refresh",a.tableRefresh)("withCache",!0))},dependencies:[r.hU,r.lO,r.To,r.Ki,r.ln,i.MyTableComponent],styles:[".itemTreeCompra[_ngcontent-%COMP%]{font-size:12px;padding-bottom:10px}.infoBeneInver[_ngcontent-%COMP%]{font-size:11px;color:navy}.precioTotal[_ngcontent-%COMP%]{color:#fff;background-color:navy}.head[_ngcontent-%COMP%]{border:solid 2px;padding:5px}.detail[_ngcontent-%COMP%]{border:solid 1px;padding:5px;background-color:#90ee90}.name-date[_ngcontent-%COMP%]{display:flex;flex-direction:column}.precio-beneficio[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:1px}.acciones[_ngcontent-%COMP%]{background-color:navy;color:#fff;padding:3px}.beneficio[_ngcontent-%COMP%]{background-color:green;color:#fff;padding:3px}.perdida[_ngcontent-%COMP%]{background-color:red;color:#fff;padding:3px;font-size:11px}.fondo-beneficio[_ngcontent-%COMP%]{background-color:#bef3be}.fondo-perdida[_ngcontent-%COMP%]{background-color:#f5cece}.fondo-activo[_ngcontent-%COMP%]{background-color:gray;color:#fff}.compra[_ngcontent-%COMP%]{background-color:#add8e6;border:solid 1px;width:98%}.venta[_ngcontent-%COMP%]{background-color:#ffa07a;border:solid 1px;width:98%}.dividendo[_ngcontent-%COMP%]{background-color:green;color:#fff;border:solid 1px;width:98%}"]}),d})()}];let m=(()=>{var e;class d{}return(e=d).\u0275fac=function(n){return new(n||e)},e.\u0275mod=o.$C({type:e}),e.\u0275inj=o.G2t({imports:[p.MD,s.YN,s.X1,r.bv,g.iI.forChild(u),i.SharedComponentsModule]}),d})()}}]);