import{a as c,Q as r}from"./QCardSection.aa76e11f.js";import{_ as d,o as _,i as l,f as i,e as o,g as e,t as a,j as u,q as p,s as m}from"./index.f38e15f2.js";const v={name:"ActivityCard",props:{titulo:String,nivel:String,tipoDeEducacao:String,faixaEtaria:String,nota:String,preco:Number,CampoDeExperiencia:String},computed:{defIcon(){return this.CampoDeExperiencia==="Escuta, fala, pensamento e imagina\xE7\xE3o"?"/icons/area5.svg":this.CampoDeExperiencia==="Corpo, gestos e movimento"?"/icons/area4.svg":this.CampoDeExperiencia==="Espa\xE7os, tempo e quantidades,..."?"/icons/area3.svg":this.CampoDeExperiencia==="Tra\xE7os, sons, cores e formas"?"/icons/area2.svg":"/icons/area1.svg"}}},f=t=>(p("data-v-731fc4dd"),t=t(),m(),t),g={class:"row items-start q-gutter-md wrap"},h={class:"icons"},x=["src"],E={class:"price-rating"},C={class:"price"},S={class:"rating"},D=f(()=>e("img",{src:"/icons/half-star2.svg",alt:"icon"},null,-1)),y={class:"titulo"},I={class:"conteudo"},N={class:"conteudo"},w={class:"conteudo"};function A(t,q,s,B,Q,n){return _(),l("div",g,[i(r,{class:"my-card"},{default:o(()=>[i(c,{class:"imagem-fundo"},{default:o(()=>[e("div",h,[e("img",{class:"ic2",src:n.defIcon,alt:"\xCDcone de Experi\xEAncia"},null,8,x),e("section",E,[e("div",C,"R$ "+a(s.preco),1),e("div",S,[D,u(" "+a(s.nota),1)])])])]),_:1}),i(c,{class:"textos"},{default:o(()=>[e("div",y,a(s.titulo),1),e("div",I,"N\xEDvel: "+a(s.nivel),1),e("div",N,"Educa\xE7\xE3o: "+a(s.tipoDeEducacao),1),e("div",w,a(s.faixaEtaria),1)]),_:1})]),_:1})])}var T=d(v,[["render",A],["__scopeId","data-v-731fc4dd"]]);export{T as A};
