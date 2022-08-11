"use strict";(self.webpackChunksmithy4s=self.webpackChunksmithy4s||[]).push([[27],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return u}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=i,h=c["".concat(s,".").concat(u)]||c[u]||m[u]||r;return n?a.createElement(h,o(o({ref:t},d),{},{components:n})):a.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7749:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],l={sidebar_label:"Customisation",title:"Customisation"},s=void 0,p={unversionedId:"codegen/customisation",id:"codegen/customisation",title:"Customisation",description:"Smithy4s is opinionated in what the generated code look like, there are a few things that can be tweaked.",source:"@site/../docs/target/jvm-2.13/mdoc/04-codegen/01-customisation.md",sourceDirName:"04-codegen",slug:"/codegen/customisation",permalink:"/smithy4s/docs/codegen/customisation",editUrl:"https://github.com/disneystreaming/smithy4s/edit/main/modules/docs/src/04-codegen/01-customisation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Customisation",title:"Customisation"},sidebar:"tutorialSidebar",previous:{title:"AWS",permalink:"/smithy4s/docs/protocols/aws/aws"},next:{title:"Unions and sealed traits",permalink:"/smithy4s/docs/codegen/unions"}},d=[{value:"Packed inputs",id:"packed-inputs",children:[],level:2},{value:"ADT Member Trait",id:"adt-member-trait",children:[],level:2},{value:"Specialized collection types",id:"specialized-collection-types",children:[],level:2},{value:"Refinements",id:"refinements",children:[],level:2},{value:"Unwrapping",id:"unwrapping",children:[],level:2}],m={toc:d};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Smithy4s is opinionated in what the generated code look like, there are a few things that can be tweaked."),(0,r.kt)("h2",{id:"packed-inputs"},"Packed inputs"),(0,r.kt)("p",null,"By default, Smithy4s generates methods the parameters of which map to the fields of the input structure of the corresponding operation."),(0,r.kt)("p",null,"For instance :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'service PackedInputsService {\n  version: "1.0.0",\n  operations: [PackedInputOperation]\n}\n\noperation PackedInputOperation {\n  input: PackedInput,\n}\n\nstructure PackedInput {\n    @required\n    a: String,\n    @required\n    b: String\n}\n')),(0,r.kt)("p",null,"leads to something conceptually equivalent to :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait PackedInputServiceGen[F[_]] {\n\n  def packedInputOperation(a: String, b: String) : F[Unit]\n\n}\n")),(0,r.kt)("p",null,"It is however possible to annotate the service (or operation) definition with the ",(0,r.kt)("inlineCode",{parentName:"p"},"smithy4s.meta#packedInputs")," trait, in order for the rendered method to contain a single parameter, typed with actual input case class of the operation."),(0,r.kt)("p",null,"For instance :"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'use smithy4s.meta#packedInputs\n\n@packedInputs\nservice PackedInputsService {\n  version: "1.0.0",\n  operations: [PackedInputOperation]\n}\n')),(0,r.kt)("p",null,"will produce the following Scala code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"trait PackedInputServiceGen[F[_]] {\n\n  def packedInputOperation(input: PackedInput) : F[Unit]\n\n}\n")),(0,r.kt)("h2",{id:"adt-member-trait"},"ADT Member Trait"),(0,r.kt)("p",null,"The default behavior of Smithy4s when rendering unions that target structures is to render the structure\nin a separate file from the union that targets it. This makes sense if the structure is used in other\ncontexts other than the union. However, it also causes an extra level of nesting within the union.\nThis is because the union will create another case class to contain your structure case class."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"union OrderType {\n  inStore: InStoreOrder\n}\n\nstructure InStoreOrder {\n    @required\n    id: OrderNumber,\n    locationId: String\n}\n")),(0,r.kt)("p",null,"Would render the following scala code:"),(0,r.kt)("p",null,"OrderType.scala:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait OrderType extends scala.Product with scala.Serializable\ncase class InStoreCase(inStore: InStoreOrder) extends OrderType\n")),(0,r.kt)("p",null,"InStoreOrder.scala:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"case class InStoreOrder(id: OrderNumber, locationId: Option[String] = None)\n")),(0,r.kt)("p",null,"The sealed hierarchy ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderType")," has a member named ",(0,r.kt)("inlineCode",{parentName:"p"},"InStoreCase"),". This is because\n",(0,r.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," is rendered in a separate file and ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderType")," is sealed."),(0,r.kt)("p",null,"However, adding the ",(0,r.kt)("inlineCode",{parentName:"p"},"adtMember")," trait to the ",(0,r.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," structure changes this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"union OrderType {\n  inStore: InStoreOrder\n}\n\n@adtMember(OrderType) // added the adtMember trait here\nstructure InStoreOrder {\n    @required\n    id: OrderNumber,\n    locationId: String\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"sealed trait OrderType extends scala.Product with scala.Serializable\ncase class InStoreOrder(id: OrderNumber, locationId: Option[String] = None) extends OrderType\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"IsStoreOrder")," class has now been updated to be rendered directly as a member of the ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderType"),"\nsealed hierarchy."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The ",(0,r.kt)("inlineCode",{parentName:"em"},"adtMember")," trait can be applied to any structure as long as said structure is targeted by EXACTLY ONE union."),"\nThis means it must be targeted by the union that is provided as parameter to the adtMember trait.\nThis constraint is fulfilled above because ",(0,r.kt)("inlineCode",{parentName:"p"},"OrderType")," targets ",(0,r.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"InStoreOrder")," is\nannotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@adtMember(OrderType)"),".\nThe structure annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"adtMember")," (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"InStoreOrder"),") also must not be targeted by any other\nstructures or unions in the model. There is a validator that will make sure these requirements are met\nwhenever the ",(0,r.kt)("inlineCode",{parentName:"p"},"adtMember")," trait is in use."),(0,r.kt)("p",null,"Note: The ",(0,r.kt)("inlineCode",{parentName:"p"},"adtMember")," trait has NO impact on the serialization/deserialization behaviors of Smithy4s.\nThe only thing it changes is what the generated code looks like. This is accomplished by keeping the\nrendered schemas equivalent, even if the case class is rendered in a different place."),(0,r.kt)("h2",{id:"specialized-collection-types"},"Specialized collection types"),(0,r.kt)("p",null,"Smithy supports ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),", Smithy4s renders that to ",(0,r.kt)("inlineCode",{parentName:"p"},"List[A]")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Set[A]")," respectively. You can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@uniqueItems")," annotation on ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," which is equivalent to ",(0,r.kt)("inlineCode",{parentName:"p"},"set"),"."),(0,r.kt)("p",null,"Smithy4s has support for two specialized collection types: ",(0,r.kt)("inlineCode",{parentName:"p"},"Vector")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"IndexedSeq"),". The following examples show how to use them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"use smithy4s.meta#indexedSeq\nuse smithy4s.meta#vector\n\n@indexedSeq\nlist SomeIndexSeq {\n  member: String\n}\n\n@vector\nlist SomeVector {\n  member: String\n}\n")),(0,r.kt)("p",null,"Both annotations are only applicable on ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," shapes. You can't mix ",(0,r.kt)("inlineCode",{parentName:"p"},"@vector")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"@indexedSeq"),", and neither one can be used with ",(0,r.kt)("inlineCode",{parentName:"p"},"@uniqueItems"),"."),(0,r.kt)("h2",{id:"refinements"},"Refinements"),(0,r.kt)("p",null,"Refinements provide a mechanism for using types that you control inside the code generated by smithy4s. Creating a refinement for use in your application starts with creating a custom smithy trait that represents the refinement."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'namespace test\n\n@trait(selector: "string")\nstructure emailFormat {}\n')),(0,r.kt)("p",null,"This trait can now be used on ",(0,r.kt)("inlineCode",{parentName:"p"},"string")," shapes to indicate that they must match an email format."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"@emailFormat\nstring Email\n")),(0,r.kt)("p",null,"Now we need to tell smithy4s that we want to represent shapes annotated with ",(0,r.kt)("inlineCode",{parentName:"p"},"@emailFormat")," as a custom type that we define."),(0,r.kt)("p",null,"Given a custom email type such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'// Note, we recommend using a newtype library over a regular case class in most cases\n// But this is shown to simplify the example\ncase class Email(value: String)\nobject Email {\n\n  private def isValidEmail(value: String): Boolean = ???\n\n  def apply(value: String): Either[String, Email] =\n    if (isValidEmail(value)) Right(new Email(value))\n    else Left("Email is not valid")\n}\n')),(0,r.kt)("p",null,"Next, we will need to provide a way for smithy4s to understand how to construct and deconstruct our ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," type. We do this by defining an instance of a ",(0,r.kt)("inlineCode",{parentName:"p"},"RefinementProvider"),". Note that the ",(0,r.kt)("inlineCode",{parentName:"p"},"RefinementProvider")," we create MUST be ",(0,r.kt)("inlineCode",{parentName:"p"},"implicit"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},'// package myapp.types\nimport smithy4s._\n\ncase class Email(value: String)\nobject Email {\n\n  private def isValidEmail(value: String): Boolean = ???\n\n  def apply(value: String): Either[String, Email] =\n    if (isValidEmail(value)) Right(new Email(value))\n    else Left("Email is not valid")\n\n  // highlight-start\n  implicit val provider = Refinement.drivenBy[EmailFormat](\n    Email.apply, // Tells smithy4s how to create an Email (or get an error message) given a string\n    (e: Email) => e.value // Tells smithy4s how to get a string from an Email\n  )\n  // highlight-end\n}\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"EmailFormat")," type passed as a type parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"Refinement.drivenBy")," is the type that smithy4s generated from our ",(0,r.kt)("inlineCode",{parentName:"p"},"@emailFormat")," trait we defined in our smithy file earlier."))),(0,r.kt)("p",null,"Now, we just have one thing left to do: tell smithy4s where to find our custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," type. We do this using a trait called ",(0,r.kt)("inlineCode",{parentName:"p"},"smithy4s.meta#refinement"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'use smithy4s.meta#refinement\n\napply test#emailFormat @refinement(\n  targetType: "myapp.types.Email"\n)\n')),(0,r.kt)("p",null,"Here we are applying the refinement trait to our ",(0,r.kt)("inlineCode",{parentName:"p"},"emailFormat")," trait we defined earlier. We are providing the ",(0,r.kt)("inlineCode",{parentName:"p"},"targetType")," which is our ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," case class we defined. "),(0,r.kt)("p",null,"Smithy4s will now be able to update how it does code generation to reference our custom ",(0,r.kt)("inlineCode",{parentName:"p"},"Email")," type."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If the provider was not in the companion object of our ",(0,r.kt)("inlineCode",{parentName:"p"},"targetType"),", we would need to provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"providerImport")," to the ",(0,r.kt)("inlineCode",{parentName:"p"},"refinement")," trait\nso that smithy4s would be able to find it. For example:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'use smithy4s.meta#refinement\n\napply test#emailFormat @refinement(\n  targetType: "myapp.types.Email",\n  providerImport: "myapp.types.providers._"\n)\n')),(0,r.kt)("p",{parentName:"div"},"Whether the provider is in the companion object or not, it must be ",(0,r.kt)("inlineCode",{parentName:"p"},"implicit"),"."))),(0,r.kt)("h2",{id:"unwrapping"},"Unwrapping"),(0,r.kt)("p",null,"By default, smithy4s will wrap all standalone primitive types in a Newtype. A standalone primitive type is one that is defined like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"string Email // standalone primitive\n\nstructure Test {\n  email: Email,\n  other: String // not a standalone primitive\n}\n")),(0,r.kt)("p",null,"Given this example, smithy4s would generate something like the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Test(email: Email, other: String)\n")),(0,r.kt)("p",null,"This wrapping may be undesirable in some circumstances. As such, we've provided the ",(0,r.kt)("inlineCode",{parentName:"p"},"smithy4s.meta#unwrap")," trait. This trait tells the smithy4s code generation to not wrap these types in a newtype when they are used."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},"use smithy4s.meta#unwrap\n\n@unwrap\nstring Email\n\nstructure Test {\n  email: Email,\n  other: String\n}\n")),(0,r.kt)("p",null,"This would now generate something like:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scala"},"final case class Test(email: String, other: String)\n")),(0,r.kt)("p",null,"This can be particularly useful when working with refinement types (see above for details on refinements). By default, any type that is ",(0,r.kt)("inlineCode",{parentName:"p"},"refined")," will be generated inside of a newtype. If you don't want this, you can mark the type with the ",(0,r.kt)("inlineCode",{parentName:"p"},"unwrap")," trait."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'@trait(selector: "string")\nstructure emailFormat {}\n\n@emailFormat\n@unwrap\nstring Email\n')),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"By default, smithy4s renders collection types as unwrapped EXCEPT when the collection has been refined. In this case, the collection will be rendered within a newtype by default. If you wish your refined collection be rendered unwrapped, you can accomplish this using the same ",(0,r.kt)("inlineCode",{parentName:"p"},"@unwrap")," trait annotation on it."))))}c.isMDXComponent=!0}}]);