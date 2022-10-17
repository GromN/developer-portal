(self.webpackChunkcapialise_developer_portal=self.webpackChunkcapialise_developer_portal||[]).push([[18],{22601:(e,t,a)=>{"use strict";a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),i=a(93456);const l={title:"Native funding search",tags:["API"],description:"Design your own native journey to help user find funding from over 100 lenders"},s=void 0,p={unversionedId:"native-funding-search",id:"native-funding-search",title:"Native funding search",description:"Design your own native journey to help user find funding from over 100 lenders",source:"@site/use-cases/native-funding-search.mdx",sourceDirName:".",slug:"/native-funding-search",permalink:"/use-cases/native-funding-search",draft:!1,editUrl:"https://github.com/Capitalise/developer-portal/edit/main/use-cases/native-funding-search.mdx",tags:[{label:"API",permalink:"/use-cases/tags/api"}],version:"current",lastUpdatedAt:1665992113,formattedLastUpdatedAt:"Oct 17, 2022",frontMatter:{title:"Native funding search",tags:["API"],description:"Design your own native journey to help user find funding from over 100 lenders"},sidebar:"useCasesSideBar",previous:{title:"Embedded funding search",permalink:"/use-cases/embedded-funding-search"},next:{title:"Launch Checklist",permalink:"/use-cases/launch-checklist"}},o={},c=[{value:"Environments",id:"environments",level:2},{value:"High-level sequence diagram",id:"high-level-sequence-diagram",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Design your own native journey to help user find funding from over 100 lenders"),(0,r.kt)("h2",{id:"environments"},"Environments"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Environment"),(0,r.kt)("th",{parentName:"tr",align:null},"Base URL"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Demo"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://demo.capitalise.com/api/business/v1"},"https://demo.capitalise.com/api/business/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Get started with test credentials and life-like data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Production"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://capitalise.com/api/business/v1"},"https://capitalise.com/api/business/v1")),(0,r.kt)("td",{parentName:"tr",align:null},"Launch your app with live credentials")))),(0,r.kt)("p",null,"For account setup, please contact our API Partner Manager Sabrin Ghomri at ",(0,r.kt)("a",{parentName:"p",href:"mailto:sabrin.ghomri@capitalise.com"},"sabrin.ghomri@capitalise.com"),"."),(0,r.kt)("admonition",{title:"Important",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Data CANNOT be moved between Production and Demo"),(0,r.kt)("li",{parentName:"ul"},"Credentials (e.g. ",(0,r.kt)("inlineCode",{parentName:"li"},"Logins"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"API Key"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"API Token"),") are NOT sharable between Production and Demo"),(0,r.kt)("li",{parentName:"ul"},"Always double check if you've got the right credentials configured before production release"))),(0,r.kt)("p",null,"You will be using two suites of APIs to implement the native funding search journey at your end:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"API"),(0,r.kt)("th",{parentName:"tr",align:null},"Base Path"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/platform"},"Platform V1")),(0,r.kt)("td",{parentName:"tr",align:null},"/api/platform/v1"),(0,r.kt)("td",{parentName:"tr",align:null},"Generating API Key that unique identifies your application")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/api/marketplace/v1"},"Marketplace V1")),(0,r.kt)("td",{parentName:"tr",align:null},"/api/marketplace/v1"),(0,r.kt)("td",{parentName:"tr",align:null},"Create and submit funding searches to Capitalise")))),(0,r.kt)("h2",{id:"high-level-sequence-diagram"},"High-level sequence diagram"),(0,r.kt)(i.Mermaid,{config:{},chart:"sequenceDiagram\n    actor Applicant\n    participant API Partner\n    participant Capitalise Platform APIs\n    participant Capitalise Marketplace APIs\n    Note over API Partner, Capitalise Platform APIs: Step 1: Excange login for API key (one-off)\n    API Partner->>Capitalise Platform APIs: POST /platform/v1/auth/login\n    Capitalise Platform APIs->>API Partner: Access token\n    API Partner->>Capitalise Platform APIs: POST /platform/v1/api-key\n    Capitalise Platform APIs->>API Partner: key\n    Note over API Partner,Capitalise Marketplace APIs: Step 2: Excange API key for Marketplace API tokens\n    API Partner->>Capitalise Marketplace APIs: POST /marketplace/v1/auth/authorize?api_key={{key}}\n    Capitalise Marketplace APIs->>API Partner: Marketplace access token jwt and refresh token refreshToken\n    alt Getting new Marketplace access token using refresh_token when expired\n        API Partner->>Capitalise Marketplace APIs: POST /marketplace/v1/auth/refresh-token\n        Capitalise Marketplace APIs->>API Partner: New marketplace access token jwt and refresh token refreshToken\n    end\n    Note over Applicant,Capitalise Marketplace APIs: Step 3: Create funding search\n    Applicant->>API Partner: Complete the questionnaire\n    API Partner->>Capitalise Marketplace APIs: Create the company<br>POST /marketplace/v1/profiles/blank\n    Capitalise Marketplace APIs->>API Partner: Company UUID profileUUID\n    API Partner->>Capitalise Marketplace APIs: Update the company profile<br>PATCH /marketplace/v1/questionnaires/business-all-funding-products/profiles/:profileUUID/answers\n    Capitalise Marketplace APIs->>API Partner: Successful: HTTP 204\n    API Partner->>Capitalise Marketplace APIs: Get lender matches<br>PATCH /marketplace/v1/profiles/:profileUUID/funding/matches/results\n    Capitalise Marketplace APIs->>API Partner: Successful: HTTP 200 - Matches in matches[]\n    API Partner->>Applicant: Show all matches\n    Note over Applicant,Capitalise Marketplace APIs: Step 4: Submit funding search\n    Applicant->>API Partner: Select maximum<br>4 product matches\n    API Partner->>Capitalise Marketplace APIs: Submit the the profile with selected matches<br>POST /marketplace/v1/profiles/:profileUUID/funding/apply\n    Capitalise Marketplace APIs->>API Partner: Successful: HTTP 200\n    API Partner->>Applicant: Funding search submitted",mdxType:"Mermaid"}))}d.isMDXComponent=!0},11748:(e,t,a)=>{var n={"./locale":89234,"./locale.js":89234};function r(e){var t=i(e);return a(t)}function i(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=i,e.exports=r,r.id=11748}}]);