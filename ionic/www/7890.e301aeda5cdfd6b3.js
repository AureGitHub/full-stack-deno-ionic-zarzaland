"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7890],{7890:(I,u,l)=>{l.r(u),l.d(u,{BolsaPageModule:()=>R});var f=l(177),_=l(4341),d=l(4742),p=l(8464),m=l(8986),g=l(467),e=l(4438);const v=["editorEntity"];function b(a,s){1&a&&(e.j41(0,"div"),e.nrm(1,"app-base-cargando",12),e.k0s()),2&a&&(e.R7$(),e.Y8G("message","Cargando cartera..."))}function h(a,s){1&a&&e.nrm(0,"app-base-cargando",12),2&a&&e.Y8G("message","Cargando transacciones...")}function j(a,s){if(1&a){const i=e.RV6();e.j41(0,"div",34),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG(2).$implicit,c=e.XpG();return e.Njj(c.management(o,"finanzas/"+t.tipo,t.id))}),e.j41(1,"div",5)(2,"div",35),e.EFF(3),e.nI1(4,"date"),e.k0s()(),e.j41(5,"div",36)(6,"div",35),e.EFF(7),e.nI1(8,"number"),e.k0s(),e.j41(9,"div",35),e.EFF(10),e.nI1(11,"number"),e.k0s()(),e.j41(12,"div",36)(13,"div",35),e.EFF(14),e.nI1(15,"number"),e.k0s(),e.j41(16,"div",35),e.EFF(17),e.nI1(18,"number"),e.k0s()(),e.j41(19,"div",5)(20,"div",35),e.EFF(21),e.nI1(22,"number"),e.k0s()()()}if(2&a){const i=s.$implicit;e.ZvI("grid ",i.tipo,""),e.R7$(3),e.JRh(e.i5U(4,9,null==i?null:i.fecha,"dd/MM/yy")),e.R7$(4),e.SpI("",e.i5U(8,12,null==i?null:i.precio,"1.4-4"),"\u20ac"),e.R7$(3),e.JRh(e.i5U(11,15,null==i?null:i.acciones,"1.4-4")),e.R7$(4),e.SpI("",e.i5U(15,18,null==i?null:i.comision,"1.2-2"),"\u20ac"),e.R7$(3),e.SpI("",e.i5U(18,21,null==i?null:i.impuestos,"1.2-2"),"\u20ac"),e.R7$(4),e.SpI("",e.i5U(22,24,null==i?null:i.total,"1.2-2"),"\u20ac")}}function k(a,s){if(1&a&&(e.j41(0,"div",31),e.DNE(1,h,1,1,"app-base-cargando",32)(2,j,23,27,"div",33),e.k0s()),2&a){const i=e.XpG().$implicit;e.R7$(),e.Y8G("ngIf",i.loading),e.R7$(),e.Y8G("ngForOf",i.lstTransacciones)}}function C(a,s){if(1&a){const i=e.RV6();e.j41(0,"div",13)(1,"div",14)(2,"div",15)(3,"div",16),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.managementCartera("finanzas/cartera",t.id))}),e.j41(4,"div",17),e.EFF(5),e.k0s(),e.j41(6,"div")(7,"span",18),e.EFF(8),e.nI1(9,"date"),e.k0s()(),e.j41(10,"div")(11,"span",19),e.EFF(12),e.nI1(13,"date"),e.k0s()()(),e.j41(14,"div",20),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.expanded(t))}),e.j41(15,"div",21)(16,"span"),e.EFF(17,"Acciones"),e.k0s(),e.j41(18,"span",22),e.EFF(19),e.nI1(20,"number"),e.k0s(),e.j41(21,"span",18),e.EFF(22),e.nI1(23,"number"),e.k0s(),e.j41(24,"span",19),e.EFF(25),e.nI1(26,"number"),e.k0s()()(),e.j41(27,"div",23),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.selectedNode=o.selectedNode==t?null:t)})("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.expanded(t))}),e.j41(28,"div",21)(29,"span"),e.EFF(30),e.k0s(),e.j41(31,"span",24),e.EFF(32),e.nI1(33,"number"),e.k0s(),e.j41(34,"span",24),e.EFF(35),e.nI1(36,"number"),e.k0s()()(),e.j41(37,"div",25)(38,"div",26)(39,"span"),e.EFF(40),e.k0s(),e.j41(41,"ion-icon",27),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.management(t,"finanzas/compra",0))}),e.k0s()(),e.j41(42,"div",26)(43,"span"),e.EFF(44),e.k0s(),e.j41(45,"ion-icon",28),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.management(t,"finanzas/venta",0))}),e.k0s()(),e.j41(46,"div",26)(47,"span"),e.EFF(48),e.k0s(),e.j41(49,"ion-icon",29),e.bIt("click",function(){const t=e.eBV(i).$implicit,o=e.XpG();return e.Njj(o.management(t,"finanzas/dividendo",0))}),e.k0s()()()(),e.DNE(50,k,3,2,"div",30),e.k0s()()}if(2&a){const i=s.$implicit;e.R7$(2),e.Y8G("ngClass",i.acciones>0?"fondo-activo":i.beneficios>=0?"fondo-beneficio":"fondo-perdida"),e.R7$(2),e.FS9("title",i.descripcion),e.R7$(),e.JRh(i.abreviatura),e.R7$(3),e.JRh(e.i5U(9,17,i.maxventa,"dd/MM/yy")),e.R7$(4),e.JRh(e.i5U(13,20,i.fecha,"dd/MM/yy")),e.R7$(7),e.JRh(e.i5U(20,23,i.acciones,"1.4-4")),e.R7$(3),e.JRh(e.i5U(23,26,i.precionventas,"1.4-4")),e.R7$(3),e.JRh(e.i5U(26,29,i.preciocompras,"1.4-4")),e.R7$(5),e.JRh(i.acciones>0?"Invertido":i.beneficios>=0?"Beneficios":"Perdida"),e.R7$(),e.Y8G("ngClass",i.beneficios>=0?"beneficio":"perdida"),e.R7$(),e.SpI("",e.i5U(33,32,i.beneficios,"1.2-2")," \u20ac"),e.R7$(2),e.Y8G("ngClass",i.beneficios>=0?"beneficio":"perdida"),e.R7$(),e.SpI("",e.i5U(36,35,i.porcertaje,"1.2-2"),"%"),e.R7$(5),e.JRh(i.compras),e.R7$(4),e.JRh(i.ventas),e.R7$(4),e.JRh(i.dividendos),e.R7$(2),e.Y8G("ngIf",i.expanded)}}const F=[{path:"",component:(()=>{var a;class s extends p.BasePage{constructor(n){super(n),this.basePageService=n,this.lstTransacciones=["venta","compra","dividendo"],this.beneficios=0,this.entityNameCompra="accion_compra",this.entityNameVenta="accion_venta",this.isOpenModal=!1,this.inversionActual=0,this.addEmpresa=!1,this.entityName="finanzas/cartera"}ngOnInit(){var n=this;return(0,g.A)(function*(){n.Init(),yield n.getCartera()})()}handleRefresh(n){var t=this;return(0,g.A)(function*(){yield t.getCartera(),n.target.complete()})()}formatFecha(n){const t=new Date(n);return`${t.getDate()}/${t.getMonth()+1}/${t.getFullYear()}`}getCartera(){var n=this;return(0,g.A)(function*(){try{n.beneficios=0,n.inversionActual=0,n.lstCartera=[],n.isLoading=!0;const t=new p.classHttp("get",n.entityName,null),o=yield n.myHttpService.ejecuteURL(t);null!=o&&o.data&&(n.lstCartera=null==o?void 0:o.data,n.lstCartera.forEach(c=>{c.expanded=!1,0==parseInt(c.acciones)?n.beneficios+=parseFloat(c.beneficios):n.inversionActual+=parseFloat(c.beneficios)}))}catch{}finally{n.isLoading=!1}})()}management(n,t,o){const c=t,r={carteraid:n.id};(c.includes("venta")||c.includes("dividendo"))&&0==o&&(r.acciones=n.acciones),this.editorEntityComponent.management(o,{entityName:c,entityInitialValues:r})}managementCartera(n,t){this.editorEntityComponent.management(t,{entityName:n,entityInitialValues:{}})}expanded(n){var t=this;return(0,g.A)(function*(){n.expanded=!n.expanded,n.expanded?t.getTransacciones(n):n.lstTransacciones=null})()}getTransacciones(n){var t=this;return(0,g.A)(function*(){n.loading=!0;const o=n.id.toString();let c=new p.classHttp("get","finanzas/cartera",null,"getTransacciones",null,o);try{let r=yield t.myHttpService.ejecuteURL(c);n.lstTransacciones=null==r?void 0:r.data}catch(r){t.utilService.message(p.typeMessage.danger,r.message)}finally{n.loading=!1}})()}}return(a=s).\u0275fac=function(n){return new(n||a)(e.rXU(p.BasePageService))},a.\u0275cmp=e.VBU({type:a,selectors:[["bolsa"]],viewQuery:function(n,t){if(1&n&&e.GBs(v,5),2&n){let o;e.mGM(o=e.lsd())&&(t.editorEntityComponent=o.first)}},features:[e.Vt3],decls:22,vars:12,consts:[["editorEntity",""],["slot","fixed",3,"ionRefresh"],[3,"saveEvent","deleteEvent","MostrarIconAdd","entityName"],[1,"router-outlet"],[1,"col-2"],[1,"col-3"],["color","success","shape","round","size","small",3,"click"],["slot","start","name","add-circle"],[1,"col-7"],[1,"flex_column","infoBeneInver"],[4,"ngIf"],["class","grid ",4,"ngFor","ngForOf"],[3,"message"],[1,"grid"],[1,"col-12","itemTreeCompra"],[1,"grid","head",3,"ngClass"],[1,"col-3","hand","name-date",3,"click"],[1,"text-top","font-bold",3,"title"],[1,"precioventas"],[1,"preciocompras"],[1,"col-3","hand",3,"click"],[1,"text-center","precio-beneficio"],[1,"acciones"],[1,"col-3",3,"click"],[3,"ngClass"],[1,"col-3","flex_row"],[1,"flex_column","flex-center-align-items"],["name","add-circle",1,"hand",2,"font-size","24px","color","blue",3,"click"],["name","add-circle",1,"hand",2,"font-size","24px","color","orange",3,"click"],["name","add-circle",1,"hand",2,"font-size","24px","color","green",3,"click"],["class","operaciones",4,"ngIf"],[1,"operaciones"],[3,"message",4,"ngIf"],[3,"class","click",4,"ngFor","ngForOf"],[3,"click"],[1,"text-center"],[1,"col-3","flex_column"]],template:function(n,t){if(1&n){const o=e.RV6();e.j41(0,"ion-refresher",1),e.bIt("ionRefresh",function(r){return e.eBV(o),e.Njj(t.handleRefresh(r))}),e.nrm(1,"ion-refresher-content"),e.k0s(),e.j41(2,"app-editor-entity",2,0),e.bIt("saveEvent",function(){return e.eBV(o),e.Njj(t.getCartera())})("deleteEvent",function(){return e.eBV(o),e.Njj(t.getCartera())}),e.k0s(),e.j41(4,"ion-grid",3)(5,"ion-row"),e.nrm(6,"ion-col",4),e.j41(7,"ion-col",5)(8,"ion-button",6),e.bIt("click",function(){return e.eBV(o),e.Njj(t.managementCartera("finanzas/cartera",0))}),e.nrm(9,"ion-icon",7),e.k0s()(),e.j41(10,"ion-col",8)(11,"div",9)(12,"span"),e.EFF(13),e.nI1(14,"number"),e.k0s(),e.j41(15,"span"),e.EFF(16),e.nI1(17,"number"),e.k0s()()()(),e.j41(18,"ion-row")(19,"ion-col"),e.DNE(20,b,2,1,"div",10)(21,C,51,38,"div",11),e.k0s()()()}2&n&&(e.R7$(2),e.Y8G("MostrarIconAdd",!1)("entityName",t.entityName),e.R7$(11),e.SpI("beneficios : ",e.i5U(14,6,t.beneficios,"1.2-2"),"\u20ac"),e.R7$(3),e.SpI("Inversi\xf3n : ",e.i5U(17,9,t.inversionActual,"1.2-2"),"\u20ac"),e.R7$(4),e.Y8G("ngIf",t.isLoading),e.R7$(),e.Y8G("ngForOf",t.lstCartera))},dependencies:[f.YU,f.Sq,f.bT,d.Jm,d.hU,d.lO,d.iq,d.To,d.Ki,d.ln,p.EditorEntityComponent,p.CargandoComponent,f.QX,f.vh],styles:[".itemTreeCompra[_ngcontent-%COMP%]{font-size:12px;padding-bottom:10px}.infoBeneInver[_ngcontent-%COMP%]{font-size:11px;color:navy}.precioTotal[_ngcontent-%COMP%]{color:#fff;background-color:navy}.head[_ngcontent-%COMP%]{border:solid 2px;padding:5px}.detail[_ngcontent-%COMP%]{border:solid 1px;padding:5px;background-color:#90ee90}.name-date[_ngcontent-%COMP%]{display:flex;flex-direction:column}.precio-beneficio[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding-bottom:1px}.acciones[_ngcontent-%COMP%]{background-color:navy;color:#fff;padding:3px}.beneficio[_ngcontent-%COMP%]{background-color:green;color:#fff;padding:3px}.perdida[_ngcontent-%COMP%]{background-color:red;color:#fff;padding:3px;font-size:11px}.fondo-beneficio[_ngcontent-%COMP%]{background-color:#bef3be}.fondo-perdida[_ngcontent-%COMP%]{background-color:#f5cece}.fondo-activo[_ngcontent-%COMP%]{background-color:gray;color:#fff}.compra[_ngcontent-%COMP%]{background-color:#add8e6;border:solid 1px;width:98%}.venta[_ngcontent-%COMP%]{background-color:#ffa07a;border:solid 1px;width:98%}.dividendo[_ngcontent-%COMP%]{background-color:green;color:#fff;border:solid 1px;width:98%}.preciocompras[_ngcontent-%COMP%]{color:#00f}.precioventas[_ngcontent-%COMP%]{color:orange}"]}),s})()}];let R=(()=>{var a;class s{}return(a=s).\u0275fac=function(n){return new(n||a)},a.\u0275mod=e.$C({type:a}),a.\u0275inj=e.G2t({imports:[f.MD,_.YN,_.X1,d.bv,m.iI.forChild(F),p.SharedComponentsModule]}),s})()}}]);