(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},33:function(e,t,a){e.exports=a.p+"static/media/checked.4190ac11.svg"},34:function(e,t,a){e.exports=a.p+"static/media/loading.f2ee10e1.svg"},35:function(e,t,a){e.exports=a.p+"static/media/atom.04def2f2.svg"},36:function(e,t,a){e.exports=a(64)},53:function(e,t,a){},55:function(e,t,a){},57:function(e,t,a){},58:function(e,t,a){},59:function(e,t,a){},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(29),c=a.n(r),i=a(15),s=a(30),l=a(4),u=a(1),m=a(23),d=a.n(m);a(47),a(51);d.a.initializeApp({apiKey:"AIzaSyDcHSDHEKseXQEWOTmDm58dgyjmkwFFBEc",authDomain:"project-management-9c518.firebaseapp.com",databaseURL:"https://project-management-9c518.firebaseio.com",projectId:"project-management-9c518",storageBucket:"",messagingSenderId:"588543558386",appId:"1:588543558386:web:a6fdac8d8dc2b86c"});var p=d.a,g={logInStatus:null,logInStatusColor:"transparent",signUpStatus:null,signUpStatusColor:"transparent",loggedInEmail:null,loggedInUID:null,userDisplayName:null,authIsReady:!1,logOutStatus:null},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;return"LOG_IN_SUCCESS"===t.type?Object(u.a)({},e,{logInStatus:t.logInStatus,logInStatusColor:"success"}):"LOG_IN_ERROR"===t.type?Object(u.a)({},e,{logInStatus:t.err.message,logInStatusColor:"danger"}):"SET_CURRENT_USER"===t.type?Object(u.a)({},e,{loggedInUID:t.loggedInUID,loggedInEmail:t.loggedInEmail,userDisplayName:t.userDisplayName,authIsReady:t.authIsReady,logoutStatus:t.logOutStatus}):"SIGN_UP_SUCCESS"===t.type?Object(u.a)({},e,{signUpStatus:t.signUpStatus,signUpStatusColor:"success",userDisplayName:p.auth().currentUser.displayName}):"SIGN_UP_ERROR"===t.type?Object(u.a)({},e,{signUpStatus:t.err.message,signUpStatusColor:"danger"}):"LOG_OUT"===t.type?Object(u.a)({},e,t.authInitialState,{logOutStatus:!0,authIsReady:!0}):"INITIALIZE_ADMIN"===t.type?Object(u.a)({},e,{isAdmin:t.isAdmin}):e},E=a(14),v={projects:[],dataLoaded:!1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;if("ADD_PROJECT"===t.type){var a=[t.project].concat(Object(E.a)(e.projects));return Object(u.a)({},e,{projects:a})}return"SET_INIT_STATE"===t.type?Object(u.a)({},e,{projects:Object(E.a)(t.state),dataLoaded:!0}):"ADD_PROJECT_ERROR"===t.type?(console.log(t.err),Object(u.a)({},e)):"APPROVE_PROJECT"===t.type?Object(u.a)({},e,{projects:Object(E.a)(t.projects)}):"CANCEL_APPROVEL"===t.type?Object(u.a)({},e,{projects:Object(E.a)(t.projects)}):e},N={notifications:null},b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;return"SET_NOTIFICATION_INITIAL_STATE"===t.type?Object(u.a)({},e,{notifications:t.notifications}):e},S={increment:0},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S;return"INCREMENT_REDUCER_WORK"===(arguments.length>1?arguments[1]:void 0).type?Object(u.a)({},e,{increment:e.increment+1}):e},I={comments:[]},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return"POST_COMMENT"===t.type?Object(u.a)({},e,{comments:[t.postedComment].concat(Object(E.a)(e.comments))}):"SET_COMMENTS"===t.type?Object(u.a)({},e,{comments:Object(E.a)(t.comments)}):"RESET_COMMENTS"===t.type?Object(u.a)({},e,{comments:[]}):e},O=Object(i.c)({auth:f,project:h,notification:b,comment:y,increment:j}),C=a(5),A=(a(53),Object(l.b)(function(e,t){return{initials:e.auth.userDisplayName}})(function(e){return o.a.createElement("ul",{className:"Navbar-item-list Signed-in-links"},o.a.createElement(C.c,{to:"/createproject",className:"Navbar-item"},"New Project"),o.a.createElement(C.c,{className:"Navbar-item",to:"/welcome",onClick:function(){p.auth().signOut()}},"Logout"),o.a.createElement(C.c,{to:"/",className:"Navbar-item Navbar-avatar"},e.initials))})),R=function(){return o.a.createElement("ul",{className:"Navbar-item-list Signed-out-links"},o.a.createElement(C.c,{to:"/signup",className:"Navbar-item"},"Sign Up"),o.a.createElement(C.c,{to:"/signin",className:"Navbar-item"},"Login"))},D=Object(l.b)(function(e,t){return{authStatus:e.auth.loggedInUID,authIsReady:e.auth.authIsReady,logOutStatus:e.auth.logOutStatus}})(function(e){return o.a.createElement("div",{className:"Navbar-wrapper"},o.a.createElement(C.b,{to:"/",className:"Navbar-logo"},"projectManagement"),e.authIsReady||e.logOutStatus?null===e.authStatus?o.a.createElement(R,null):o.a.createElement(A,null):null)}),U=(a(55),a(11)),T=a.n(U),w=a(33),L=a.n(w),P=(a(57),function(e){var t=e.project;return o.a.createElement(n.Fragment,null,t&&o.a.createElement("div",{className:"Card-wrapper"},o.a.createElement("div",{className:"Card-approved-wrapper ".concat(t.approved)},o.a.createElement("img",{src:L.a,alt:"Approved",className:"Card-approved"})),o.a.createElement("div",{className:"Card-title"},o.a.createElement(C.b,{to:"/project/".concat(t.projectId)},t.title)),o.a.createElement("div",{className:"Card-posted-by"},"".concat(t.authorFirstName," ").concat(t.authorLastName)),o.a.createElement("div",{className:"Card-posted-time"},T()(t.createdAt).calendar())))}),_=function(e){var t=e.projects;return o.a.createElement("div",{className:"Dashboard-project-list"},t&&t.map(function(e){return o.a.createElement(P,{project:e,key:e.projectId})}))},x=Object(l.b)(function(e,t){return{notifications:e.notification.notifications}})(function(e){var t=e.notifications;return o.a.createElement(n.Fragment,null,null!==t?o.a.createElement("div",{className:"Dashboard-notifications"},o.a.createElement("div",{className:"Dashboard-notification-title-flex-container"},o.a.createElement("div",{className:"Dashboard-notification-title"},"Notifications")),t.map(function(e){return o.a.createElement("div",{className:"Dashboard-notification-wrapper",key:e.id},o.a.createElement("div",{className:"Dashboard-notification-item"},o.a.createElement("span",{className:"Dashboard-notification-user"},"".concat(e.user))," ","".concat(e.content)),o.a.createElement("div",{className:"Dashboard-notification-item Dashboard-notification-time"},T()(e.time).fromNow(!0)," ago"))})):o.a.createElement("div",{className:"Dashboard-notifications"},o.a.createElement("div",{className:"loading"},"Loading notifications...")))}),F=a(13),B=a(34),M=a.n(B),k=Object(l.b)(function(e,t){return{projects:e.project.projects,dataLoaded:e.project.dataLoaded,authStatus:e.auth.loggedInUID,authIsReady:e.auth.authIsReady,logOutStatus:e.auth.logOutStatus}})(function(e){var t=e.projects;return e.authIsReady||e.logOutStatus?null===e.authStatus?o.a.createElement(F.a,{to:"/welcome"}):o.a.createElement(n.Fragment,null,e.dataLoaded?0===e.projects.length?o.a.createElement("div",{className:"Dashboard-grid"},o.a.createElement("div",{className:"Dashboard-no-post"},o.a.createElement("p",null,"There are no projects to display right now. Click on `New Project` to add a new one.")),o.a.createElement(x,null)):o.a.createElement("div",{className:"Dashboard-grid"},o.a.createElement(_,{projects:t}),o.a.createElement(x,null)):o.a.createElement("div",{className:"Dashboard-grid"},o.a.createElement("div",{className:"Dashboard-loading-logo-wrapper"},o.a.createElement("img",{className:"Dashboard-loading-logo-image",alt:"Loading data",src:M.a})))):o.a.createElement("div",{className:"loading"},"Loading...")}),Y=a(12),G=function(e){return function(t,a){p.firestore().collection("projects").doc(e).collection("comments").orderBy("commentedAt","desc").get().then(function(e){var a=[];e.forEach(function(e){a.push(Object(u.a)({},e.data(),{id:e.id}))});var n=[];a.forEach(function(e){e.commentedAt=e.commentedAt.toDate(),n.push(e)}),t({type:"RESET_COMMENTS"}),t({type:"SET_COMMENTS",comments:n})}).catch(function(e){console.log(e)})}};a(58);var q=Object(l.b)(null,function(e,t){return{postComment:function(t){return e(function(e){return function(t,a){var n={};p.firestore().collection("users").doc(e.postedByUID).get().then(function(t){return n={comment:e.comment,commentBy:"".concat(t.data().firstName," ").concat(t.data().lastName),projectIdForThisComment:e.projectIdForThisComment,commentedAt:new Date},p.firestore().collection("projects").doc(e.projectIdForThisComment).collection("comments").add(Object(u.a)({},n))}).then(function(){t({type:"POST_COMMENT",postedComment:n}),t({type:"INCREMENT_REDUCER_WORK"})}).catch(function(e){console.log(e)})}}(t))},setComments:function(t){return e(G(t))}}})(function(e){var t=Object(n.useState)({comment:"",postedByUID:"",projectIdForThisComment:""}),a=Object(Y.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)(function(){c(Object(u.a)({},r,{postedByUID:e.postedByUID,projectIdForThisComment:e.projectIdForThisComment}))},[e,r]),o.a.createElement("div",{className:"Comment"},o.a.createElement("div",{className:"textarea-style-wrapper"},o.a.createElement("textarea",{onChange:function(e){document.querySelector(".textarea-placeholder").classList.add("opacityZero"),1===e.target.value.length&&(e.target.value=e.target.value.toUpperCase()),c(Object(u.a)({},r,{comment:e.target.value}))},onBlur:function(e){0===e.target.value.length&&(document.querySelector(".textarea-placeholder").classList.remove("opacityZero"),document.querySelector(".Comment-bottom-line").classList.remove("animateComment"),document.querySelector(".Comment-bottom-line").classList.add("removeAnimateComment"))},onFocus:function(e){document.querySelector(".Comment-bottom-line").classList.add("animateComment"),document.querySelector(".Comment-bottom-line").classList.remove("removeAnimateComment")},value:r.comment}),o.a.createElement("div",{className:"textarea-placeholder"},"Add a public comment..."),o.a.createElement("div",{className:"Comment-bottom-line"})),o.a.createElement("div",{className:"Comment-post-button-wrapper"},o.a.createElement("button",{className:"Comment-post-button",onClick:function(t){t.preventDefault(),c(r),e.postComment(r),e.setComments(e.projectIdForThisComment),c(Object(u.a)({},r,{comment:""}))}},"Comment")),o.a.createElement("div",null,"Refresh page to see the comment being added..."))}),J=(a(59),a(60),Object(l.b)(function(e){return{comments:e.comment.comments}})(function(e){var t=e.comments;return o.a.createElement("div",{className:"CommentList"},o.a.createElement("div",{className:"CommentList-title"},"Comments"),t&&t.map(function(e){return e.id&&o.a.createElement(n.Fragment,{key:e.id},o.a.createElement("div",{className:"Comment-wrapper"},o.a.createElement("div",{className:"Comment-comment"},e.comment),o.a.createElement("div",{className:"Comment-by"},"commented by ",o.a.createElement("span",{className:"Comment-user"},e.commentBy)),o.a.createElement("div",{className:"Comment-at"},T()(e.commentedAt).calendar())))}))})),W=Object(l.b)(function(e,t){return{project:e.project.projects.find(function(e){return e.projectId===t.match.params.projectid}),authStatus:e.auth.loggedInUID,authIsReady:e.auth.authIsReady,logOutStatus:e.auth.logOutStatus,isAdmin:e.auth.isAdmin,increment:e.increment.increment}},function(e,t){return{setComments:function(t){return e(G(t))},approveProject:function(t){return e(function(e){return function(t,a){p.firestore().collection("projects").doc(e).update({approved:"approved"}).then(function(){var n=a().project.projects.map(function(t){return t.projectId===e&&(t.approved="approved"),t});t({type:"APPROVE_PROJECT",projects:n})}).catch(function(e){console.log(e.message)})}}(t))},cancelApproval:function(t){return e(function(e){return function(t,a){p.firestore().collection("projects").doc(e).update({approved:"Not-approved"}).then(function(n){var o=a().project.projects.map(function(t){return t.projectId===e&&(t.approved="Not-approved"),t});t({type:"CANCEL_APPROVAL",projects:o})}).catch(function(e){console.log(e.message)})}}(t))}}})(function(e){var t=e.increment,a=e.isAdmin,r=e.project,c=e.authIsReady,i=e.logOutStatus,s=e.authStatus,l=e.approveProject,u=e.cancelApproval,m=e.setComments;Object(n.useEffect)(function(e){r&&m(r.projectId)},[r,m,t]);return c||i?null===s?o.a.createElement(F.a,{to:"/welcome"}):r?o.a.createElement("div",{className:"ProjectDetails-flex-container"},o.a.createElement("div",{className:"ProjectDetails-wrapper"},o.a.createElement("div",{className:"ProjectDetails-title"},r.title),o.a.createElement("div",{className:"ProjectDetails-body"},r.content),o.a.createElement("div",{className:"ProjectDetails-posted-by"},"".concat(r.authorFirstName," ").concat(r.authorLastName)),o.a.createElement("div",{className:"ProjectDetails-posted-time"},T()(r.createdAt).format("dddd, MMMM Do YYYY, h:mm a"))),o.a.createElement("div",{className:"approveMessage hide"}),a&&o.a.createElement("div",{className:"ProjectDetails-approve-wrapper"},o.a.createElement("div",{className:"ProjectDetails-approve",onClick:function(e){var t=document.querySelector(".approveMessage"),a=document.querySelector(".ProjectDetails-approve");"approved"===r.approved?(u(r.projectId),a.textContent="Grant Approval",t.textContent="Approval Cancelled Successfully",t.classList.remove("grantApproval"),t.classList.add("cancelApproval")):(l(r.projectId),a.textContent="Cancel Approval",t.textContent="Approval Granted Successfully",t.classList.remove("cancelApproval"),t.classList.add("grantApproval")),t.classList.remove("hide"),t.classList.add("show")}},"approved"===r.approved?"Cancel Approval":"Grant Approval")),o.a.createElement(q,{postedByUID:s,projectIdForThisComment:r.projectId}),o.a.createElement(J,{projectId:r.projectId})):o.a.createElement("div",{className:"loadingProject"},"Loading Project..."):o.a.createElement("div",{className:"loading"},"Loading...")});a(61);var Z=function(){return o.a.createElement("div",{className:"ResourceNotFound-wrapper"},o.a.createElement("div",{className:"ResourceNotFound-title"},"oops ! error 404"),o.a.createElement("div",{className:"ResourceNotFound-body"},"The resource you are trying to access does not exist."),o.a.createElement("div",{className:"ResourceNotFound-ps"},"Redirect back to the main page to continue your journey."))},K=(a(21),Object(l.b)(function(e,t){return{logInStatus:e.auth.logInStatus,logInStatusColor:e.auth.logInStatusColor,authStatus:e.auth.loggedInUID,authIsReady:e.auth.authIsReady,logOutStatus:e.auth.logOutStatus}},function(e,t){return{logIn:function(t){return e(function(e){return function(t,a){p.auth().signInWithEmailAndPassword(e.email,e.password).then(function(){t({type:"LOG_IN_SUCCESS",logInStatus:"Successfully logged in."})}).catch(function(e){t({type:"LOG_IN_ERROR",err:e})})}}(t))}}})(function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(Y.a)(t,2),r=a[0],c=a[1];if(!e.authIsReady&&!e.logOutStatus)return o.a.createElement("div",{className:"loading"},"Loading...");if(null!==e.authStatus)return o.a.createElement(F.a,{to:"/"});var i=function(e){var t=e.currentTarget;"SignIn-email"===t.id?c(Object(u.a)({},r,{email:t.value})):"SignIn-password"===t.id&&c(Object(u.a)({},r,{password:t.value}))},s=function(e){var t=e.currentTarget;t.style.borderBottom="3px solid #79AAAE",t.previousElementSibling.style.transform="translateY(8px) scale(0.7)"},l=function(e){var t=e.target;"SignIn-email"===t.id&&""===r.email&&(t.previousElementSibling.style.transform="translateY(50px) scale(1)"),"SignIn-password"===t.id&&""===r.password&&(t.previousElementSibling.style.transform="translateY(50px) scale(1)"),t.style.borderBottom="3px solid #A9A9A9"};return o.a.createElement("form",{autoComplete:"off",className:"form",onSubmit:function(t){t.preventDefault(),e.logIn(r),c(Object(u.a)({},r,{password:"",email:""}))}},o.a.createElement("h2",null,"Login"),o.a.createElement("label",{htmlFor:"SignIn-email"},"Email"),o.a.createElement("input",{type:"email",id:"SignIn-email",value:r.email,onBlur:function(e){return l(e)},onFocus:function(e){return s(e)},onChange:function(e){return i(e)}}),o.a.createElement("label",{htmlFor:"SignIn-password"},"Password"),o.a.createElement("input",{type:"password",id:"SignIn-password",value:r.password,onBlur:function(e){return l(e)},onFocus:function(e){return s(e)},onChange:i}),o.a.createElement("input",{type:"submit",value:"Login",id:"submitBtn"}),o.a.createElement("div",{className:"form-status ".concat(e.logInStatusColor)},e.logInStatus))})),V=Object(l.b)(function(e,t){return{signUpStatus:e.auth.signUpStatus,signUpStatusColor:e.auth.signUpStatusColor,authStatus:e.auth.loggedInUID,authIsReady:e.auth.authIsReady,logOutStatus:e.auth.logOutStatus}},function(e,t){return{signUp:function(t){return e(function(e){return function(t,a){var n=p.auth(),o=p.firestore();n.createUserWithEmailAndPassword(e.email,e.password).then(function(){var t=n.currentUser;o.collection("users").doc(t.uid).set({email:e.email,firstName:e.firstName,lastName:e.lastName,UID:t.uid})}).then(function(){var t=e.firstName[0]+e.lastName[0];return n.currentUser.updateProfile({displayName:t})}).then(function(){t({type:"SIGN_UP_SUCCESS",signUpStatus:"Successfully signed up and automatically logged in."})}).catch(function(e){t({type:"SIGN_UP_ERROR",err:e})})}}(t))}}})(function(e){var t=Object(n.useState)({email:"",password:"",firstName:"",lastName:""}),a=Object(Y.a)(t,2),r=a[0],c=a[1];if(!e.authIsReady&&!e.logOutStatus)return o.a.createElement("div",{className:"loading"},"Loading...");if(null!==e.authStatus)return o.a.createElement(F.a,{to:"/"});var i=function(e){var t=e.currentTarget;"SignUp-email"===t.id?c(Object(u.a)({},r,{email:t.value})):"SignUp-password"===t.id?c(Object(u.a)({},r,{password:t.value})):"SignUp-firstName"===t.id?c(Object(u.a)({},r,{firstName:t.value})):"SignUp-lastName"===t.id&&c(Object(u.a)({},r,{lastName:t.value}))},s=function(e){var t=e.currentTarget;t.style.borderBottom="3px solid #79AAAE",t.previousElementSibling.style.transform="translateY(8px) scale(0.7)"},l=function(e){var t=e.target;"SignUp-email"===t.id&&""===r.email&&(t.previousElementSibling.style.transform="translateY(50px) scale(1)"),"SignUp-password"===t.id&&""===r.password&&(t.previousElementSibling.style.transform="translateY(50px) scale(1)"),"SignUp-firstName"===t.id&&""===r.firstName&&(t.previousElementSibling.style.transform="translateY(50px) scale(1)"),"SignUp-lastName"===t.id&&""===r.lastName&&(t.previousElementSibling.style.transform="translateY(50px) scale(1)"),t.style.borderBottom="3px solid #A9A9A9"};return o.a.createElement("form",{autoComplete:"off",className:"form",onSubmit:function(t){t.preventDefault(),e.signUp(r),c(Object(u.a)({},r,{password:"",email:"",firstName:"",lastName:""}))}},o.a.createElement("h2",null,"Sign Up"),o.a.createElement("label",{htmlFor:"SignUp-email"},"Email"),o.a.createElement("input",{type:"email",id:"SignUp-email",value:r.email,onBlur:function(e){return l(e)},onFocus:function(e){return s(e)},onChange:function(e){return i(e)}}),o.a.createElement("label",{htmlFor:"SignUp-password"},"Password"),o.a.createElement("input",{type:"password",id:"SignUp-password",value:r.password,onBlur:function(e){return l(e)},onFocus:function(e){return s(e)},onChange:i}),o.a.createElement("label",{htmlFor:"SignUp-firstName"},"First Name"),o.a.createElement("input",{type:"text",id:"SignUp-firstName",value:r.firstName,onBlur:function(e){return l(e)},onFocus:function(e){return s(e)},onChange:function(e){return i(e)}}),o.a.createElement("label",{htmlFor:"SignUp-lastName"},"Last Name"),o.a.createElement("input",{type:"text",id:"SignUp-lastName",value:r.lastName,onBlur:function(e){return l(e)},onFocus:function(e){return s(e)},onChange:function(e){return i(e)}}),o.a.createElement("input",{type:"submit",value:"Sign up",id:"submitBtn"}),o.a.createElement("div",{className:"form-status ".concat(e.signUpStatusColor)},e.signUpStatus))}),z=(a(62),a(35)),H=a.n(z);var Q=function(){return o.a.createElement("div",{className:"LandingPage-wrapper"},o.a.createElement("div",{className:"LandingPage-atom-wrapper"},o.a.createElement("img",{className:"LandingPage-atom",src:H.a,alt:"Atom"})),o.a.createElement("div",{className:"LandingPage-title LandingPage-item"},"Welcome to",o.a.createElement("span",{className:"LandingPage-projectManagement"}," projectManagement")),o.a.createElement("div",{className:"LandingPage-message LandingPage-item"},"A platform where team members can share their project timeline as work progresses."),o.a.createElement("div",{className:"LandingPage-asking LandingPage-item"},"New to projectManagement: Quickly ",o.a.createElement(C.b,{to:"/signup"},"Sign up")," to join the forum !"),o.a.createElement("div",{className:"LandingPage-asking LandingPage-item"},"Already an existing user: ",o.a.createElement(C.b,{to:"/signin"},"Login")," to access the dashboard."))},X=Object(l.b)(function(e,t){return{authStatus:e.auth.loggedInUID,authIsReady:e.auth.authIsReady}},function(e,t){return{createProject:function(t){return e(function(e){return function(t,a){var n=p.firestore(),o=a().auth.loggedInUID;n.collection("users").doc(o).get().then(function(t){return e.authorFirstName=t.data().firstName,e.authorLastName=t.data().lastName,e.authorId=t.data().UID,e.createdAt=new Date,e.approved="Not-approved",n.collection("projects").add(e)}).then(function(t){var a=t.id;return e.projectId=a,n.collection("projects").doc(a).set({projectId:a},{merge:!0})}).then(function(){t({type:"ADD_PROJECT",project:e})}).catch(function(e){t({type:"ADD_PROJECT_ERROR",err:e})})}}(t))}}})(function(e){var t=Object(n.useState)({title:"",content:""}),a=Object(Y.a)(t,2),r=a[0],c=a[1];if(!e.authIsReady&&!e.logOutStatus)return o.a.createElement("div",{className:"loading"},"Loading...");if(null===e.authStatus)return o.a.createElement(F.a,{to:"/welcome"});var i=function(e){var t=e.currentTarget;"CreateProject-title"===t.id?c(Object(u.a)({},r,{title:t.value})):"CreateProject-content"===t.id&&c(Object(u.a)({},r,{content:t.value}))};return o.a.createElement("form",{autoComplete:"off",className:"form",onSubmit:function(t){t.preventDefault(),e.createProject(r),c(Object(u.a)({},r,{title:"",content:""}))}},o.a.createElement("h2",null,"Create New Project"),o.a.createElement("label",{htmlFor:"CreateProject-title"},"Title"),o.a.createElement("input",{type:"text",id:"CreateProject-title",value:r.title,onBlur:function(e){return function(e){var t=e.target;"CreateProject-title"===t.id&&""===r.title&&(t.previousElementSibling.style.transform="translateY(50px) scale(1)"),"CreateProject-content"===t.id&&""===r.content&&(t.previousElementSibling.style.transform="translateY(50px) scale(1)"),t.style.borderBottom="3px solid #A9A9A9"}(e)},onFocus:function(e){return function(e){var t=e.currentTarget;t.style.borderBottom="3px solid #79AAAE",t.previousElementSibling.style.transform="translateY(8px) scale(0.7)"}(e)},onChange:function(e){return i(e)}}),o.a.createElement("textarea",{value:r.content,onChange:i,placeholder:"Enter the content here...",id:"CreateProject-content"}),o.a.createElement("input",{type:"submit",value:"Create Project",id:"submitBtn"}))});var $=function(){return o.a.createElement(C.a,null,o.a.createElement("div",{className:"App"},o.a.createElement(D,null),o.a.createElement(F.d,null,o.a.createElement(F.b,{exact:!0,path:"/",component:k}),o.a.createElement(F.b,{exact:!0,path:"/project/:projectid",component:W}),o.a.createElement(F.b,{exact:!0,path:"/signin",component:K}),o.a.createElement(F.b,{exact:!0,path:"/signup",component:V}),o.a.createElement(F.b,{exact:!0,path:"/createproject",component:X}),o.a.createElement(F.b,{exact:!0,path:"/welcome",component:Q}),o.a.createElement(F.b,{path:"*",component:Z}))))};a(63);a.d(t,"store",function(){return ee});var ee=Object(i.d)(O,Object(i.a)(s.a));p.auth().onAuthStateChanged(function(e){e?(ee.dispatch(function(e){return function(t,a){t({type:"SET_CURRENT_USER",loggedInEmail:e.email,loggedInUID:e.uid,userDisplayName:e.displayName,authIsReady:!0,logOutStatus:null})}}(e)),ee.dispatch(function(e){return function(t,a){e.getIdTokenResult().then(function(e){e.claims.admin?t({type:"INITIALIZE_ADMIN",isAdmin:!0}):t({type:"INITIALIZE_ADMIN",isAdmin:!1})})}}(e)),ee.dispatch(function(e,t){p.firestore().collection("projects").orderBy("createdAt","desc").get().then(function(t){var a=[];t.forEach(function(e){a.push(Object(u.a)({},e.data()))});var n=a.map(function(e){return e.createdAt=e.createdAt.toDate(),e});e({type:"SET_INIT_STATE",state:n})}).catch(function(t){e({type:"SET_INIT_STATE_ERROR",err:t})})}),p.firestore().collection("notifications").onSnapshot(function(e){ee.dispatch(function(e,t){var a=[];p.firestore().collection("notifications").orderBy("time","desc").limit(4).get().then(function(t){t.forEach(function(e){var t=e.data();t.id=e.id,a.push(t)});var n=a.map(function(e){return e.time=e.time.toDate(),e});e({type:"SET_NOTIFICATION_INITIAL_STATE",notifications:n})})})})):ee.dispatch(function(e,t){e({type:"LOG_OUT",authInitialState:g})})}),ee.subscribe(function(){console.log(ee.getState())}),c.a.render(o.a.createElement(l.a,{store:ee},o.a.createElement($,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.aae993e9.chunk.js.map