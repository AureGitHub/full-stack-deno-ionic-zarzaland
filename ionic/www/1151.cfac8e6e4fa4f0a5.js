"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1151],{1151:(v,m,o)=>{o.r(m),o.d(m,{EstadisticasPageModule:()=>y});var f=o(177),p=o(4341),c=o(8974),a=o(8464),h=o(1547),g=o(8986),u=o(467),e=o(4438);const b=[{path:"",component:(()=>{var i;class l extends a.BasePage{constructor(n,t,s,r){super(n,t,r),this.myHttpService=n,this.seguridadService=t,this.utilService=s,this.myHttpService_EXEC=r,this.addEmpresa=!1,this.columnsFondosActivos=[{name:"e",prop:"em",type:"text"},{name:"Fi",prop:"fechainicio",type:"date"},{name:"Ff",prop:"fechafin",type:"date"},{name:"i",prop:"importe",type:"number"}],this.columnsWithout=[{name:"F",prop:"fecha",type:"text"},{name:"f",prop:"fondo",type:"number",decimalNamber:"1.2-2"},{name:"b",prop:"bolsa",type:"number",decimalNamber:"1.2-2"},{name:"t",prop:"beneficios",type:"number",decimalNamber:"1.2-2"}],this.columns=[{name:"E",prop:"em",type:"text"},{name:"F",prop:"fecha",type:"text"},{name:"B",prop:"beneficios",type:"number",decimalNamber:"1.2-2"}],this.resultWithEmpresa=[],this.resultWithoutEmpresa=[],this.resultFondosActivos=[],this.resultWithEmpresaTMP=[],this.entityName="bolsa/estadisticas"}ngOnInit(){var n=this;return(0,u.A)(function*(){n.Init(),n.getEstadisticas()})()}handleRefresh(n){var t=this;return(0,u.A)(function*(){yield t.getEstadisticas(),n.target.complete()})()}getEstadisticas(){var n=this;return(0,u.A)(function*(){try{n.isLoading=!0;const t=new a.classHttp("get",n.entityName,null),s=yield n.myHttpService.ejecuteURL(t);s&&(n.resultWithoutEmpresa=null==s?void 0:s.resultWithoutEmpresa,n.resultFondosActivos=null==s?void 0:s.resultFondosActivos,n.resultWithEmpresaTMP=null==s?void 0:s.resultWithEmpresa)}catch{}finally{n.isLoading=!1}})()}selectingWithoutEmpresa(n){this.resultWithEmpresa=this.resultWithEmpresaTMP.filter(t=>t.anno==n.anno&&t.mes==n.mes)}}return(i=l).\u0275fac=function(n){return new(n||i)(e.rXU(a.MyHttpService),e.rXU(a.SeguridadService),e.rXU(a.UtilService),e.rXU(a.MyHttpService_EXEC))},i.\u0275cmp=e.VBU({type:i,selectors:[["estadisticas"]],features:[e.Vt3],decls:12,vars:33,consts:[["slot","fixed",3,"ionRefresh"],[1,"grid"],[1,"row"],[1,"col"],[3,"loadOnInit","canAddEntity","canUpdateEntity","tableResult","tableResultCount","dataFromOut","title","entityName","columns","refresh","withCache"],[3,"selecting","loadOnInit","canAddEntity","canUpdateEntity","tableResult","tableResultCount","dataFromOut","title","entityName","columns","refresh","withCache"],[3,"loadOnInit","canAddEntity","canUpdateEntity","tableResult","tableResultCount","title","entityName","columns","refresh","dataFromOut","withCache"]],template:function(n,t){1&n&&(e.j41(0,"ion-refresher",0),e.bIt("ionRefresh",function(r){return t.handleRefresh(r)}),e.nrm(1,"ion-refresher-content"),e.k0s(),e.j41(2,"div",1)(3,"div",2)(4,"div",3),e.nrm(5,"my-table",4),e.k0s()(),e.j41(6,"div",2)(7,"div",3)(8,"my-table",5),e.bIt("selecting",function(r){return t.selectingWithoutEmpresa(r)}),e.k0s()()(),e.j41(9,"div",2)(10,"div",3),e.nrm(11,"my-table",6),e.k0s()()()),2&n&&(e.R7$(5),e.Y8G("loadOnInit",!0)("canAddEntity",t.user.isAdmin)("canUpdateEntity",t.user.isAdmin)("tableResult","resultFondosActivos")("tableResultCount","resultFondosActivoscount")("dataFromOut",t.resultFondosActivos)("title","Activos")("entityName",t.entityName)("columns",t.columnsFondosActivos)("refresh",t.tableRefresh)("withCache",!0),e.R7$(3),e.Y8G("loadOnInit",!0)("canAddEntity",t.user.isAdmin)("canUpdateEntity",t.user.isAdmin)("tableResult","resultWithoutEmpresa")("tableResultCount","resultWithoutEmpresacount")("dataFromOut",t.resultWithoutEmpresa)("title","Resumen X mes")("entityName",t.entityName)("columns",t.columnsWithout)("refresh",t.tableRefresh)("withCache",!0),e.R7$(3),e.Y8G("loadOnInit",!0)("canAddEntity",t.user.isAdmin)("canUpdateEntity",t.user.isAdmin)("tableResult","resultWithEmpresa")("tableResultCount","resultWithEmpresacount")("title","Resumen X Empresas")("entityName",t.entityName)("columns",t.columns)("refresh",t.tableRefresh)("dataFromOut",t.resultWithEmpresa)("withCache",!0))},dependencies:[c.To,c.Ki,a.MyTableComponent],styles:[".itemTreeCompra[_ngcontent-%COMP%]{font-size:12px;padding-bottom:10px}.infoBeneInver[_ngcontent-%COMP%]{font-size:11px;color:navy}.precioTotal[_ngcontent-%COMP%]{color:#fff;background-color:navy}.head[_ngcontent-%COMP%]{border:solid 2px;padding:5px}.detail[_ngcontent-%COMP%]{border:solid 1px;padding:5px;background-color:#90ee90}.name-date[_ngcontent-%COMP%]{display:flex;flex-direction:column}.precio-beneficio[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:1px}.acciones[_ngcontent-%COMP%]{background-color:navy;color:#fff;padding:3px}.beneficio[_ngcontent-%COMP%]{background-color:green;color:#fff;padding:3px}.perdida[_ngcontent-%COMP%]{background-color:red;color:#fff;padding:3px;font-size:11px}.fondo-beneficio[_ngcontent-%COMP%]{background-color:#bef3be}.fondo-perdida[_ngcontent-%COMP%]{background-color:#f5cece}.fondo-activo[_ngcontent-%COMP%]{background-color:gray;color:#fff}.compra[_ngcontent-%COMP%]{background-color:#add8e6;border:solid 1px;width:98%}.venta[_ngcontent-%COMP%]{background-color:#ffa07a;border:solid 1px;width:98%}.dividendo[_ngcontent-%COMP%]{background-color:green;color:#fff;border:solid 1px;width:98%}"]}),l})()}];let y=(()=>{var i;class l{}return(i=l).\u0275fac=function(n){return new(n||i)},i.\u0275mod=e.$C({type:i}),i.\u0275inj=e.G2t({imports:[f.MD,p.YN,p.X1,c.bv,g.iI.forChild(b),a.SharedComponentsModule,h.bG]}),l})()}}]);