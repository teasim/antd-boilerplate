(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1679:function(e,t,a){"use strict";var l=a(0),r=a(23);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,u=l(a(3)),d=l(a(4)),c=l(a(5)),o=l(a(6)),f=l(a(7)),m=r(a(1)),i=l(a(42)),s=a(615),p=l(a(1737)),E=l(a(619)),v=l(a(617)),b=l(a(618)),h=l(a(625)),y=l(a(2116)),g=l(a(616)),N=l(a(1696)),k=l(a(1780)),x=l(a(1771)),C=l(a(1743)),w=l(a(1814)),M=l(a(1707)),B=l(a(2118)),I=w.default.Button,P=w.default.Group,j=h.default.Search,L=(0,s.connect)(function(e){return{list:e.list,loading:e.loading.models.list}})(n=function(e){function t(){return(0,u.default)(this,t),(0,c.default)(this,(0,o.default)(t).apply(this,arguments))}return(0,f.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){this.props.dispatch({type:"list/fetch",payload:{count:5}})}},{key:"render",value:function(){var e=this.props,t=e.list.list,a=e.loading,l=function(e){var t=e.title,a=e.value,l=e.bordered;return m.default.createElement("div",{className:B.default.headerInfo},m.default.createElement("span",null,t),m.default.createElement("p",null,a),l&&m.default.createElement("em",null))},r=m.default.createElement("div",{className:B.default.extraContent},m.default.createElement(P,{defaultValue:"all"},m.default.createElement(I,{value:"all"},"全部"),m.default.createElement(I,{value:"progress"},"进行中"),m.default.createElement(I,{value:"waiting"},"等待中")),m.default.createElement(j,{className:B.default.extraContentSearch,placeholder:"请输入",onSearch:function(){return{}}})),n=function(e){var t=e.data,a=t.owner,l=t.createdAt,r=t.percent,n=t.status;return m.default.createElement("div",{className:B.default.listContent},m.default.createElement("div",{className:B.default.listContentItem},m.default.createElement("span",null,"Owner"),m.default.createElement("p",null,a)),m.default.createElement("div",{className:B.default.listContentItem},m.default.createElement("span",null,"开始时间"),m.default.createElement("p",null,(0,i.default)(l).format("YYYY-MM-DD HH:mm"))),m.default.createElement("div",{className:B.default.listContentItem},m.default.createElement(y.default,{percent:r,status:n,strokeWidth:6,style:{width:180}})))},u=m.default.createElement(x.default,null,m.default.createElement(x.default.Item,null,m.default.createElement("a",null,"编辑")),m.default.createElement(x.default.Item,null,m.default.createElement("a",null,"删除"))),d=function(){return m.default.createElement(k.default,{overlay:u},m.default.createElement("a",null,"更多 ",m.default.createElement(N.default,{type:"down"})))};return m.default.createElement(M.default,null,m.default.createElement("div",{className:B.default.standardList},m.default.createElement(E.default,{bordered:!1},m.default.createElement(v.default,null,m.default.createElement(b.default,{sm:8,xs:24},m.default.createElement(l,{title:"我的待办",value:"8个任务",bordered:!0})),m.default.createElement(b.default,{sm:8,xs:24},m.default.createElement(l,{title:"本周任务平均处理时间",value:"32分钟",bordered:!0})),m.default.createElement(b.default,{sm:8,xs:24},m.default.createElement(l,{title:"本周完成任务数",value:"24个任务"})))),m.default.createElement(E.default,{className:B.default.listCard,bordered:!1,title:"标准列表",style:{marginTop:24},bodyStyle:{padding:"0 32px 40px 32px"},extra:r},m.default.createElement(g.default,{type:"dashed",style:{width:"100%",marginBottom:8},icon:"plus"},"添加"),m.default.createElement(p.default,{size:"large",rowKey:"id",loading:a,pagination:{showSizeChanger:!0,showQuickJumper:!0,pageSize:5,total:50},dataSource:t,renderItem:function(e){return m.default.createElement(p.default.Item,{actions:[m.default.createElement("a",null,"编辑"),m.default.createElement(d,null)]},m.default.createElement(p.default.Item.Meta,{avatar:m.default.createElement(C.default,{src:e.logo,shape:"square",size:"large"}),title:m.default.createElement("a",{href:e.href},e.title),description:e.subDescription}),m.default.createElement(n,{data:e}))}}))))}}]),t}(m.PureComponent))||n;t.default=L},1702:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.split("/").filter(function(e){return e});return t.map(function(e,a){return"/".concat(t.slice(0,a+1).join("/"))})}},1707:function(e,t,a){"use strict";var l=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=l(a(11)),n=l(a(19)),u=l(a(1)),d=a(336),c=l(a(1708)),o=l(a(1711));t.default=function(e){var t=e.children,a=e.wrapperClassName,l=e.top,f=(0,n.default)(e,["children","wrapperClassName","top"]);return u.default.createElement("div",{style:{margin:"-24px -24px 0"},className:a},l,u.default.createElement(c.default,(0,r.default)({key:"pageheader"},f,{linkElement:d.Link})),t?u.default.createElement("div",{className:o.default.content},t):null)}},1708:function(e,t,a){"use strict";var l=a(23),r=a(0);Object.defineProperty(t,"__esModule",{value:!0}),t.getBreadcrumb=N,t.default=void 0;var n=r(a(11)),u=r(a(16)),d=r(a(3)),c=r(a(4)),o=r(a(5)),f=r(a(6)),m=r(a(7)),i=l(a(1)),s=r(a(2)),p=r(a(620)),E=r(a(1701)),v=r(a(1714)),b=r(a(1702)),h=r(a(8)),y=r(a(1710)),g=E.default.TabPane;function N(e,t){var a=e[t];return a||Object.keys(e).forEach(function(l){(0,p.default)(l).test(t)&&(a=e[l])}),a||{}}var k=function(e){function t(){var e,a;(0,d.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return(a=(0,o.default)(this,(e=(0,f.default)(t)).call.apply(e,[this].concat(r)))).state={breadcrumb:null},a.onChange=function(e){a.props.onTabChange&&a.props.onTabChange(e)},a.getBreadcrumbProps=function(){return{routes:a.props.routes||a.context.routes,params:a.props.params||a.context.params,routerLocation:a.props.location||a.context.location,breadcrumbNameMap:a.props.breadcrumbNameMap||a.context.breadcrumbNameMap}},a.getBreadcrumbDom=function(){var e=a.conversionBreadcrumbList();a.setState({breadcrumb:e})},a.conversionFromProps=function(){var e=a.props,t=e.breadcrumbList,l=e.breadcrumbSeparator,r=e.linkElement,n=void 0===r?"a":r;return i.default.createElement(v.default,{className:y.default.breadcrumb,separator:l},t.map(function(e){return i.default.createElement(v.default.Item,{key:e.title},e.href?(0,i.createElement)(n,(0,u.default)({},"a"===n?"href":"to",e.href),e.title):e.title)}))},a.conversionFromLocation=function(e,t){var l=a.props,r=l.breadcrumbSeparator,n=l.linkElement,d=void 0===n?"a":n,c=(0,b.default)(e.pathname),o=c.map(function(e,a){var l=N(t,e),r=a!==c.length-1&&l.component;return l.name&&!l.hideInBreadcrumb?i.default.createElement(v.default.Item,{key:e},(0,i.createElement)(r?d:"span",(0,u.default)({},"a"===d?"href":"to",e),l.name)):null});return o.unshift(i.default.createElement(v.default.Item,{key:"home"},(0,i.createElement)(d,(0,u.default)({},"a"===d?"href":"to","/"),"首页"))),i.default.createElement(v.default,{className:y.default.breadcrumb,separator:r},o)},a.conversionBreadcrumbList=function(){var e=a.props,t=e.breadcrumbList,l=e.breadcrumbSeparator,r=a.getBreadcrumbProps(),n=r.routes,u=r.params,d=r.routerLocation,c=r.breadcrumbNameMap;return t&&t.length?a.conversionFromProps():n&&u?i.default.createElement(v.default,{className:y.default.breadcrumb,routes:n.filter(function(e){return e.breadcrumbName}),params:u,itemRender:a.itemRender,separator:l}):d&&d.pathname?a.conversionFromLocation(d,c):null},a.itemRender=function(e,t,l,r){var n=a.props.linkElement,u=void 0===n?"a":n;return l.indexOf(e)===l.length-1||!e.component?i.default.createElement("span",null,e.breadcrumbName):(0,i.createElement)(u,{href:r.join("/")||"/",to:r.join("/")||"/"},e.breadcrumbName)},a}return(0,m.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function(){this.getBreadcrumbDom()}},{key:"componentWillReceiveProps",value:function(){this.getBreadcrumbDom()}},{key:"render",value:function(){var e=this.props,t=e.title,a=e.logo,l=e.action,r=e.content,u=e.extraContent,d=e.tabList,c=e.className,o=e.tabActiveKey,f=e.tabDefaultActiveKey,m=e.tabBarExtraContent,s=(0,h.default)(y.default.pageHeader,c),p={};return void 0!==f&&(p.defaultActiveKey=f),void 0!==o&&(p.activeKey=o),i.default.createElement("div",{className:s},this.state.breadcrumb,i.default.createElement("div",{className:y.default.detail},a&&i.default.createElement("div",{className:y.default.logo},a),i.default.createElement("div",{className:y.default.main},i.default.createElement("div",{className:y.default.row},t&&i.default.createElement("h1",{className:y.default.title},t),l&&i.default.createElement("div",{className:y.default.action},l)),i.default.createElement("div",{className:y.default.row},r&&i.default.createElement("div",{className:y.default.content},r),u&&i.default.createElement("div",{className:y.default.extraContent},u)))),d&&d.length&&i.default.createElement(E.default,(0,n.default)({className:y.default.tabs},p,{onChange:this.onChange,tabBarExtraContent:m}),d.map(function(e){return i.default.createElement(g,{tab:e.tab,key:e.key})})))}}]),t}(i.PureComponent);t.default=k,k.contextTypes={routes:s.default.array,params:s.default.object,location:s.default.object,breadcrumbNameMap:s.default.object}},1710:function(e,t,a){},1711:function(e,t,a){},2118:function(e,t,a){}}]);