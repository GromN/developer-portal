"use strict";(self.webpackChunkcapialise_developer_portal=self.webpackChunkcapialise_developer_portal||[]).push([[693],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>k});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function u(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?u(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},u=Object.keys(e);for(n=0;n<u.length;n++)l=u[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)l=u[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=s(l),k=a,m=p["".concat(i,".").concat(k)]||p[k]||c[k]||u;return l?n.createElement(m,r(r({ref:t},d),{},{components:l})):n.createElement(m,r({ref:t},d))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=l.length,r=new Array(u);r[0]=p;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var s=2;s<u;s++)r[s]=l[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},85162:(e,t,l)=>{l.d(t,{Z:()=>r});var n=l(67294),a=l(86010);const u="tabItem_Ymn6";function r(e){let{children:t,hidden:l,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(u,r),hidden:l},t)}},65488:(e,t,l)=>{l.d(t,{Z:()=>k});var n=l(87462),a=l(67294),u=l(86010),r=l(72389),o=l(67392),i=l(7094),s=l(12466);const d="tabList__CuJ",c="tabItem_LNqP";function p(e){var t,l;const{lazy:r,block:p,defaultValue:k,values:m,groupId:h,className:f}=e,g=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:g.map((e=>{let{props:{value:t,label:l,attributes:n}}=e;return{value:t,label:l,attributes:n}})),b=(0,o.l)(y,((e,t)=>e.value===t.value));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const v=null===k?k:null!=(t=null!=k?k:null==(l=g.find((e=>e.props.default)))?void 0:l.props.value)?t:g[0].props.value;if(null!==v&&!y.some((e=>e.value===v)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:w,setTabGroupChoices:E}=(0,i.U)(),[N,T]=(0,a.useState)(v),I=[],{blockElementScrollPositionUntilNextRender:C}=(0,s.o5)();if(null!=h){const e=w[h];null!=e&&e!==N&&y.some((t=>t.value===e))&&T(e)}const P=e=>{const t=e.currentTarget,l=I.indexOf(t),n=y[l].value;n!==N&&(C(t),T(n),null!=h&&E(h,String(n)))},O=e=>{var t;let l=null;switch(e.key){case"ArrowRight":{var n;const t=I.indexOf(e.currentTarget)+1;l=null!=(n=I[t])?n:I[0];break}case"ArrowLeft":{var a;const t=I.indexOf(e.currentTarget)-1;l=null!=(a=I[t])?a:I[I.length-1];break}}null==(t=l)||t.focus()};return a.createElement("div",{className:(0,u.Z)("tabs-container",d)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":p},f)},y.map((e=>{let{value:t,label:l,attributes:r}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>I.push(e),onKeyDown:O,onFocus:P,onClick:P},r,{className:(0,u.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":N===t})}),null!=l?l:t)}))),r?(0,a.cloneElement)(g.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function k(e){const t=(0,r.Z)();return a.createElement(p,(0,n.Z)({key:String(t)},e))}},93624:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>w,contentTitle:()=>b,default:()=>T,frontMatter:()=>y,metadata:()=>v,toc:()=>E});var n=l(87462),a=l(67294),u=l(3905),r=l(65488),o=l(85162),i=l(86010);const s="browserWindow_my1Q",d="browserWindowHeader_jXSR",c="buttons_uHc7",p="browserWindowAddressBar_Pd8y",k="dot_giz1",m="browserWindowMenuIcon_Vhuh",h="bar_rrRL",f="browserWindowBody_Idgs";function g(e){let{children:t,minHeight:l,url:n}=e;return a.createElement("div",{className:s,style:{minHeight:l}},a.createElement("div",{className:d},a.createElement("div",{className:c},a.createElement("span",{className:k,style:{background:"#f25f58"}}),a.createElement("span",{className:k,style:{background:"#fbbe3c"}}),a.createElement("span",{className:k,style:{background:"#58cb42"}})),a.createElement("div",{className:(0,i.Z)(p,"text--truncate")},n||"https://localhost:3000"),a.createElement("div",{className:m},a.createElement("div",null,a.createElement("span",{className:h}),a.createElement("span",{className:h}),a.createElement("span",{className:h})))),a.createElement("div",{className:f},t))}const y={title:"Embedded funding search",tags:["API"]},b=void 0,v={unversionedId:"embedded-funding-search",id:"embedded-funding-search",title:"Embedded funding search",description:"Embed funding funding directly into your website to instantly have access to over 100 lenders",source:"@site/use-cases/embedded-funding-search.mdx",sourceDirName:".",slug:"/embedded-funding-search",permalink:"/use-cases/embedded-funding-search",draft:!1,editUrl:"https://github.com/Capitalise/developer-portal/edit/main/use-cases/embedded-funding-search.mdx",tags:[{label:"API",permalink:"/use-cases/tags/api"}],version:"current",lastUpdatedAt:1665992113,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"Embedded funding search",tags:["API"]},sidebar:"useCasesSideBar",previous:{title:"Credit profile widget",permalink:"/use-cases/credit-profile-widget"},next:{title:"Native funding search",permalink:"/use-cases/native-funding-search"}},w={},E=[{value:"Example",id:"example",level:2},{value:"Getting your Introducer Key",id:"getting-your-introducer-key",level:2},{value:"Place Embedded Funding Questionnaire",id:"place-embedded-funding-questionnaire",level:2},{value:"JavaScript - questionnaire modal",id:"javascript---questionnaire-modal",level:3},{value:"Iframe",id:"iframe",level:3},{value:"Pre-fill answer supported",id:"pre-fill-answer-supported",level:2}],N={toc:E};function T(e){let{components:t,...a}=e;return(0,u.kt)("wrapper",(0,n.Z)({},N,a,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Embed funding funding directly into your website to instantly have access to over 100 lenders"),(0,u.kt)("h2",{id:"example"},"Example"),(0,u.kt)(g,{url:"https://your-website.com",mdxType:"BrowserWindow"},(0,u.kt)("iframe",{src:"https://demo.capitalise.com/app/questionnaire/funding/search?introducer=eyJ0b2tlbiI6ImkyODhlMDg2OS0yNzllLTQ1YmUtYmI0OC1jMmQ0YzYxOGU3MzMiLCJpbnRyb2R1Y2VyTmFtZSI6IkhMIERlbW8gQ29tcGFueTEifQ==&external-close=false",width:"100%",height:"850px",frameborder:"0",scrolling:"no",allowtransparency:"true"})),(0,u.kt)("h2",{id:"getting-your-introducer-key"},"Getting your Introducer Key"),(0,u.kt)("p",null,"Once you've got your account set up by your Partnership Manager, navitagte to Website Integration (",(0,u.kt)("a",{parentName:"p",href:"https://capitalise.com/app/ui/settings/widget"},"Production")," / ",(0,u.kt)("a",{parentName:"p",href:"https://demo.capitalise.com/app/ui/settings/widget"},"Demo"),") page. You will be prompted to login if you haven't already."),(0,u.kt)("p",null,"Your ",(0,u.kt)("inlineCode",{parentName:"p"},"Introducer Key")," is displayed in both highlighted areas - they are identical so you only need to copy once."),(0,u.kt)("p",null,(0,u.kt)("img",{alt:"Introducer Key",src:l(57607).Z,width:"1117",height:"1141"})),(0,u.kt)("admonition",{title:"Important",type:"warning"},(0,u.kt)("ul",{parentName:"admonition"},(0,u.kt)("li",{parentName:"ul"},"DO NOT change your ",(0,u.kt)("inlineCode",{parentName:"li"},"Introducer Key")," because it's the unique identifier of your API Partner account"),(0,u.kt)("li",{parentName:"ul"},"Always double check if your ",(0,u.kt)("inlineCode",{parentName:"li"},"Introducer Key")," is correct before a production release by checking the page in ",(0,u.kt)("a",{parentName:"li",href:"#step-1-getting-your-introducer-key"},"Step 1"),". You might not be able to receive commission if the ",(0,u.kt)("inlineCode",{parentName:"li"},"Introducer Key")," is incorrect."),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("inlineCode",{parentName:"li"},"Introducer Key")," would be different between Production and Demo environments"),(0,u.kt)("li",{parentName:"ul"},"The same ",(0,u.kt)("inlineCode",{parentName:"li"},"Introducer Key")," of an environment can be used for Direct Hyperlink and Embeded Journey via JavaScript Snippets."))),(0,u.kt)("h2",{id:"place-embedded-funding-questionnaire"},"Place Embedded Funding Questionnaire"),(0,u.kt)("p",null,"You have two options to embed the funding questionnaire"),(0,u.kt)("h3",{id:"javascript---questionnaire-modal"},"JavaScript - questionnaire modal"),(0,u.kt)("p",null,"Place below link at the place you want to show the button. You can change the wording and style as you see fit. But please keep ",(0,u.kt)("inlineCode",{parentName:"p"},"capitalise-funding")," as the one of the class names."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-html"},'<a href="#" class="capitalise-funding">Get your business funded (in modal)</a>\n')),(0,u.kt)("p",null,"Add below CSS to before the end of ",(0,u.kt)("inlineCode",{parentName:"p"},"</head>")," tag to style the modal."),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-html"},"<style>\n  #capFundQModal {\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    position: fixed;\n    z-index: 1000000;\n  }\n</style>\n")),(0,u.kt)("p",null,"Place below the code before the ",(0,u.kt)("inlineCode",{parentName:"p"},"</body>")," tag and ",(0,u.kt)("inlineCode",{parentName:"p"},"REPLACE_WITH_YOUR_INTRODUCER_KEY")," with your introducer key. This JavaScript snippet will listen to the ",(0,u.kt)("inlineCode",{parentName:"p"},"onClick")," of elements that have the class ",(0,u.kt)("inlineCode",{parentName:"p"},"capitalise-funding")," and show the funding questionnaire in a modal."),(0,u.kt)("p",null,"If you have the user's consent, you can pass over in the ",(0,u.kt)("inlineCode",{parentName:"p"},"answers")," parameter so the those answers could be pre-filled. See full list of answers supported."),(0,u.kt)(r.Z,{groupId:"widget",mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"demo",label:"Demo",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Capitalise Funding Questionnaire --\x3e\n<script>\n  function startCapitaliseQuestionnaire(ev) {\n    ev.preventDefault();\n    var el = document.createElement("div");\n    el.setAttribute("id", "capFundQModal");\n    document.body.insertBefore(el, document.body.firstChild);\n    capitalise\n      .init({\n        \x3c!-- highlight-next-line --\x3e\n        referralCode: "REPLACE_WITH_YOUR_INTRODUCER_KEY", // !!! Replace with your introducer key\n\n        // Pre-fill answers, optional\n        // "answers": {\n        //     amount: 25000,\n        //     term: 3,\n        //     useOfFunds: 1,\n        //     companyType: 3,\n        //     sector: 23,\n        //     companyName: "ABC Limited",\n        //     companyNumber: "13390812",\n        //     revenue: 125000,\n        //     contactPhone: \'07974678882\',\n        //     contactName: \'Joe Bloggs\',\n        //     contactEmail: \'joe.bloggs@abc-limited.com\',\n        //     invoices: true,\n        //     assets: false,\n        //     epos: true,\n        //     purchaseOrders: false,\n        //     permissions: true,\n        //     clientsType: 3\n        // }\n      })\n      .start.inWrapper("capFundQModal");\n    document.getElementById("capFundQModal").className = "show";\n  }\n  var capitaliseFundingButtons =\n    document.getElementsByClassName("capitalise-funding");\n  for (var i = 0; i < capitaliseFundingButtons.length; i++) {\n    capitaliseFundingButtons[i].addEventListener(\n      "click",\n      startCapitaliseQuestionnaire\n    );\n  }\n<\/script>\n<script src="https://demo.capitalise.com/app/qst/bootstrap/js/script.js?1549992796"><\/script>\n\x3c!-- Capitalise Funding Questionnaire --\x3e\n'))),(0,u.kt)(o.Z,{value:"production",label:"Production",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-html"},'\x3c!-- Capitalise Funding Questionnaire --\x3e\n<script>\n  function startCapitaliseQuestionnaire(ev) {\n    ev.preventDefault();\n    var el = document.createElement("div");\n    el.setAttribute("id", "capFundQModal");\n    document.body.insertBefore(el, document.body.firstChild);\n    capitalise\n      .init({\n        referralCode: "REPLACE_WITH_YOUR_INTRODUCER_KEY", // !!! Replace with your introducer key\n      })\n      .start.inWrapper("capFundQModal");\n    document.getElementById("capFundQModal").className = "show";\n  }\n  var capitaliseFundingButtons =\n    document.getElementsByClassName("capitalise-funding");\n  for (var i = 0; i < capitaliseFundingButtons.length; i++) {\n    capitaliseFundingButtons[i].addEventListener(\n      "click",\n      startCapitaliseQuestionnaire\n    );\n  }\n<\/script>\n<script src="https://capitalise.com/app/qst/bootstrap/js/script.js?1549992796"><\/script>\n\x3c!-- Capitalise Funding Questionnaire --\x3e\n')))),(0,u.kt)("h3",{id:"iframe"},"Iframe"),(0,u.kt)("p",null,"Alternatively, you can user embed the questionnaire as iframe by below code at the place you want to show the questionnaire. Iframe currently does not support pre-fill answers."),(0,u.kt)(r.Z,{groupId:"widget",mdxType:"Tabs"},(0,u.kt)(o.Z,{value:"demo",label:"Demo",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-html"},'<iframe\n  src="https://demo.capitalise.com/app/questionnaire/funding/search?introducer=REPLACE_WITH_YOUR_INTRODUCER_KEY"\n  width="100%"\n  height="100%"\n  frameborder="0"\n  scrolling="no"\n  allowtransparency="true"\n  allow="encrypted-media"></iframe>\n'))),(0,u.kt)(o.Z,{value:"production",label:"Production",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-html"},'<iframe\n  src="https://capitalise.com/app/questionnaire/funding/search?introducer=REPLACE_WITH_YOUR_INTRODUCER_KEY"\n  width="100%"\n  height="100%"\n  frameborder="0"\n  scrolling="no"\n  allowtransparency="true"\n  allow="encrypted-media"></iframe>\n')))),(0,u.kt)("h2",{id:"pre-fill-answer-supported"},"Pre-fill answer supported"),(0,u.kt)("table",{id:"jsprefill"},(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Parameter"),(0,u.kt)("th",null,"Description"),(0,u.kt)("th",null,"Format"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"companyType")),(0,u.kt)("td",null,"The tranding type of the company"),(0,u.kt)("td",null,"Integer",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")),(0,u.kt)("p",null,"Enumerations:",(0,u.kt)("li",null,(0,u.kt)("code",null,"1")," Sole Trader"),(0,u.kt)("li",null,(0,u.kt)("code",null,"2")," Limited Liability Partnership"),(0,u.kt)("li",null,(0,u.kt)("code",null,"3")," Limited Company"),(0,u.kt)("li",null,(0,u.kt)("code",null,"4")," Startup")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"amount")),(0,u.kt)("td",null,"The amount of fund (business loans) required"),(0,u.kt)("td",null,"Integer",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"useOfFunds")),(0,u.kt)("td",null,"The use of funds"),(0,u.kt)("td",null,"Integer",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")),(0,u.kt)("p",null,(0,u.kt)("li",null,(0,u.kt)("code",null,"1")," Day to day cashflow"),(0,u.kt)("li",null,(0,u.kt)("code",null,"2")," Business expansion"),(0,u.kt)("li",null,(0,u.kt)("code",null,"3")," Equipment/Asset finance"),(0,u.kt)("li",null,(0,u.kt)("code",null,"4")," Refinancing debt"),(0,u.kt)("li",null,(0,u.kt)("code",null,"5")," Import/Export"),(0,u.kt)("li",null,(0,u.kt)("code",null,"6")," Tax bill due"),(0,u.kt)("li",null,(0,u.kt)("code",null,"7")," Acquiring a business"),(0,u.kt)("li",null,(0,u.kt)("code",null,"8")," Starting a business"),(0,u.kt)("li",null,(0,u.kt)("code",null,"9")," Purchasing a property"),(0,u.kt)("li",null,(0,u.kt)("code",null,"10")," Purchasing stock")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"term")),(0,u.kt)("td",null,"The term of business loan in months. The value will be rounded up to the closest option below:",(0,u.kt)("li",null,(0,u.kt)("code",null,"1-6")," 6 months or less"),(0,u.kt)("li",null,(0,u.kt)("code",null,"7-12")," 12 months"),(0,u.kt)("li",null,(0,u.kt)("code",null,"13-24")," 24 months"),(0,u.kt)("li",null,(0,u.kt)("code",null,"25-36")," 3 years"),(0,u.kt)("li",null,(0,u.kt)("code",null,"37-60")," 4-5 years"),(0,u.kt)("li",null,(0,u.kt)("code",null,">=61")," More than 5 years")),(0,u.kt)("td",null,"Integer",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"sector")),(0,u.kt)("td",null,"The sector of the company"),(0,u.kt)("td",null,"Integer",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")),(0,u.kt)("p",null,"Enumerations:",(0,u.kt)("li",null,(0,u.kt)("code",null,"1")," Agriculture"),(0,u.kt)("li",null,(0,u.kt)("code",null,"2")," Automotive"),(0,u.kt)("li",null,(0,u.kt)("code",null,"3")," Business Services"),(0,u.kt)("li",null,(0,u.kt)("code",null,"4")," Construction"),(0,u.kt)("li",null,(0,u.kt)("code",null,"5")," Courier"),(0,u.kt)("li",null,(0,u.kt)("code",null,"6")," Distribution"),(0,u.kt)("li",null,(0,u.kt)("code",null,"7")," Financial Services"),(0,u.kt)("li",null,(0,u.kt)("code",null,"8")," Haulage"),(0,u.kt)("li",null,(0,u.kt)("code",null,"9")," Healthcare/Care"),(0,u.kt)("li",null,(0,u.kt)("code",null,"10")," Hotels/Guest House/Public House"),(0,u.kt)("li",null,(0,u.kt)("code",null,"11")," Import/Export"),(0,u.kt)("li",null,(0,u.kt)("code",null,"12")," IT Related"),(0,u.kt)("li",null,(0,u.kt)("code",null,"13")," Manufacturing"),(0,u.kt)("li",null,(0,u.kt)("code",null,"14")," Print/Publishing"),(0,u.kt)("li",null,(0,u.kt)("code",null,"15")," Professional Services"),(0,u.kt)("li",null,(0,u.kt)("code",null,"16")," Property"),(0,u.kt)("li",null,(0,u.kt)("code",null,"17")," Recruitment"),(0,u.kt)("li",null,(0,u.kt)("code",null,"18")," Retail"),(0,u.kt)("li",null,(0,u.kt)("code",null,"19")," Security Services"),(0,u.kt)("li",null,(0,u.kt)("code",null,"20")," Trade"),(0,u.kt)("li",null,(0,u.kt)("code",null,"21")," Transportation"),(0,u.kt)("li",null,(0,u.kt)("code",null,"22")," Wholesale"),(0,u.kt)("li",null,(0,u.kt)("code",null,"23")," Other"),(0,u.kt)("li",null,(0,u.kt)("code",null,"27")," Education"),(0,u.kt)("li",null,(0,u.kt)("code",null,"29")," Charities"),(0,u.kt)("li",null,(0,u.kt)("code",null,"31")," Media & Entertainment")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"companyNumber")),(0,u.kt)("td",null,"The Companies House Number of the company. This number will be used for company lookup."),(0,u.kt)("td",null,"String(8)",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"companyName")),(0,u.kt)("td",null,"The name of the company"),(0,u.kt)("td",null,"String",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"yearsTrading")),(0,u.kt)("td",null,"The period that the company has been trading in years"),(0,u.kt)("td",null,"Integer",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"revenue")),(0,u.kt)("td",null,"The company's revenue over the last 12 months in Brish Pounds (GBP)"),(0,u.kt)("td",null,"Integer",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"invoices")),(0,u.kt)("td",null,"Does the company raise invoices to businesses?"),(0,u.kt)("td",null,"Boolean",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"clientsType")),(0,u.kt)("td",null,"What type of businesses does the customer serve?"),(0,u.kt)("td",null,"Integer",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")),(0,u.kt)("p",null,"Enumerations:",(0,u.kt)("li",null,(0,u.kt)("code",null,"1")," SMEs"),(0,u.kt)("li",null,(0,u.kt)("code",null,"2")," Large Corporates"),(0,u.kt)("li",null,(0,u.kt)("code",null,"3")," Public Sector"),(0,u.kt)("li",null,(0,u.kt)("code",null,"4")," Consumers")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"epos")),(0,u.kt)("td",null,"Does the company have a credit or debit card terminal?"),(0,u.kt)("td",null,"Boolean",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"eposRevenue")),(0,u.kt)("td",null,"The monthly revenue through the terminal in Brish Pounds (GBP)"),(0,u.kt)("td",null,"Integer",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")),(0,u.kt)("p",null,"Enumerations:",(0,u.kt)("li",null,(0,u.kt)("code",null,"1")," Less than \xa32K"),(0,u.kt)("li",null,(0,u.kt)("code",null,"2")," \xa32-3K"),(0,u.kt)("li",null,(0,u.kt)("code",null,"3")," \xa33-4K"),(0,u.kt)("li",null,(0,u.kt)("code",null,"4")," \xa34-5K"),(0,u.kt)("li",null,(0,u.kt)("code",null,"5")," \xa35K+")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"asset")),(0,u.kt)("td",null,"Whether or not the funding is for an asset"),(0,u.kt)("td",null,"Boolean",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"assetType")),(0,u.kt)("td",null,"The type of asset that funding is for - only applicable when"," ",(0,u.kt)("code",null,"asset")," is ",(0,u.kt)("code",null,"true")),(0,u.kt)("td",null,"Integer",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")),(0,u.kt)("p",null,"Enumerations:",(0,u.kt)("li",null,(0,u.kt)("code",null,"1")," Transportation"),(0,u.kt)("li",null,(0,u.kt)("code",null,"2")," Office"),(0,u.kt)("li",null,(0,u.kt)("code",null,"3")," Stock"),(0,u.kt)("li",null,(0,u.kt)("code",null,"4")," Manufacturing"),(0,u.kt)("li",null,(0,u.kt)("code",null,"5")," A Business")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"purchaseOrders")),(0,u.kt)("td",null,"Whether or not the customer receives any purchase order"),(0,u.kt)("td",null,"Boolean",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"guarantee")),(0,u.kt)("td",null,"The guarantee(s) that the customer is prepared to offer"),(0,u.kt)("td",null,"Integer",(0,u.kt)("li",null,(0,u.kt)("code",null,"1")," Personal"),(0,u.kt)("li",null,(0,u.kt)("code",null,"2")," Business"),(0,u.kt)("li",null,(0,u.kt)("code",null,"3")," None"),(0,u.kt)("li",null,(0,u.kt)("code",null,"4")," Both"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"contactPhone")),(0,u.kt)("td",null,"The mobile phone number of company contact - currently only accepting the UK number without area code"),(0,u.kt)("td",null,"String(11)",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"contactName")),(0,u.kt)("td",null,"The full name of company contact"),(0,u.kt)("td",null,"String",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))),(0,u.kt)("tr",null,(0,u.kt)("td",null,(0,u.kt)("code",null,"contactEmail")),(0,u.kt)("td",null,"The email address of the company contact"),(0,u.kt)("td",null,"String",(0,u.kt)("p",null,"Default: ",(0,u.kt)("code",null,"null")))))))}T.isMDXComponent=!0},57607:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/introducer-key-9a9339b4347907c67798cd57b5f679a2.png"}}]);