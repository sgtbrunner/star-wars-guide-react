(this["webpackJsonpstar-wars-guide-react"]=this["webpackJsonpstar-wars-guide-react"]||[]).push([[0],{31:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(8),c=a.n(r),s=a(5),i=a(14),o=a(6),u=a(10),l=a(15),d=a(16),p=a(17),O=a.n(p),b=a(2),j={LOAD_CHARACTERS_START:"LOAD_CHARACTERS_START",LOAD_CHARACTERS_SUCCESS:"LOAD_CHARACTERS_SUCCESS",LOAD_CHARACTERS_FAILURE:"LOAD_CHARACTERS_FAILURE"},h={isLoading:!1,data:[],error:null},f={isOpen:!1,characterId:null},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j.LOAD_CHARACTERS_START:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0});case j.LOAD_CHARACTERS_SUCCESS:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,data:t.payload});case j.LOAD_CHARACTERS_FAILURE:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},L={OPEN_DIALOG:"OPEN_DIALOG",CLOSE_DIALOG:"CLOSE_DIALOG"},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L.OPEN_DIALOG:return Object(b.a)(Object(b.a)({},e),{},{isOpen:!0,characterId:t.payload});case L.CLOSE_DIALOG:return Object(b.a)(Object(b.a)({},e),f);default:return e}},m={LOAD_FILMS_START:"LOAD_FILMS_START",LOAD_FILMS_SUCCESS:"LOAD_FILMS_SUCCESS",LOAD_FILMS_FAILURE:"LOAD_FILMS_FAILURE"},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m.LOAD_FILMS_START:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0});case m.LOAD_FILMS_SUCCESS:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,data:t.payload});case m.LOAD_FILMS_FAILURE:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},v={LOAD_PLANET_START:"LOAD_PLANET_START",LOAD_PLANET_SUCCESS:"LOAD_PLANET_SUCCESS",LOAD_PLANET_FAILURE:"LOAD_PLANET_FAILURE"},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.LOAD_PLANET_START:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0});case v.LOAD_PLANET_SUCCESS:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,data:t.payload});case v.LOAD_PLANET_FAILURE:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},C={LOAD_SPECIES_START:"LOAD_SPECIES_START",LOAD_SPECIES_SUCCESS:"LOAD_SPECIES_SUCCESS",LOAD_SPECIES_FAILURE:"LOAD_SPECIES_FAILURE"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.LOAD_SPECIES_START:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!0});case C.LOAD_SPECIES_SUCCESS:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,data:t.payload});case C.LOAD_SPECIES_FAILURE:return Object(b.a)(Object(b.a)({},e),{},{isLoading:!1,error:t.payload});default:return e}},x={key:"root",storage:O.a,blacklist:["dialog"]},y=Object(o.combineReducers)({characters:A,films:_,planets:E,species:g,dialog:S}),D=Object(u.a)(x,y),R=[d.a],T=Object(o.createStore)(D,Object(l.composeWithDevTools)(o.applyMiddleware.apply(void 0,R))),I=Object(u.b)(T),N=a(3),w=a.n(N),U=a(4),F=a(18),P=function(){var e=Object(U.a)(w.a.mark((function e(t){var a,n,r;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.path,n=t.url,r=t.resource,e.next=3,fetch(n||"".concat("https://swapi.dev/api/").concat(a),{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then(function(){var e=Object(U.a)(w.a.mark((function e(t){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.push.apply(r,Object(F.a)(t.results)),!t.next){e.next=4;break}return e.next=4,P({url:t.next,resource:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 3:return e.abrupt("return",r);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(e){return P({path:e,resource:[]})},H=function(e){return parseInt(null===e||void 0===e?void 0:e.replace(/\D/g,""),10)},M=function(e){return H(e)},G=function(e){return"number"===typeof e||"string"===typeof e&&Number(e)?"".concat("https://starwars-visualguide.com/assets/img/characters/").concat(Number(e)<16?Number(e)+1:Number(e)+2,".jpg"):null},B=function(e){return e.map((function(e,t){return Object(b.a)(Object(b.a)({id:t},e),{},{homeworld:H(e.homeworld),films:e.films.map(M),species:e.species.map(M)})}))},W=function(e){return{type:j.LOAD_CHARACTERS_SUCCESS,payload:e}},Y=function(){var e=Object(U.a)(w.a.mark((function e(t){var a,n;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:j.LOAD_CHARACTERS_START}),e.prev=1,e.next=4,k("people");case 4:a=e.sent,n=B(a),t(W(n)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t((r=e.t0,{type:j.LOAD_CHARACTERS_FAILURE,payload:r}));case 12:case"end":return e.stop()}var r}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),J=function(e){return{type:m.LOAD_FILMS_SUCCESS,payload:e}},K=function(){var e=Object(U.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:m.LOAD_FILMS_START}),e.prev=1,e.next=4,k("films");case 4:a=e.sent,t(J(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t((n=e.t0,{type:m.LOAD_FILMS_FAILURE,payload:n}));case 11:case"end":return e.stop()}var n}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),V=function(e){return{type:v.LOAD_PLANET_SUCCESS,payload:e}},q=function(){var e=Object(U.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:v.LOAD_PLANET_START}),e.prev=1,e.next=4,k("planets");case 4:a=e.sent,t(V(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t((n=e.t0,{type:v.LOAD_PLANET_FAILURE,payload:n}));case 11:case"end":return e.stop()}var n}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),z=function(e){return{type:C.LOAD_SPECIES_SUCCESS,payload:e}},Q=function(){var e=Object(U.a)(w.a.mark((function e(t){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:C.LOAD_SPECIES_START}),e.prev=1,e.next=4,k("species");case 4:a=e.sent,t(z(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t((n=e.t0,{type:C.LOAD_SPECIES_FAILURE,payload:n}));case 11:case"end":return e.stop()}var n}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),X=(a(31),a(0)),Z=function(e,t){return e.map((function(e){var a,n;return(null===(a=t[e-1])||void 0===a?void 0:a.name)||(null===(n=t[e-1])||void 0===n?void 0:n.title)})).join(", ")},$=function(e){var t,a=e.characterId,r=e.characters,c=e.films,s=e.planets,i=e.species,o=e.isDialogDataLoaded,u=e.closeDialog,l=r[a],d=o&&[{name:"Species",value:Z(l.species,i)||"Human"},{name:"Gender",value:(t=l.gender,t[0].toUpperCase()+t.slice(1))},{name:"Birth Year",value:l.birth_year},{name:"Height",value:l.height,unit:"cm"},{name:"Weight",value:l.mass,unit:"Kg"},{name:"Homeworld",value:s[l.homeworld-1].name},{name:"Films",value:Z(l.films,c)}];return Object(n.useEffect)((function(){var e=["click","keydown"],t=function(e){27!==e.keyCode&&"overlay"!==e.target.id||u()};return e.forEach((function(e){return window.addEventListener(e,t)})),function(){return e.forEach((function(e){return window.removeEventListener(e,t)}))}}),[u]),Object(X.jsx)("div",{className:"overlay",id:"overlay",role:"dialog",children:o?Object(X.jsxs)("div",{className:"dialog-content",children:[Object(X.jsx)("span",{className:"close",children:Object(X.jsx)("button",{type:"button",className:"bn pointer bg-transparent",onClick:u,children:"\xd7"})}),Object(X.jsxs)("div",{className:"stats-list",children:[Object(X.jsx)("img",{src:G(l.id),className:"portrait",alt:l.id}),Object(X.jsx)("div",{className:"char-name",children:l.name}),d.map((function(e){return Object(X.jsxs)("div",{className:"stats",role:"listitem",children:[Object(X.jsx)("u",{children:e.name}),": ".concat(e.value," ").concat(e.unit&&"unknown"!==e.value?e.unit:"")]},e.name)}))]})]}):Object(X.jsx)("div",{className:"dialog-load",role:"alert",children:Object(X.jsx)("div",{className:"dialog-loader"})})})},ee=function(e){var t=e.films,a=e.planets,n=e.species;return[t.data.length,a.data.length,n.data.length].every((function(e){return e}))},te=Object(s.b)((function(e){return{characterId:e.dialog.characterId,characters:e.characters.data,films:e.films.data,planets:e.planets.data,species:e.species.data,isDialogDataLoaded:ee(e)}}),(function(e){return{closeDialog:function(){return function(e){document.body.style.overflowY="initial",e({type:L.CLOSE_DIALOG})}(e)}}}))($),ae=function(){return Object(X.jsxs)("footer",{className:"pa2 ph5-m ph6-l tc bg-near-black",children:[Object(X.jsxs)("small",{className:"pa2 f6 db tc lightest-blue",children:[Object(X.jsx)("b",{className:"ttu",children:"GUILHERME BRUNNER"})," 2021"]}),Object(X.jsx)("small",{className:"pa2",children:Object(X.jsx)("a",{href:"https://sgtbrunner.github.io/",rel:"noopener noreferrer",target:"_blank",children:Object(X.jsxs)("div",{className:"f6 dib ph2 link lightest-blue dim",children:["Visit my ",Object(X.jsx)("b",{children:"PORTFOLIO"})]})})})]})},ne=a.p+"static/media/logo.3909b53b.png",re=(a(33),function(){return Object(X.jsx)("a",{href:"#main",children:Object(X.jsx)("div",{className:"header",children:Object(X.jsx)("img",{className:"cover-image",src:ne,alt:"logo"})})})}),ce=a(19),se=(a(34),function(e){var t=e.name,a=e.index,n=e.openDialog;return Object(X.jsxs)("button",{id:a,type:"button",onClick:n,className:"card pointer",children:[Object(X.jsx)("img",{src:G(a),alt:"character-portrait",id:a}),Object(X.jsx)("div",{className:"name",id:a,children:t})]})}),ie=Object(s.b)(null,(function(e){return{openDialog:function(t){return function(e,t){document.body.style.overflowY="hidden",e({type:L.OPEN_DIALOG,payload:t})}(e,Number(t.target.id))}}}))(se),oe=(a(35),function(e){var t=e.characters;return t.length?Object(X.jsx)("div",{className:"cardlist",children:t.map((function(e){return Object(X.jsx)(ie,{name:e.name,index:e.id},e.id)}))}):Object(X.jsx)("div",{className:"pa2 ma3 tc white-backdrop",role:"alert",children:Object(X.jsx)("p",{className:"alert-text animate-flicker",children:"No characters found!"})})}),ue=(a(36),function(e){var t=e.searchChange;return Object(X.jsx)("div",{className:"pa2 br3 searchbox",children:Object(X.jsx)("input",{className:"f4 pa2 w-100 ba bw1 custom-field",type:"search",placeholder:"find your favorite Star Wars character...",onChange:t})})}),le=(a(37),function(e){var t=e.characters,a=Object(n.useState)(""),r=Object(ce.a)(a,2),c=r[0],s=r[1],i=t.filter((function(e){return e.name.toLowerCase().includes(c.toLowerCase())}));return Object(X.jsxs)("div",{id:"main",children:[Object(X.jsx)(ue,{searchChange:function(e){s(e.target.value)}}),Object(X.jsx)(oe,{characters:i})]})});le.defaultProps={characters:[]};var de=le,pe=Object(s.b)((function(e){return{characters:e.characters.data}}))(de),Oe=(a(38),function(){return Object(X.jsx)("div",{className:"loader",children:Object(X.jsx)("div",{className:"loader-content animate-flicker",children:"Please wait..."})})}),be=(a(39),function(e){var t=e.isCharactersLoading,a=e.loadCharacters,r=e.loadFilms,c=e.loadPlanets,s=e.loadSpecies,i=e.showDialog;return Object(n.useEffect)((function(){(function(){var e=Object(U.a)(w.a.mark((function e(){return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a();case 2:r(),c(),s();case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a,r,c,s]),t?Object(X.jsx)(Oe,{}):Object(X.jsxs)(X.Fragment,{children:[Object(X.jsx)(re,{}),Object(X.jsx)(pe,{}),Object(X.jsx)(ae,{}),i&&Object(X.jsx)(te,{})]})}),je=Object(s.b)((function(e){return{isCharactersLoading:!e.characters.data.length,showDialog:e.dialog.isOpen}}),(function(e){return{loadCharacters:function(){return Y(e)},loadFilms:function(){return K(e)},loadPlanets:function(){return q(e)},loadSpecies:function(){return Q(e)}}}))(be);a(40),a(41);c.a.render(Object(X.jsx)(s.a,{store:T,children:Object(X.jsx)(i.a,{persistor:I,children:Object(X.jsx)(je,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.56b5fd80.chunk.js.map