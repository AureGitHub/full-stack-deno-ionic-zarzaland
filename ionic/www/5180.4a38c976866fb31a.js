"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5180],{5180:(F,g,l)=>{l.r(g),l.d(g,{BolsaPageModule:()=>E});var u=l(177),f=l(4341),d=l(8974),r=l(8464),_=l(1547),v=l(8986),m=l(467),e=l(4438);let b=(()=>{var a;class c extends r.BasePage{constructor(n,t){super(n,t),this.myHttpService=n,this.seguridadService=t,this.columns=[{name:"Descripci\xf3n",prop:"descripcion",type:"text",OrderInit:"ASC"}],this.entityName="bolsa/empresa"}ngOnInit(){var n=this;return(0,m.A)(function*(){n.Init()})()}}return(a=c).\u0275fac=function(n){return new(n||a)(e.rXU(r.MyHttpService),e.rXU(r.SeguridadService))},a.\u0275cmp=e.VBU({type:a,selectors:[["add-empresas"]],features:[e.Vt3],decls:4,vars:7,consts:[[1,"router-outlet"],[3,"loadOnInit","canAddEntity","canUpdateEntity","title","entityName","columns","refresh"]],template:function(n,t){1&n&&(e.j41(0,"ion-grid",0)(1,"ion-row")(2,"ion-col"),e.nrm(3,"my-table",1),e.k0s()()()),2&n&&(e.R7$(3),e.Y8G("loadOnInit",!0)("canAddEntity",t.user.isAdmin)("canUpdateEntity",t.user.isAdmin)("title","Empresas")("entityName",t.entityName)("columns",t.columns)("refresh",t.tableRefresh))},dependencies:[d.hU,d.lO,d.ln,r.MyTableComponent]}),c})();const h=["editorEntity"];function k(a,c){1&a&&(e.j41(0,"ion-row")(1,"ion-col"),e.nrm(2,"add-empresas"),e.k0s()())}function y(a,c){1&a&&(e.j41(0,"div"),e.nrm(1,"app-base-cargando",13),e.k0s()),2&a&&(e.R7$(),e.Y8G("message","Cargando cartera..."))}function j(a,c){1&a&&e.nrm(0,"app-base-cargando",13),2&a&&e.Y8G("message","Cargando transacciones...")}function C(a,c){if(1&a){const i=e.RV6();e.j41(0,"div",33),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG(2).$implicit,s=e.XpG();return e.Njj(s.management(o,"bolsa/"+s.transaccion,t.id))}),e.j41(1,"div",6)(2,"div",34),e.EFF(3),e.nI1(4,"date"),e.k0s()(),e.j41(5,"div",35)(6,"div",34),e.EFF(7),e.nI1(8,"number"),e.k0s(),e.j41(9,"div",34),e.EFF(10),e.nI1(11,"number"),e.k0s()(),e.j41(12,"div",35)(13,"div",34),e.EFF(14),e.nI1(15,"number"),e.k0s(),e.j41(16,"div",34),e.EFF(17),e.nI1(18,"number"),e.k0s()(),e.j41(19,"div",6)(20,"div",34),e.EFF(21),e.nI1(22,"number"),e.k0s()()()}if(2&a){const i=c.$implicit;e.ZvI("grid ",i.tipo,""),e.R7$(3),e.JRh(e.i5U(4,9,null==i?null:i.fecha,"dd/MM/yy")),e.R7$(4),e.SpI("",e.i5U(8,12,null==i?null:i.precio,"1.4-4"),"\u20ac"),e.R7$(3),e.JRh(e.i5U(11,15,null==i?null:i.acciones,"1.4-4")),e.R7$(4),e.SpI("",e.i5U(15,18,null==i?null:i.comision,"1.2-2"),"\u20ac"),e.R7$(3),e.SpI("",e.i5U(18,21,null==i?null:i.impuestos,"1.2-2"),"\u20ac"),e.R7$(4),e.SpI("",e.i5U(22,24,null==i?null:i.total,"1.2-2"),"\u20ac")}}function P(a,c){if(1&a&&(e.j41(0,"div",30),e.DNE(1,j,1,1,"app-base-cargando",31)(2,C,23,27,"div",32),e.k0s()),2&a){const i=e.XpG().$implicit;e.R7$(),e.Y8G("ngIf",i.loading),e.R7$(),e.Y8G("ngForOf",i.lstTransacciones)}}function I(a,c){if(1&a){const i=e.RV6();e.j41(0,"div",14)(1,"div",15)(2,"div",16)(3,"div",17),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.managementCartera("bolsa/cartera",t.id))}),e.j41(4,"div",18),e.EFF(5),e.k0s(),e.j41(6,"div"),e.EFF(7),e.nI1(8,"date"),e.k0s()(),e.j41(9,"div",19),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.expanded(t))}),e.j41(10,"div",20)(11,"span"),e.EFF(12,"Acciones"),e.k0s(),e.j41(13,"span",21),e.EFF(14),e.nI1(15,"number"),e.k0s()()(),e.j41(16,"div",22),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.selectedNode=o.selectedNode==t?null:t)})("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.expanded(t))}),e.j41(17,"div",20)(18,"span"),e.EFF(19),e.k0s(),e.j41(20,"span",23),e.EFF(21),e.nI1(22,"number"),e.k0s()()(),e.j41(23,"div",24)(24,"div",25)(25,"span"),e.EFF(26),e.k0s(),e.j41(27,"ion-icon",26),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.management(t,"bolsa/compra",0))}),e.k0s()(),e.j41(28,"div",25)(29,"span"),e.EFF(30),e.k0s(),e.j41(31,"ion-icon",27),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.management(t,"bolsa/venta",0))}),e.k0s()(),e.j41(32,"div",25)(33,"span"),e.EFF(34),e.k0s(),e.j41(35,"ion-icon",28),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.management(t,"bolsa/dividendo",0))}),e.k0s()()()(),e.DNE(36,P,3,2,"div",29),e.k0s()()}if(2&a){const i=c.$implicit;e.R7$(2),e.Y8G("ngClass",0==i.ventas?"fondo-activo":i.beneficios>=0?"fondo-beneficio":"fondo-perdida"),e.R7$(2),e.FS9("title",i.descripcion),e.R7$(),e.JRh(i.abreviatura),e.R7$(2),e.JRh(e.i5U(8,12,i.fecha,"dd/MM/yy")),e.R7$(7),e.JRh(e.i5U(15,15,i.acciones,"1.4-4")),e.R7$(5),e.JRh(0==i.ventas?"Invertido":i.beneficios>=0?"Beneficios":"Perdida"),e.R7$(),e.Y8G("ngClass",i.beneficios>=0?"beneficio":"perdida"),e.R7$(),e.SpI("",e.i5U(22,18,i.beneficios,"1.2-2")," \u20ac"),e.R7$(5),e.JRh(i.compras),e.R7$(4),e.JRh(i.ventas),e.R7$(4),e.JRh(i.dividendos),e.R7$(2),e.Y8G("ngIf",i.expanded)}}const B=[{path:"",component:(()=>{var a;class c extends r.BasePage{constructor(n,t,o){super(n,t),this.myHttpService=n,this.seguridadService=t,this.utilService=o,this.lstTransacciones=["venta","compra","dividendo"],this.beneficios=0,this.entityNameCompra="accion_compra",this.entityNameVenta="accion_venta",this.isOpenModal=!1,this.inversionActual=0,this.addEmpresa=!1,this.entityName="bolsa/cartera"}ngOnInit(){var n=this;return(0,m.A)(function*(){n.Init(),yield n.getCartera()})()}handleRefresh(n){var t=this;return(0,m.A)(function*(){yield t.getCartera(),n.target.complete()})()}formatFecha(n){const t=new Date(n);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}getCartera(){var n=this;return(0,m.A)(function*(){try{n.beneficios=0,n.inversionActual=0,n.lstCartera=[],n.isLoading=!0;const t=new r.classHttp("get",n.entityName,null),o=yield n.myHttpService.ejecuteURL(t);null!=o&&o.data&&(n.lstCartera=null==o?void 0:o.data,n.lstCartera.forEach(s=>{s.expanded=!1,0==parseInt(s.acciones)?n.beneficios+=parseFloat(s.beneficios):n.inversionActual+=parseFloat(s.beneficios)}))}catch{}finally{n.isLoading=!1}})()}management(n,t,o){const s=t,p={carteraid:n.id};(s.includes("venta")||s.includes("dividendo"))&&0==o&&(p.acciones=n.acciones),this.editorEntityComponent.management(o,{entityName:s,entityInitialValues:p})}managementCartera(n,t){this.editorEntityComponent.management(t,{entityName:n,entityInitialValues:{}})}expanded(n){var t=this;return(0,m.A)(function*(){n.expanded=!n.expanded,n.expanded?t.getTransacciones(n):n.lstTransacciones=null})()}getTransacciones(n){var t=this;return(0,m.A)(function*(){n.loading=!0;const o=n.id.toString();let s=new r.classHttp("get","bolsa/cartera",null,"getTransacciones",null,o);try{let p=yield t.myHttpService.ejecuteURL(s);n.lstTransacciones=null==p?void 0:p.data}catch(p){t.utilService.message(r.typeMessage.danger,p.message)}finally{n.loading=!1}})()}}return(a=c).\u0275fac=function(n){return new(n||a)(e.rXU(r.MyHttpService),e.rXU(r.SeguridadService),e.rXU(r.UtilService))},a.\u0275cmp=e.VBU({type:a,selectors:[["bolsa"]],viewQuery:function(n,t){if(1&n&&e.GBs(h,5),2&n){let o;e.mGM(o=e.lsd())&&(t.editorEntityComponent=o.first)}},features:[e.Vt3],decls:23,vars:14,consts:[["editorEntity",""],[3,"saveEvent","deleteEvent","MostrarIconAdd","entityName"],[1,"router-outlet"],[1,"col-2"],["shape","round","size","small",3,"click","color"],["slot","start","name","business-outline"],[1,"col-3"],["color","success","shape","round","size","small",3,"click"],["slot","start","name","add-circle"],[1,"col-7"],[1,"flex_column","infoBeneInver"],[4,"ngIf"],["class","grid ",4,"ngFor","ngForOf"],[3,"message"],[1,"grid"],[1,"col-12","itemTreeCompra"],[1,"grid","head",3,"ngClass"],[1,"col-3","hand","name-date",3,"click"],[1,"text-top","font-bold",3,"title"],[1,"col-3","hand",3,"click"],[1,"text-center","precio-beneficio"],[1,"acciones"],[1,"col-3",3,"click"],[3,"ngClass"],[1,"col-3","flex_row"],[1,"flex_column","flex-center-align-items"],["name","add-circle",1,"hand",2,"font-size","24px","color","blue",3,"click"],["name","add-circle",1,"hand",2,"font-size","24px","color","orange",3,"click"],["name","add-circle",1,"hand",2,"font-size","24px","color","green",3,"click"],["class","operaciones",4,"ngIf"],[1,"operaciones"],[3,"message",4,"ngIf"],[3,"class","click",4,"ngFor","ngForOf"],[3,"click"],[1,"text-center"],[1,"col-3","flex_column"]],template:function(n,t){if(1&n){const o=e.RV6();e.j41(0,"app-editor-entity",1,0),e.bIt("saveEvent",function(){return e.eBV(o),e.Njj(t.getCartera())})("deleteEvent",function(){return e.eBV(o),e.Njj(t.getCartera())}),e.k0s(),e.j41(2,"ion-grid",2)(3,"ion-row")(4,"ion-col",3)(5,"ion-button",4),e.bIt("click",function(){return e.eBV(o),e.Njj(t.addEmpresa=!t.addEmpresa)}),e.nrm(6,"ion-icon",5),e.k0s()(),e.j41(7,"ion-col",6)(8,"ion-button",7),e.bIt("click",function(){return e.eBV(o),e.Njj(t.managementCartera("bolsa/cartera",0))}),e.nrm(9,"ion-icon",8),e.k0s()(),e.j41(10,"ion-col",9)(11,"div",10)(12,"span"),e.EFF(13),e.nI1(14,"number"),e.k0s(),e.j41(15,"span"),e.EFF(16),e.nI1(17,"number"),e.k0s()()()(),e.DNE(18,k,3,0,"ion-row",11),e.j41(19,"ion-row")(20,"ion-col"),e.DNE(21,y,2,1,"div",11)(22,I,37,21,"div",12),e.k0s()()()}2&n&&(e.Y8G("MostrarIconAdd",!1)("entityName",t.entityName),e.R7$(5),e.Y8G("color",t.addEmpresa?"warning":"success"),e.R7$(8),e.SpI("beneficios : ",e.i5U(14,8,t.beneficios,"1.2-2"),"\u20ac"),e.R7$(3),e.SpI("Inversi\xf3n : ",e.i5U(17,11,t.inversionActual,"1.2-2"),"\u20ac"),e.R7$(2),e.Y8G("ngIf",t.addEmpresa),e.R7$(3),e.Y8G("ngIf",t.isLoading),e.R7$(),e.Y8G("ngForOf",t.lstCartera))},dependencies:[u.YU,u.Sq,u.bT,d.Jm,d.hU,d.lO,d.iq,d.ln,r.EditorEntityComponent,r.CargandoComponent,b,u.QX,u.vh],styles:[".itemTreeCompra[_ngcontent-%COMP%]{font-size:12px;padding-bottom:10px}.infoBeneInver[_ngcontent-%COMP%]{font-size:11px;color:navy}.precioTotal[_ngcontent-%COMP%]{color:#fff;background-color:navy}.head[_ngcontent-%COMP%]{border:solid 2px;padding:5px}.detail[_ngcontent-%COMP%]{border:solid 1px;padding:5px;background-color:#90ee90}.name-date[_ngcontent-%COMP%]{display:flex;flex-direction:column}.precio-beneficio[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:1px}.acciones[_ngcontent-%COMP%]{background-color:navy;color:#fff;padding:3px}.beneficio[_ngcontent-%COMP%]{background-color:green;color:#fff;padding:3px}.perdida[_ngcontent-%COMP%]{background-color:red;color:#fff;padding:3px;font-size:11px}.fondo-beneficio[_ngcontent-%COMP%]{background-color:#bef3be}.fondo-perdida[_ngcontent-%COMP%]{background-color:#f5cece}.fondo-activo[_ngcontent-%COMP%]{background-color:gray;color:#fff}.compra[_ngcontent-%COMP%]{background-color:#add8e6;border:solid 1px;width:98%}.venta[_ngcontent-%COMP%]{background-color:#ffa07a;border:solid 1px;width:98%}.dividendo[_ngcontent-%COMP%]{background-color:green;color:#fff;border:solid 1px;width:98%}"]}),c})()}];let E=(()=>{var a;class c{}return(a=c).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[u.MD,f.YN,f.X1,d.bv,v.iI.forChild(B),r.SharedComponentsModule,_.bG]}),c})()}}]);