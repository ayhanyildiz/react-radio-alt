(window.webpackJsonpvalassis=window.webpackJsonpvalassis||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),s=t(2),r=t.n(s),c=(t(13),t(3)),m=t(4),o=t(6),i=t(5),u=t(7),d=(t(14),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(i.a)(a).call(this,e))).handleOptionChange=function(e){t.setState({checkedOption:e.target.value}),t.props.sendData&&t.props.sendData(e.target.value)},t.state={checkedOption:e.defaultTo&&e.values.includes(e.defaultTo)?e.defaultTo:e.values[0]},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"SegmentedControl"},l.a.createElement("span",{className:"SegmentedControl-header"},this.props.segmentLabel),l.a.createElement("span",{className:"SegmentedControl-controlBox"},this.props.values.map(function(a,t){return l.a.createElement("label",{key:t,className:e.state.checkedOption===a?"checked":""},l.a.createElement("input",{type:"radio",value:a,checked:e.state.checkedOption===a,onChange:e.handleOptionChange}),"".concat(a))})))}}]),a}(n.Component)),p=(t(15),function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("h1",null,"Segmented Control Reusable Component")),l.a.createElement("main",{className:"App-main"},l.a.createElement("div",{className:"App-main-samples"},l.a.createElement(d,{segmentLabel:"Payment Type",values:["PayPal","Credit Card","Net Term"]}),l.a.createElement(d,{segmentLabel:"gender",values:["Male","Female"]}),l.a.createElement(d,{segmentLabel:"number selection",values:["1","2","3","4"],defaultTo:"3"}),l.a.createElement(d,{segmentLabel:"true false selection",values:["true","false"]})),l.a.createElement("div",{className:"App-main-samples"},l.a.createElement(d,{segmentLabel:"Payment Type",values:["PayPal","Credit Card","Net Term"]}),l.a.createElement(d,{segmentLabel:"gender",values:["Male","Female"]}),l.a.createElement(d,{segmentLabel:"number selection",values:["1","2","3","4"],defaultTo:"3"})),l.a.createElement("div",{className:"App-main-samples"},l.a.createElement(d,{segmentLabel:"Payment Type",values:["PayPal","Credit Card","Net Term"]}),l.a.createElement(d,{segmentLabel:"gender",values:["Male","Female"]})),l.a.createElement("div",{className:"App-main-samples"},l.a.createElement(d,{sendData:function(e){console.log(e)},segmentLabel:"Payment Type",values:["PayPal","Credit Card","Net Term"]}))))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.1141f810.chunk.js.map