"use strict";(self.webpackChunk_feely_storybook=self.webpackChunk_feely_storybook||[]).push([[2870],{"../../packages/ui/components/menubar/menubar.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>menubar_stories});var react=__webpack_require__("../../node_modules/next/dist/compiled/react/index.js"),esm_extends=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/extends.js"),objectWithoutProperties=__webpack_require__("../../node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),dist=__webpack_require__("../../node_modules/@radix-ui/react-collection/dist/index.mjs"),react_direction_dist=__webpack_require__("../../node_modules/@radix-ui/react-direction/dist/index.mjs"),primitive_dist=__webpack_require__("../../node_modules/@radix-ui/primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("../../node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_context_dist=__webpack_require__("../../node_modules/@radix-ui/react-context/dist/index.mjs"),react_id_dist=__webpack_require__("../../node_modules/@radix-ui/react-id/dist/index.mjs"),react_menu_dist=__webpack_require__("../../node_modules/@radix-ui/react-menu/dist/index.mjs"),react_roving_focus_dist=__webpack_require__("../../node_modules/@radix-ui/react-roving-focus/dist/index.mjs"),react_primitive_dist=__webpack_require__("../../node_modules/@radix-ui/react-primitive/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("../../node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs"),jsx_runtime=__webpack_require__("../../node_modules/next/dist/compiled/react/jsx-runtime.js"),[Collection,useCollection,createCollectionScope]=(0,dist.N)("Menubar"),[createMenubarContext,createMenubarScope]=(0,react_context_dist.A)("Menubar",[createCollectionScope,react_roving_focus_dist.RG]),useMenuScope=(0,react_menu_dist.UE)(),useRovingFocusGroupScope=(0,react_roving_focus_dist.RG)(),[MenubarContextProvider,useMenubarContext]=createMenubarContext("Menubar"),Menubar=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,value:valueProp,onValueChange,defaultValue,loop=!0,dir,...menubarProps}=props,direction=(0,react_direction_dist.jH)(dir),rovingFocusGroupScope=useRovingFocusGroupScope(__scopeMenubar),[value="",setValue]=(0,react_use_controllable_state_dist.i)({prop:valueProp,onChange:onValueChange,defaultProp:defaultValue}),[currentTabStopId,setCurrentTabStopId]=react.useState(null);return(0,jsx_runtime.jsx)(MenubarContextProvider,{scope:__scopeMenubar,value,onMenuOpen:react.useCallback((value2=>{setValue(value2),setCurrentTabStopId(value2)}),[setValue]),onMenuClose:react.useCallback((()=>setValue("")),[setValue]),onMenuToggle:react.useCallback((value2=>{setValue((prevValue=>Boolean(prevValue)?"":value2)),setCurrentTabStopId(value2)}),[setValue]),dir:direction,loop,children:(0,jsx_runtime.jsx)(Collection.Provider,{scope:__scopeMenubar,children:(0,jsx_runtime.jsx)(Collection.Slot,{scope:__scopeMenubar,children:(0,jsx_runtime.jsx)(react_roving_focus_dist.bL,{asChild:!0,...rovingFocusGroupScope,orientation:"horizontal",loop,dir:direction,currentTabStopId,onCurrentTabStopIdChange:setCurrentTabStopId,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.div,{role:"menubar",...menubarProps,ref:forwardedRef})})})})})}));Menubar.displayName="Menubar";var[MenubarMenuProvider,useMenubarMenuContext]=createMenubarContext("MenubarMenu"),MenubarMenu=props=>{const{__scopeMenubar,value:valueProp,...menuProps}=props,autoValue=(0,react_id_dist.B)(),value=valueProp||autoValue||"LEGACY_REACT_AUTO_VALUE",context=useMenubarContext("MenubarMenu",__scopeMenubar),menuScope=useMenuScope(__scopeMenubar),triggerRef=react.useRef(null),wasKeyboardTriggerOpenRef=react.useRef(!1),open=context.value===value;return react.useEffect((()=>{open||(wasKeyboardTriggerOpenRef.current=!1)}),[open]),(0,jsx_runtime.jsx)(MenubarMenuProvider,{scope:__scopeMenubar,value,triggerId:(0,react_id_dist.B)(),triggerRef,contentId:(0,react_id_dist.B)(),wasKeyboardTriggerOpenRef,children:(0,jsx_runtime.jsx)(react_menu_dist.bL,{...menuScope,open,onOpenChange:open2=>{open2||context.onMenuClose()},modal:!1,dir:context.dir,...menuProps})})};MenubarMenu.displayName="MenubarMenu";var MenubarTrigger=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,disabled=!1,...triggerProps}=props,rovingFocusGroupScope=useRovingFocusGroupScope(__scopeMenubar),menuScope=useMenuScope(__scopeMenubar),context=useMenubarContext("MenubarTrigger",__scopeMenubar),menuContext=useMenubarMenuContext("MenubarTrigger",__scopeMenubar),ref=react.useRef(null),composedRefs=(0,react_compose_refs_dist.s)(forwardedRef,ref,menuContext.triggerRef),[isFocused,setIsFocused]=react.useState(!1),open=context.value===menuContext.value;return(0,jsx_runtime.jsx)(Collection.ItemSlot,{scope:__scopeMenubar,value:menuContext.value,disabled,children:(0,jsx_runtime.jsx)(react_roving_focus_dist.q7,{asChild:!0,...rovingFocusGroupScope,focusable:!disabled,tabStopId:menuContext.value,children:(0,jsx_runtime.jsx)(react_menu_dist.Mz,{asChild:!0,...menuScope,children:(0,jsx_runtime.jsx)(react_primitive_dist.sG.button,{type:"button",role:"menuitem",id:menuContext.triggerId,"aria-haspopup":"menu","aria-expanded":open,"aria-controls":open?menuContext.contentId:void 0,"data-highlighted":isFocused?"":void 0,"data-state":open?"open":"closed","data-disabled":disabled?"":void 0,disabled,...triggerProps,ref:composedRefs,onPointerDown:(0,primitive_dist.m)(props.onPointerDown,(event=>{disabled||0!==event.button||!1!==event.ctrlKey||(context.onMenuOpen(menuContext.value),open||event.preventDefault())})),onPointerEnter:(0,primitive_dist.m)(props.onPointerEnter,(()=>{Boolean(context.value)&&!open&&(context.onMenuOpen(menuContext.value),ref.current?.focus())})),onKeyDown:(0,primitive_dist.m)(props.onKeyDown,(event=>{disabled||(["Enter"," "].includes(event.key)&&context.onMenuToggle(menuContext.value),"ArrowDown"===event.key&&context.onMenuOpen(menuContext.value),["Enter"," ","ArrowDown"].includes(event.key)&&(menuContext.wasKeyboardTriggerOpenRef.current=!0,event.preventDefault()))})),onFocus:(0,primitive_dist.m)(props.onFocus,(()=>setIsFocused(!0))),onBlur:(0,primitive_dist.m)(props.onBlur,(()=>setIsFocused(!1)))})})})})}));MenubarTrigger.displayName="MenubarTrigger";var MenubarPortal=props=>{const{__scopeMenubar,...portalProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.ZL,{...menuScope,...portalProps})};MenubarPortal.displayName="MenubarPortal";var MenubarContent=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,align="start",...contentProps}=props,menuScope=useMenuScope(__scopeMenubar),context=useMenubarContext("MenubarContent",__scopeMenubar),menuContext=useMenubarMenuContext("MenubarContent",__scopeMenubar),getItems=useCollection(__scopeMenubar),hasInteractedOutsideRef=react.useRef(!1);return(0,jsx_runtime.jsx)(react_menu_dist.UC,{id:menuContext.contentId,"aria-labelledby":menuContext.triggerId,"data-radix-menubar-content":"",...menuScope,...contentProps,ref:forwardedRef,align,onCloseAutoFocus:(0,primitive_dist.m)(props.onCloseAutoFocus,(event=>{Boolean(context.value)||hasInteractedOutsideRef.current||menuContext.triggerRef.current?.focus(),hasInteractedOutsideRef.current=!1,event.preventDefault()})),onFocusOutside:(0,primitive_dist.m)(props.onFocusOutside,(event=>{const target=event.target;getItems().some((item=>item.ref.current?.contains(target)))&&event.preventDefault()})),onInteractOutside:(0,primitive_dist.m)(props.onInteractOutside,(()=>{hasInteractedOutsideRef.current=!0})),onEntryFocus:event=>{menuContext.wasKeyboardTriggerOpenRef.current||event.preventDefault()},onKeyDown:(0,primitive_dist.m)(props.onKeyDown,(event=>{if(["ArrowRight","ArrowLeft"].includes(event.key)){const target=event.target,targetIsSubTrigger=target.hasAttribute("data-radix-menubar-subtrigger"),isKeyDownInsideSubMenu=target.closest("[data-radix-menubar-content]")!==event.currentTarget,isPrevKey=("rtl"===context.dir?"ArrowRight":"ArrowLeft")===event.key;if(!isPrevKey&&targetIsSubTrigger)return;if(isKeyDownInsideSubMenu&&isPrevKey)return;let candidateValues=getItems().filter((item=>!item.disabled)).map((item=>item.value));isPrevKey&&candidateValues.reverse();const currentIndex=candidateValues.indexOf(menuContext.value);candidateValues=context.loop?function wrapArray(array,startIndex){return array.map(((_,index)=>array[(startIndex+index)%array.length]))}(candidateValues,currentIndex+1):candidateValues.slice(currentIndex+1);const[nextValue]=candidateValues;nextValue&&context.onMenuOpen(nextValue)}}),{checkForDefaultPrevented:!1}),style:{...props.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})}));MenubarContent.displayName="MenubarContent";var MenubarGroup=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...groupProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.YJ,{...menuScope,...groupProps,ref:forwardedRef})}));MenubarGroup.displayName="MenubarGroup";var MenubarLabel=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...labelProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.JU,{...menuScope,...labelProps,ref:forwardedRef})}));MenubarLabel.displayName="MenubarLabel";var MenubarItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...itemProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.q7,{...menuScope,...itemProps,ref:forwardedRef})}));MenubarItem.displayName="MenubarItem";var MenubarCheckboxItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...checkboxItemProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.H_,{...menuScope,...checkboxItemProps,ref:forwardedRef})}));MenubarCheckboxItem.displayName="MenubarCheckboxItem";var MenubarRadioGroup=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...radioGroupProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.z6,{...menuScope,...radioGroupProps,ref:forwardedRef})}));MenubarRadioGroup.displayName="MenubarRadioGroup";var MenubarRadioItem=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...radioItemProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.hN,{...menuScope,...radioItemProps,ref:forwardedRef})}));MenubarRadioItem.displayName="MenubarRadioItem";var MenubarItemIndicator=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...itemIndicatorProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.VF,{...menuScope,...itemIndicatorProps,ref:forwardedRef})}));MenubarItemIndicator.displayName="MenubarItemIndicator";var MenubarSeparator=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...separatorProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.wv,{...menuScope,...separatorProps,ref:forwardedRef})}));MenubarSeparator.displayName="MenubarSeparator";var MenubarArrow=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...arrowProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.i3,{...menuScope,...arrowProps,ref:forwardedRef})}));MenubarArrow.displayName="MenubarArrow";var MenubarSub=props=>{const{__scopeMenubar,children,open:openProp,onOpenChange,defaultOpen}=props,menuScope=useMenuScope(__scopeMenubar),[open=!1,setOpen]=(0,react_use_controllable_state_dist.i)({prop:openProp,defaultProp:defaultOpen,onChange:onOpenChange});return(0,jsx_runtime.jsx)(react_menu_dist.Pb,{...menuScope,open,onOpenChange:setOpen,children})};MenubarSub.displayName="MenubarSub";var MenubarSubTrigger=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...subTriggerProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.ZP,{"data-radix-menubar-subtrigger":"",...menuScope,...subTriggerProps,ref:forwardedRef})}));MenubarSubTrigger.displayName="MenubarSubTrigger";var MenubarSubContent=react.forwardRef(((props,forwardedRef)=>{const{__scopeMenubar,...subContentProps}=props,menuScope=useMenuScope(__scopeMenubar);return(0,jsx_runtime.jsx)(react_menu_dist.G5,{...menuScope,"data-radix-menubar-content":"",...subContentProps,ref:forwardedRef,style:{...props.style,"--radix-menubar-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-menubar-content-available-width":"var(--radix-popper-available-width)","--radix-menubar-content-available-height":"var(--radix-popper-available-height)","--radix-menubar-trigger-width":"var(--radix-popper-anchor-width)","--radix-menubar-trigger-height":"var(--radix-popper-anchor-height)"}})}));MenubarSubContent.displayName="MenubarSubContent";var Root3=Menubar,Menu=MenubarMenu,Trigger=MenubarTrigger,Portal2=MenubarPortal,Content2=MenubarContent,Label2=MenubarLabel,Item3=MenubarItem,CheckboxItem2=MenubarCheckboxItem,RadioGroup2=MenubarRadioGroup,RadioItem2=MenubarRadioItem,ItemIndicator2=MenubarItemIndicator,Separator2=MenubarSeparator,Sub2=MenubarSub,SubTrigger2=MenubarSubTrigger,SubContent2=MenubarSubContent,twMerge=__webpack_require__("../../packages/lib/twMerge.ts"),chevron_right=__webpack_require__("../../node_modules/lucide-react/dist/esm/icons/chevron-right.js"),check=__webpack_require__("../../node_modules/lucide-react/dist/esm/icons/check.js"),circle=__webpack_require__("../../node_modules/lucide-react/dist/esm/icons/circle.js"),_excluded=["className"],_excluded2=["className"],_excluded3=["className","inset","children"],_excluded4=["className"],_excluded5=["className","align","alignOffset","sideOffset"],_excluded6=["className","inset"],_excluded7=["className","children","checked"],_excluded8=["className","children"],_excluded9=["className","inset"],_excluded10=["className"],_excluded11=["className"],__jsx=react.createElement,menubar_MenubarMenu=Menu,menubar_MenubarSub=Sub2,menubar_MenubarRadioGroup=RadioGroup2,menubar_Menubar=react.forwardRef((function(_ref,ref){var className=_ref.className,props=(0,objectWithoutProperties.A)(_ref,_excluded);return __jsx(Root3,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("menubar-component",className)},props))}));menubar_Menubar.displayName=Root3.displayName;var menubar_MenubarTrigger=react.forwardRef((function(_ref2,ref){var className=_ref2.className,props=(0,objectWithoutProperties.A)(_ref2,_excluded2);return __jsx(Trigger,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("menubar-trigger",className)},props))}));menubar_MenubarTrigger.displayName=Trigger.displayName;var menubar_MenubarSubTrigger=react.forwardRef((function(_ref3,ref){var className=_ref3.className,inset=_ref3.inset,children=_ref3.children,props=(0,objectWithoutProperties.A)(_ref3,_excluded3);return __jsx(SubTrigger2,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("menubar-subtrigger",inset&&"pl-8",className)},props),children,__jsx(chevron_right.A,null))}));menubar_MenubarSubTrigger.displayName=SubTrigger2.displayName;var menubar_MenubarSubContent=react.forwardRef((function(_ref4,ref){var className=_ref4.className,props=(0,objectWithoutProperties.A)(_ref4,_excluded4);return __jsx(SubContent2,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("menubar-subcontent data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className)},props))}));menubar_MenubarSubContent.displayName=SubContent2.displayName;var menubar_MenubarContent=react.forwardRef((function(_ref5,ref){var className=_ref5.className,_ref5$align=_ref5.align,align=void 0===_ref5$align?"start":_ref5$align,_ref5$alignOffset=_ref5.alignOffset,alignOffset=void 0===_ref5$alignOffset?-4:_ref5$alignOffset,_ref5$sideOffset=_ref5.sideOffset,sideOffset=void 0===_ref5$sideOffset?8:_ref5$sideOffset,props=(0,objectWithoutProperties.A)(_ref5,_excluded5);return __jsx(Portal2,null,__jsx(Content2,(0,esm_extends.A)({ref,align,alignOffset,sideOffset,className:(0,twMerge.cn)("menubar-content data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",className)},props)))}));menubar_MenubarContent.displayName=Content2.displayName;var menubar_MenubarItem=react.forwardRef((function(_ref6,ref){var className=_ref6.className,inset=_ref6.inset,props=(0,objectWithoutProperties.A)(_ref6,_excluded6);return __jsx(Item3,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("menubar-item",inset&&"pl-8",className)},props))}));menubar_MenubarItem.displayName=Item3.displayName;var menubar_MenubarCheckboxItem=react.forwardRef((function(_ref7,ref){var className=_ref7.className,children=_ref7.children,checked=_ref7.checked,props=(0,objectWithoutProperties.A)(_ref7,_excluded7);return __jsx(CheckboxItem2,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("menubar-checkbox-item",className),checked},props),__jsx("span",{className:"menubar-checkbox-item-span"},__jsx(ItemIndicator2,null,__jsx(check.A,{className:"menubar-checkbox-item-icon"}))),children)}));menubar_MenubarCheckboxItem.displayName=CheckboxItem2.displayName;var menubar_MenubarRadioItem=react.forwardRef((function(_ref8,ref){var className=_ref8.className,children=_ref8.children,props=(0,objectWithoutProperties.A)(_ref8,_excluded8);return __jsx(RadioItem2,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("menubar-radio-item",className)},props),__jsx("span",{className:"menubar-radio-item-span"},__jsx(ItemIndicator2,null,__jsx(circle.A,{className:"menubar-radio-item-icon"}))),children)}));menubar_MenubarRadioItem.displayName=RadioItem2.displayName;var menubar_MenubarLabel=react.forwardRef((function(_ref9,ref){var className=_ref9.className,inset=_ref9.inset,props=(0,objectWithoutProperties.A)(_ref9,_excluded9);return __jsx(Label2,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("menubar-label",inset&&"pl-8",className)},props))}));menubar_MenubarLabel.displayName=Label2.displayName;var menubar_MenubarSeparator=react.forwardRef((function(_ref10,ref){var className=_ref10.className,props=(0,objectWithoutProperties.A)(_ref10,_excluded10);return __jsx(Separator2,(0,esm_extends.A)({ref,className:(0,twMerge.cn)("menubar-separator",className)},props))}));menubar_MenubarSeparator.displayName=Separator2.displayName;var MenubarShortcut=function MenubarShortcut(_ref11){var className=_ref11.className,props=(0,objectWithoutProperties.A)(_ref11,_excluded11);return __jsx("span",(0,esm_extends.A)({className:(0,twMerge.cn)("menubar-shortcut",className)},props))};MenubarShortcut.displayName="MenubarShortcut",MenubarShortcut.displayname="MenubarShortcut",menubar_Menubar.__docgenInfo={description:"",methods:[]},menubar_MenubarTrigger.__docgenInfo={description:"",methods:[]},menubar_MenubarSubTrigger.__docgenInfo={description:"",methods:[]},menubar_MenubarSubContent.__docgenInfo={description:"",methods:[]},menubar_MenubarContent.__docgenInfo={description:"",methods:[],props:{align:{defaultValue:{value:'"start"',computed:!1},required:!1},alignOffset:{defaultValue:{value:"-4",computed:!1},required:!1},sideOffset:{defaultValue:{value:"8",computed:!1},required:!1}}},menubar_MenubarItem.__docgenInfo={description:"",methods:[]},menubar_MenubarCheckboxItem.__docgenInfo={description:"",methods:[]},menubar_MenubarRadioItem.__docgenInfo={description:"",methods:[]},menubar_MenubarLabel.__docgenInfo={description:"",methods:[]},menubar_MenubarSeparator.__docgenInfo={description:"",methods:[]},MenubarShortcut.__docgenInfo={description:"",methods:[],displayName:"MenubarShortcut"};var menubar_stories_jsx=react.createElement;const menubar_stories={title:"Components/Menubar",component:menubar_Menubar,tags:["autodocs"],argTypes:{asChild:{table:{disable:!0}}},parameters:{layout:"centered",docs:{description:{component:"A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands."}},design:{type:"figma",url:"https://www.figma.com/design/Jfto7FUoU7mSpnv9uESD60/%F0%9F%9F%A0-feely---design-system?node-id=540-8869&t=nua4UmG9Iu1hfUAm-1"}}};var Default={render:function render(args){return menubar_stories_jsx(menubar_Menubar,args,menubar_stories_jsx(menubar_MenubarMenu,null,menubar_stories_jsx(menubar_MenubarTrigger,null,"File"),menubar_stories_jsx(menubar_MenubarContent,null,menubar_stories_jsx(menubar_MenubarItem,null,"New Tab ",menubar_stories_jsx(MenubarShortcut,null,"⌘T")),menubar_stories_jsx(menubar_MenubarItem,null,"New Window ",menubar_stories_jsx(MenubarShortcut,null,"⌘N")),menubar_stories_jsx(menubar_MenubarItem,{disabled:!0},"New Incognito Window"),menubar_stories_jsx(menubar_MenubarSeparator,null),menubar_stories_jsx(menubar_MenubarSub,null,menubar_stories_jsx(menubar_MenubarSubTrigger,null,"Share"),menubar_stories_jsx(menubar_MenubarSubContent,null,menubar_stories_jsx(menubar_MenubarItem,null,"Email link"),menubar_stories_jsx(menubar_MenubarItem,null,"Messages"),menubar_stories_jsx(menubar_MenubarItem,null,"Notes"))),menubar_stories_jsx(menubar_MenubarSeparator,null),menubar_stories_jsx(menubar_MenubarItem,null,"Print... ",menubar_stories_jsx(MenubarShortcut,null,"⌘P")))),menubar_stories_jsx(menubar_MenubarMenu,null,menubar_stories_jsx(menubar_MenubarTrigger,null,"Edit"),menubar_stories_jsx(menubar_MenubarContent,null,menubar_stories_jsx(menubar_MenubarItem,null,"Undo ",menubar_stories_jsx(MenubarShortcut,null,"⌘Z")),menubar_stories_jsx(menubar_MenubarItem,null,"Redo ",menubar_stories_jsx(MenubarShortcut,null,"⇧⌘Z")),menubar_stories_jsx(menubar_MenubarSeparator,null),menubar_stories_jsx(menubar_MenubarSub,null,menubar_stories_jsx(menubar_MenubarSubTrigger,null,"Find"),menubar_stories_jsx(menubar_MenubarSubContent,null,menubar_stories_jsx(menubar_MenubarItem,null,"Search the web"),menubar_stories_jsx(menubar_MenubarSeparator,null),menubar_stories_jsx(menubar_MenubarItem,null,"Find..."),menubar_stories_jsx(menubar_MenubarItem,null,"Find Next"),menubar_stories_jsx(menubar_MenubarItem,null,"Find Previous"))),menubar_stories_jsx(menubar_MenubarSeparator,null),menubar_stories_jsx(menubar_MenubarItem,null,"Cut"),menubar_stories_jsx(menubar_MenubarItem,null,"Copy"),menubar_stories_jsx(menubar_MenubarItem,null,"Paste"))),menubar_stories_jsx(menubar_MenubarMenu,null,menubar_stories_jsx(menubar_MenubarTrigger,null,"View"),menubar_stories_jsx(menubar_MenubarContent,null,menubar_stories_jsx(menubar_MenubarCheckboxItem,null,"Always Show Bookmarks Bar"),menubar_stories_jsx(menubar_MenubarCheckboxItem,{checked:!0},"Always Show Full URLs"),menubar_stories_jsx(menubar_MenubarSeparator,null),menubar_stories_jsx(menubar_MenubarItem,{inset:!0},"Reload ",menubar_stories_jsx(MenubarShortcut,null,"⌘R")),menubar_stories_jsx(menubar_MenubarItem,{disabled:!0,inset:!0},"Force Reload ",menubar_stories_jsx(MenubarShortcut,null,"⇧⌘R")),menubar_stories_jsx(menubar_MenubarSeparator,null),menubar_stories_jsx(menubar_MenubarItem,{inset:!0},"Toggle Fullscreen"),menubar_stories_jsx(menubar_MenubarSeparator,null),menubar_stories_jsx(menubar_MenubarItem,{inset:!0},"Hide Sidebar"))),menubar_stories_jsx(menubar_MenubarMenu,null,menubar_stories_jsx(menubar_MenubarTrigger,null,"Profiles"),menubar_stories_jsx(menubar_MenubarContent,null,menubar_stories_jsx(menubar_MenubarRadioGroup,{value:"benoit"},menubar_stories_jsx(menubar_MenubarRadioItem,{value:"andy"},"Andy"),menubar_stories_jsx(menubar_MenubarRadioItem,{value:"benoit"},"Benoit"),menubar_stories_jsx(menubar_MenubarRadioItem,{value:"Luis"},"Luis")),menubar_stories_jsx(menubar_MenubarSeparator,null),menubar_stories_jsx(menubar_MenubarItem,{inset:!0},"Edit..."),menubar_stories_jsx(menubar_MenubarSeparator,null),menubar_stories_jsx(menubar_MenubarItem,{inset:!0},"Add Profile..."))))},args:{}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: args => <Menubar {...args}>\n      <MenubarMenu>\n        <MenubarTrigger>File</MenubarTrigger>\n        <MenubarContent>\n          <MenubarItem>\n            New Tab <MenubarShortcut>⌘T</MenubarShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            New Window <MenubarShortcut>⌘N</MenubarShortcut>\n          </MenubarItem>\n          <MenubarItem disabled>New Incognito Window</MenubarItem>\n          <MenubarSeparator />\n          <MenubarSub>\n            <MenubarSubTrigger>Share</MenubarSubTrigger>\n            <MenubarSubContent>\n              <MenubarItem>Email link</MenubarItem>\n              <MenubarItem>Messages</MenubarItem>\n              <MenubarItem>Notes</MenubarItem>\n            </MenubarSubContent>\n          </MenubarSub>\n          <MenubarSeparator />\n          <MenubarItem>\n            Print... <MenubarShortcut>⌘P</MenubarShortcut>\n          </MenubarItem>\n        </MenubarContent>\n      </MenubarMenu>\n      <MenubarMenu>\n        <MenubarTrigger>Edit</MenubarTrigger>\n        <MenubarContent>\n          <MenubarItem>\n            Undo <MenubarShortcut>⌘Z</MenubarShortcut>\n          </MenubarItem>\n          <MenubarItem>\n            Redo <MenubarShortcut>⇧⌘Z</MenubarShortcut>\n          </MenubarItem>\n          <MenubarSeparator />\n          <MenubarSub>\n            <MenubarSubTrigger>Find</MenubarSubTrigger>\n            <MenubarSubContent>\n              <MenubarItem>Search the web</MenubarItem>\n              <MenubarSeparator />\n              <MenubarItem>Find...</MenubarItem>\n              <MenubarItem>Find Next</MenubarItem>\n              <MenubarItem>Find Previous</MenubarItem>\n            </MenubarSubContent>\n          </MenubarSub>\n          <MenubarSeparator />\n          <MenubarItem>Cut</MenubarItem>\n          <MenubarItem>Copy</MenubarItem>\n          <MenubarItem>Paste</MenubarItem>\n        </MenubarContent>\n      </MenubarMenu>\n      <MenubarMenu>\n        <MenubarTrigger>View</MenubarTrigger>\n        <MenubarContent>\n          <MenubarCheckboxItem>Always Show Bookmarks Bar</MenubarCheckboxItem>\n          <MenubarCheckboxItem checked>Always Show Full URLs</MenubarCheckboxItem>\n          <MenubarSeparator />\n          <MenubarItem inset>\n            Reload <MenubarShortcut>⌘R</MenubarShortcut>\n          </MenubarItem>\n          <MenubarItem disabled inset>\n            Force Reload <MenubarShortcut>⇧⌘R</MenubarShortcut>\n          </MenubarItem>\n          <MenubarSeparator />\n          <MenubarItem inset>Toggle Fullscreen</MenubarItem>\n          <MenubarSeparator />\n          <MenubarItem inset>Hide Sidebar</MenubarItem>\n        </MenubarContent>\n      </MenubarMenu>\n      <MenubarMenu>\n        <MenubarTrigger>Profiles</MenubarTrigger>\n        <MenubarContent>\n          <MenubarRadioGroup value="benoit">\n            <MenubarRadioItem value="andy">Andy</MenubarRadioItem>\n            <MenubarRadioItem value="benoit">Benoit</MenubarRadioItem>\n            <MenubarRadioItem value="Luis">Luis</MenubarRadioItem>\n          </MenubarRadioGroup>\n          <MenubarSeparator />\n          <MenubarItem inset>Edit...</MenubarItem>\n          <MenubarSeparator />\n          <MenubarItem inset>Add Profile...</MenubarItem>\n        </MenubarContent>\n      </MenubarMenu>\n    </Menubar>,\n  args: {}\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"../../packages/lib/twMerge.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{cn:()=>cn});var clsx__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../../packages/lib/node_modules/clsx/dist/clsx.m.js"),tailwind_merge__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("../../packages/lib/node_modules/tailwind-merge/dist/lib/tw-merge.mjs");function cn(){for(var _len=arguments.length,inputs=new Array(_len),_key=0;_key<_len;_key++)inputs[_key]=arguments[_key];return(0,tailwind_merge__WEBPACK_IMPORTED_MODULE_0__.Q)((0,clsx__WEBPACK_IMPORTED_MODULE_1__.$)(inputs))}}}]);