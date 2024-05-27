"use strict";(self.webpackChunk_feely_storybook=self.webpackChunk_feely_storybook||[]).push([[8770],{"../../packages/ui/components/alert-dialog/alert-dialog.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>alert_dialog_stories});var react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),dist=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_dialog_dist=__webpack_require__("../../node_modules/@radix-ui/react-dialog/dist/index.mjs"),primitive_dist=__webpack_require__("../../node_modules/@radix-ui/primitive/dist/index.mjs"),react_slot_dist=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs");__webpack_require__("../../node_modules/console-browserify/index.js");const[$905f4ae918aab1aa$var$createAlertDialogContext,$905f4ae918aab1aa$export$b8891880751c2c5b]=(0,dist.A)("AlertDialog",[react_dialog_dist.Hs]),$905f4ae918aab1aa$var$useDialogScope=(0,react_dialog_dist.Hs)(),$905f4ae918aab1aa$export$de466dd8317b0b75=props=>{const{__scopeAlertDialog,...alertDialogProps}=props,dialogScope=$905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);return(0,react.createElement)(react_dialog_dist.bL,(0,esm_extends.A)({},dialogScope,alertDialogProps,{modal:!0}))},$905f4ae918aab1aa$export$6edd7a623ef0f40b=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAlertDialog,...triggerProps}=props,dialogScope=$905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);return(0,react.createElement)(react_dialog_dist.l9,(0,esm_extends.A)({},dialogScope,triggerProps,{ref:forwardedRef}))})),$905f4ae918aab1aa$export$660f2bfdb986706c=props=>{const{__scopeAlertDialog,...portalProps}=props,dialogScope=$905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);return(0,react.createElement)(react_dialog_dist.ZL,(0,esm_extends.A)({},dialogScope,portalProps))},$905f4ae918aab1aa$export$a707a4895ce23256=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAlertDialog,...overlayProps}=props,dialogScope=$905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);return(0,react.createElement)(react_dialog_dist.hJ,(0,esm_extends.A)({},dialogScope,overlayProps,{ref:forwardedRef}))})),[$905f4ae918aab1aa$var$AlertDialogContentProvider,$905f4ae918aab1aa$var$useAlertDialogContentContext]=$905f4ae918aab1aa$var$createAlertDialogContext("AlertDialogContent"),$905f4ae918aab1aa$export$94e6af45f0af4efd=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAlertDialog,children,...contentProps}=props,dialogScope=$905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog),contentRef=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,contentRef),cancelRef=(0,react.useRef)(null);return(0,react.createElement)(react_dialog_dist.G$,{contentName:"AlertDialogContent",titleName:$905f4ae918aab1aa$var$TITLE_NAME,docsSlug:"alert-dialog"},(0,react.createElement)($905f4ae918aab1aa$var$AlertDialogContentProvider,{scope:__scopeAlertDialog,cancelRef},(0,react.createElement)(react_dialog_dist.UC,(0,esm_extends.A)({role:"alertdialog"},dialogScope,contentProps,{ref:composedRefs,onOpenAutoFocus:(0,primitive_dist.m)(contentProps.onOpenAutoFocus,(event=>{var _cancelRef$current;event.preventDefault(),null===(_cancelRef$current=cancelRef.current)||void 0===_cancelRef$current||_cancelRef$current.focus({preventScroll:!0})})),onPointerDownOutside:event=>event.preventDefault(),onInteractOutside:event=>event.preventDefault()}),(0,react.createElement)(react_slot_dist.xV,null,children),!1)))})),$905f4ae918aab1aa$var$TITLE_NAME="AlertDialogTitle",$905f4ae918aab1aa$export$225e0da62d314b7=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAlertDialog,...titleProps}=props,dialogScope=$905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);return(0,react.createElement)(react_dialog_dist.hE,(0,esm_extends.A)({},dialogScope,titleProps,{ref:forwardedRef}))})),$905f4ae918aab1aa$export$a23b55cde55ad9a5=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAlertDialog,...descriptionProps}=props,dialogScope=$905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);return(0,react.createElement)(react_dialog_dist.VY,(0,esm_extends.A)({},dialogScope,descriptionProps,{ref:forwardedRef}))})),$905f4ae918aab1aa$export$b454f818c58ee85d=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAlertDialog,...actionProps}=props,dialogScope=$905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog);return(0,react.createElement)(react_dialog_dist.bm,(0,esm_extends.A)({},dialogScope,actionProps,{ref:forwardedRef}))})),$905f4ae918aab1aa$export$2f67a923571aaea0=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeAlertDialog,...cancelProps}=props,{cancelRef}=$905f4ae918aab1aa$var$useAlertDialogContentContext("AlertDialogCancel",__scopeAlertDialog),dialogScope=$905f4ae918aab1aa$var$useDialogScope(__scopeAlertDialog),ref=(0,react_compose_refs_dist.s)(forwardedRef,cancelRef);return(0,react.createElement)(react_dialog_dist.bm,(0,esm_extends.A)({},dialogScope,cancelProps,{ref}))})),$905f4ae918aab1aa$export$be92b6f5f03c0fe9=$905f4ae918aab1aa$export$de466dd8317b0b75,$905f4ae918aab1aa$export$41fb9f06171c75f4=$905f4ae918aab1aa$export$6edd7a623ef0f40b,$905f4ae918aab1aa$export$602eac185826482c=$905f4ae918aab1aa$export$660f2bfdb986706c,$905f4ae918aab1aa$export$c6fdb837b070b4ff=$905f4ae918aab1aa$export$a707a4895ce23256,$905f4ae918aab1aa$export$7c6e2c02157bb7d2=$905f4ae918aab1aa$export$94e6af45f0af4efd,$905f4ae918aab1aa$export$e19cd5f9376f8cee=$905f4ae918aab1aa$export$b454f818c58ee85d,$905f4ae918aab1aa$export$848c9b7ead0df967=$905f4ae918aab1aa$export$2f67a923571aaea0,$905f4ae918aab1aa$export$f99233281efd08a0=$905f4ae918aab1aa$export$225e0da62d314b7,$905f4ae918aab1aa$export$393edc798c47379d=$905f4ae918aab1aa$export$a23b55cde55ad9a5;var twMerge=__webpack_require__("../../packages/lib/twMerge.ts"),button_button=__webpack_require__("../../packages/ui/components/button/button.tsx"),_excluded=["className","children"],_excluded2=["className"],_excluded3=["className"],_excluded4=["className"],_excluded5=["className"],_excluded6=["className"],_excluded7=["className"],_excluded8=["className"],__jsx=react.createElement,AlertDialog=$905f4ae918aab1aa$export$be92b6f5f03c0fe9,AlertDialogTrigger=$905f4ae918aab1aa$export$41fb9f06171c75f4,AlertDialogPortal=$905f4ae918aab1aa$export$602eac185826482c,AlertDialogOverlay=react.forwardRef((function(_ref,ref){var className=_ref.className,props=(_ref.children,(0,objectWithoutProperties.A)(_ref,_excluded));return __jsx($905f4ae918aab1aa$export$c6fdb837b070b4ff,(0,esm_extends.A)({className:(0,twMerge.cn)("alert-dialog-overlay data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",className)},props,{ref}))}));AlertDialogOverlay.displayName=$905f4ae918aab1aa$export$c6fdb837b070b4ff.displayName;var AlertDialogContent=react.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,objectWithoutProperties.A)(_ref2,_excluded2);return __jsx(AlertDialogPortal,null,__jsx(AlertDialogOverlay,null),__jsx($905f4ae918aab1aa$export$7c6e2c02157bb7d2,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("alert-dialog-content data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]",className)},props)))}));AlertDialogContent.displayName=$905f4ae918aab1aa$export$7c6e2c02157bb7d2.displayName;var AlertDialogHeader=function AlertDialogHeader(_ref3){var className=_ref3.className,props=(0,objectWithoutProperties.A)(_ref3,_excluded3);return __jsx("div",(0,esm_extends.A)({className:(0,twMerge.cn)("alert-dialog-header",className)},props))};AlertDialogHeader.displayName="AlertDialogHeader",AlertDialogHeader.displayName="AlertDialogHeader";var AlertDialogFooter=function AlertDialogFooter(_ref4){var className=_ref4.className,props=(0,objectWithoutProperties.A)(_ref4,_excluded4);return __jsx("div",(0,esm_extends.A)({className:(0,twMerge.cn)("alert-dialog-footer",className)},props))};AlertDialogFooter.displayName="AlertDialogFooter",AlertDialogFooter.displayName="AlertDialogFooter";var AlertDialogTitle=react.forwardRef((function(_ref5,ref){var className=_ref5.className,props=(0,objectWithoutProperties.A)(_ref5,_excluded5);return __jsx($905f4ae918aab1aa$export$f99233281efd08a0,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("alert-dialog-title",className)},props))}));AlertDialogTitle.displayName=$905f4ae918aab1aa$export$f99233281efd08a0.displayName;var AlertDialogDescription=react.forwardRef((function(_ref6,ref){var className=_ref6.className,props=(0,objectWithoutProperties.A)(_ref6,_excluded6);return __jsx($905f4ae918aab1aa$export$393edc798c47379d,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("alert-dialog-description",className)},props))}));AlertDialogDescription.displayName=$905f4ae918aab1aa$export$393edc798c47379d.displayName;var AlertDialogAction=react.forwardRef((function(_ref7,ref){var className=_ref7.className,props=(0,objectWithoutProperties.A)(_ref7,_excluded7);return __jsx($905f4ae918aab1aa$export$e19cd5f9376f8cee,(0,esm_extends.A)({ref,className:(0,twMerge.cn)((0,button_button.r)({variant:"primary"}),className)},props))}));AlertDialogAction.displayName=$905f4ae918aab1aa$export$e19cd5f9376f8cee.displayName;var AlertDialogCancel=react.forwardRef((function(_ref8,ref){var className=_ref8.className,props=(0,objectWithoutProperties.A)(_ref8,_excluded8);return __jsx($905f4ae918aab1aa$export$848c9b7ead0df967,(0,esm_extends.A)({ref,className:(0,twMerge.cn)((0,button_button.r)({variant:"secondary"}),"alert-dialog-cancel",className)},props))}));AlertDialogCancel.displayName=$905f4ae918aab1aa$export$848c9b7ead0df967.displayName,AlertDialogOverlay.__docgenInfo={description:"",methods:[]},AlertDialogContent.__docgenInfo={description:"",methods:[]},AlertDialogHeader.__docgenInfo={description:"",methods:[],displayName:"AlertDialogHeader"},AlertDialogFooter.__docgenInfo={description:"",methods:[],displayName:"AlertDialogFooter"},AlertDialogTitle.__docgenInfo={description:"",methods:[]},AlertDialogDescription.__docgenInfo={description:"",methods:[]},AlertDialogAction.__docgenInfo={description:"",methods:[]},AlertDialogCancel.__docgenInfo={description:"",methods:[]};var alert_dialog_stories_jsx=react.createElement;const alert_dialog_stories={title:"Components/AlertDialog",component:AlertDialog,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"A modal dialog that interrupts the user with important content and expects a response."}},design:{type:"figma",url:"https://www.figma.com/file/acdO58jx9zgGfkKu6htrx2/%F0%9F%94%B5-Fusillo-Design-System?type=design&node-id=482%3A9166&mode=design&t=F5zgbD2phu8xvUpj-1"}}};var Default={render:function render(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];return alert_dialog_stories_jsx(AlertDialog,args,alert_dialog_stories_jsx(AlertDialogTrigger,{asChild:!0},alert_dialog_stories_jsx(button_button.$,{variant:"secondary"},"Delete account")),alert_dialog_stories_jsx(AlertDialogContent,null,alert_dialog_stories_jsx(AlertDialogHeader,null,alert_dialog_stories_jsx(AlertDialogTitle,null,"Are you sure absolutely sure?"),alert_dialog_stories_jsx(AlertDialogDescription,null,"This action cannot be undone. This will permanently delete your account and remove your data from our servers.")),alert_dialog_stories_jsx(AlertDialogFooter,null,alert_dialog_stories_jsx(AlertDialogCancel,null,"Cancel"),alert_dialog_stories_jsx(AlertDialogAction,null,"Continue"))))},args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: (...args) => <AlertDialog {...args}>\n      <AlertDialogTrigger asChild>\n        <Button variant="secondary">Delete account</Button>\n      </AlertDialogTrigger>\n      <AlertDialogContent>\n        <AlertDialogHeader>\n          <AlertDialogTitle>Are you sure absolutely sure?</AlertDialogTitle>\n          <AlertDialogDescription>\n            This action cannot be undone. This will permanently delete your\n            account and remove your data from our servers.\n          </AlertDialogDescription>\n        </AlertDialogHeader>\n        <AlertDialogFooter>\n          <AlertDialogCancel>Cancel</AlertDialogCancel>\n          <AlertDialogAction>Continue</AlertDialogAction>\n        </AlertDialogFooter>\n      </AlertDialogContent>\n    </AlertDialog>,\n  args: {}\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../packages/lib/twMerge.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.Q)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"../../packages/ui/components/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var _Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/class-variance-authority/dist/index.esm.js"),_feely_lib_twMerge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/lib/twMerge.ts"),_excluded=["className","variant","icon","asChild","title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("button-component",{variants:{variant:{primary:"button-primary bg-brand",secondary:"button-secondary",text:"button-text",link:"button-link",danger:"button-danger"},icon:{false:"",true:"icon-button"}},defaultVariants:{variant:"primary",icon:!1}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,icon=_ref.icon,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,title=_ref.title,props=(0,_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button",buttonContent=title||props.children;return __jsx(Comp,(0,_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({className:(0,_feely_lib_twMerge__WEBPACK_IMPORTED_MODULE_5__.cn)(buttonVariants({variant,icon,className})),ref},props),buttonContent)}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}}},"../../node_modules/class-variance-authority/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=function(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.flat(1/0).filter(Boolean).join(" ")},cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);