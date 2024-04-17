"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[163],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),m=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(r),h=o,u=c["".concat(l,".").concat(h)]||c[h]||d[h]||a;return r?n.createElement(u,i(i({ref:t},p),{},{components:r})):n.createElement(u,i({ref:t},p))}));function u(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var m=2;m<a;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},783:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>m});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_label:"Model preprocessing",title:"Smithy Model preprocessing"},i=void 0,s={unversionedId:"guides/model-preprocessing",id:"guides/model-preprocessing",title:"Smithy Model preprocessing",description:"There are times that you may want to transform the Smithy model being used by Smithy4s prior to code generation. This happens often when the model in question is provided by a third party: you may only be interested in a couple operations from a third party service, or you may want to remove some fields that are irrelevant for your use-case from of a response,",source:"@site/../docs/target/jvm-2.13/mdoc/06-guides/model-preprocessing.md",sourceDirName:"06-guides",slug:"/guides/model-preprocessing",permalink:"/smithy4s/docs/guides/model-preprocessing",draft:!1,editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/06-guides/model-preprocessing.md",tags:[],version:"current",frontMatter:{sidebar_label:"Model preprocessing",title:"Smithy Model preprocessing"},sidebar:"tutorialSidebar",previous:{title:"Extracting Request Info",permalink:"/smithy4s/docs/guides/extract-request-info"},next:{title:"Smithy4s to Smithy",permalink:"/smithy4s/docs/guides/schema-to-smithy"}},l={},m=[{value:"Starting Smithy Model",id:"starting-smithy-model",level:2},{value:"Note on third party models",id:"note-on-third-party-models",level:2},{value:"Create a new build project/module to hold a ProjectionTransformer",id:"create-a-new-build-projectmodule-to-hold-a-projectiontransformer",level:2},{value:"SBT",id:"sbt",level:3},{value:"Mill",id:"mill",level:3},{value:"Implement the ProjectionTransformer",id:"implement-the-projectiontransformer",level:2},{value:"Register the Transformer",id:"register-the-transformer",level:2},{value:"Wire up",id:"wire-up",level:2},{value:"SBT",id:"sbt-1",level:3},{value:"Mill",id:"mill-1",level:3},{value:"Outcome",id:"outcome",level:2},{value:"Directory Structure",id:"directory-structure",level:2},{value:"SBT",id:"sbt-2",level:3},{value:"Mill",id:"mill-2",level:3}],p={toc:m},c="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"There are times that you may want to transform the Smithy model being used by Smithy4s prior to code generation. This happens often when the model in question is provided by a third party: you may only be interested in a couple operations from a third party service, or you may want to remove some fields that are irrelevant for your use-case from of a response,\nin order to reduce the parsing overhead."),(0,o.kt)("p",null,"In this guide, we will walk through exactly how you can accomplish this. As an example, we will show how you can remove members marked with a certain trait from structures inside of your Smithy model. However, you can use the same principles in this guide to accomplish whatever other transformations you may need."),(0,o.kt)("h2",{id:"starting-smithy-model"},"Starting Smithy Model"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smithy"},'namespace preprocessed\n\n@trait(selector: "structure > member")\nstructure removeBeforeCodegen {}\n\nstructure MyStruct {\n    @required\n    name: String\n\n    @removeBeforeCodegen\n    id: String\n}\n')),(0,o.kt)("p",null,"Here we have defined a trait ",(0,o.kt)("inlineCode",{parentName:"p"},"removeBeforeCodegen"),". We have marked the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," member of ",(0,o.kt)("inlineCode",{parentName:"p"},"MyStruct")," with this trait. As such, we will implement a transformer which will lead to the model looking as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smithy"},"namespace preprocessed\n\nstructure MyStruct {\n    @required\n    name: String\n}\n")),(0,o.kt)("p",null,"This is the model that will ultimately be fed into the Smithy4s code generation tooling."),(0,o.kt)("h2",{id:"note-on-third-party-models"},"Note on third party models"),(0,o.kt)("p",null,"It is likely that you will want to annotate third party models. Remember that Smithy allows for annotating shapes\nwith traits a posteriori, via the following syntax :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-smithy"},"apply preprocessed#MyStruct$id @removeBeforeCodegen\n")),(0,o.kt)("p",null,"This lets you regain control over models that came from third party before running the code-generation."),(0,o.kt)("h2",{id:"create-a-new-build-projectmodule-to-hold-a-projectiontransformer"},"Create a new build project/module to hold a ProjectionTransformer"),(0,o.kt)("p",null,"A model preprocessor is essentially an implementation of the ",(0,o.kt)("inlineCode",{parentName:"p"},"software.amazon.smithy.build.ProjectionTransformer"),"\ninterface, provided by the official ",(0,o.kt)("inlineCode",{parentName:"p"},"smithy-build")," library. This code is leveraged at build-time, and it is unlikely\nsomething that developers want in the runtime classpath of their application. Therefore, a bespoke project/module\nmust be created to hold the implementation."),(0,o.kt)("h3",{id:"sbt"},"SBT"),(0,o.kt)("p",null,"In our ",(0,o.kt)("inlineCode",{parentName:"p"},"build.sbt")," file we will create a new project called ",(0,o.kt)("inlineCode",{parentName:"p"},"preprocessors")," that looks as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'lazy val preprocessors = (project in file("preprocessors"))\n  .settings(\n    scalaVersion := "2.12.13", // 2.12 to match what SBT uses\n    name := "preprocessors",\n    libraryDependencies += "software.amazon.smithy" % "smithy-build" % smithy4s.codegen.BuildInfo.smithyVersion\n  )\n')),(0,o.kt)("h3",{id:"mill"},"Mill"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'import mill._\nimport scalalib._\n\nobject preprocessors extends ScalaModule {\n  def scalaVersion = "2.13.10" // 2.13 to match what Mill uses\n  def ivyDeps = Agg(\n    s"software.amazon.smithy:smithy-build:${smithy4s.codegen.BuildInfo.smithyVersion}"\n  )\n}\n')),(0,o.kt)("h2",{id:"implement-the-projectiontransformer"},"Implement the ProjectionTransformer"),(0,o.kt)("p",null,"Here is an example of a transformer that will remove the members marked with the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeBeforeCodegen"),"\ntrait as discussed above."),(0,o.kt)("p",null,"Note that the result of the ",(0,o.kt)("inlineCode",{parentName:"p"},"getName")," method is significant, as it will be referenced in the build later,\nbut it does not have to match the name of the class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'package preprocessors\n\nimport software.amazon.smithy.build._\nimport software.amazon.smithy.model._\nimport software.amazon.smithy.model.shapes._\nimport software.amazon.smithy.model.traits._\n\nfinal class RemoveBeforeCodegenTransformation extends ProjectionTransformer {\n\n  def getName() = {\n    "RemoveBeforeCodegenTransformation"\n  }\n\n  def transform(ctx: TransformContext) : Model = {\n    val toRemove = ctx\n      .getModel()\n      .getShapesWithTrait(ShapeId.from("preprocessed#removeBeforeCodegen"))\n\n    ctx.getTransformer().removeShapes(ctx.getModel(), toRemove)\n  }\n}\n')),(0,o.kt)("p",null,"Inside the ",(0,o.kt)("inlineCode",{parentName:"p"},"transform")," method we remove all shapes that are marked with the ",(0,o.kt)("inlineCode",{parentName:"p"},"removeBeforeCodegen")," trait, before returning\nthe final model."),(0,o.kt)("h2",{id:"register-the-transformer"},"Register the Transformer"),(0,o.kt)("p",null,"We need to register the Transformer so that the Smithy tooling is be able to find it when necessary. We do this by creating the following file :"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"for SBT : ",(0,o.kt)("inlineCode",{parentName:"li"},"src/main/resources/META-INF/services/software.amazon.smithy.build.ProjectionTransformer")),(0,o.kt)("li",{parentName:"ul"},"for Mill : ",(0,o.kt)("inlineCode",{parentName:"li"},"resources/META-INF/services/software.amazon.smithy.build.ProjectionTransformer"))),(0,o.kt)("p",null,"This file contains a list of newline-delimited fully qualified names, of all the ",(0,o.kt)("inlineCode",{parentName:"p"},"ProjectionTransformer")," implementations contained by our project. For our use-case, it looks like this :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"preprocessors.RemoveBeforeCodegenTransformation\n")),(0,o.kt)("p",null,"NB : this registration is dictated by the ",(0,o.kt)("a",{parentName:"p",href:"https://www.baeldung.com/java-spi"},(0,o.kt)("strong",{parentName:"a"},"Service Provider Interface"))," (aka ",(0,o.kt)("strong",{parentName:"p"},"SPI"),"). It is the same mechanism that the Scala compiler uses to find compiler plugins from the classpath."),(0,o.kt)("h2",{id:"wire-up"},"Wire up"),(0,o.kt)("p",null,"Now, we need to indicate to the smithy4s build plugin which transformers should be applied prior to code generation in our application project. We also need to wire the ",(0,o.kt)("inlineCode",{parentName:"p"},"preprocessors")," project/module to our application project in a way that ensures the transformer does not end up in the runtime classpath of the application."),(0,o.kt)("h3",{id:"sbt-1"},"SBT"),(0,o.kt)("p",null,"Now, in our project that is using the Smithy4s SBT plugin (",(0,o.kt)("inlineCode",{parentName:"p"},".enablePlugins(Smithy4sCodegenPlugin)"),") we need to add the following settings:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'lazy val app = project.in(file("app"))\n  .enablePlugins(Smithy4sCodegenPlugin)\n  .settings(\n    // ...\n\n    // Must match the `getName` method implemented above\n    Compile / smithy4sModelTransformers += "RemoveBeforeCodegenTransformation",\n    Compile / smithy4sAllDependenciesAsJars += (preprocessors / Compile / packageBin).value\n  )\n')),(0,o.kt)("h3",{id:"mill-1"},"Mill"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},'object app extends Smithy4sModule {\n  // ...\n\n  def smithy4sModelTransformers = T {\n    List(\n      // Must match the `getName` method implemented above\n      "RemoveBeforeCodegenTransformation"\n    )\n  }\n\n  def smithy4sAllDependenciesAsJars = T {\n     preprocessors.jar() :: super.smithy4sAllDepencenciesAsJars()\n  }\n\n}\n')),(0,o.kt)("h2",{id:"outcome"},"Outcome"),(0,o.kt)("p",null,"This results in the generated ",(0,o.kt)("inlineCode",{parentName:"p"},"MyStruct")," case class to look like this :"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-scala"},"// note the lack of the `id` field which was removed by the preprocessor\ncase class MyStruct(name: String)\n")),(0,o.kt)("p",null,"of course, this is but an example, but some models contain thousands of shapes. Automating the preprocessing\nof these models is extremely powerful."),(0,o.kt)("h2",{id:"directory-structure"},"Directory Structure"),(0,o.kt)("p",null,"In case the directory and file structure above was hard to follow, here is a tree example of what it would look like for this example:"),(0,o.kt)("h3",{id:"sbt-2"},"SBT"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 build.sbt\n\u251c\u2500\u2500 app\n\u2502   \u2514\u2500\u2500 src\n\u2502       \u2514\u2500\u2500 main\n\u2502           \u251c\u2500\u2500 scala\n\u2502           \u2502   \u2514\u2500\u2500 com\n\u2502           \u2502       \u2514\u2500\u2500 example\n\u2502           \u2502           \u2514\u2500\u2500 Main.scala\n\u2502           \u2514\u2500\u2500 smithy\n\u2502               \u2514\u2500\u2500 preproccessed.smithy // The first smithy snippet shown above\n\u251c\u2500\u2500 project\n\u2502   \u251c\u2500\u2500 build.properties\n\u2502   \u2514\u2500\u2500 plugins.sbt\n\u2514\u2500\u2500 preprocessors\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 main\n            \u251c\u2500\u2500 resources\n            \u2502   \u2514\u2500\u2500 META-INF\n            \u2502       \u2514\u2500\u2500 services\n            \u2502           \u2514\u2500\u2500 software.amazon.smithy.build.ProjectionTransformer // The file which registers our ProjectionTransformer\n            \u2514\u2500\u2500 scala\n                \u2514\u2500\u2500 preprocessors\n                    \u2514\u2500\u2500 RemoveBeforeCodegenTransformation.scala // The ProjectionTransformer\n")),(0,o.kt)("h3",{id:"mill-2"},"Mill"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 build.sc\n\u251c\u2500\u2500 app\n\u2502   \u251c\u2500\u2500 src\n\u2502   \u2502   \u2514\u2500\u2500 com\n\u2502   \u2502       \u2514\u2500\u2500 example\n\u2502   \u2502           \u2514\u2500\u2500 Main.scala\n\u2502   \u2514\u2500\u2500 smithy\n\u2502       \u2514\u2500\u2500 preproccessed.smithy // The first smithy snippet shown above\n\u2514\u2500\u2500 preprocessors\n    \u2514\u2500\u2500 src\n    \u2502   \u2514\u2500\u2500 preprocessors\n    \u2502       \u2514\u2500\u2500 RemoveBeforeCodegenTransformation.scala // The ProjectionTransformer\n    \u251c\u2500\u2500 resources\n    \u2502   \u2514\u2500\u2500 META-INF\n    \u2502       \u2514\u2500\u2500 services\n    \u2502           \u2514\u2500\u2500 software.amazon.smithy.build.ProjectionTransformer // The file which registers our ProjectionTransformer\n")))}d.isMDXComponent=!0}}]);