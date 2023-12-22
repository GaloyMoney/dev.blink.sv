"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),m=r,b=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return a?n.createElement(b,o(o({ref:t},c),{},{components:a})):n.createElement(b,o({ref:t},c))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},7158:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const i={id:"websocket",title:"Websocket connection",slug:"/api/websocket"},o=void 0,s={unversionedId:"api/websocket",id:"api/websocket",title:"Websocket connection",description:"Websockets are used to receive real-time updates from the Blink API.",source:"@site/docs/api/websocket.md",sourceDirName:"api",slug:"/api/websocket",permalink:"/api/websocket",draft:!1,tags:[],version:"current",frontMatter:{id:"websocket",title:"Websocket connection",slug:"/api/websocket"},sidebar:"apiSidebar",previous:{title:"Webhooks",permalink:"/api/webhooks"},next:{title:"Error handling",permalink:"/api/errors"}},l={},p=[{value:"Available websocket events",id:"available-websocket-events",level:2},{value:"Websocket endpoint",id:"websocket-endpoint",level:2},{value:"Apollo Playground",id:"apollo-playground",level:2},{value:"Postman",id:"postman",level:2},{value:"Header to use",id:"header-to-use",level:3},{value:"Send the <code>connection_init</code> request",id:"send-the-connection_init-request",level:3},{value:"For authenticated requests",id:"for-authenticated-requests",level:3},{value:"Send a subscription request",id:"send-a-subscription-request",level:3},{value:"websocat",id:"websocat",level:2},{value:"Usage without authentication",id:"usage-without-authentication",level:3},{value:"Example output",id:"example-output",level:3},{value:"Authenticated usage",id:"authenticated-usage",level:3},{value:"Example output",id:"example-output-1",level:3},{value:"Test implementation in the galoy backend",id:"test-implementation-in-the-galoy-backend",level:2}],c={toc:p},u="wrapper";function d(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Websockets are used to receive real-time updates from the Blink API.",(0,r.kt)("br",null),"\nImplemented using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md"},"GraphQL over WebSocket Protocol")),(0,r.kt)("h2",{id:"available-websocket-events"},"Available websocket events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"myUpdates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"lnInvoicePaymentStatus")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"realtimePrice")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"price"))),(0,r.kt)("h2",{id:"websocket-endpoint"},"Websocket endpoint"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"wss://ws.blink.sv/graphql")),(0,r.kt)("h2",{id:"apollo-playground"},"Apollo Playground"),(0,r.kt)("p",null,"To try the subscriptions and explore the schema use the",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://studio.apollographql.com/sandbox/explorer?endpoint=https%3A%2F%2Fapi.blink.sv%2Fgraphql&explorerURLState=N4IgJg9gxgrgtgUwHYBcQC4QGcYCMtQBOAlgA4rERIAEAyngSeZUgBQAkxSpMK61AJQQBDADYVEABRJQEASW68AhAEpqwADo1qhEeOJSZCVlx59qnRSjWbt1HXokJpxWeq33P1YmA9fquChQtMIoLm62-p64wlgIflEQAGZJcSgJngC%2BGdnauZkgADQgAG7CJMK4oghYGCCR1BogprxN-A32TbCEukhQAJ5tjSAAqrQAIk1%2B%2BSCZQA"},"Apollo Playground for Blink subscriptions")),(0,r.kt)("p",null,"After loading the playground:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"open the ",(0,r.kt)("inlineCode",{parentName:"p"},"SANDBOX")," connection settings and set:",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"wss://ws.blink.sv/graphql")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Subscriptions")," URL then ",(0,r.kt)("inlineCode",{parentName:"p"},"Save"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"add the ",(0,r.kt)("inlineCode",{parentName:"p"},"X-API-KEY")," header with your API key from the ",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://dashboard.blink.sv"},"Blink Dashboard")," to authenticate the connection."))),(0,r.kt)("h2",{id:"postman"},"Postman"),(0,r.kt)("p",null,"Try the websocket connection examples in the ",(0,r.kt)("a",{parentName:"p",href:"https://www.postman.com/avionics-astronomer-21512623/workspace/galoy-api/ws-raw-request/65844dfbf0aa010f3874d5ff"},"Galoy API collection")),(0,r.kt)("p",null,"To use the raw websocket protocol in Postman there are a few steps to follow:"),(0,r.kt)("h3",{id:"header-to-use"},"Header to use"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Define the protocol",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},"Sec-WebSocket-Protocol: graphql-transport-ws\n")))),(0,r.kt)("h3",{id:"send-the-connection_init-request"},"Send the ",(0,r.kt)("inlineCode",{parentName:"h3"},"connection_init")," request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"to get a ",(0,r.kt)("inlineCode",{parentName:"li"},"connection_ack")," response",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "connection_init",\n  "payload": {}\n}\n')))),(0,r.kt)("h3",{id:"for-authenticated-requests"},"For authenticated requests"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"include the api key in the payload of the ",(0,r.kt)("inlineCode",{parentName:"li"},"connection_init")," request",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "connection_init",\n  "payload": {\n    "X-API-KEY": "<your api key>"\n  }\n}\n')))),(0,r.kt)("h3",{id:"send-a-subscription-request"},"Send a subscription request"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"use the format described in the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/enisdenjo/graphql-ws/blob/master/PROTOCOL.md#subscribe"},"GraphQL over WebSocket Protocol")),(0,r.kt)("li",{parentName:"ul"},"need to paste the message in place of the ",(0,r.kt)("inlineCode",{parentName:"li"},"connection_init")," message to continue using the same connection",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "id": "1",\n    "type": "subscribe",\n    "payload": {\n        "query": "subscription  {  price(    input: { amount: 100 amountCurrencyUnit: BTCSAT priceCurrencyUnit: USDCENT }  ) {    errors {      message    }    price {      base      offset      currencyUnit    }  }}",\n        "variables": {}\n    }\n}\n')))),(0,r.kt)("h2",{id:"websocat"},"websocat"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Install with:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Linux (with a Rust toolchain installed)",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cargo install websocat\n"))),(0,r.kt)("li",{parentName:"ul"},"MacOS",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"brew install websocat\n"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Connect to the websocket endpoint"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"websocat ${websocket_endpoint} -H 'Sec-WebSocket-Protocol: graphql-transport-ws' -v\n")))),(0,r.kt)("h3",{id:"usage-without-authentication"},"Usage without authentication"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Send the ",(0,r.kt)("inlineCode",{parentName:"p"},"connection_init")," request for non-authenticated requests"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type": "connection_init", "payload": {} }\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"price subscription message"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": "1", "type": "subscribe", "payload": {  "query": "subscription { price( input: { amount: 100 amountCurrencyUnit: BTCSAT priceCurrencyUnit: USDCENT } ) { errors { message } price { base offset currencyUnit } }}",  "variables": {} }}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"realtimePrice subscription message"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": "2", "type": "subscribe", "payload": { "query": "subscription realtimePrice($input: RealtimePriceInput!) { realtimePrice(input: $input) { realtimePrice { id btcSatPrice { base offset } } errors { code message path } }}", "variables": { "input": { "currency": "USD" } } }}\n')))),(0,r.kt)("h3",{id:"example-output"},"Example output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'websocat ${websocket_endpoint} -H \'Sec-WebSocket-Protocol: graphql-transport-ws\' -v\n[INFO  websocat::lints] Auto-inserting the line mode\n[INFO  websocat::stdio_threaded_peer] get_stdio_peer (threaded)\n[INFO  websocat::ws_client_peer] get_ws_client_peer\n[INFO  websocat::ws_client_peer] Connected to ws\n{ "type": "connection_init", "payload": {}}\n{"type":"connection_ack"}\n{ "id": "1", "type": "subscribe", "payload": {  "query": "subscription { price( input: { amount: 100 amountCurrencyUnit: BTCSAT priceCurrencyUnit: USDCENT } ) { errors { message } price { base offset currencyUnit } }}",  "variables": {} }}\n{"id":"1","type":"next","payload":{"data":{"price":{"errors":[],"price":{"base":4364414843750,"offset":12,"currencyUnit":"USDCENT"}}}}}\n[INFO  websocat::ws_peer] Received WebSocket ping\n{ "id": "2", "type": "subscribe", "payload": { "query": "subscription realtimePrice($input: RealtimePriceInput!) { realtimePrice(input: $input) { realtimePrice { id btcSatPrice { base offset } } errors { code message path } }}", "variables": { "input": { "currency": "USD" } } }}\n{"id":"2","type":"next","payload":{"data":{"realtimePrice":{"realtimePrice":{"id":"a6e2abdb-431e-5455-81c1-92fbaccfb0de","btcSatPrice":{"base":43623050781,"offset":12}},"errors":[]}}}}\n[INFO  websocat::ws_peer] Received WebSocket ping\n{"id":"1","type":"next","payload":{"data":{"price":{"errors":[],"price":{"base":4362700000000,"offset":12,"currencyUnit":"USDCENT"}}}}}\n{"id":"2","type":"next","payload":{"data":{"realtimePrice":{"realtimePrice":{"id":"6d453741-e0ad-5fec-b27f-3d987571f5ad","btcSatPrice":{"base":43627000000,"offset":12}},"errors":[]}}}}\n')))),(0,r.kt)("h3",{id:"authenticated-usage"},"Authenticated usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Send the ",(0,r.kt)("inlineCode",{parentName:"p"},"connection_init")," request for authenticated requests"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type": "connection_init", "payload": { "X-API-KEY": "${api_key}" } }\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"myUpdates subscription message"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": "1", "type": "subscribe", "payload": { "query": "subscription { myUpdates { update { ... on LnUpdate { transaction { initiationVia { ... on InitiationViaLn { paymentHash } } direction } } } } }", "variables": {} }}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"lnInvoicePaymentStatus subscription message"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "id": "2", "type": "subscribe", "payload": { "query": "subscription LnInvoicePaymentStatus($input: LnInvoicePaymentStatusInput!) { lnInvoicePaymentStatus(input: $input) { status errors { code message path } }}", "variables": { "input": { "paymentRequest": "lnbc...." } } }}\n')))),(0,r.kt)("h3",{id:"example-output-1"},"Example output"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'websocat ${websocket_endpoint} -H \'Sec-WebSocket-Protocol: graphql-transport-ws\' -v\n[INFO  websocat::lints] Auto-inserting the line mode\n[INFO  websocat::stdio_threaded_peer] get_stdio_peer (threaded)\n[INFO  websocat::ws_client_peer] get_ws_client_peer\n[INFO  websocat::ws_client_peer] Connected to ws\n{ "type": "connection_init", "payload": { "X-API-KEY": "galoy_staging_BAMGaY2PPxmAkQwILLNWTlrEJOm1R7cS82CzvviSB9jCrvBumrXwOdjMri41rUCE" } }\n{"type":"connection_ack"}\n[INFO  websocat::ws_peer] Received WebSocket ping\n{ "id": "1", "type": "subscribe", "payload": { "query": "subscription { myUpdates { update { ... on LnUpdate { transaction { initiationVia { ... on InitiationViaLn { paymentHash } } direction } } } } }", "variables": {} }}\n{"id":"1","type":"next","payload":{"data":{"myUpdates":{"update":{}}}}}\n{"id":"1","type":"next","payload":{"data":{"myUpdates":{"update":{}}}}}\n[INFO  websocat::ws_peer] Received WebSocket ping\n{"id":"1","type":"next","payload":{"data":{"myUpdates":{"update":{}}}}}\n{"id":"1","type":"next","payload":{"data":{"myUpdates":{"update":{}}}}}\n{ "id": "2", "type": "subscribe", "payload": { "query": "subscription LnInvoicePaymentStatus($input: LnInvoicePaymentStatusInput!) { lnInvoicePaymentStatus(input: $input) { status errors { code message path } }}", "variables": { "input": { "paymentRequest": "lntbs1220n1pjklpx5pp5wn0zrhygl8u8p7k5nggsa3hcj9htkk0t8df5mxm2hrumk5gedgwsdq0w3jhxapqd4jk6mccqzpuxqyz5vqsp566v7qag22wnl5spf3zhrfruxyaek5m3uv5pu4dzpwmffk6adykpq9qyyssq62exrk3zcwfeh9c0hnhlpv9lmn33fryz4l9acmq79myp57lgj29390tucf4rycxn3zxtre8fzuzs6acu0w4umuetu9zr04zusa56duspsmsxv5" } } }}\n{"id":"2","type":"next","payload":{"data":{"lnInvoicePaymentStatus":{"status":"PAID","errors":[]}}}}\n[INFO  websocat::ws_peer] Received WebSocket ping\n')))),(0,r.kt)("h2",{id:"test-implementation-in-the-galoy-backend"},"Test implementation in the galoy backend"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/GaloyMoney/galoy/blob/e010ac0ac2020d546ec2dbbd1a6680ac1a0282af/bats/helpers/subscriber/src/gql-subscribe.ts"},"galoy/bats/helpers/subscriber/src/gql-subscribe.ts"))))}d.isMDXComponent=!0}}]);