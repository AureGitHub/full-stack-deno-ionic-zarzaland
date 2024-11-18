"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2106],{2106:(v,p,s)=>{s.r(p),s.d(p,{EstadisticasPageModule:()=>E});var h=s(177),f=s(4341),u=s(8974),i=s(8464),g=s(1547),y=s(8986),d=s(467),n=s(4438);const b=[{path:"",component:(()=>{var o;class l extends i.BasePage{constructor(e,t,a,r){super(e,t,r),this.myHttpService=e,this.seguridadService=t,this.utilService=a,this.myHttpService_EXEC=r,this.addEmpresa=!1,this.columnsFondosActivos=[{name:"e",prop:"ab",type:"text"},{name:"Fi",prop:"fechainicio",type:"date"},{name:"Ff",prop:"fechafin",type:"date"},{name:"i",prop:"interes",type:"number"},{name:"i",prop:"importe",type:"number"}],this.columnsWithout=[{name:"F",prop:"fecha",type:"text"},{name:"f",prop:"fondo",type:"number",decimalNamber:"1.2-2"},{name:"l",prop:"letra",type:"number",decimalNamber:"1.2-2"},{name:"b",prop:"bolsa",type:"number",decimalNamber:"1.2-2"},{name:"t",prop:"total",type:"number",decimalNamber:"1.2-2"}],this.columns=[{name:"E",prop:"em",type:"text"},{name:"F",prop:"fecha",type:"text"},{name:"B",prop:"importe",type:"number",decimalNamber:"1.2-2"}],this.resultWithEmpresa=[],this.resultWithoutEmpresa=[],this.resultFondosActivos=[],this.entityName="finanzas/estadisticas"}ngOnInit(){var e=this;return(0,d.A)(function*(){e.Init(),e.getEstadisticas()})()}handleRefresh(e){var t=this;return(0,d.A)(function*(){yield t.getEstadisticas(),e.target.complete()})()}getEstadisticas(){var e=this;return(0,d.A)(function*(){try{e.isLoading=!0;const t=new i.classHttp("get",e.entityName,null),a=yield e.myHttpService.ejecuteURL(t);a&&(e.resultWithoutEmpresa=null==a?void 0:a.resultWithoutEmpresa,e.resultFondosActivos=null==a?void 0:a.resultFondosActivos)}catch{}finally{e.isLoading=!1}})()}selectingWithoutEmpresa(e){var t=this;return(0,d.A)(function*(){const r=new i.classHttp("get",t.entityName,null,"getDetalle",null,{anno:e.anno,mes:e.mes}),m=yield t.myHttpService.ejecuteURL(r);t.resultWithEmpresa=null==m?void 0:m.resultWithEmpresa})()}}return(o=l).\u0275fac=function(e){return new(e||o)(n.rXU(i.MyHttpService),n.rXU(i.SeguridadService),n.rXU(i.UtilService),n.rXU(i.MyHttpService_EXEC))},o.\u0275cmp=n.VBU({type:o,selectors:[["estadisticas"]],features:[n.Vt3],decls:5,vars:33,consts:[["slot","fixed",3,"ionRefresh"],[3,"loadOnInit","canAddEntity","canUpdateEntity","tableResult","tableResultCount","dataFromOut","title","entityName","columns","refresh","withCache"],[3,"selecting","loadOnInit","canAddEntity","canUpdateEntity","tableResult","tableResultCount","dataFromOut","title","entityName","columns","refresh","withCache"],[3,"loadOnInit","canAddEntity","canUpdateEntity","tableResult","tableResultCount","title","entityName","columns","refresh","dataFromOut","withCache"]],template:function(e,t){1&e&&(n.j41(0,"ion-refresher",0),n.bIt("ionRefresh",function(r){return t.handleRefresh(r)}),n.nrm(1,"ion-refresher-content"),n.k0s(),n.nrm(2,"my-table",1),n.j41(3,"my-table",2),n.bIt("selecting",function(r){return t.selectingWithoutEmpresa(r)}),n.k0s(),n.nrm(4,"my-table",3)),2&e&&(n.R7$(2),n.Y8G("loadOnInit",!0)("canAddEntity",t.user.isAdmin)("canUpdateEntity",t.user.isAdmin)("tableResult","resultFondosActivos")("tableResultCount","resultFondosActivoscount")("dataFromOut",t.resultFondosActivos)("title","Activos")("entityName",t.entityName)("columns",t.columnsFondosActivos)("refresh",t.tableRefresh)("withCache",!0),n.R7$(),n.Y8G("loadOnInit",!0)("canAddEntity",t.user.isAdmin)("canUpdateEntity",t.user.isAdmin)("tableResult","resultWithoutEmpresa")("tableResultCount","resultWithoutEmpresacount")("dataFromOut",t.resultWithoutEmpresa)("title","Resumen X mes")("entityName",t.entityName)("columns",t.columnsWithout)("refresh",t.tableRefresh)("withCache",!0),n.R7$(),n.Y8G("loadOnInit",!0)("canAddEntity",t.user.isAdmin)("canUpdateEntity",t.user.isAdmin)("tableResult","resultWithEmpresa")("tableResultCount","resultWithEmpresacount")("title","Resumen X Empresas")("entityName",t.entityName)("columns",t.columns)("refresh",t.tableRefresh)("dataFromOut",t.resultWithEmpresa)("withCache",!0))},dependencies:[u.To,u.Ki,i.MyTableComponent],styles:[".itemTreeCompra[_ngcontent-%COMP%]{font-size:12px;padding-bottom:10px}.infoBeneInver[_ngcontent-%COMP%]{font-size:11px;color:navy}.precioTotal[_ngcontent-%COMP%]{color:#fff;background-color:navy}.head[_ngcontent-%COMP%]{border:solid 2px;padding:5px}.detail[_ngcontent-%COMP%]{border:solid 1px;padding:5px;background-color:#90ee90}.name-date[_ngcontent-%COMP%]{display:flex;flex-direction:column}.precio-beneficio[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:1px}.acciones[_ngcontent-%COMP%]{background-color:navy;color:#fff;padding:3px}.beneficio[_ngcontent-%COMP%]{background-color:green;color:#fff;padding:3px}.perdida[_ngcontent-%COMP%]{background-color:red;color:#fff;padding:3px;font-size:11px}.fondo-beneficio[_ngcontent-%COMP%]{background-color:#bef3be}.fondo-perdida[_ngcontent-%COMP%]{background-color:#f5cece}.fondo-activo[_ngcontent-%COMP%]{background-color:gray;color:#fff}.compra[_ngcontent-%COMP%]{background-color:#add8e6;border:solid 1px;width:98%}.venta[_ngcontent-%COMP%]{background-color:#ffa07a;border:solid 1px;width:98%}.dividendo[_ngcontent-%COMP%]{background-color:green;color:#fff;border:solid 1px;width:98%}"]}),l})()}];let E=(()=>{var o;class l{}return(o=l).\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.$C({type:o}),o.\u0275inj=n.G2t({imports:[h.MD,f.YN,f.X1,u.bv,y.iI.forChild(b),i.SharedComponentsModule,g.bG]}),l})()}}]);