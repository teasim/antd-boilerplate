(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1693:function(e,t,a){"use strict";var l=a(0),n=a(23);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(1769);var u=l(a(39));a(1857);var r=l(a(229));a(2131);var o,i=l(a(2133)),c=l(a(17)),d=l(a(3)),f=l(a(4)),s=l(a(5)),p=l(a(6)),m=l(a(7)),h=n(a(1)),v=a(615),b=a(336),g=l(a(2134)),y=l(a(2139)),E=g.default.Tab,C=g.default.UserName,N=g.default.Password,_=g.default.Mobile,S=g.default.Captcha,k=g.default.Submit,T=(0,v.connect)(function(e){return{login:e.login,submitting:e.loading.effects["login/login"]}})(o=function(e){function t(){var e,a;(0,d.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return(a=(0,s.default)(this,(e=(0,p.default)(t)).call.apply(e,[this].concat(n)))).state={type:"account",autoLogin:!0},a.onTabChange=function(e){a.setState({type:e})},a.handleSubmit=function(e,t){var l=a.state.type;e||a.props.dispatch({type:"login/login",payload:(0,c.default)({},t,{type:l})})},a.changeAutoLogin=function(e){a.setState({autoLogin:e.target.checked})},a.renderMessage=function(e){return h.default.createElement(i.default,{style:{marginBottom:24},message:e,type:"error",showIcon:!0})},a}return(0,m.default)(t,e),(0,f.default)(t,[{key:"render",value:function(){var e=this.props,t=e.login,a=e.submitting,l=this.state.type;return h.default.createElement("div",{className:y.default.main},h.default.createElement(g.default,{defaultActiveKey:l,onTabChange:this.onTabChange,onSubmit:this.handleSubmit},h.default.createElement(E,{key:"account",tab:"账户密码登录"},"error"===t.status&&"account"===t.type&&!t.submitting&&this.renderMessage("账户或密码错误（admin/888888）"),h.default.createElement(C,{name:"userName",placeholder:"admin/user"}),h.default.createElement(N,{name:"password",placeholder:"888888/123456"})),h.default.createElement(E,{key:"mobile",tab:"手机号登录"},"error"===t.status&&"mobile"===t.type&&!t.submitting&&this.renderMessage("验证码错误"),h.default.createElement(_,{name:"mobile"}),h.default.createElement(S,{name:"captcha"})),h.default.createElement("div",null,h.default.createElement(r.default,{checked:this.state.autoLogin,onChange:this.changeAutoLogin},"自动登录"),h.default.createElement("a",{style:{float:"right"},href:""},"忘记密码")),h.default.createElement(k,{loading:a},"登录"),h.default.createElement("div",{className:y.default.other},"其他登录方式",h.default.createElement(u.default,{className:y.default.icon,type:"alipay-circle"}),h.default.createElement(u.default,{className:y.default.icon,type:"taobao-circle"}),h.default.createElement(u.default,{className:y.default.icon,type:"weibo-circle"}),h.default.createElement(b.Link,{className:y.default.register,to:"/user/register"},"注册账户"))))}}]),t}(h.Component))||o;t.default=T},1868:function(e,t,a){},2134:function(e,t,a){"use strict";var l=a(23),n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(47)),r=n(a(3)),o=n(a(4)),i=n(a(5)),c=n(a(6)),d=n(a(7)),f=l(a(1)),s=n(a(2)),p=n(a(1715)),m=n(a(1701)),h=n(a(8)),v=n(a(2135)),b=n(a(2137)),g=n(a(2138)),y=n(a(1868)),E=function(e){function t(){var e,a;(0,r.default)(this,t);for(var l=arguments.length,n=new Array(l),u=0;u<l;u++)n[u]=arguments[u];return(a=(0,i.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(n)))).state={type:a.props.defaultActiveKey,tabs:[],active:{}},a.onSwitch=function(e){a.setState({type:e}),a.props.onTabChange(e)},a.handleSubmit=function(e){e.preventDefault();var t=a.state,l=t.active[t.type];a.props.form.validateFields(l,{force:!0},function(e,t){a.props.onSubmit(e,t)})},a}return(0,d.default)(t,e),(0,o.default)(t,[{key:"getChildContext",value:function(){var e=this;return{tabUtil:{addTab:function(t){e.setState({tabs:(0,u.default)(e.state.tabs).concat([t])})},removeTab:function(t){e.setState({tabs:e.state.tabs.filter(function(e){return e!==t})})}},form:this.props.form,updateActive:function(t){var a=e.state,l=a.type,n=a.active;n[l]?n[l].push(t):n[l]=[t],e.setState({active:n})}}}},{key:"render",value:function(){var e=this.props,t=e.className,a=e.children,l=this.state,n=l.type,r=l.tabs,o=[],i=[];return f.default.Children.forEach(a,function(e){e&&(e.type.__ANT_PRO_LOGIN_TAB?o.push(e):i.push(e))}),f.default.createElement("div",{className:(0,h.default)(t,y.default.login)},f.default.createElement(p.default,{onSubmit:this.handleSubmit},r.length?f.default.createElement("div",null,f.default.createElement(m.default,{animated:!1,className:y.default.tabs,activeKey:n,onChange:this.onSwitch},o),i):(0,u.default)(a)))}}]),t}(f.Component);E.defaultProps={className:"",defaultActiveKey:"",onTabChange:function(){},onSubmit:function(){}},E.childContextTypes={tabUtil:s.default.object,form:s.default.object,updateActive:s.default.func},E.Tab=b.default,E.Submit=g.default,Object.keys(v.default).forEach(function(e){E[e]=v.default[e]});var C=p.default.create()(E);t.default=C},2135:function(e,t,a){"use strict";var l=a(23),n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(11)),r=n(a(19)),o=n(a(3)),i=n(a(4)),c=n(a(5)),d=n(a(6)),f=n(a(7)),s=l(a(1)),p=n(a(2)),m=n(a(1715)),h=n(a(616)),v=n(a(617)),b=n(a(618)),g=n(a(90)),y=n(a(1868)),E=n(a(2136)),C=m.default.Item;var N={};Object.keys(E.default).forEach(function(e){N[e]=function(e){var t=e.defaultProps,a=e.defaultRules,l=e.type;return function(e){var n,m;return m=n=function(n){function p(e){var t;return(0,o.default)(this,p),(t=(0,c.default)(this,(0,d.default)(p).call(this,e))).onGetCaptcha=function(){var e=59;t.setState({count:e}),t.props.onGetCaptcha&&t.props.onGetCaptcha(),t.interval=setInterval(function(){e-=1,t.setState({count:e}),0===e&&clearInterval(t.interval)},1e3)},t.state={count:0},t}return(0,f.default)(p,n),(0,i.default)(p,[{key:"componentDidMount",value:function(){this.context.updateActive&&this.context.updateActive(this.props.name)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var n=this.context.form.getFieldDecorator,o={},i={},c=this.props,d=c.onChange,f=c.defaultValue,p=c.rules,m=c.name,E=(0,r.default)(c,["onChange","defaultValue","rules","name"]),N=this.state.count;if(o.rules=p||a,d&&(o.onChange=d),f&&(o.initialValue=f),i=E||i,"Captcha"===l){var _=(0,g.default)(i,["onGetCaptcha"]);return s.default.createElement(C,null,s.default.createElement(v.default,{gutter:8},s.default.createElement(b.default,{span:16},n(m,o)(s.default.createElement(e,(0,u.default)({},t,_)))),s.default.createElement(b.default,{span:8},s.default.createElement(h.default,{disabled:N,className:y.default.getCaptcha,size:"large",onClick:this.onGetCaptcha},N?"".concat(N," s"):"获取验证码"))))}return s.default.createElement(C,null,n(m,o)(s.default.createElement(e,(0,u.default)({},t,i))))}}]),p}(s.Component),n.contextTypes={form:p.default.object,updateActive:p.default.func},m}}({defaultProps:E.default[e].props,defaultRules:E.default[e].rules,type:e})(E.default[e].component)});var _=N;t.default=_},2136:function(e,t,a){"use strict";var l=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(1)),u=l(a(625)),r=l(a(1696)),o=l(a(1868)),i={UserName:{component:u.default,props:{size:"large",prefix:n.default.createElement(r.default,{type:"user",className:o.default.prefixIcon}),placeholder:"admin"},rules:[{required:!0,message:"Please enter username!"}]},Password:{component:u.default,props:{size:"large",prefix:n.default.createElement(r.default,{type:"lock",className:o.default.prefixIcon}),type:"password",placeholder:"888888"},rules:[{required:!0,message:"Please enter password!"}]},Mobile:{component:u.default,props:{size:"large",prefix:n.default.createElement(r.default,{type:"mobile",className:o.default.prefixIcon}),placeholder:"mobile number"},rules:[{required:!0,message:"Please enter mobile number!"},{pattern:/^1\d{10}$/,message:"Wrong mobile number format!"}]},Captcha:{component:u.default,props:{size:"large",prefix:n.default.createElement(r.default,{type:"mail",className:o.default.prefixIcon}),placeholder:"captcha"},rules:[{required:!0,message:"Please enter Captcha!"}]}};t.default=i},2137:function(e,t,a){"use strict";var l=a(23),n=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(a(3)),r=n(a(4)),o=n(a(5)),i=n(a(6)),c=n(a(7)),d=l(a(1)),f=n(a(2)),s=n(a(1701)).default.TabPane,p=function(){var e=0;return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e+=1,"".concat(t).concat(e)}}(),m=function(e){function t(e){var a;return(0,u.default)(this,t),(a=(0,o.default)(this,(0,i.default)(t).call(this,e))).uniqueId=p("login-tab-"),a}return(0,c.default)(t,e),(0,r.default)(t,[{key:"componentWillMount",value:function(){this.context.tabUtil&&this.context.tabUtil.addTab(this.uniqueId)}},{key:"render",value:function(){return d.default.createElement(s,this.props)}}]),t}(d.Component);t.default=m,m.__ANT_PRO_LOGIN_TAB=!0,m.contextTypes={tabUtil:f.default.object}},2138:function(e,t,a){"use strict";var l=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=l(a(11)),u=l(a(19)),r=l(a(1)),o=l(a(8)),i=l(a(616)),c=l(a(1715)),d=l(a(1868)),f=c.default.Item,s=function(e){var t=e.className,a=(0,u.default)(e,["className"]),l=(0,o.default)(d.default.submit,t);return r.default.createElement(f,null,r.default.createElement(i.default,(0,n.default)({size:"large",className:l,type:"primary",htmlType:"submit"},a)))};t.default=s},2139:function(e,t,a){}}]);