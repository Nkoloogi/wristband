import{B as D}from"./ApplicationLogo.f09a9889.js";import{o as B,a as M,c as _,r as L,b as d,d as m,e,f as h,w as k,v as $,g as a,h as o,n as u,u as r,T as N,i as y,L as b,j as c,t as x,k as j,F as z,H as E}from"./app.456086e8.js";import"./plugin-vue_export-helper.21dcd24c.js";const S={class:"relative"},V={__name:"Dropdown",props:{align:{default:"right"},width:{default:"48"},contentClasses:{default:()=>["py-1","bg-white"]}},setup(n){const s=n,t=g=>{l.value&&g.key==="Escape"&&(l.value=!1)};B(()=>document.addEventListener("keydown",t)),M(()=>document.removeEventListener("keydown",t));const i=_(()=>({48:"w-48"})[s.width.toString()]),p=_(()=>s.align==="left"?"origin-top-left left-0":s.align==="right"?"origin-top-right right-0":"origin-top"),l=L(!1);return(g,f)=>(d(),m("div",S,[e("div",{onClick:f[0]||(f[0]=w=>l.value=!l.value)},[h(g.$slots,"trigger")]),k(e("div",{class:"fixed inset-0 z-40",onClick:f[1]||(f[1]=w=>l.value=!1)},null,512),[[$,l.value]]),a(N,{"enter-active-class":"transition ease-out duration-200","enter-from-class":"transform opacity-0 scale-95","enter-to-class":"transform opacity-100 scale-100","leave-active-class":"transition ease-in duration-75","leave-from-class":"transform opacity-100 scale-100","leave-to-class":"transform opacity-0 scale-95"},{default:o(()=>[k(e("div",{class:u(["absolute z-50 mt-2 rounded-md shadow-lg",[r(i),r(p)]]),style:{display:"none"},onClick:f[2]||(f[2]=w=>l.value=!1)},[e("div",{class:u(["rounded-md ring-1 ring-black ring-opacity-5",n.contentClasses])},[h(g.$slots,"content")],2)],2),[[$,l.value]])]),_:3})]))}},O={__name:"DropdownLink",setup(n){return(s,t)=>(d(),y(r(b),{class:"block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out"},{default:o(()=>[h(s.$slots,"default")]),_:3}))}},v={__name:"NavLink",props:["href","active"],setup(n){const s=n,t=_(()=>s.active?"inline-flex items-center px-1 pt-1 border-b-2 border-indigo-400 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition  duration-150 ease-in-out":"inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out");return(i,p)=>(d(),y(r(b),{href:n.href,class:u(r(t))},{default:o(()=>[h(i.$slots,"default")]),_:3},8,["href","class"]))}},C={__name:"ResponsiveNavLink",props:["href","active"],setup(n){const s=n,t=_(()=>s.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition duration-150 ease-in-out":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out");return(i,p)=>(d(),y(r(b),{href:n.href,class:u(r(t))},{default:o(()=>[h(i.$slots,"default")]),_:3},8,["href","class"]))}},T={class:"min-h-screen bg-gray-100"},A={class:"bg-white border-b border-gray-100"},F={class:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"},H={class:"flex justify-between h-16"},P={class:"flex"},R={class:"shrink-0 flex items-center"},U={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},Y=c(" Dashboard "),q={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},G=c(" Doctors "),I={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},J=c(" Devices "),K={class:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"},Q=c(" Patients "),W={class:"hidden sm:flex sm:items-center sm:ml-6"},X={class:"ml-3 relative"},Z={class:"inline-flex rounded-md"},ee={type:"button",class:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"},te=e("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[e("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),se=c(" Log Out "),oe={class:"-mr-2 flex items-center sm:hidden"},ae={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ne={class:"pt-2 pb-3 space-y-1"},re=c(" Dashboard "),ie={class:"pt-4 pb-1 border-t border-gray-200"},le={class:"px-4"},de={class:"font-medium text-base text-gray-800"},ce={class:"font-medium text-sm text-gray-500"},ue={class:"mt-3 space-y-1"},he=c(" Log Out "),fe={key:0,class:"bg-white shadow"},me={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},pe={__name:"Authenticated",setup(n){const s=L(!1);return(t,i)=>(d(),m("div",null,[e("div",T,[e("nav",A,[e("div",F,[e("div",H,[e("div",P,[e("div",R,[a(r(b),{href:t.route("dashboard")},{default:o(()=>[a(D,{class:"block h-9 w-auto"})]),_:1},8,["href"])]),e("div",U,[a(v,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[Y]),_:1},8,["href","active"])]),e("div",q,[a(v,{href:""},{default:o(()=>[G]),_:1})]),e("div",I,[a(v,{href:""},{default:o(()=>[J]),_:1})]),e("div",K,[a(v,{href:""},{default:o(()=>[Q]),_:1})])]),e("div",W,[e("div",X,[a(V,{align:"right",width:"48"},{trigger:o(()=>[e("span",Z,[e("button",ee,[c(x(t.$page.props.auth.user.name)+" ",1),te])])]),content:o(()=>[a(O,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[se]),_:1},8,["href"])]),_:1})])]),e("div",oe,[e("button",{onClick:i[0]||(i[0]=p=>s.value=!s.value),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"},[(d(),m("svg",ae,[e("path",{class:u({hidden:s.value,"inline-flex":!s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),e("path",{class:u({hidden:!s.value,"inline-flex":s.value}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])])]),e("div",{class:u([{block:s.value,hidden:!s.value},"sm:hidden"])},[e("div",ne,[a(C,{href:t.route("dashboard"),active:t.route().current("dashboard")},{default:o(()=>[re]),_:1},8,["href","active"])]),e("div",ie,[e("div",le,[e("div",de,x(t.$page.props.auth.user.name),1),e("div",ce,x(t.$page.props.auth.user.email),1)]),e("div",ue,[a(C,{href:t.route("logout"),method:"post",as:"button"},{default:o(()=>[he]),_:1},8,["href"])])])],2)]),t.$slots.header?(d(),m("header",fe,[e("div",me,[h(t.$slots,"header")])])):j("",!0),e("main",null,[h(t.$slots,"default")])])]))}},ge=e("div",{class:"py-12"},[e("div",{class:"max-w-7xl mx-auto sm:px-6 lg:px-8"},[e("div",{class:"bg-white overflow-hidden shadow-sm sm:rounded-lg"},[e("div",{class:"p-6 bg-white border-b border-gray-200"}," You're logged in! ")])])],-1),xe={__name:"Dashboard",setup(n){return(s,t)=>(d(),m(z,null,[a(r(E),{title:"Dashboard"}),a(pe,null,{default:o(()=>[ge]),_:1})],64))}};export{xe as default};
