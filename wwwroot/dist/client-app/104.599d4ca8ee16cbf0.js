"use strict";(self.webpackChunkClientApp=self.webpackChunkClientApp||[]).push([[104],{6104:(k,d,s)=>{s.r(d),s.d(d,{AccountModule:()=>M});var g=s(4466),m=s(7979),l=s(2382),e=s(7587),f=s(1964),p=s(9808);function _(o,n){1&o&&(e.TgZ(0,"div",26),e._uU(1,"The password and its confirmation do not match!"),e.qZA())}function Z(o,n){1&o&&(e.TgZ(0,"div",26),e._uU(1,"Invalid old password"),e.qZA())}function w(o,n){1&o&&(e.TgZ(0,"small",28),e._uU(1," Your password is required. "),e.qZA())}function v(o,n){if(1&o&&(e.TgZ(0,"div",23),e.YNc(1,w,2,0,"small",27),e.qZA()),2&o){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=t.passwordForm.get("oldPassword"))||null==r.errors?null:r.errors.required)}}function h(o,n){1&o&&(e.TgZ(0,"small",28),e._uU(1," Your password is required. "),e.qZA())}function P(o,n){if(1&o&&(e.TgZ(0,"div",23),e.YNc(1,h,2,0,"small",27),e.qZA()),2&o){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=t.passwordForm.get("newPassword"))||null==r.errors?null:r.errors.required)}}function T(o,n){1&o&&(e.TgZ(0,"small",28),e._uU(1," Your password is required. "),e.qZA())}function q(o,n){if(1&o&&(e.TgZ(0,"div",23),e.YNc(1,T,2,0,"small",27),e.qZA()),2&o){const t=e.oxw();let r;e.xp6(1),e.Q6J("ngIf",null==(r=t.passwordForm.get("confirmPassword"))||null==r.errors?null:r.errors.required)}}let u=(()=>{class o{constructor(t,r,i){this.router=t,this.fb=r,this.tosterService=i,this.doNotMatch=!1,this.error=!1,this.authorities=[],this.isSaving=!1,this.passwordForm=this.fb.group({oldPassword:["",[l.kI.required]],newPassword:["",[l.kI.required]],confirmPassword:["",[l.kI.required]]})}ngOnInit(){}changePassword(){this.error=!1,this.doNotMatch=!1,this.isSaving=!1,this.passwordForm.get(["newPassword"]).value!==this.passwordForm.get(["confirmPassword"]).value&&(this.doNotMatch=!0)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.F0),e.Y36(l.qu),e.Y36(f.$))},o.\u0275cmp=e.Xpm({type:o,selectors:[["snla-password"]],decls:39,vars:7,consts:[["id","cover",1,"min-vh-100"],["id","cover-caption"],[1,"container"],[1,"d-flex","justify-content-center","mb-2"],["src","assets/images/logo-snla.png","height","100px"],[1,"row","text-white","mt-2"],[1,"col-xl-5","col-lg-6","col-md-8","col-sm-10","mx-auto","form","p-4"],[1,"px-2"],["class","alert alert-danger",4,"ngIf"],["name","form","role","form",3,"formGroup","ngSubmit"],[1,"titleCard","text-center","py-2"],[1,"row"],[1,"form-group","col-md-12"],["for","oldPassword",1,"form-control-label","labelStyle"],["type","password","id","oldPassword","name","oldPassword","placeholder","***************","formControlName","oldPassword","data-cy","oldPassword",1,"form-control"],["oldPassword",""],["class","row col-md-12",4,"ngIf"],["for","newPassword",1,"form-control-label","labelStyle"],["type","password","id","newPassword","name","newPassword","placeholder","***************","formControlName","newPassword","data-cy","newPassword",1,"form-control"],["newPassword",""],["for","confirmPassword",1,"form-control-label","labelStyle"],["type","password","id","confirmPassword","name","confirmPassword","placeholder","***************","formControlName","confirmPassword","data-cy","confirmPassword",1,"form-control"],["confirmPassword",""],[1,"row","col-md-12"],[1,"form-group","col-md-12","text-center"],["type","submit",1,"btn","changePasswordButton",3,"disabled"],[1,"alert","alert-danger"],["class","form-text text-danger",4,"ngIf"],[1,"form-text","text-danger"]],template:function(t,r){1&t&&(e.TgZ(0,"section",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"div",3),e._UZ(4,"img",4),e.qZA(),e.TgZ(5,"div",5),e.TgZ(6,"div",6),e.TgZ(7,"div",7),e.YNc(8,_,2,0,"div",8),e.YNc(9,Z,2,0,"div",8),e.TgZ(10,"form",9),e.NdJ("ngSubmit",function(){return r.changePassword()}),e.TgZ(11,"h5",10),e._uU(12,"Change Password"),e.qZA(),e._UZ(13,"hr"),e.TgZ(14,"div",11),e.TgZ(15,"div",12),e.TgZ(16,"label",13),e._uU(17,"Old password"),e.qZA(),e._UZ(18,"input",14,15),e.qZA(),e.qZA(),e.YNc(20,v,2,1,"div",16),e.TgZ(21,"div",11),e.TgZ(22,"div",12),e.TgZ(23,"label",17),e._uU(24,"New Password"),e.qZA(),e._UZ(25,"input",18,19),e.qZA(),e.qZA(),e.YNc(27,P,2,1,"div",16),e.TgZ(28,"div",11),e.TgZ(29,"div",12),e.TgZ(30,"label",20),e._uU(31,"Confirm Password"),e.qZA(),e._UZ(32,"input",21,22),e.qZA(),e.qZA(),e.YNc(34,q,2,1,"div",16),e.TgZ(35,"div",23),e.TgZ(36,"div",24),e.TgZ(37,"button",25),e._uU(38,"Change Password"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(8),e.Q6J("ngIf",r.doNotMatch),e.xp6(1),e.Q6J("ngIf",r.error),e.xp6(1),e.Q6J("formGroup",r.passwordForm),e.xp6(10),e.Q6J("ngIf",r.passwordForm.get("oldPassword").invalid&&(r.passwordForm.get("oldPassword").dirty||r.passwordForm.get("oldPassword").touched)),e.xp6(7),e.Q6J("ngIf",r.passwordForm.get("newPassword").invalid&&(r.passwordForm.get("newPassword").dirty||r.passwordForm.get("newPassword").touched)),e.xp6(7),e.Q6J("ngIf",r.passwordForm.get("confirmPassword").invalid&&(r.passwordForm.get("confirmPassword").dirty||r.passwordForm.get("confirmPassword").touched)),e.xp6(3),e.Q6J("disabled",r.passwordForm.invalid||r.isSaving))},directives:[p.O5,l._Y,l.JL,l.sg,l.Fj,l.JJ,l.u],styles:['#cover[_ngcontent-%COMP%]{background:url(/dist/client-app/Group_1.0b8a475c6307120d.png) center center no-repeat;background-size:cover;height:100%;display:flex;align-items:center;position:relative}#cover-caption[_ngcontent-%COMP%]{width:100%;position:relative;z-index:1}form[_ngcontent-%COMP%]:before{content:"";height:100%;left:0;position:absolute;top:0;width:100%;background-color:#fff;z-index:-1;border-radius:10px}input[type=password][_ngcontent-%COMP%]{border-radius:0;background:transparent;border:none;border-bottom:2px solid #e4e6e8;opacity:.6}.changePasswordButton[_ngcontent-%COMP%]{width:312px;height:46px;border-radius:10px;background-color:#b79b7e;color:#fff}.labelStyle[_ngcontent-%COMP%]{text-align:left!important;line-height:21px;font-family:PublicSans-Regular;font-style:normal;font-weight:400;font-size:14px;color:#8083a3}.titleCard[_ngcontent-%COMP%]{line-height:24px;font-family:PublicSans-Bold;font-style:normal;font-weight:400;font-size:16px;color:#171721}']}),o})();function A(o,n){1&o&&(e.TgZ(0,"small",21),e._uU(1," First Name is required. "),e.qZA())}function b(o,n){1&o&&(e.TgZ(0,"small",21),e._uU(1," First Name is required required to be at least 1 characters. "),e.qZA())}function x(o,n){if(1&o&&(e.TgZ(0,"div",19),e.YNc(1,A,2,0,"small",20),e.YNc(2,b,2,0,"small",20),e.qZA()),2&o){const t=e.oxw();let r,i;e.xp6(1),e.Q6J("ngIf",null==(r=t.profileForm.get("firstName"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=t.profileForm.get("firstName"))||null==i.errors?null:i.errors.minlength)}}function N(o,n){1&o&&(e.TgZ(0,"small",21),e._uU(1," Last Name is required. "),e.qZA())}function C(o,n){1&o&&(e.TgZ(0,"small",21),e._uU(1," Last Name is required required to be at least 1 characters. "),e.qZA())}function y(o,n){if(1&o&&(e.TgZ(0,"div",19),e.YNc(1,N,2,0,"small",20),e.YNc(2,C,2,0,"small",20),e.qZA()),2&o){const t=e.oxw();let r,i;e.xp6(1),e.Q6J("ngIf",null==(r=t.profileForm.get("lastName"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=t.profileForm.get("lastName"))||null==i.errors?null:i.errors.minlength)}}function F(o,n){1&o&&(e.TgZ(0,"small",21),e._uU(1," Email is required. "),e.qZA())}function I(o,n){1&o&&(e.TgZ(0,"small",21),e._uU(1," Email is required required to be at least 6 characters. "),e.qZA())}function J(o,n){1&o&&(e.TgZ(0,"small",21),e._uU(1," Your Email is Invalid!. "),e.qZA())}function S(o,n){if(1&o&&(e.TgZ(0,"div",19),e.YNc(1,F,2,0,"small",20),e.YNc(2,I,2,0,"small",20),e.YNc(3,J,2,0,"small",20),e.qZA()),2&o){const t=e.oxw();let r,i,a;e.xp6(1),e.Q6J("ngIf",null==(r=t.profileForm.get("email"))||null==r.errors?null:r.errors.required),e.xp6(1),e.Q6J("ngIf",null==(i=t.profileForm.get("email"))||null==i.errors?null:i.errors.minlength),e.xp6(1),e.Q6J("ngIf",null==(a=t.profileForm.get("email"))||null==a.errors?null:a.errors.email)}}const U=function(){return["/"]};let c=(()=>{class o{constructor(t,r){this.fb=t,this.tosterService=r,this.selectedProfileImage="",this.profileImage="",this.isSaving=!1,this.profileForm=this.fb.group({firstName:[void 0,[l.kI.required,l.kI.minLength(1)]],lastName:[void 0,[l.kI.required,l.kI.minLength(1)]],email:[void 0,[l.kI.required,l.kI.minLength(6),l.kI.email]]})}ngOnInit(){}save(){this.profileForm.get("firstName"),this.profileForm.get("lastName"),this.profileForm.get("email")}onProfileImage_Selected(t){this.selectedProfileImage=t.target.files[0]}saveProfileImage(){}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(l.qu),e.Y36(f.$))},o.\u0275cmp=e.Xpm({type:o,selectors:[["snla-profile"]],decls:36,vars:8,consts:[[3,"ngSubmit"],[1,"row","col-md-12"],[1,"form-group","col-md-3"],["onError","this.src='/assets/images/profile.jpg'","width","200px","height","200px",1,"rounded-circle",3,"src"],[1,"form-group","col-md-2","mt-5"],["type","file","accept","image/*","name","media",1,"form-control","border-0",3,"change"],[1,"form-group","col-md-4","mt-5"],["type","submit",1,"btn","btn-primary"],["name","form","role","form",3,"formGroup","ngSubmit"],[1,"form-group","col-md-6"],["for","firstName"],["type","text","id","firstName","name","firstName","formControlName","firstName","data-cy","firstname",1,"form-control","inputStyle"],["for","lastName"],["type","text","id","lastName","name","lastName","formControlName","lastName","data-cy","lastname",1,"form-control","inputStyle"],["class","col-md-6",4,"ngIf"],["for","email"],["type","text","id","email","name","email","formControlName","email","data-cy","email","readonly","",1,"form-control","inputStyle"],["type","button",1,"btn","btnSize","cancelButton",3,"routerLink"],["type","submit",1,"btn","btnSize","btn-primary","text-white","float-right",3,"disabled"],[1,"col-md-6"],["class","form-text text-danger",4,"ngIf"],[1,"form-text","text-danger"]],template:function(t,r){1&t&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return r.saveProfileImage()}),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4),e.TgZ(5,"input",5),e.NdJ("change",function(a){return r.onProfileImage_Selected(a)}),e.qZA(),e.qZA(),e.TgZ(6,"div",6),e.TgZ(7,"button",7),e._uU(8,"Update image"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(9,"form",8),e.NdJ("ngSubmit",function(){return r.save()}),e.TgZ(10,"div",1),e.TgZ(11,"div",9),e.TgZ(12,"label",10),e._uU(13,"First Name"),e.qZA(),e._UZ(14,"input",11),e.qZA(),e.TgZ(15,"div",9),e.TgZ(16,"label",12),e._uU(17,"Last Name"),e.qZA(),e._UZ(18,"input",13),e.qZA(),e.qZA(),e.TgZ(19,"div",1),e.YNc(20,x,3,2,"div",14),e.YNc(21,y,3,2,"div",14),e.qZA(),e.TgZ(22,"div",1),e.TgZ(23,"div",9),e.TgZ(24,"label",15),e._uU(25,"Email Id"),e.qZA(),e._UZ(26,"input",16),e.qZA(),e.qZA(),e.TgZ(27,"div",1),e.YNc(28,S,4,3,"div",14),e.qZA(),e.TgZ(29,"div",1),e.TgZ(30,"div",9),e.TgZ(31,"button",17),e._uU(32,"Cancel"),e.qZA(),e.qZA(),e.TgZ(33,"div",9),e.TgZ(34,"button",18),e._uU(35,"Save Update"),e.qZA(),e.qZA(),e.qZA(),e.qZA()),2&t&&(e.xp6(3),e.Q6J("src",r.profileImage,e.LSH),e.xp6(6),e.Q6J("formGroup",r.profileForm),e.xp6(11),e.Q6J("ngIf",r.profileForm.get("firstName").invalid&&(r.profileForm.get("firstName").dirty||r.profileForm.get("firstName").touched)),e.xp6(1),e.Q6J("ngIf",r.profileForm.get("lastName").invalid&&(r.profileForm.get("lastName").dirty||r.profileForm.get("lastName").touched)),e.xp6(7),e.Q6J("ngIf",r.profileForm.get("email").invalid&&(r.profileForm.get("email").dirty||r.profileForm.get("email").touched)),e.xp6(3),e.Q6J("routerLink",e.DdM(7,U)),e.xp6(3),e.Q6J("disabled",r.profileForm.invalid||r.isSaving))},directives:[l._Y,l.JL,l.F,l.sg,l.Fj,l.JJ,l.u,p.O5,m.rH],styles:[".saveButton[_ngcontent-%COMP%]{width:199px;height:54px}.btnSize[_ngcontent-%COMP%]{width:199px;height:54px;border-radius:12px}"]}),o})();const Y=[{path:"",children:[{path:"password",component:u,data:{pageTitle:"Change Password"}},{path:"profile",component:c,data:{pageTitle:"My Profile"}}]}];let Q=(()=>{class o{}return o.components=[u,c],o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[m.Bz.forChild(Y)],m.Bz]}),o})(),M=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[[Q,g.m]]}),o})()}}]);