webpackJsonp([2],{46:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(4),u=o(s),c=n(38),f=o(c),p=n(48),d=o(p),h=function(e){function t(e){i(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isShow:!1},n}return r(t,e),a(t,[{key:"componentDidMount",value:function(){this.props.visible&&this.enter()}},{key:"componentWillReceiveProps",value:function(e){!this.props.visible&&e.visible?this.enter():this.props.visible&&!e.visible&&this.leave()}},{key:"enter",value:function(){this.setState({isShow:!0})}},{key:"leave",value:function(){this.setState({isShow:!1})}},{key:"render",value:function(){var e=this.state.isShow?u.default.createElement("div",{className:d.default.dyy,onClick:this.props.onClose}," "):null,t=this.props.isConfirm?u.default.createElement("div",null,u.default.createElement("div",{className:d.default.confirmbox},u.default.createElement("a",{href:"javascript:void(0)",onClick:this.props.onConfirm},"ok"))):null,n=u.default.createElement("h2",{className:d.default.title},this.props.title),o=this.state.isShow?u.default.createElement("div",null,u.default.createElement("div",{className:d.default.box},u.default.createElement("div",{className:d.default.closeicon,onClick:this.props.onClose}),n,this.props.children,t)):null;return u.default.createElement("div",null,u.default.createElement(f.default,{transitionName:"fade",transitionEnterTimeout:300,transitionLeaveTimeout:300},e),u.default.createElement(f.default,{transitionName:"slideTop",transitionEnterTimeout:200,transitionLeaveTimeout:200},o))}}]),t}(s.Component);h.propTypes={onClose:s.PropTypes.func.isRequired,onConfirm:s.PropTypes.func,visible:s.PropTypes.bool,title:s.PropTypes.node,children:s.PropTypes.node,isConfirm:s.PropTypes.bool},h.defaultProps={visible:!1,title:null,children:null,isConfirm:!1},t.default=h},47:function(e,t,n){t=e.exports=n(17)(),t.push([e.id,".dialog-dyy-23zjD{top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.8)}.dialog-box-1S2Ob,.dialog-dyy-23zjD{position:fixed;box-sizing:border-box}.dialog-box-1S2Ob{top:50px;left:50%;width:300px;margin-left:-150px;padding:10px 34px;background-color:#fff;border-radius:6px}.dialog-title-3KBv8{padding:24px 0 20px;font-size:20px;font-weight:700;line-height:32px;text-align:left}p{color:rgba(0,0,0,.6)}.dialog-closeicon-317gb{position:absolute;top:4px;right:4px;background:url("+n(79)+") no-repeat;background-size:100%;width:20px;height:20px}.dialog-confirmbox-3w_is{padding:20px 0 0 10px;background:none;text-align:right}.dialog-confirmbox-3w_is a{color:#49a0ff;font-size:16px;text-decoration:none}",""]),t.locals={dyy:"dialog-dyy-23zjD",box:"dialog-box-1S2Ob",title:"dialog-title-3KBv8",closeicon:"dialog-closeicon-317gb",confirmbox:"dialog-confirmbox-3w_is"}},48:function(e,t,n){var o=n(47);"string"==typeof o&&(o=[[e.id,o,""]]),n(19)(o,{}),o.locals&&(e.exports=o.locals)},79:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAAMFBMVEVMaXHs7/Lv7//s7/Hr7/Ds8PDv7/Tr7/Hs7/Lr7/Ds7/Ds8PDt7/Hs7/Hr7/Ps8PHb8Q5AAAAAD3RSTlMAYBCg0O8wgFDA4L9wsEBKJ0x4AAAAjElEQVQoz2NgoBNg/whjpW6ACPwXgPDZ4idAGPZQJalfFCAMZogStngnmF6IErgCqBIkBRAlSArASlAUgJSgKAApQVXAwHD/F4oCBr54mHOhQP6L/UdkPuN/J2YUJfJAK5CVABXAfQRXwICkBKwAWYk81JEwJRz/nVDChYET7gv7BZCgPAQP7gbqRBsAG+0vDtNbdgsAAAAASUVORK5CYII="},140:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),s=n(4),u=o(s),c=n(23),f=n(46),p=o(f),d=n(159),h=o(d),b=function(e){function t(e){i(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={DialogVisible:!1},n}return r(t,e),a(t,[{key:"componentDidMount",value:function(){this.content.style.height=window.innerHeight+"px"}},{key:"showDialog",value:function(){this.setState({DialogVisible:!0})}},{key:"hideDialog",value:function(){this.setState({DialogVisible:!1})}},{key:"render",value:function(){var e=this;return u.default.createElement("div",{className:h.default.content,ref:function(t){return e.content=t}},u.default.createElement(p.default,{visible:this.state.DialogVisible,onClose:this.hideDialog.bind(this),isConfirm:!0,onConfirm:this.hideDialog.bind(this),title:"I'm Dialog"},u.default.createElement("div",{className:"content"},"here are some tips!")),u.default.createElement("h1",null,this.props.title),u.default.createElement("article",null,"this demo includes following parts:",u.default.createElement("ul",null,u.default.createElement("li",null,"React"),u.default.createElement("li",null,"React-Router"),u.default.createElement("li",null,"Redux"),u.default.createElement("li",null,"ES6"),u.default.createElement("li",null,"Webpack"),u.default.createElement("li",null,"CssModule"))),u.default.createElement("a",{href:"javascript:;",className:"btn-primary",onClick:this.props.onChangeTitle},"change title (by redux)"),u.default.createElement("a",{href:"javascript:;",className:"btn-primary",onClick:this.showDialog.bind(this)},"open a dialog"),u.default.createElement(c.Link,{to:"about",className:"btn-primary",activeClassName:"btn.positive"},"About Page"),u.default.createElement(c.Link,{to:"contact",className:"btn-primary"},"Contact Page"),u.default.createElement(c.Link,{to:"fundlist",className:"btn-primary"},"fundlist Page"),u.default.createElement("form",{onSubmit:this.props.handleSubmit,className:h.default.form},u.default.createElement("input",{type:"text",placeholder:"Enter page name"}),u.default.createElement("button",{type:"submit"},"Go")))}}]),t}(s.Component);b.propTypes={onChangeTitle:s.PropTypes.func.isRequired,handleSubmit:s.PropTypes.func.isRequired,title:s.PropTypes.string.isRequired},t.default=b},141:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(71),l=n(23),r=n(140),a=o(r),s=function(e){return{onChangeTitle:function(t){t.preventDefault(),e({type:"sayHi",text:"Look Here"})},handleSubmit:function(e){e.preventDefault();var t=e.target.elements[0].value,n="/"+t+"/";l.browserHistory.push(n)}}},u=function(e){return{title:e.changeText.HELLO_TEXT}},c=(0,i.connect)(u,s)(a.default);t.default=c},147:function(e,t,n){t=e.exports=n(17)(),t.push([e.id,".style-content-MUZCU{position:absolute;top:0;left:0;display:block;width:100%;overflow-y:scroll;overflow-x:hidden;-webkit-overflow-scrolling:touch}.style-content-MUZCU h1{font-size:36px;box-sizing:border-box;padding-left:10px}.style-content-MUZCU article{font-size:18px;color:#333;box-sizing:border-box;padding:0 10px}.style-content-MUZCU li{list-style-type:disc;margin-left:40px}.style-form-1Nmk6{width:230px;margin:0 auto;line-height:2.5;font-size:18px;font-weight:700;text-align:center}.style-form-1Nmk6 input{width:70%;line-height:inherit;background-color:#fff;border-radius:3px 0 0 3px;text-align:center}.style-form-1Nmk6 button{width:30%;line-height:inherit;color:#fff;border-radius:0 3px 3px 0;background-color:#49a0ff}",""]),t.locals={content:"style-content-MUZCU",form:"style-form-1Nmk6"}},159:function(e,t,n){var o=n(147);"string"==typeof o&&(o=[[e.id,o,""]]),n(19)(o,{}),o.locals&&(e.exports=o.locals)}});