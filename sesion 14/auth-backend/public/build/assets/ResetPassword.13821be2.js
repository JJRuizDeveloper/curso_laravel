import{u as c,o as f,c as w,w as n,a,b as e,H as _,d as t,e as V,n as b,f as g}from"./app.cb9341c9.js";import{_ as k,a as v}from"./PrimaryButton.2f892342.js";import{_ as l,a as i,b as m}from"./TextInput.b904cc25.js";import"./ApplicationLogo.d6e0023c.js";const x=["onSubmit"],y={class:"mt-4"},P={class:"mt-4"},$={class:"flex items-center justify-end mt-4"},R={__name:"ResetPassword",props:{email:String,token:String},setup(u){const d=u,s=c({token:d.token,email:d.email,password:"",password_confirmation:""}),p=()=>{s.post(route("password.update"),{onFinish:()=>s.reset("password","password_confirmation")})};return(S,o)=>(f(),w(k,null,{default:n(()=>[a(e(_),{title:"Reset Password"}),t("form",{onSubmit:g(p,["prevent"])},[t("div",null,[a(l,{for:"email",value:"Email"}),a(i,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e(s).email,"onUpdate:modelValue":o[0]||(o[0]=r=>e(s).email=r),required:"",autofocus:"",autocomplete:"username"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.email},null,8,["message"])]),t("div",y,[a(l,{for:"password",value:"Password"}),a(i,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e(s).password,"onUpdate:modelValue":o[1]||(o[1]=r=>e(s).password=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),t("div",P,[a(l,{for:"password_confirmation",value:"Confirm Password"}),a(i,{id:"password_confirmation",type:"password",class:"mt-1 block w-full",modelValue:e(s).password_confirmation,"onUpdate:modelValue":o[2]||(o[2]=r=>e(s).password_confirmation=r),required:"",autocomplete:"new-password"},null,8,["modelValue"]),a(m,{class:"mt-2",message:e(s).errors.password_confirmation},null,8,["message"])]),t("div",$,[a(v,{class:b({"opacity-25":e(s).processing}),disabled:e(s).processing},{default:n(()=>[V(" Reset Password ")]),_:1},8,["class","disabled"])])],40,x)]),_:1}))}};export{R as default};
