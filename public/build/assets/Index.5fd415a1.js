import{_ as u}from"./Authenticated.0fd431e8.js";import{m,o as a,c as o,a as t,u as p,w as l,F as r,H as f,b as e,s as b,t as i,j as c}from"./app.8ee55d72.js";import{_ as d}from"./Link.cf5d510e.js";import"./ApplicationLogo.38102ed7.js";import"./plugin-vue_export-helper.21dcd24c.js";const v={class:"py-12"},w={class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},x={class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},g={class:"p-6 bg-white border-b border-gray-200"},y={class:"flex justify-end"},N=c("New Patient"),j={class:"pt-5"},k={class:"patients border-spacing-2 table w-full"},B={class:"patient-name table-cell"},F={class:"patient-name table-cell"},V={class:"patient-name table-cell"},D={class:"patient-actions table-cell"},H={class:"flex justify-end"},$={class:"patient-edit"},q=c("view"),S={__name:"Index",props:{patients:{type:Array,required:!1,default:[]}},setup(_){const h=_;return m({terms:!1}),(n,A)=>(a(),o(r,null,[t(p(f),{title:"Dashboard"}),t(u,null,{default:l(()=>[e("div",v,[e("div",w,[e("div",x,[e("div",g,[e("div",y,[t(d,{href:n.route("patient.create")},{default:l(()=>[N]),_:1},8,["href"])]),e("div",j,[e("ul",k,[(a(!0),o(r,null,b(h.patients,s=>(a(),o("li",{key:s.id,class:"patient table-row"},[e("div",B,[e("h3",null,i(s.user.name),1)]),e("div",F,[e("h3",null,i(s.user.phone),1)]),e("div",V,[e("h3",null,i(s.user.email),1)]),e("div",D,[e("div",H,[e("div",$,[t(d,{href:n.route("patient.show",s.id),class:"ml-4"},{default:l(()=>[q]),_:2},1032,["href"])])])])]))),128))])])])])])])]),_:1})],64))}};export{S as default};