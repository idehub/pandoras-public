(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return L}),a.d(t,"StaticQuery",function(){return l});var n=a(0),i=a.n(n),r=a(4),u=a.n(r),M=a(143),c=a.n(M);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return M.withPrefix}),a.d(t,"navigate",function(){return M.navigate}),a.d(t,"push",function(){return M.push}),a.d(t,"replace",function(){return M.replace}),a.d(t,"navigateTo",function(){return M.navigateTo});var s=a(147),o=a.n(s);a.d(t,"PageRenderer",function(){return o.a});var w=a(49);a.d(t,"parsePath",function(){return w.a});var L=i.a.createContext({}),l=function(e){return i.a.createElement(L.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}l.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},147:function(e,t,a){var n;e.exports=(n=a(151))&&n.default||n},149:function(e,t,a){"use strict";var n=a(7),i=a.n(n),r=a(0),u=a.n(r),M=(a(150),a(144),a(152),function(e){return u.a.createElement("footer",{id:"footer"},u.a.createElement("section",null,u.a.createElement("ul",{className:"icons"},u.a.createElement("li",null,u.a.createElement("a",{href:"#",className:"icon fa-twitter alt"},u.a.createElement("span",{className:"label"},"Twitter"))),u.a.createElement("li",null,u.a.createElement("a",{href:"#",className:"icon fa-facebook alt"},u.a.createElement("span",{className:"label"},"Facebook"))),u.a.createElement("li",null,u.a.createElement("a",{href:"#",className:"icon fa-instagram alt"},u.a.createElement("span",{className:"label"},"Instagram"))))),u.a.createElement("p",{className:"copyright"},"© Pandoras App AS. Design: ",u.a.createElement("a",{href:"https://html5up.net"},"HTML5 UP"),"."))}),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={loading:"is-loading"},a}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.timeoutId=setTimeout(function(){e.setState({loading:""})},100)},a.componentWillUnmount=function(){this.timeoutId&&clearTimeout(this.timeoutId)},a.render=function(){var e=this.props.children;return u.a.createElement("div",{className:"body "+this.state.loading},u.a.createElement("div",{id:"wrapper"},e,u.a.createElement(M,null)))},t}(u.a.Component);t.a=c},150:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),i=a.n(n),r=a(4),u=a.n(r),M=a(68),c=a(2),s=function(e){var t=e.location,a=c.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(M.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=s},152:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iODVweCIgaGVpZ2h0PSI4NXB4IiB2aWV3Qm94PSIwIDAgODAgODAiIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDgwIDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCgk8Zz4NCgkJPHBhdGggZmlsbD0iI0ZGRkZGRiIgZD0iTTQwLDBjMjIuMDkxLDAsNDAsMTcuOTA5LDQwLDQwUzYyLjA5MSw4MCw0MCw4MFMwLDYyLjA5MSwwLDQwUzE3LjkwOSwwLDQwLDB6Ii8+DQoJPC9nPg0KCTxnPg0KCQk8cGF0aCBmaWxsPSIjOGNjOWYwIiBkPSJNNTAuMzc4LDMyLjU3NmMwLDEuMDA1LTAuODE1LDEuODIxLTEuODIxLDEuODIxYy0xLjAwNSwwLTEuODItMC44MTYtMS44Mi0xLjgyMQ0KCQkJYzAtMS4wMDUsMC44MTUtMS44MjEsMS44Mi0xLjgyMUM0OS41NjMsMzAuNzU1LDUwLjM3OCwzMS41NzEsNTAuMzc4LDMyLjU3NnogTTU0LjYyNywyNy4xMTNjMC0wLjM0MS0wLjMwNC0wLjYwNy0wLjY0Ni0wLjYwNw0KCQkJYy02LjYwMSwwLTEwLjIyMywxLjUxOC0xNC45NjQsNi4yNDFjLTEuMDgxLDEuMS0yLjIsMi4zNTItMy4zMzgsMy42OTlsLTcuMTg4LDAuMzc5Yy0wLjE5LDAuMDE5LTAuMzc5LDAuMTMzLTAuNDkzLDAuMzA0DQoJCQlsLTQuMjQ5LDcuMjg0Yy0wLjEzMywwLjIyOC0wLjA5NSwwLjUzLDAuMDk1LDAuNzM5bDEuMjE0LDEuMjE1YzAuMTE0LDAuMTEzLDAuMjg1LDAuMTcsMC40MzcsMC4xN2MwLjA1NywwLDAuMTE0LDAsMC4xNy0wLjAyDQoJCQlsNS4yMzUtMS42MTFsNS4zMyw1LjMzbC0xLjYxMiw1LjIzNmMtMC4wNTcsMC4yMDksMCwwLjQzNywwLjE1MiwwLjYwNmwxLjIxNCwxLjIxNGMwLjEzMywwLjExNCwwLjI4NCwwLjE3MSwwLjQzNiwwLjE3MQ0KCQkJYzAuMTE0LDAsMC4yMDgtMC4wMjEsMC4zMDQtMC4wNzVsNy4yODMtNC4yNWMwLjE3MS0wLjExMywwLjI4NC0wLjMwNCwwLjMwNS0wLjQ5MmwwLjM3OS03LjE5YzEuMzQ3LTEuMTM4LDIuNTk5LTIuMjU3LDMuNjk5LTMuMzM5DQoJCQlDNTIuODgyLDM3LjYwMyw1NC42MjcsMzMuNDExLDU0LjYyNywyNy4xMTN6Ii8+DQoJPC9nPg0KPC9zdmc+"}}]);
//# sourceMappingURL=0-b5d7860efefd2d8386ed.js.map