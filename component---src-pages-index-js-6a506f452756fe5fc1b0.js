(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return m});var r=a(7),i=a.n(r),n=a(0),o=a.n(n),s=a(153),l=a(157),u=a(160),c=a(176),d=a.n(c),f=a(158),p=a(154),g=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return o.a.createElement(l.a,{location:this.props.location,title:t},o.a.createElement(f.a,{title:"PerfReviews - Promoviendo web performance"}),o.a.createElement(u.a,null),o.a.createElement("h2",null,"Análisis de web performance"),a.map(function(e){var t=e.node,a=t.frontmatter.title||t.headings[0].value||t.fields.slug;return o.a.createElement("div",{key:t.fields.slug},o.a.createElement("h3",{style:{marginBottom:Object(p.a)(.25)}},o.a.createElement(s.a,{style:{boxShadow:"none"},to:t.fields.slug},a)),o.a.createElement("small",null,t.frontmatter.date),t.frontmatter.image?o.a.createElement(d.a,{sizes:t.frontmatter.image.childImageSharp.sizes}):null,o.a.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}}))}),o.a.createElement("h2",null,"Tips"),o.a.createElement("h3",null,o.a.createElement("a",{style:{boxShadow:"none"},href:"https://www.youtube.com/watch?v=50DiJphbXiU"},"3rd party badges en Google Chrome")),o.a.createElement("p",null,"Un vídeo corto sobre cómo identificar peticiones de 3rd party scripts y medir su performance."),o.a.createElement("h2",null,"Tools"),o.a.createElement("h3",null,o.a.createElement("a",{style:{boxShadow:"none"},href:"https://github.com/PerfReviews/PerfTools/tree/master/Lighthouse-Report"},"Lighthouse report")),o.a.createElement("p",null,"Cómo escribir un script para generar informes de lighthouse para un conjunto de webs automáticamente."),o.a.createElement("hr",{style:{marginTop:Object(p.a)(2.5),marginBottom:Object(p.a)(2.5)}}),o.a.createElement("p",null,"En PerfReviews hablamos sobre web performance analizando diferentes sitios reales. Queremos divulgar sobre la importancia de crear productos que ofrezcan una buena experiencia de usuario en cualquier dispositivo. Y lo haremos desde un punto de vista práctico, con herramientas y técnicas que podéis aplicar en vuestros proyectos."),o.a.createElement("p",null,"Dado que los sitios web son proyectos dinámicos, es posible que los análisis mencionen aspectos que no sean reproducibles actualmente. Por ello acompañamos los vídeos con una serie de informes que permiten visualizar un “snapshot” de la web en el momento en que hicimos el estudio."))},t}(o.a.Component);t.default=g;var m="3613555278"},153:function(e,t,a){"use strict";a.d(t,"b",function(){return c});var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(32),l=a.n(s);a.d(t,"a",function(){return l.a});a(155);var u=i.a.createContext({}),c=function(e){return i.a.createElement(u.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};c.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},154:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return u});var r=a(163),i=a.n(r),n=a(164),o=a.n(n);o.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete o.a.googleFonts;var s=new i.a(o.a);var l=s.rhythm,u=s.scale},155:function(e,t,a){var r;e.exports=(r=a(156))&&r.default||r},156:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),i=a.n(r),n=a(4),o=a.n(n),s=a(54),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},157:function(e,t,a){"use strict";a(33);var r=a(7),i=a.n(r),n=a(0),o=a.n(n),s=a(153),l=a(154),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,i=t.children;return e="/"===a.pathname?o.a.createElement("h1",{style:Object.assign({},Object(l.b)(1),{marginBottom:Object(l.a)(1.5),marginTop:0})},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):o.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},o.a.createElement(s.a,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),o.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},o.a.createElement("header",null,e),o.a.createElement("main",null,i),o.a.createElement("footer",{style:{marginTop:Object(l.a)(2.5),paddingTop:Object(l.a)(1)}},o.a.createElement("a",{href:"/servicios",target:"_blank",rel:"noopener noreferrer"},"servicios")," ","•"," ",o.a.createElement("a",{href:"https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww",target:"_blank",rel:"noopener noreferrer"},"youtube")," ","•"," ",o.a.createElement("a",{href:"https://mobile.twitter.com/PerfReviews_",target:"_blank",rel:"noopener noreferrer"},"twitter")," ","•"," ",o.a.createElement("a",{href:"https://mailchi.mp/b309deb154c1/perfreviews",target:"_blank",rel:"noopener noreferrer"},"newsletter")," ","•"," ",o.a.createElement("a",{href:"https://www.facebook.com/PerfReviews-221286588787407/",target:"_blank",rel:"noopener noreferrer"},"facebook")," ","•"," ",o.a.createElement("a",{href:"https://github.com/PerfReviews/PerfReviews",target:"_blank",rel:"noopener noreferrer"},"github")," ","•"," ",o.a.createElement("a",{href:"mailto:perfreviews.mail@gmail.com",target:"_blank",rel:"noopener noreferrer"},"mail")," "))},t}(o.a.Component);t.a=u},158:function(e,t,a){"use strict";var r=a(159),i=a(0),n=a.n(i),o=a(4),s=a.n(o),l=a(165),u=a.n(l);function c(e){var t=e.description,a=e.lang,i=e.meta,o=e.keywords,s=e.title,l=r.data.site,c=t||l.siteMetadata.description;return n.a.createElement(u.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:s},{property:"og:description",content:c},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:image",content:l.siteMetadata.siteUrl+"icons/icon-512x512.png"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:c}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(i)})}c.defaultProps={lang:"en",meta:[],keywords:[]},c.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=c},159:function(e){e.exports={data:{site:{siteMetadata:{title:"PerfReviews",description:"Enseñamos web performance analizando sitios webs reales. Compartimos trucos, herramientas y workflows para mejorar el rendimiento de sitios web.",author:"Joan León y José M. Pérez",siteUrl:"https://perf.reviews/"}}}}},160:function(e,t,a){"use strict";var r=a(161),i=a(0),n=a.n(i),o=a(153),s=a(162),l=a.n(s),u=a(154);console.log(l.a);var c="2760998521";t.a=function(){return n.a.createElement(o.b,{query:c,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},n.a.createElement("img",{src:l.a,alt:"PerfReviews",style:{height:56,marginRight:Object(u.a)(.5),marginBottom:0,width:56,borderRadius:"50%"}}),n.a.createElement("p",null,"Con ",n.a.createElement("strong",null,a),".",n.a.createElement("br",null),"Hablamos sobre web performance en ",n.a.createElement("a",{href:"https://twitter.com/"+r.twitter},"Twitter")," y"," ",n.a.createElement("a",{href:"https://www.youtube.com/channel/UCNoF5_1loBFvW2lZXPxp8ww"},"Youtube"),"."))},data:r})}},161:function(e){e.exports={data:{site:{siteMetadata:{author:"Joan León y José M. Pérez",social:{twitter:"PerfReviews_"}}}}}},162:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTA3IiBoZWlnaHQ9IjEwNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNzAuMyA0Ny40SDU0LjdjLTEuMiAwLTIuMS0xLTItMi4yTDU0LjYgMjRjMC0xLjMtLjgtMi4zLTIuMS0yLjYtMS4yLS4zLTIuNC4zLTMgMS41TDMzLjIgNThjLS40LjgtLjMgMS44LjIgMi41LjUuOCAxLjMgMS4yIDIuMiAxLjJoMTUuNmMxLjIgMCAyLjEgMSAyIDIuMkw1MS4zIDg1YzAgMS4zLjggMi4zIDIuMSAyLjYuMiAwIC40LjEuNi4xIDEgMCAxLjktLjYgMi40LTEuNWwxNi40LTM1LjFjLjQtLjguMy0xLjgtLjItMi41LS41LS44LTEuNC0xLjItMi4zLTEuMnoiIGZpbGw9IiMyNDI0MjQiLz48cGF0aCBkPSJNMjguOSAxNC45YzIuMyAwIDQuMi0xLjkgNC4yLTQuMiAwLTIuMy0xLjktNC4yLTQuMi00LjItMi4zIDAtNC4yIDEuOS00LjIgNC4yLS4xIDIuMyAxLjggNC4yIDQuMiA0LjJ6TTEwLjYgMjQuNmMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAyLjMgMCA0LjItMS45IDQuMi00LjIuMS0yLjMtMS44LTQuMi00LjItNC4yek00LjIgNTcuN2E0LjIgNC4yIDAgMSAwIDAtOC40IDQuMiA0LjIgMCAwIDAgMCA4LjR6TTEwLjYgNzMuOWMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAyLjMgMCA0LjItMS45IDQuMi00LjIuMS0yLjMtMS44LTQuMi00LjItNC4yek0yOC45IDkyLjFjLTIuMyAwLTQuMiAxLjktNC4yIDQuMiAwIDIuMyAxLjkgNC4yIDQuMiA0LjIgMi4zIDAgNC4yLTEuOSA0LjItNC4yIDAtMi4zLTEuOS00LjItNC4yLTQuMnpNNTMuNSA5OC42Yy0yLjMgMC00LjIgMS45LTQuMiA0LjIgMCAyLjMgMS45IDQuMiA0LjIgNC4yIDIuMyAwIDQuMi0xLjkgNC4yLTQuMiAwLTIuMy0xLjktNC4yLTQuMi00LjJ6TTc4LjEgOTIuMWMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAyLjMgMCA0LjItMS45IDQuMi00LjIuMS0yLjMtMS44LTQuMi00LjItNC4yek05Ni40IDczLjljLTIuMyAwLTQuMiAxLjktNC4yIDQuMiAwIDIuMyAxLjkgNC4yIDQuMiA0LjIgMi4zIDAgNC4yLTEuOSA0LjItNC4yIDAtMi4zLTEuOS00LjItNC4yLTQuMnpNMTAyLjggNTcuN2E0LjIgNC4yIDAgMSAwIDAtOC40IDQuMiA0LjIgMCAwIDAgMCA4LjR6TTk2IDMyLjhjLjcgMCAxLjUtLjIgMi4xLS42IDEtLjYgMS43LTEuNSAxLjktMi42LjMtMS4xLjEtMi4yLS40LTMuMkM5MC4xIDEwLjEgNzIuNCAwIDUzLjUgMGMtMi4zIDAtNC4yIDEuOS00LjIgNC4yIDAgMi4zIDEuOSA0LjIgNC4yIDQuMiAxNS45IDAgMzAuOCA4LjUgMzguOSAyMi4zLjggMS4zIDIuMiAyLjEgMy42IDIuMXoiIGZpbGw9IiMwMEFBNTgiLz48L3N2Zz4="},176:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var i,n=r(a(7)),o=r(a(34)),s=r(a(74)),l=r(a(75)),u=r(a(0)),c=r(a(4)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},g=[];var m=function(e,t){(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver(function(e){e.forEach(function(e){g.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),i).observe(e),g.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",o=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",u=e.opacity?e.opacity:"1";return"<picture>"+r+"<img "+s+l+a+i+t+o+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+u+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=u.default.forwardRef(function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,o=e.onLoad,c=e.onError,d=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return u.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},d,{onLoad:o,onError:c,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))});y.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var L=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,i=!1,n=t.fadeIn,s=p(t);!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,i=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:i,fadeIn:n,hasNoScript:l,seenBefore:s},a.imageRef=u.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,o.default)((0,o.default)(a))),a.handleRef=a.handleRef.bind((0,o.default)((0,o.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,m=e.fixed,L=e.backgroundColor,M=e.Tag,I=e.itemProp,b="boolean"==typeof L?"lightgray":L,j=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},s,f),w=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},s),S={title:t,alt:this.state.isVisible?"":a,style:j,className:p};if(g){var E=g;return u.default.createElement(M,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(E.srcSet)},u.default.createElement(M,{style:{width:"100%",paddingBottom:100/E.aspectRatio+"%"}}),E.base64&&u.default.createElement(y,(0,l.default)({src:E.base64},S)),E.tracedSVG&&u.default.createElement(y,(0,l.default)({src:E.tracedSVG},S)),b&&u.default.createElement(M,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&u.default.createElement("picture",null,E.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:E.srcSetWebp,sizes:E.sizes}),u.default.createElement(y,{alt:a,title:t,sizes:E.sizes,src:E.src,srcSet:E.srcSet,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:I})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},E))}}))}if(m){var v=m,A=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:v.width,height:v.height},n);return"inherit"===n.display&&delete A.display,u.default.createElement(M,{className:(r||"")+" gatsby-image-wrapper",style:A,ref:this.handleRef,key:"fixed-"+JSON.stringify(v.srcSet)},v.base64&&u.default.createElement(y,(0,l.default)({src:v.base64},S)),v.tracedSVG&&u.default.createElement(y,(0,l.default)({src:v.tracedSVG},S)),b&&u.default.createElement(M,{title:t,style:{backgroundColor:b,width:v.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:v.height}}),this.state.isVisible&&u.default.createElement("picture",null,v.srcSetWebp&&u.default.createElement("source",{type:"image/webp",srcSet:v.srcSetWebp,sizes:v.sizes}),u.default.createElement(y,{alt:a,title:t,width:v.width,height:v.height,sizes:v.sizes,src:v.src,srcSet:v.srcSet,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:I})),this.state.hasNoScript&&u.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:v.width,height:v.height},v))}}))}return null},t}(u.default.Component);L.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var M=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string}),I=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string});L.propTypes={resolutions:M,sizes:I,fixed:M,fluid:I,fadeIn:c.default.bool,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string};var b=L;t.default=b}}]);
//# sourceMappingURL=component---src-pages-index-js-6a506f452756fe5fc1b0.js.map