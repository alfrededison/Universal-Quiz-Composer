import"../sb-preview/runtime.mjs";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const _ of t.addedNodes)_.tagName==="LINK"&&_.rel==="modulepreload"&&c(_)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const R="modulepreload",T=function(o,i){return new URL(o,i).href},m={},r=function(i,s,c){if(!s||s.length===0)return i();const e=document.getElementsByTagName("link");return Promise.all(s.map(t=>{if(t=T(t,c),t in m)return;m[t]=!0;const _=t.endsWith(".css"),p=_?'[rel="stylesheet"]':"";if(!!c)for(let a=e.length-1;a>=0;a--){const l=e[a];if(l.href===t&&(!_||l.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${p}`))return;const n=document.createElement("link");if(n.rel=_?"stylesheet":R,_||(n.as="script",n.crossOrigin=""),n.href=t,document.head.appendChild(n),_)return new Promise((a,l)=>{n.addEventListener("load",a),n.addEventListener("error",()=>l(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>i())},{createChannel:f}=__STORYBOOK_MODULE_CHANNEL_POSTMESSAGE__,{createChannel:P}=__STORYBOOK_MODULE_CHANNEL_WEBSOCKET__,{addons:O}=__STORYBOOK_MODULE_PREVIEW_API__,E=f({page:"preview"});O.setChannel(E);window.__STORYBOOK_ADDONS_CHANNEL__=E;const{SERVER_CHANNEL_URL:u}=globalThis;if(u){const o=P({url:u});O.setServerChannel(o),window.__STORYBOOK_SERVER_CHANNEL__=o}const L={"./src/Introduction.mdx":async()=>r(()=>import("./Introduction-3417c1da.js"),["./Introduction-3417c1da.js","./jsx-runtime-670450c2.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./index-e38cb073.js","./index-d475d2ea.js","./_baseIsEqual-822f1782.js","./index-d37d4223.js","./index-5a4a86c3.js","./index-356e4a49.js","./index-4fb8b842.js"],import.meta.url),"./src/components/contexts/QuestionsContext.stories.tsx":async()=>r(()=>import("./QuestionsContext.stories-3017953e.js"),["./QuestionsContext.stories-3017953e.js","./jsx-runtime-670450c2.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./template-ts.esm-968fffec.js","./index-2bd4dd7a.js"],import.meta.url),"./src/components/Editor/Editor.stories.ts":async()=>r(()=>import("./Editor.stories-7cb4beea.js"),["./Editor.stories-7cb4beea.js","./Editor-3d808325.js","./jsx-runtime-670450c2.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./index-42a3adc5.js","./_baseIsEqual-822f1782.js"],import.meta.url),"./src/components/Preview/Preview.stories.ts":async()=>r(()=>import("./Preview.stories-cde02c5d.js"),["./Preview.stories-cde02c5d.js","./jsx-runtime-670450c2.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./index-42a3adc5.js","./checked-7deae79e.js","./close-c4b2fa08.js","./template-ts.esm-968fffec.js"],import.meta.url),"./src/components/QuizEditor/QuizEditor.stories.tsx":async()=>r(()=>import("./QuizEditor.stories-2b9afdb5.js"),["./QuizEditor.stories-2b9afdb5.js","./jsx-runtime-670450c2.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./index-2bd4dd7a.js","./checked-7deae79e.js","./template-ts.esm-968fffec.js","./Editor-3d808325.js","./index-42a3adc5.js","./_baseIsEqual-822f1782.js"],import.meta.url),"./src/components/Toast/Toast.stories.ts":async()=>r(()=>import("./Toast.stories-a49efecf.js"),["./Toast.stories-a49efecf.js","./Toast-03f1c514.js","./jsx-runtime-670450c2.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./close-c4b2fa08.js"],import.meta.url),"./src/components/Toast/ToastContext.stories.tsx":async()=>r(()=>import("./ToastContext.stories-05614807.js"),["./ToastContext.stories-05614807.js","./jsx-runtime-670450c2.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./Toast-03f1c514.js","./close-c4b2fa08.js"],import.meta.url)};async function d(o){return L[o]()}d.__docgenInfo={description:"",methods:[],displayName:"importFn"};const{composeConfigs:S,PreviewWeb:w,ClientApi:I}=__STORYBOOK_MODULE_PREVIEW_API__,A=async()=>{const o=await Promise.all([r(()=>import("./config-d144830d.js"),["./config-d144830d.js","./index-d475d2ea.js","./index-f1f749bf.js","./_commonjsHelpers-042e6b4d.js","./react-18-9597b9a1.js","./_baseIsEqual-822f1782.js","./index-5a4a86c3.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-0435c720.js"),["./preview-0435c720.js","./index-d475d2ea.js","./index-d37d4223.js"],import.meta.url),r(()=>import("./preview-1f3d72c7.js"),[],import.meta.url),r(()=>import("./preview-bb5acd95.js"),["./preview-bb5acd95.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),r(()=>import("./preview-f96f0111.js"),["./preview-f96f0111.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-e6f1f377.js"),["./preview-e6f1f377.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-62235626.js"),["./preview-62235626.js","./index-d475d2ea.js","./index-356e4a49.js"],import.meta.url),r(()=>import("./preview-b1164a2e.js"),["./preview-b1164a2e.js","./index-d475d2ea.js"],import.meta.url),r(()=>import("./preview-643ac584.js"),["./preview-643ac584.js","./index-d475d2ea.js","./_commonjsHelpers-042e6b4d.js"],import.meta.url),r(()=>import("./preview-f36e0e3b.js"),["./preview-f36e0e3b.js","./preview-352d67c9.css"],import.meta.url)]);return S(o)};window.__STORYBOOK_PREVIEW__=window.__STORYBOOK_PREVIEW__||new w;window.__STORYBOOK_STORY_STORE__=window.__STORYBOOK_STORY_STORE__||window.__STORYBOOK_PREVIEW__.storyStore;window.__STORYBOOK_CLIENT_API__=window.__STORYBOOK_CLIENT_API__||new I({storyStore:window.__STORYBOOK_PREVIEW__.storyStore});window.__STORYBOOK_PREVIEW__.initialize({importFn:d,getProjectAnnotations:A});export{r as _};
//# sourceMappingURL=iframe-4a1167b4.js.map
