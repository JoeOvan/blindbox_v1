(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-payment-payment"],{"410e":function(e,t,a){"use strict";var r;a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){return r}));var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-uni-view",{staticClass:"wrapper"},[r("cu-custom",{attrs:{bgColor:"text-white bg-header",isBack:!0}},[r("template",{attrs:{slot:"backText"},slot:"backText"},[e._v("填写领取信息")])],2),r("v-uni-view",{staticClass:"navbar"},e._l(e.navList,(function(t,a){return r("v-uni-view",{key:a,staticClass:"nav-item",class:{current:e.tabCurrentIndex===a},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.tabClick(a)}}},[e._v(e._s(t.text))])})),1),r("v-uni-view",{staticClass:"address-form-wrap",class:{isShow:0===e.tabCurrentIndex}},[r("v-uni-form",{staticClass:"address-form",on:{submit:function(t){arguments[0]=t=e.$handleEvent(t),e.addressForm.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"address-form-item"},[r("v-uni-view",{staticClass:"label"},[e._v("收货地址：")]),r("v-uni-view",{staticClass:"form-item-wrap"},[r("AddressPicker",{staticClass:"address-input",attrs:{level:3},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.change.apply(void 0,arguments)}}},[e._v(e._s(e.planLocate))]),r("v-uni-image",{staticClass:"icon-arrows",attrs:{src:a("498e")}})],1)],1),r("v-uni-view",{staticClass:"address-form-item"},[r("v-uni-text",{staticClass:"label"},[e._v("门牌号：")]),r("v-uni-view",{staticClass:"form-item-wrap"},[r("v-uni-input",{staticClass:"address-input",attrs:{type:"text","placeholder-style":"color:#888888",placeholder:"详细地址，例1层101室",value:e.order},model:{value:e.order,callback:function(t){e.order="string"===typeof t?t.trim():t},expression:"order"}})],1)],1),r("v-uni-view",{staticClass:"address-form-item"},[r("v-uni-text",{staticClass:"label"},[e._v("联系人：")]),r("v-uni-view",{staticClass:"form-item-wrap"},[r("v-uni-input",{staticClass:"address-input",attrs:{type:"text","placeholder-style":"color:#888888",placeholder:"请填写收货人姓名",value:e.consignee},model:{value:e.consignee,callback:function(t){e.consignee="string"===typeof t?t.trim():t},expression:"consignee"}})],1)],1),r("v-uni-view",{staticClass:"address-form-item"},[r("v-uni-text",{staticClass:"label"},[e._v("手机号：")]),r("v-uni-view",{staticClass:"form-item-wrap"},[r("v-uni-input",{staticClass:"address-input",attrs:{type:"text","placeholder-style":"color:#888888",placeholder:"请填写收货人手机号码",value:e.moblie},model:{value:e.moblie,callback:function(t){e.moblie="string"===typeof t?t.trim():t},expression:"moblie"}})],1)],1),r("v-uni-view",{staticClass:"address-form-item"},[r("v-uni-button",{staticClass:"btn-address-submit",attrs:{"form-type":"submit"}},[e._v("提交配送信息")])],1)],1)],1),r("v-uni-view",{staticClass:"qrcode-wrap",class:{isShow:1===e.tabCurrentIndex}},[r("v-uni-view",{staticClass:"qrcode-cover"},[r("v-uni-view",{staticClass:"canvas"},[r("v-uni-canvas",{style:{width:e.qrcodeSize+"px",height:e.qrcodeSize+"px"},attrs:{"canvas-id":"qrcode"}})],1)],1),r("v-uni-view",{staticClass:"text"},[e._v("请向店员出示二维码1233")])],1)],1)},i=[]},4218:function(e,t,a){"use strict";var r=a("4ea4");a("4160"),a("a15b"),a("4d63"),a("ac1f"),a("25f0"),a("1276"),a("159b"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("5530"));a("96cf");var i=r(a("1da1")),s=r(a("dfe8")),o=r(a("1b2b")),d={components:{AddressPicker:s.default},data:function(){return{tabCurrentIndex:0,navList:[{state:0,text:"快递配送",orderList:[]},{state:1,text:"到店使用",orderList:[]}],planLocate:"点击选择收货地址",address:null,consignee:null,moblie:null,order:null,qrcodeSize:uni.upx2px(350),qrcodeMargin:uni.upx2px(20),qrcodeText:null,prizeLogId:""}},onLoad:function(e){this.qrcodeText=e.serialNo,this.prizeLogId=e.prizeLogId},methods:{changeTab:function(e){console.log(e),this.tabCurrentIndex=e.target.current},tabClick:function(e){console.log(e),this.tabCurrentIndex=e,1==e&&this.make()},change:function(e){var t=this;console.log(JSON.stringify(e.data)),this.planLocate="",e.data.forEach((function(e,a){t.planLocate+=0===a?e.name:"-"+e.name}));var a=this.planLocate.split("-");this.address=a.join("")},addressForm:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var a,r,i,s,o,d,c,l;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a={},r=e.address,i=e.order,s=e.consignee,o=e.moblie,!r||"点击选择收货地址"==r){t.next=9;break}a.address=r+i,t.next=11;break;case 9:return uni.showToast({title:"输入收件地址",icon:"none",duration:2e3}),t.abrupt("return");case 11:if(!s){t.next=16;break}a.consignee=s,t.next=19;break;case 16:return console.log(s),uni.showToast({title:"请填写收货人姓名",icon:"none",duration:2e3}),t.abrupt("return");case 19:if(d=new RegExp(/^1(3[0-9]|4[01456879]|5[0-35-9]|6[2567]|7[0-8]|8[0-9]|9[0-35-9])\d{8}$/),!d.test(o)){t.next=25;break}a.moblie=o,t.next=27;break;case 25:return uni.showToast({title:"请填写正确的收货人手机号码",icon:"none",duration:2e3}),t.abrupt("return");case 27:return a.prizeLogId=e.prizeLogId,c=uni.getStorageSync("token"),t.next=32,e.$request({url:e.$url.saveExpressInfoUrl,method:"post",data:(0,n.default)({},a),header:{"content-type":"application/x-www-form-urlencoded","X-Winzkj-Token":c}});case 32:l=t.sent,0==l.data.code&&e.getPayPrize();case 34:case"end":return t.stop()}}),t)})))()},getPayPrize:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=uni.getStorageSync("token"),r=e.prizeLogId,t.next=4,e.$request({url:e.$url.payExpressUrl+"?prizeLogId="+r,method:"get",header:{"content-type":"application/x-www-form-urlencoded","X-Winzkj-Token":a}});case 4:n=t.sent,e.weChatPayment(n.data.data);case 6:case"end":return t.stop()}}),t)})))()},weChatPayment:function(e){var t=this;this.onBridgeReady(e,(function(a){uni.showToast({title:"支付成功",icon:"none",duration:2e3});t.prizePoolId,e.tradeNo;uni.navigateTo({url:"/pages/record/record-list"})}),(function(e){alert("失败")}))},onBridgeReady:function(e,t,a){WeixinJSBridge.invoke("getBrandWCPayRequest",{appId:e.appId,timeStamp:e.timeStamp,nonceStr:e.nonceStr,package:e.package,signType:e.signType,paySign:e.paySign},(function(e){"get_brand_wcpay_request:ok"==e.err_msg?"function"==typeof t&&t(e):"function"==typeof a&&a(e)}))},make:function(){var e=this;return(0,i.default)(regeneratorRuntime.mark((function t(){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,t.next=3,o.default.make({canvasId:"qrcode",componentInstance:e,text:a.qrcodeText,size:a.qrcodeSize,margin:10,backgroundColor:"#ffffff",foregroundColor:"#000000",fileType:"jpg",correctLevel:o.default.errorCorrectLevel.H});case 3:t.sent;case 4:case"end":return t.stop()}}),t)})))()}}};t.default=d},"4a9e":function(e,t,a){"use strict";a.r(t);var r=a("410e"),n=a("8767");for(var i in n)"default"!==i&&function(e){a.d(t,e,(function(){return n[e]}))}(i);a("98af");var s,o=a("f0c5"),d=Object(o["a"])(n["default"],r["b"],r["c"],!1,null,"40000531",null,!1,r["a"],s);t["default"]=d.exports},8767:function(e,t,a){"use strict";a.r(t);var r=a("4218"),n=a.n(r);for(var i in r)"default"!==i&&function(e){a.d(t,e,(function(){return r[e]}))}(i);t["default"]=n.a},"98af":function(e,t,a){"use strict";var r=a("a23f"),n=a.n(r);n.a},a23f:function(e,t,a){var r=a("d741");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("4f06").default;n("79f71742",r,!0,{sourceMap:!1,shadowMode:!1})},d741:function(e,t,a){var r=a("24fb");t=r(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-40000531]{background:#fff}.swiper-box[data-v-40000531]{height:calc(100% - 40px)}.list-scroll-content[data-v-40000531]{height:100%}.navbar[data-v-40000531]{display:-webkit-box;display:-webkit-flex;display:flex;height:40px;background:#fff0ed;position:relative;z-index:10}.navbar .nav-item[data-v-40000531]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;font-size:15px;color:#666;position:relative}.navbar .nav-item.current[data-v-40000531]{color:#000;background:#fff}.address-form-wrap[data-v-40000531]{display:none}.address-form-wrap.isShow[data-v-40000531]{display:block}.address-form-wrap .address-form-item[data-v-40000531]{display:-webkit-box;display:-webkit-flex;display:flex;line-height:%?30?%;font-size:%?28?%;padding:%?40?% %?20?%;margin:0 %?20?%;border-bottom:%?1?% solid #f1f1f1;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.address-form-wrap .address-form-item[data-v-40000531]:nth-last-child(1){border:none}.address-form-wrap .address-form-item .label[data-v-40000531]{display:inline-block;width:%?190?%;font-size:%?28?%;font-weight:400;color:#000;-webkit-flex-shrink:0;flex-shrink:0}.address-form-wrap .address-form-item .form-item-wrap[data-v-40000531]{position:relative;width:%?520?%}.address-form-wrap .address-form-item .form-item-wrap .address-input[data-v-40000531]{font-size:%?28?%;font-weight:400;color:#888;display:inline-block;vertical-align:middle}.address-form-wrap .address-form-item .form-item-wrap .icon-location[data-v-40000531]{display:inline-block;width:%?17?%;height:%?21?%;vertical-align:top;margin-top:%?3?%;margin-right:%?5?%}.address-form-wrap .address-form-item .form-item-wrap .icon-arrows[data-v-40000531]{position:absolute;right:0;top:%?15?%;display:inline-block;width:%?13?%;height:%?25?%}.address-form-wrap .address-form-item .btn-address-submit[data-v-40000531]{font-size:%?30?%;font-family:Source Han Sans CN;font-weight:400;color:#fff;width:%?350?%;height:%?68?%;line-height:%?68?%;background:#fd5c40;border-radius:%?34?%}.qrcode-wrap[data-v-40000531]{display:none;text-align:center}.qrcode-wrap.isShow[data-v-40000531]{display:block}.qrcode-wrap .qrcode-cover[data-v-40000531]{width:%?400?%;height:%?400?%;margin:%?110?% auto 0 auto}.qrcode-wrap .qrcode[data-v-40000531]{display:inline-block;width:100%;height:100%}.qrcode-wrap .text[data-v-40000531]{display:inline-block;margin-top:%?60?%;font-size:%?30?%;font-weight:400;color:#000}.canvas[data-v-40000531]{width:100%;height:100%;text-align:center}.canvas uni-canvas[data-v-40000531]{margin:0 auto}.image[data-v-40000531]{width:%?354?%;margin-top:%?50?%;text-align:center}.image uni-image[data-v-40000531]{display:block}body.?%PAGE?%[data-v-40000531]{background:#fff}',""]),e.exports=t}}]);