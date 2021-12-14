"use strict";(self.webpackChunkreact_native_reanimated=self.webpackChunkreact_native_reanimated||[]).push([[7327],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,f=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,o[1]=u;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5264:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o={id:"withSequence",title:"withSequence",sidebar_label:"withSequence"},u=void 0,c={unversionedId:"api/withSequence",id:"version-2.0.0/api/withSequence",isDocsHomePage:!1,title:"withSequence",description:"Runs the provided animations in a sequence.",source:"@site/versioned_docs/version-2.0.0/api/withSequence.md",sourceDirName:"api",slug:"/api/withSequence",permalink:"/react-native-reanimated/docs/2.0.0/api/withSequence",version:"2.0.0",frontMatter:{id:"withSequence",title:"withSequence",sidebar_label:"withSequence"},sidebar:"version-2.0.0/docs",previous:{title:"withDelay",permalink:"/react-native-reanimated/docs/2.0.0/api/withDelay"},next:{title:"withRepeat",permalink:"/react-native-reanimated/docs/2.0.0/api/withRepeat"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Runs the provided animations in a sequence.\nThis modifier takes one or more animation objects as arguments (however fewer than two does not make too much sense).\nThen the execution starts by running the first animation, and the next one is started immediately after the first one is over."),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"animations-variable-number-of-animation-objects"},(0,a.kt)("inlineCode",{parentName:"h4"},"...animations")," ","[Variable number of animation objects]"),(0,a.kt)("p",null,"The animations to be run in sequence."),(0,a.kt)("h3",{id:"returns"},"Returns"),(0,a.kt)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",(0,a.kt)("a",{parentName:"p",href:"useAnimatedStyle"},(0,a.kt)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"In the below example the Shared Values is initialized with 0.\nWe start a sequence of timing animations: first from 0 to 70 and then back to 0.\nThe sequence will will result in the value returning to the original position."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"sharedValue.value = withSequence(withTiming(70), withTiming(0))\n")))}p.isMDXComponent=!0}}]);