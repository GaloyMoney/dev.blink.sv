"use strict";(self.webpackChunkdev_blink_sv=self.webpackChunkdev_blink_sv||[]).push([[362],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>b});var i=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,i,l=function(e,n){if(null==e)return{};var t,i,l={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var c=i.createContext({}),s=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=s(e.components);return i.createElement(c.Provider,{value:n},e.children)},p="mdxType",I={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,m=r(e,["components","mdxType","originalType","parentName"]),p=s(t),d=l,b=p["".concat(c,".").concat(d)]||p[d]||I[d]||a;return t?i.createElement(b,o(o({ref:n},m),{},{components:t})):i.createElement(b,o({ref:n},m))}));function b(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=d;var r={};for(var c in n)hasOwnProperty.call(n,c)&&(r[c]=n[c]);r.originalType=e,r[p]="string"==typeof e?e:l,o[1]=r;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6560:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>I,frontMatter:()=>a,metadata:()=>r,toc:()=>s});var i=t(7462),l=(t(7294),t(3905));const a={id:"postman",title:"Postman collection",slug:"/api/postman"},o=void 0,r={unversionedId:"api/postman",id:"api/postman",title:"Postman collection",description:"Online docs",source:"@site/docs/api/d-postman.md",sourceDirName:"api",slug:"/api/postman",permalink:"/api/postman",draft:!1,tags:[],version:"current",frontMatter:{id:"postman",title:"Postman collection",slug:"/api/postman"},sidebar:"apiSidebar",previous:{title:"Send and receive satoshis",permalink:"/api/sats"},next:{title:"Learn more",permalink:"/api/learn-more"}},c={},s=[{value:"Online docs",id:"online-docs",level:2},{value:"<code>staging</code> and <code>mainnet</code> API access",id:"staging-and-mainnet-api-access",level:2},{value:"Local development",id:"local-development",level:2},{value:"Collection",id:"collection",level:3},{value:"Environment variables",id:"environment-variables",level:3},{value:"Usage",id:"usage",level:3}],m={toc:s},p="wrapper";function I(e){let{components:n,...t}=e;return(0,l.kt)(p,(0,i.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"online-docs"},"Online docs"),(0,l.kt)("p",null,"To browse the API requests in multiple languages visit the Galoy API Postman collection documentation at:\n",(0,l.kt)("a",{parentName:"p",href:"https://documenter.getpostman.com/view/29391384/2s9YCAQq3z#66c6973a-3e06-410b-b035-df2cb2e986bd"},"documenter.getpostman.com/view/29391384/2s9YCAQq3z#66c6973a-3e06-410b-b035-df2cb2e986bd")),(0,l.kt)("p",null,"or go ahead and fork the collection with the staging environment preset to your Postman workspace:"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://god.gw.postman.com/run-collection/29391384-67b79565-f9ed-4ff7-800c-10eabfd0fc38?action=collection%2Ffork&source=rip_markdown&collection-url=entityId%3D29391384-67b79565-f9ed-4ff7-800c-10eabfd0fc38%26entityType%3Dcollection%26workspaceId%3Db8a32fb0-cb8e-4323-934f-c100c6ec02b7#?env%5Bgaloy-staging%5D=W3sia2V5IjoicHJvdG9jb2wiLCJ2YWx1ZSI6Imh0dHBzIiwiZW5hYmxlZCI6dHJ1ZSwic2Vzc2lvblZhbHVlIjoiaHR0cHMiLCJzZXNzaW9uSW5kZXgiOjB9LHsia2V5IjoiZG9tYWluIiwidmFsdWUiOiJhcGkuc3RhZ2luZy5nYWxveS5pbyIsImVuYWJsZWQiOnRydWUsInNlc3Npb25WYWx1ZSI6ImFwaS5zdGFnaW5nLmdhbG95LmlvIiwic2Vzc2lvbkluZGV4IjoxfSx7ImtleSI6InBvcnQiLCJ2YWx1ZSI6IjQ0MyIsImVuYWJsZWQiOnRydWUsInNlc3Npb25WYWx1ZSI6IjQ0MyIsInNlc3Npb25JbmRleCI6Mn0seyJrZXkiOiJjdXJyZW5jeSIsInZhbHVlIjoiQlRDIiwiZW5hYmxlZCI6dHJ1ZSwic2Vzc2lvblZhbHVlIjoiQlRDIiwic2Vzc2lvbkluZGV4IjozfSx7ImtleSI6InBob25lIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6NH0seyJrZXkiOiJjb2RlIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6NX0seyJrZXkiOiJ0b2tlbiIsInZhbHVlIjoiIiwiZW5hYmxlZCI6dHJ1ZSwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4Ijo2fSx7ImtleSI6IndhbGxldElkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJzZXNzaW9uVmFsdWUiOiIiLCJzZXNzaW9uSW5kZXgiOjd9LHsia2V5Ijoid2FsbGV0SWRVc2QiLCJ2YWx1ZSI6IiIsImVuYWJsZWQiOnRydWUsInR5cGUiOiJkZWZhdWx0Iiwic2Vzc2lvblZhbHVlIjoiIiwic2Vzc2lvbkluZGV4Ijo4fSx7ImtleSI6IndhbGxldElkQnRjIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6OX0seyJrZXkiOiJzaWduZXQtcDJwa2gtYWRkcmVzcyIsInZhbHVlIjoibXY0cm55WTNTdTVnamNETnpiTUxLQlFrQmljQ3RIVXRGQiIsImVuYWJsZWQiOnRydWUsInNlc3Npb25WYWx1ZSI6Im12NHJueVkzU3U1Z2pjRE56Yk1MS0JRa0JpY0N0SFV0RkIiLCJzZXNzaW9uSW5kZXgiOjEwfSx7ImtleSI6InNpZ25ldC1wMnNoLWFkZHJlc3MiLCJ2YWx1ZSI6IjJOR1lIZm9OVXRlckt2dUxWeVZVNW5wbUpQS21Cd3RvTXp1IiwiZW5hYmxlZCI6dHJ1ZSwic2Vzc2lvblZhbHVlIjoiMk5HWUhmb05VdGVyS3Z1TFZ5VlU1bnBtSlBLbUJ3dG9NenUiLCJzZXNzaW9uSW5kZXgiOjExfSx7ImtleSI6InNpZ25ldC1zZWd3aXRWMC1hZGRyZXNzIiwidmFsdWUiOiJ0YjFxNzk2NzQwamFleXBwd3NkZnRlNWpxZ2F5NXlxdnl2a3NtdXhrNmciLCJlbmFibGVkIjp0cnVlLCJzZXNzaW9uVmFsdWUiOiJ0YjFxNzk2NzQwamFleXBwd3NkZnRlNWpxZ2F5NXlxdnl2a3NtdXhrNmciLCJzZXNzaW9uSW5kZXgiOjEyfSx7ImtleSI6InR3b0ZBU2VjcmV0IiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6MTN9LHsia2V5IjoiZW1haWxBZGRyZXNzIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6MTR9LHsia2V5IjoiZW1haWxMb2dpbklkIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6MTV9LHsia2V5IjoiZW1haWxDb2RlIiwidmFsdWUiOiIiLCJlbmFibGVkIjp0cnVlLCJ0eXBlIjoiZGVmYXVsdCIsInNlc3Npb25WYWx1ZSI6IiIsInNlc3Npb25JbmRleCI6MTZ9XQ=="},(0,l.kt)("img",{parentName:"a",src:"https://run.pstmn.io/button.svg",alt:"Run in Postman"}))),(0,l.kt)("h2",{id:"staging-and-mainnet-api-access"},(0,l.kt)("inlineCode",{parentName:"h2"},"staging")," and ",(0,l.kt)("inlineCode",{parentName:"h2"},"mainnet")," API access"),(0,l.kt)("p",null,"Follow the links to register and get an authentication token:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api"},"Start with Blink")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/api/auth"},"Get an auth token"))),(0,l.kt)("h2",{id:"local-development"},"Local development"),(0,l.kt)("p",null,"We've included the following files here that can be imported into Postman to get up-and-running with the Galoy API."),(0,l.kt)("h3",{id:"collection"},"Collection"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.galoy.io/galoy_graphql_main_api.postman_collection.json"},"galoy_graphql_main_api.postman_collection.json"),": the collection of queries and mutations")),(0,l.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.galoy.io/galoy-staging.postman_environment.json"},"galoy-staging.postman_environment.json"),": environment variables to hit our deployed staging with signet bitcoin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://dev.galoy.io/galoy-mainnet.postman_environment.json"},"galoy-mainnet.postman_environment.json"),": environment variables to hit our deployed Blink production environment with mainnet bitcoin")),(0,l.kt)("h3",{id:"usage"},"Usage"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Download Postman: ",(0,l.kt)("a",{parentName:"li",href:"https://www.postman.com/"},"www.postman.com")," or use the web version: ",(0,l.kt)("a",{parentName:"li",href:"https://web.postman.co/"},"web.postman.co")),(0,l.kt)("li",{parentName:"ul"},"Import the collection and the respective environment variable files into Postman.")))}I.isMDXComponent=!0}}]);