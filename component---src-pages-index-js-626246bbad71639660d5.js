(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"48la":function(e,t,r){r("2Spj"),r("/SS/"),r("hHhE"),r("HAE/"),e.exports=function(e,t){"use strict";var r="default"in e?e.default:e;function n(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function s(e){return"translateX(".concat(e,"px)")}t=t&&t.hasOwnProperty("default")?t.default:t;var c=function(e){function t(e){var r,n,o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=this,r=!(o=a(t).call(this,e))||"object"!=typeof o&&"function"!=typeof o?l(n):o,i(l(r),"_animationState",{stopped:!0,lastTickTime:null}),i(l(r),"_pos",{x:null}),i(l(r),"_refs",{container:null,inner:null}),r._setContainerRef=r._setContainerRef.bind(l(r)),r._setInnerRef=r._setInnerRef.bind(l(r)),r._tick=r._tick.bind(l(r)),r}var c,h,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}(t,e),c=t,(h=[{key:"componentDidMount",value:function(){this._resetPosition(),this._requestAnimationWithDelay()}},{key:"componentDidUpdate",value:function(){this._resetPosition(),this._requestAnimationWithDelay()}},{key:"_setContainerRef",value:function(e){this._refs.container=e}},{key:"_setInnerRef",value:function(e){this._refs.inner=e}},{key:"_resetPosition",value:function(){this._pos.x=this._getInitialPosition(),this._refs.inner.style.transform=s(this._pos.x)}},{key:"_requestAnimationWithDelay",value:function(){var e=this.props.delay;setTimeout(this._requestAnimationIfNeeded.bind(this),e)}},{key:"_requestAnimationIfNeeded",value:function(){this._refs.container&&this._refs.inner&&this._refs.inner.scrollWidth>this._refs.container.clientWidth&&window.requestAnimationFrame(this._tick)}},{key:"_tick",value:function(e){var t=this._animationState.lastTickTime;t&&this._updateInnerPosition(e-t),this._animationState.lastTickTime=e,this._requestAnimationIfNeeded()}},{key:"_updateInnerPosition",value:function(e){var t=this,r=this.props,n=r.direction,i=r.speed,a=r.childMargin,o=function(){if("right"===n){var r=t._pos.x+e*i;return r>-a?t._getInitialPosition():r}if("left"===n){var o=t._pos.x-e*i;return o<-t._refs.inner.clientWidth/2-a?t._getInitialPosition():o}return t._pos.x}();this._pos.x=o,this._refs.inner.style.transform=s(o)}},{key:"_getInitialPosition",value:function(){var e=this.props,t=e.direction,r=e.childMargin;return"right"===t?-this._refs.inner.clientWidth/2-r:-r}},{key:"render",value:function(){var e=this.props,t=e.childMargin,n=e.children,i=function(){return r.createElement("span",{style:{margin:"0 ".concat(t,"px")}},n)};return r.createElement("div",{ref:this._setContainerRef,style:{overflowX:"hidden"}},r.createElement("div",{ref:this._setInnerRef,style:{display:"inline-block"}},r.createElement(i,null),r.createElement(i,null)))}}])&&n(c.prototype,h),u&&n(c,u),t}(e.PureComponent);return i(c,"propTypes",{speed:t.number,direction:t.oneOf(["left","right"]),delay:t.number,childMargin:t.number,children:t.node}),i(c,"defaultProps",{speed:.04,delay:3e3,direction:"right",childMargin:15,children:null}),c}(r("q1tI"),r("17x9"))},KmJ5:function(e,t,r){e.exports=r.p+"static/hero-adca79ae2d373d93cc1f581621094b07.png"},RXBc:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),i=r.n(n),a=r("vrFN"),o=(r("93Eu"),r("Eg6Q")),l=(r("zLI8"),r("4QlT"),r("/eHF")),s=r.n(l),c=r("48la"),h=r.n(c),u=r("X7BR"),f=r("Xj7D"),p=r.n(f),d=r("Rrg0"),m=r.n(d),g=r("KmJ5"),v=r.n(g),y=r("lfaM"),_=r.n(y),b=r("eaA5"),E=r.n(b),w=r("jgBf"),C=r.n(w),T={default:p.a,phisher:m.a,cluse:v.a,ditto:_.a,fisqual:E.a,trunks:C.a},D=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s.a,{duration:500},i.a.createElement("section",{className:"home__hero "+e.currentHover},i.a.createElement("figure",{className:"home__img"},i.a.createElement("img",{className:"home__img--limiter",src:T[e.currentHover]})),i.a.createElement("div",{className:"marquee__wrap"},i.a.createElement(h.a,{direction:"left",children:"Booty",delay:"0",speed:"0.2"},u.a[e.currentHover].heroTitle)))))},k=(r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("HEwt"),r("vQWL"),r("Wbzz"));var P=function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"home__txt--wrapper"},i.a.createElement("section",{className:"home__txt"},i.a.createElement(s.a,{opposite:!0,duration:500},(t=e.projects,r=e.mouseOverCallback,Array.from(Array(t.length).keys()).map((function(e){return i.a.createElement(k.Link,{paintDrip:!0,hex:"#000000",to:t[e]},i.a.createElement("div",{className:"link__wrapper",onMouseOver:r},i.a.createElement("h1",{className:"home__head"},(n=t[e]).charAt(0).toUpperCase()+n.slice(1)),i.a.createElement("h2",{className:"home__brow"},u.a[t[e]].heroYear)));var n})))))));var t,r},x=r("/g0T"),A=r("fItr");var I=function(e){var t,r;function n(t){var r;return(r=e.call(this,t)||this).handleProjectHover=function(e){r.setState({currentName:e.currentTarget.querySelector(".home__head").innerHTML.toLowerCase()})},r.handleHeaderHover=function(e){r.setState({currentName:"default"})},r.state={currentName:"default"},r}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(a.a,{title:"Yana Gevorgyan"}),i.a.createElement("main",{className:"home"},i.a.createElement("div",{className:"hero__wrapper"},i.a.createElement(o.a,{mouseOverCallback:this.handleHeaderHover}),i.a.createElement(D,{currentHover:this.state.currentName}),i.a.createElement(P,{currentHover:this.state.currentName,projects:["cluse","trunks","fisqual","phisher"],mouseOverCallback:this.handleProjectHover})),i.a.createElement(x.a,null),i.a.createElement(A.a,null)))},n}(i.a.Component);t.default=I},Rrg0:function(e,t,r){e.exports=r.p+"static/hero-0d7f69f79335f8a5e30ae369c1ced5af.png"},X7BR:function(e,t,r){"use strict";r.d(t,"a",(function(){return n}));var n={default:{heroCategory:"",heroYear:"",heroDeliverable:"",heroTitle:"Multidisciplinary Product Designer"},phisher:{heroCategory:"UX Design",heroYear:"2019",heroDeliverable:"Web App",heroTitle:"Raising Awareness About Cybersecurity with a Targeted Phishing Tool"},cluse:{heroCategory:"Software Design",heroYear:"2020",heroDeliverable:"Sketch Plugin",heroTitle:"Developing Inclusive Design Habits for the Average Sketch User"},ditto:{heroCategory:"Software Design",heroYear:"2019",heroDeliverable:"Sketch Plugin",heroTitle:"Optimizing the CSS-to-Sketch Conversion Workflow for Yext, Inc."},fisqual:{heroCategory:"Interaction Design",heroYear:"2019",heroDeliverable:"Mobile App",heroTitle:"Ensuring Financial Wellness for Those with Variable Incomes"},trunks:{heroCategory:"Data Visualization",heroYear:"2018",heroDeliverable:"Web App",heroTitle:"Architecting a Compact Family Tree Model for Easy Web Browsing"},semaphore:{heroCategory:"Machine Learning",heroYear:"2019",heroDeliverable:"Web App",heroTitle:"Teaching Flag Semaphore with Gamification and Machine Learning"},avam:{heroCategory:"User Research",heroYear:"2018",heroDeliverable:"Information Architecture",heroTitle:"Untitled For Now"},bitshit:{heroCategory:"Publication Design",heroYear:"2018",heroDeliverable:"Bootleg Newspaper",heroTitle:"Capturing the Underground Cryptocurrency Scene on Newsprint"},spiral:{heroCategory:"Net Art",heroYear:"2019",heroDeliverable:"Web App",heroTitle:"Untitled For Now"},lissitzky:{heroCategory:"Net Art",heroYear:"2018",heroDeliverable:"Web App",heroTitle:"Throwing Together Constructivist Paintings with Physics Engines"},madlads:{heroCategory:"Machine Learning",heroYear:"2019",heroDeliverable:"Web App",heroTitle:"Reinventing Mad Libs with Machine Learning and Camera Lens"},tarpits:{heroCategory:"Experience Design",heroYear:"2019",heroDeliverable:"User Journey",heroTitle:"Crafting a Foam Pit Experience for the La Brea Tar Pits"},yext:{heroCategory:"Visual Design",heroYear:"2019",heroDeliverable:"Information Architecture",heroTitle:"Boosting SEO for Fortune 500 Companies with Visual Design"},carpets:{heroCategory:"Machine Learning",heroYear:"2019",heroDeliverable:"Web App",heroTitle:"Generating Nightmarish Oriental Textiles with Pix2Pix"},decred:{heroCategory:"Experience Design",heroYear:"2019",heroDeliverable:"Crypto Calculator",heroTitle:"Visualizing Ticket Staking History for the Decred Cryptocurrency"},arteca:{heroCategory:"UI/UX Design",heroYear:"2016",heroDeliverable:"Publishing Platform",heroTitle:"Creating an Interdisciplinary Online Publishing Platform for MIT Press"}}},Xj7D:function(e,t,r){e.exports=r.p+"static/hero-d5ff3a22a34e0e4ea8ad6259aed5b636.gif"},eaA5:function(e,t,r){e.exports=r.p+"static/hero-8a3d180fe7d85f51ddb169d80e7ee2de.png"},jgBf:function(e,t,r){e.exports=r.p+"static/hero-662e436f02c31a646500368fd1235d36.png"},lfaM:function(e,t,r){e.exports=r.p+"static/hero-7c923901b33184ba4fc7d2034e2a1378.png"},vQWL:function(e,t,r){},zLI8:function(e,t,r){}}]);
//# sourceMappingURL=component---src-pages-index-js-626246bbad71639660d5.js.map