(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/caiwumingxi/add-or-update"],{"0423":function(n,e,t){"use strict";t.r(e);var i=t("cb56"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a},"31b7":function(n,e,t){"use strict";var i=t("a507"),a=t.n(i);a.a},"3b1d":function(n,e,t){"use strict";t.r(e);var i=t("688f"),a=t("0423");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("31b7");var u,o=t("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"765859b2",null,!1,i["a"],u);e["default"]=s.exports},"688f":function(n,e,t){"use strict";var i={"w-picker":function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"329b"))}},a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}))},9779:function(n,e,t){"use strict";(function(n){t("ba55"),t("921b");i(t("66fd"));var e=i(t("3b1d"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},a507:function(n,e,t){},cb56:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,i,a,r,u){try{var o=n[r](u),s=o.value}catch(h){return void t(h)}o.done?e(s):Promise.resolve(s).then(i,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var u=n.apply(e,t);function o(n){r(u,i,a,o,s,"next",n)}function s(n){r(u,i,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("329b"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{zhangdan:"",zhanghao:"",xingming:"",shanghumingcheng:"",shouzhizhuangtai:"",jiaoyijine:"",shijian:"",jiaoyidanhao:"",beizhu:"",zhaopian:"",userid:""},shouzhizhuangtaiOptions:[],shouzhizhuangtaiIndex:0,user:{},ro:{zhangdan:!1,zhanghao:!1,xingming:!1,shanghumingcheng:!1,shouzhizhuangtai:!1,jiaoyijine:!1,shijian:!1,jiaoyidanhao:!1,beizhu:!1,zhaopian:!1,userid:!1}}},components:{wPicker:o},computed:{},onLoad:function(){var e=u(i.default.mark((function e(t){var a,r,u,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=n.getStorageSync("nowTable"),e.next=3,this.$api.session(a);case 3:if(r=e.sent,this.user=r.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.shouzhizhuangtaiOptions="收入,支出".split(","),this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=16;break}return this.ruleForm.id=t.id,e.next=14,this.$api.info("caiwumingxi",this.ruleForm.id);case 14:r=e.sent,this.ruleForm=r.data;case 16:if(!t.cross){e.next=67;break}u=n.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 19:if((e.t1=e.t0()).done){e.next=67;break}if(o=e.t1.value,"zhangdan"!=o){e.next=25;break}return this.ruleForm.zhangdan=u[o],this.ro.zhangdan=!0,e.abrupt("continue",19);case 25:if("zhanghao"!=o){e.next=29;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,e.abrupt("continue",19);case 29:if("xingming"!=o){e.next=33;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,e.abrupt("continue",19);case 33:if("shanghumingcheng"!=o){e.next=37;break}return this.ruleForm.shanghumingcheng=u[o],this.ro.shanghumingcheng=!0,e.abrupt("continue",19);case 37:if("shouzhizhuangtai"!=o){e.next=41;break}return this.ruleForm.shouzhizhuangtai=u[o],this.ro.shouzhizhuangtai=!0,e.abrupt("continue",19);case 41:if("jiaoyijine"!=o){e.next=45;break}return this.ruleForm.jiaoyijine=u[o],this.ro.jiaoyijine=!0,e.abrupt("continue",19);case 45:if("shijian"!=o){e.next=49;break}return this.ruleForm.shijian=u[o],this.ro.shijian=!0,e.abrupt("continue",19);case 49:if("jiaoyidanhao"!=o){e.next=53;break}return this.ruleForm.jiaoyidanhao=u[o],this.ro.jiaoyidanhao=!0,e.abrupt("continue",19);case 53:if("beizhu"!=o){e.next=57;break}return this.ruleForm.beizhu=u[o],this.ro.beizhu=!0,e.abrupt("continue",19);case 57:if("zhaopian"!=o){e.next=61;break}return this.ruleForm.zhaopian=u[o],this.ro.zhaopian=!0,e.abrupt("continue",19);case 61:if("userid"!=o){e.next=65;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,e.abrupt("continue",19);case 65:e.next=19;break;case 67:this.styleChange();case 68:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},shijianConfirm:function(n){console.log(n),this.ruleForm.shijian=n.result,this.$forceUpdate()},shouzhizhuangtaiChange:function(n){this.shouzhizhuangtaiIndex=n.target.value,this.ruleForm.shouzhizhuangtai=this.shouzhizhuangtaiOptions[this.shouzhizhuangtaiIndex]},zhaopianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.zhaopian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!this.ruleForm.jiaoyijine||this.$validate.isIntNumer(this.ruleForm.jiaoyijine)){n.next=3;break}return this.$utils.msg("交易金额应输入整数"),n.abrupt("return");case 3:if(!this.ruleForm.id){n.next=8;break}return n.next=6,this.$api.update("caiwumingxi",this.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,this.$api.add("caiwumingxi",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])}},[["9779","common/runtime","common/vendor"]]]);