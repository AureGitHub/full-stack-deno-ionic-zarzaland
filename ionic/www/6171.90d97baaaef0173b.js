"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6171],{6171:(E,P,n)=>{n.r(P),n.d(P,{CompraPageModule:()=>x});var g=n(177),h=n(4341),d=n(4742),a=n(8464),v=n(8986),p=n(467),t=n(4438);function _(r,c){if(1&r){const s=t.RV6();t.j41(0,"ion-row")(1,"ion-col")(2,"tc-tipos",12),t.bIt("deleteEvent",function(e){t.eBV(s);const i=t.XpG();return t.Njj(i.deleteEventProducto(e))})("saveEvent",function(e){t.eBV(s);const i=t.XpG();return t.Njj(i.saveEventProducto(e))}),t.k0s()()()}if(2&r){const s=t.XpG();t.R7$(2),t.Y8G("entityName","casa/compra_producto")("user",s.user)("tableRefresh",s.tableRefresh)}}function C(r,c){1&r&&t.nrm(0,"app-base-cargando",13),2&r&&t.Y8G("message","Cargando Productos...")}function S(r,c){if(1&r){const s=t.RV6();t.j41(0,"div",14),t.bIt("click",function(){const e=t.eBV(s).$implicit,i=t.XpG();return t.Njj(i.selectProducto(e))}),t.EFF(1),t.k0s()}if(2&r){const s=c.$implicit;t.R7$(),t.SpI(" ",s.descripcion,"")}}function b(r,c){if(1&r){const s=t.RV6();t.j41(0,"div",14),t.bIt("click",function(){const e=t.eBV(s).$implicit,i=t.XpG();return t.Njj(i.unselectProducto(e))}),t.EFF(1),t.k0s()}if(2&r){const s=c.$implicit;t.R7$(),t.SpI(" ",s.descripcion,"")}}const y=[{path:"",component:(()=>{var r;class c extends a.BasePage{constructor(o){super(o),this.basePageService=o,this.addProducto=!1,this.lstProductosSelected=[],this.entityName="casa/compra"}ngOnInit(){var o=this;return(0,p.A)(function*(){o.Init(),yield o.getProductos()})()}getProductos(){var o=this;return(0,p.A)(function*(){try{var e,i;o.lstProductos=[],o.isLoading=!0;let f=new a.classHttp("get","casa/compra_producto",null),m=yield o.myHttpService.ejecuteURL(f);var l,u;null!==(e=m)&&void 0!==e&&e.data&&(o.lstProductos=null===(l=m)||void 0===l?void 0:l.data),f=new a.classHttp("get","casa/compra_producto_selected",null),m=yield o.myHttpService.ejecuteURL(f),null!==(i=m)&&void 0!==i&&i.data&&(o.lstProductosSelected=null===(u=m)||void 0===u?void 0:u.data),o.lstProductos=o.lstProductos.filter(j=>!o.lstProductosSelected.some(R=>R.id==j.id))}catch{}finally{o.isLoading=!1}})()}selectProducto(o){var e=this;return(0,p.A)(function*(){const i=o.id;(yield e.myHttpService_EXEC.Save("post","casa/compra_producto_selected",{id:i},e.pk))?(e.lstProductos=e.lstProductos.filter(u=>u.id!=o.id),e.lstProductosSelected.push(o),e.lstProductosSelected=e.lstProductosSelected.sort(e.compare)):e.utilService.message(a.typeMessage.danger,"No se ha podido a\xf1adir el producto")})()}unselectProducto(o){var e=this;return(0,p.A)(function*(){const i=o.id;(yield e.myHttpService_EXEC.Save("delete","casa/compra_producto_selected",{compra_productoid:i},"compra_productoid"))?(e.lstProductosSelected=e.lstProductosSelected.filter(u=>u.id!=o.id),e.lstProductos.push(o),e.lstProductos=e.lstProductos.sort(e.compare)):e.utilService.message(a.typeMessage.danger,"No se ha podido borrar el producto")})()}compare(o,e){return o.descripcion<e.descripcion?-1:o.descripcion>e.descripcion?1:0}handleRefresh(o){var e=this;return(0,p.A)(function*(){yield e.getProductos(),o.target.complete()})()}saveEventProducto(o){this.lstProductosSelected.some(e=>e.id==o.id)?(this.lstProductosSelected=this.lstProductosSelected.filter(e=>e.id!=o.id),this.lstProductosSelected.push(o),this.lstProductosSelected=this.lstProductosSelected.sort(this.compare)):(this.lstProductos=this.lstProductos.filter(e=>e.id!=o.id),this.lstProductos.push(o),this.lstProductos=this.lstProductos.sort(this.compare))}deleteEventProducto(o){this.lstProductos=this.lstProductos.filter(e=>e.id!=o.id)}}return(r=c).\u0275fac=function(o){return new(o||r)(t.rXU(a.BasePageService))},r.\u0275cmp=t.VBU({type:r,selectors:[["bolsa"]],features:[t.Vt3],decls:16,vars:5,consts:[["slot","fixed",3,"ionRefresh"],[1,"router-outlet"],[1,"col-2"],["shape","round","size","small",3,"click","color"],["slot","start","name","fast-food-outline"],[1,"col-3"],[1,"col-7"],[4,"ngIf"],[3,"message",4,"ngIf"],[1,"container-producto"],["class","item hand",3,"click",4,"ngFor","ngForOf"],[1,"container-selected"],[3,"deleteEvent","saveEvent","entityName","user","tableRefresh"],[3,"message"],[1,"item","hand",3,"click"]],template:function(o,e){1&o&&(t.j41(0,"ion-refresher",0),t.bIt("ionRefresh",function(l){return e.handleRefresh(l)}),t.nrm(1,"ion-refresher-content"),t.k0s(),t.j41(2,"ion-grid",1)(3,"ion-row")(4,"ion-col",2)(5,"ion-button",3),t.bIt("click",function(){return e.addProducto=!e.addProducto}),t.nrm(6,"ion-icon",4),t.k0s()(),t.nrm(7,"ion-col",5)(8,"ion-col",6),t.k0s(),t.DNE(9,_,3,3,"ion-row",7),t.j41(10,"ion-row"),t.DNE(11,C,1,1,"app-base-cargando",8),t.j41(12,"div",9),t.DNE(13,S,2,1,"div",10),t.k0s(),t.j41(14,"div",11),t.DNE(15,b,2,1,"div",10),t.k0s()()()),2&o&&(t.R7$(5),t.Y8G("color",e.addProducto?"warning":"success"),t.R7$(4),t.Y8G("ngIf",e.addProducto),t.R7$(2),t.Y8G("ngIf",e.isLoading),t.R7$(2),t.Y8G("ngForOf",e.lstProductos),t.R7$(2),t.Y8G("ngForOf",e.lstProductosSelected))},dependencies:[g.Sq,g.bT,d.Jm,d.hU,d.lO,d.iq,d.To,d.Ki,d.ln,a.CargandoComponent,a.Tc_tipoComponent],styles:[".container-producto[_ngcontent-%COMP%]{background-color:#a4a4a4;border-radius:25px;box-shadow:5px 10px;border:1px solid #585858;padding:10px;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;width:50%;align-content:space-between}.container-selected[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-flow:row wrap;align-content:space-between;border-radius:25px;box-shadow:5px 10px;border:1px solid #585858;background-color:#ffffe0;padding:10px;width:50%;height:100%;min-height:50px}.item[_ngcontent-%COMP%]{width:100px;background:#fff;border:1px solid black;font-size:14px;text-align:center;vertical-align:middle;margin-left:5px;margin-bottom:5px;min-height:20px}"]}),c})()}];let x=(()=>{var r;class c{}return(r=c).\u0275fac=function(o){return new(o||r)},r.\u0275mod=t.$C({type:r}),r.\u0275inj=t.G2t({imports:[g.MD,h.YN,h.X1,d.bv,v.iI.forChild(y),a.SharedComponentsModule]}),c})()}}]);