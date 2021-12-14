"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[2837],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),d=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,f=p["".concat(m,".").concat(u)]||p[u]||c[u]||i;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8773:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return m},toc:function(){return d},default:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o={id:"migration",title:"Migrating from Reanimated 1.x",sidebar_label:"Migration from v1"},l=void 0,m={unversionedId:"migration",id:"version-2.2.0/migration",isDocsHomePage:!1,title:"Migrating from Reanimated 1.x",description:"We wanted to make it possible to migrate from Reanimated 1 to Reanimated 2 incrementally.",source:"@site/versioned_docs/version-2.2.0/migration.md",sourceDirName:".",slug:"/migration",permalink:"/react-native-reanimated/docs/2.2.0/migration",version:"2.2.0",frontMatter:{id:"migration",title:"Migrating from Reanimated 1.x",sidebar_label:"Migration from v1"},sidebar:"version-2.2.0/docs",previous:{title:"Architecture",permalink:"/react-native-reanimated/docs/2.2.0/architecture"},next:{title:"Web Support",permalink:"/react-native-reanimated/docs/2.2.0/web-support"}},d=[{value:"Renamed methods:",id:"renamed-methods",children:[]}],s={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"We wanted to make it possible to migrate from Reanimated 1 to Reanimated 2 incrementally.\nWhen installing Reanimated 2, you will be able to use the old API as well as the new one.\nWe made the latest stable Reanimated 1 available from the same package with a few exceptions, as we needed to address some naming collisions.\nWhenever there was a naming collision with Reanimated 1, we'd rename the Reanimated 1 version of such method in order to keep the naming in Reanimated 2 cleaner.\nThis strategy made the most sense to us, as we are planning to slowly phase out the old API (we will keep making fixes to Reanimated 1 core but most likely stop new feature development).\nUnfortunately, it means that Reanimated 2 introduces some breaking changes to the API, where some methods pulled from Reanimated 1 changed there name.\nThankfully the list of the renamed methods is relatively short, and the renamed methods weren't too frequently used anyways."),(0,i.kt)("h3",{id:"renamed-methods"},"Renamed methods:"),(0,i.kt)("h4",{id:"1-interpolate-renamed-to-interpolatenode"},"1. ",(0,i.kt)("inlineCode",{parentName:"h4"},"interpolate")," renamed to ",(0,i.kt)("inlineCode",{parentName:"h4"},"interpolateNode")),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"interpolate")," imported directly from ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"interpolateNode")," instead.\nIf you were using a class member method ",(0,i.kt)("inlineCode",{parentName:"p"},"AnimatedValue.interpolate"),", no change is necessary."),(0,i.kt)("h4",{id:"2-easing-renamed-to-easingnode"},"2. ",(0,i.kt)("inlineCode",{parentName:"h4"},"Easing")," renamed to ",(0,i.kt)("inlineCode",{parentName:"h4"},"EasingNode")),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"Easing")," imported from ",(0,i.kt)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",(0,i.kt)("inlineCode",{parentName:"p"},"EasingNode")," instead."))}c.isMDXComponent=!0}}]);