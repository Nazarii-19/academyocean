import{d as s,n as a}from"./index-93af59fe.js";const r=s({name:"Button",props:{type:{type:String,default:"button",validator:t=>["button","submit","reset"].includes(t)},disabled:{type:Boolean,default:!1},background:{type:String,default:"primary",validator:t=>["primary","secondary"].includes(t)}},computed:{getClass(){return["button",this.background==="primary"&&"button__primary",this.background==="secondary"&&"button__secondary"]}},methods:{onClick(t){if(this.disabled){t.preventDefault();return}this.$emit("click",t)}}});var o=function(){var e=this,n=e._self._c;return e._self._setupProxy,n("button",{class:e.getClass,attrs:{type:e.type,disabled:e.disabled},on:{click:e.onClick}},[e._t("default")],2)},l=[],i=a(r,o,l,!1,null,"74ee056b",null,null);const u=i.exports;export{u as default};
