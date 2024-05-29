"use strict";(self.webpackChunk_feely_storybook=self.webpackChunk_feely_storybook||[]).push([[8822],{"../../node_modules/@radix-ui/react-label/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{b:()=>$b73a6c6685e72184$export$be92b6f5f03c0fe9});var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs");const $b73a6c6685e72184$export$b04be29aa201d4f5=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(((props,forwardedRef)=>(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_radix_ui_react_primitive__WEBPACK_IMPORTED_MODULE_1__.sG.label,(0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__.A)({},props,{ref:forwardedRef,onMouseDown:event=>{var _props$onMouseDown;null===(_props$onMouseDown=props.onMouseDown)||void 0===_props$onMouseDown||_props$onMouseDown.call(props,event),!event.defaultPrevented&&event.detail>1&&event.preventDefault()}})))),$b73a6c6685e72184$export$be92b6f5f03c0fe9=$b73a6c6685e72184$export$b04be29aa201d4f5},"../../packages/ui/components/popover/popover.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_popover__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/ui/components/popover/popover.tsx"),_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../packages/ui/components/button/button.tsx"),_input__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/ui/components/input/input.tsx"),_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/ui/components/label/label.tsx"),__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement;const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Popover",component:_popover__WEBPACK_IMPORTED_MODULE_1__.AM,tags:["autodocs"],argTypes:{},parameters:{layout:"centered",docs:{description:{component:"Displays rich content in a portal, triggered by a button."}},design:{type:"figma",url:"https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-feely---design-system?node-id=540-8871&t=nua4UmG9Iu1hfUAm-1"}}};var Default={render:function render(args){return __jsx(_popover__WEBPACK_IMPORTED_MODULE_1__.AM,args,__jsx(_popover__WEBPACK_IMPORTED_MODULE_1__.Wv,{asChild:!0},__jsx(_button__WEBPACK_IMPORTED_MODULE_2__.$,{variant:"secondary"},"Open popover")),__jsx(_popover__WEBPACK_IMPORTED_MODULE_1__.hl,{className:"w-80"},__jsx("div",{className:"grid gap-4"},__jsx("div",{className:"grid gap-2"},__jsx("div",{className:"grid grid-cols-3 items-center gap-4"},__jsx(_label__WEBPACK_IMPORTED_MODULE_3__.J,{htmlFor:"width"},"Width"),__jsx(_input__WEBPACK_IMPORTED_MODULE_4__.p,{id:"width",defaultValue:"100%",className:"col-span-2"})),__jsx("div",{className:"grid grid-cols-3 items-center gap-4"},__jsx(_label__WEBPACK_IMPORTED_MODULE_3__.J,{htmlFor:"maxWidth"},"Max. width"),__jsx(_input__WEBPACK_IMPORTED_MODULE_4__.p,{id:"maxWidth",defaultValue:"300px",className:"col-span-2"})),__jsx("div",{className:"grid grid-cols-3 items-center gap-4"},__jsx(_label__WEBPACK_IMPORTED_MODULE_3__.J,{htmlFor:"height"},"Height"),__jsx(_input__WEBPACK_IMPORTED_MODULE_4__.p,{id:"height",defaultValue:"25px",className:"col-span-2"})),__jsx("div",{className:"grid grid-cols-3 items-center gap-4"},__jsx(_label__WEBPACK_IMPORTED_MODULE_3__.J,{htmlFor:"maxHeight"},"Max. height"),__jsx(_input__WEBPACK_IMPORTED_MODULE_4__.p,{id:"maxHeight",defaultValue:"none",className:"col-span-2"}))))))},args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <Popover {...args}>\n      <PopoverTrigger asChild>\n        <Button variant="secondary">Open popover</Button>\n      </PopoverTrigger>\n      <PopoverContent className="w-80">\n        <div className="grid gap-4">\n          <div className="grid gap-2">\n            <div className="grid grid-cols-3 items-center gap-4">\n              <Label htmlFor="width">Width</Label>\n              <Input id="width" defaultValue="100%" className="col-span-2" />\n            </div>\n            <div className="grid grid-cols-3 items-center gap-4">\n              <Label htmlFor="maxWidth">Max. width</Label>\n              <Input id="maxWidth" defaultValue="300px" className="col-span-2" />\n            </div>\n            <div className="grid grid-cols-3 items-center gap-4">\n              <Label htmlFor="height">Height</Label>\n              <Input id="height" defaultValue="25px" className="col-span-2" />\n            </div>\n            <div className="grid grid-cols-3 items-center gap-4">\n              <Label htmlFor="maxHeight">Max. height</Label>\n              <Input id="maxHeight" defaultValue="none" className="col-span-2" />\n            </div>\n          </div>\n        </div>\n      </PopoverContent>\n    </Popover>,\n  args: {}\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../packages/lib/twMerge.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.Q)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}},"../../packages/ui/components/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Button,r:()=>buttonVariants});var _Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-slot/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/class-variance-authority/dist/index.esm.js"),_feely_lib_twMerge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/lib/twMerge.ts"),_excluded=["className","variant","icon","asChild","title"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,buttonVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("button-component",{variants:{variant:{primary:"button-primary bg-brand",secondary:"button-secondary",text:"button-text",link:"button-link",danger:"button-danger"},icon:{false:"",true:"icon-button"}},defaultVariants:{variant:"primary",icon:!1}}),Button=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,variant=_ref.variant,icon=_ref.icon,_ref$asChild=_ref.asChild,asChild=void 0!==_ref$asChild&&_ref$asChild,title=_ref.title,props=(0,_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),Comp=asChild?_radix_ui_react_slot__WEBPACK_IMPORTED_MODULE_3__.DX:"button",buttonContent=title||props.children;return __jsx(Comp,(0,_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({className:(0,_feely_lib_twMerge__WEBPACK_IMPORTED_MODULE_5__.cn)(buttonVariants({variant,icon,className})),ref},props),buttonContent)}));Button.displayName="Button",Button.__docgenInfo={description:"",methods:[],displayName:"Button",props:{asChild:{defaultValue:{value:"false",computed:!1},required:!1}}}},"../../packages/ui/components/input/input.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{p:()=>Input});var _Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_feely_lib_twMerge__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../packages/lib/twMerge.ts"),_excluded=["className","type"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Input=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,type=_ref.type,props=(0,_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_1__.A)(_ref,_excluded);return __jsx("input",(0,_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__.A)({type,className:(0,_feely_lib_twMerge__WEBPACK_IMPORTED_MODULE_3__.cn)("input-component",className),ref},props))}));Input.displayName="Input",Input.__docgenInfo={description:"",methods:[],displayName:"Input"}},"../../packages/ui/components/label/label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>Label});var _Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@radix-ui/react-label/dist/index.mjs"),class_variance_authority__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/class-variance-authority/dist/index.esm.js"),_feely_lib_twMerge__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("../../packages/lib/twMerge.ts"),_excluded=["className"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,labelVariants=(0,class_variance_authority__WEBPACK_IMPORTED_MODULE_1__.F)("label-component"),Label=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return __jsx(_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.b,(0,_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_4__.A)({ref,className:(0,_feely_lib_twMerge__WEBPACK_IMPORTED_MODULE_5__.cn)(labelVariants(),className)},props))}));Label.displayName=_radix_ui_react_label__WEBPACK_IMPORTED_MODULE_3__.b.displayName,Label.__docgenInfo={description:"",methods:[]}},"../../packages/ui/components/popover/popover.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AM:()=>Popover,Wv:()=>PopoverTrigger,hl:()=>PopoverContent});var _Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../node_modules/@radix-ui/react-popover/dist/index.mjs"),_feely_lib_twMerge__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("../../packages/lib/twMerge.ts"),_excluded=["className","align","sideOffset"],__jsx=react__WEBPACK_IMPORTED_MODULE_0__.createElement,Popover=_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.bL,PopoverTrigger=_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.l9,PopoverContent=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((function(_ref,ref){var className=_ref.className,_ref$align=_ref.align,align=void 0===_ref$align?"center":_ref$align,_ref$sideOffset=_ref.sideOffset,sideOffset=void 0===_ref$sideOffset?4:_ref$sideOffset,props=(0,_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return __jsx(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.ZL,null,__jsx(_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.UC,(0,_Users_kkratter_Desktop_kkratter_Progetti_Feely_feely_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_3__.A)({ref,align,sideOffset,className:(0,_feely_lib_twMerge__WEBPACK_IMPORTED_MODULE_4__.cn)("popover-component data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className)},props)))}));PopoverContent.displayName=_radix_ui_react_popover__WEBPACK_IMPORTED_MODULE_1__.UC.displayName,PopoverContent.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"center"',computed:!1},required:!1},sideOffset:{defaultValue:{value:"4",computed:!1},required:!1}}}},"../../node_modules/class-variance-authority/dist/index.esm.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>cva});const falsyToString=value=>"boolean"==typeof value?"".concat(value):0===value?"0":value,cx=function(){for(var _len=arguments.length,classes=new Array(_len),_key=0;_key<_len;_key++)classes[_key]=arguments[_key];return classes.flat(1/0).filter(Boolean).join(" ")},cva=(base,config)=>props=>{var ref;if(null==(null==config?void 0:config.variants))return cx(base,null==props?void 0:props.class,null==props?void 0:props.className);const{variants,defaultVariants}=config,getVariantClassNames=Object.keys(variants).map((variant=>{const variantProp=null==props?void 0:props[variant],defaultVariantProp=null==defaultVariants?void 0:defaultVariants[variant];if(null===variantProp)return null;const variantKey=falsyToString(variantProp)||falsyToString(defaultVariantProp);return variants[variant][variantKey]})),propsWithoutUndefined=props&&Object.entries(props).reduce(((acc,param)=>{let[key,value]=param;return void 0===value||(acc[key]=value),acc}),{}),getCompoundVariantClassNames=null==config||null===(ref=config.compoundVariants)||void 0===ref?void 0:ref.reduce(((acc,param1)=>{let{class:cvClass,className:cvClassName,...compoundVariantOptions}=param1;return Object.entries(compoundVariantOptions).every((param=>{let[key,value]=param;return Array.isArray(value)?value.includes({...defaultVariants,...propsWithoutUndefined}[key]):{...defaultVariants,...propsWithoutUndefined}[key]===value}))?[...acc,cvClass,cvClassName]:acc}),[]);return cx(base,getVariantClassNames,getCompoundVariantClassNames,null==props?void 0:props.class,null==props?void 0:props.className)}}}]);