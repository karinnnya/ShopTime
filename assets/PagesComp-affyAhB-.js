import{h as u,r as b,i as h,_ as m,a as d,b as s,c as g,w as y,v as x,e as n,n as i,f as l,F as f,d as v,t as w}from"./index-DTwDGHRh.js";const S=u("getApiData",()=>{const o=b([]);async function t(e){try{const r=await h.get(e);o.value=r.data}catch(r){console.log(r)}}return{res:o,getData:t}}),_={setup(){},props:{pageNumber:Number,nowPage:Number,changePage:Function}},P={class:"flex items-center -space-x-px h-8 text-sm justify-center my-8"},N=["onClick"];function k(o,t,e,r,C,p){const c=d("font-awesome-icon");return s(),g("div",null,[y(n("ul",P,[n("li",null,[n("button",{onClick:t[0]||(t[0]=a=>e.changePage(e.nowPage-1)),class:i([{"invisible ":e.nowPage===1},"flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 hover:bg-gray-100 hover:text-gray-700"])},[l(c,{icon:"angle-left"})],2)]),(s(!0),g(f,null,v(e.pageNumber,a=>(s(),g("li",{class:"bg-white",key:a+"pageNumber"},[n("button",{onClick:D=>e.changePage(a),class:i([{"pointer-events-none bg-gray-500 text-white":e.nowPage===a},"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 border border-gray-300 hover:bg-gray-100 hover:text-gray-700"])},w(a),11,N)]))),128)),n("li",null,[n("button",{onClick:t[1]||(t[1]=a=>e.changePage(e.nowPage+1)),class:i([{invisible:e.nowPage===e.pageNumber},"flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"])},[l(c,{icon:"angle-right"})],2)])],512),[[x,e.pageNumber.length!==0]])])}const B=m(_,[["render",k]]);export{B as P,S as u};