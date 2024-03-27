"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[8651],{4940:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>v,contentTitle:()=>x,default:()=>f,frontMatter:()=>g,metadata:()=>m,toc:()=>y});var a=t(4848),i=t(8453),s=t(9340),l=t(9004),r=t(9814),o=t(3450),c=t(6540),d=t(7077),p=t(4796);function h(){const{authToken:e,apiEndpoint:n,accountWalletId:t,setAccountWalletId:i}=(0,s.A)(),[l,r]=(0,c.useState)(100),[o,h]=(0,c.useState)(""),[u,g]=(0,c.useState)(null),[x,m]=(0,c.useState)(null),v="mutation LnUsdInvoiceCreateOnBehalfOfRecipient($input: LnUsdInvoiceCreateOnBehalfOfRecipientInput!) {\n  lnUsdInvoiceCreateOnBehalfOfRecipient(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}";(0,c.useEffect)((()=>{(0,p.lc)({operation:v,type:"lnInvoiceCreateOnBehalfOfRecipient",setCurlCommand:h,authToken:e,apiEndpoint:n,amount:l,recipientWalletId:t})}),[e,n,l,t]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{fontWeight:"bold"},children:"Set the variables"}),(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"Amount (USD cents):"}),(0,a.jsx)("input",{type:"number",value:l,onChange:e=>{r(e.target.value)},style:{marginLeft:"10px",width:"50%"}})]})]}),(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"USD wallet ID:"}),(0,a.jsx)("input",{type:"text",value:t,onChange:e=>{i(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the USD wallet ID from the response above"})]})]}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("button",{onClick:async()=>{m(null),g(null);const a={input:{amount:l.toString(),recipientWalletId:t}};try{const i=await(0,d.t)(e,n,v,a);g(i),(0,p.lc)({operation:v,type:"lnInvoiceCreateOnBehalfOfRecipient",setCurlCommand:h,authToken:e,apiEndpoint:n,amount:l,recipientWalletId:t})}catch(i){m(i.message)}},children:"Create a Stablesats invoice"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),x&&(0,a.jsxs)("div",{style:{color:"red"},children:["Error: ",x]}),u&&(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Response:"})," ",(0,a.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(u,null,2)})]}),(0,a.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,a.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to generate a Stablesats invoice"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:o})]})]})}var u=t(5243);const g={id:"usd-ln-receive",title:"Receive USD on Lightning",slug:"/api/usd-ln-receive"},x=void 0,m={id:"api/usd-ln-receive",title:"Receive USD on Lightning",description:"Get the wallet IDs and check the balances",source:"@site/docs/api/usd-ln-receive.mdx",sourceDirName:"api",slug:"/api/usd-ln-receive",permalink:"/api/usd-ln-receive",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"usd-ln-receive",title:"Receive USD on Lightning",slug:"/api/usd-ln-receive"},sidebar:"apiSidebar",previous:{title:"Send BTC over Lightning",permalink:"/api/btc-ln-send"},next:{title:"Send USD over Lightning",permalink:"/api/usd-ln-send"}},v={},y=[{value:"Get the wallet IDs and check the balances",id:"get-the-wallet-ids-and-check-the-balances",level:3},{value:"Generate a Stablesats invoice",id:"generate-a-stablesats-invoice",level:3},{value:"Once paid check the balance again",id:"once-paid-check-the-balance-again",level:3}];function j(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.O,{children:[(0,a.jsx)(l.a,{}),(0,a.jsx)(r.K,{}),(0,a.jsx)(n.h3,{id:"get-the-wallet-ids-and-check-the-balances",children:"Get the wallet IDs and check the balances"}),(0,a.jsxs)(n.p,{children:["Can run this query at any stage to confirm the change in the balances.",(0,a.jsx)("br",{}),'\nThe "BTC" wallet balance is denominated in satoshis.',(0,a.jsx)("br",{}),'\nThe "USD" wallet balance is in cents.']}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        id\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n"})}),(0,a.jsx)(o.S,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"generate-a-stablesats-invoice",children:"Generate a Stablesats invoice"}),(0,a.jsxs)(n.p,{children:["Using Stablesats a merchant can generate invoices denominated in USD cents. ",(0,a.jsx)("br",{}),"\nUse the ",(0,a.jsx)(n.code,{children:"paymentRequest"})," from the response and pay it with a lightning wallet.",(0,a.jsx)("br",{}),"\nThe satoshi amount of the invoice will reflect the current USD/BTC exchange rate and the balance will be kept at the dollar value."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation LnUsdInvoiceCreateOnBehalfOfRecipient($input: LnUsdInvoiceCreateOnBehalfOfRecipientInput!) {\n  lnUsdInvoiceCreateOnBehalfOfRecipient(input: $input) {\n    invoice {\n      paymentRequest\n      paymentHash\n      paymentSecret\n      satoshis\n    }\n    errors {\n      message\n    }\n  }\n}\n"})}),(0,a.jsx)(h,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"once-paid-check-the-balance-again",children:"Once paid check the balance again"}),(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["There are multiple ways to get notified on the incoming payments: see ",(0,a.jsx)(n.a,{href:"/api/webhooks",children:"how to use webhooks (callbacks)"})," and ",(0,a.jsx)(n.a,{href:"/api/websocket",children:"websocket subscriptions"}),"."]})}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request to check the balance"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n"})}),(0,a.jsx)(u.d,{})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["To test the GraphQL requests further use the GraphQL playground at ",(0,a.jsx)(n.a,{href:"https://api.blink.sv/graphql",children:"api.blink.sv/graphql"})," for mainnet or ",(0,a.jsx)(n.a,{href:"https://api.staging.galoy.io/graphql",children:"api.staging.galoy.io/graphql"})," for staging.",(0,a.jsx)("br",{}),"\nCheck out the ",(0,a.jsx)(n.a,{href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#ed78e464-9874-4bf7-9b7b-92e5a898db83",children:"Galoy API Postman collection"})," to find examples in multiple programming languages."]})})]})}function f(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(j,{...e})}):j(e)}},9340:(e,n,t)=>{t.d(n,{A:()=>l,O:()=>r});var a=t(6540),i=t(4848);const s=(0,a.createContext)(),l=()=>(0,a.useContext)(s),r=e=>{let{children:n}=e;const[t,l]=(0,a.useState)(null),[r,o]=(0,a.useState)("https://api.blink.sv/graphql"),[c,d]=(0,a.useState)(""),[p,h]=(0,a.useState)(""),[u,g]=(0,a.useState)(""),[x,m]=(0,a.useState)(""),[v,y]=(0,a.useState)(""),j={authToken:t,setAuthToken:l,apiEndpoint:r,setApiEndpoint:o,accountWalletId:c,setAccountWalletId:d,paymentRequest:p,setPaymentRequest:h,lnAddress:u,setLnAddress:g,lnurl:x,setLnurl:m,amount:v,setAmount:y};return(0,i.jsx)(s.Provider,{value:j,children:n})}},5243:(e,n,t)=>{t.d(n,{d:()=>o});var a=t(6540),i=t(7077),s=t(9340),l=t(4796),r=t(4848);function o(){const{authToken:e,apiEndpoint:n}=(0,s.A)(),[t,o]=(0,a.useState)(""),[c,d]=(0,a.useState)(null),[p,h]=(0,a.useState)(null),u="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,l.lc)({operation:u,setCurlCommand:o,authToken:e,apiEndpoint:n})}),[e,n]),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{onClick:async()=>{h(null),d(null);try{const t=await(0,i.t)(e,n,u);d(t),(0,l.lc)({operation:u,setCurlCommand:o,authToken:e,apiEndpoint:n})}catch(t){h(t.message)}},children:"Send the request"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),p&&(0,r.jsxs)("div",{style:{color:"red"},children:["Error: ",p]}),c&&(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Response:"})," ",(0,r.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(c,null,2)})]}),(0,r.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,r.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to check the balance of your wallets"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),(0,r.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:t})]})]})}},3450:(e,n,t)=>{t.d(n,{S:()=>o});var a=t(6540),i=t(7077),s=t(9340),l=t(4796),r=t(4848);function o(){const{authToken:e,apiEndpoint:n}=(0,s.A)(),[t,o]=(0,a.useState)(""),[c,d]=(0,a.useState)(null),[p,h]=(0,a.useState)(null),u="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,l.lc)({operation:u,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:n,walletCurrency:"USD"})}),[e,n]),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{onClick:async()=>{h(null),d(null);try{const t=await(0,i.t)(e,n,u);d(t),(0,l.lc)({operation:u,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:n,walletCurrency:"USD"})}catch(t){h(t.message)}},children:"Send the request"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),p&&(0,r.jsxs)("div",{style:{color:"red"},children:["Error: ",p]}),c&&(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Response:"})," ",(0,r.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(c,null,2)})]}),(0,r.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,r.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to get the USD wallet ID"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),(0,r.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:t})]})]})}},9004:(e,n,t)=>{t.d(n,{a:()=>s});t(6540);var a=t(9340),i=t(4848);function s(){const{apiEndpoint:e,setApiEndpoint:n}=(0,a.A)();return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:"The GraphQL endpoint to connect to:"}),(0,i.jsxs)("select",{type:"text",value:e,onChange:e=>{n(e.target.value)},style:{width:"50%",marginBottom:"10px"},children:[(0,i.jsx)("option",{value:"https://api.blink.sv/graphql",children:"Blink (mainnet) - https://api.blink.sv/graphql"}),(0,i.jsx)("option",{value:"https://api.staging.galoy.io/graphql",children:"Staging (signet) - https://api.staging.galoy.io/graphql"})]})]})}},9814:(e,n,t)=>{t.d(n,{K:()=>s});t(6540);var a=t(9340),i=t(4848);function s(){const{setAuthToken:e}=(0,a.A)();return(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:"A valid authentication token is required in the header as a bearer token:"}),(0,i.jsx)("input",{type:"text",placeholder:"Paste the authentication token to use it",onChange:n=>{e(n.target.value)},style:{width:"50%",marginBottom:"10px"}})]})}},7077:(e,n,t)=>{t.d(n,{t:()=>a});const a=async function(e,n,t,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!t)throw new Error("No GraphQL query provided");try{const i=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-API-KEY":`${e}`},body:JSON.stringify({query:t,variables:a})});if(!i.ok){const e=await i.text();throw new Error(`Error response from server: ${e}`)}const s=i.headers.get("content-type");if(s&&s.includes("application/json")){return await i.json()}throw new Error(`Unexpected content type: ${s}`)}catch(i){throw console.error("There was an error making the authenticated request:",i),i}}},4796:(e,n,t)=>{t.d(n,{lc:()=>a});function a(e){let{operation:n,type:t="",setCurlCommand:a,authToken:i,apiEndpoint:s,amount:l,paymentRequest:r="",walletId:o="",recipientWalletId:c="",walletCurrency:d="",address:p,lnAddress:h,lnurl:u}=e,g={query:n.trim(),variables:{}};const x=i?`--header 'X-API-KEY: ${i}'`:"--header 'X-API-KEY: <YOUR_AUTH_TOKEN_HERE>'";"invoice"===t?g.variables.input={amount:l.toString(),walletId:o}:"lnInvoiceCreateOnBehalfOfRecipient"===t?g.variables.input={amount:l.toString(),recipientWalletId:c}:"feeProbe"===t||"lnInvoicePaymentSend"===t?g.variables.input={paymentRequest:r,walletId:o}:"onChainTxFee"===t?g.variables={walletId:o,address:p,amount:l}:"onChainSend"===t?g.variables.input={walletId:o,address:p,amount:l}:"lnAddressPaymentSend"===t?g.variables.input={walletId:o,amount:l,lnAddress:h}:"lnurlPaymentSend"===t&&(g.variables.input={walletId:o,amount:l,lnurl:u});let m=JSON.stringify(g).replace(/\n/g,"");a("wallet"===t?`curl -sS --request POST --header 'content-type: application/json' \\\n  ${x} \\\n  --url '${s}' \\\n  --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n| jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "${d}") .id'`:`curl --request POST --header 'content-type: application/json' \\\n  ${x} \\\n  --url '${s}' \\\n  --data '${m}'`)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var a=t(6540);const i={},s=a.createContext(i);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);