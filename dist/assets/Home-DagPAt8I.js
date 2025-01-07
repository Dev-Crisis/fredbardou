import{r as v,o as r,c as l,a as s,_ as d,b as e,t as c,F as n,d as u,w as f,e as b,f as _,u as y,g as m}from"./index-B5tZcZ5b.js";import{_ as w,g as k,h as C,t as B,p as E,c as S}from"./CTA-LF1Az7RU.js";const j="/assets/garden-illustration-DA-GFsaR.svg",R="/assets/cesu-logo-BHo2tPNF.webp",U={class:"bg-fbInteractive text-fbText2 w-full rounded-lg border border-fbBorder flex items-center justify-start flex-col gap-5 pb-2"},q={class:"font-title uppercase text-3xl"},L={class:"w-full px-4 min-h-[100px]"},$={class:"text-xl"},P={class:"h-full w-full flex justify-between items-center px-4"},F={class:"text-xl"},g={__name:"ServiceCard",props:{service:{type:Object,required:!0}},setup(i){return(p,o)=>{const x=v("RouterLink");return r(),l("div",U,[s(d,{height:"100px",width:"350px",alt:i.service.name,src:i.service.image,class:"object-left-top object-cover h-[150px] w-full rounded-t-md"},null,8,["alt","src"]),e("h4",q,c(i.service.name),1),e("ul",L,[(r(!0),l(n,null,u(i.service.details,t=>(r(),l("li",{key:t.id},[e("h5",$,"- "+c(t),1)]))),128))]),e("div",P,[s(x,{class:"bg-fbInteractive2 border-2 border-fbBorder transition-all duration-300 hover:bg-fbInteractive rounded-lg text-xl md:text-2xl py-2 px-3",to:i.service.link},{default:f(()=>o[0]||(o[0]=[b("En savoir plus ")])),_:1},8,["to"]),e("h6",F,"A partir de "+c(i.service.price)+"€/h",1)])])}}},z={class:"px-5 lg:px-12 grid grid-cols-1 place-items-center lg:grid-cols-2 gap-16 min-h-[75vh]"},I={class:"bg-fbBackground flex items-center justify-start py-12 px-6 md:p-12 flex-col gap-12"},T={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full place-items-stretch gap-12 max-w-[1500px]"},D={class:"bg-fbBackground2 flex items-center justify-start py-12 px-6 md:p-12 flex-col gap-12"},N={class:"grid grid-cols-1 lg:grid-cols-2 w-full place-items-center gap-12 max-w-[1500px]"},V={class:"bg-fbBackground flex items-center justify-start py-12 flex-col gap-5"},A={class:"grid grid-col-1 place-items-center lg:grid-cols-2 p-6 gap-6"},H={class:"flex items-start justify-center gap-6 flex-col"},J={__name:"Home",setup(i){const p=[{id:1,name:"Jardinier",price:15,image:k,details:["Tonte de gazon","Création de potager","Rempotage","Taillage de haie (<2m)"],link:"/services#jardinier"},{id:2,name:"Service à domicile",price:12,image:C,details:["Pharmacie","Courses","Récupérer/Déposer un colis"],link:"/services#service-a-domicile"},{id:3,name:"Petits Bricolage",price:12,image:B,details:["Pose de tringle à rideaux","Petits travaux de peintures","Montage de meubles"],link:"/services#petits-bricolage"}],o=[{id:1,name:"Entretien Piscine",price:20,image:E,details:["Tonte de gazon","Création de potager","Rempotage","Taillage de haie (<2m)"],link:"/services#entretien-piscine"},{id:2,name:"Entretien Auto",price:20,image:S,details:["Pharmacie","Courses","Rempotage","Récupérer/Déposer un colis"],link:"/services#entretien-auto"}];return _(()=>{y({title:"Frédéric Bardou | Service à domicile",meta:[{name:"description",content:"Frédéric Bardou, jardinier/paysagiste, service à domicile, petits bricolage, entretien auto, entretien piscine sur Rivesaltes"}]})}),(x,t)=>{const h=v("RouterLink");return r(),l(n,null,[e("section",z,[t[0]||(t[0]=e("div",{class:"flex items-start justify-center flex-col gap-5"},[e("h1",{class:"text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl"},"Frédéric Bardou"),e("h2",{class:"uppercase text-lg md:text-xl lg:text-3xl"},"simplifiez-vous la vie quotidienne")],-1)),s(d,{height:"350px",width:"350px",alt:"Personne paisible",class:"md:w-[500px] xl:w-[600px]",src:m(j)},null,8,["src"])]),e("section",I,[t[1]||(t[1]=e("h3",{class:"font-title text-5xl xl:text-6xl"},"Services",-1)),e("div",T,[(r(),l(n,null,u(p,a=>s(g,{key:a.id,service:a},null,8,["service"])),64))])]),e("section",D,[t[2]||(t[2]=e("h3",{class:"font-title text-5xl xl:text-6xl"},"Extras",-1)),e("div",N,[(r(),l(n,null,u(o,a=>s(g,{key:a.id,service:a},null,8,["service"])),64))])]),e("section",V,[t[7]||(t[7]=e("h3",{class:"font-title text-5xl xl:text-6xl"},"Le CESU",-1)),t[8]||(t[8]=e("h4",{class:"lg:text-xl"},"Le CESU c'est quoi",-1)),e("div",A,[e("div",H,[t[4]||(t[4]=e("h5",{class:"text-3xl md:text-4xl xl:text-5xl uppercase font-title"},"Un service simple ",-1)),t[5]||(t[5]=e("p",{class:"text-lg lg:text-xl"},"Le CESU (Chèque Emploi Service Universel) est une solution simple et pratique pour rémunérer et déclarer les services à domicile, y compris pour des activités liées à l’entretien des jardins, aux petits travaux de bricolage ou à l’aide quotidienne. Si vous êtes à la recherche de services comme le taillage de haies, la tonte de gazon, le rempotage, l’entretien de votre potager, ou encore des petits travaux de bricolage tels que la pose de tringle à rideaux, peinture, ou des réparations simples, le CESU est un moyen facile pour faire appel à des professionnels tout en bénéficiant d’avantages fiscaux. ",-1)),t[6]||(t[6]=e("p",{class:"text-lg lg:text-xl"}," Grâce au CESU, vous pouvez rémunérer votre prestataire de manière totalement sécurisée et déclarer simplement son travail. Vous profitez ainsi de réductions fiscales (crédit ou réduction d’impôt) et d’une couverture sociale pour les salariés à domicile, ce qui garantit leur protection et la vôtre. Ce dispositif vous permet également de déclarer de manière simplifiée les services de courses, récupération de médicaments ou autres tâches de la vie quotidienne, tout en réduisant la charge administrative. Utiliser le CESU pour des services comme l’entretien de votre jardin, les petits travaux de bricolage, ou même l’aide à domicile, c’est non seulement simplifier votre gestion mais aussi bénéficier d’une solution adaptée, sécurisée et avantageuse. ",-1)),s(h,{class:"bg-fbInteractive2 transition-all duration-300 border-2 border-fbBorder hover:bg-fbInteractive rounded-lg text-2xl py-2 px-3",to:"/cesu"},{default:f(()=>t[3]||(t[3]=[b("En savoir plus ")])),_:1})]),s(d,{height:"350px",width:"350px",class:"md:w-[450px] xl:w-[550px]",alt:"CESU Logo",src:m(R)},null,8,["src"])])]),s(w)],64)}}};export{J as default};