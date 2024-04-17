"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[6123],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,y=m["".concat(s,".").concat(d)]||m[d]||u[d]||a;return n?o.createElement(y,i(i({ref:t},p),{},{components:n})):o.createElement(y,i({ref:t},p))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9089:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_label:"Localstack",title:"Localstack"},i=void 0,l={unversionedId:"protocols/aws/localstack",id:"protocols/aws/localstack",title:"Localstack",description:"It is a common need to be able to test AWS operations on a local environment. For that, many engineers have turned to Localstack.",source:"@site/../docs/target/jvm-2.13/mdoc/03-protocols/03-aws/02-localstack.md",sourceDirName:"03-protocols/03-aws",slug:"/protocols/aws/localstack",permalink:"/smithy4s/docs/protocols/aws/localstack",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/03-protocols/03-aws/02-localstack.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Localstack",title:"Localstack"},sidebar:"tutorialSidebar",previous:{title:"AWS",permalink:"/smithy4s/docs/protocols/aws/aws"},next:{title:"Middlewares",permalink:"/smithy4s/docs/protocols/aws/middleware"}},s={},c=[{value:"Implementation",id:"implementation",level:3}],p={toc:c},m="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(m,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is a common need to be able to test AWS operations on a local environment. For that, many engineers have turned to ",(0,r.kt)("a",{parentName:"p",href:"https://localstack.cloud/"},"Localstack"),"."),(0,r.kt)("p",null,"Smithy4s does not provide any utility method to allow for this, for the simple reason that it can be done reasonably easily\nat the level of the underlying http client, by mean of a middleware."),(0,r.kt)("h3",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"In order to target an Smithy4s-built AWS client to a local environment, you need to create a middleware (ie a ",(0,r.kt)("inlineCode",{parentName:"p"},"Client[F] => Client[F]")," function) that redirects requests to the Localstack host and port. Here's an example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'import cats.effect._\nimport cats.syntax.all._\nimport com.amazonaws.dynamodb._\nimport fs2.io.net.Network\nimport org.http4s.client.Client\nimport org.http4s.ember.client.EmberClientBuilder\nimport fs2.compression.Compression\nimport org.http4s._\nimport org.typelevel.ci._\nimport smithy4s.aws._\nimport smithy4s.aws.kernel.AwsRegion\n\nobject LocalstackProxy {\n  def apply[F[_]: Async: Compression](client: Client[F]): Client[F] = Client { req =>\n    client.run(\n      req.withUri(\n        req.uri.copy(authority =\n          req.uri.authority.map(x =>\n            x.copy(\n              host = Uri.RegName("localhost"),\n              port = Some(4566)\n            )\n          )\n        )\n      )\n      .putHeaders(Header.Raw(ci"host", "localhost"))\n    )\n  }\n}\n\nobject LocalstackDynamoDB {\n  def env[F[_]: Async: Compression](client: Client[F], region: AwsRegion): AwsEnvironment[F] = AwsEnvironment.make[F](\n    client,\n    Async[F].pure(region),\n    Async[F].pure(AwsCredentials.Default("mock-key-id", "mock-secret-key", None)),\n    Async[F].realTime.map(_.toSeconds).map(Timestamp(_, 0))\n  )\n\n  def client[F[_]: Async: Network: Compression](client: Client[F], region: AwsRegion): Resource[F, DynamoDB.Impl[F]] =\n    AwsClient(DynamoDB.service, env[F](LocalstackProxy[F](client), region))\n}\n\ndef myResource[F[_]: Async: Network: Compression] = for {\n  underlying <- EmberClientBuilder\n    .default[F]\n    .withoutCheckEndpointAuthentication\n    .build\n  client <- LocalstackDynamoDB.client[F](underlying, AwsRegion.US_EAST_1)\n} yield client\n')))}u.isMDXComponent=!0}}]);