"use strict";(self.webpackChunkClientApp=self.webpackChunkClientApp||[]).push([[129],{2129:(z,p,r)=>{r.r(p),r.d(p,{CustomersModule:()=>L});var d=r(7979),b=r(9841),c=r(8483),g=r(9808),t=r(7587),y=r(1146),A=r(2313),m=r(8080),C=r(4004),u=r(1764),h=r(2340),T=r(8999),f=r(520);let x=(()=>{class o{constructor(e){this.http=e,this.resourceUrl=h.N.baseUrl+"v1/admin/customers"}query(e){const a=(0,T.b)(e);return this.http.get(this.resourceUrl,{params:a,observe:"response"}).pipe((0,C.U)(i=>this.convertDateArrayFromServer(i)))}convertDateFromServer(e){return e.body&&(e.body.createdDate=e.body.createdDate?u(e.body.createdDate):void 0,e.body.lastAccessedDate=e.body.lastAccessedDate?u(e.body.lastAccessedDate):void 0),e}convertDateArrayFromServer(e){return e.body&&e.body.forEach(a=>{a.createdDate=a.createdDate?u(a.createdDate):void 0,a.lastAccessedDate=a.lastAccessedDate?u(a.lastAccessedDate):void 0}),e}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(f.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),q=(()=>{class o{constructor(e){this.http=e,this.Url=h.N.baseUrl+"v1/admin/countries"}fetchAll(){return this.http.get(this.Url)}}return o.\u0275fac=function(e){return new(e||o)(t.LFG(f.eN))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})();var v=r(2382);let S=(()=>{class o{transform(e){return e?e.format("D MMM YYYY"):""}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=t.Yjl({name:"formatMediumDate",type:o,pure:!0}),o})();function P(o,n){if(1&o&&(t.TgZ(0,"option",22),t._uU(1),t.qZA()),2&o){const e=n.$implicit;t.Q6J("value",e.name),t.xp6(1),t.Oqu(e.name)}}function M(o,n){if(1&o&&(t.TgZ(0,"tr"),t.TgZ(1,"td",25),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"formatMediumDate"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"formatMediumDate"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.qZA()),2&o){const e=n.$implicit,a=n.index,i=t.oxw(2);t.xp6(2),t.Oqu(20*(i.page-1)+a+1),t.xp6(2),t.Oqu(e.firstName),t.xp6(2),t.Oqu(e.scannedCount),t.xp6(2),t.Oqu(t.lcZ(9,6,e.createdDate)),t.xp6(3),t.Oqu(t.lcZ(12,8,e.lastAccessedDate)),t.xp6(3),t.Oqu(e.nationality)}}function D(o,n){if(1&o&&(t.TgZ(0,"div",23),t.TgZ(1,"table"),t.TgZ(2,"tr",24),t.TgZ(3,"th",25),t._uU(4,"Id"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Name"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Words Scanned"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"User Since"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Last Access Date"),t.qZA(),t.TgZ(13,"th"),t._uU(14,"Nationality"),t.qZA(),t.qZA(),t.TgZ(15,"tbody"),t.YNc(16,M,15,10,"tr",26),t.qZA(),t.qZA(),t.qZA()),2&o){const e=t.oxw();t.xp6(16),t.Q6J("ngForOf",e.customers)("ngForTrackBy",e.trackId)}}function N(o,n){1&o&&(t.TgZ(0,"div",27),t.TgZ(1,"h1"),t._uU(2,"No data available"),t.qZA(),t.qZA())}function O(o,n){if(1&o){const e=t.EpF();t.TgZ(0,"div"),t.TgZ(1,"div",28),t.TgZ(2,"ngb-pagination",29),t.NdJ("pageChange",function(i){return t.CHM(e),t.oxw().page=i})("pageChange",function(){return t.CHM(e),t.oxw().transition()}),t.qZA(),t.qZA(),t.qZA()}if(2&o){const e=t.oxw();t.xp6(2),t.Q6J("collectionSize",e.totalItems)("page",e.page)("pageSize",e.itemsPerPage)("maxSize",5)("rotate",!0)("boundaryLinks",!0)}}let Z=(()=>{class o{constructor(e,a,i,s,l,Y,B){this.accountService=e,this.titleService=a,this.activatedRoute=i,this.router=s,this.modalService=l,this.customerService=Y,this.countryService=B,this.nations=[],this.customers=[],this.isLoading=!1,this.totalItems=0,this.itemsPerPage=20,this.pageTitle="",this.account=null}ngOnInit(){this.handleNavigation(),this.updateTitle()}loadAll(){this.accountService.fetchAccount().subscribe(e=>{this.account=e}),this.isLoading=!0,this.customerService.query({pageNumber:this.page,pageSize:this.itemsPerPage}).subscribe(e=>{var a;this.isLoading=!1,this.paginateOperations(null!==(a=e.body)&&void 0!==a?a:[],e.headers)},()=>this.isLoading=!1),this.countryService.fetchAll().subscribe(e=>{this.nations=e})}trackId(e,a){return a.id}transition(){this.router.navigate(["./"],{relativeTo:this.activatedRoute.parent,queryParams:{page:this.page,sort:`${this.predicate},${this.ascending?c.aW:c.jo}`}})}filterByNationality(e){this.selectedNationality=e,this.isLoading=!0,this.customerService.query({pageNumber:this.page,pageSize:this.itemsPerPage,nationality:this.selectedNationality,date:this.selectedLastAccessDate?this.selectedLastAccessDate:""}).subscribe(a=>{var i;this.isLoading=!1,this.paginateOperations(null!==(i=a.body)&&void 0!==i?i:[],a.headers)},()=>this.isLoading=!1)}filterByAccessDate(e){this.customers=[];var a=new g.uU("en-US");this.selectedLastAccessDate=a.transform(e,"yyyy-MM-dd"),this.isLoading=!0,this.customerService.query({pageNumber:this.page,pageSize:this.itemsPerPage,nationality:this.selectedNationality?this.selectedNationality:"",date:this.selectedLastAccessDate?this.selectedLastAccessDate:""}).subscribe(i=>{var s;this.isLoading=!1,this.paginateOperations(null!==(s=i.body)&&void 0!==s?s:[],i.headers)},()=>this.isLoading=!1)}getPageTitle(e){var a;const i=null!==(a=e.data.pageTitle)&&void 0!==a?a:"";return e.firstChild&&this.getPageTitle(e.firstChild)||i}updateTitle(){let e=this.getPageTitle(this.router.routerState.snapshot.root);this.pageTitle=e||"",this.titleService.setTitle(e)}handleNavigation(){(0,b.a)([this.activatedRoute.data,this.activatedRoute.queryParamMap]).subscribe(([e,a])=>{var i;const s=a.get("page");this.page=+(null!=s?s:1);const l=(null!==(i=a.get(c._l))&&void 0!==i?i:e.defaultSort).split(",");this.predicate=l[0],this.ascending=l[1]===c.aW,this.loadAll()})}sort(){const e=[`${this.predicate},${this.ascending?c.aW:c.jo}`];return"id"!==this.predicate&&e.push("id"),e}paginateOperations(e,a){if(this.customers=e,null!==a.get("Pagination")){let i=JSON.parse(String(a.get("Pagination")));this.totalItems=Number(i.totalItems)}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(y.B),t.Y36(A.Dx),t.Y36(d.gz),t.Y36(d.F0),t.Y36(m.FF),t.Y36(x),t.Y36(q))},o.\u0275cmp=t.Xpm({type:o,selectors:[["snla-customers"]],decls:39,vars:6,consts:[[1,"mb-1"],[1,"ml-1"],[1,"row","no-gutters"],[1,"col-md-3"],["id","Welcome_back"],[1,"col-md-2"],[1,"col-md-7"],[1,"row","col-md-12-customer","no-gutters"],[1,"col-6"],[1,"row","col-12","no-gutters"],[1,"col-5","selectLabels"],[1,"labalSelect-customer"],[1,"col-7"],[1,"form-control","selectBoxStyle",3,"change"],["nationality",""],["value",""],[3,"value",4,"ngFor","ngForOf"],["type","date",1,"form-control",3,"change"],["accessDate",""],["class","table-responsive","id","customers",4,"ngIf"],["style","margin-top: 35px;",4,"ngIf"],[4,"ngIf"],[3,"value"],["id","customers",1,"table-responsive"],[1,"header"],[1,"pl-4"],[4,"ngFor","ngForOf","ngForTrackBy"],[2,"margin-top","35px"],[1,"row"],[3,"collectionSize","page","pageSize","maxSize","rotate","boundaryLinks","pageChange"]],template:function(e,a){if(1&e){const i=t.EpF();t.TgZ(0,"div",0),t.TgZ(1,"div"),t.TgZ(2,"div"),t.TgZ(3,"span",1),t._uU(4,"Hi "),t.TgZ(5,"b"),t._uU(6),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(7,"div",2),t.TgZ(8,"div",3),t.TgZ(9,"div",4),t.TgZ(10,"span",1),t._uU(11),t.qZA(),t.qZA(),t.qZA(),t._UZ(12,"div",5),t.TgZ(13,"div",6),t.TgZ(14,"div",7),t.TgZ(15,"div",8),t.TgZ(16,"div",9),t.TgZ(17,"div",10),t.TgZ(18,"span",11),t._uU(19,"By Nationality"),t.qZA(),t.qZA(),t.TgZ(20,"div",12),t.TgZ(21,"select",13,14),t.NdJ("change",function(){t.CHM(i);const l=t.MAs(22);return a.filterByNationality(l.value)}),t.TgZ(23,"option",15),t._uU(24,"All"),t.qZA(),t.YNc(25,P,2,2,"option",16),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(26,"div",8),t.TgZ(27,"div",9),t.TgZ(28,"div",10),t.TgZ(29,"span",11),t._uU(30,"By Access Date"),t.qZA(),t.qZA(),t.TgZ(31,"div",12),t.TgZ(32,"span"),t.TgZ(33,"input",17,18),t.NdJ("change",function(){t.CHM(i);const l=t.MAs(34);return a.filterByAccessDate(l.value)}),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.qZA(),t.TgZ(35,"div"),t.YNc(36,D,17,2,"div",19),t.YNc(37,N,3,0,"div",20),t.YNc(38,O,3,6,"div",21),t.qZA()}2&e&&(t.xp6(6),t.Oqu(null==a.account?null:a.account.name),t.xp6(5),t.Oqu(a.pageTitle),t.xp6(14),t.Q6J("ngForOf",a.nations),t.xp6(11),t.Q6J("ngIf",a.customers&&a.customers.length>=0),t.xp6(1),t.Q6J("ngIf",0==a.customers.length),t.xp6(1),t.Q6J("ngIf",a.customers.length>0))},directives:[v.YN,v.Kr,g.sg,g.O5,m.N9],pipes:[S],styles:['table[_ngcontent-%COMP%]{width:100%;border-collapse:separate;border-spacing:0 10px;margin-top:-10px}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{font-family:PublicSans-Bold;font-style:normal;font-weight:400;color:#000}tr[_ngcontent-%COMP%]{height:70px}tr[_ngcontent-%COMP%]:nth-child(odd){background-color:#dae1e9!important}tr[_ngcontent-%COMP%]:nth-child(odd).header{background-color:#fff!important}td[_ngcontent-%COMP%], tr[_ngcontent-%COMP%]{border:solid 2px #abaebe;border-style:solid none;padding:15px 10px;background-color:transparent}td[_ngcontent-%COMP%]:first-child{border-left-style:solid;border-top-left-radius:10px;border-bottom-left-radius:10px}td[_ngcontent-%COMP%]:last-child{border-right-style:solid;border-bottom-right-radius:10px;border-top-right-radius:10px}input[type=date][_ngcontent-%COMP%]{background-color:#dae1e9;border-color:#dae1e9;font-family:PublicSans-Bold;font-style:normal;font-weight:400;border-radius:10px}.selectLabels[_ngcontent-%COMP%]{display:flex;align-items:center}.selectBoxStyle[_ngcontent-%COMP%]{background-color:#dae1e9;border-color:#dae1e9;border-radius:10px;font-family:PublicSans-Bold;font-style:normal;font-weight:400;color:#000;padding:10px}.labalSelect-customer[_ngcontent-%COMP%]{font-family:PublicSans-Bold;font-style:normal;font-weight:400;position:relative;color:#030303;white-space:nowrap}  .page-item{margin-left:3px;margin-right:3px}  .page-item.disabled .page-link{border-color:#3f639c!important}  .page-item.active .page-link{z-index:1;color:#fff;background-color:#3f639c!important;border-color:#3f639c!important;border-radius:10px}  .page-link{position:relative;display:block;padding:.5rem .75rem;margin-left:-1px;line-height:1.25;color:#171721;background-color:#fff;border:1px solid #dee2e6;border-radius:10px}  .page-link:hover{z-index:2;color:#171721;text-decoration:none;background-color:#fff;border:1px solid #dee2e6;border-radius:10px}  a[aria-label=Previous]{display:none;border:1px solid #3F639C}  a[aria-label=Previous] span{display:none!important}  a[aria-label=Previous]:before{content:"< Previous"!important;color:#3f639c;border-color:#3f639c}  a[aria-label=First]{border:none}  a[aria-label=First] span{display:none!important}  a[aria-label=Next]{border:1px solid #3F639C}  a[aria-label=Next] span{display:none!important}  a[aria-label=Next]:before{content:"Next >"!important;color:#3f639c;border-color:#3f639c}  a[aria-label=Last]{border:none}  a[aria-label=Last] span{display:none!important}.col-md-12-customer[_ngcontent-%COMP%]{flex:0 0 100%;max-width:100%}']}),o})();const _=[{path:"",component:Z,data:{pageTitle:"Customer Directory",defaultSort:"id,asc"}}];let F=(()=>{class o{}return o.components=[Z],o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[d.Bz.forChild(_)],d.Bz]}),o})();var U=r(4466);let L=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[F,U.m]]}),o})()}}]);