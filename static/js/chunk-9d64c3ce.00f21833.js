(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9d64c3ce"],{"7f9f":function(e,t,o){"use strict";o("b801")},b801:function(e,t,o){},dd7b:function(e,t,o){"use strict";o.r(t);var r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"login"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules}},[o("h3",{staticClass:"title"},[e._v("xxxx-微服务平台 "),o("el-tag",{attrs:{type:"danger"}},[e._v("v3.6.1")])],1),o("el-form-item",{attrs:{prop:"username"}},[o("el-input",{attrs:{type:"text","auto-complete":"off",placeholder:"账户"},model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}},[o("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"user"},slot:"prefix"})],1)],1),o("el-form-item",{attrs:{prop:"password"}},[o("el-input",{attrs:{type:"password","auto-complete":"off",placeholder:"密码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}},[o("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"password"},slot:"prefix"})],1)],1),e.captchaOnOff?o("el-form-item",{attrs:{prop:"code"}},[o("el-input",{staticStyle:{width:"63%"},attrs:{"auto-complete":"off",placeholder:"验证码"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.code,callback:function(t){e.$set(e.loginForm,"code",t)},expression:"loginForm.code"}},[o("svg-icon",{staticClass:"el-input__icon input-icon",attrs:{slot:"prefix","icon-class":"validCode"},slot:"prefix"})],1),o("div",{staticClass:"login-code"},[o("img",{staticClass:"login-code-img",attrs:{src:e.codeUrl},on:{click:e.getCode}})])],1):e._e(),o("el-checkbox",{staticStyle:{margin:"0px 0px 25px 0px"},model:{value:e.loginForm.rememberMe,callback:function(t){e.$set(e.loginForm,"rememberMe",t)},expression:"loginForm.rememberMe"}},[e._v("记住密码")]),o("el-form-item",{staticStyle:{width:"100%"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{loading:e.loading,size:"medium",type:"primary"},nativeOn:{click:function(t){return t.preventDefault(),e.handleLogin(t)}}},[e.loading?o("span",[e._v("登 录 中...")]):o("span",[e._v("登 录")])]),e.register?o("div",{staticStyle:{float:"right"}},[o("router-link",{staticClass:"link-type",attrs:{to:"/register"}},[e._v("立即注册")])],1):e._e()],1)],1),e._m(0)],1)},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"el-login-footer"},[o("span",[e._v("Copyright © 2022 xxx All Rights Reserved.")])])}],n=(o("14d9"),o("7ded")),s=o("852e"),a=o.n(s),l=o("21f2"),c={name:"Login",data:function(){return{codeUrl:"",loginForm:{username:"",password:"",rememberMe:!1,code:"",uuid:""},loginRules:{username:[{required:!0,trigger:"blur",message:"请输入您的账号"}],password:[{required:!0,trigger:"blur",message:"请输入您的密码"}],code:[{required:!0,trigger:"change",message:"请输入验证码"}]},loading:!1,captchaOnOff:!0,register:!1,redirect:void 0}},watch:{$route:{handler:function(e){this.redirect=e.query&&e.query.redirect},immediate:!0}},created:function(){this.getCode(),this.getCookie()},methods:{getCode:function(){var e=this;Object(n["a"])().then((function(t){e.captchaOnOff=void 0===t.captchaOnOff||t.captchaOnOff,e.captchaOnOff&&(e.codeUrl="data:image/gif;base64,"+t.img,e.loginForm.uuid=t.uuid)}))},getCookie:function(){var e=a.a.get("username"),t=a.a.get("password"),o=a.a.get("rememberMe");this.loginForm={username:void 0===e?this.loginForm.username:e,password:void 0===t?this.loginForm.password:Object(l["a"])(t),rememberMe:void 0!==o&&Boolean(o)}},handleLogin:function(){var e=this;this.$refs.loginForm.validate((function(t){t&&(e.loading=!0,e.loginForm.rememberMe?(a.a.set("username",e.loginForm.username,{expires:30}),a.a.set("password",Object(l["b"])(e.loginForm.password),{expires:30}),a.a.set("rememberMe",e.loginForm.rememberMe,{expires:30})):(a.a.remove("username"),a.a.remove("password"),a.a.remove("rememberMe")),e.$store.dispatch("Login",e.loginForm).then((function(){e.$router.push({path:e.redirect||"/"}).catch((function(){}))})).catch((function(){e.loading=!1,e.captchaOnOff&&e.getCode()})))}))}}},m=c,d=(o("7f9f"),o("2877")),u=Object(d["a"])(m,r,i,!1,null,null,null);t["default"]=u.exports}}]);