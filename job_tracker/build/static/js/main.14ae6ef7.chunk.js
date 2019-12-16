(this.webpackJsonpjob_tracker=this.webpackJsonpjob_tracker||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),s=n.n(i),l=(n(14),n(6)),r=n(1),c=n(2),p=n(4),h=n(3),u=n(5),m=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleStatus=function(e){n.setState({company:e.company,position:e.position,positionURL:e.positionURL,notes:e.notes,status:"applied",id:e.id},(function(){n.props.handleUpdate(n.state)}))},n.state={company:"",position:"",positionURL:"",notes:""},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.jobs.filter((function(e){return"new"===e.status}));return o.a.createElement("div",{className:"column-listings"},o.a.createElement("h3",null,"Listing (",t.length,")"),o.a.createElement("div",{className:"box"},t.map((function(t){return o.a.createElement("div",{key:t.id,className:"job"},o.a.createElement("h4",null,"Date created: ",t.listingDate),o.a.createElement("h4",null,"Company: ",t.company),o.a.createElement("a",{href:t.positionURL},"Position: ",t.position),o.a.createElement("h4",null,"Notes:"),o.a.createElement("textarea",{readOnly:!0,value:t.notes}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){e.props.handleView("form",t)}},"Edit"),o.a.createElement("button",{onClick:function(){e.props.handleDelete(t.id)}},"Delete"),o.a.createElement("button",{onClick:function(){e.handleStatus(t)}},"Applied"))}))))}}]),t}(o.a.Component),d=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleStatus=function(e){n.setState({company:e.company,position:e.position,positionURL:e.positionURL,notes:e.notes,status:"interview",id:e.id},(function(){n.props.handleUpdate(n.state)}))},n.state={company:"",position:"",positionURL:"",notes:""},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.jobs.filter((function(e){return"applied"===e.status}));return o.a.createElement("div",{className:"column-applied"},o.a.createElement("h3",null,"Applied (",t.length,")"),o.a.createElement("div",{className:"box"},t.map((function(t){return o.a.createElement("div",{key:t.id,className:"job"},o.a.createElement("h4",null,"Date created: ",t.listingDate),o.a.createElement("h4",null,"Company: ",t.company),o.a.createElement("a",{href:t.positionURL},"Position: ",t.position),o.a.createElement("h4",null,"Notes:"),o.a.createElement("textarea",{readOnly:!0,value:t.notes}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){e.props.handleView("applied",t)}},"Edit"),o.a.createElement("button",{onClick:function(){e.props.handleDelete(t.id)}},"Delete"),o.a.createElement("button",{onClick:function(){e.handleStatus(t)}},"Have Interview"))}))))}}]),t}(o.a.Component),f=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).handleStatus=function(e){n.setState({company:e.company,position:e.position,positionURL:e.positionURL,notes:e.notes,status:"rejected",id:e.id},(function(){n.props.handleUpdate(n.state)}))},n.state={company:"",position:"",positionURL:"",notes:""},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.jobs.filter((function(e){return"interview"===e.status}));return o.a.createElement("div",{className:"column-applied"},o.a.createElement("h3",null,"Interview (",t.length,")"),o.a.createElement("div",{className:"box"},t.map((function(t){return o.a.createElement("div",{key:t.id,className:"job"},o.a.createElement("h4",null,"Date created: ",t.listingDate),o.a.createElement("h4",null,"Company: ",t.company),o.a.createElement("a",{href:t.positionURL},"Position: ",t.position),o.a.createElement("h4",null,"Notes:"),o.a.createElement("textarea",{readOnly:!0,value:t.notes}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){e.props.handleView("interview",t)}},"Edit"),o.a.createElement("button",{onClick:function(){e.props.handleDelete(t.id)}},"Delete"),o.a.createElement("button",{onClick:function(){e.handleStatus(t)}},"Rejected"))}))))}}]),t}(o.a.Component),b=function(e){function t(){return Object(r.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.jobs.filter((function(e){return"rejected"===e.status}));return o.a.createElement("div",{className:"column-applied"},o.a.createElement("h3",null,"Try Again (",t.length,")"),o.a.createElement("div",{className:"box"},t.map((function(t){return o.a.createElement("div",{key:t.id,className:"job"},o.a.createElement("h4",null,"Date created: ",t.listingDate),o.a.createElement("h4",null,"Company: ",t.company),o.a.createElement("a",{href:t.positionURL},"Position: ",t.position),o.a.createElement("h4",null,"Notes:"),o.a.createElement("textarea",{readOnly:!0,value:t.notes}),o.a.createElement("br",null),o.a.createElement("button",{onClick:function(){e.props.handleDelete(t.id)}},"Delete"))}))))}}]),t}(o.a.Component),E=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState(Object(l.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),"list"===e.props.view?e.props.handleCreate(e.state):"form"===e.props.view&&e.props.handleUpdate(e.state)},e.state={company:"",position:"",positionURL:"",notes:"",status:"new"},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({company:this.props.formInputs.company,position:this.props.formInputs.position,positionURL:this.props.formInputs.positionURL,notes:this.props.formInputs.notes,id:this.props.formInputs.id})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"editform"},o.a.createElement("h2",null,"Edit Job Listing"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"company"},"Company"),o.a.createElement("input",{type:"text",value:this.state.company,id:"company",onChange:this.handleChange}),o.a.createElement("label",{htmlFor:"position"},"Position"),o.a.createElement("input",{type:"text",value:this.state.position,id:"position",onChange:this.handleChange}),o.a.createElement("label",{htmlFor:"positionURL"},"URL"),o.a.createElement("input",{type:"text",value:this.state.positionURL,id:"positionURL",onChange:this.handleChange}),o.a.createElement("label",{htmlFor:"notes"},"Notes"),o.a.createElement("input",{type:"text",value:this.state.notes,id:"notes",onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Edit"}),o.a.createElement("button",{onClick:function(){e.props.handleView("list")}},"Cancel")))}}]),t}(o.a.Component),v=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState(Object(l.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),"list"===e.props.view?(e.props.handleCreate(e.state),e.setState({company:"",position:"",positionURL:"",notes:""})):"form"===e.props.view&&e.props.handleUpdate(e.state)},e.state={company:"",position:"",positionURL:"",notes:""},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"createform"},o.a.createElement("h2",null,"Add a New Job Listing"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("label",{htmlFor:"company"},"Company"),o.a.createElement("input",{type:"text",value:this.state.company,id:"company",onChange:this.handleChange}),o.a.createElement("label",{htmlFor:"position"},"Position"),o.a.createElement("input",{type:"text",value:this.state.position,id:"position",onChange:this.handleChange}),o.a.createElement("label",{htmlFor:"positionURL"},"URL"),o.a.createElement("input",{type:"text",value:this.state.positionURL,id:"positionURL",onChange:this.handleChange}),o.a.createElement("label",{htmlFor:"notes"},"Notes"),o.a.createElement("input",{type:"text",value:this.state.notes,id:"notes",onChange:this.handleChange}),o.a.createElement("input",{className:"addbutton",type:"submit",value:"Add"})))}}]),t}(o.a.Component),y=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState(Object(l.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.handleUpdate(e.state)},e.state={company:"",position:"",positionURL:"",notes:"",status:"applied"},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({company:this.props.formInputs.company,position:this.props.formInputs.position,positionURL:this.props.formInputs.positionURL,notes:this.props.formInputs.notes,id:this.props.formInputs.id})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"editform"},o.a.createElement("h2",null,"Applied Job Listing"),o.a.createElement("h4",null,"Company: ",this.props.formInputs.company),o.a.createElement("h4",null,"Position: ",this.props.formInputs.position),o.a.createElement("h4",null,"Notes:"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("textarea",{rows:"4",cols:"50",value:this.state.notes,id:"notes",onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Edit"}),o.a.createElement("button",{onClick:function(){e.props.handleView("list")}},"Cancel")))}}]),t}(o.a.Component),j=function(e){function t(){var e;return Object(r.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).handleChange=function(t){e.setState(Object(l.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.handleUpdate(e.state)},e.state={company:"",position:"",positionURL:"",notes:"",status:"interview"},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.setState({company:this.props.formInputs.company,position:this.props.formInputs.position,positionURL:this.props.formInputs.positionURL,notes:this.props.formInputs.notes,id:this.props.formInputs.id})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"editform"},o.a.createElement("h2",null,"Interview Job Listing"),o.a.createElement("h4",null,"Company: ",this.props.formInputs.company),o.a.createElement("h4",null,"Position: ",this.props.formInputs.position),o.a.createElement("h4",null,"Notes:"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("textarea",{rows:"4",cols:"50",value:this.state.notes,id:"notes",onChange:this.handleChange}),o.a.createElement("input",{type:"submit",value:"Edit"}),o.a.createElement("button",{onClick:function(){e.props.handleView("list")}},"Cancel")))}}]),t}(o.a.Component),g="http://job-tracker-phpreact.herokuapp.com/api",C=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(p.a)(this,Object(h.a)(t).call(this,e))).fetchJobs=function(){fetch("".concat(g,"/listings")).then((function(e){return e.json()})).then((function(e){n.setState({jobs:e})})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){n.setState(Object(l.a)({},e.target.id,e.target.value))},n.handleCreate=function(e){fetch("".concat(g,"/listings"),{body:JSON.stringify(e),method:"POST",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){n.setState({jobs:e})})).catch((function(e){return console.log(e)}))},n.handleUpdate=function(e){fetch("".concat(g,"/listings/").concat(e.id),{body:JSON.stringify(e),method:"PUT",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then((function(e){n.handleView("list"),n.fetchJobs()})).catch((function(e){return console.log(e)}))},n.handleDelete=function(e){fetch("".concat(g,"/listings/").concat(e),{method:"DELETE",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"}}).then((function(t){n.setState({jobs:n.state.jobs.filter((function(t){return t.id!==e}))})})).catch((function(e){return console.log(e)}))},n.handleView=function(e,t){var a={company:"",position:"",positionURL:"",notes:"",id:null};switch(e){case"list":break;case"form":case"applied":case"interview":a={company:t.company,position:t.position,positionURL:t.positionURL,notes:t.notes,id:t.id}}n.setState({view:e,formInputs:a},(function(){console.log(n.state)}))},n.state={view:"list",jobs:[],formInputs:{company:"",position:"",positionURL:"",notes:""}},n}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.fetchJobs()}},{key:"render",value:function(){return console.log(g),o.a.createElement("div",{className:"container"},o.a.createElement("header",null,o.a.createElement("h1",null,"Job Tracker"),o.a.createElement("h2",null,"Today's Date: ",(new Date).toLocaleDateString("en-US"))),o.a.createElement("div",{className:"addForm"},"list"===this.state.view?o.a.createElement(v,{handleCreate:this.handleCreate,handleView:this.handleView,formInputs:this.state.formInputs,view:this.state.view}):null,"form"===this.state.view?o.a.createElement(E,{handleUpdate:this.handleUpdate,handleView:this.handleView,formInputs:this.state.formInputs,view:this.state.view}):null,"applied"===this.state.view?o.a.createElement(y,{handleUpdate:this.handleUpdate,handleView:this.handleView,formInputs:this.state.formInputs,view:this.state.view}):null,"interview"===this.state.view?o.a.createElement(j,{handleUpdate:this.handleUpdate,handleView:this.handleView,formInputs:this.state.formInputs,view:this.state.view}):null),o.a.createElement("div",{className:"box-container"},o.a.createElement(m,{handleUpdate:this.handleUpdate,handleDelete:this.handleDelete,handleView:this.handleView,jobs:this.state.jobs,formInputs:this.state.formInputs}),o.a.createElement(d,{handleUpdate:this.handleUpdate,handleDelete:this.handleDelete,handleView:this.handleView,jobs:this.state.jobs}),o.a.createElement(f,{handleUpdate:this.handleUpdate,handleDelete:this.handleDelete,handleView:this.handleView,jobs:this.state.jobs}),o.a.createElement(b,{jobs:this.state.jobs})))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.14ae6ef7.chunk.js.map