(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{142:function(e,a,t){"use strict";t.r(a);var n=t(7),l=t.n(n),s=t(0),r=t.n(s),c=t(159),m=t(183),i=t.n(m),o=t(208),u=t(180),p=t(182),E=t.n(p),d=function(e){return r.a.createElement("header",{id:"header",className:"alt"},r.a.createElement("span",{className:"logo"},r.a.createElement("img",{src:E.a,alt:""})),r.a.createElement("h1",null,"Stellar"),r.a.createElement("p",null,"Just another free, fully responsive site template",r.a.createElement("br",null),"design by ",r.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),"."))},f=t(212),h=t.n(f),N=t(52),g=t.n(N),v=t(271),y=t.n(v),b=t(4),q=t.n(b),k=function(e){return e.children},S=function(e){function a(){var a;return(a=e.call(this)||this).handleClick=a.handleClick.bind(g()(g()(a))),a}l()(a,e);var t=a.prototype;return t.componentDidMount=function(){y.a.polyfill()},t.handleClick=function(e){e.preventDefault();var a=0,t=!0,n=this.props,l=n.type,s=n.element,r=n.offset,c=n.timeout;if(l&&s)switch(l){case"class":t=!!(a=document.getElementsByClassName(s)[0]);break;case"id":t=!!(a=document.getElementById(s))}t?this.scrollTo(a,r,c):console.log("Element not found: "+s)},t.scrollTo=function(e,a,t){void 0===a&&(a=0),void 0===t&&(t=null);var n=e?e.getBoundingClientRect().top+window.pageYOffset:0;t?setTimeout(function(){window.scroll({top:n+a,left:0,behavior:"smooth"})},t):window.scroll({top:n+a,left:0,behavior:"smooth"})},t.render=function(){return r.a.createElement(k,null,"object"==typeof this.props.children?r.a.cloneElement(this.props.children,{onClick:this.handleClick}):r.a.createElement("span",{onClick:this.handleClick},this.props.children))},a}(r.a.Component);S.propTypes={type:q.a.string,element:q.a.string,offset:q.a.number,timeout:q.a.number,children:q.a.node.isRequired};var C=S,L=function(e){return r.a.createElement("nav",{id:"nav",className:e.sticky?"alt":""},r.a.createElement(h.a,{items:["intro","first","second","cta"],currentClassName:"is-active",offset:-300},r.a.createElement("li",null,r.a.createElement(C,{type:"id",element:"intro"},r.a.createElement("a",{href:"#"},"Introduction"))),r.a.createElement("li",null,r.a.createElement(C,{type:"id",element:"first"},r.a.createElement("a",{href:"#"},"First Section"))),r.a.createElement("li",null,r.a.createElement(C,{type:"id",element:"second"},r.a.createElement("a",{href:"#"},"Second Section"))),r.a.createElement("li",null,r.a.createElement(C,{type:"id",element:"cta"},r.a.createElement("a",{href:"#"},"Get Started")))))},w=t(272),j=t.n(w),M=function(e){function a(a){var t;return(t=e.call(this,a)||this)._handleWaypointEnter=function(){t.setState(function(){return{stickyNav:!1}})},t._handleWaypointLeave=function(){t.setState(function(){return{stickyNav:!0}})},t.state={stickyNav:!1},t}return l()(a,e),a.prototype.render=function(){return r.a.createElement(u.a,null,r.a.createElement(i.a,{title:"Gatsby Starter - Stellar"}),r.a.createElement(d,null),r.a.createElement(o.a,{onEnter:this._handleWaypointEnter,onLeave:this._handleWaypointLeave}),r.a.createElement(L,{sticky:this.state.stickyNav}),r.a.createElement("div",{id:"main"},r.a.createElement("section",{id:"intro",className:"main"},r.a.createElement("div",{className:"spotlight"},r.a.createElement("div",{className:"content"},r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"Ipsum sed adipiscing")),r.a.createElement("p",null,"Sed lorem ipsum dolor sit amet nullam consequat feugiat consequat magna adipiscing magna etiam amet veroeros. Lorem ipsum dolor tempus sit cursus. Tempus nisl et nullam lorem ipsum dolor sit amet aliquam."),r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/generic",className:"button"},"Learn More")))),r.a.createElement("span",{className:"image"},r.a.createElement("img",{src:j.a,alt:""})))),r.a.createElement("section",{id:"first",className:"main special"},r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"Magna veroeros")),r.a.createElement("ul",{className:"features"},r.a.createElement("li",null,r.a.createElement("span",{className:"icon major style1 fa-code"}),r.a.createElement("h3",null,"Ipsum consequat"),r.a.createElement("p",null,"Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.")),r.a.createElement("li",null,r.a.createElement("span",{className:"icon major style3 fa-copy"}),r.a.createElement("h3",null,"Amed sed feugiat"),r.a.createElement("p",null,"Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat.")),r.a.createElement("li",null,r.a.createElement("span",{className:"icon major style5 fa-diamond"}),r.a.createElement("h3",null,"Dolor nullam"),r.a.createElement("p",null,"Sed lorem amet ipsum dolor et amet nullam consequat a feugiat consequat tempus veroeros sed consequat."))),r.a.createElement("footer",{className:"major"},r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/generic",className:"button"},"Learn More"))))),r.a.createElement("section",{id:"second",className:"main special"},r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"Ipsum consequat"),r.a.createElement("p",null,"Donec imperdiet consequat consequat. Suspendisse feugiat congue",r.a.createElement("br",null),"posuere. Nulla massa urna, fermentum eget quam aliquet.")),r.a.createElement("ul",{className:"statistics"},r.a.createElement("li",{className:"style1"},r.a.createElement("span",{className:"icon fa-code-fork"}),r.a.createElement("strong",null,"5,120")," Etiam"),r.a.createElement("li",{className:"style2"},r.a.createElement("span",{className:"icon fa-folder-open-o"}),r.a.createElement("strong",null,"8,192")," Magna"),r.a.createElement("li",{className:"style3"},r.a.createElement("span",{className:"icon fa-signal"}),r.a.createElement("strong",null,"2,048")," Tempus"),r.a.createElement("li",{className:"style4"},r.a.createElement("span",{className:"icon fa-laptop"}),r.a.createElement("strong",null,"4,096")," Aliquam"),r.a.createElement("li",{className:"style5"},r.a.createElement("span",{className:"icon fa-diamond"}),r.a.createElement("strong",null,"1,024")," Nullam")),r.a.createElement("p",{className:"content"},"Nam elementum nisl et mi a commodo porttitor. Morbi sit amet nisl eu arcu faucibus hendrerit vel a risus. Nam a orci mi, elementum ac arcu sit amet, fermentum pellentesque et purus. Integer maximus varius lorem, sed convallis diam accumsan sed. Etiam porttitor placerat sapien, sed eleifend a enim pulvinar faucibus semper quis ut arcu. Ut non nisl a mollis est efficitur vestibulum. Integer eget purus nec nulla mattis et accumsan ut magna libero. Morbi auctor iaculis porttitor. Sed ut magna ac risus et hendrerit scelerisque. Praesent eleifend lacus in lectus aliquam porta. Cras eu ornare dui curabitur lacinia."),r.a.createElement("footer",{className:"major"},r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/generic",className:"button"},"Learn More"))))),r.a.createElement("section",{id:"cta",className:"main special"},r.a.createElement("header",{className:"major"},r.a.createElement("h2",null,"Congue imperdiet"),r.a.createElement("p",null,"Donec imperdiet consequat consequat. Suspendisse feugiat congue",r.a.createElement("br",null),"posuere. Nulla massa urna, fermentum eget quam aliquet.")),r.a.createElement("footer",{className:"major"},r.a.createElement("ul",{className:"actions"},r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/generic",className:"button special"},"Get Started")),r.a.createElement("li",null,r.a.createElement(c.Link,{to:"/generic",className:"button"},"Learn More")))))))},a}(r.a.Component);a.default=M},272:function(e,a,t){e.exports=t.p+"static/pic01-b9959e167f94349be29be7284e7b9112.jpg"}}]);
//# sourceMappingURL=component---src-pages-index-js-e9a55964681c0b99120e.js.map