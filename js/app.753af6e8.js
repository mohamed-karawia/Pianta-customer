(function(t){function e(e){for(var n,o,s=e[0],c=e[1],l=e[2],d=0,m=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(m.length)m.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var c=a[s];0!==r[c]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/Pianta-customer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"085a":function(t,e,a){t.exports=a.p+"img/grapefruits.cdfd50d3.png"},"087c":function(t,e,a){},"0bc4":function(t,e,a){"use strict";a("fc6b")},"0c0f":function(t,e,a){t.exports=a.p+"img/blueberries.184c8b4f.png"},"0c39":function(t,e,a){"use strict";a("087c")},"0f38":function(t,e,a){t.exports=a.p+"img/watermelons.0276da0b.png"},"0f46":function(t,e,a){},1531:function(t,e,a){"use strict";a("299f")},1822:function(t,e,a){},"1bc0":function(t,e,a){t.exports=a.p+"img/acerolas.ac36805c.png"},2249:function(t,e,a){},"299f":function(t,e,a){},"2c15":function(t,e,a){t.exports=a.p+"img/visa.143dbbcf.jpg"},"2d41":function(t,e,a){"use strict";a("c013")},"35ab":function(t,e,a){},"3c36":function(t,e,a){t.exports=a.p+"img/strawberries.f5cdbe72.png"},"3c5b":function(t,e,a){t.exports=a.p+"img/pineapple.1df3f467.png"},"405d":function(t,e,a){},"40b0":function(t,e,a){"use strict";a("35ab")},4430:function(t,e,a){t.exports=a.p+"img/orange.fa4a7e78.png"},4525:function(t,e,a){"use strict";a("cb60")},4795:function(t,e,a){},"4e51":function(t,e,a){t.exports=a.p+"img/peaches.e7ce9b39.png"},"4e8c":function(t,e,a){"use strict";a("4795")},5416:function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},["Login"!=this.$route.name?a("Navbar"):t._e(),a("router-view")],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",[n("div",{staticClass:"upper--nav"},[n("div",{staticClass:"nav--logo",on:{click:function(e){return t.$router.push("/?page=1")}}},[n("h1",[t._v("Pianta")])]),n("ul",{staticClass:"nav--list"},[n("li",{staticClass:"nav--list__item"},[n("router-link",{attrs:{to:"/?page=1",exact:""}},[t._v("Fruits")])],1),n("li",{staticClass:"nav--list__item"},[n("router-link",{attrs:{to:"/orders?type=started"}},[t._v("Orders")])],1),n("li",{staticClass:"nav--list__item"},[n("router-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),n("li",{staticClass:"nav--list__item",on:{click:t.logout}},[n("button",{attrs:{to:"/login"}},[t._v("Logout")])])]),n("svg",{staticClass:"nav--icon",on:{click:function(e){t.showMobileMenu=!t.showMobileMenu}}},[n("use",{attrs:{"xlink:href":a("8a78")+"#icon-menu"}})]),n("div",{class:[t.showMobileMenu?"mobile--menu open":"mobile--menu"]},[n("ul",{staticClass:"mobile--nav--list"},[n("li",{staticClass:"mobile--nav--list__item",on:{click:function(e){t.showMobileMenu=!1}}},[n("router-link",{attrs:{to:"/"}},[t._v("Fruits")])],1),n("li",{staticClass:"mobile--nav--list__item",on:{click:function(e){t.showMobileMenu=!1}}},[n("router-link",{attrs:{to:"/orders?type=started"}},[t._v("Orders")])],1),n("li",{staticClass:"mobile--nav--list__item",on:{click:function(e){t.showMobileMenu=!1}}},[n("router-link",{attrs:{to:"/cart"}},[t._v("Cart")])],1),n("li",{staticClass:"mobile--nav--list__item",on:{click:t.logout}},[n("button",[t._v("LOGOUT")])])])])])])},s=[],c={data:function(){return{showMobileMenu:!1,showSearch:!1}},methods:{logout:function(){this.$store.dispatch("logout"),this.showMobileMenu=!1}}},l=c,u=(a("f7c9"),a("2877")),d=Object(u["a"])(l,o,s,!1,null,"012ef740",null),m=d.exports,p={components:{Navbar:m},created:function(){this.$store.dispatch("tryAutoLogin")}},f=p,g=(a("5c0b"),Object(u["a"])(f,r,i,!1,null,null,null)),v=g.exports,h=(a("b0c0"),a("8c4f")),b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"container"},[a("fruits-categories",{on:{changeType:t.changeType}}),!t.loading&&t.products.length>0?a("fruits-list",{attrs:{fruits:t.products}}):t._e(),t.loading||0!=t.products.length?t._e():a("h2",[t._v("No Products Available")]),t.loading?a("Spinner"):t._e(),a("Wallet",{attrs:{totalCart:t.totalCart,price:t.totalPrice}})],1),t.pages>1?a("div",{staticClass:"pagination"},[a("paginate",{attrs:{"page-count":t.pages,"page-range":3,"margin-pages":2,"click-handler":t.changePage,"prev-text":"Prev","next-text":"Next","container-class":"container-class","page-class":"page-class","page-link-class":"page-link-class","active-class":"active-class"}})],1):t._e()])},_=[],y=a("5530"),C=(a("a9e3"),a("ac1f"),a("5319"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"categories"},[n("div",{staticClass:"categories--header"},[n("svg",{staticClass:"categories--header__icon"},[n("use",{attrs:{"xlink:href":a("8a78")+"#icon-menu"}})]),n("h2",{staticClass:"categories--header__heading"},[t._v("Fruits List")])]),n("div",{staticClass:"categories--list"},[n("ul",{staticClass:"categories--list__ul"},t._l(t.fruits,(function(e,a){return n("li",{key:a,staticClass:"categories--list__item",on:{click:function(a){return t.changeType(e.name)}}},[n("div",{staticClass:"img",style:"background-image: url("+e.img+");"}),n("h3",[t._v(t._s(e.name))])])})),0)])])}),w=[],$=a("fb82"),x=a.n($),P=a("d183"),L=a.n(P),O=a("c32f"),k=a.n(O),S=a("4430"),E=a.n(S),N=a("1bc0"),I=a.n(N),M=a("62b1"),j=a.n(M),T=a("e20a"),q=a.n(T),A=a("628c"),F=a.n(A),D=a("0c0f"),U=a.n(D),R=a("7d6d"),Q=a.n(R),W=a("c87a"),Y=a.n(W),J=a("f2c7"),B=a.n(J),G=a("085a"),H=a.n(G),V=a("6ccf"),z=a.n(V),K=a("72a1"),X=a.n(K),Z=a("7e51"),tt=a.n(Z),et=a("9b47"),at=a.n(et),nt=a("4e51"),rt=a.n(nt),it=a("711a"),ot=a.n(it),st=a("3c5b"),ct=a.n(st),lt=a("94d5"),ut=a.n(lt),dt=a("efa0"),mt=a.n(dt),pt=a("3c36"),ft=a.n(pt),gt=a("0f38"),vt=a.n(gt),ht={data:function(){return{fruits:[{name:"all",img:x.a},{name:"apples",img:k.a},{name:"bananas",img:L.a},{name:"oranges",img:E.a},{name:"acerolas",img:I.a},{name:"apricots",img:j.a},{name:"avocados",img:q.a},{name:"blackberries",img:F.a},{name:"blueberries",img:U.a},{name:"cantaloupes",img:Q.a},{name:"coconuts",img:Y.a},{name:"figs",img:B.a},{name:"grapefruits",img:H.a},{name:"grapes",img:z.a},{name:"guava",img:X.a},{name:"kiwifruit",img:tt.a},{name:"lemons",img:at.a},{name:"peaches",img:rt.a},{name:"pears",img:ot.a},{name:"pineapples",img:ct.a},{name:"pomegranates",img:ut.a},{name:"raspberries",img:mt.a},{name:"strawberries",img:ft.a},{name:"watermelons",img:vt.a}]}},methods:{changeType:function(t){this.$emit("changeType",t)}}},bt=ht,_t=(a("c715"),Object(u["a"])(bt,C,w,!1,null,"4ba1e320",null)),yt=_t.exports,Ct=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wallet"},[n("img",{staticClass:"mobileImage",attrs:{src:a("bc38"),alt:"wallet"}}),n("div",{staticClass:"content"},[n("h3",[t._v("Hello, "+t._s(this.$store.state.clientName))]),n("img",{staticClass:"webImage",attrs:{src:a("bc38"),alt:"wallet"}}),n("h2",[t._v("You have "+t._s(t.totalCart)+" items in your cart")]),n("h2",[t._v("Price: "+t._s(t.price)+" L.E")])])])},wt=[],$t={data:function(){return{totalItems:0,totalPrice:0}},props:{totalCart:Number,price:Number}},xt=$t,Pt=(a("0bc4"),Object(u["a"])(xt,Ct,wt,!1,null,"2b170dc4",null)),Lt=Pt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fruits-container"},t._l(t.fruits,(function(t){return a("single-fruit",{key:t._id,attrs:{fruit:t}})})),1)},kt=[],St=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"fruit"},[a("img",{attrs:{src:""+t.fruit.imageUrl}}),a("div",{staticClass:"fruit--details"},[a("h2",[t._v(t._s(t.fruit.name))]),"none"!==t.fruit.fresh?a("h3",[t._v(t._s(t.fruit.fresh)+" fresh")]):t._e(),a("h4",[t._v(t._s(t.fruit.price)+" L.E")]),a("div",{staticClass:"fruit--buttons"},[a("Quantity",{attrs:{quantity:t.quantity},on:{increaseQuantity:function(e){t.quantity++},decreaseQuantity:function(e){t.quantity--}}}),a("button",{on:{click:t.addToCart}},[t._v("Add To Cart")])],1)])])},Et=[],Nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"quantity"},[a("button",{staticClass:"quantity__button",on:{click:function(e){return t.$emit("decreaseQuantity")}}},[t._v("−")]),a("input",{attrs:{type:"number"},domProps:{value:t.quantity}}),a("button",{staticClass:"quantity__button",on:{click:function(e){return t.$emit("increaseQuantity")}}},[t._v("+")])])},It=[],Mt={props:{quantity:Number}},jt=Mt,Tt=(a("fab0"),Object(u["a"])(jt,Nt,It,!1,null,"4b636e84",null)),qt=Tt.exports,At={data:function(){return{quantity:0}},props:{fruit:Object},components:{Quantity:qt},methods:{addToCart:function(){var t={productId:this.fruit._id,amount:this.quantity};0===this.quantity?window.alert("Please Enter Valid Quantity"):(this.$store.dispatch("addToCart",t),this.quantity=0)}},computed:{buttonLoading:function(){return this.$store.getters.buttonLoading}}},Ft=At,Dt=(a("4e8c"),Object(u["a"])(Ft,St,Et,!1,null,"9e99c6fe",null)),Ut=Dt.exports,Rt={props:{fruits:Array},components:{singleFruit:Ut},computed:{}},Qt=Rt,Wt=(a("5a0f"),Object(u["a"])(Qt,Ot,kt,!1,null,"4edce0b9",null)),Yt=Wt.exports,Jt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader",style:"width: "+t.width+";height: "+t.height+";"+["absolute"===t.position?"position: absolute; left: 45%":"position: static"]+";"+["0"===t.margin?"margin: 0;":"margin: 0 auto;"]},[t._v("Loading...")])},Bt=[],Gt={props:{width:String,height:String,position:String,margin:String}},Ht=Gt,Vt=(a("4525"),Object(u["a"])(Ht,Jt,Bt,!1,null,"1700a463",null)),zt=Vt.exports,Kt={data:function(){return{}},components:{fruitsCategories:yt,Wallet:Lt,fruitsList:Yt,Spinner:zt},created:function(){this.$store.dispatch("getProducts",this.$route.query),this.$store.dispatch("getCart")},computed:{products:function(){return this.$store.getters.products},pages:function(){return Math.ceil(this.$store.getters.total/10)},loading:function(){return this.$store.getters.productsLoading},totalCart:function(){return Number(this.$store.getters.cartList.length)},totalPrice:function(){return Number(this.$store.getters.finalPrice)}},methods:{changePage:function(t){this.$router.replace({path:"/",query:Object(y["a"])(Object(y["a"])({},this.$route.query),{},{page:t})}),this.$store.dispatch("getProducts",this.$route.query)},changeType:function(t){window.scroll(0,0),this.$router.replace({path:"/",query:Object(y["a"])(Object(y["a"])({},this.$route.query),{},{type:t})}),this.$store.dispatch("getProducts",this.$route.query)}}},Xt=Kt,Zt=(a("b5d8"),Object(u["a"])(Xt,b,_,!1,null,"18d3335a",null)),te=Zt.exports,ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"content"},[t._m(0),a("div",{staticClass:"form"},["login"===t.form?a("Login",{on:{switchForm:function(e){return t.switchForm("signup")}}}):a("Signup",{on:{switchForm:function(e){return t.switchForm("login")}}})],1)])])},ae=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details"},[a("h1",[t._v("Fruits")]),a("h2",[t._v("your health is the most thing we care about")])])}],ne=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"login",on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[a("h1",[t._v("Login")]),a("div",{staticClass:"input--box"},[a("label",[t._v("EMAIL")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"example@example.com"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"input--box"},[a("label",[t._v("PASSWORD")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),a("div",{staticClass:"login--buttons"},[this.$store.getters.loading?a("Spinner",{attrs:{width:"5em",height:"5em"}}):a("button",{staticClass:"loginButton",attrs:{type:"submit",disabled:""===this.email||""===this.password}},[t._v(" LOGIN ")]),""!==this.$store.getters.error?a("p",{staticStyle:{color:"red","margin-bottom":"1rem"}},[t._v(" "+t._s(this.$store.getters.error)+" ")]):t._e(),a("p",[t._v(" Don't have account ? "),a("span",{on:{click:function(e){return t.$emit("switchForm")}}},[t._v("Signup")])])],1)])},re=[],ie={data:function(){return{email:"",password:""}},components:{Spinner:zt},methods:{login:function(){var t={emailOrPhone:this.email,password:this.password};this.$store.dispatch("loginLocal",t)}}},oe=ie,se=(a("40b0"),Object(u["a"])(oe,ne,re,!1,null,"4d64bca5",null)),ce=se.exports,le=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("form",{staticClass:"register",on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("h1",[t._v("Signup")]),a("div",{staticClass:"input--box",class:{invalid:t.$v.name.$error}},[a("label",[t._v("Name")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],class:{invalid:t.$v.name.$error},attrs:{type:"text",id:"name"},domProps:{value:t.name},on:{blur:function(e){return t.$v.name.$touch()},input:function(e){e.target.composing||(t.name=e.target.value)}}}),t.$v.name.minLen?t._e():a("p",{staticClass:"error--message"},[t._v(" Name should be at least 4 charchters ")])]),a("div",{staticClass:"input--box"},[a("label",{class:{invalid:t.$v.email.$error}},[t._v("EMAIL")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],class:{invalid:t.$v.email.$error},attrs:{type:"email",id:"email"},domProps:{value:t.email},on:{blur:function(e){return t.$v.email.$touch()},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t.$v.email.email?t._e():a("p",{staticClass:"error--message"},[t._v(" Please provide a valid email address. ")])]),a("div",{staticClass:"input--box"},[a("label",[t._v("PASSWORD")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password"},domProps:{value:t.password},on:{blur:function(e){return t.$v.password.$touch()},input:function(e){e.target.composing||(t.password=e.target.value)}}}),t.$v.password.minLen?t._e():a("p",{staticClass:"error--message"},[t._v(" Password should be at least 6 charchters ")])]),a("div",{staticClass:"input--box"},[a("label",[t._v("CONFIRM PASSWORD")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPassword,expression:"confirmPassword"}],attrs:{type:"password"},domProps:{value:t.confirmPassword},on:{blur:function(e){return t.$v.confirmPassword.$touch()},input:function(e){e.target.composing||(t.confirmPassword=e.target.value)}}}),t.$v.confirmPassword.sameAs?t._e():a("p",{staticClass:"error--message"},[t._v(" Password doesn't match. ")])]),a("div",{staticClass:"input--box"},[a("label",[t._v("MOBILE")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.mobile,expression:"mobile"}],attrs:{type:"number"},domProps:{value:t.mobile},on:{blur:function(e){return t.$v.mobile.$touch()},input:function(e){e.target.composing||(t.mobile=e.target.value)}}}),t.$v.mobile.minLen&&t.$v.mobile.numeric?t._e():a("p",{staticClass:"error--message"},[t._v(" Mobile number shoould be at least 10 numbers ")])]),a("div",{staticClass:"input--box",staticStyle:{display:"flex","flex-direction":"row","justify-content":"space-between"}},[a("label",{staticStyle:{display:"flex","align-items":"center"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],staticStyle:{"margin-right":"1rem"},attrs:{type:"radio",value:"male"},domProps:{checked:t._q(t.gender,"male")},on:{change:function(e){t.gender="male"}}}),t._v(" Male ")]),a("label",{staticStyle:{display:"flex","align-items":"center"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.gender,expression:"gender"}],staticStyle:{"margin-right":"1rem"},attrs:{type:"radio",value:"female"},domProps:{checked:t._q(t.gender,"female")},on:{change:function(e){t.gender="female"}}}),t._v(" Female ")])]),this.$store.getters.loading?a("Spinner",{attrs:{width:"5em",height:"5em"}}):a("button",{attrs:{type:"submit",disabled:t.$v.$anyError}},[t._v(" REGISTER ")]),""!==this.$store.getters.error?a("p",{staticStyle:{color:"red","margin-bottom":"1rem"}},[t._v(" "+t._s(this.$store.getters.error)+" ")]):t._e(),a("p",[t._v("Already user ? "),a("span",{on:{click:function(e){return t.$emit("switchForm")}}},[t._v("Login")])])],1)},ue=[],de=a("b5ae"),me={data:function(){return{name:"",email:"",password:"",confirmPassword:"",mobile:"",gender:"male",city:"Cairo"}},methods:{register:function(){var t={email:this.email,name:this.name,mobile:this.mobile,password:this.password,comfirmPassword:this.confirmPassword,code:"2",sex:this.gender};this.$store.dispatch("registerUser",t)}},components:{Spinner:zt},validations:{name:{required:de["required"],minLen:Object(de["minLength"])(4)},email:{required:de["required"],email:de["email"]},password:{required:de["required"],minLen:Object(de["minLength"])(6)},confirmPassword:{sameAs:Object(de["sameAs"])((function(t){return t.password}))},mobile:{required:de["required"],numeric:de["numeric"],minLen:Object(de["minLength"])(10)}}},pe=me,fe=(a("0c39"),Object(u["a"])(pe,le,ue,!1,null,"2ff65c24",null)),ge=fe.exports,ve={data:function(){return{form:"login"}},methods:{switchForm:function(t){this.form=t}},components:{Login:ce,Signup:ge}},he=ve,be=(a("e393"),Object(u["a"])(he,ee,ae,!1,null,"2eb89e88",null)),_e=be.exports,ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cart"},[a("div",{staticClass:"cartList"},[a("h1",[t._v("Shopping Cart")]),t.cartLoading?a("Spinner"):a("cart-list",{attrs:{fruits:t.cartList}})],1),a("card-details",{attrs:{total:t.cartTotal}})],1)},Ce=[],we=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cardDetails"},[a("h1",[t._v("Card Details")]),t._m(0),a("form",{on:{submit:function(e){return e.preventDefault(),t.checkOut(e)}}},[t._m(1),t._m(2),a("div",{staticClass:"form__group field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form__field",attrs:{type:"text",placeholder:"City"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),a("label",{staticClass:"form__label",attrs:{for:"cardNumber"}},[t._v("City")])]),a("div",{staticClass:"form__group field"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.address,expression:"address"}],staticClass:"form__field",attrs:{type:"tel",inputmode:"numeric",placeholder:"Address"},domProps:{value:t.address},on:{input:function(e){e.target.composing||(t.address=e.target.value)}}}),a("label",{staticClass:"form__label",attrs:{for:"cardNumber"}},[t._v("Address")])]),t._m(3),t._m(4),a("p",{staticClass:"total"},[t._v("Total : "+t._s(t.total)+"L.E")]),a("button",{attrs:{type:"submit"}},[t._v("Check Out")])])])},$e=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cards"},[n("h2",[t._v("We accept")]),n("div",{staticClass:"cards--images"},[n("img",{staticStyle:{"margin-right":"1rem"},attrs:{src:a("d9f4"),alt:"mastercard"}}),n("img",{attrs:{src:a("2c15"),alt:"mastercard"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form__group field"},[a("input",{staticClass:"form__field",attrs:{type:"text",placeholder:"Name"}}),a("label",{staticClass:"form__label",attrs:{for:"name"}},[t._v("Card Holder")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form__group field"},[a("input",{staticClass:"form__field",attrs:{type:"tel",inputmode:"numeric",maxlength:"19",placeholder:"Please enter valid 19 numbers"}}),a("label",{staticClass:"form__label",attrs:{for:"cardNumber"}},[t._v("Card Number")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form__group field date"},[a("label",{staticClass:"form__label",attrs:{for:"expireDate"}},[t._v("Expiry Date")]),a("select",{staticClass:"form__field",attrs:{name:"expireMM",id:"expireMM"}},[a("option",{attrs:{value:""}},[t._v("Month")]),a("option",{attrs:{value:"01"}},[t._v("January")]),a("option",{attrs:{value:"02"}},[t._v("February")]),a("option",{attrs:{value:"03"}},[t._v("March")]),a("option",{attrs:{value:"04"}},[t._v("April")]),a("option",{attrs:{value:"05"}},[t._v("May")]),a("option",{attrs:{value:"06"}},[t._v("June")]),a("option",{attrs:{value:"07"}},[t._v("July")]),a("option",{attrs:{value:"08"}},[t._v("August")]),a("option",{attrs:{value:"09"}},[t._v("September")]),a("option",{attrs:{value:"10"}},[t._v("October")]),a("option",{attrs:{value:"11"}},[t._v("November")]),a("option",{attrs:{value:"12"}},[t._v("December")])]),a("select",{staticClass:"form__field",attrs:{name:"expireYY",id:"expireYY"}},[a("option",{attrs:{value:""}},[t._v("Year")]),a("option",{attrs:{value:"20"}},[t._v("2020")]),a("option",{attrs:{value:"21"}},[t._v("2021")]),a("option",{attrs:{value:"22"}},[t._v("2022")]),a("option",{attrs:{value:"23"}},[t._v("2023")]),a("option",{attrs:{value:"24"}},[t._v("2024")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"form__group field"},[a("input",{staticClass:"form__field",attrs:{placeholder:"Name",type:"numbers",name:"expiry",id:"expiry",maxlength:"4"}}),a("label",{staticClass:"form__label",attrs:{for:"ccc"}},[t._v("CVV")])])}],xe={data:function(){return{city:"",address:""}},props:{total:Number},methods:{checkOut:function(){var t={locationName:this.city,locationAddres:this.address};this.$store.dispatch("checkOut",t)}}},Pe=xe,Le=(a("1531"),Object(u["a"])(Pe,we,$e,!1,null,"d30dee54",null)),Oe=Le.exports,ke=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.fruits.length>0?a("ul",t._l(t.fruits,(function(t){return a("li",{key:t._id},[a("cart-item",{attrs:{product:t}})],1)})),0):a("h2",[t._v("Cart is empty")])},Se=[],Ee=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cartItem"},[a("img",{attrs:{src:""+t.product.product.imageUrl}}),a("div",{staticClass:"fruit--details"},[a("h2",[t._v(t._s(t.product.product.name))]),"none"!==t.product.product.fresh?a("h3",[t._v(" "+t._s(t.product.product.fresh)+" Fresh ")]):t._e(),a("h3",[t._v(t._s(t.product.amount))]),a("h4",[t._v(t._s(t.product.totalPrice)+" L.E")]),a("button",{on:{click:function(e){return t.deleteFromCart(t.product._id)}}},[t._v("Delete")])])])},Ne=[],Ie={props:{product:Object},methods:{deleteFromCart:function(t){var e={productId:t};this.$store.dispatch("deleteFromCart",e)}}},Me=Ie,je=(a("6293"),Object(u["a"])(Me,Ee,Ne,!1,null,"38df0715",null)),Te=je.exports,qe={props:{fruits:Array},components:{CartItem:Te}},Ae=qe,Fe=(a("9acd"),Object(u["a"])(Ae,ke,Se,!1,null,"5960a4ab",null)),De=Fe.exports,Ue={components:{CardDetails:Oe,CartList:De,Spinner:zt},created:function(){this.$store.dispatch("getCart")},computed:{cartList:function(){return this.$store.getters.cartList},cartLoading:function(){return this.$store.getters.cartLoading},cartTotal:function(){return this.$store.getters.finalPrice}}},Re=Ue,Qe=(a("5fb8"),Object(u["a"])(Re,ye,Ce,!1,null,"5a5c4f36",null)),We=Qe.exports,Ye=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("orders-nav",{on:{changeType:t.changeType}}),t.loading?a("Spinner"):a("div",{staticClass:"data"},[t._l(t.orders,(function(e,n){return a("order-list",{key:n,attrs:{orders:e},on:{changeType:t.changeType}})})),0==t.orders.length?a("h2",[t._v("No orders available...")]):t._e()],2)],1)},Je=[],Be=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",[a("ul",[a("li",{class:["started"===t.activeRoute?"active":""],on:{click:function(e){return t.changeType("started")}}},[a("h2",[t._v("Started")])]),a("li",{class:["ended"===t.activeRoute?"active":""],on:{click:function(e){return t.changeType("ended")}}},[a("h2",[t._v("Ended")])])])])},Ge=[],He={data:function(){return{activeRoute:"started"}},methods:{changeType:function(t){this.activeRoute=t,this.$emit("changeType",t)}}},Ve=He,ze=(a("2d41"),Object(u["a"])(Ve,Be,Ge,!1,null,"679360df",null)),Ke=ze.exports,Xe=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"ordersList"},[a("ul",t._l(t.orders.products,(function(t){return a("li",{key:t._id},[a("Order",{attrs:{order:t}})],1)})),0),a("h2",[t._v("Total price: "+t._s(t.orders.totalPrice)+" L.E")]),a("h2",[t._v("Status: "+t._s(t.orders.status))])])},Ze=[],ta=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"order"},[a("img",{attrs:{src:""+t.order.product.imageUrl}}),a("div",{staticClass:"order--detail"},[a("h2",[t._v("species:")]),a("h3",[t._v(t._s(t.order.product.name))])]),a("div",{staticClass:"order--detail"},[a("h2",[t._v("quantity:")]),a("h3",[t._v(t._s(t.order.amount))])]),a("div",{staticClass:"order--detail"},[a("h2",[t._v("price:")]),a("h3",[t._v(t._s(t.order.product.price)+" L.E")])]),a("div",{staticClass:"order--detail"},[a("h2",[t._v("Total Price:")]),a("h3",[t._v(t._s(t.order.product.price*t.order.amount)+" L.E")])])])},ea=[],aa={props:{order:Object}},na=aa,ra=(a("c46b"),Object(u["a"])(na,ta,ea,!1,null,"bd124954",null)),ia=ra.exports,oa={data:function(){return{}},props:{orders:Object,loading:Boolean},components:{Order:ia},methods:{changeType:function(t){this.$emit("changeType",t)}}},sa=oa,ca=(a("e842"),Object(u["a"])(sa,Xe,Ze,!1,null,"6f129220",null)),la=ca.exports,ua={components:{ordersNav:Ke,orderList:la,Spinner:zt},created:function(){this.$store.dispatch("getOrders",this.$route.query)},computed:{orders:function(){return this.$store.getters.orders},loading:function(){return this.$store.getters.ordersLoading}},methods:{changeType:function(t){this.$router.replace({path:"/orders",query:{type:t}}),this.$store.dispatch("getOrders",this.$route.query)}}},da=ua,ma=(a("9823"),Object(u["a"])(da,Ye,Je,!1,null,"7bc0390e",null)),pa=ma.exports;n["a"].use(h["a"]);var fa=[{path:"/",name:"Home",component:te},{path:"/login",name:"Login",component:_e},{path:"/cart",name:"Cart",component:We},{path:"/orders",name:"Orders",component:pa}],ga=new h["a"]({mode:"history",base:"/Pianta-customer/",routes:fa});ga.beforeEach((function(t,e,a){var n=localStorage.getItem("token");"Login"!==t.name?n?a():a("/login"):n?a("/"):a()}));var va=ga,ha=a("2f62"),ba=(a("d81d"),a("a434"),a("99af"),a("bc3a")),_a=a.n(ba),ya={products:[],totalProducts:0,productsLoading:!1,buttonLoading:!1,cartItems:[],cartLoading:!1,finalPrice:0},Ca={products:function(t){return t.products},total:function(t){return t.totalProducts},productsLoading:function(t){return t.productsLoading},buttonLoading:function(t){return t.buttonLoading},cartList:function(t){return t.cartItems},cartLoading:function(t){return t.cartLoading},finalPrice:function(t){return t.finalPrice}},wa={pushProducts:function(t,e){t.products=e.products,t.totalProducts=e.total},pushToCart:function(t,e){console.log(e)},pushCartitems:function(t,e){t.cartItems=e.cartItems,t.finalPrice=e.finalPrice},deleteFromCart:function(t,e){var a=t.cartItems.map((function(t){return t._id})).indexOf(e.productId);t.cartItems.splice(a,1)},checkOut:function(){console.log("rerer")}},$a={getProducts:function(t,e){var a=t.commit,n=t.state;n.productsLoading=!0;var r="/client/shop/getProducts?page=".concat(e.page,"&order=-1&date=1");e.type&&"all"!==e.type&&(r="/client/shop/getProducts?page=".concat(e.page,"&order=-1&date=1&productType=").concat(e.type)),_a.a.get(r).then((function(t){console.log(t),n.productsLoading=!1,a("pushProducts",t.data)})).catch((function(t){n.productsLoading=!1,console.log(t.response)}))},addToCart:function(t,e){var a=t.commit,n=t.state;n.buttonLoading=!0,_a.a.put("/client/shop/cart/addProduct",e).then((function(t){console.log(t),n.buttonLoading=!1,a("pushToCart",t.data),window.alert("Product Added Successfully!")})).catch((function(t){n.buttonLoading=!1,console.log(t)}))},getCart:function(t){var e=t.commit,a=t.state;a.cartLoading=!0,_a.a.get("/client/shop/getCart").then((function(t){console.log(t),a.cartLoading=!1,e("pushCartitems",t.data)})).catch((function(t){a.cartLoading=!1,console.log(t.response)}))},deleteFromCart:function(t,e){var a=t.commit;document.body.style.cursor="wait",_a.a.delete("/client/shop/cart/deleteItem",{data:e}).then((function(t){console.log(t),a("deleteFromCart",e),document.body.style.cursor="default"})).catch((function(t){console.log(t.response),document.body.style.cursor="default"}))},checkOut:function(t,e){var a=t.dispatch;_a.a.post("/client/shop/makeOrder",e).then((function(t){console.log(t),a("getCart"),window.alert(t.data.message)})).catch((function(t){console.log(t)}))}},xa={state:ya,getters:Ca,mutations:wa,actions:$a},Pa={orders:[],loading:!1},La={orders:function(t){return t.orders},ordersLoading:function(t){return t.loading}},Oa={pushOrders:function(t,e){t.orders=e}},ka={getOrders:function(t,e){var a=t.commit,n=t.state;n.loading=!0;var r="/client/shop/getOrders?type=".concat(e.type);_a.a.get(r).then((function(t){n.loading=!1,console.log(t),a("pushOrders",t.data.orders)})).catch((function(t){n.loading=!1,console.log(t.response)}))}},Sa={state:Pa,getters:La,mutations:Oa,actions:ka};n["a"].use(ha["a"]);var Ea=new ha["a"].Store({state:{idToken:null,loading:!1,error:"",clientEmail:"",clientId:"",clientMobile:"",clientName:"",image:""},getters:{isAuthenticated:function(t){t.idToken},loading:function(t){return t.loading},error:function(t){return t.error},token:function(t){return t.idToken}},mutations:{authUser:function(t,e){t.idToken=e.token,t.clientName=e.clientName,t.clientMobile=e.clientMobile,t.clientImage=e.image,t.clientEmail=e.clientEmail,_a.a.defaults.headers.common["Authorization"]="auth ".concat(t.idToken)},clearAuthData:function(t){t.idToken=null,t.clientName="",t.clientMobile="",t.clientImage="",va.push("/login")},showError:function(t,e){switch(e.data.state){case 6:t.error="User already registered with mobile number";break;case 26:t.error="User already registered with email";break;case 7:t.error="Email address not found";break;case 8:t.error="Wrong Password";break;default:t.error=""}}},actions:{registerUser:function(t,e){var a=t.commit,n=t.state;n.loading=!0,_a.a.put("/client/signup",e).then((function(t){console.log(t),a("authUser",t.data.data),localStorage.setItem("token",t.data.data.token),localStorage.setItem("clientName",t.data.data.clientName),localStorage.setItem("clientMobile",t.data.data.clientMobile),localStorage.setItem("clientImage",t.data.data.image),localStorage.setItem("clientEmail",t.data.data.clientEmail),n.loading=!1,va.push("/")})).catch((function(t){console.log(t.response),n.loading=!1}))},loginLocal:function(t,e){var a=t.commit,n=t.state;n.loading=!0,_a.a.post("/client/login",e).then((function(t){n.loading=!1,console.log(t),localStorage.setItem("token",t.data.data.token),localStorage.setItem("clientName",t.data.data.clientName),localStorage.setItem("clientMobile",t.data.data.clientMobile),localStorage.setItem("clientImage",t.data.data.image),localStorage.setItem("clientEmail",t.data.data.clientEmail),a("authUser",t.data.data),va.push("/")})).catch((function(t){console.log(t.response),n.loading=!1,a("showError",t.response)}))},tryAutoLogin:function(t){var e=t.commit,a={token:localStorage.getItem("token"),sellerName:localStorage.getItem("clientName"),clientMobile:localStorage.getItem("clientMobile"),clientName:localStorage.getItem("clientName"),image:localStorage.getItem("clientImage"),clientEmail:localStorage.getItem("clientEmail")};a.token&&e("authUser",a)},logout:function(t){var e=t.commit;localStorage.clear(),e("clearAuthData")}},modules:{products:xa,orders:Sa}}),Na=a("1dce"),Ia=a.n(Na),Ma=a("8832"),ja=a.n(Ma);n["a"].use(Ia.a),n["a"].component("paginate",ja.a),_a.a.defaults.baseURL="https://gradubanana.herokuapp.com/",n["a"].config.productionTip=!1,new n["a"]({router:va,store:Ea,render:function(t){return t(v)}}).$mount("#app")},"5a0f":function(t,e,a){"use strict";a("405d")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"5fb8":function(t,e,a){"use strict";a("2249")},"628c":function(t,e,a){t.exports=a.p+"img/blackberries.b51e39e9.png"},6293:function(t,e,a){"use strict";a("af2d")},"62b1":function(t,e,a){t.exports=a.p+"img/apricots.2d7969d2.png"},"6ccf":function(t,e,a){t.exports=a.p+"img/grapes.71f11615.png"},"711a":function(t,e,a){t.exports=a.p+"img/pears.28fd56c6.png"},"72a1":function(t,e,a){t.exports=a.p+"img/guava.0211550d.png"},7935:function(t,e,a){},"7d6d":function(t,e,a){t.exports=a.p+"img/cantaloupes.f304ec13.png"},"7e51":function(t,e,a){t.exports=a.p+"img/kiwifruit.7be3c17d.png"},"848f":function(t,e,a){},"8a78":function(t,e,a){t.exports=a.p+"img/sprite.58100617.svg"},"94d5":function(t,e,a){t.exports=a.p+"img/pomegranates.f76b6eea.png"},9823:function(t,e,a){"use strict";a("d04f")},"9acd":function(t,e,a){"use strict";a("7935")},"9b47":function(t,e,a){t.exports=a.p+"img/lemons.b1ace22b.png"},"9c0c":function(t,e,a){},af2d:function(t,e,a){},b5d8:function(t,e,a){"use strict";a("0f46")},b930:function(t,e,a){},bc38:function(t,e,a){t.exports=a.p+"img/wallet.4533e8dd.svg"},c013:function(t,e,a){},c32f:function(t,e,a){t.exports=a.p+"img/apple.4fb73682.png"},c401:function(t,e,a){},c46b:function(t,e,a){"use strict";a("b930")},c715:function(t,e,a){"use strict";a("5416")},c87a:function(t,e,a){t.exports=a.p+"img/coconuts.e5679502.png"},cb60:function(t,e,a){},d04f:function(t,e,a){},d183:function(t,e,a){t.exports=a.p+"img/banana.530232f1.png"},d9f4:function(t,e,a){t.exports=a.p+"img/master.d3d386d5.png"},e20a:function(t,e,a){t.exports=a.p+"img/avocados.8884eb91.png"},e393:function(t,e,a){"use strict";a("e520")},e520:function(t,e,a){},e842:function(t,e,a){"use strict";a("1822")},efa0:function(t,e,a){t.exports=a.p+"img/raspberries.af6fc8e1.png"},f2c7:function(t,e,a){t.exports=a.p+"img/figs.67b229cc.png"},f7c9:function(t,e,a){"use strict";a("848f")},fab0:function(t,e,a){"use strict";a("c401")},fb82:function(t,e,a){t.exports=a.p+"img/fruits.196b1d34.png"},fc6b:function(t,e,a){}});
//# sourceMappingURL=app.753af6e8.js.map