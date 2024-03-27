"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[4472],{6081:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>j,contentTitle:()=>y,default:()=>w,frontMatter:()=>g,metadata:()=>v,toc:()=>f});var a=t(4848),s=t(8453),l=t(9340),i=t(9004),r=t(9814),o=t(8383),d=t(6540),c=t(7077),p=t(4796);function u(){const{authToken:e,apiEndpoint:n,accountWalletId:t,setAccountWalletId:s,paymentRequest:i,setPaymentRequest:r}=(0,l.A)(),[o,u]=(0,d.useState)(""),[h,m]=(0,d.useState)(null),[x,g]=(0,d.useState)(null),y="mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {\n  lnInvoiceFeeProbe(input: $input) {\n    errors {\n      message\n    }\n    amount\n  }\n}";(0,d.useEffect)((()=>{(0,p.lc)({operation:y,type:"feeProbe",setCurlCommand:u,authToken:e,apiEndpoint:n,walletId:t,paymentRequest:i})}),[e,n,i,t]);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{style:{fontWeight:"bold"},children:"Set the variables"}),(0,a.jsx)("div",{children:(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"Invoice:"}),(0,a.jsx)("input",{type:"text",value:i,onChange:e=>r(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"Paste a lightning invoice"})]})}),(0,a.jsxs)("label",{children:[(0,a.jsx)("div",{children:"BTC wallet ID:"}),(0,a.jsx)("input",{type:"text",value:t,onChange:e=>{s(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste the BTC wallet ID from the response above"})]})]}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("button",{onClick:async()=>{g(null),m(null);const a={input:{paymentRequest:i,walletId:t}};try{const s=await(0,c.t)(e,n,y,a);m(s),(0,p.lc)({operation:y,type:"feeProbe",setCurlCommand:u,authToken:e,apiEndpoint:n,walletId:t,paymentRequest:i})}catch(s){g(s.message)}},children:"Probe fee"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),x&&(0,a.jsxs)("div",{style:{color:"red"},children:["Error: ",x]}),h&&(0,a.jsxs)("div",{children:[(0,a.jsx)("strong",{children:"Response:"})," ",(0,a.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(h,null,2)})]}),(0,a.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,a.jsx)("h4",{children:"curl command to probe invoice fee"}),(0,a.jsx)("div",{style:{marginTop:"10px"}}),(0,a.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:o})]})]})}var h=t(3582),m=t(5689),x=t(5828);const g={id:"btc-ln-send",title:"Send BTC over Lightning",slug:"/api/btc-ln-send"},y=void 0,v={id:"api/btc-ln-send",title:"Send BTC over Lightning",description:"Get the wallet IDs and check the balances",source:"@site/docs/api/btc-ln-send.mdx",sourceDirName:"api",slug:"/api/btc-ln-send",permalink:"/api/btc-ln-send",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"btc-ln-send",title:"Send BTC over Lightning",slug:"/api/btc-ln-send"},sidebar:"apiSidebar",previous:{title:"Receive BTC on Lightning",permalink:"/api/btc-ln-receive"},next:{title:"Receive USD on Lightning",permalink:"/api/usd-ln-receive"}},j={},f=[{value:"Get the wallet IDs and check the balances",id:"get-the-wallet-ids-and-check-the-balances",level:3},{value:"Estimate the payment fee (probe)",id:"estimate-the-payment-fee-probe",level:3},{value:"Pay a lightning invoice",id:"pay-a-lightning-invoice",level:3},{value:"Send to a Lightning Address",id:"send-to-a-lightning-address",level:3},{value:"Send to an LNURL",id:"send-to-an-lnurl",level:3}];function b(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(l.O,{children:[(0,a.jsx)(i.a,{}),(0,a.jsx)(r.K,{}),(0,a.jsx)(n.h3,{id:"get-the-wallet-ids-and-check-the-balances",children:"Get the wallet IDs and check the balances"}),(0,a.jsxs)(n.p,{children:["Can run this query at any stage to confirm the change in the balances.",(0,a.jsx)("br",{}),'\nThe "BTC" wallet balance is denominated in satoshis.',(0,a.jsx)("br",{}),'\nThe "USD" wallet balance is in cents.']}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"query Me {\n  me {\n    defaultAccount {\n      wallets {\n        id\n        walletCurrency\n        balance\n      }\n    }\n  }\n}\n"})}),(0,a.jsx)(o.z,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"estimate-the-payment-fee-probe",children:"Estimate the payment fee (probe)"}),(0,a.jsxs)(n.p,{children:["Estimate the cost of paying a lightning invoice. ",(0,a.jsx)("br",{}),"\nPayments to an other Blink user and to nodes with a direct channel are free."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation lnInvoiceFeeProbe($input: LnInvoiceFeeProbeInput!) {\n  lnInvoiceFeeProbe(input: $input) {\n    errors {\n      message\n    }\n    amount\n  }\n}\n"})}),(0,a.jsx)(u,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"pay-a-lightning-invoice",children:"Pay a lightning invoice"}),(0,a.jsx)(n.p,{children:"Pay a BOLT11 invoice from your BTC balance."}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {\n  lnInvoicePaymentSend(input: $input) {\n    status\n    errors {\n      message\n      path\n      code\n    }\n  }\n}\n"})}),(0,a.jsx)(h.S,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"send-to-a-lightning-address",children:"Send to a Lightning Address"}),(0,a.jsxs)(n.p,{children:["Send to a ",(0,a.jsx)(n.a,{href:"https://github.com/lnurl/luds/blob/luds/16.md",children:"Lightning Address"})," from your BTC balance."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation LnAddressPaymentSend($input: LnAddressPaymentSendInput!) {\n  lnAddressPaymentSend(input: $input) {\n    status\n    errors {\n      code\n      message\n      path\n    }\n  }\n}\n"})}),(0,a.jsx)(m.Z,{}),(0,a.jsx)(n.hr,{}),(0,a.jsx)(n.h3,{id:"send-to-an-lnurl",children:"Send to an LNURL"}),(0,a.jsxs)(n.p,{children:["Send to a ",(0,a.jsx)(n.a,{href:"https://github.com/lnurl/luds/blob/luds/06.md",children:"static LNURL payRequest"})," from your BTC balance."]}),(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"The body of the GraphQL request"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"mutation LnurlPaymentSend($input: LnurlPaymentSendInput!) {\n  lnurlPaymentSend(input: $input) {\n    status\n    errors {\n      code\n      message\n      path\n    }\n  }\n}\n"})}),(0,a.jsx)(x.q,{})]}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsxs)(n.p,{children:["To test the GraphQL requests further use the GraphQL playground at ",(0,a.jsx)(n.a,{href:"https://api.blink.sv/graphql",children:"api.blink.sv/graphql"})," for mainnet or ",(0,a.jsx)(n.a,{href:"https://api.staging.galoy.io/graphql",children:"api.staging.galoy.io/graphql"})," for staging.",(0,a.jsx)("br",{}),"\nCheck out the ",(0,a.jsx)(n.a,{href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#ac3751d8-c116-408b-9129-d6e365da590b",children:"Galoy API Postman collection"})," to find examples in multiple programming languages."]})})]})}function w(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}},9340:(e,n,t)=>{t.d(n,{A:()=>i,O:()=>r});var a=t(6540),s=t(4848);const l=(0,a.createContext)(),i=()=>(0,a.useContext)(l),r=e=>{let{children:n}=e;const[t,i]=(0,a.useState)(null),[r,o]=(0,a.useState)("https://api.blink.sv/graphql"),[d,c]=(0,a.useState)(""),[p,u]=(0,a.useState)(""),[h,m]=(0,a.useState)(""),[x,g]=(0,a.useState)(""),[y,v]=(0,a.useState)(""),j={authToken:t,setAuthToken:i,apiEndpoint:r,setApiEndpoint:o,accountWalletId:d,setAccountWalletId:c,paymentRequest:p,setPaymentRequest:u,lnAddress:h,setLnAddress:m,lnurl:x,setLnurl:g,amount:y,setAmount:v};return(0,s.jsx)(l.Provider,{value:j,children:n})}},8383:(e,n,t)=>{t.d(n,{z:()=>o});var a=t(6540),s=t(7077),l=t(9340),i=t(4796),r=t(4848);function o(){const{authToken:e,apiEndpoint:n}=(0,l.A)(),[t,o]=(0,a.useState)(""),[d,c]=(0,a.useState)(null),[p,u]=(0,a.useState)(null),h="  query Me {\n    me {\n      defaultAccount {\n        wallets {\n          id\n          walletCurrency\n          balance\n        }\n      }\n    }\n  }";return(0,a.useEffect)((()=>{(0,i.lc)({operation:h,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:n,walletCurrency:"BTC"})}),[e,n]),(0,r.jsxs)("div",{children:[(0,r.jsx)("button",{onClick:async()=>{u(null),c(null);try{const t=await(0,s.t)(e,n,h);c(t),(0,i.lc)({operation:h,type:"wallet",setCurlCommand:o,authToken:e,apiEndpoint:n,walletCurrency:"BTC"})}catch(t){u(t.message)}},children:"Send the request"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),p&&(0,r.jsxs)("div",{style:{color:"red"},children:["Error: ",p]}),d&&(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Response:"})," ",(0,r.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(d,null,2)})]}),(0,r.jsxs)("div",{style:{marginTop:"20px",marginBottom:"40px"},children:[(0,r.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to get the BTC wallet ID"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),(0,r.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:t})]})]})}},5689:(e,n,t)=>{t.d(n,{Z:()=>o});var a=t(6540),s=t(7077),l=t(9340),i=t(4796),r=t(4848);function o(){const{authToken:e,apiEndpoint:n,accountWalletId:t,setAccountWalletId:o,amount:d,setAmount:c,lnAddress:p,setLnAddress:u}=(0,l.A)(),[h,m]=(0,a.useState)(""),[x,g]=(0,a.useState)(null),[y,v]=(0,a.useState)(null),j="  mutation LnAddressPaymentSend($input: LnAddressPaymentSendInput!) {\n    lnAddressPaymentSend(input: $input) {\n      status\n      errors {\n        code\n        message\n        path\n      }\n    }\n  }";(0,a.useEffect)((()=>{(0,i.lc)({operation:j,type:"lnAddressPaymentSend",setCurlCommand:m,authToken:e,apiEndpoint:n,walletId:t,lnAddress:p,amount:d})}),[e,n,p,d,t]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{fontWeight:"bold"},children:"Set the variables"}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{children:[(0,r.jsx)("div",{children:"LN address:"}),(0,r.jsx)("input",{type:"text",value:p,onChange:e=>u(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"LN address"})]})}),(0,r.jsxs)("label",{children:[(0,r.jsx)("div",{children:"Amount (satoshis):"}),(0,r.jsx)("input",{type:"number",value:d,onChange:e=>c(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"Amount in satoshis"})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("div",{children:"Wallet ID:"}),(0,r.jsx)("input",{type:"text",value:t,onChange:e=>{o(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste a wallet ID from the response above"})]})]}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),(0,r.jsx)("button",{onClick:async()=>{v(null),g(null);const a={input:{amount:d,lnAddress:p,walletId:t}};try{const l=await(0,s.t)(e,n,j,a);g(l),(0,i.lc)({operation:j,type:"lnAddressPaymentSend",setCurlCommand:m,authToken:e,apiEndpoint:n,walletId:t,lnAddress:p,amount:d})}catch(l){v(l.message)}},children:"Send payment"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),y&&(0,r.jsxs)("div",{style:{color:"red"},children:["Error: ",y]}),x&&(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Response:"})," ",(0,r.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(x,null,2)})]}),(0,r.jsxs)("div",{style:{marginTop:"20px"},children:[(0,r.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to send to an LN address"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),(0,r.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:h})]})]})}},3582:(e,n,t)=>{t.d(n,{S:()=>o});var a=t(6540),s=t(7077),l=t(9340),i=t(4796),r=t(4848);function o(){const{authToken:e,apiEndpoint:n,accountWalletId:t,setAccountWalletId:o,paymentRequest:d,setPaymentRequest:c}=(0,l.A)(),[p,u]=(0,a.useState)(""),[h,m]=(0,a.useState)(null),[x,g]=(0,a.useState)(null),y="mutation LnInvoicePaymentSend($input: LnInvoicePaymentInput!) {\n  lnInvoicePaymentSend(input: $input) {\n    status\n    errors {\n      message\n      path\n      code\n    }\n  }\n}";(0,a.useEffect)((()=>{(0,i.lc)({operation:y,type:"lnInvoicePaymentSend",setCurlCommand:u,authToken:e,apiEndpoint:n,walletId:t,paymentRequest:d})}),[e,n,d,t]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{fontWeight:"bold"},children:"Set the variables"}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{children:[(0,r.jsx)("div",{children:"Invoice:"}),(0,r.jsx)("input",{type:"text",value:d,onChange:e=>c(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"Paste a lightning invoice"})]})}),(0,r.jsxs)("label",{children:[(0,r.jsx)("div",{children:"Wallet ID:"}),(0,r.jsx)("input",{type:"text",value:t,onChange:e=>{o(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste a wallet ID from the response above"})]})]}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),(0,r.jsx)("button",{onClick:async()=>{g(null),m(null);const a={input:{paymentRequest:d,walletId:t}};try{const l=await(0,s.t)(e,n,y,a);m(l),(0,i.lc)({operation:y,type:"lnInvoicePaymentSend",setCurlCommand:u,authToken:e,apiEndpoint:n,walletId:t,paymentRequest:d})}catch(l){g(l.message)}},children:"Send payment"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),x&&(0,r.jsxs)("div",{style:{color:"red"},children:["Error: ",x]}),h&&(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Response:"})," ",(0,r.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(h,null,2)})]}),(0,r.jsxs)("div",{style:{marginTop:"20px"},children:[(0,r.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to pay an invoice"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),(0,r.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:p})]})]})}},5828:(e,n,t)=>{t.d(n,{q:()=>o});var a=t(6540),s=t(7077),l=t(9340),i=t(4796),r=t(4848);function o(){const{authToken:e,apiEndpoint:n,accountWalletId:t,setAccountWalletId:o,amount:d,setAmount:c,lnurl:p,setLnurl:u}=(0,l.A)(),[h,m]=(0,a.useState)(""),[x,g]=(0,a.useState)(null),[y,v]=(0,a.useState)(null),j="  mutation LnurlPaymentSend($input: LnurlPaymentSendInput!) {\n    lnurlPaymentSend(input: $input) {\n      status\n      errors {\n        code\n        message\n        path\n      }\n    }\n  }";(0,a.useEffect)((()=>{(0,i.lc)({operation:j,type:"lnurlPaymentSend",setCurlCommand:m,authToken:e,apiEndpoint:n,walletId:t,lnurl:p,amount:d})}),[e,n,p,d,t]);return(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{style:{fontWeight:"bold"},children:"Set the variables"}),(0,r.jsx)("div",{children:(0,r.jsxs)("label",{children:[(0,r.jsx)("div",{children:"LNURL:"}),(0,r.jsx)("input",{type:"text",value:p,onChange:e=>u(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"LNURL"})]})}),(0,r.jsxs)("label",{children:[(0,r.jsx)("div",{children:"Amount (satoshis):"}),(0,r.jsx)("input",{type:"number",value:d,onChange:e=>c(e.target.value),style:{marginLeft:"10px",width:"50%"},placeholder:"Amount in satoshis"})]}),(0,r.jsxs)("label",{children:[(0,r.jsx)("div",{children:"Wallet ID:"}),(0,r.jsx)("input",{type:"text",value:t,onChange:e=>{o(e.target.value)},style:{marginLeft:"10px",width:"50%"},placeholder:"Paste a wallet ID from the response above"})]})]}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),(0,r.jsx)("button",{onClick:async()=>{v(null),g(null);const a={input:{amount:d,lnurl:p,walletId:t}};try{const l=await(0,s.t)(e,n,j,a);g(l),(0,i.lc)({operation:j,type:"lnurlPaymentSend",setCurlCommand:m,authToken:e,apiEndpoint:n,walletId:t,lnurl:p,amount:d})}catch(l){v(l.message)}},children:"Send payment"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),y&&(0,r.jsxs)("div",{style:{color:"red"},children:["Error: ",y]}),x&&(0,r.jsxs)("div",{children:[(0,r.jsx)("strong",{children:"Response:"})," ",(0,r.jsx)("pre",{style:{marginLeft:"10px"},children:JSON.stringify(x,null,2)})]}),(0,r.jsxs)("div",{style:{marginTop:"20px"},children:[(0,r.jsx)("div",{style:{fontWeight:"bold"},children:"curl command to send to an LNURL"}),(0,r.jsx)("div",{style:{marginTop:"10px"}}),(0,r.jsx)("pre",{style:{backgroundColor:"auto",padding:"10px",marginLeft:"10px",overflowX:"auto",whiteSpace:"pre-wrap"},children:h})]})]})}},9004:(e,n,t)=>{t.d(n,{a:()=>l});t(6540);var a=t(9340),s=t(4848);function l(){const{apiEndpoint:e,setApiEndpoint:n}=(0,a.A)();return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:"The GraphQL endpoint to connect to:"}),(0,s.jsxs)("select",{type:"text",value:e,onChange:e=>{n(e.target.value)},style:{width:"50%",marginBottom:"10px"},children:[(0,s.jsx)("option",{value:"https://api.blink.sv/graphql",children:"Blink (mainnet) - https://api.blink.sv/graphql"}),(0,s.jsx)("option",{value:"https://api.staging.galoy.io/graphql",children:"Staging (signet) - https://api.staging.galoy.io/graphql"})]})]})}},9814:(e,n,t)=>{t.d(n,{K:()=>l});t(6540);var a=t(9340),s=t(4848);function l(){const{setAuthToken:e}=(0,a.A)();return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{children:"A valid authentication token is required in the header as a bearer token:"}),(0,s.jsx)("input",{type:"text",placeholder:"Paste the authentication token to use it",onChange:n=>{e(n.target.value)},style:{width:"50%",marginBottom:"10px"}})]})}},7077:(e,n,t)=>{t.d(n,{t:()=>a});const a=async function(e,n,t,a){if(void 0===a&&(a={}),!e)throw new Error("Not authenticated");if(!t)throw new Error("No GraphQL query provided");try{const s=await fetch(n,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json","X-API-KEY":`${e}`},body:JSON.stringify({query:t,variables:a})});if(!s.ok){const e=await s.text();throw new Error(`Error response from server: ${e}`)}const l=s.headers.get("content-type");if(l&&l.includes("application/json")){return await s.json()}throw new Error(`Unexpected content type: ${l}`)}catch(s){throw console.error("There was an error making the authenticated request:",s),s}}},4796:(e,n,t)=>{t.d(n,{lc:()=>a});function a(e){let{operation:n,type:t="",setCurlCommand:a,authToken:s,apiEndpoint:l,amount:i,paymentRequest:r="",walletId:o="",recipientWalletId:d="",walletCurrency:c="",address:p,lnAddress:u,lnurl:h}=e,m={query:n.trim(),variables:{}};const x=s?`--header 'X-API-KEY: ${s}'`:"--header 'X-API-KEY: <YOUR_AUTH_TOKEN_HERE>'";"invoice"===t?m.variables.input={amount:i.toString(),walletId:o}:"lnInvoiceCreateOnBehalfOfRecipient"===t?m.variables.input={amount:i.toString(),recipientWalletId:d}:"feeProbe"===t||"lnInvoicePaymentSend"===t?m.variables.input={paymentRequest:r,walletId:o}:"onChainTxFee"===t?m.variables={walletId:o,address:p,amount:i}:"onChainSend"===t?m.variables.input={walletId:o,address:p,amount:i}:"lnAddressPaymentSend"===t?m.variables.input={walletId:o,amount:i,lnAddress:u}:"lnurlPaymentSend"===t&&(m.variables.input={walletId:o,amount:i,lnurl:h});let g=JSON.stringify(m).replace(/\n/g,"");a("wallet"===t?`curl -sS --request POST --header 'content-type: application/json' \\\n  ${x} \\\n  --url '${l}' \\\n  --data '{"query":"query me { me { defaultAccount { wallets { id walletCurrency }}}}", "variables":{}}' \\\n| jq '.data.me.defaultAccount.wallets[] | select(.walletCurrency == "${c}") .id'`:`curl --request POST --header 'content-type: application/json' \\\n  ${x} \\\n  --url '${l}' \\\n  --data '${g}'`)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>r});var a=t(6540);const s={},l=a.createContext(s);function i(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);