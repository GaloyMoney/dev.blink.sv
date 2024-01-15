"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[931],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4746:(e,t,n)=>{n.d(t,{H:()=>i,a:()=>l});var a=n(7294);const r=(0,a.createContext)(),l=()=>(0,a.useContext)(r),i=e=>{let{children:t}=e;const[n,l]=(0,a.useState)(null),[i,o]=(0,a.useState)("https://api.blink.sv/graphql"),[c,s]=(0,a.useState)(""),[p,u]=(0,a.useState)(""),[d,m]=(0,a.useState)(""),[h,g]=(0,a.useState)(""),[y,v]=(0,a.useState)(""),f={authToken:n,setAuthToken:l,apiEndpoint:i,setApiEndpoint:o,accountWalletId:c,setAccountWalletId:s,paymentRequest:p,setPaymentRequest:u,lnAddress:d,setLnAddress:m,lnurl:h,setLnurl:g,amount:y,setAmount:v};return a.createElement(r.Provider,{value:f},t)}},9549:(e,t,n)=>{n.d(t,{c:()=>o});var a=n(7294),r=n(7900),l=n(4746),i=n(2620);function o(){const{authToken:e,apiEndpoint:t}=(0,l.a)(),[n,o]=(0,a.useState)(""),[c,s]=(0,a.useState)(null),[p,u]=(0,a.useState)(null),d="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,i.yL)({operation:d,setCurlCommand:o,authToken:e,apiEndpoint:t})}),[e,t]),a.createElement("div",null,a.createElement("button",{onClick:async()=>{u(null),s(null);try{const n=await(0,r.K)(e,t,d);s(n),(0,i.yL)({operation:d,setCurlCommand:o,authToken:e,apiEndpoint:t})}catch(n){u(n.message)}}},"Send the request"),a.createElement("div",{style:{marginTop:"10px"}}),p&&a.createElement("div",{style:{color:"red"}},"Error: ",p),c&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(c,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to check the balance of your wallets"),a.createElement("div",{style:{marginTop:"10px"}}),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},n)))}},3910:(e,t,n)=>{n.d(t,{_:()=>o});var a=n(7294),r=n(7900),l=n(4746),i=n(2620);function o(){const{authToken:e,apiEndpoint:t}=(0,l.a)(),[n,o]=(0,a.useState)(""),[c,s]=(0,a.useState)(null),[p,u]=(0,a.useState)(null),d="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,i.yL)({operation:d,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:t,walletCurrency:"USD"})}),[e,t]),a.createElement("div",null,a.createElement("button",{onClick:async()=>{u(null),s(null);try{const n=await(0,r.K)(e,t,d);s(n),(0,i.yL)({operation:d,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:t,walletCurrency:"USD"})}catch(n){u(n.message)}}},"Send the request"),a.createElement("div",{style:{marginTop:"10px"}}),p&&a.createElement("div",{style:{color:"red"}},"Error: ",p),c&&a.createElement("div",null,a.createElement("strong",null,"Response:")," ",a.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(c,null,2))),a.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},a.createElement("div",{style:{fontWeight:"bold"}},"curl command to get the USD wallet ID"),a.createElement("div",{style:{marginTop:"10px"}}),a.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},n)))}},2698:(e,t,n)=>{n.d(t,{k:()=>l});var a=n(7294),r=n(4746);function l(){const{apiEndpoint:e,setApiEndpoint:t}=(0,r.a)();return a.createElement("div",null,a.createElement("div",null,"The GraphQL endpoint to connect to:"),a.createElement("select",{type:"text",value:e,onChange:e=>{t(e.target.value)},style:{width:"50%",marginBottom:"10px"}},a.createElement("option",{value:"https://api.blink.sv/graphql"},"Blink (mainnet) - https://api.blink.sv/graphql"),a.createElement("option",{value:"https://api.staging.galoy.io/graphql"},"Staging (signet) - https://api.staging.galoy.io/graphql")))}},65:(e,t,n)=>{n.d(t,{T:()=>l});var a=n(7294),r=n(4746);function l(){const{setAuthToken:e}=(0,r.a)();return a.createElement("div",null,a.createElement("div",null,"A valid authentication token is required in the header as a bearer token:"),a.createElement("input",{type:"text",placeholder:"Paste the authentication token to use it",onChange:t=>{e(t.target.value)},style:{width:"50%",marginBottom:"10px"}}))}},7900:(e,t,n)=>{n.d(t,{K:()=>a});const a=async function(e,t,n,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!n)throw new Error("No GraphQL query provided");try{const r=await fetch(t,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-API-KEY":`${e}`},body:JSON.stringify({query:n,variables:a})});if(!r.ok){const e=await r.text();throw new Error(`Error response from server: ${e}`)}const l=r.headers.get("content-type");if(l&&l.includes("application/json")){return await r.json()}throw new Error(`Unexpected content type: ${l}`)}catch(r){throw console.error("There was an error making the authenticated request:",r),r}}},2620:(e,t,n)=>{n.d(t,{yL:()=>a});function a(e){let{operation:t,type:n="",setCurlCommand:a,authToken:r,apiEndpoint:l,amount:i,paymentRequest:o="",walletId:c="",recipientWalletId:s="",walletCurrency:p="",address:u,lnAddress:d,lnurl:m}=e,h={query:t.trim(),variables:{}};const g=r?`--header 'X-API-KEY: ${r}'`:"--header 'X-API-KEY: <YOUR_AUTH_TOKEN_HERE>'";"invoice"===n?h.variables.input={amount:i.toString(),walletId:c}:"lnInvoiceCreateOnBehalfOfRecipient"===n?h.variables.input={amount:i.toString(),recipientWalletId:s}:"feeProbe"===n||"lnInvoicePaymentSend"===n?h.variables.input={paymentRequest:o,walletId:c}:"onChainTxFee"===n?h.variables={walletId:c,address:u,amount:i}:"onChainSend"===n?h.variables.input={walletId:c,address:u,amount:i}:"lnAddressPaymentSend"===n?h.variables.input={walletId:c,amount:i,lnAddress:d}:"lnurlPaymentSend"===n&&(h.variables.input={walletId:c,amount:i,lnurl:m});let y=JSON.stringify(h).replace(/\n/g,"");a("wallet"===n?`curl -sS --request POST --header 'content-type: application/json' \\\n  ${g} \\\n  --url '${l}' \\\n  --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n| jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "${p}") .id'`:`curl --request POST --header 'content-type: application/json' \\\n  ${g} \\\n  --url '${l}' \\\n  --data '${y}'`)}},8889:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>v,contentTitle:()=>g,default:()=>E,frontMatter:()=>h,metadata:()=>y,toc:()=>f});var a=n(7462),r=n(7294),l=n(3905),i=n(4746),o=n(2698),c=n(65),s=n(3910),p=n(7900),u=n(2620);function d(){const{authToken:e,apiEndpoint:t,accountWalletId:n,setAccountWalletId:a}=(0,i.a)(),[l,o]=(0,r.useState)(100),[c,s]=(0,r.useState)(""),[d,m]=(0,r.useState)(null),[h,g]=(0,r.useState)(null),y="mutation LnUsdInvoiceCreateOnBehalfOfRecipient($input: LnUsdInvoiceCreateOnBehalfOfRecipientInput!) {\n  lnUsdInvoiceCreateOnBehalfOfRecipient(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}";(0,r.useEffect)((()=>{(0,u.yL)({operation:y,type:"lnInvoiceCreateOnBehalfOfRecipient",setCurlCommand:s,authToken:e,apiEndpoint:t,amount:l,recipientWalletId:n})}),[e,t,l,n]);return r.createElement("div",null,r.createElement("div",null,r.createElement("div",null,r.createElement("div",{style:{fontWeight:"bold"}},"Set the variables"),r.createElement("label",null,r.createElement("div",null,"Amount (USD cents):"),r.createElement("input",{type:"number",value:l,onChange:e=>{o(e.target.value)},style:{marginLeft:"10px",width:"50%"}}))),r.createElement("label",null,r.createElement("div",null,"USD wallet ID:"),r.createElement("input",{type:"text",value:n,onChange:e=>{a(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the USD wallet ID from the response above"}))),r.createElement("div",{style:{marginTop:"10px"}}),r.createElement("button",{onClick:async()=>{g(null),m(null);const a={input:{amount:l.toString(),recipientWalletId:n}};try{const r=await(0,p.K)(e,t,y,a);m(r),(0,u.yL)({operation:y,type:"lnInvoiceCreateOnBehalfOfRecipient",setCurlCommand:s,authToken:e,apiEndpoint:t,amount:l,recipientWalletId:n})}catch(r){g(r.message)}}},"Create a Stablesats invoice"),r.createElement("div",{style:{marginTop:"10px"}}),h&&r.createElement("div",{style:{color:"red"}},"Error: ",h),d&&r.createElement("div",null,r.createElement("strong",null,"Response:")," ",r.createElement("pre",{style:{marginLeft:"10px"}},JSON.stringify(d,null,2))),r.createElement("div",{style:{marginTop:"20px",marginBottom:"40px"}},r.createElement("div",{style:{fontWeight:"bold"}},"curl command to generate a Stablesats invoice"),r.createElement("div",{style:{marginTop:"10px"}}),r.createElement("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"}},c)))}var m=n(9549);const h={id:"usd-ln-receive",title:"Receive USD on Lightning",slug:"/api/usd-ln-receive"},g=void 0,y={unversionedId:"api/usd-ln-receive",id:"api/usd-ln-receive",title:"Receive USD on Lightning",description:"Get the wallet IDs and check the balances",source:"@site/docs/api/usd-ln-receive.mdx",sourceDirName:"api",slug:"/api/usd-ln-receive",permalink:"/api/usd-ln-receive",draft:!1,tags:[],version:"current",frontMatter:{id:"usd-ln-receive",title:"Receive USD on Lightning",slug:"/api/usd-ln-receive"},sidebar:"apiSidebar",previous:{title:"Send BTC over Lightning",permalink:"/api/btc-ln-send"},next:{title:"Send USD over Lightning",permalink:"/api/usd-ln-send"}},v={},f=[{value:"Get the wallet IDs and check the balances",id:"get-the-wallet-ids-and-check-the-balances",level:3},{value:"Generate a Stablesats invoice",id:"generate-a-stablesats-invoice",level:3},{value:"Once paid check the balance again",id:"once-paid-check-the-balance-again",level:3}],b={toc:f},k="wrapper";function E(e){let{components:t,...n}=e;return(0,l.kt)(k,(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(i.H,{mdxType:"AuthProvider"},(0,l.kt)(o.k,{mdxType:"SetApiEndpoint"}),(0,l.kt)(c.T,{mdxType:"SetAuthToken"}),(0,l.kt)("h3",{id:"get-the-wallet-ids-and-check-the-balances"},"Get the wallet IDs and check the balances"),(0,l.kt)("p",null,"Can run this query at any stage to confirm the change in the balances.",(0,l.kt)("br",null),'\nThe "BTC" wallet balance is denominated in satoshis.',(0,l.kt)("br",null),'\nThe "USD" wallet balance is in cents.'),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The body of the GraphQL request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        id\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n")),(0,l.kt)(s._,{mdxType:"GetWalletDataUsd"}),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"generate-a-stablesats-invoice"},"Generate a Stablesats invoice"),(0,l.kt)("p",null,"Using Stablesats a merchant can generate invoices denominated in USD cents. ",(0,l.kt)("br",null),"\nUse the ",(0,l.kt)("inlineCode",{parentName:"p"},"paymentRequest")," from the response and pay it with a lightning wallet.",(0,l.kt)("br",null),"\nThe satoshi amount of the invoice will reflect the current USD/BTC exchange rate and the balance will be kept at the dollar value."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The body of the GraphQL request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation LnUsdInvoiceCreateOnBehalfOfRecipient($input: LnUsdInvoiceCreateOnBehalfOfRecipientInput!) {\n  lnUsdInvoiceCreateOnBehalfOfRecipient(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}\n")),(0,l.kt)(d,{mdxType:"LnUsdInvoiceCreateOnBehalfOfRecipient"}),(0,l.kt)("hr",null),(0,l.kt)("h3",{id:"once-paid-check-the-balance-again"},"Once paid check the balance again"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"The body of the GraphQL request")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-graphql"},"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n")),(0,l.kt)(m.c,{mdxType:"GetBalance"})),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"To test the GraphQL requests further use the GraphQL playground at ",(0,l.kt)("a",{parentName:"p",href:"https://api.blink.sv/graphql"},"api.blink.sv/graphql")," for mainnet or ",(0,l.kt)("a",{parentName:"p",href:"https://api.staging.galoy.io/graphql"},"api.staging.galoy.io/graphql")," for staging.",(0,l.kt)("br",null),"\nCheck out the ",(0,l.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#ed78e464-9874-4bf7-9b7b-92e5a898db83"},"Galoy API Postman collection")," to find examples in multiple programming languages.")))}E.isMDXComponent=!0}}]);