"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[404],{404:(I,v,l)=>{l.r(v),l.d(v,{CompraPageModule:()=>j});var g=l(177),P=l(4341),d=l(8974),s=l(8464),h=l(1547),_=l(8986),p=l(467),e=l(4438);let y=(()=>{var r;class c extends s.BasePage{constructor(o,t,n){super(o,t,n),this.myHttpService=o,this.seguridadService=t,this.myHttpService_EXEC=n,this.columns=[{name:"Descripci\xf3n",prop:"descripcion",type:"text",OrderInit:"ASC"}],this.saveEvent=new e.bkB,this.deleteEvent=new e.bkB,this.entityName="casa/compra_producto"}ngOnInit(){var o=this;return(0,p.A)(function*(){o.Init()})()}}return(r=c).\u0275fac=function(o){return new(o||r)(e.rXU(s.MyHttpService),e.rXU(s.SeguridadService),e.rXU(s.MyHttpService_EXEC))},r.\u0275cmp=e.VBU({type:r,selectors:[["add-producto"]],outputs:{saveEvent:"saveEvent",deleteEvent:"deleteEvent"},features:[e.Vt3],decls:4,vars:8,consts:[[1,"router-outlet"],[3,"saveEvent","deleteEvent","loadOnInit","canAddEntity","canUpdateEntity","title","entityName","columns","refresh","withCache"]],template:function(o,t){1&o&&(e.j41(0,"ion-grid",0)(1,"ion-row")(2,"ion-col")(3,"my-table",1),e.bIt("saveEvent",function(a){return t.saveEvent.emit(a)})("deleteEvent",function(a){return t.deleteEvent.emit(a)}),e.k0s()()()()),2&o&&(e.R7$(3),e.Y8G("loadOnInit",!0)("canAddEntity",t.user.isAdmin)("canUpdateEntity",t.user.isAdmin)("title","Productos")("entityName",t.entityName)("columns",t.columns)("refresh",t.tableRefresh)("withCache",!0))},dependencies:[d.hU,d.lO,d.ln,s.MyTableComponent]}),c})();function E(r,c){if(1&r){const i=e.RV6();e.j41(0,"ion-row")(1,"ion-col")(2,"add-producto",12),e.bIt("deleteEvent",function(t){e.eBV(i);const n=e.XpG();return e.Njj(n.deleteEventProducto(t))})("saveEvent",function(t){e.eBV(i);const n=e.XpG();return e.Njj(n.saveEventProducto(t))}),e.k0s()()()}}function C(r,c){1&r&&e.nrm(0,"app-base-cargando",13),2&r&&e.Y8G("message","Cargando Productos...")}function S(r,c){if(1&r){const i=e.RV6();e.j41(0,"div",14),e.bIt("click",function(){const t=e.eBV(i).$implicit,n=e.XpG();return e.Njj(n.selectProducto(t))}),e.EFF(1),e.k0s()}if(2&r){const i=c.$implicit;e.R7$(),e.SpI(" ",i.descripcion,"")}}function b(r,c){if(1&r){const i=e.RV6();e.j41(0,"div",14),e.bIt("click",function(){const t=e.eBV(i).$implicit,n=e.XpG();return e.Njj(n.unselectProducto(t))}),e.EFF(1),e.k0s()}if(2&r){const i=c.$implicit;e.R7$(),e.SpI(" ",i.descripcion,"")}}const w=[{path:"",component:(()=>{var r;class c extends s.BasePage{constructor(o,t,n,a){super(o,t,n),this.myHttpService=o,this.seguridadService=t,this.myHttpService_EXEC=n,this.utilService=a,this.addProducto=!1,this.lstProductosSelected=[],this.entityName="casa/compra"}ngOnInit(){var o=this;return(0,p.A)(function*(){o.Init(),yield o.getProductos()})()}getProductos(){var o=this;return(0,p.A)(function*(){try{var t,n;o.lstProductos=[],o.isLoading=!0;let f=new s.classHttp("get","casa/compra_producto",null),m=yield o.myHttpService.ejecuteURL(f);var a,u;null!==(t=m)&&void 0!==t&&t.data&&(o.lstProductos=null===(a=m)||void 0===a?void 0:a.data),f=new s.classHttp("get","casa/compra_producto_selected",null),m=yield o.myHttpService.ejecuteURL(f),null!==(n=m)&&void 0!==n&&n.data&&(o.lstProductosSelected=null===(u=m)||void 0===u?void 0:u.data),o.lstProductos=o.lstProductos.filter(x=>!o.lstProductosSelected.some(k=>k.id==x.id))}catch{}finally{o.isLoading=!1}})()}selectProducto(o){var t=this;return(0,p.A)(function*(){const n=o.id;(yield t.myHttpService_EXEC.Save("post","casa/compra_producto_selected",{id:n},t.pk))?(t.lstProductos=t.lstProductos.filter(u=>u.id!=o.id),t.lstProductosSelected.push(o),t.lstProductosSelected=t.lstProductosSelected.sort(t.compare)):t.utilService.message(s.typeMessage.danger,"No se ha podido a\xf1adir el producto")})()}unselectProducto(o){var t=this;return(0,p.A)(function*(){const n=o.id;(yield t.myHttpService_EXEC.Save("delete","casa/compra_producto_selected",{compra_productoid:n},"compra_productoid"))?(t.lstProductosSelected=t.lstProductosSelected.filter(u=>u.id!=o.id),t.lstProductos.push(o),t.lstProductos=t.lstProductos.sort(t.compare)):t.utilService.message(s.typeMessage.danger,"No se ha podido borrar el producto")})()}compare(o,t){return o.descripcion<t.descripcion?-1:o.descripcion>t.descripcion?1:0}handleRefresh(o){var t=this;return(0,p.A)(function*(){yield t.getProductos(),o.target.complete()})()}saveEventProducto(o){this.lstProductosSelected.some(t=>t.id==o.id)?(this.lstProductosSelected=this.lstProductosSelected.filter(t=>t.id!=o.id),this.lstProductosSelected.push(o),this.lstProductosSelected=this.lstProductosSelected.sort(this.compare)):(this.lstProductos=this.lstProductos.filter(t=>t.id!=o.id),this.lstProductos.push(o),this.lstProductos=this.lstProductos.sort(this.compare))}deleteEventProducto(o){this.lstProductos=this.lstProductos.filter(t=>t.id!=o.id)}}return(r=c).\u0275fac=function(o){return new(o||r)(e.rXU(s.MyHttpService),e.rXU(s.SeguridadService),e.rXU(s.MyHttpService_EXEC),e.rXU(s.UtilService))},r.\u0275cmp=e.VBU({type:r,selectors:[["bolsa"]],features:[e.Vt3],decls:16,vars:5,consts:[["slot","fixed",3,"ionRefresh"],[1,"router-outlet"],[1,"col-2"],["shape","round","size","small",3,"click","color"],["slot","start","name","fast-food-outline"],[1,"col-3"],[1,"col-7"],[4,"ngIf"],[3,"message",4,"ngIf"],[1,"container-producto"],["class","item hand",3,"click",4,"ngFor","ngForOf"],[1,"container-selected"],[3,"deleteEvent","saveEvent"],[3,"message"],[1,"item","hand",3,"click"]],template:function(o,t){1&o&&(e.j41(0,"ion-refresher",0),e.bIt("ionRefresh",function(a){return t.handleRefresh(a)}),e.nrm(1,"ion-refresher-content"),e.k0s(),e.j41(2,"ion-grid",1)(3,"ion-row")(4,"ion-col",2)(5,"ion-button",3),e.bIt("click",function(){return t.addProducto=!t.addProducto}),e.nrm(6,"ion-icon",4),e.k0s()(),e.nrm(7,"ion-col",5)(8,"ion-col",6),e.k0s(),e.DNE(9,E,3,0,"ion-row",7),e.j41(10,"ion-row"),e.DNE(11,C,1,1,"app-base-cargando",8),e.j41(12,"div",9),e.DNE(13,S,2,1,"div",10),e.k0s(),e.j41(14,"div",11),e.DNE(15,b,2,1,"div",10),e.k0s()()()),2&o&&(e.R7$(5),e.Y8G("color",t.addProducto?"warning":"success"),e.R7$(4),e.Y8G("ngIf",t.addProducto),e.R7$(2),e.Y8G("ngIf",t.isLoading),e.R7$(2),e.Y8G("ngForOf",t.lstProductos),e.R7$(2),e.Y8G("ngForOf",t.lstProductosSelected))},dependencies:[g.Sq,g.bT,d.Jm,d.hU,d.lO,d.iq,d.To,d.Ki,d.ln,s.CargandoComponent,y],styles:[".container-producto[_ngcontent-%COMP%]{background-color:#a4a4a4;border-radius:25px;box-shadow:5px 10px;border:1px solid #585858;padding:10px;display:flex;justify-content:center;align-items:center;flex-wrap:wrap;width:50%;align-content:space-between}.container-selected[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;flex-flow:row wrap;align-content:space-between;border-radius:25px;box-shadow:5px 10px;border:1px solid #585858;background-color:#ffffe0;padding:10px;width:50%;height:100%;min-height:50px}.item[_ngcontent-%COMP%]{width:100px;background:#fff;border:1px solid black;font-size:14px;text-align:center;vertical-align:middle;margin-left:5px;margin-bottom:5px;min-height:20px}"]}),c})()}];let j=(()=>{var r;class c{}return(r=c).\u0275fac=function(o){return new(o||r)},r.\u0275mod=e.$C({type:r}),r.\u0275inj=e.G2t({imports:[g.MD,P.YN,P.X1,d.bv,_.iI.forChild(w),s.SharedComponentsModule,h.bG]}),c})()}}]);