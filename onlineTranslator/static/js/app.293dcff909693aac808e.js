webpackJsonp([0],{0:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),r=a("OolZ"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"translateForm"}},[a("div",{staticClass:"wrapper"},[a("form",{on:{submit:t.formSubmit}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.textToTranslate,expression:"textToTranslate"}],staticClass:"input",attrs:{type:"text",placeholder:"请输入要翻译的内容"},domProps:{value:t.textToTranslate},on:{input:function(e){e.target.composing||(t.textToTranslate=e.target.value)}}}),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.language,expression:"language"}],staticClass:"select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.language=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"en"}},[t._v("English")]),t._v(" "),a("option",{attrs:{value:"ru"}},[t._v("Russian")]),t._v(" "),a("option",{attrs:{value:"ko"}},[t._v("Korean")]),t._v(" "),a("option",{attrs:{value:"ja"}},[t._v("Japanese")])]),t._v(" "),a("input",{staticClass:"btn",attrs:{type:"submit",value:"翻译"}})])])])},staticRenderFns:[]};var o={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{attrs:{id:"translateOutput"}},[this._v("\n\n    "+this._s(this.translatedText)+"\n\n")])},staticRenderFns:[]};var l={name:"App",data:function(){return{translatedText:""}},methods:{translateText:function(t,e){var a=this;this.$http.get("https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20180922T102617Z.ed4ae14c6da1acf9.2bfe7e37a0a91307173cdd3ab29f7064fdef9cb2&lang="+e+"&text="+t).then(function(t){a.translatedText=t.body.text[0]})}},components:{TranslateForm:a("VU/8")({name:"translateForm",data:function(){return{textToTranslate:"",language:""}},methods:{formSubmit:function(t){this.$emit("formSubmit",this.textToTranslate,this.language),t.preventDefault()}},created:function(){this.language="en"}},s,!1,function(t){a("w9ZX")},null,null).exports,TranslateOutput:a("VU/8")({name:"translateOutput",props:["translatedText"]},o,!1,function(t){a("Oth2")},null,null).exports}},i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("h1",[t._v("在线翻译")]),t._v(" "),a("h5",[t._v("简单 / 准确 / 易用")]),t._v(" "),a("translateForm",{on:{formSubmit:t.translateText}}),t._v(" "),a("translateOutput",{domProps:{textContent:t._s(t.translatedText)}})],1)},staticRenderFns:[]};var u=a("VU/8")(l,i,!1,function(t){a("WSL8")},null,null).exports;n.a.use(r.a),n.a.config.productionTip=!1,new n.a({el:"#app",components:{App:u},template:"<App/>"})},Oth2:function(t,e){},WSL8:function(t,e){},w9ZX:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.293dcff909693aac808e.js.map