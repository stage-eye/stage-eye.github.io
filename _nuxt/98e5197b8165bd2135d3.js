(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(e,t,n){"use strict";var r=n(6),o=n(155)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),n(72)("find")},155:function(e,t,n){var r=n(28),o=n(70),c=n(29),d=n(19),f=n(156);e.exports=function(e,t){var n=1==e,l=2==e,h=3==e,m=4==e,v=6==e,w=5==e||v,_=t||f;return function(t,f,y){for(var k,E,R=c(t),A=o(R),S=r(f,y,3),T=d(A.length),$=0,x=n?_(t,T):l?_(t,0):void 0;T>$;$++)if((w||$ in A)&&(E=S(k=A[$],$,R),e))if(n)x[$]=E;else if(E)switch(e){case 3:return!0;case 5:return k;case 6:return $;case 2:x.push(k)}else if(m)return!1;return v?-1:h||m?m:x}}},156:function(e,t,n){var r=n(157);e.exports=function(e,t){return new(r(e))(t)}},157:function(e,t,n){var r=n(9),o=n(100),c=n(2)("species");e.exports=function(e){var t;return o(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!o(t.prototype)||(t=void 0),r(t)&&null===(t=t[c])&&(t=void 0)),void 0===t?Array:t}},158:function(e,t,n){var map={"./ise-amsterdam-2020.md":159,"./stage-eye-on-tour.md":160};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=158},159:function(e,t){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[e._v("This week Stage Eye had it's public premiere at international stage, during the biggest stage technic fair - ISE Amsterdam 2020.\nOur team was presenting newest prototype system, build of two Stage Eye devices.\nWithin these few days we had a chance to meet and talk to hundreds of people, from different industries and with different career background.")]),e._v(" "),n("p",[e._v("But there was one thing in common: the idea of digitalizing stage positioning seems obvious to everyone we talk to.\nIt was pure pleasure to see when our guests realized possibilities that Stage Eye provides and how natural it feels to use it.")]),e._v(" "),n("p",[e._v("Another thing was huge amount of new ideas for using Stage Eye positioning technology, also outside of stage and event industry.")]),e._v(" "),n("p",[e._v("So we came back to our office, full of new energy and vision, for new features, that we will be developing in the upcoming months.")]),e._v(" "),n("p",[e._v("Thank you all for that and stay put for new to come :)")]),e._v(" "),n("p",[e._v("If you want to see more photos visit our "),n("a",{attrs:{href:"https://www.facebook.com/STAGE-EYE-110034833905283/"}},[e._v("fb fanpage")])])])}]};e.exports={attributes:{date:"2020-02-16T12:00:00.000Z",title:"ISE Amsterdam 2020"},meta:{resourcePath:"/home/tomek/Projects/stage-eye/se-www/content/news/ise-amsterdam-2020.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},160:function(e,t){const n={render:function(){this.$createElement;return this._self._c,this._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"frontmatter-markdown"},[n("p",[e._v("After ISE Amsterdam, we gathered a lot of new contacts, from people that were interested to try or buy our system.\nThat got us to the point were we had to start planning full scale tour to meet with all of our new clients and friends.")]),e._v(" "),n("p",[e._v("Therefore, if you would like to meet us and test our solution please contact us as soon as possible.")]),e._v(" "),n("p",[e._v("Then we will be able to plan our tour in to include you.\nIt will be free of charge for you, as we are going to be participants of 'Go to Brand' - European Union program.")]),e._v(" "),n("p",[n("a",{attrs:{href:"info@stageeye.io"}},[e._v("info@stageeye.io")])]),e._v(" "),n("p",[n("a",{attrs:{href:"jakub@stageeye.io"}},[e._v("jakub@stageeye.io")])]),e._v(" "),n("p",[n("a",{attrs:{href:"https://www.facebook.com/STAGE-EYE-110034833905283/"}},[e._v("facebook page")])])])}]};e.exports={attributes:{date:"2020-02-22T11:00:00.000Z",title:"Stage Eye on tour"},meta:{resourcePath:"/home/tomek/Projects/stage-eye/se-www/content/news/stage-eye-on-tour.md"},vue:{component:{data:function(){return{templateRender:null}},render:function(e){return this.templateRender?this.templateRender():e("div","Rendering")},created:function(){this.templateRender=n.render,this.$options.staticRenderFns=n.staticRenderFns}}}}},195:function(e,t,n){"use strict";n.r(t);n(101),n(71),n(73),n(154),n(99);var r=n(36),o=(n(27),n(16),n(158)),c=o.keys().map((function(e){var t=e.match(/\/(.+)\.md$/);Object(r.a)(t,2)[1];return o(e)})).sort((function(a,b){return new Date(b.attributes.date)-new Date(a.attributes.date)})),d={transition:{name:"zoom",mode:"out-in"},data:function(){var e=this;return{posts:c,post:this.$route.params.slug?c.find((function(t){return t.meta.resourcePath.includes("/news/".concat(e.$route.params.slug))})):c[0]}},methods:{getPermalink:function(e){if(0===e)return"/news";var t=this.posts[e];return"/news/".concat(t.meta.resourcePath.split("\\").pop().split("/").pop().split(".")[0])}}},f=n(13),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v(e._s(e.post.attributes.title))]),e._v(" "),n("small",[e._v(e._s(e._f("humanDate")(e.post.attributes.date)))]),e._v(" "),n(e.post.vue.component,{tag:"component",staticClass:"c-rich-text"})],1)}),[],!1,null,null,null);t.default=component.exports}}]);