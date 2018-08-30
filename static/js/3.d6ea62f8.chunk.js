webpackJsonp([3],{411:function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function o(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}Object.defineProperty(r,"__esModule",{value:!0});var s=t(0),i=t.n(s),l=t(7),c=t(437),m=t(438),p=t(439),u=(t.n(p),function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}()),f=function(e){function r(){return n(this,r),a(this,(r.__proto__||Object.getPrototypeOf(r)).apply(this,arguments))}return o(r,e),u(r,[{key:"render",value:function(){return i.a.createElement("div",{className:"mv-container mv-container--centered"},i.a.createElement(m.a,{registerUser:this.props.register}))}}]),r}(s.Component),d=function(e){return{}},b=function(e){return{register:function(r){e(Object(c.a)(r))}}};r.default=Object(l.b)(d,b)(f)},417:function(e,r,t){"use strict";function n(e){return o.a.createElement("div",{className:"popup "+e.wrapperClass},o.a.createElement("input",Object.assign({},e.input,{type:e.type,placeholder:e.placeholder,className:e.className+" "+(e.meta.touched&&e.meta.error?" input_error":null)})),o.a.createElement("span",{className:"popuptext "+(e.meta.touched&&e.meta.error&&e.meta.active?"show":null)},e.meta.error))}r.a=n;var a=t(0),o=t.n(a)},437:function(e,r,t){"use strict";function n(e){var r=e.email,t=e.password;return{type:a.a,payload:{email:r,password:t}}}r.a=n;var a=t(75)},438:function(e,r,t){"use strict";function n(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function a(e,r){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!r||"object"!==typeof r&&"function"!==typeof r?e:r}function o(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function, not "+typeof r);e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),r&&(Object.setPrototypeOf?Object.setPrototypeOf(e,r):e.__proto__=r)}function s(e){var r={};return e.PasswordOne?e.PasswordOne.length<6&&(r.PasswordOne="Password length must be at least 6 characters in length"):r.PasswordOne="Please enter a password",e.PasswordTwo?e.PasswordTwo.length<6&&(r.PasswordOne="Password length must be at least 6 characters in length"):r.PasswordTwo="Please repeat a password",e.PasswordOne&&e.PasswordTwo&&e.PasswordOne!==e.PasswordTwo&&(r.PasswordTwo="Passwords must be the same"),e.Email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.Email)||(r.Email="Invalid email address"):r.Email="Please enter a email",r}var i=t(0),l=t.n(i),c=t(154),m=t(153),p=t(151),u=t(417),f=t(48),d=function(){function e(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(r,t,n){return t&&e(r.prototype,t),n&&e(r,n),r}}(),b=function(e){function r(e){n(this,r);var t=a(this,(r.__proto__||Object.getPrototypeOf(r)).call(this,e));return t.registerUser=t.registerUser.bind(t),t}return o(r,e),d(r,[{key:"registerUser",value:function(e){this.props.registerUser({email:e.Email,password:e.PasswordOne})}},{key:"render",value:function(){return l.a.createElement("form",{onSubmit:this.props.handleSubmit(this.registerUser),autoComplete:"off",className:"mv-register__container"},l.a.createElement("h2",{className:"mv-register__header"},"REGISTER"),l.a.createElement("div",{className:"mv-register__input-group"},l.a.createElement("label",{htmlFor:"Email",className:"mv-register__label"},"Email"),l.a.createElement(m.a,{component:u.a,className:"mv-register__form-input",placeholder:"Email",name:"Email",type:"text",wrapperClass:"mv-register__form-input-wrapper"})),l.a.createElement("div",{className:"mv-register__input-group"},l.a.createElement("label",{htmlFor:"PasswordOne",className:"mv-register__label"},"Password"),l.a.createElement(m.a,{component:u.a,className:"mv-register__form-input",placeholder:"Password",name:"PasswordOne",type:"password",wrapperClass:"mv-register__form-input-wrapper"})),l.a.createElement("div",{className:"mv-register__input-group"},l.a.createElement("label",{htmlFor:"PasswordTwo",className:"mv-register__label"},"Confirm Password"),l.a.createElement(m.a,{component:u.a,className:"mv-register__form-input",placeholder:"Confirm Password",name:"PasswordTwo",type:"password",wrapperClass:"mv-register__form-input-wrapper"})),l.a.createElement("button",{type:"submit",className:"mv-register__form-submit",disabled:this.props.invalid||this.props.submitting||this.props.pristine},"Register"),l.a.createElement(p.a,{href:f.c,to:f.c,className:"mv-register__link"},"Login page"))}}]),r}(i.Component),g=Object(c.a)({form:"RegisterForm",validate:s})(b);r.a=g},439:function(e,r,t){var n=t(440);"string"===typeof n&&(n=[[e.i,n,""]]);var a={hmr:!0};a.transform=void 0;t(150)(n,a);n.locals&&(e.exports=n.locals)},440:function(e,r,t){r=e.exports=t(149)(void 0),r.push([e.i,".mv-register__container {\r\n    width: 30%;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-direction: column;\r\n        flex-direction: column;\r\n    -ms-flex-pack: center;\r\n        justify-content: center;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    padding: 3rem;\r\n    background-color: #fff;\r\n    border-radius: 1rem;\r\n  }\r\n\r\n  .mv-register__header {\r\n    margin: 2rem;\r\n    font-size: 2rem;\r\n    color: #2c2c2c;\r\n  }\r\n\r\n  .mv-register__input-group {\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -ms-flex-align: center;\r\n        align-items: center;\r\n    width: 100%;\r\n    margin-bottom: 2rem;\r\n  }\r\n\r\n  .mv-register__label {\r\n    -ms-flex: 1 0 20%;\r\n        flex: 1 0 20%;\r\n    color: #2c2c2c;\r\n    margin-right: 1rem;\r\n  }\r\n\r\n  .mv-register__form-input-wrapper {\r\n    -ms-flex: 1 1 80%;\r\n        flex: 1 1 80%;\r\n  }\r\n\r\n  .mv-register__form-input {\r\n    width: 100%;\r\n    height: 3rem;\r\n    border: 1px solid #ebebeb;\r\n    border-radius: 0.5rem;\r\n    padding: 0 1rem;\r\n  }\r\n\r\n  .mv-register__form-input:active, .mv-register__form-input:focus {\r\n      outline: none;\r\n      border-color: #3dc8f1;\r\n    }\r\n\r\n  .mv-register__form-submit {\r\n    width: 50%;\r\n    height: 3rem;\r\n    border: none;\r\n    border-radius: 0.5rem;\r\n    color: #fff;\r\n    font-weight: bold;\r\n    font-size: 1.5rem;\r\n    background-color: #3dc8f1;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .mv-register__form-submit:active, .mv-register__form-submit:focus {\r\n      outline: none;\r\n      -webkit-box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.3);\r\n              box-shadow: 0px 0px 12px 5px rgba(0,0,0,0.3);\r\n    }\r\n\r\n  .mv-register__form-submit:disabled {\r\n      opacity: 0.5;\r\n      cursor: not-allowed;\r\n    }\r\n\r\n  .mv-register__link {\r\n    margin-top: 2rem;\r\n    color: #3dc8f1;\r\n  }",""])}});
//# sourceMappingURL=3.d6ea62f8.chunk.js.map