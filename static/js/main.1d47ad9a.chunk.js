(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/banner.55b3ec6a.jpg"},,function(e,t,a){e.exports=a(38)},,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(15),s=a.n(i),c=(a(23),a(2)),l=a.n(c),o=a(17),u=a(5),m=a(6),p=a(7),d=a(9),E=a(8),h=a(10),b=a(3),f=a.n(b),g=(a(25),a(27),function(){var e=Object(u.a)(l.a.mark(function e(t){var a,n,r,i,s,c;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=y.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:return n=e.sent,console.log(t),n.exists||(r=t.displayName,i=t.email,s=t.photoURL,c=new Date,a.set({displayName:r,email:i,photoURL:s,createdAt:c})),e.abrupt("return",a);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}());f.a.initializeApp({apiKey:"AIzaSyBKTcRGWakJmsuIko-DK1o2AjflR65r7ls",authDomain:"shopify-2f877-b4e87.firebaseapp.com",databaseURL:"https://shopify-2f877-b4e87.firebaseio.com",projectId:"shopify-2f877",storageBucket:"shopify-2f877.appspot.com",messagingSenderId:"560253724700",appId:"1:560253724700:web:691952ea613e8dee"});var v=f.a.auth(),y=f.a.firestore(),N=new f.a.auth.GoogleAuthProvider;N.setCustomParameters({prompt:"select_account"});var k=function(){return v.signInWithPopup(N)},w=(f.a,a(16)),x=a.n(w),C=(a(30),function(){return r.a.createElement("div",{className:"banner",style:{backgroundImage:"linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(".concat(x.a,")")}},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"banner-inner"},r.a.createElement("h1",{className:"welcome-title"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error earum doloribus assumenda illo eius nulla mollitia quibusdam atque repellendus quis."),r.a.createElement("button",{className:"button"},"Getting Started"))))}),O=(a(31),function(e){var t=e.title,a=e.years,n=e.description,i=e.styleProp;return r.a.createElement("div",{className:"skill ".concat(i)},r.a.createElement("h3",{className:"box-title"},t),a?r.a.createElement("span",{className:"box-years"},a):"",r.a.createElement("p",{className:"box-description"},n))}),j=(a(32),function(){return r.a.createElement("section",{id:"skills"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Skills"),r.a.createElement("div",{className:"skills-inner"},r.a.createElement(O,{title:"Title1",description:"description"}),r.a.createElement(O,{title:"Title2",description:"description"}),r.a.createElement(O,{title:"Title3",description:"description"}))))}),S=(a(33),function(){return r.a.createElement("section",{id:"experience"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"title"},"Experience"),r.a.createElement("div",{className:"experience-inner"},r.a.createElement(O,{title:"Company",years:"2011-2012",description:"description",styleProp:"box-experience"}),r.a.createElement(O,{title:"Company",years:"2011-2012",description:"description",styleProp:"box-experience"}),r.a.createElement(O,{title:"Company",years:"2011-2012",description:"description",styleProp:"box-experience"}))))}),I=(a(34),function(){return r.a.createElement("footer",{id:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"footer-inner"},r.a.createElement("p",null,"All right reserve 2019-2020"),r.a.createElement("span",null,"Made by: ",r.a.createElement("strong",null,"Wayan Danyael Eco")),r.a.createElement("br",null),r.a.createElement("span",null,"Created in ",r.a.createElement("strong",null,"ReactJS")))))}),L=(a(35),function(){return r.a.createElement("div",{className:"main"},r.a.createElement(C,null),r.a.createElement(j,null),r.a.createElement(S,null),r.a.createElement(I,null))}),A=(a(36),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(E.a)(t).call(this,e))).toggleClass=function(){var e="hidden"===a.state.toggleClass?"show":"hidden",t=""===a.state.bar?"rotate":"";a.setState({toggleClass:e}),a.setState({bar:t})},a.signIn=function(){k(),a.setState({toggleClass:"hidden",bar:""})},a.signOut=function(){v.signOut(),a.setState({toggleClass:"hidden",bar:""})},a.state={toggleClass:"hidden",bar:""},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){this.props.email;return r.a.createElement("nav",{className:"navbar"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},"W",r.a.createElement("span",null,"Labastida")),r.a.createElement("ul",{className:this.state.toggleClass},r.a.createElement("li",null,"HOME"),r.a.createElement("li",null,"SKILLS"),r.a.createElement("li",null,"EXPERIENCE"),this.props.currentUser?r.a.createElement("li",{onClick:this.signOut},"LOG OUT"):r.a.createElement("li",{onClick:this.signIn},"SIGN IN")),r.a.createElement("div",{className:"hamburger",onClick:this.toggleClass},r.a.createElement("span",{className:"bar ".concat(this.state.bar)}),r.a.createElement("span",{className:"bar ".concat(this.state.bar)}),r.a.createElement("span",{className:"bar ".concat(this.state.bar)}))))}}]),t}(r.a.Component)),U=(a(37),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(d.a)(this,Object(E.a)(t).call(this))).authAlwaysLogin=null,e.state={currentUser:null},e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.authAlwaysLogin=v.onAuthStateChanged(function(){var t=Object(u.a)(l.a.mark(function t(a){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!a){t.next=8;break}return t.next=3,g(a);case 3:t.sent.onSnapshot(function(t){e.setState({currentUser:Object(o.a)({id:t.id},t.data())})}),alert("Welcome ".concat(a.displayName)),t.next=9;break;case 8:e.setState({currentUser:a});case 9:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}())}},{key:"componentWillUnmount",value:function(){this.authAlwaysLogin()}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(A,this.state),r.a.createElement(L,null))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(U,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[18,1,2]]]);
//# sourceMappingURL=main.1d47ad9a.chunk.js.map