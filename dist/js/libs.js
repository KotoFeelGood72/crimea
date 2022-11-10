/*! choices.js v9.0.1 | © 2019 Josh Johnson | https://github.com/jshjohnson/Choices#readme */
window.Choices=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/public/assets/scripts/",i(i.s=7)}([function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1);t.DEFAULT_CLASSNAMES={containerOuter:"choices",containerInner:"choices__inner",input:"choices__input",inputCloned:"choices__input--cloned",list:"choices__list",listItems:"choices__list--multiple",listSingle:"choices__list--single",listDropdown:"choices__list--dropdown",item:"choices__item",itemSelectable:"choices__item--selectable",itemDisabled:"choices__item--disabled",itemChoice:"choices__item--choice",placeholder:"choices__placeholder",group:"choices__group",groupHeading:"choices__heading",button:"choices__button",activeState:"is-active",focusState:"is-focused",openState:"is-open",disabledState:"is-disabled",highlightedState:"is-highlighted",selectedState:"is-selected",flippedState:"is-flipped",loadingState:"is-loading",noResults:"has-no-results",noChoices:"has-no-choices"},t.DEFAULT_CONFIG={items:[],choices:[],silent:!1,renderChoiceLimit:-1,maxItemCount:-1,addItems:!0,addItemFilter:null,removeItems:!0,removeItemButton:!1,editItems:!1,duplicateItemsAllowed:!0,delimiter:",",paste:!0,searchEnabled:!0,searchChoices:!0,searchFloor:1,searchResultLimit:4,searchFields:["label","value"],position:"auto",resetScrollPosition:!0,shouldSort:!0,shouldSortItems:!1,sorter:n.sortByAlpha,placeholder:!0,placeholderValue:null,searchPlaceholderValue:null,prependValue:null,appendValue:null,renderSelectedChoices:"auto",loadingText:"Loading...",noResultsText:"No results found",noChoicesText:"No choices to choose from",itemSelectText:"Press to select",uniqueItemText:"Only unique values can be added",customAddItemText:"Only values matching specific conditions can be added",addItemText:function(e){return'Press Enter to add <b>"'+n.sanitise(e)+'"</b>'},maxItemText:function(e){return"Only "+e+" values can be added"},valueComparer:function(e,t){return e===t},fuseOptions:{includeScore:!0},callbackOnInit:null,callbackOnCreateTemplates:null,classNames:t.DEFAULT_CLASSNAMES},t.EVENTS={showDropdown:"showDropdown",hideDropdown:"hideDropdown",change:"change",choice:"choice",search:"search",addItem:"addItem",removeItem:"removeItem",highlightItem:"highlightItem",highlightChoice:"highlightChoice",unhighlightItem:"unhighlightItem"},t.ACTION_TYPES={ADD_CHOICE:"ADD_CHOICE",FILTER_CHOICES:"FILTER_CHOICES",ACTIVATE_CHOICES:"ACTIVATE_CHOICES",CLEAR_CHOICES:"CLEAR_CHOICES",ADD_GROUP:"ADD_GROUP",ADD_ITEM:"ADD_ITEM",REMOVE_ITEM:"REMOVE_ITEM",HIGHLIGHT_ITEM:"HIGHLIGHT_ITEM",CLEAR_ALL:"CLEAR_ALL",RESET_TO:"RESET_TO",SET_IS_LOADING:"SET_IS_LOADING"},t.KEY_CODES={BACK_KEY:46,DELETE_KEY:8,ENTER_KEY:13,A_KEY:65,ESC_KEY:27,UP_KEY:38,DOWN_KEY:40,PAGE_UP_KEY:33,PAGE_DOWN_KEY:34},t.TEXT_TYPE="text",t.SELECT_ONE_TYPE="select-one",t.SELECT_MULTIPLE_TYPE="select-multiple",t.SCROLLING_SPEED=4},function(e,t,i){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e)+e)},t.generateChars=function(e){return Array.from({length:e},(function(){return t.getRandomNumber(0,36).toString(36)})).join("")},t.generateId=function(e,i){var n=e.id||e.name&&e.name+"-"+t.generateChars(2)||t.generateChars(4);return n=i+"-"+(n=n.replace(/(:|\.|\[|\]|,)/g,""))},t.getType=function(e){return Object.prototype.toString.call(e).slice(8,-1)},t.isType=function(e,i){return null!=i&&t.getType(i)===e},t.wrap=function(e,t){return void 0===t&&(t=document.createElement("div")),e.nextSibling?e.parentNode&&e.parentNode.insertBefore(t,e.nextSibling):e.parentNode&&e.parentNode.appendChild(t),t.appendChild(e)},t.getAdjacentEl=function(e,t,i){void 0===i&&(i=1);for(var n=(i>0?"next":"previous")+"ElementSibling",r=e[n];r;){if(r.matches(t))return r;r=r[n]}return r},t.isScrolledIntoView=function(e,t,i){return void 0===i&&(i=1),!!e&&(i>0?t.scrollTop+t.offsetHeight>=e.offsetTop+e.offsetHeight:e.offsetTop>=t.scrollTop)},t.sanitise=function(e){return"string"!=typeof e?e:e.replace(/&/g,"&amp;").replace(/>/g,"&rt;").replace(/</g,"&lt;").replace(/"/g,"&quot;")},t.strToEl=(n=document.createElement("div"),function(e){var t=e.trim();n.innerHTML=t;for(var i=n.children[0];n.firstChild;)n.removeChild(n.firstChild);return i}),t.sortByAlpha=function(e,t){var i=e.value,n=e.label,r=void 0===n?i:n,o=t.value,s=t.label,a=void 0===s?o:s;return r.localeCompare(a,[],{sensitivity:"base",ignorePunctuation:!0,numeric:!0})},t.sortByScore=function(e,t){var i=e.score,n=void 0===i?0:i,r=t.score;return n-(void 0===r?0:r)},t.dispatchEvent=function(e,t,i){void 0===i&&(i=null);var n=new CustomEvent(t,{detail:i,bubbles:!0,cancelable:!0});return e.dispatchEvent(n)},t.existsInArray=function(e,t,i){return void 0===i&&(i="value"),e.some((function(e){return"string"==typeof t?e[i]===t.trim():e[i]===t}))},t.cloneObject=function(e){return JSON.parse(JSON.stringify(e))},t.diff=function(e,t){var i=Object.keys(e).sort(),n=Object.keys(t).sort();return i.filter((function(e){return n.indexOf(e)<0}))}},function(e,t,i){"use strict";(function(e,n){var r,o=i(6);r="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:n;var s=Object(o.a)(r);t.a=s}).call(this,i(12),i(13)(e))},function(e,t,i){"use strict";i.r(t),i.d(t,"__DO_NOT_USE__ActionTypes",(function(){return o})),i.d(t,"applyMiddleware",(function(){return v})),i.d(t,"bindActionCreators",(function(){return h})),i.d(t,"combineReducers",(function(){return l})),i.d(t,"compose",(function(){return m})),i.d(t,"createStore",(function(){return a}));var n=i(2),r=function(){return Math.random().toString(36).substring(7).split("").join(".")},o={INIT:"@@redux/INIT"+r(),REPLACE:"@@redux/REPLACE"+r(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+r()}};function s(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function a(e,t,i){var r;if("function"==typeof t&&"function"==typeof i||"function"==typeof i&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof t&&void 0===i&&(i=t,t=void 0),void 0!==i){if("function"!=typeof i)throw new Error("Expected the enhancer to be a function.");return i(a)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var c=e,l=t,u=[],h=u,d=!1;function p(){h===u&&(h=u.slice())}function f(){if(d)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return l}function m(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(d)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return p(),h.push(e),function(){if(t){if(d)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,p();var i=h.indexOf(e);h.splice(i,1)}}}function v(e){if(!s(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(d)throw new Error("Reducers may not dispatch actions.");try{d=!0,l=c(l,e)}finally{d=!1}for(var t=u=h,i=0;i<t.length;i++){(0,t[i])()}return e}return v({type:o.INIT}),(r={dispatch:v,subscribe:m,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");c=e,v({type:o.REPLACE})}})[n.a]=function(){var e,t=m;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function i(){e.next&&e.next(f())}return i(),{unsubscribe:t(i)}}})[n.a]=function(){return this},e},r}function c(e,t){var i=t&&t.type;return"Given "+(i&&'action "'+String(i)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function l(e){for(var t=Object.keys(e),i={},n=0;n<t.length;n++){var r=t[n];0,"function"==typeof e[r]&&(i[r]=e[r])}var s,a=Object.keys(i);try{!function(e){Object.keys(e).forEach((function(t){var i=e[t];if(void 0===i(void 0,{type:o.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===i(void 0,{type:o.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+o.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')}))}(i)}catch(e){s=e}return function(e,t){if(void 0===e&&(e={}),s)throw s;for(var n=!1,r={},o=0;o<a.length;o++){var l=a[o],u=i[l],h=e[l],d=u(h,t);if(void 0===d){var p=c(l,t);throw new Error(p)}r[l]=d,n=n||d!==h}return n?r:e}}function u(e,t){return function(){return t(e.apply(this,arguments))}}function h(e,t){if("function"==typeof e)return u(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');var i={};for(var n in e){var r=e[n];"function"==typeof r&&(i[n]=u(r,t))}return i}function d(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function p(e,t){var i=Object.keys(e);return Object.getOwnPropertySymbols&&i.push.apply(i,Object.getOwnPropertySymbols(e)),t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?p(i,!0).forEach((function(t){d(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(i).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function m(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce((function(e,t){return function(){return e(t.apply(void 0,arguments))}}))}function v(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return function(){var i=e.apply(void 0,arguments),n=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},r={getState:i.getState,dispatch:function(){return n.apply(void 0,arguments)}},o=t.map((function(e){return e(r)}));return f({},i,{dispatch:n=m.apply(void 0,o)(i.dispatch)})}}}},function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=i(3),o=n(i(14)),s=n(i(15)),a=n(i(16)),c=n(i(17)),l=i(1);t.defaultState={groups:[],items:[],choices:[],loading:!1};var u=r.combineReducers({items:o.default,groups:s.default,choices:a.default,loading:c.default});t.default=function(e,i){var n=e;if("CLEAR_ALL"===i.type)n=t.defaultState;else if("RESET_TO"===i.type)return l.cloneObject(i.state);return u(n,i)}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=function(){function e(e){var t=e.element,i=e.classNames;if(this.element=t,this.classNames=i,!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement))throw new TypeError("Invalid element passed");this.isDisabled=!1}return Object.defineProperty(e.prototype,"isActive",{get:function(){return"active"===this.element.dataset.choice},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"dir",{get:function(){return this.element.dir},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.value=e},enumerable:!0,configurable:!0}),e.prototype.conceal=function(){this.element.classList.add(this.classNames.input),this.element.hidden=!0,this.element.tabIndex=-1;var e=this.element.getAttribute("style");e&&this.element.setAttribute("data-choice-orig-style",e),this.element.setAttribute("data-choice","active")},e.prototype.reveal=function(){this.element.classList.remove(this.classNames.input),this.element.hidden=!1,this.element.removeAttribute("tabindex");var e=this.element.getAttribute("data-choice-orig-style");e?(this.element.removeAttribute("data-choice-orig-style"),this.element.setAttribute("style",e)):this.element.removeAttribute("style"),this.element.removeAttribute("data-choice"),this.element.value=this.element.value},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.element.disabled=!1,this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.element.disabled=!0,this.isDisabled=!0},e.prototype.triggerEvent=function(e,t){n.dispatchEvent(this.element,e,t)},e}();t.default=r},function(e,t,i){"use strict";function n(e){var t,i=e.Symbol;return"function"==typeof i?i.observable?t=i.observable:(t=i("observable"),i.observable=t):t="@@observable",t}i.d(t,"a",(function(){return n}))},function(e,t,i){e.exports=i(8)},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(i(9)),s=r(i(10)),a=r(i(11)),c=i(18),l=i(0),u=r(i(25)),h=i(26),d=i(27),p=i(28),f=i(29),m=i(1),v=i(4),_="-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style,g={},y=function(){function e(t,i){var r=this;void 0===t&&(t="[data-choice]"),void 0===i&&(i={}),this.config=s.default.all([l.DEFAULT_CONFIG,e.defaults.options,i],{arrayMerge:function(e,t){return n(t)}});var o=m.diff(this.config,l.DEFAULT_CONFIG);o.length&&console.warn("Unknown config option(s) passed",o.join(", "));var u="string"==typeof t?document.querySelector(t):t;if(!(u instanceof HTMLInputElement||u instanceof HTMLSelectElement))throw TypeError("Expected one of the following types text|select-one|select-multiple");if(this._isTextElement=u.type===l.TEXT_TYPE,this._isSelectOneElement=u.type===l.SELECT_ONE_TYPE,this._isSelectMultipleElement=u.type===l.SELECT_MULTIPLE_TYPE,this._isSelectElement=this._isSelectOneElement||this._isSelectMultipleElement,this.config.searchEnabled=this._isSelectMultipleElement||this.config.searchEnabled,["auto","always"].includes(""+this.config.renderSelectedChoices)||(this.config.renderSelectedChoices="auto"),i.addItemFilter&&"function"!=typeof i.addItemFilter){var h=i.addItemFilter instanceof RegExp?i.addItemFilter:new RegExp(i.addItemFilter);this.config.addItemFilter=h.test.bind(h)}if(this._isTextElement?this.passedElement=new c.WrappedInput({element:u,classNames:this.config.classNames,delimiter:this.config.delimiter}):this.passedElement=new c.WrappedSelect({element:u,classNames:this.config.classNames,template:function(e){return r._templates.option(e)}}),this.initialised=!1,this._store=new a.default,this._initialState=v.defaultState,this._currentState=v.defaultState,this._prevState=v.defaultState,this._currentValue="",this._canSearch=!!this.config.searchEnabled,this._isScrollingOnIe=!1,this._highlightPosition=0,this._wasTap=!0,this._placeholderValue=this._generatePlaceholderValue(),this._baseId=m.generateId(this.passedElement.element,"choices-"),this._direction=this.passedElement.dir,!this._direction){var d=window.getComputedStyle(this.passedElement.element).direction;d!==window.getComputedStyle(document.documentElement).direction&&(this._direction=d)}if(this._idNames={itemChoice:"item-choice"},this._isSelectElement&&(this._presetGroups=this.passedElement.optionGroups,this._presetOptions=this.passedElement.options),this._presetChoices=this.config.choices,this._presetItems=this.config.items,this.passedElement.value&&this._isTextElement){var p=this.passedElement.value.split(this.config.delimiter);this._presetItems=this._presetItems.concat(p)}if(this.passedElement.options&&this.passedElement.options.forEach((function(e){r._presetChoices.push({value:e.value,label:e.innerHTML,selected:!!e.selected,disabled:e.disabled||e.parentNode.disabled,placeholder:""===e.value||e.hasAttribute("placeholder"),customProperties:e.dataset["custom-properties"]})})),this._render=this._render.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this),this._onKeyUp=this._onKeyUp.bind(this),this._onKeyDown=this._onKeyDown.bind(this),this._onClick=this._onClick.bind(this),this._onTouchMove=this._onTouchMove.bind(this),this._onTouchEnd=this._onTouchEnd.bind(this),this._onMouseDown=this._onMouseDown.bind(this),this._onMouseOver=this._onMouseOver.bind(this),this._onFormReset=this._onFormReset.bind(this),this._onSelectKey=this._onSelectKey.bind(this),this._onEnterKey=this._onEnterKey.bind(this),this._onEscapeKey=this._onEscapeKey.bind(this),this._onDirectionKey=this._onDirectionKey.bind(this),this._onDeleteKey=this._onDeleteKey.bind(this),this.passedElement.isActive)return this.config.silent||console.warn("Trying to initialise Choices on element already initialised",{element:t}),void(this.initialised=!0);this.init()}return Object.defineProperty(e,"defaults",{get:function(){return Object.preventExtensions({get options(){return g},get templates(){return u.default}})},enumerable:!0,configurable:!0}),e.prototype.init=function(){if(!this.initialised){this._createTemplates(),this._createElements(),this._createStructure(),this._store.subscribe(this._render),this._render(),this._addEventListeners(),(!this.config.addItems||this.passedElement.element.hasAttribute("disabled"))&&this.disable(),this.initialised=!0;var e=this.config.callbackOnInit;e&&"function"==typeof e&&e.call(this)}},e.prototype.destroy=function(){this.initialised&&(this._removeEventListeners(),this.passedElement.reveal(),this.containerOuter.unwrap(this.passedElement.element),this.clearStore(),this._isSelectElement&&(this.passedElement.options=this._presetOptions),this._templates=u.default,this.initialised=!1)},e.prototype.enable=function(){return this.passedElement.isDisabled&&this.passedElement.enable(),this.containerOuter.isDisabled&&(this._addEventListeners(),this.input.enable(),this.containerOuter.enable()),this},e.prototype.disable=function(){return this.passedElement.isDisabled||this.passedElement.disable(),this.containerOuter.isDisabled||(this._removeEventListeners(),this.input.disable(),this.containerOuter.disable()),this},e.prototype.highlightItem=function(e,t){if(void 0===t&&(t=!0),!e||!e.id)return this;var i=e.id,n=e.groupId,r=void 0===n?-1:n,o=e.value,s=void 0===o?"":o,a=e.label,c=void 0===a?"":a,u=r>=0?this._store.getGroupById(r):null;return this._store.dispatch(d.highlightItem(i,!0)),t&&this.passedElement.triggerEvent(l.EVENTS.highlightItem,{id:i,value:s,label:c,groupValue:u&&u.value?u.value:null}),this},e.prototype.unhighlightItem=function(e){if(!e||!e.id)return this;var t=e.id,i=e.groupId,n=void 0===i?-1:i,r=e.value,o=void 0===r?"":r,s=e.label,a=void 0===s?"":s,c=n>=0?this._store.getGroupById(n):null;return this._store.dispatch(d.highlightItem(t,!1)),this.passedElement.triggerEvent(l.EVENTS.highlightItem,{id:t,value:o,label:a,groupValue:c&&c.value?c.value:null}),this},e.prototype.highlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.highlightItem(t)})),this},e.prototype.unhighlightAll=function(){var e=this;return this._store.items.forEach((function(t){return e.unhighlightItem(t)})),this},e.prototype.removeActiveItemsByValue=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.value===e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeActiveItems=function(e){var t=this;return this._store.activeItems.filter((function(t){return t.id!==e})).forEach((function(e){return t._removeItem(e)})),this},e.prototype.removeHighlightedItems=function(e){var t=this;return void 0===e&&(e=!1),this._store.highlightedActiveItems.forEach((function(i){t._removeItem(i),e&&t._triggerChange(i.value)})),this},e.prototype.showDropdown=function(e){var t=this;return this.dropdown.isActive?this:(requestAnimationFrame((function(){t.dropdown.show(),t.containerOuter.open(t.dropdown.distanceFromTopWindow),!e&&t._canSearch&&t.input.focus(),t.passedElement.triggerEvent(l.EVENTS.showDropdown,{})})),this)},e.prototype.hideDropdown=function(e){var t=this;return this.dropdown.isActive?(requestAnimationFrame((function(){t.dropdown.hide(),t.containerOuter.close(),!e&&t._canSearch&&(t.input.removeActiveDescendant(),t.input.blur()),t.passedElement.triggerEvent(l.EVENTS.hideDropdown,{})})),this):this},e.prototype.getValue=function(e){void 0===e&&(e=!1);var t=this._store.activeItems.reduce((function(t,i){var n=e?i.value:i;return t.push(n),t}),[]);return this._isSelectOneElement?t[0]:t},e.prototype.setValue=function(e){var t=this;return this.initialised?(e.forEach((function(e){return t._setChoiceOrItem(e)})),this):this},e.prototype.setChoiceByValue=function(e){var t=this;return!this.initialised||this._isTextElement?this:((Array.isArray(e)?e:[e]).forEach((function(e){return t._findAndSelectChoiceByValue(e)})),this)},e.prototype.setChoices=function(e,t,i,n){var r=this;if(void 0===e&&(e=[]),void 0===t&&(t="value"),void 0===i&&(i="label"),void 0===n&&(n=!1),!this.initialised)throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");if(!this._isSelectElement)throw new TypeError("setChoices can't be used with INPUT based Choices");if("string"!=typeof t||!t)throw new TypeError("value parameter must be a name of 'value' field in passed objects");if(n&&this.clearChoices(),"function"==typeof e){var o=e(this);if("function"==typeof Promise&&o instanceof Promise)return new Promise((function(e){return requestAnimationFrame(e)})).then((function(){return r._handleLoadingState(!0)})).then((function(){return o})).then((function(e){return r.setChoices(e,t,i,n)})).catch((function(e){r.config.silent||console.error(e)})).then((function(){return r._handleLoadingState(!1)})).then((function(){return r}));if(!Array.isArray(o))throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: "+typeof o);return this.setChoices(o,t,i,!1)}if(!Array.isArray(e))throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");return this.containerOuter.removeLoadingState(),this._startLoading(),e.forEach((function(e){if(e.choices)r._addGroup({id:e.id?parseInt(""+e.id,10):null,group:e,valueKey:t,labelKey:i});else{var n=e;r._addChoice({value:n[t],label:n[i],isSelected:!!n.selected,isDisabled:!!n.disabled,placeholder:!!n.placeholder,customProperties:n.customProperties})}})),this._stopLoading(),this},e.prototype.clearChoices=function(){return this._store.dispatch(h.clearChoices()),this},e.prototype.clearStore=function(){return this._store.dispatch(f.clearAll()),this},e.prototype.clearInput=function(){var e=!this._isSelectOneElement;return this.input.clear(e),!this._isTextElement&&this._canSearch&&(this._isSearching=!1,this._store.dispatch(h.activateChoices(!0))),this},e.prototype._render=function(){if(!this._store.isLoading()){this._currentState=this._store.state;var e=this._currentState.choices!==this._prevState.choices||this._currentState.groups!==this._prevState.groups||this._currentState.items!==this._prevState.items,t=this._isSelectElement,i=this._currentState.items!==this._prevState.items;e&&(t&&this._renderChoices(),i&&this._renderItems(),this._prevState=this._currentState)}},e.prototype._renderChoices=function(){var e=this,t=this._store,i=t.activeGroups,n=t.activeChoices,r=document.createDocumentFragment();if(this.choiceList.clear(),this.config.resetScrollPosition&&requestAnimationFrame((function(){return e.choiceList.scrollToTop()})),i.length>=1&&!this._isSearching){var o=n.filter((function(e){return!0===e.placeholder&&-1===e.groupId}));o.length>=1&&(r=this._createChoicesFragment(o,r)),r=this._createGroupsFragment(i,n,r)}else n.length>=1&&(r=this._createChoicesFragment(n,r));if(r.childNodes&&r.childNodes.length>0){var s=this._store.activeItems,a=this._canAddItem(s,this.input.value);if(a.response)this.choiceList.append(r),this._highlightChoice();else{var c=this._getTemplate("notice",a.notice);this.choiceList.append(c)}}else{var l=void 0;c=void 0;this._isSearching?(c="function"==typeof this.config.noResultsText?this.config.noResultsText():this.config.noResultsText,l=this._getTemplate("notice",c,"no-results")):(c="function"==typeof this.config.noChoicesText?this.config.noChoicesText():this.config.noChoicesText,l=this._getTemplate("notice",c,"no-choices")),this.choiceList.append(l)}},e.prototype._renderItems=function(){var e=this._store.activeItems||[];this.itemList.clear();var t=this._createItemsFragment(e);t.childNodes&&this.itemList.append(t)},e.prototype._createGroupsFragment=function(e,t,i){var n=this;void 0===i&&(i=document.createDocumentFragment());return this.config.shouldSort&&e.sort(this.config.sorter),e.forEach((function(e){var r=function(e){return t.filter((function(t){return n._isSelectOneElement?t.groupId===e.id:t.groupId===e.id&&("always"===n.config.renderSelectedChoices||!t.selected)}))}(e);if(r.length>=1){var o=n._getTemplate("choiceGroup",e);i.appendChild(o),n._createChoicesFragment(r,i,!0)}})),i},e.prototype._createChoicesFragment=function(e,t,i){var r=this;void 0===t&&(t=document.createDocumentFragment()),void 0===i&&(i=!1);var o=this.config,s=o.renderSelectedChoices,a=o.searchResultLimit,c=o.renderChoiceLimit,l=this._isSearching?m.sortByScore:this.config.sorter,u=function(e){if("auto"!==s||(r._isSelectOneElement||!e.selected)){var i=r._getTemplate("choice",e,r.config.itemSelectText);t.appendChild(i)}},h=e;"auto"!==s||this._isSelectOneElement||(h=e.filter((function(e){return!e.selected})));var d=h.reduce((function(e,t){return t.placeholder?e.placeholderChoices.push(t):e.normalChoices.push(t),e}),{placeholderChoices:[],normalChoices:[]}),p=d.placeholderChoices,f=d.normalChoices;(this.config.shouldSort||this._isSearching)&&f.sort(l);var v=h.length,_=this._isSelectOneElement?n(p,f):f;this._isSearching?v=a:c&&c>0&&!i&&(v=c);for(var g=0;g<v;g+=1)_[g]&&u(_[g]);return t},e.prototype._createItemsFragment=function(e,t){var i=this;void 0===t&&(t=document.createDocumentFragment());var n=this.config,r=n.shouldSortItems,o=n.sorter,s=n.removeItemButton;r&&!this._isSelectOneElement&&e.sort(o),this._isTextElement?this.passedElement.value=e.map((function(e){return e.value})).join(this.config.delimiter):this.passedElement.options=e;return e.forEach((function(e){var n=i._getTemplate("item",e,s);t.appendChild(n)})),t},e.prototype._triggerChange=function(e){null!=e&&this.passedElement.triggerEvent(l.EVENTS.change,{value:e})},e.prototype._selectPlaceholderChoice=function(e){this._addItem({value:e.value,label:e.label,choiceId:e.id,groupId:e.groupId,placeholder:e.placeholder}),this._triggerChange(e.value)},e.prototype._handleButtonAction=function(e,t){if(e&&t&&this.config.removeItems&&this.config.removeItemButton){var i=t.parentNode&&t.parentNode.dataset.id,n=i&&e.find((function(e){return e.id===parseInt(i,10)}));n&&(this._removeItem(n),this._triggerChange(n.value),this._isSelectOneElement&&this._store.placeholderChoice&&this._selectPlaceholderChoice(this._store.placeholderChoice))}},e.prototype._handleItemAction=function(e,t,i){var n=this;if(void 0===i&&(i=!1),e&&t&&this.config.removeItems&&!this._isSelectOneElement){var r=t.dataset.id;e.forEach((function(e){e.id!==parseInt(""+r,10)||e.highlighted?!i&&e.highlighted&&n.unhighlightItem(e):n.highlightItem(e)})),this.input.focus()}},e.prototype._handleChoiceAction=function(e,t){if(e&&t){var i=t.dataset.id,n=i&&this._store.getChoiceById(i);if(n){var r=e[0]&&e[0].keyCode?e[0].keyCode:void 0,o=this.dropdown.isActive;if(n.keyCode=r,this.passedElement.triggerEvent(l.EVENTS.choice,{choice:n}),!n.selected&&!n.disabled)this._canAddItem(e,n.value).response&&(this._addItem({value:n.value,label:n.label,choiceId:n.id,groupId:n.groupId,customProperties:n.customProperties,placeholder:n.placeholder,keyCode:n.keyCode}),this._triggerChange(n.value));this.clearInput(),o&&this._isSelectOneElement&&(this.hideDropdown(!0),this.containerOuter.focus())}}},e.prototype._handleBackspace=function(e){if(this.config.removeItems&&e){var t=e[e.length-1],i=e.some((function(e){return e.highlighted}));this.config.editItems&&!i&&t?(this.input.value=t.value,this.input.setWidth(),this._removeItem(t),this._triggerChange(t.value)):(i||this.highlightItem(t,!1),this.removeHighlightedItems(!0))}},e.prototype._startLoading=function(){this._store.dispatch(f.setIsLoading(!0))},e.prototype._stopLoading=function(){this._store.dispatch(f.setIsLoading(!1))},e.prototype._handleLoadingState=function(e){void 0===e&&(e=!0);var t=this.itemList.getChild("."+this.config.classNames.placeholder);e?(this.disable(),this.containerOuter.addLoadingState(),this._isSelectOneElement?t?t.innerHTML=this.config.loadingText:(t=this._getTemplate("placeholder",this.config.loadingText))&&this.itemList.append(t):this.input.placeholder=this.config.loadingText):(this.enable(),this.containerOuter.removeLoadingState(),this._isSelectOneElement?t&&(t.innerHTML=this._placeholderValue||""):this.input.placeholder=this._placeholderValue||"")},e.prototype._handleSearch=function(e){if(e&&this.input.isFocussed){var t=this._store.choices,i=this.config,n=i.searchFloor,r=i.searchChoices,o=t.some((function(e){return!e.active}));if(e&&e.length>=n){var s=r?this._searchChoices(e):0;this.passedElement.triggerEvent(l.EVENTS.search,{value:e,resultCount:s})}else o&&(this._isSearching=!1,this._store.dispatch(h.activateChoices(!0)))}},e.prototype._canAddItem=function(e,t){var i=!0,n="function"==typeof this.config.addItemText?this.config.addItemText(t):this.config.addItemText;if(!this._isSelectOneElement){var r=m.existsInArray(e,t);this.config.maxItemCount>0&&this.config.maxItemCount<=e.length&&(i=!1,n="function"==typeof this.config.maxItemText?this.config.maxItemText(this.config.maxItemCount):this.config.maxItemText),!this.config.duplicateItemsAllowed&&r&&i&&(i=!1,n="function"==typeof this.config.uniqueItemText?this.config.uniqueItemText(t):this.config.uniqueItemText),this._isTextElement&&this.config.addItems&&i&&"function"==typeof this.config.addItemFilter&&!this.config.addItemFilter(t)&&(i=!1,n="function"==typeof this.config.customAddItemText?this.config.customAddItemText(t):this.config.customAddItemText)}return{response:i,notice:n}},e.prototype._searchChoices=function(e){var t="string"==typeof e?e.trim():e,i="string"==typeof this._currentValue?this._currentValue.trim():this._currentValue;if(t.length<1&&t===i+" ")return 0;var r=this._store.searchableChoices,s=t,a=n(this.config.searchFields),c=Object.assign(this.config.fuseOptions,{keys:a,includeMatches:!0}),l=new o.default(r,c).search(s);return this._currentValue=t,this._highlightPosition=0,this._isSearching=!0,this._store.dispatch(h.filterChoices(l)),l.length},e.prototype._addEventListeners=function(){var e=document.documentElement;e.addEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.addEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.addEventListener("mousedown",this._onMouseDown,!0),e.addEventListener("click",this._onClick,{passive:!0}),e.addEventListener("touchmove",this._onTouchMove,{passive:!0}),this.dropdown.element.addEventListener("mouseover",this._onMouseOver,{passive:!0}),this._isSelectOneElement&&(this.containerOuter.element.addEventListener("focus",this._onFocus,{passive:!0}),this.containerOuter.element.addEventListener("blur",this._onBlur,{passive:!0})),this.input.element.addEventListener("keyup",this._onKeyUp,{passive:!0}),this.input.element.addEventListener("focus",this._onFocus,{passive:!0}),this.input.element.addEventListener("blur",this._onBlur,{passive:!0}),this.input.element.form&&this.input.element.form.addEventListener("reset",this._onFormReset,{passive:!0}),this.input.addEventListeners()},e.prototype._removeEventListeners=function(){var e=document.documentElement;e.removeEventListener("touchend",this._onTouchEnd,!0),this.containerOuter.element.removeEventListener("keydown",this._onKeyDown,!0),this.containerOuter.element.removeEventListener("mousedown",this._onMouseDown,!0),e.removeEventListener("click",this._onClick),e.removeEventListener("touchmove",this._onTouchMove),this.dropdown.element.removeEventListener("mouseover",this._onMouseOver),this._isSelectOneElement&&(this.containerOuter.element.removeEventListener("focus",this._onFocus),this.containerOuter.element.removeEventListener("blur",this._onBlur)),this.input.element.removeEventListener("keyup",this._onKeyUp),this.input.element.removeEventListener("focus",this._onFocus),this.input.element.removeEventListener("blur",this._onBlur),this.input.element.form&&this.input.element.form.removeEventListener("reset",this._onFormReset),this.input.removeEventListeners()},e.prototype._onKeyDown=function(e){var t=e.keyCode,i=this._store.activeItems,n=this.input.isFocussed,r=this.dropdown.isActive,o=this.itemList.hasChildren(),s=String.fromCharCode(t),a=/[a-zA-Z0-9-_ ]/.test(s),c=l.KEY_CODES.BACK_KEY,u=l.KEY_CODES.DELETE_KEY,h=l.KEY_CODES.ENTER_KEY,d=l.KEY_CODES.A_KEY,p=l.KEY_CODES.ESC_KEY,f=l.KEY_CODES.UP_KEY,m=l.KEY_CODES.DOWN_KEY,v=l.KEY_CODES.PAGE_UP_KEY,_=l.KEY_CODES.PAGE_DOWN_KEY;switch(this._isTextElement||r||!a||(this.showDropdown(),this.input.isFocussed||(this.input.value+=s.toLowerCase())),t){case d:return this._onSelectKey(e,o);case h:return this._onEnterKey(e,i,r);case p:return this._onEscapeKey(r);case f:case v:case m:case _:return this._onDirectionKey(e,r);case u:case c:return this._onDeleteKey(e,i,n)}},e.prototype._onKeyUp=function(e){var t=e.target,i=e.keyCode,n=this.input.value,r=this._store.activeItems,o=this._canAddItem(r,n),s=l.KEY_CODES.BACK_KEY,a=l.KEY_CODES.DELETE_KEY;if(this._isTextElement){if(o.notice&&n){var c=this._getTemplate("notice",o.notice);this.dropdown.element.innerHTML=c.outerHTML,this.showDropdown(!0)}else this.hideDropdown(!0)}else{var u=(i===s||i===a)&&t&&!t.value,d=!this._isTextElement&&this._isSearching,p=this._canSearch&&o.response;u&&d?(this._isSearching=!1,this._store.dispatch(h.activateChoices(!0))):p&&this._handleSearch(this.input.value)}this._canSearch=this.config.searchEnabled},e.prototype._onSelectKey=function(e,t){var i=e.ctrlKey,n=e.metaKey;(i||n)&&t&&(this._canSearch=!1,this.config.removeItems&&!this.input.value&&this.input.element===document.activeElement&&this.highlightAll())},e.prototype._onEnterKey=function(e,t,i){var n=e.target,r=l.KEY_CODES.ENTER_KEY,o=n&&n.hasAttribute("data-button");if(this._isTextElement&&n&&n.value){var s=this.input.value;this._canAddItem(t,s).response&&(this.hideDropdown(!0),this._addItem({value:s}),this._triggerChange(s),this.clearInput())}if(o&&(this._handleButtonAction(t,n),e.preventDefault()),i){var a=this.dropdown.getChild("."+this.config.classNames.highlightedState);a&&(t[0]&&(t[0].keyCode=r),this._handleChoiceAction(t,a)),e.preventDefault()}else this._isSelectOneElement&&(this.showDropdown(),e.preventDefault())},e.prototype._onEscapeKey=function(e){e&&(this.hideDropdown(!0),this.containerOuter.focus())},e.prototype._onDirectionKey=function(e,t){var i=e.keyCode,n=e.metaKey,r=l.KEY_CODES.DOWN_KEY,o=l.KEY_CODES.PAGE_UP_KEY,s=l.KEY_CODES.PAGE_DOWN_KEY;if(t||this._isSelectOneElement){this.showDropdown(),this._canSearch=!1;var a=i===r||i===s?1:-1,c=void 0;if(n||i===s||i===o)c=a>0?this.dropdown.element.querySelector("[data-choice-selectable]:last-of-type"):this.dropdown.element.querySelector("[data-choice-selectable]");else{var u=this.dropdown.element.querySelector("."+this.config.classNames.highlightedState);c=u?m.getAdjacentEl(u,"[data-choice-selectable]",a):this.dropdown.element.querySelector("[data-choice-selectable]")}c&&(m.isScrolledIntoView(c,this.choiceList.element,a)||this.choiceList.scrollToChildElement(c,a),this._highlightChoice(c)),e.preventDefault()}},e.prototype._onDeleteKey=function(e,t,i){var n=e.target;this._isSelectOneElement||n.value||!i||(this._handleBackspace(t),e.preventDefault())},e.prototype._onTouchMove=function(){this._wasTap&&(this._wasTap=!1)},e.prototype._onTouchEnd=function(e){var t=(e||e.touches[0]).target;this._wasTap&&this.containerOuter.element.contains(t)&&((t===this.containerOuter.element||t===this.containerInner.element)&&(this._isTextElement?this.input.focus():this._isSelectMultipleElement&&this.showDropdown()),e.stopPropagation());this._wasTap=!0},e.prototype._onMouseDown=function(e){var t=e.target;if(t instanceof HTMLElement){if(_&&this.choiceList.element.contains(t)){var i=this.choiceList.element.firstElementChild,n="ltr"===this._direction?e.offsetX>=i.offsetWidth:e.offsetX<i.offsetLeft;this._isScrollingOnIe=n}if(t!==this.input.element){var r=t.closest("[data-button],[data-item],[data-choice]");if(r instanceof HTMLElement){var o=e.shiftKey,s=this._store.activeItems,a=r.dataset;"button"in a?this._handleButtonAction(s,r):"item"in a?this._handleItemAction(s,r,o):"choice"in a&&this._handleChoiceAction(s,r)}e.preventDefault()}}},e.prototype._onMouseOver=function(e){var t=e.target;t instanceof HTMLElement&&"choice"in t.dataset&&this._highlightChoice(t)},e.prototype._onClick=function(e){var t=e.target;this.containerOuter.element.contains(t)?this.dropdown.isActive||this.containerOuter.isDisabled?this._isSelectOneElement&&t!==this.input.element&&!this.dropdown.element.contains(t)&&this.hideDropdown():this._isTextElement?document.activeElement!==this.input.element&&this.input.focus():(this.showDropdown(),this.containerOuter.focus()):(this._store.highlightedActiveItems.length>0&&this.unhighlightAll(),this.containerOuter.removeFocusState(),this.hideDropdown(!0))},e.prototype._onFocus=function(e){var t,i=this,n=e.target;n&&this.containerOuter.element.contains(n)&&((t={})[l.TEXT_TYPE]=function(){n===i.input.element&&i.containerOuter.addFocusState()},t[l.SELECT_ONE_TYPE]=function(){i.containerOuter.addFocusState(),n===i.input.element&&i.showDropdown(!0)},t[l.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.showDropdown(!0),i.containerOuter.addFocusState())},t)[this.passedElement.element.type]()},e.prototype._onBlur=function(e){var t,i=this,n=e.target;if(n&&this.containerOuter.element.contains(n)&&!this._isScrollingOnIe){var r=this._store.activeItems.some((function(e){return e.highlighted}));((t={})[l.TEXT_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),r&&i.unhighlightAll(),i.hideDropdown(!0))},t[l.SELECT_ONE_TYPE]=function(){i.containerOuter.removeFocusState(),(n===i.input.element||n===i.containerOuter.element&&!i._canSearch)&&i.hideDropdown(!0)},t[l.SELECT_MULTIPLE_TYPE]=function(){n===i.input.element&&(i.containerOuter.removeFocusState(),i.hideDropdown(!0),r&&i.unhighlightAll())},t)[this.passedElement.element.type]()}else this._isScrollingOnIe=!1,this.input.element.focus()},e.prototype._onFormReset=function(){this._store.dispatch(f.resetTo(this._initialState))},e.prototype._highlightChoice=function(e){var t=this;void 0===e&&(e=null);var i=Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));if(i.length){var n=e;Array.from(this.dropdown.element.querySelectorAll("."+this.config.classNames.highlightedState)).forEach((function(e){e.classList.remove(t.config.classNames.highlightedState),e.setAttribute("aria-selected","false")})),n?this._highlightPosition=i.indexOf(n):(n=i.length>this._highlightPosition?i[this._highlightPosition]:i[i.length-1])||(n=i[0]),n.classList.add(this.config.classNames.highlightedState),n.setAttribute("aria-selected","true"),this.passedElement.triggerEvent(l.EVENTS.highlightChoice,{el:n}),this.dropdown.isActive&&(this.input.setActiveDescendant(n.id),this.containerOuter.setActiveDescendant(n.id))}},e.prototype._addItem=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,r=e.choiceId,o=void 0===r?-1:r,s=e.groupId,a=void 0===s?-1:s,c=e.customProperties,u=void 0===c?{}:c,h=e.placeholder,p=void 0!==h&&h,f=e.keyCode,m=void 0===f?-1:f,v="string"==typeof t?t.trim():t,_=this._store.items,g=n||v,y=o||-1,b=a>=0?this._store.getGroupById(a):null,E=_?_.length+1:1;this.config.prependValue&&(v=this.config.prependValue+v.toString()),this.config.appendValue&&(v+=this.config.appendValue.toString()),this._store.dispatch(d.addItem({value:v,label:g,id:E,choiceId:y,groupId:a,customProperties:u,placeholder:p,keyCode:m})),this._isSelectOneElement&&this.removeActiveItems(E),this.passedElement.triggerEvent(l.EVENTS.addItem,{id:E,value:v,label:g,customProperties:u,groupValue:b&&b.value?b.value:null,keyCode:m})},e.prototype._removeItem=function(e){var t=e.id,i=e.value,n=e.label,r=e.customProperties,o=e.choiceId,s=e.groupId,a=s&&s>=0?this._store.getGroupById(s):null;t&&o&&(this._store.dispatch(d.removeItem(t,o)),this.passedElement.triggerEvent(l.EVENTS.removeItem,{id:t,value:i,label:n,customProperties:r,groupValue:a&&a.value?a.value:null}))},e.prototype._addChoice=function(e){var t=e.value,i=e.label,n=void 0===i?null:i,r=e.isSelected,o=void 0!==r&&r,s=e.isDisabled,a=void 0!==s&&s,c=e.groupId,l=void 0===c?-1:c,u=e.customProperties,d=void 0===u?{}:u,p=e.placeholder,f=void 0!==p&&p,m=e.keyCode,v=void 0===m?-1:m;if(null!=t){var _=this._store.choices,g=n||t,y=_?_.length+1:1,b=this._baseId+"-"+this._idNames.itemChoice+"-"+y;this._store.dispatch(h.addChoice({id:y,groupId:l,elementId:b,value:t,label:g,disabled:a,customProperties:d,placeholder:f,keyCode:v})),o&&this._addItem({value:t,label:g,choiceId:y,customProperties:d,placeholder:f,keyCode:v})}},e.prototype._addGroup=function(e){var t=this,i=e.group,n=e.id,r=e.valueKey,o=void 0===r?"value":r,s=e.labelKey,a=void 0===s?"label":s,c=m.isType("Object",i)?i.choices:Array.from(i.getElementsByTagName("OPTION")),l=n||Math.floor((new Date).valueOf()*Math.random()),u=!!i.disabled&&i.disabled;if(c){this._store.dispatch(p.addGroup({value:i.label,id:l,active:!0,disabled:u}));c.forEach((function(e){var i=e.disabled||e.parentNode&&e.parentNode.disabled;t._addChoice({value:e[o],label:m.isType("Object",e)?e[a]:e.innerHTML,isSelected:e.selected,isDisabled:i,groupId:l,customProperties:e.customProperties,placeholder:e.placeholder})}))}else this._store.dispatch(p.addGroup({value:i.label,id:i.id,active:!1,disabled:i.disabled}))},e.prototype._getTemplate=function(e){for(var t,i=[],r=1;r<arguments.length;r++)i[r-1]=arguments[r];var o=this.config.classNames;return(t=this._templates[e]).call.apply(t,n([this,o],i))},e.prototype._createTemplates=function(){var e=this.config.callbackOnCreateTemplates,t={};e&&"function"==typeof e&&(t=e.call(this,m.strToEl)),this._templates=s.default(u.default,t)},e.prototype._createElements=function(){this.containerOuter=new c.Container({element:this._getTemplate("containerOuter",this._direction,this._isSelectElement,this._isSelectOneElement,this.config.searchEnabled,this.passedElement.element.type),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.containerInner=new c.Container({element:this._getTemplate("containerInner"),classNames:this.config.classNames,type:this.passedElement.element.type,position:this.config.position}),this.input=new c.Input({element:this._getTemplate("input",this._placeholderValue),classNames:this.config.classNames,type:this.passedElement.element.type,preventPaste:!this.config.paste}),this.choiceList=new c.List({element:this._getTemplate("choiceList",this._isSelectOneElement)}),this.itemList=new c.List({element:this._getTemplate("itemList",this._isSelectOneElement)}),this.dropdown=new c.Dropdown({element:this._getTemplate("dropdown"),classNames:this.config.classNames,type:this.passedElement.element.type})},e.prototype._createStructure=function(){this.passedElement.conceal(),this.containerInner.wrap(this.passedElement.element),this.containerOuter.wrap(this.containerInner.element),this._isSelectOneElement?this.input.placeholder=this.config.searchPlaceholderValue||"":this._placeholderValue&&(this.input.placeholder=this._placeholderValue,this.input.setWidth()),this.containerOuter.element.appendChild(this.containerInner.element),this.containerOuter.element.appendChild(this.dropdown.element),this.containerInner.element.appendChild(this.itemList.element),this._isTextElement||this.dropdown.element.appendChild(this.choiceList.element),this._isSelectOneElement?this.config.searchEnabled&&this.dropdown.element.insertBefore(this.input.element,this.dropdown.element.firstChild):this.containerInner.element.appendChild(this.input.element),this._isSelectElement&&(this._highlightPosition=0,this._isSearching=!1,this._startLoading(),this._presetGroups.length?this._addPredefinedGroups(this._presetGroups):this._addPredefinedChoices(this._presetChoices),this._stopLoading()),this._isTextElement&&this._addPredefinedItems(this._presetItems)},e.prototype._addPredefinedGroups=function(e){var t=this,i=this.passedElement.placeholderOption;i&&i.parentNode&&"SELECT"===i.parentNode.tagName&&this._addChoice({value:i.value,label:i.innerHTML,isSelected:i.selected,isDisabled:i.disabled,placeholder:!0}),e.forEach((function(e){return t._addGroup({group:e,id:e.id||null})}))},e.prototype._addPredefinedChoices=function(e){var t=this;this.config.shouldSort&&e.sort(this.config.sorter);var i=e.some((function(e){return e.selected})),n=e.findIndex((function(e){return void 0===e.disabled||!e.disabled}));e.forEach((function(e,r){var o=e.value,s=void 0===o?"":o,a=e.label,c=e.customProperties,l=e.placeholder;if(t._isSelectElement)if(e.choices)t._addGroup({group:e,id:e.id||null});else{var u=!!(t._isSelectOneElement&&!i&&r===n)||e.selected,h=e.disabled;console.log(h,e),t._addChoice({value:s,label:a,isSelected:!!u,isDisabled:!!h,placeholder:!!l,customProperties:c})}else t._addChoice({value:s,label:a,isSelected:!!e.selected,isDisabled:!!e.disabled,placeholder:!!e.placeholder,customProperties:c})}))},e.prototype._addPredefinedItems=function(e){var t=this;e.forEach((function(e){"object"==typeof e&&e.value&&t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}),"string"==typeof e&&t._addItem({value:e})}))},e.prototype._setChoiceOrItem=function(e){var t=this;({object:function(){e.value&&(t._isTextElement?t._addItem({value:e.value,label:e.label,choiceId:e.id,customProperties:e.customProperties,placeholder:e.placeholder}):t._addChoice({value:e.value,label:e.label,isSelected:!0,isDisabled:!1,customProperties:e.customProperties,placeholder:e.placeholder}))},string:function(){t._isTextElement?t._addItem({value:e}):t._addChoice({value:e,label:e,isSelected:!0,isDisabled:!1})}})[m.getType(e).toLowerCase()]()},e.prototype._findAndSelectChoiceByValue=function(e){var t=this,i=this._store.choices.find((function(i){return t.config.valueComparer(i.value,e)}));i&&!i.selected&&this._addItem({value:i.value,label:i.label,choiceId:i.id,groupId:i.groupId,customProperties:i.customProperties,placeholder:i.placeholder,keyCode:i.keyCode})},e.prototype._generatePlaceholderValue=function(){if(this._isSelectElement){var e=this.passedElement.placeholderOption;return e?e.text:null}var t=this.config,i=t.placeholder,n=t.placeholderValue,r=this.passedElement.element.dataset;if(i){if(n)return n;if(r.placeholder)return r.placeholder}return null},e}();t.default=y},function(e,t,i){
/*!
 * Fuse.js v3.4.6 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
e.exports=function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1)}([function(e,t){e.exports=function(e){return Array.isArray?Array.isArray(e):"[object Array]"===Object.prototype.toString.call(e)}},function(e,t,i){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o=i(2),s=i(8),a=i(0),c=function(){function e(t,i){var n=i.location,r=void 0===n?0:n,o=i.distance,a=void 0===o?100:o,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.caseSensitive,p=void 0!==d&&d,f=i.tokenSeparator,m=void 0===f?/ +/g:f,v=i.findAllMatches,_=void 0!==v&&v,g=i.minMatchCharLength,y=void 0===g?1:g,b=i.id,E=void 0===b?null:b,S=i.keys,I=void 0===S?[]:S,O=i.shouldSort,C=void 0===O||O,T=i.getFn,w=void 0===T?s:T,A=i.sortFn,L=void 0===A?function(e,t){return e.score-t.score}:A,P=i.tokenize,D=void 0!==P&&P,x=i.matchAllTokens,N=void 0!==x&&x,M=i.includeMatches,j=void 0!==M&&M,k=i.includeScore,F=void 0!==k&&k,K=i.verbose,R=void 0!==K&&K;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:m,findAllMatches:_,minMatchCharLength:y,id:E,keys:I,includeMatches:j,includeScore:F,shouldSort:C,getFn:w,sortFn:L,verbose:R,tokenize:D,matchAllTokens:N},this.setCollection(t)}var t,i;return t=e,(i=[{key:"setCollection",value:function(e){return this.list=e,e}},{key:"search",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{limit:!1};this._log('---------\nSearch pattern: "'.concat(e,'"'));var i=this._prepareSearchers(e),n=i.tokenSearchers,r=i.fullSearcher,o=this._search(n,r),s=o.weights,a=o.results;return this._computeScore(s,a),this.options.shouldSort&&this._sort(a),t.limit&&"number"==typeof t.limit&&(a=a.slice(0,t.limit)),this._format(a)}},{key:"_prepareSearchers",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=[];if(this.options.tokenize)for(var i=e.split(this.options.tokenSeparator),n=0,r=i.length;n<r;n+=1)t.push(new o(i[n],this.options));return{tokenSearchers:t,fullSearcher:new o(e,this.options)}}},{key:"_search",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,i=this.list,n={},r=[];if("string"==typeof i[0]){for(var o=0,s=i.length;o<s;o+=1)this._analyze({key:"",value:i[o],record:o,index:o},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t});return{weights:null,results:r}}for(var a={},c=0,l=i.length;c<l;c+=1)for(var u=i[c],h=0,d=this.options.keys.length;h<d;h+=1){var p=this.options.keys[h];if("string"!=typeof p){if(a[p.name]={weight:1-p.weight||1},p.weight<=0||p.weight>1)throw new Error("Key weight has to be > 0 and <= 1");p=p.name}else a[p]={weight:1};this._analyze({key:p,value:this.options.getFn(u,p),record:u,index:c},{resultMap:n,results:r,tokenSearchers:e,fullSearcher:t})}return{weights:a,results:r}}},{key:"_analyze",value:function(e,t){var i=e.key,n=e.arrayIndex,r=void 0===n?-1:n,o=e.value,s=e.record,c=e.index,l=t.tokenSearchers,u=void 0===l?[]:l,h=t.fullSearcher,d=void 0===h?[]:h,p=t.resultMap,f=void 0===p?{}:p,m=t.results,v=void 0===m?[]:m;if(null!=o){var _=!1,g=-1,y=0;if("string"==typeof o){this._log("\nKey: ".concat(""===i?"-":i));var b=d.search(o);if(this._log('Full text: "'.concat(o,'", score: ').concat(b.score)),this.options.tokenize){for(var E=o.split(this.options.tokenSeparator),S=[],I=0;I<u.length;I+=1){var O=u[I];this._log('\nPattern: "'.concat(O.pattern,'"'));for(var C=!1,T=0;T<E.length;T+=1){var w=E[T],A=O.search(w),L={};A.isMatch?(L[w]=A.score,_=!0,C=!0,S.push(A.score)):(L[w]=1,this.options.matchAllTokens||S.push(1)),this._log('Token: "'.concat(w,'", score: ').concat(L[w]))}C&&(y+=1)}g=S[0];for(var P=S.length,D=1;D<P;D+=1)g+=S[D];g/=P,this._log("Token score average:",g)}var x=b.score;g>-1&&(x=(x+g)/2),this._log("Score average:",x);var N=!this.options.tokenize||!this.options.matchAllTokens||y>=u.length;if(this._log("\nCheck Matches: ".concat(N)),(_||b.isMatch)&&N){var M=f[c];M?M.output.push({key:i,arrayIndex:r,value:o,score:x,matchedIndices:b.matchedIndices}):(f[c]={item:s,output:[{key:i,arrayIndex:r,value:o,score:x,matchedIndices:b.matchedIndices}]},v.push(f[c]))}}else if(a(o))for(var j=0,k=o.length;j<k;j+=1)this._analyze({key:i,arrayIndex:j,value:o[j],record:s,index:c},{resultMap:f,results:v,tokenSearchers:u,fullSearcher:d})}}},{key:"_computeScore",value:function(e,t){this._log("\n\nComputing score:\n");for(var i=0,n=t.length;i<n;i+=1){for(var r=t[i].output,o=r.length,s=1,a=1,c=0;c<o;c+=1){var l=e?e[r[c].key].weight:1,u=(1===l?r[c].score:r[c].score||.001)*l;1!==l?a=Math.min(a,u):(r[c].nScore=u,s*=u)}t[i].score=1===a?s:a,this._log(t[i])}}},{key:"_sort",value:function(e){this._log("\n\nSorting...."),e.sort(this.options.sortFn)}},{key:"_format",value:function(e){var t=[];if(this.options.verbose){var i=[];this._log("\n\nOutput:\n\n",JSON.stringify(e,(function(e,t){if("object"===n(t)&&null!==t){if(-1!==i.indexOf(t))return;i.push(t)}return t}))),i=null}var r=[];this.options.includeMatches&&r.push((function(e,t){var i=e.output;t.matches=[];for(var n=0,r=i.length;n<r;n+=1){var o=i[n];if(0!==o.matchedIndices.length){var s={indices:o.matchedIndices,value:o.value};o.key&&(s.key=o.key),o.hasOwnProperty("arrayIndex")&&o.arrayIndex>-1&&(s.arrayIndex=o.arrayIndex),t.matches.push(s)}}})),this.options.includeScore&&r.push((function(e,t){t.score=e.score}));for(var o=0,s=e.length;o<s;o+=1){var a=e[o];if(this.options.id&&(a.item=this.options.getFn(a.item,this.options.id)[0]),r.length){for(var c={item:a.item},l=0,u=r.length;l<u;l+=1)r[l](a,c);t.push(c)}else t.push(a.item)}return t}},{key:"_log",value:function(){var e;this.options.verbose&&(e=console).log.apply(e,arguments)}}])&&r(t.prototype,i),e}();e.exports=c},function(e,t,i){function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=i(3),o=i(4),s=i(7),a=function(){function e(t,i){var n=i.location,r=void 0===n?0:n,o=i.distance,a=void 0===o?100:o,c=i.threshold,l=void 0===c?.6:c,u=i.maxPatternLength,h=void 0===u?32:u,d=i.isCaseSensitive,p=void 0!==d&&d,f=i.tokenSeparator,m=void 0===f?/ +/g:f,v=i.findAllMatches,_=void 0!==v&&v,g=i.minMatchCharLength,y=void 0===g?1:g;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options={location:r,distance:a,threshold:l,maxPatternLength:h,isCaseSensitive:p,tokenSeparator:m,findAllMatches:_,minMatchCharLength:y},this.pattern=this.options.isCaseSensitive?t:t.toLowerCase(),this.pattern.length<=h&&(this.patternAlphabet=s(this.pattern))}var t,i;return t=e,(i=[{key:"search",value:function(e){if(this.options.isCaseSensitive||(e=e.toLowerCase()),this.pattern===e)return{isMatch:!0,score:0,matchedIndices:[[0,e.length-1]]};var t=this.options,i=t.maxPatternLength,n=t.tokenSeparator;if(this.pattern.length>i)return r(e,this.pattern,n);var s=this.options,a=s.location,c=s.distance,l=s.threshold,u=s.findAllMatches,h=s.minMatchCharLength;return o(e,this.pattern,this.patternAlphabet,{location:a,distance:c,threshold:l,findAllMatches:u,minMatchCharLength:h})}}])&&n(t.prototype,i),e}();e.exports=a},function(e,t){var i=/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;e.exports=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:/ +/g,r=new RegExp(t.replace(i,"\\$&").replace(n,"|")),o=e.match(r),s=!!o,a=[];if(s)for(var c=0,l=o.length;c<l;c+=1){var u=o[c];a.push([e.indexOf(u),u.length-1])}return{score:s?.5:1,isMatch:s,matchedIndices:a}}},function(e,t,i){var n=i(5),r=i(6);e.exports=function(e,t,i,o){for(var s=o.location,a=void 0===s?0:s,c=o.distance,l=void 0===c?100:c,u=o.threshold,h=void 0===u?.6:u,d=o.findAllMatches,p=void 0!==d&&d,f=o.minMatchCharLength,m=void 0===f?1:f,v=a,_=e.length,g=h,y=e.indexOf(t,v),b=t.length,E=[],S=0;S<_;S+=1)E[S]=0;if(-1!==y){var I=n(t,{errors:0,currentLocation:y,expectedLocation:v,distance:l});if(g=Math.min(I,g),-1!==(y=e.lastIndexOf(t,v+b))){var O=n(t,{errors:0,currentLocation:y,expectedLocation:v,distance:l});g=Math.min(O,g)}}y=-1;for(var C=[],T=1,w=b+_,A=1<<(b<=31?b-1:30),L=0;L<b;L+=1){for(var P=0,D=w;P<D;)n(t,{errors:L,currentLocation:v+D,expectedLocation:v,distance:l})<=g?P=D:w=D,D=Math.floor((w-P)/2+P);w=D;var x=Math.max(1,v-D+1),N=p?_:Math.min(v+D,_)+b,M=Array(N+2);M[N+1]=(1<<L)-1;for(var j=N;j>=x;j-=1){var k=j-1,F=i[e.charAt(k)];if(F&&(E[k]=1),M[j]=(M[j+1]<<1|1)&F,0!==L&&(M[j]|=(C[j+1]|C[j])<<1|1|C[j+1]),M[j]&A&&(T=n(t,{errors:L,currentLocation:k,expectedLocation:v,distance:l}))<=g){if(g=T,(y=k)<=v)break;x=Math.max(1,2*v-y)}}if(n(t,{errors:L+1,currentLocation:v,expectedLocation:v,distance:l})>g)break;C=M}return{isMatch:y>=0,score:0===T?.001:T,matchedIndices:r(E,m)}}},function(e,t){e.exports=function(e,t){var i=t.errors,n=void 0===i?0:i,r=t.currentLocation,o=void 0===r?0:r,s=t.expectedLocation,a=void 0===s?0:s,c=t.distance,l=void 0===c?100:c,u=n/e.length,h=Math.abs(a-o);return l?u+h/l:h?1:u}},function(e,t){e.exports=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=[],n=-1,r=-1,o=0,s=e.length;o<s;o+=1){var a=e[o];a&&-1===n?n=o:a||-1===n||((r=o-1)-n+1>=t&&i.push([n,r]),n=-1)}return e[o-1]&&o-n>=t&&i.push([n,o-1]),i}},function(e,t){e.exports=function(e){for(var t={},i=e.length,n=0;n<i;n+=1)t[e.charAt(n)]=0;for(var r=0;r<i;r+=1)t[e.charAt(r)]|=1<<i-r-1;return t}},function(e,t,i){var n=i(0);e.exports=function(e,t){return function e(t,i,r){if(i){var o=i.indexOf("."),s=i,a=null;-1!==o&&(s=i.slice(0,o),a=i.slice(o+1));var c=t[s];if(null!=c)if(a||"string"!=typeof c&&"number"!=typeof c)if(n(c))for(var l=0,u=c.length;l<u;l+=1)e(c[l],a,r);else a&&e(c,a,r);else r.push(c.toString())}else r.push(t);return r}(e,t,[])}}])},function(e,t,i){"use strict";var n=function(e){return function(e){return!!e&&"object"==typeof e}(e)&&!function(e){var t=Object.prototype.toString.call(e);return"[object RegExp]"===t||"[object Date]"===t||function(e){return e.$$typeof===r}(e)}(e)};var r="function"==typeof Symbol&&Symbol.for?Symbol.for("react.element"):60103;function o(e,t){return!1!==t.clone&&t.isMergeableObject(e)?l((i=e,Array.isArray(i)?[]:{}),e,t):e;var i}function s(e,t,i){return e.concat(t).map((function(e){return o(e,i)}))}function a(e){return Object.keys(e).concat(function(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter((function(t){return e.propertyIsEnumerable(t)})):[]}(e))}function c(e,t,i){var n={};return i.isMergeableObject(e)&&a(e).forEach((function(t){n[t]=o(e[t],i)})),a(t).forEach((function(r){(function(e,t){try{return t in e&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}catch(e){return!1}})(e,r)||(i.isMergeableObject(t[r])&&e[r]?n[r]=function(e,t){if(!t.customMerge)return l;var i=t.customMerge(e);return"function"==typeof i?i:l}(r,i)(e[r],t[r],i):n[r]=o(t[r],i))})),n}function l(e,t,i){(i=i||{}).arrayMerge=i.arrayMerge||s,i.isMergeableObject=i.isMergeableObject||n,i.cloneUnlessOtherwiseSpecified=o;var r=Array.isArray(t);return r===Array.isArray(e)?r?i.arrayMerge(e,t,i):c(e,t,i):o(t,i)}l.all=function(e,t){if(!Array.isArray(e))throw new Error("first argument should be an array");return e.reduce((function(e,i){return l(e,i,t)}),{})};var u=l;e.exports=u},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n},r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=i(3),s=r(i(4)),a=function(){function e(){this._store=o.createStore(s.default,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())}return e.prototype.subscribe=function(e){this._store.subscribe(e)},e.prototype.dispatch=function(e){this._store.dispatch(e)},Object.defineProperty(e.prototype,"state",{get:function(){return this._store.getState()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"items",{get:function(){return this.state.items},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeItems",{get:function(){return this.items.filter((function(e){return!0===e.active}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"highlightedActiveItems",{get:function(){return this.items.filter((function(e){return e.active&&e.highlighted}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"choices",{get:function(){return this.state.choices},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeChoices",{get:function(){return this.choices.filter((function(e){return!0===e.active}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"selectableChoices",{get:function(){return this.choices.filter((function(e){return!0!==e.disabled}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"searchableChoices",{get:function(){return this.selectableChoices.filter((function(e){return!0!==e.placeholder}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"placeholderChoice",{get:function(){return n(this.choices).reverse().find((function(e){return!0===e.placeholder}))},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"groups",{get:function(){return this.state.groups},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"activeGroups",{get:function(){var e=this.groups,t=this.choices;return e.filter((function(e){var i=!0===e.active&&!1===e.disabled,n=t.some((function(e){return!0===e.active&&!1===e.disabled}));return i&&n}),[])},enumerable:!0,configurable:!0}),e.prototype.isLoading=function(){return this.state.loading},e.prototype.getChoiceById=function(e){return this.activeChoices.find((function(t){return t.id===parseInt(e,10)}))},e.prototype.getGroupById=function(e){return this.groups.find((function(t){return t.id===e}))},e}();t.default=a},function(e,t){var i;i=function(){return this}();try{i=i||new Function("return this")()}catch(e){"object"==typeof window&&(i=window)}e.exports=i},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=[],t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"ADD_ITEM":var r=i;return n(e,[{id:r.id,choiceId:r.choiceId,groupId:r.groupId,value:r.value,label:r.label,active:!0,highlighted:!1,customProperties:r.customProperties,placeholder:r.placeholder||!1,keyCode:null}]).map((function(e){var t=e;return t.highlighted=!1,t}));case"REMOVE_ITEM":return e.map((function(e){var t=e;return t.id===i.id&&(t.active=!1),t}));case"HIGHLIGHT_ITEM":var o=i;return e.map((function(e){var t=e;return t.id===o.id&&(t.highlighted=o.highlighted),t}));default:return e}}},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=[],t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"ADD_GROUP":var r=i;return n(e,[{id:r.id,value:r.value,active:r.active,disabled:r.disabled}]);case"CLEAR_CHOICES":return[];default:return e}}},function(e,t,i){"use strict";var n=this&&this.__spreadArrays||function(){for(var e=0,t=0,i=arguments.length;t<i;t++)e+=arguments[t].length;var n=Array(e),r=0;for(t=0;t<i;t++)for(var o=arguments[t],s=0,a=o.length;s<a;s++,r++)n[r]=o[s];return n};Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=[],t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"ADD_CHOICE":var r=i,o={id:r.id,elementId:r.elementId,groupId:r.groupId,value:r.value,label:r.label||r.value,disabled:r.disabled||!1,selected:!1,active:!0,score:9999,customProperties:r.customProperties,placeholder:r.placeholder||!1};return n(e,[o]);case"ADD_ITEM":var s=i;return s.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt(""+s.choiceId,10)&&(t.selected=!0),t})):e;case"REMOVE_ITEM":var a=i;return a.choiceId&&a.choiceId>-1?e.map((function(e){var t=e;return t.id===parseInt(""+a.choiceId,10)&&(t.selected=!1),t})):e;case"FILTER_CHOICES":var c=i;return e.map((function(e){var t=e;return t.active=c.results.some((function(e){var i=e.item,n=e.score;return i.id===t.id&&(t.score=n,!0)})),t}));case"ACTIVATE_CHOICES":var l=i;return e.map((function(e){var t=e;return t.active=l.active,t}));case"CLEAR_CHOICES":return t.defaultState;default:return e}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.defaultState=!1;t.default=function(e,i){switch(void 0===e&&(e=t.defaultState),i.type){case"SET_IS_LOADING":return i.isLoading;default:return e}}},function(e,t,i){"use strict";var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=n(i(19));t.Dropdown=r.default;var o=n(i(20));t.Container=o.default;var s=n(i(21));t.Input=s.default;var a=n(i(22));t.List=a.default;var c=n(i(23));t.WrappedInput=c.default;var l=n(i(24));t.WrappedSelect=l.default},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(){function e(e){var t=e.element,i=e.type,n=e.classNames;this.element=t,this.classNames=n,this.type=i,this.isActive=!1}return Object.defineProperty(e.prototype,"distanceFromTopWindow",{get:function(){return this.element.getBoundingClientRect().bottom},enumerable:!0,configurable:!0}),e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.show=function(){return this.element.classList.add(this.classNames.activeState),this.element.setAttribute("aria-expanded","true"),this.isActive=!0,this},e.prototype.hide=function(){return this.element.classList.remove(this.classNames.activeState),this.element.setAttribute("aria-expanded","false"),this.isActive=!1,this},e}();t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,r=e.position;this.element=t,this.classNames=n,this.type=i,this.position=r,this.isOpen=!1,this.isFlipped=!1,this.isFocussed=!1,this.isDisabled=!1,this.isLoading=!1,this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return e.prototype.addEventListeners=function(){this.element.addEventListener("focus",this._onFocus),this.element.addEventListener("blur",this._onBlur)},e.prototype.removeEventListeners=function(){this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.shouldFlip=function(e){if("number"!=typeof e)return!1;var t=!1;return"auto"===this.position?t=!window.matchMedia("(min-height: "+(e+1)+"px)").matches:"top"===this.position&&(t=!0),t},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype.open=function(e){this.element.classList.add(this.classNames.openState),this.element.setAttribute("aria-expanded","true"),this.isOpen=!0,this.shouldFlip(e)&&(this.element.classList.add(this.classNames.flippedState),this.isFlipped=!0)},e.prototype.close=function(){this.element.classList.remove(this.classNames.openState),this.element.setAttribute("aria-expanded","false"),this.removeActiveDescendant(),this.isOpen=!1,this.isFlipped&&(this.element.classList.remove(this.classNames.flippedState),this.isFlipped=!1)},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.addFocusState=function(){this.element.classList.add(this.classNames.focusState)},e.prototype.removeFocusState=function(){this.element.classList.remove(this.classNames.focusState)},e.prototype.enable=function(){this.element.classList.remove(this.classNames.disabledState),this.element.removeAttribute("aria-disabled"),this.type===r.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","0"),this.isDisabled=!1},e.prototype.disable=function(){this.element.classList.add(this.classNames.disabledState),this.element.setAttribute("aria-disabled","true"),this.type===r.SELECT_ONE_TYPE&&this.element.setAttribute("tabindex","-1"),this.isDisabled=!0},e.prototype.wrap=function(e){n.wrap(e,this.element)},e.prototype.unwrap=function(e){this.element.parentNode&&(this.element.parentNode.insertBefore(e,this.element),this.element.parentNode.removeChild(this.element))},e.prototype.addLoadingState=function(){this.element.classList.add(this.classNames.loadingState),this.element.setAttribute("aria-busy","true"),this.isLoading=!0},e.prototype.removeLoadingState=function(){this.element.classList.remove(this.classNames.loadingState),this.element.removeAttribute("aria-busy"),this.isLoading=!1},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(0),o=function(){function e(e){var t=e.element,i=e.type,n=e.classNames,r=e.preventPaste;this.element=t,this.type=i,this.classNames=n,this.preventPaste=r,this.isFocussed=this.element.isEqualNode(document.activeElement),this.isDisabled=t.disabled,this._onPaste=this._onPaste.bind(this),this._onInput=this._onInput.bind(this),this._onFocus=this._onFocus.bind(this),this._onBlur=this._onBlur.bind(this)}return Object.defineProperty(e.prototype,"placeholder",{set:function(e){this.element.placeholder=e},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"value",{get:function(){return n.sanitise(this.element.value)},set:function(e){this.element.value=e},enumerable:!0,configurable:!0}),e.prototype.addEventListeners=function(){this.element.addEventListener("paste",this._onPaste),this.element.addEventListener("input",this._onInput,{passive:!0}),this.element.addEventListener("focus",this._onFocus,{passive:!0}),this.element.addEventListener("blur",this._onBlur,{passive:!0})},e.prototype.removeEventListeners=function(){this.element.removeEventListener("input",this._onInput),this.element.removeEventListener("paste",this._onPaste),this.element.removeEventListener("focus",this._onFocus),this.element.removeEventListener("blur",this._onBlur)},e.prototype.enable=function(){this.element.removeAttribute("disabled"),this.isDisabled=!1},e.prototype.disable=function(){this.element.setAttribute("disabled",""),this.isDisabled=!0},e.prototype.focus=function(){this.isFocussed||this.element.focus()},e.prototype.blur=function(){this.isFocussed&&this.element.blur()},e.prototype.clear=function(e){return void 0===e&&(e=!0),this.element.value&&(this.element.value=""),e&&this.setWidth(),this},e.prototype.setWidth=function(){var e=this.element,t=e.style,i=e.value,n=e.placeholder;t.minWidth=n.length+1+"ch",t.width=i.length+1+"ch"},e.prototype.setActiveDescendant=function(e){this.element.setAttribute("aria-activedescendant",e)},e.prototype.removeActiveDescendant=function(){this.element.removeAttribute("aria-activedescendant")},e.prototype._onInput=function(){this.type!==r.SELECT_ONE_TYPE&&this.setWidth()},e.prototype._onPaste=function(e){this.preventPaste&&e.preventDefault()},e.prototype._onFocus=function(){this.isFocussed=!0},e.prototype._onBlur=function(){this.isFocussed=!1},e}();t.default=o},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0),r=function(){function e(e){var t=e.element;this.element=t,this.scrollPos=this.element.scrollTop,this.height=this.element.offsetHeight}return e.prototype.clear=function(){this.element.innerHTML=""},e.prototype.append=function(e){this.element.appendChild(e)},e.prototype.getChild=function(e){return this.element.querySelector(e)},e.prototype.hasChildren=function(){return this.element.hasChildNodes()},e.prototype.scrollToTop=function(){this.element.scrollTop=0},e.prototype.scrollToChildElement=function(e,t){var i=this;if(e){var n=this.element.offsetHeight,r=this.element.scrollTop+n,o=e.offsetHeight,s=e.offsetTop+o,a=t>0?this.element.scrollTop+s-r:e.offsetTop;requestAnimationFrame((function(){i._animateScroll(a,t)}))}},e.prototype._scrollDown=function(e,t,i){var n=(i-e)/t,r=n>1?n:1;this.element.scrollTop=e+r},e.prototype._scrollUp=function(e,t,i){var n=(e-i)/t,r=n>1?n:1;this.element.scrollTop=e-r},e.prototype._animateScroll=function(e,t){var i=this,r=n.SCROLLING_SPEED,o=this.element.scrollTop,s=!1;t>0?(this._scrollDown(o,r,e),o<e&&(s=!0)):(this._scrollUp(o,r,e),o>e&&(s=!0)),s&&requestAnimationFrame((function(){i._animateScroll(e,t)}))},e}();t.default=r},function(e,t,i){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var i=t.element,n=t.classNames,r=t.delimiter,o=e.call(this,{element:i,classNames:n})||this;return o.delimiter=r,o}return r(t,e),Object.defineProperty(t.prototype,"value",{get:function(){return this.element.value},set:function(e){this.element.setAttribute("value",e),this.element.value=e},enumerable:!0,configurable:!0}),t}(o(i(5)).default);t.default=s},function(e,t,i){"use strict";var n,r=this&&this.__extends||(n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i])})(e,t)},function(e,t){function i(){this.constructor=e}n(e,t),e.prototype=null===t?Object.create(t):(i.prototype=t.prototype,new i)}),o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var s=function(e){function t(t){var i=t.element,n=t.classNames,r=t.template,o=e.call(this,{element:i,classNames:n})||this;return o.template=r,o}return r(t,e),Object.defineProperty(t.prototype,"placeholderOption",{get:function(){return this.element.querySelector('option[value=""]')||this.element.querySelector("option[placeholder]")},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"optionGroups",{get:function(){return Array.from(this.element.getElementsByTagName("OPTGROUP"))},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"options",{get:function(){return Array.from(this.element.options)},set:function(e){var t=this,i=document.createDocumentFragment();e.forEach((function(e){return n=e,r=t.template(n),void i.appendChild(r);var n,r})),this.appendDocFragment(i)},enumerable:!0,configurable:!0}),t.prototype.appendDocFragment=function(e){this.element.innerHTML="",this.element.appendChild(e)},t}(o(i(5)).default);t.default=s},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={containerOuter:function(e,t,i,n,r,o){var s=e.containerOuter,a=Object.assign(document.createElement("div"),{className:s});return a.dataset.type=o,t&&(a.dir=t),n&&(a.tabIndex=0),i&&(a.setAttribute("role",r?"combobox":"listbox"),r&&a.setAttribute("aria-autocomplete","list")),a.setAttribute("aria-haspopup","true"),a.setAttribute("aria-expanded","false"),a},containerInner:function(e){var t=e.containerInner;return Object.assign(document.createElement("div"),{className:t})},itemList:function(e,t){var i=e.list,n=e.listSingle,r=e.listItems;return Object.assign(document.createElement("div"),{className:i+" "+(t?n:r)})},placeholder:function(e,t){var i=e.placeholder;return Object.assign(document.createElement("div"),{className:i,innerHTML:t})},item:function(e,t,i){var n=e.item,r=e.button,o=e.highlightedState,s=e.itemSelectable,a=e.placeholder,c=t.id,l=t.value,u=t.label,h=t.customProperties,d=t.active,p=t.disabled,f=t.highlighted,m=t.placeholder,v=Object.assign(document.createElement("div"),{className:n,innerHTML:u});if(Object.assign(v.dataset,{item:"",id:c,value:l,customProperties:h}),d&&v.setAttribute("aria-selected","true"),p&&v.setAttribute("aria-disabled","true"),m&&v.classList.add(a),v.classList.add(f?o:s),i){p&&v.classList.remove(s),v.dataset.deletable="";var _=Object.assign(document.createElement("button"),{type:"button",className:r,innerHTML:"Remove item"});_.setAttribute("aria-label","Remove item: '"+l+"'"),_.dataset.button="",v.appendChild(_)}return v},choiceList:function(e,t){var i=e.list,n=Object.assign(document.createElement("div"),{className:i});return t||n.setAttribute("aria-multiselectable","true"),n.setAttribute("role","listbox"),n},choiceGroup:function(e,t){var i=e.group,n=e.groupHeading,r=e.itemDisabled,o=t.id,s=t.value,a=t.disabled,c=Object.assign(document.createElement("div"),{className:i+" "+(a?r:"")});return c.setAttribute("role","group"),Object.assign(c.dataset,{group:"",id:o,value:s}),a&&c.setAttribute("aria-disabled","true"),c.appendChild(Object.assign(document.createElement("div"),{className:n,innerHTML:s})),c},choice:function(e,t,i){var n=e.item,r=e.itemChoice,o=e.itemSelectable,s=e.selectedState,a=e.itemDisabled,c=e.placeholder,l=t.id,u=t.value,h=t.label,d=t.groupId,p=t.elementId,f=t.disabled,m=t.selected,v=t.placeholder,_=Object.assign(document.createElement("div"),{id:p,innerHTML:h,className:n+" "+r});return m&&_.classList.add(s),v&&_.classList.add(c),_.setAttribute("role",d&&d>0?"treeitem":"option"),Object.assign(_.dataset,{choice:"",id:l,value:u,selectText:i}),f?(_.classList.add(a),_.dataset.choiceDisabled="",_.setAttribute("aria-disabled","true")):(_.classList.add(o),_.dataset.choiceSelectable=""),_},input:function(e,t){var i=e.input,n=e.inputCloned,r=Object.assign(document.createElement("input"),{type:"text",className:i+" "+n,autocomplete:"off",autocapitalize:"off",spellcheck:!1});return r.setAttribute("role","textbox"),r.setAttribute("aria-autocomplete","list"),r.setAttribute("aria-label",t),r},dropdown:function(e){var t=e.list,i=e.listDropdown,n=document.createElement("div");return n.classList.add(t,i),n.setAttribute("aria-expanded","false"),n},notice:function(e,t,i){var n=e.item,r=e.itemChoice,o=e.noResults,s=e.noChoices;void 0===i&&(i="");var a=[n,r];return"no-choices"===i?a.push(s):"no-results"===i&&a.push(o),Object.assign(document.createElement("div"),{innerHTML:t,className:a.join(" ")})},option:function(e){var t=e.label,i=e.value,n=e.customProperties,r=e.active,o=e.disabled,s=new Option(t,i,!1,r);return n&&(s.dataset.customProperties=""+n),s.disabled=!!o,s}};t.default=n},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.addChoice=function(e){var t=e.value,i=e.label,r=e.id,o=e.groupId,s=e.disabled,a=e.elementId,c=e.customProperties,l=e.placeholder,u=e.keyCode;return{type:n.ACTION_TYPES.ADD_CHOICE,value:t,label:i,id:r,groupId:o,disabled:s,elementId:a,customProperties:c,placeholder:l,keyCode:u}},t.filterChoices=function(e){return{type:n.ACTION_TYPES.FILTER_CHOICES,results:e}},t.activateChoices=function(e){return void 0===e&&(e=!0),{type:n.ACTION_TYPES.ACTIVATE_CHOICES,active:e}},t.clearChoices=function(){return{type:n.ACTION_TYPES.CLEAR_CHOICES}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.addItem=function(e){var t=e.value,i=e.label,r=e.id,o=e.choiceId,s=e.groupId,a=e.customProperties,c=e.placeholder,l=e.keyCode;return{type:n.ACTION_TYPES.ADD_ITEM,value:t,label:i,id:r,choiceId:o,groupId:s,customProperties:a,placeholder:c,keyCode:l}},t.removeItem=function(e,t){return{type:n.ACTION_TYPES.REMOVE_ITEM,id:e,choiceId:t}},t.highlightItem=function(e,t){return{type:n.ACTION_TYPES.HIGHLIGHT_ITEM,id:e,highlighted:t}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.addGroup=function(e){var t=e.value,i=e.id,r=e.active,o=e.disabled;return{type:n.ACTION_TYPES.ADD_GROUP,value:t,id:i,active:r,disabled:o}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i(0);t.clearAll=function(){return{type:n.ACTION_TYPES.CLEAR_ALL}},t.resetTo=function(e){return{type:n.ACTION_TYPES.RESET_TO,state:e}},t.setIsLoading=function(e){return{type:n.ACTION_TYPES.SET_IS_LOADING,isLoading:e}}}]).default;;// @fancyapps/ui/Fancybox v4.0.7
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).window=t.window||{})}(this,(function(t){"use strict";function e(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function i(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function s(t,e,i){return e&&a(t.prototype,e),i&&a(t,i),t}function r(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function l(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&h(t,e)}function c(t){return c=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},c(t)}function h(t,e){return h=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},h(t,e)}function d(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function u(t,e){if(e&&("object"==typeof e||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return d(t)}function f(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=c(t);if(e){var o=c(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return u(this,i)}}function v(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var i=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==i)return;var n,o,a=[],s=!0,r=!1;try{for(i=i.call(t);!(s=(n=i.next()).done)&&(a.push(n.value),!e||a.length!==e);s=!0);}catch(t){r=!0,o=t}finally{try{s||null==i.return||i.return()}finally{if(r)throw o}}return a}(t,e)||g(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(t){return function(t){if(Array.isArray(t))return m(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||g(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){if(t){if("string"==typeof t)return m(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?m(t,e):void 0}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function y(t,e){var i="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!i){if(Array.isArray(t)||(i=g(t))||e&&t&&"number"==typeof t.length){i&&(t=i);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,r=!1;return{s:function(){i=i.call(t)},n:function(){var t=i.next();return s=t.done,t},e:function(t){r=!0,a=t},f:function(){try{s||null==i.return||i.return()}finally{if(r)throw a}}}}var b=function(t){return"object"===n(t)&&null!==t&&t.constructor===Object&&"[object Object]"===Object.prototype.toString.call(t)},x=function t(){for(var e=!1,i=arguments.length,o=new Array(i),a=0;a<i;a++)o[a]=arguments[a];"boolean"==typeof o[0]&&(e=o.shift());var s=o[0];if(!s||"object"!==n(s))throw new Error("extendee must be an object");for(var r=o.slice(1),l=r.length,c=0;c<l;c++){var h=r[c];for(var d in h)if(h.hasOwnProperty(d)){var u=h[d];if(e&&(Array.isArray(u)||b(u))){var f=Array.isArray(u)?[]:{};s[d]=t(!0,s.hasOwnProperty(d)?s[d]:f,u)}else s[d]=u}}return s},w=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e4;return t=parseFloat(t)||0,Math.round((t+Number.EPSILON)*e)/e},k="undefined"!=typeof window&&window.ResizeObserver||function(){function t(e){o(this,t),this.observables=[],this.boundCheck=this.check.bind(this),this.boundCheck(),this.callback=e}return s(t,[{key:"observe",value:function(t){if(!this.observables.some((function(e){return e.el===t}))){var e={el:t,size:{height:t.clientHeight,width:t.clientWidth}};this.observables.push(e)}}},{key:"unobserve",value:function(t){this.observables=this.observables.filter((function(e){return e.el!==t}))}},{key:"disconnect",value:function(){this.observables=[]}},{key:"check",value:function(){var t=this.observables.filter((function(t){var e=t.el.clientHeight,i=t.el.clientWidth;if(t.size.height!==e||t.size.width!==i)return t.size.height=e,t.size.width=i,!0})).map((function(t){return t.el}));t.length>0&&this.callback(t),window.requestAnimationFrame(this.boundCheck)}}]),t}(),S=function(){var t=window.getSelection?window.getSelection():document.selection;t&&t.rangeCount&&t.getRangeAt(0).getClientRects().length&&(t.removeAllRanges?t.removeAllRanges():t.empty&&t.empty())},C=function t(e){o(this,t),this.id=-1,this.id=e.pointerId||e.identifier||-1,this.pageX=e.pageX,this.pageY=e.pageY,this.clientX=e.clientX,this.clientY=e.clientY,this.nativePointer=e};function $(t,e){return e?Math.sqrt(Math.pow(e.clientX-t.clientX,2)+Math.pow(e.clientY-t.clientY,2)):0}function E(t,e){return e?{clientX:(t.clientX+e.clientX)/2,clientY:(t.clientY+e.clientY)/2}:t}var P=function(){function t(e){var i=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=n.start,s=void 0===a?function(){return!0}:a,r=n.move,l=void 0===r?function(){}:r,c=n.end,h=void 0===c?function(){}:c;o(this,t),this.element=e,this.startPointers=[],this.currentPointers=[],this.startCallback=s,this.moveCallback=l,this.endCallback=h,this.onStart=function(t){if(!t.button||0===t.button){var e=new C(t);if(!1===i.startCallback(e,t))return!1;t.preventDefault(),S(),i.currentPointers.push(e),i.startPointers.push(e),(t.target&&"setPointerCapture"in t.target?t.target:i.element).setPointerCapture(t.pointerId),i.element.addEventListener("pointermove",i.onMove),i.element.addEventListener("pointerup",i.onEnd),i.element.addEventListener("pointercancel",i.onEnd)}},this.onMove=function(t){for(var e=i.currentPointers.slice(),n=[],o=function(){var t=s[a],e=i.currentPointers.findIndex((function(e){return e.id===t.id}));if(e<0)return"continue";n.push(t),i.currentPointers[e]=t},a=0,s=[new C(t)];a<s.length;a++)o();n.length&&i.moveCallback(e,i.currentPointers,t)},this.onEnd=function(t){var e=new C(t),n=i.currentPointers.findIndex((function(t){return t.id===e.id}));if(-1===n)return!1;i.currentPointers.splice(n,1),i.startPointers.splice(n,1),i.endCallback(e,t),i.currentPointers.length||(i.element.removeEventListener("pointermove",i.onMove),i.element.removeEventListener("pointerup",i.onEnd),i.element.removeEventListener("pointercancel",i.onEnd))},this.element.addEventListener("pointerdown",this.onStart)}return s(t,[{key:"stop",value:function(){this.element.removeEventListener("pointerdown",this.onStart),this.element.removeEventListener("pointermove",this.onMove),this.element.removeEventListener("pointerup",this.onEnd),this.element.removeEventListener("pointercancel",this.onEnd)}}]),t}(),T=function t(e){return!!(e&&"object"===n(e)&&e instanceof Element&&e!==document.body)&&(function(t){var e=getComputedStyle(t)["overflow-y"],i=getComputedStyle(t)["overflow-x"],n=("scroll"===e||"auto"===e)&&Math.abs(t.scrollHeight-t.clientHeight)>1,o=("scroll"===i||"auto"===i)&&Math.abs(t.scrollWidth-t.clientWidth)>1;return n||o}(e)?e:t(e.parentNode))},L=function(t,e){return t.split(".").reduce((function(t,e){return t&&t[e]}),e)},A=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};o(this,t),this.options=x(!0,{},e),this.plugins=[],this.events={};for(var i=0,n=["on","once"];i<n.length;i++)for(var a=n[i],s=0,r=Object.entries(this.options[a]||{});s<r.length;s++){var l=r[s];this[a].apply(this,p(l))}}return s(t,[{key:"option",value:function(t,e){t=String(t);var i=L(t,this.options);if("function"==typeof i){for(var n,o=arguments.length,a=new Array(o>2?o-2:0),s=2;s<o;s++)a[s-2]=arguments[s];i=(n=i).call.apply(n,[this,this].concat(a))}return void 0===i?e:i}},{key:"localize",value:function(t){var e=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g,(function(t,n,o){var a=!1;if(!(a=o?e.option("".concat(n[0]+n.toLowerCase().substring(1),".l10n.").concat(o)):e.option("l10n.".concat(n))))return n;for(var s=0;s<i.length;s++)a=a.split(i[s][0]).join(i[s][1]);return a}))}},{key:"on",value:function(t,e){var i=this;if(b(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.on.apply(this,p(a))}return this}return String(t).split(" ").forEach((function(t){var n=i.events[t]=i.events[t]||[];-1==n.indexOf(e)&&n.push(e)})),this}},{key:"once",value:function(t,e){var i=this;if(b(t)){for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.once.apply(this,p(a))}return this}return String(t).split(" ").forEach((function(t){var n=function n(){i.off(t,n);for(var o=arguments.length,a=new Array(o),s=0;s<o;s++)a[s]=arguments[s];e.call.apply(e,[i,i].concat(a))};n._=e,i.on(t,n)})),this}},{key:"off",value:function(t,e){var i=this;if(!b(t))return t.split(" ").forEach((function(t){var n=i.events[t];if(!n||!n.length)return i;for(var o=-1,a=0,s=n.length;a<s;a++){var r=n[a];if(r&&(r===e||r._===e)){o=a;break}}-1!=o&&n.splice(o,1)})),this;for(var n=0,o=Object.entries(t);n<o.length;n++){var a=o[n];this.off.apply(this,p(a))}}},{key:"trigger",value:function(t){for(var e=arguments.length,i=new Array(e>1?e-1:0),n=1;n<e;n++)i[n-1]=arguments[n];var o,a=y(p(this.events[t]||[]).slice());try{for(a.s();!(o=a.n()).done;){var s=o.value;if(s&&!1===s.call.apply(s,[this,this].concat(i)))return!1}}catch(t){a.e(t)}finally{a.f()}var r,l=y(p(this.events["*"]||[]).slice());try{for(l.s();!(r=l.n()).done;){var c=r.value;if(c&&!1===c.call.apply(c,[this,t,this].concat(i)))return!1}}catch(t){l.e(t)}finally{l.f()}return!0}},{key:"attachPlugins",value:function(t){for(var e={},i=0,n=Object.entries(t||{});i<n.length;i++){var o=v(n[i],2),a=o[0],s=o[1];!1===this.options[a]||this.plugins[a]||(this.options[a]=x({},s.defaults||{},this.options[a]),e[a]=new s(this))}for(var r=0,l=Object.entries(e);r<l.length;r++){var c=v(l[r],2);c[0],c[1].attach(this)}return this.plugins=Object.assign({},this.plugins,e),this}},{key:"detachPlugins",value:function(){for(var t in this.plugins){var e=void 0;(e=this.plugins[t])&&"function"==typeof e.detach&&e.detach(this)}return this.plugins={},this}}]),t}(),O={touch:!0,zoom:!0,pinchToZoom:!0,panOnlyZoomed:!1,lockAxis:!1,friction:.64,decelFriction:.88,zoomFriction:.74,bounceForce:.2,baseScale:1,minScale:1,maxScale:2,step:.5,textSelection:!1,click:"toggleZoom",wheel:"zoom",wheelFactor:42,wheelLimit:5,draggableClass:"is-draggable",draggingClass:"is-dragging",ratio:1},z=function(t){l(n,t);var e=f(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(this,n),(i=e.call(this,x(!0,{},O,a))).state="init",i.$container=t;for(var s=0,r=["onLoad","onWheel","onClick"];s<r.length;s++){var l=r[s];i[l]=i[l].bind(d(i))}return i.initLayout(),i.resetValues(),i.attachPlugins(n.Plugins),i.trigger("init"),i.updateMetrics(),i.attachEvents(),i.trigger("ready"),!1===i.option("centerOnStart")?i.state="ready":i.panTo({friction:0}),i}return s(n,[{key:"initLayout",value:function(){var t=this.$container;if(!(t instanceof HTMLElement))throw new Error("Panzoom: Container not found");var e=this.option("content")||t.querySelector(".panzoom__content");if(!e)throw new Error("Panzoom: Content not found");this.$content=e;var i,n=this.option("viewport")||t.querySelector(".panzoom__viewport");n||!1===this.option("wrapInner")||((n=document.createElement("div")).classList.add("panzoom__viewport"),(i=n).append.apply(i,p(t.childNodes)),t.appendChild(n));this.$viewport=n||e.parentNode}},{key:"resetValues",value:function(){this.updateRate=this.option("updateRate",/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)?250:24),this.container={width:0,height:0},this.viewport={width:0,height:0},this.content={origHeight:0,origWidth:0,width:0,height:0,x:this.option("x",0),y:this.option("y",0),scale:this.option("baseScale")},this.transform={x:0,y:0,scale:1},this.resetDragPosition()}},{key:"onLoad",value:function(t){this.updateMetrics(),this.panTo({scale:this.option("baseScale"),friction:0}),this.trigger("load",t)}},{key:"onClick",value:function(t){if(!t.defaultPrevented)if(this.option("textSelection")&&window.getSelection().toString().length)t.stopPropagation();else{var e=this.$content.getClientRects()[0];if("ready"!==this.state&&(this.dragPosition.midPoint||Math.abs(e.top-this.dragStart.rect.top)>1||Math.abs(e.left-this.dragStart.rect.left)>1))return t.preventDefault(),void t.stopPropagation();!1!==this.trigger("click",t)&&this.option("zoom")&&"toggleZoom"===this.option("click")&&(t.preventDefault(),t.stopPropagation(),this.zoomWithClick(t))}}},{key:"onWheel",value:function(t){!1!==this.trigger("wheel",t)&&this.option("zoom")&&this.option("wheel")&&this.zoomWithWheel(t)}},{key:"zoomWithWheel",value:function(t){void 0===this.changedDelta&&(this.changedDelta=0);var e=Math.max(-1,Math.min(1,-t.deltaY||-t.deltaX||t.wheelDelta||-t.detail)),i=this.content.scale,n=i*(100+e*this.option("wheelFactor"))/100;if(e<0&&Math.abs(i-this.option("minScale"))<.01||e>0&&Math.abs(i-this.option("maxScale"))<.01?(this.changedDelta+=Math.abs(e),n=i):(this.changedDelta=0,n=Math.max(Math.min(n,this.option("maxScale")),this.option("minScale"))),!(this.changedDelta>this.option("wheelLimit"))&&(t.preventDefault(),n!==i)){var o=this.$content.getBoundingClientRect(),a=t.clientX-o.left,s=t.clientY-o.top;this.zoomTo(n,{x:a,y:s})}}},{key:"zoomWithClick",value:function(t){var e=this.$content.getClientRects()[0],i=t.clientX-e.left,n=t.clientY-e.top;this.toggleZoom({x:i,y:n})}},{key:"attachEvents",value:function(){var t=this;this.$content.addEventListener("load",this.onLoad),this.$container.addEventListener("wheel",this.onWheel,{passive:!1}),this.$container.addEventListener("click",this.onClick,{passive:!1}),this.initObserver();var e=new P(this.$container,{start:function(i,n){if(!t.option("touch"))return!1;if(!(t.velocity.scale<0)){if(!e.currentPointers.length){if(-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(n.target.nodeName))return!1;if(t.option("textSelection")&&function(t,e,i){for(var n=t.childNodes,o=document.createRange(),a=0;a<n.length;a++){var s=n[a];if(s.nodeType===Node.TEXT_NODE){o.selectNodeContents(s);var r=o.getBoundingClientRect();if(e>=r.left&&i>=r.top&&e<=r.right&&i<=r.bottom)return s}}return!1}(n.target,n.clientX,n.clientY))return!1;if(T(n.target))return!1}return!1!==t.trigger("touchStart",n)&&(t.state="pointerdown",t.resetDragPosition(),t.dragPosition.midPoint=null,t.dragPosition.time=Date.now(),!0)}},move:function(i,n,o){if("pointerdown"===t.state)if(0!=t.trigger("touchMove",o)){if(!(n.length<2&&1==t.option("panOnlyZoomed")&&t.content.width<=t.viewport.width&&t.content.height<=t.viewport.height&&t.transform.scale<=t.option("baseScale"))&&(!(n.length>1)||t.option("zoom")&&!1!==t.option("pinchToZoom"))){o.preventDefault(),o.stopPropagation();var a=E(i[0],i[1]),s=E(n[0],n[1]),r=s.clientX-a.clientX,l=s.clientY-a.clientY,c=$(i[0],i[1]),h=$(n[0],n[1]),d=c?h/c:1;t.dragOffset.x+=r,t.dragOffset.y+=l,t.dragOffset.scale*=d,t.dragOffset.time=Date.now()-t.dragPosition.time;var u=1===t.dragStart.scale&&t.option("lockAxis");if(u&&!t.lockAxis){if(Math.abs(t.dragOffset.x)<6&&Math.abs(t.dragOffset.y)<6)return;if("xy"===u){var f=Math.abs(180*Math.atan2(t.dragOffset.y,t.dragOffset.x)/Math.PI);t.lockAxis=f>45&&f<135?"y":"x"}else t.lockAxis=u}if(t.lockAxis&&(t.dragOffset["x"===t.lockAxis?"y":"x"]=0),t.$container.classList.add(t.option("draggingClass")),t.transform.scale===t.option("baseScale")&&"y"===t.lockAxis||(t.dragPosition.x=t.dragStart.x+t.dragOffset.x),t.transform.scale===t.option("baseScale")&&"x"===t.lockAxis||(t.dragPosition.y=t.dragStart.y+t.dragOffset.y),t.dragPosition.scale=t.dragStart.scale*t.dragOffset.scale,n.length>1){var v=E(e.startPointers[0],e.startPointers[1]),p=v.clientX-t.dragStart.rect.x,g=v.clientY-t.dragStart.rect.y,m=t.getZoomDelta(t.content.scale*t.dragOffset.scale,p,g),y=m.deltaX,b=m.deltaY;t.dragPosition.x-=y,t.dragPosition.y-=b,t.dragPosition.midPoint=s}else t.setDragResistance();t.transform={x:t.dragPosition.x,y:t.dragPosition.y,scale:t.dragPosition.scale},t.startAnimation()}}else o.preventDefault()},end:function(n,o){if("pointerdown"===t.state)if(t._dragOffset=i({},t.dragOffset),e.currentPointers.length)t.resetDragPosition();else if(t.state="decel",t.friction=t.option("decelFriction"),t.recalculateTransform(),t.$container.classList.remove(t.option("draggingClass")),!1!==t.trigger("touchEnd",o)&&"decel"===t.state){var a=t.option("minScale");if(t.transform.scale<a)t.zoomTo(a,{friction:.64});else{var s=t.option("maxScale");if(t.transform.scale-s>.01){var r=t.dragPosition.midPoint||n,l=t.$content.getClientRects()[0];t.zoomTo(s,{friction:.64,x:r.clientX-l.left,y:r.clientY-l.top})}else;}}}});this.pointerTracker=e}},{key:"initObserver",value:function(){var t=this;this.resizeObserver||(this.resizeObserver=new k((function(){t.updateTimer||(t.updateTimer=setTimeout((function(){var e=t.$container.getBoundingClientRect();e.width&&e.height?((Math.abs(e.width-t.container.width)>1||Math.abs(e.height-t.container.height)>1)&&(t.isAnimating()&&t.endAnimation(!0),t.updateMetrics(),t.panTo({x:t.content.x,y:t.content.y,scale:t.option("baseScale"),friction:0})),t.updateTimer=null):t.updateTimer=null}),t.updateRate))})),this.resizeObserver.observe(this.$container))}},{key:"resetDragPosition",value:function(){this.lockAxis=null,this.friction=this.option("friction"),this.velocity={x:0,y:0,scale:0};var t=this.content,e=t.x,n=t.y,o=t.scale;this.dragStart={rect:this.$content.getBoundingClientRect(),x:e,y:n,scale:o},this.dragPosition=i(i({},this.dragPosition),{},{x:e,y:n,scale:o}),this.dragOffset={x:0,y:0,scale:1,time:0}}},{key:"updateMetrics",value:function(t){!0!==t&&this.trigger("beforeUpdate");var e,n=this.$container,o=this.$content,a=this.$viewport,s=this.$content instanceof HTMLImageElement,r=this.option("zoom"),l=this.option("resizeParent",r),c=(e=this.$content,Math.max(parseFloat(e.naturalWidth||0),parseFloat(e.width&&e.width.baseVal&&e.width.baseVal.value||0),parseFloat(e.offsetWidth||0),parseFloat(e.scrollWidth||0))),h=function(t){return Math.max(parseFloat(t.naturalHeight||0),parseFloat(t.height&&t.height.baseVal&&t.height.baseVal.value||0),parseFloat(t.offsetHeight||0),parseFloat(t.scrollHeight||0))}(this.$content);Object.assign(o.style,{width:"",height:"",maxWidth:"",maxHeight:""}),l&&Object.assign(a.style,{width:"",height:""});var d=this.option("ratio"),u=c=w(c*d),f=h=w(h*d),v=o.getBoundingClientRect(),p=a.getBoundingClientRect(),g=a==n?p:n.getBoundingClientRect(),m=Math.max(a.offsetWidth,w(p.width)),y=Math.max(a.offsetHeight,w(p.height)),b=window.getComputedStyle(a);if(m-=parseFloat(b.paddingLeft)+parseFloat(b.paddingRight),y-=parseFloat(b.paddingTop)+parseFloat(b.paddingBottom),this.viewport.width=m,this.viewport.height=y,r){if(Math.abs(c-v.width)>.1||Math.abs(h-v.height)>.1){var x=function(t,e,i,n){var o=Math.min(i/t||0,n/e);return{width:t*o||0,height:e*o||0}}(c,h,Math.min(c,v.width),Math.min(h,v.height));u=w(x.width),f=w(x.height)}Object.assign(o.style,{width:"".concat(u,"px"),height:"".concat(f,"px"),transform:""})}if(l&&(Object.assign(a.style,{width:"".concat(u,"px"),height:"".concat(f,"px")}),this.viewport=i(i({},this.viewport),{},{width:u,height:f})),s&&r&&"function"!=typeof this.options.maxScale){var k=this.option("maxScale");this.options.maxScale=function(){return this.content.origWidth>0&&this.content.fitWidth>0?this.content.origWidth/this.content.fitWidth:k}}this.content=i(i({},this.content),{},{origWidth:c,origHeight:h,fitWidth:u,fitHeight:f,width:u,height:f,scale:1,isZoomable:r}),this.container={width:g.width,height:g.height},!0!==t&&this.trigger("afterUpdate")}},{key:"zoomIn",value:function(t){this.zoomTo(this.content.scale+(t||this.option("step")))}},{key:"zoomOut",value:function(t){this.zoomTo(this.content.scale-(t||this.option("step")))}},{key:"toggleZoom",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.option("maxScale"),i=this.option("baseScale"),n=this.content.scale>i+.5*(e-i)?i:e;this.zoomTo(n,t)}},{key:"zoomTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.option("baseScale"),e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?null:i,o=e.y,a=void 0===o?null:o;t=Math.max(Math.min(t,this.option("maxScale")),this.option("minScale"));var s=w(this.content.scale/(this.content.width/this.content.fitWidth),1e7);null===n&&(n=this.content.width*s*.5),null===a&&(a=this.content.height*s*.5);var r=this.getZoomDelta(t,n,a),l=r.deltaX,c=r.deltaY;n=this.content.x-l,a=this.content.y-c,this.panTo({x:n,y:a,scale:t,friction:this.option("zoomFriction")})}},{key:"getZoomDelta",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,n=this.content.fitWidth*this.content.scale,o=this.content.fitHeight*this.content.scale,a=e>0&&n?e/n:0,s=i>0&&o?i/o:0,r=this.content.fitWidth*t,l=this.content.fitHeight*t,c=(r-n)*a,h=(l-o)*s;return{deltaX:c,deltaY:h}}},{key:"panTo",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.x,n=void 0===e?this.content.x:e,o=t.y,a=void 0===o?this.content.y:o,s=t.scale,r=t.friction,l=void 0===r?this.option("friction"):r,c=t.ignoreBounds,h=void 0!==c&&c;if(s=s||this.content.scale||1,!h){var d=this.getBounds(s),u=d.boundX,f=d.boundY;u&&(n=Math.max(Math.min(n,u.to),u.from)),f&&(a=Math.max(Math.min(a,f.to),f.from))}this.friction=l,this.transform=i(i({},this.transform),{},{x:n,y:a,scale:s}),l?(this.state="panning",this.velocity={x:(1/this.friction-1)*(n-this.content.x),y:(1/this.friction-1)*(a-this.content.y),scale:(1/this.friction-1)*(s-this.content.scale)},this.startAnimation()):this.endAnimation()}},{key:"startAnimation",value:function(){var t=this;this.rAF?cancelAnimationFrame(this.rAF):this.trigger("startAnimation"),this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"animate",value:function(){var t=this;if(this.setEdgeForce(),this.setDragForce(),this.velocity.x*=this.friction,this.velocity.y*=this.friction,this.velocity.scale*=this.friction,this.content.x+=this.velocity.x,this.content.y+=this.velocity.y,this.content.scale+=this.velocity.scale,this.isAnimating())this.setTransform();else if("pointerdown"!==this.state)return void this.endAnimation();this.rAF=requestAnimationFrame((function(){return t.animate()}))}},{key:"getBounds",value:function(t){var e=this.boundX,i=this.boundY;if(void 0!==e&&void 0!==i)return{boundX:e,boundY:i};e={from:0,to:0},i={from:0,to:0},t=t||this.transform.scale;var n=this.content.fitWidth,o=this.content.fitHeight,a=n*t,s=o*t,r=this.viewport.width,l=this.viewport.height;if(n<=r){var c=.5*(r-a),h=.5*(a-n);e.from=w(c-h),e.to=w(c+h)}else e.from=w(r-a);if(o<=l){var d=.5*(l-s),u=.5*(s-o);i.from=w(d-u),i.to=w(d+u)}else i.from=w(l-a);return{boundX:e,boundY:i}}},{key:"setEdgeForce",value:function(){if("decel"===this.state){var t,e,i,n,o=this.option("bounceForce"),a=this.getBounds(Math.max(this.transform.scale,this.content.scale)),s=a.boundX,r=a.boundY;if(s&&(t=this.content.x<s.from,e=this.content.x>s.to),r&&(i=this.content.y<r.from,n=this.content.y>r.to),t||e){var l=((t?s.from:s.to)-this.content.x)*o,c=this.content.x+(this.velocity.x+l)/this.friction;c>=s.from&&c<=s.to&&(l+=this.velocity.x),this.velocity.x=l,this.recalculateTransform()}if(i||n){var h=((i?r.from:r.to)-this.content.y)*o,d=this.content.y+(h+this.velocity.y)/this.friction;d>=r.from&&d<=r.to&&(h+=this.velocity.y),this.velocity.y=h,this.recalculateTransform()}}}},{key:"setDragResistance",value:function(){if("pointerdown"===this.state){var t,e,i,n,o=this.getBounds(this.dragPosition.scale),a=o.boundX,s=o.boundY;if(a&&(t=this.dragPosition.x<a.from,e=this.dragPosition.x>a.to),s&&(i=this.dragPosition.y<s.from,n=this.dragPosition.y>s.to),(t||e)&&(!t||!e)){var r=t?a.from:a.to,l=r-this.dragPosition.x;this.dragPosition.x=r-.3*l}if((i||n)&&(!i||!n)){var c=i?s.from:s.to,h=c-this.dragPosition.y;this.dragPosition.y=c-.3*h}}}},{key:"setDragForce",value:function(){"pointerdown"===this.state&&(this.velocity.x=this.dragPosition.x-this.content.x,this.velocity.y=this.dragPosition.y-this.content.y,this.velocity.scale=this.dragPosition.scale-this.content.scale)}},{key:"recalculateTransform",value:function(){this.transform.x=this.content.x+this.velocity.x/(1/this.friction-1),this.transform.y=this.content.y+this.velocity.y/(1/this.friction-1),this.transform.scale=this.content.scale+this.velocity.scale/(1/this.friction-1)}},{key:"isAnimating",value:function(){return!(!this.friction||!(Math.abs(this.velocity.x)>.05||Math.abs(this.velocity.y)>.05||Math.abs(this.velocity.scale)>.05))}},{key:"setTransform",value:function(t){var e,n,o,a,s;(t?(e=w(this.transform.x),n=w(this.transform.y),o=this.transform.scale,this.content=i(i({},this.content),{},{x:e,y:n,scale:o})):(e=w(this.content.x),n=w(this.content.y),o=this.content.scale/(this.content.width/this.content.fitWidth),this.content=i(i({},this.content),{},{x:e,y:n})),this.trigger("beforeTransform"),e=w(this.content.x),n=w(this.content.y),t&&this.option("zoom"))?(a=w(this.content.fitWidth*o),s=w(this.content.fitHeight*o),this.content.width=a,this.content.height=s,this.transform=i(i({},this.transform),{},{width:a,height:s,scale:o}),Object.assign(this.$content.style,{width:"".concat(a,"px"),height:"".concat(s,"px"),maxWidth:"none",maxHeight:"none",transform:"translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(1)")})):this.$content.style.transform="translate3d(".concat(e,"px, ").concat(n,"px, 0) scale(").concat(o,")");this.trigger("afterTransform")}},{key:"endAnimation",value:function(t){cancelAnimationFrame(this.rAF),this.rAF=null,this.velocity={x:0,y:0,scale:0},this.setTransform(!0),this.state="ready",this.handleCursor(),!0!==t&&this.trigger("endAnimation")}},{key:"handleCursor",value:function(){var t=this.option("draggableClass");t&&this.option("touch")&&(1==this.option("panOnlyZoomed")&&this.content.width<=this.viewport.width&&this.content.height<=this.viewport.height&&this.transform.scale<=this.option("baseScale")?this.$container.classList.remove(t):this.$container.classList.add(t))}},{key:"detachEvents",value:function(){this.$content.removeEventListener("load",this.onLoad),this.$container.removeEventListener("wheel",this.onWheel,{passive:!1}),this.$container.removeEventListener("click",this.onClick,{passive:!1}),this.pointerTracker&&(this.pointerTracker.stop(),this.pointerTracker=null),this.resizeObserver&&(this.resizeObserver.disconnect(),this.resizeObserver=null)}},{key:"destroy",value:function(){"destroy"!==this.state&&(this.state="destroy",clearTimeout(this.updateTimer),this.updateTimer=null,cancelAnimationFrame(this.rAF),this.rAF=null,this.detachEvents(),this.detachPlugins(),this.resetDragPosition())}}]),n}(A);z.version="4.0.7",z.Plugins={};var _=function(t,e){var i=0;return function(){var n=(new Date).getTime();if(!(n-i<e))return i=n,t.apply(void 0,arguments)}},M=function(){function t(e){o(this,t),this.$container=null,this.$prev=null,this.$next=null,this.carousel=e,this.onRefresh=this.onRefresh.bind(this)}return s(t,[{key:"option",value:function(t){return this.carousel.option("Navigation.".concat(t))}},{key:"createButton",value:function(t){var e,i=this,n=document.createElement("button");n.setAttribute("title",this.carousel.localize("{{".concat(t.toUpperCase(),"}}")));var o=this.option("classNames.button")+" "+this.option("classNames.".concat(t));return(e=n.classList).add.apply(e,p(o.split(" "))),n.setAttribute("tabindex","0"),n.innerHTML=this.carousel.localize(this.option("".concat(t,"Tpl"))),n.addEventListener("click",(function(e){e.preventDefault(),e.stopPropagation(),i.carousel["slide".concat("next"===t?"Next":"Prev")]()})),n}},{key:"build",value:function(){this.$container||(this.$container=document.createElement("div"),this.$container.classList.add(this.option("classNames.main")),this.carousel.$container.appendChild(this.$container)),this.$next||(this.$next=this.createButton("next"),this.$container.appendChild(this.$next)),this.$prev||(this.$prev=this.createButton("prev"),this.$container.appendChild(this.$prev))}},{key:"onRefresh",value:function(){var t=this.carousel.pages.length;t<=1||t>1&&this.carousel.elemDimWidth<this.carousel.wrapDimWidth&&!Number.isInteger(this.carousel.option("slidesPerPage"))?this.cleanup():(this.build(),this.$prev.removeAttribute("disabled"),this.$next.removeAttribute("disabled"),this.carousel.option("infiniteX",this.carousel.option("infinite"))||(this.carousel.page<=0&&this.$prev.setAttribute("disabled",""),this.carousel.page>=t-1&&this.$next.setAttribute("disabled","")))}},{key:"cleanup",value:function(){this.$prev&&this.$prev.remove(),this.$prev=null,this.$next&&this.$next.remove(),this.$next=null,this.$container&&this.$container.remove(),this.$container=null}},{key:"attach",value:function(){this.carousel.on("refresh change",this.onRefresh)}},{key:"detach",value:function(){this.carousel.off("refresh change",this.onRefresh),this.cleanup()}}]),t}();M.defaults={prevTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>',nextTpl:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',classNames:{main:"carousel__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}};var I=function(){function t(e){o(this,t),this.carousel=e,this.$list=null,this.events={change:this.onChange.bind(this),refresh:this.onRefresh.bind(this)}}return s(t,[{key:"buildList",value:function(){var t=this;if(!(this.carousel.pages.length<this.carousel.option("Dots.minSlideCount"))){var e=document.createElement("ol");return e.classList.add("carousel__dots"),e.addEventListener("click",(function(e){if("page"in e.target.dataset){e.preventDefault(),e.stopPropagation();var i=parseInt(e.target.dataset.page,10),n=t.carousel;i!==n.page&&(n.pages.length<3&&n.option("infinite")?n[0==i?"slidePrev":"slideNext"]():n.slideTo(i))}})),this.$list=e,this.carousel.$container.appendChild(e),this.carousel.$container.classList.add("has-dots"),e}}},{key:"removeList",value:function(){this.$list&&(this.$list.parentNode.removeChild(this.$list),this.$list=null),this.carousel.$container.classList.remove("has-dots")}},{key:"rebuildDots",value:function(){var t=this,e=this.$list,i=!!e,n=this.carousel.pages.length;if(n<2)i&&this.removeList();else{i||(e=this.buildList());var o=this.$list.children.length;if(o>n)for(var a=n;a<o;a++)this.$list.removeChild(this.$list.lastChild);else{for(var s=function(e){var i=document.createElement("li");i.classList.add("carousel__dot"),i.dataset.page=e,i.setAttribute("role","button"),i.setAttribute("tabindex","0"),i.setAttribute("title",t.carousel.localize("{{GOTO}}",[["%d",e+1]])),i.addEventListener("keydown",(function(t){var e,n=t.code;"Enter"===n||"NumpadEnter"===n?e=i:"ArrowRight"===n?e=i.nextSibling:"ArrowLeft"===n&&(e=i.previousSibling),e&&e.click()})),t.$list.appendChild(i)},r=o;r<n;r++)s(r);this.setActiveDot()}}}},{key:"setActiveDot",value:function(){if(this.$list){this.$list.childNodes.forEach((function(t){t.classList.remove("is-selected")}));var t=this.$list.childNodes[this.carousel.page];t&&t.classList.add("is-selected")}}},{key:"onChange",value:function(){this.setActiveDot()}},{key:"onRefresh",value:function(){this.rebuildDots()}},{key:"attach",value:function(){this.carousel.on(this.events)}},{key:"detach",value:function(){this.removeList(),this.carousel.off(this.events),this.carousel=null}}]),t}(),F=function(){function t(e){o(this,t),this.carousel=e,this.selectedIndex=null,this.friction=0,this.onNavReady=this.onNavReady.bind(this),this.onNavClick=this.onNavClick.bind(this),this.onNavCreateSlide=this.onNavCreateSlide.bind(this),this.onTargetChange=this.onTargetChange.bind(this)}return s(t,[{key:"addAsTargetFor",value:function(t){this.target=this.carousel,this.nav=t,this.attachEvents()}},{key:"addAsNavFor",value:function(t){this.target=t,this.nav=this.carousel,this.attachEvents()}},{key:"attachEvents",value:function(){this.nav.options.initialSlide=this.target.options.initialPage,this.nav.on("ready",this.onNavReady),this.nav.on("createSlide",this.onNavCreateSlide),this.nav.on("Panzoom.click",this.onNavClick),this.target.on("change",this.onTargetChange),this.target.on("Panzoom.afterUpdate",this.onTargetChange)}},{key:"onNavReady",value:function(){this.onTargetChange(!0)}},{key:"onNavClick",value:function(t,e,i){var n=i.target.closest(".carousel__slide");if(n){i.stopPropagation();var o=parseInt(n.dataset.index,10),a=this.target.findPageForSlide(o);this.target.page!==a&&this.target.slideTo(a,{friction:this.friction}),this.markSelectedSlide(o)}}},{key:"onNavCreateSlide",value:function(t,e){e.index===this.selectedIndex&&this.markSelectedSlide(e.index)}},{key:"onTargetChange",value:function(){var t=this.target.pages[this.target.page].indexes[0],e=this.nav.findPageForSlide(t);this.nav.slideTo(e),this.markSelectedSlide(t)}},{key:"markSelectedSlide",value:function(t){this.selectedIndex=t,p(this.nav.slides).filter((function(t){return t.$el&&t.$el.classList.remove("is-nav-selected")}));var e=this.nav.slides[t];e&&e.$el&&e.$el.classList.add("is-nav-selected")}},{key:"attach",value:function(t){var e=t.options.Sync;(e.target||e.nav)&&(e.target?this.addAsNavFor(e.target):e.nav&&this.addAsTargetFor(e.nav),this.friction=e.friction)}},{key:"detach",value:function(){this.nav&&(this.nav.off("ready",this.onNavReady),this.nav.off("Panzoom.click",this.onNavClick),this.nav.off("createSlide",this.onNavCreateSlide)),this.target&&(this.target.off("Panzoom.afterUpdate",this.onTargetChange),this.target.off("change",this.onTargetChange))}}]),t}();F.defaults={friction:.92};var R={Navigation:M,Dots:I,Sync:F},N={slides:[],preload:0,slidesPerPage:"auto",initialPage:null,initialSlide:null,friction:.92,center:!0,infinite:!0,fill:!0,dragFree:!1,prefix:"",classNames:{viewport:"carousel__viewport",track:"carousel__track",slide:"carousel__slide",slideSelected:"is-selected"},l10n:{NEXT:"Next slide",PREV:"Previous slide",GOTO:"Go to slide #%d"}},D=function(t){l(n,t);var e=f(n);function n(t){var i,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(this,n),a=x(!0,{},N,a),(i=e.call(this,a)).state="init",i.$container=t,!(i.$container instanceof HTMLElement))throw new Error("No root element provided");return i.slideNext=_(i.slideNext.bind(d(i)),250),i.slidePrev=_(i.slidePrev.bind(d(i)),250),i.init(),i}return s(n,[{key:"init",value:function(){this.pages=[],this.page=this.pageIndex=null,this.prevPage=this.prevPageIndex=null,this.attachPlugins(n.Plugins),this.trigger("init"),this.initLayout(),this.initSlides(),this.updateMetrics(),this.$track&&this.pages.length&&(this.$track.style.transform="translate3d(".concat(-1*this.pages[this.page].left,"px, 0px, 0) scale(1)")),this.manageSlideVisiblity(),this.initPanzoom(),this.state="ready",this.trigger("ready")}},{key:"initLayout",value:function(){var t,e,i=this.option("prefix"),n=this.option("classNames");(this.$viewport=this.option("viewport")||this.$container.querySelector(".".concat(i).concat(n.viewport)),this.$viewport)||(this.$viewport=document.createElement("div"),this.$viewport.classList.add(i+n.viewport),(t=this.$viewport).append.apply(t,p(this.$container.childNodes)),this.$container.appendChild(this.$viewport));(this.$track=this.option("track")||this.$container.querySelector(".".concat(i).concat(n.track)),this.$track)||(this.$track=document.createElement("div"),this.$track.classList.add(i+n.track),(e=this.$track).append.apply(e,p(this.$viewport.childNodes)),this.$viewport.appendChild(this.$track))}},{key:"initSlides",value:function(){var t=this;this.slides=[],this.$viewport.querySelectorAll(".".concat(this.option("prefix")).concat(this.option("classNames.slide"))).forEach((function(e){var i={$el:e,isDom:!0};t.slides.push(i),t.trigger("createSlide",i,t.slides.length)})),Array.isArray(this.options.slides)&&(this.slides=x(!0,p(this.slides),this.options.slides))}},{key:"updateMetrics",value:function(){var t,e=this,n=0,o=[];this.slides.forEach((function(i,a){var s=i.$el,r=i.isDom||!t?e.getSlideMetrics(s):t;i.index=a,i.width=r,i.left=n,t=r,n+=r,o.push(a)}));var a=Math.max(this.$track.offsetWidth,w(this.$track.getBoundingClientRect().width)),s=getComputedStyle(this.$track);a-=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),this.contentWidth=n,this.viewportWidth=a;var r=[],l=this.option("slidesPerPage");if(Number.isInteger(l)&&n>a)for(var c=0;c<this.slides.length;c+=l)r.push({indexes:o.slice(c,c+l),slides:this.slides.slice(c,c+l)});else for(var h=0,d=0,u=0;u<this.slides.length;u+=1){var f=this.slides[u];(!r.length||d+f.width>a)&&(r.push({indexes:[],slides:[]}),h=r.length-1,d=0),d+=f.width,r[h].indexes.push(u),r[h].slides.push(f)}var v=this.option("center"),g=this.option("fill");r.forEach((function(t,i){t.index=i,t.width=t.slides.reduce((function(t,e){return t+e.width}),0),t.left=t.slides[0].left,v&&(t.left+=.5*(a-t.width)*-1),g&&!e.option("infiniteX",e.option("infinite"))&&n>a&&(t.left=Math.max(t.left,0),t.left=Math.min(t.left,n-a))}));var m,y=[];r.forEach((function(t){var e=i({},t);m&&e.left===m.left?(m.width+=e.width,m.slides=[].concat(p(m.slides),p(e.slides)),m.indexes=[].concat(p(m.indexes),p(e.indexes))):(e.index=y.length,m=e,y.push(e))})),this.pages=y;var b=this.page;if(null===b){var x=this.option("initialSlide");b=null!==x?this.findPageForSlide(x):this.option("initialPage",0),y[b]||(b=y.length&&b>y.length?y[y.length-1].index:0),this.page=b,this.pageIndex=b}this.updatePanzoom(),this.trigger("refresh")}},{key:"getSlideMetrics",value:function(t){if(!t){var e,i=this.slides[0];if((t=document.createElement("div")).dataset.isTestEl=1,t.style.visibility="hidden",t.classList.add(this.option("prefix")+this.option("classNames.slide")),i.customClass)(e=t.classList).add.apply(e,p(i.customClass.split(" ")));this.$track.prepend(t)}var n=Math.max(t.offsetWidth,w(t.getBoundingClientRect().width)),o=t.currentStyle||window.getComputedStyle(t);return n=n+(parseFloat(o.marginLeft)||0)+(parseFloat(o.marginRight)||0),t.dataset.isTestEl&&t.remove(),n}},{key:"findPageForSlide",value:function(t){var e=this.pages.find((function(e){return e.indexes.indexOf(t)>-1}));return e?e.index:null}},{key:"slideNext",value:function(){this.slideTo(this.pageIndex+1)}},{key:"slidePrev",value:function(){this.slideTo(this.pageIndex-1)}},{key:"slideTo",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.x,n=void 0===i?-1*this.setPage(t,!0):i,o=e.y,a=void 0===o?0:o,s=e.friction,r=void 0===s?this.option("friction"):s;this.Panzoom.content.x===n&&!this.Panzoom.velocity.x&&r||(this.Panzoom.panTo({x:n,y:a,friction:r,ignoreBounds:!0}),"ready"===this.state&&"ready"===this.Panzoom.state&&this.trigger("settle"))}},{key:"initPanzoom",value:function(){var t=this;this.Panzoom&&this.Panzoom.destroy();var e=x(!0,{},{content:this.$track,wrapInner:!1,resizeParent:!1,zoom:!1,click:!1,lockAxis:"x",x:this.pages.length?-1*this.pages[this.page].left:0,centerOnStart:!1,textSelection:function(){return t.option("textSelection",!1)},panOnlyZoomed:function(){return this.content.width<=this.viewport.width}},this.option("Panzoom"));this.Panzoom=new z(this.$container,e),this.Panzoom.on({"*":function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return t.trigger.apply(t,["Panzoom.".concat(e)].concat(n))},afterUpdate:function(){t.updatePage()},beforeTransform:this.onBeforeTransform.bind(this),touchEnd:this.onTouchEnd.bind(this),endAnimation:function(){t.trigger("settle")}}),this.updateMetrics(),this.manageSlideVisiblity()}},{key:"updatePanzoom",value:function(){this.Panzoom&&(this.Panzoom.content=i(i({},this.Panzoom.content),{},{fitWidth:this.contentWidth,origWidth:this.contentWidth,width:this.contentWidth}),this.pages.length>1&&this.option("infiniteX",this.option("infinite"))?this.Panzoom.boundX=null:this.pages.length&&(this.Panzoom.boundX={from:-1*this.pages[this.pages.length-1].left,to:-1*this.pages[0].left}),this.option("infiniteY",this.option("infinite"))?this.Panzoom.boundY=null:this.Panzoom.boundY={from:0,to:0},this.Panzoom.handleCursor())}},{key:"manageSlideVisiblity",value:function(){var t=this,e=this.contentWidth,i=this.viewportWidth,n=this.Panzoom?-1*this.Panzoom.content.x:this.pages.length?this.pages[this.page].left:0,o=this.option("preload"),a=this.option("infiniteX",this.option("infinite")),s=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-left")),r=parseFloat(getComputedStyle(this.$viewport,null).getPropertyValue("padding-right"));this.slides.forEach((function(l){var c,h,d=0;c=n-s,h=n+i+r,c-=o*(i+s+r),h+=o*(i+s+r);var u=l.left+l.width>c&&l.left<h;c=n+e-s,h=n+e+i+r,c-=o*(i+s+r);var f=a&&l.left+l.width>c&&l.left<h;c=n-e-s,h=n-e+i+r,c-=o*(i+s+r);var v=a&&l.left+l.width>c&&l.left<h;f||u||v?(t.createSlideEl(l),u&&(d=0),f&&(d=-1),v&&(d=1),l.left+l.width>n&&l.left<=n+i+r&&(d=0)):t.removeSlideEl(l),l.hasDiff=d}));var l=0,c=0;this.slides.forEach((function(t,i){var n=0;t.$el?(i!==l||t.hasDiff?n=c+t.hasDiff*e:c=0,t.$el.style.left=Math.abs(n)>.1?"".concat(c+t.hasDiff*e,"px"):"",l++):c+=t.width})),this.markSelectedSlides()}},{key:"createSlideEl",value:function(t){if(t){if(!t.$el){var e,i=document.createElement("div");if(i.dataset.index=t.index,i.classList.add(this.option("prefix")+this.option("classNames.slide")),t.customClass)(e=i.classList).add.apply(e,p(t.customClass.split(" ")));t.html&&(i.innerHTML=t.html);var n=[];this.slides.forEach((function(t,e){t.$el&&n.push(e)}));var o=t.index,a=null;if(n.length){var s=n.reduce((function(t,e){return Math.abs(e-o)<Math.abs(t-o)?e:t}));a=this.slides[s]}return this.$track.insertBefore(i,a&&a.$el?a.index<t.index?a.$el.nextSibling:a.$el:null),t.$el=i,this.trigger("createSlide",t,o),t}var r;parseInt(t.$el.dataset.index,10)!==t.index&&(t.$el.dataset.index=t.index,t.$el.querySelectorAll("[data-lazy-src]").forEach((function(t){var e=t.dataset.lazySrc;t instanceof HTMLImageElement?t.src=e:t.style.backgroundImage="url('".concat(e,"')")})),(r=t.$el.dataset.lazySrc)&&(t.$el.style.backgroundImage="url('".concat(r,"')")),t.state="ready")}}},{key:"removeSlideEl",value:function(t){t.$el&&!t.isDom&&(this.trigger("removeSlide",t),t.$el.remove(),t.$el=null)}},{key:"markSelectedSlides",value:function(){var t=this,e=this.option("classNames.slideSelected"),i="aria-hidden";this.slides.forEach((function(n,o){var a=n.$el;if(a){var s=t.pages[t.page];s&&s.indexes&&s.indexes.indexOf(o)>-1?(e&&!a.classList.contains(e)&&(a.classList.add(e),t.trigger("selectSlide",n)),a.removeAttribute(i)):(e&&a.classList.contains(e)&&(a.classList.remove(e),t.trigger("unselectSlide",n)),a.setAttribute(i,!0))}}))}},{key:"updatePage",value:function(){this.updateMetrics(),this.slideTo(this.page,{friction:0})}},{key:"onBeforeTransform",value:function(){this.option("infiniteX",this.option("infinite"))&&this.manageInfiniteTrack(),this.manageSlideVisiblity()}},{key:"manageInfiniteTrack",value:function(){var t=this.contentWidth,e=this.viewportWidth;if(!(!this.option("infiniteX",this.option("infinite"))||this.pages.length<2||t<e)){var i=this.Panzoom,n=!1;return i.content.x<-1*(t-e)&&(i.content.x+=t,this.pageIndex=this.pageIndex-this.pages.length,n=!0),i.content.x>e&&(i.content.x-=t,this.pageIndex=this.pageIndex+this.pages.length,n=!0),n&&"pointerdown"===i.state&&i.resetDragPosition(),n}}},{key:"onTouchEnd",value:function(t,e){var i=this.option("dragFree");if(!i&&this.pages.length>1&&t.dragOffset.time<350&&Math.abs(t.dragOffset.y)<1&&Math.abs(t.dragOffset.x)>5)this[t.dragOffset.x<0?"slideNext":"slidePrev"]();else if(i){var n=v(this.getPageFromPosition(-1*t.transform.x),2)[1];this.setPage(n)}else this.slideToClosest()}},{key:"slideToClosest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=this.getPageFromPosition(-1*this.Panzoom.content.x),i=v(e,2),n=i[1];this.slideTo(n,t)}},{key:"getPageFromPosition",value:function(t){var e=this.pages.length;this.option("center")&&(t+=.5*this.viewportWidth);var i=Math.floor(t/this.contentWidth);t-=i*this.contentWidth;var n=this.slides.find((function(e){return e.left<=t&&e.left+e.width>t}));if(n){var o=this.findPageForSlide(n.index);return[o,o+i*e]}return[0,0]}},{key:"setPage",value:function(t,e){var i=0,n=parseInt(t,10)||0,o=this.page,a=this.pageIndex,s=this.pages.length,r=this.contentWidth,l=this.viewportWidth;if(t=(n%s+s)%s,this.option("infiniteX",this.option("infinite"))&&r>l){var c=Math.floor(n/s)||0,h=r;if(i=this.pages[t].left+c*h,!0===e&&s>2){var d=-1*this.Panzoom.content.x,u=i-h,f=i+h,v=Math.abs(d-i),p=Math.abs(d-u),g=Math.abs(d-f);g<v&&g<=p?(i=f,n+=s):p<v&&p<g&&(i=u,n-=s)}}else t=n=Math.max(0,Math.min(n,s-1)),i=this.pages.length?this.pages[t].left:0;return this.page=t,this.pageIndex=n,null!==o&&t!==o&&(this.prevPage=o,this.prevPageIndex=a,this.trigger("change",t,o)),i}},{key:"destroy",value:function(){var t=this;this.state="destroy",this.slides.forEach((function(e){t.removeSlideEl(e)})),this.slides=[],this.Panzoom.destroy(),this.detachPlugins()}}]),n}(A);D.version="4.0.7",D.Plugins=R;var B=!("undefined"==typeof window||!window.document||!window.document.createElement),H=function(){function t(e){o(this,t),this.fancybox=e,this.viewport=null,this.pendingUpdate=null;for(var i=0,n=["onReady","onResize","onTouchstart","onTouchmove"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}}return s(t,[{key:"onReady",value:function(){var t=window.visualViewport;t&&(this.viewport=t,this.startY=0,t.addEventListener("resize",this.onResize),this.updateViewport()),window.addEventListener("touchstart",this.onTouchstart,{passive:!1}),window.addEventListener("touchmove",this.onTouchmove,{passive:!1})}},{key:"onResize",value:function(){this.updateViewport()}},{key:"updateViewport",value:function(){var t=this.fancybox,e=this.viewport,i=e.scale||1,n=t.$container;if(n){var o="",a="",s="";i-1>.1&&(o="".concat(e.width*i,"px"),a="".concat(e.height*i,"px"),s="translate3d(".concat(e.offsetLeft,"px, ").concat(e.offsetTop,"px, 0) scale(").concat(1/i,")")),n.style.width=o,n.style.height=a,n.style.transform=s}}},{key:"onTouchstart",value:function(t){this.startY=t.touches?t.touches[0].screenY:t.screenY}},{key:"onTouchmove",value:function(t){var e=this.startY,i=window.innerWidth/window.document.documentElement.clientWidth;if(t.cancelable&&!(t.touches.length>1||1!==i)){var n=t.target,o=T(n);if(o){var a=window.getComputedStyle(o),s=parseInt(a.getPropertyValue("height"),10),r=t.touches?t.touches[0].screenY:t.screenY,l=e<=r&&0===o.scrollTop,c=e>=r&&o.scrollHeight-o.scrollTop===s;(l||c)&&t.preventDefault()}else t.preventDefault()}}},{key:"cleanup",value:function(){this.pendingUpdate&&(cancelAnimationFrame(this.pendingUpdate),this.pendingUpdate=null);var t=this.viewport;t&&(t.removeEventListener("resize",this.onResize),this.viewport=null),window.removeEventListener("touchstart",this.onTouchstart,!1),window.removeEventListener("touchmove",this.onTouchmove,!1)}},{key:"attach",value:function(){this.fancybox.on("initLayout",this.onReady)}},{key:"detach",value:function(){this.fancybox.off("initLayout",this.onReady),this.cleanup()}}]),t}(),W=function(){function t(e){o(this,t),this.fancybox=e,this.$container=null,this.state="init";for(var i=0,n=["onPrepare","onClosing","onKeydown"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={prepare:this.onPrepare,closing:this.onClosing,keydown:this.onKeydown}}return s(t,[{key:"onPrepare",value:function(){this.getSlides().length<this.fancybox.option("Thumbs.minSlideCount")?this.state="disabled":!0===this.fancybox.option("Thumbs.autoStart")&&this.fancybox.Carousel.Panzoom.content.height>=this.fancybox.option("Thumbs.minScreenHeight")&&this.build()}},{key:"onClosing",value:function(){this.Carousel&&this.Carousel.Panzoom.detachEvents()}},{key:"onKeydown",value:function(t,e){e===t.option("Thumbs.key")&&this.toggle()}},{key:"build",value:function(){var t=this;if(!this.$container){var e=document.createElement("div");e.classList.add("fancybox__thumbs"),this.fancybox.$carousel.parentNode.insertBefore(e,this.fancybox.$carousel.nextSibling),this.Carousel=new D(e,x(!0,{Dots:!1,Navigation:!1,Sync:{friction:0},infinite:!1,center:!0,fill:!0,dragFree:!0,slidesPerPage:1,preload:1},this.fancybox.option("Thumbs.Carousel"),{Sync:{target:this.fancybox.Carousel},slides:this.getSlides()})),this.Carousel.Panzoom.on("wheel",(function(e,i){i.preventDefault(),t.fancybox[i.deltaY<0?"prev":"next"]()})),this.$container=e,this.state="visible"}}},{key:"getSlides",value:function(){var t,e=[],i=y(this.fancybox.items);try{for(i.s();!(t=i.n()).done;){var n=t.value,o=n.thumb;o&&e.push({html:'<div class="fancybox__thumb" style="background-image:url(\''.concat(o,"')\"></div>"),customClass:"has-thumb has-".concat(n.type||"image")})}}catch(t){i.e(t)}finally{i.f()}return e}},{key:"toggle",value:function(){"visible"===this.state?this.hide():"hidden"===this.state?this.show():this.build()}},{key:"show",value:function(){"hidden"===this.state&&(this.$container.style.display="",this.Carousel.Panzoom.attachEvents(),this.state="visible")}},{key:"hide",value:function(){"visible"===this.state&&(this.Carousel.Panzoom.detachEvents(),this.$container.style.display="none",this.state="hidden")}},{key:"cleanup",value:function(){this.Carousel&&(this.Carousel.destroy(),this.Carousel=null),this.$container&&(this.$container.remove(),this.$container=null),this.state="init"}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events),this.cleanup()}}]),t}();W.defaults={minSlideCount:2,minScreenHeight:500,autoStart:!0,key:"t",Carousel:{}};var j=function(t){return Object.entries(t).map((function(t){return t.map(encodeURIComponent).join("=")})).join("&")},X={video:{autoplay:!0,ratio:16/9},youtube:{autohide:1,fs:1,rel:0,hd:1,wmode:"transparent",enablejsapi:1,html5:1},vimeo:{hd:1,show_title:1,show_byline:1,show_portrait:0,fullscreen:1},html5video:{tpl:'<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',format:""}},q=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onInit","onReady","onCreateSlide","onRemoveSlide","onSelectSlide","onUnselectSlide","onRefresh","onMessage"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={init:this.onInit,ready:this.onReady,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide,"Carousel.selectSlide":this.onSelectSlide,"Carousel.unselectSlide":this.onUnselectSlide,"Carousel.refresh":this.onRefresh}}return s(t,[{key:"onInit",value:function(){var t,e=y(this.fancybox.items);try{for(e.s();!(t=e.n()).done;){var i=t.value;this.processType(i)}}catch(t){e.e(t)}finally{e.f()}}},{key:"processType",value:function(t){if(t.html)return t.src=t.html,t.type="html",void delete t.html;var e=t.src||"",i=t.type||this.fancybox.options.type,n=null;if(!e||"string"==typeof e){if(n=e.match(/(?:youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)){var o=j(this.fancybox.option("Html.youtube")),a=encodeURIComponent(n[1]);t.videoId=a,t.src="https://www.youtube-nocookie.com/embed/".concat(a,"?").concat(o),t.thumb=t.thumb||"https://i.ytimg.com/vi/".concat(a,"/mqdefault.jpg"),t.vendor="youtube",i="video"}else if(n=e.match(/^.+vimeo.com\/(?:\/)?([\d]+)(.*)?/)){var s=j(this.fancybox.option("Html.vimeo")),r=encodeURIComponent(n[1]);t.videoId=r,t.src="https://player.vimeo.com/video/".concat(r,"?").concat(s),t.vendor="vimeo",i="video"}else(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i))?(t.src="//maps.google.".concat(n[1],"/?ll=").concat((n[2]?n[2]+"&z="+Math.floor(n[3])+(n[4]?n[4].replace(/^\//,"&"):""):n[4]+"").replace(/\?/,"&"),"&output=").concat(n[4]&&n[4].indexOf("layer=c")>0?"svembed":"embed"),i="map"):(n=e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i))&&(t.src="//maps.google.".concat(n[1],"/maps?q=").concat(n[2].replace("query=","q=").replace("api=1",""),"&output=embed"),i="map");i||("#"===e.charAt(0)?i="inline":(n=e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i))?(i="html5video",t.format=t.format||"video/"+("ogv"===n[1]?"ogg":n[1])):e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)?i="image":e.match(/\.(pdf)((\?|#).*)?$/i)&&(i="pdf")),t.type=i||this.fancybox.option("defaultType","image"),"html5video"!==i&&"video"!==i||(t.video=x({},this.fancybox.option("Html.video"),t.video),t._width&&t._height?t.ratio=parseFloat(t._width)/parseFloat(t._height):t.ratio=t.ratio||t.video.ratio||X.video.ratio)}}},{key:"onReady",value:function(){var t=this;this.fancybox.Carousel.slides.forEach((function(e){e.$el&&(t.setContent(e),e.index===t.fancybox.getSlide().index&&t.playVideo(e))}))}},{key:"onCreateSlide",value:function(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}},{key:"loadInlineContent",value:function(t){var e;if(t.src instanceof HTMLElement)e=t.src;else if("string"==typeof t.src){var i=t.src.split("#",2),n=2===i.length&&""===i[0]?i[1]:i[0];e=document.getElementById(n)}if(e){if("clone"===t.type||e.$placeHolder){var o=(e=e.cloneNode(!0)).getAttribute("id");o=o?"".concat(o,"--clone"):"clone-".concat(this.fancybox.id,"-").concat(t.index),e.setAttribute("id",o)}else{var a=document.createElement("div");a.classList.add("fancybox-placeholder"),e.parentNode.insertBefore(a,e),e.$placeHolder=a}this.fancybox.setContent(t,e)}else this.fancybox.setError(t,"{{ELEMENT_NOT_FOUND}}")}},{key:"loadAjaxContent",value:function(t){var e=this.fancybox,i=new XMLHttpRequest;e.showLoading(t),i.onreadystatechange=function(){i.readyState===XMLHttpRequest.DONE&&"ready"===e.state&&(e.hideLoading(t),200===i.status?e.setContent(t,i.responseText):e.setError(t,404===i.status?"{{AJAX_NOT_FOUND}}":"{{AJAX_FORBIDDEN}}"))},i.open("GET",t.src),i.setRequestHeader("X-Requested-With","XMLHttpRequest"),i.send(t.ajax||null),t.xhr=i}},{key:"loadIframeContent",value:function(t){var e=this,i=this.fancybox,n=document.createElement("iframe");if(n.className="fancybox__iframe",n.setAttribute("id","fancybox__iframe_".concat(i.id,"_").concat(t.index)),n.setAttribute("allow","autoplay; fullscreen"),n.setAttribute("scrolling","auto"),t.$iframe=n,"iframe"!==t.type||!1===t.preload)return n.setAttribute("src",t.src),this.fancybox.setContent(t,n),void this.resizeIframe(t);i.showLoading(t);var o=document.createElement("div");o.style.visibility="hidden",this.fancybox.setContent(t,o),o.appendChild(n),n.onerror=function(){i.setError(t,"{{IFRAME_ERROR}}")},n.onload=function(){i.hideLoading(t);var o=!1;n.isReady||(n.isReady=!0,o=!0),n.src.length&&(n.parentNode.style.visibility="",e.resizeIframe(t),o&&i.revealContent(t))},n.setAttribute("src",t.src)}},{key:"setAspectRatio",value:function(t){var e=t.$content,i=t.ratio;if(e){var n=t._width,o=t._height;if(i||n&&o){Object.assign(e.style,{width:n&&o?"100%":"",height:n&&o?"100%":"",maxWidth:"",maxHeight:""});var a=e.offsetWidth,s=e.offsetHeight;if(o=o||s,(n=n||a)>a||o>s){var r=Math.min(a/n,s/o);n*=r,o*=r}Math.abs(n/o-i)>.01&&(i<n/o?n=o*i:o=n/i),Object.assign(e.style,{width:"".concat(n,"px"),height:"".concat(o,"px")})}}}},{key:"resizeIframe",value:function(t){var e=t.$iframe;if(e){var i=t._width||0,n=t._height||0;i&&n&&(t.autoSize=!1);var o=e.parentNode,a=o.style;if(!1!==t.preload&&!1!==t.autoSize)try{var s=window.getComputedStyle(o),r=parseFloat(s.paddingLeft)+parseFloat(s.paddingRight),l=parseFloat(s.paddingTop)+parseFloat(s.paddingBottom),c=e.contentWindow.document,h=c.getElementsByTagName("html")[0],d=c.body;d.style.overflow="hidden",i=i||h.scrollWidth+r,a.width="".concat(i,"px"),d.style.overflow="",a.flex="0 0 auto",a.height="".concat(d.scrollHeight,"px"),n=h.scrollHeight+l}catch(t){}if(i||n){var u={flex:"0 1 auto"};i&&(u.width="".concat(i,"px")),n&&(u.height="".concat(n,"px")),Object.assign(a,u)}}}},{key:"onRefresh",value:function(t,e){var i=this;e.slides.forEach((function(t){t.$el&&(t.$iframe&&i.resizeIframe(t),t.ratio&&i.setAspectRatio(t))}))}},{key:"setContent",value:function(t){if(t&&!t.isDom){switch(t.type){case"html":this.fancybox.setContent(t,t.src);break;case"html5video":this.fancybox.setContent(t,this.fancybox.option("Html.html5video.tpl").replace(/\{\{src\}\}/gi,t.src).replace("{{format}}",t.format||t.html5video&&t.html5video.format||"").replace("{{poster}}",t.poster||t.thumb||""));break;case"inline":case"clone":this.loadInlineContent(t);break;case"ajax":this.loadAjaxContent(t);break;case"iframe":case"pdf":case"video":case"map":this.loadIframeContent(t)}t.ratio&&this.setAspectRatio(t)}}},{key:"onSelectSlide",value:function(t,e,i){"ready"===t.state&&this.playVideo(i)}},{key:"playVideo",value:function(t){if("html5video"===t.type&&t.video.autoplay)try{var e=t.$el.querySelector("video");if(e){var i=e.play();void 0!==i&&i.then((function(){})).catch((function(t){e.muted=!0,e.play()}))}}catch(t){}if("video"===t.type&&t.$iframe&&t.$iframe.contentWindow){!function e(){if("done"===t.state&&t.$iframe&&t.$iframe.contentWindow){var i;if(t.$iframe.isReady)return t.video&&t.video.autoplay&&(i="youtube"==t.vendor?{event:"command",func:"playVideo"}:{method:"play",value:"true"}),void(i&&t.$iframe.contentWindow.postMessage(JSON.stringify(i),"*"));"youtube"===t.vendor&&(i={event:"listening",id:t.$iframe.getAttribute("id")},t.$iframe.contentWindow.postMessage(JSON.stringify(i),"*"))}t.poller=setTimeout(e,250)}()}}},{key:"onUnselectSlide",value:function(t,e,i){if("html5video"!==i.type){var n=!1;"vimeo"==i.vendor?n={method:"pause",value:"true"}:"youtube"===i.vendor&&(n={event:"command",func:"pauseVideo"}),n&&i.$iframe&&i.$iframe.contentWindow&&i.$iframe.contentWindow.postMessage(JSON.stringify(n),"*"),clearTimeout(i.poller)}else try{i.$el.querySelector("video").pause()}catch(t){}}},{key:"onRemoveSlide",value:function(t,e,i){i.xhr&&(i.xhr.abort(),i.xhr=null),i.$iframe&&(i.$iframe.onload=i.$iframe.onerror=null,i.$iframe.src="//about:blank",i.$iframe=null);var n=i.$content;"inline"===i.type&&n&&(n.classList.remove("fancybox__content"),"none"!==n.style.display&&(n.style.display="none")),i.$closeButton&&(i.$closeButton.remove(),i.$closeButton=null);var o=n&&n.$placeHolder;o&&(o.parentNode.insertBefore(n,o),o.remove(),n.$placeHolder=null)}},{key:"onMessage",value:function(t){try{var e=JSON.parse(t.data);if("https://player.vimeo.com"===t.origin){if("ready"===e.event){var i,n=y(document.getElementsByClassName("fancybox__iframe"));try{for(n.s();!(i=n.n()).done;){var o=i.value;o.contentWindow===t.source&&(o.isReady=1)}}catch(t){n.e(t)}finally{n.f()}}}else"https://www.youtube-nocookie.com"===t.origin&&"onReady"===e.event&&(document.getElementById(e.id).isReady=1)}catch(t){}}},{key:"attach",value:function(){this.fancybox.on(this.events),window.addEventListener("message",this.onMessage,!1)}},{key:"detach",value:function(){this.fancybox.off(this.events),window.removeEventListener("message",this.onMessage,!1)}}]),t}();q.defaults=X;var Y=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onReady","onClosing","onDone","onPageChange","onCreateSlide","onRemoveSlide","onImageStatusChange"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={ready:this.onReady,closing:this.onClosing,done:this.onDone,"Carousel.change":this.onPageChange,"Carousel.createSlide":this.onCreateSlide,"Carousel.removeSlide":this.onRemoveSlide}}return s(t,[{key:"onReady",value:function(){var t=this;this.fancybox.Carousel.slides.forEach((function(e){e.$el&&t.setContent(e)}))}},{key:"onDone",value:function(t,e){this.handleCursor(e)}},{key:"onClosing",value:function(t){clearTimeout(this.clickTimer),this.clickTimer=null,t.Carousel.slides.forEach((function(t){t.$image&&(t.state="destroy"),t.Panzoom&&t.Panzoom.detachEvents()})),"closing"===this.fancybox.state&&this.canZoom(t.getSlide())&&this.zoomOut()}},{key:"onCreateSlide",value:function(t,e,i){"ready"===this.fancybox.state&&this.setContent(i)}},{key:"onRemoveSlide",value:function(t,e,i){i.$image&&(i.$el.classList.remove(t.option("Image.canZoomInClass")),i.$image.remove(),i.$image=null),i.Panzoom&&(i.Panzoom.destroy(),i.Panzoom=null),i.$el&&i.$el.dataset&&delete i.$el.dataset.imageFit}},{key:"setContent",value:function(t){var e=this;if(!(t.isDom||t.html||t.type&&"image"!==t.type||t.$image)){t.type="image",t.state="loading";var i=document.createElement("div");i.style.visibility="hidden";var n=document.createElement("img");n.addEventListener("load",(function(i){i.stopImmediatePropagation(),e.onImageStatusChange(t)})),n.addEventListener("error",(function(){e.onImageStatusChange(t)})),n.src=t.src,n.alt="",n.draggable=!1,n.classList.add("fancybox__image"),t.srcset&&n.setAttribute("srcset",t.srcset),t.sizes&&n.setAttribute("sizes",t.sizes),t.$image=n;var o=this.fancybox.option("Image.wrap");if(o){var a=document.createElement("div");a.classList.add("string"==typeof o?o:"fancybox__image-wrap"),a.appendChild(n),i.appendChild(a),t.$wrap=a}else i.appendChild(n);t.$el.dataset.imageFit=this.fancybox.option("Image.fit"),this.fancybox.setContent(t,i),n.complete||n.error?this.onImageStatusChange(t):this.fancybox.showLoading(t)}}},{key:"onImageStatusChange",value:function(t){var e=this,i=t.$image;i&&"loading"===t.state&&(i.complete&&i.naturalWidth&&i.naturalHeight?(this.fancybox.hideLoading(t),"contain"===this.fancybox.option("Image.fit")&&this.initSlidePanzoom(t),t.$el.addEventListener("wheel",(function(i){return e.onWheel(t,i)}),{passive:!1}),t.$content.addEventListener("click",(function(i){return e.onClick(t,i)}),{passive:!1}),this.revealContent(t)):this.fancybox.setError(t,"{{IMAGE_ERROR}}"))}},{key:"initSlidePanzoom",value:function(t){var e=this;t.Panzoom||(t.Panzoom=new z(t.$el,x(!0,this.fancybox.option("Image.Panzoom",{}),{viewport:t.$wrap,content:t.$image,wrapInner:!1,textSelection:!0,touch:this.fancybox.option("Image.touch"),panOnlyZoomed:!0,click:!1,wheel:!1})),t.Panzoom.on("startAnimation",(function(){e.fancybox.trigger("Image.startAnimation",t)})),t.Panzoom.on("endAnimation",(function(){"zoomIn"===t.state&&e.fancybox.done(t),e.handleCursor(t),e.fancybox.trigger("Image.endAnimation",t)})),t.Panzoom.on("afterUpdate",(function(){e.handleCursor(t),e.fancybox.trigger("Image.afterUpdate",t)})))}},{key:"revealContent",value:function(t){null===this.fancybox.Carousel.prevPage&&t.index===this.fancybox.options.startIndex&&this.canZoom(t)?this.zoomIn():this.fancybox.revealContent(t)}},{key:"getZoomInfo",value:function(t){var e=t.$thumb.getBoundingClientRect(),i=e.width,n=e.height,o=t.$content.getBoundingClientRect(),a=o.width,s=o.height,r=o.top-e.top,l=o.left-e.left,c=this.fancybox.option("Image.zoomOpacity");return"auto"===c&&(c=Math.abs(i/n-a/s)>.1),{top:r,left:l,scale:e.width/a,opacity:c}}},{key:"canZoom",value:function(t){var e=this.fancybox,i=e.$container;if(window.visualViewport&&1!==window.visualViewport.scale)return!1;if(!e.option("Image.zoom")||"contain"!==e.option("Image.fit"))return!1;var n=t.$thumb;if(!n||"loading"===t.state)return!1;i.classList.add("fancybox__no-click");var o,a=n.getBoundingClientRect();if(this.fancybox.option("Image.ignoreCoveredThumbnail")){var s=document.elementFromPoint(a.left+1,a.top+1)===n,r=document.elementFromPoint(a.right-1,a.bottom-1)===n;o=s&&r}else o=document.elementFromPoint(a.left+.5*a.width,a.top+.5*a.height)===n;return i.classList.remove("fancybox__no-click"),o}},{key:"zoomIn",value:function(){var t=this.fancybox,e=t.getSlide(),i=e.Panzoom,n=this.getZoomInfo(e),o=n.top,a=n.left,s=n.scale,r=n.opacity;e.state="zoomIn",t.trigger("reveal",e),i.panTo({x:-1*a,y:-1*o,scale:s,friction:0,ignoreBounds:!0}),e.$content.style.visibility="",!0===r&&i.on("afterTransform",(function(t){"zoomIn"!==e.state&&"zoomOut"!==e.state||(t.$content.style.opacity=Math.min(1,1-(1-t.content.scale)/(1-s)))})),i.panTo({x:0,y:0,scale:1,friction:this.fancybox.option("Image.zoomFriction")})}},{key:"zoomOut",value:function(){var t=this,e=this.fancybox,i=e.getSlide(),n=i.Panzoom;if(n){i.state="zoomOut",e.state="customClosing",i.$caption&&(i.$caption.style.visibility="hidden");var o=this.fancybox.option("Image.zoomFriction"),a=function(e){var a=t.getZoomInfo(i),s=a.top,r=a.left,l=a.scale,c=a.opacity;e||c||(o*=.82),n.panTo({x:-1*r,y:-1*s,scale:l,friction:o,ignoreBounds:!0}),o*=.98};window.addEventListener("scroll",a),n.once("endAnimation",(function(){window.removeEventListener("scroll",a),e.destroy()})),a()}}},{key:"handleCursor",value:function(t){if("image"===t.type&&t.$el){var e=t.Panzoom,i=this.fancybox.option("Image.click",!1,t),n=t.$el.classList;if(e&&"toggleZoom"===i)n[e&&1===e.content.scale&&e.option("maxScale")-e.content.scale>.01?"add":"remove"](this.fancybox.option("Image.canZoomInClass"));else"close"===i&&n.add(this.fancybox.option("Image.canZoomOutClass"))}}},{key:"onWheel",value:function(t,e){if("ready"===this.fancybox.state&&!1!==this.fancybox.trigger("Image.wheel",e))switch(this.fancybox.option("Image.wheel")){case"zoom":t.Panzoom&&t.Panzoom.zoomWithWheel(e);break;case"close":this.fancybox.close();break;case"slide":this.fancybox[e.deltaY<0?"prev":"next"]()}}},{key:"onClick",value:function(t,e){var i=this;if("ready"===this.fancybox.state){var n=t.Panzoom;if(!n||!n.dragPosition.midPoint&&0===n.dragOffset.x&&0===n.dragOffset.y&&1===n.dragOffset.scale){if(this.fancybox.Carousel.Panzoom.lockAxis)return!1;var o=function(n){switch(n){case"toggleZoom":e.stopPropagation(),t.Panzoom&&t.Panzoom.zoomWithClick(e);break;case"close":i.fancybox.close();break;case"next":e.stopPropagation(),i.fancybox.next()}},a=this.fancybox.option("Image.click"),s=this.fancybox.option("Image.doubleClick");s?this.clickTimer?(clearTimeout(this.clickTimer),this.clickTimer=null,o(s)):this.clickTimer=setTimeout((function(){i.clickTimer=null,o(a)}),300):o(a)}}}},{key:"onPageChange",value:function(t,e){var i=t.getSlide();e.slides.forEach((function(t){t.Panzoom&&"done"===t.state&&t.index!==i.index&&t.Panzoom.panTo({x:0,y:0,scale:1,friction:.8})}))}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events)}}]),t}();Y.defaults={canZoomInClass:"can-zoom_in",canZoomOutClass:"can-zoom_out",zoom:!0,zoomOpacity:"auto",zoomFriction:.82,ignoreCoveredThumbnail:!1,touch:!0,click:"toggleZoom",doubleClick:null,wheel:"zoom",fit:"contain",wrap:!1,Panzoom:{ratio:1}};var U=function(){var t=window.location.hash.substr(1),e=t.split("-"),i=e.length>1&&/^\+?\d+$/.test(e[e.length-1])&&parseInt(e.pop(-1),10)||null;return{hash:t,slug:e.join("-"),index:i}},V=function(){function t(e){o(this,t),this.fancybox=e;for(var i=0,n=["onChange","onClosing"];i<n.length;i++){var a=n[i];this[a]=this[a].bind(this)}this.events={initCarousel:this.onChange,"Carousel.change":this.onChange,closing:this.onClosing},this.hasCreatedHistory=!1,this.origHash="",this.timer=null}return s(t,[{key:"onChange",value:function(){var t=this,e=this.fancybox,i=e.Carousel;this.timer&&clearTimeout(this.timer);var n=null===i.prevPage,o=e.getSlide(),a=o.$trigger&&o.$trigger.dataset,s=window.location.hash.substr(1),r=!1;if(o.slug)r=o.slug;else{var l=a&&a.fancybox;l&&l.length&&"true"!==l&&(r=l+(i.slides.length>1?"-"+(o.index+1):""))}n&&(this.origHash=s!==r?this.origHash:""),r&&s!==r&&(this.timer=setTimeout((function(){try{window.history[n?"pushState":"replaceState"]({},document.title,window.location.pathname+window.location.search+"#"+r),n&&(t.hasCreatedHistory=!0)}catch(t){}}),300))}},{key:"onClosing",value:function(){if(this.timer&&clearTimeout(this.timer),!0!==this.hasSilentClose){if(!this.hasCreatedHistory)try{return void window.history.replaceState({},document.title,window.location.pathname+window.location.search+(this.origHash?"#"+this.origHash:""))}catch(t){}window.history.back()}}},{key:"attach",value:function(t){t.on(this.events)}},{key:"detach",value:function(t){t.off(this.events)}}],[{key:"startFromUrl",value:function(){if(t.Fancybox&&!t.Fancybox.getInstance()){var e=U(),i=e.hash,n=e.slug,o=e.index;if(n){var a=document.querySelector('[data-slug="'.concat(i,'"]'));if(a&&a.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})),!t.Fancybox.getInstance()){var s=document.querySelectorAll('[data-fancybox="'.concat(n,'"]'));s.length&&(null===o&&1===s.length?a=s[0]:o&&(a=s[o-1]),a&&a.dispatchEvent(new CustomEvent("click",{bubbles:!0,cancelable:!0})))}}}}},{key:"onHashChange",value:function(){var e=U(),i=e.slug,n=e.index,o=t.Fancybox.getInstance();if(o){if(i){var a,s=o.Carousel,r=y(s.slides);try{for(r.s();!(a=r.n()).done;){var l=a.value;if(l.slug&&l.slug===i)return s.slideTo(l.index)}}catch(t){r.e(t)}finally{r.f()}var c=o.getSlide(),h=c.$trigger&&c.$trigger.dataset;if(h&&h.fancybox===i)return s.slideTo(n-1)}o.plugins.Hash.hasSilentClose=!0,o.close()}t.startFromUrl()}},{key:"create",value:function(e){function i(){window.addEventListener("hashchange",t.onHashChange,!1),t.startFromUrl()}t.Fancybox=e,B&&window.requestAnimationFrame((function(){/complete|interactive|loaded/.test(document.readyState)?i():document.addEventListener("DOMContentLoaded",i)}))}},{key:"destroy",value:function(){window.removeEventListener("hashchange",t.onHashChange,!1)}}]),t}(),Z={pageXOffset:0,pageYOffset:0,element:function(){return document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement},activate:function(t){Z.pageXOffset=window.pageXOffset,Z.pageYOffset=window.pageYOffset,t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},deactivate:function(){document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen()}},G=function(){function t(e){o(this,t),this.fancybox=e,this.active=!1,this.handleVisibilityChange=this.handleVisibilityChange.bind(this)}return s(t,[{key:"isActive",value:function(){return this.active}},{key:"setTimer",value:function(){var t=this;if(this.active&&!this.timer){var e=this.fancybox.option("slideshow.delay",3e3);this.timer=setTimeout((function(){t.timer=null,t.fancybox.option("infinite")||t.fancybox.getSlide().index!==t.fancybox.Carousel.slides.length-1?t.fancybox.next():t.fancybox.jumpTo(0,{friction:0})}),e);var i=this.$progress;i||((i=document.createElement("div")).classList.add("fancybox__progress"),this.fancybox.$carousel.parentNode.insertBefore(i,this.fancybox.$carousel),this.$progress=i,i.offsetHeight),i.style.transitionDuration="".concat(e,"ms"),i.style.transform="scaleX(1)"}}},{key:"clearTimer",value:function(){clearTimeout(this.timer),this.timer=null,this.$progress&&(this.$progress.style.transitionDuration="",this.$progress.style.transform="",this.$progress.offsetHeight)}},{key:"activate",value:function(){this.active||(this.active=!0,this.fancybox.$container.classList.add("has-slideshow"),"done"===this.fancybox.getSlide().state&&this.setTimer(),document.addEventListener("visibilitychange",this.handleVisibilityChange,!1))}},{key:"handleVisibilityChange",value:function(){this.deactivate()}},{key:"deactivate",value:function(){this.active=!1,this.clearTimer(),this.fancybox.$container.classList.remove("has-slideshow"),document.removeEventListener("visibilitychange",this.handleVisibilityChange,!1)}},{key:"toggle",value:function(){this.active?this.deactivate():this.fancybox.Carousel.slides.length>1&&this.activate()}}]),t}(),K={display:["counter","zoom","slideshow","fullscreen","thumbs","close"],autoEnable:!0,items:{counter:{type:"div",class:"fancybox__counter",html:'<span data-fancybox-index=""></span>&nbsp;/&nbsp;<span data-fancybox-count=""></span>',tabindex:-1,position:"left"},prev:{type:"button",class:"fancybox__button--prev",label:"PREV",html:'<svg viewBox="0 0 24 24"><path d="M15 4l-8 8 8 8"/></svg>',click:function(t){t.preventDefault(),this.fancybox.prev()}},next:{type:"button",class:"fancybox__button--next",label:"NEXT",html:'<svg viewBox="0 0 24 24"><path d="M8 4l8 8-8 8"/></svg>',click:function(t){t.preventDefault(),this.fancybox.next()}},fullscreen:{type:"button",class:"fancybox__button--fullscreen",label:"TOGGLE_FULLSCREEN",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M3 8 V3h5"></path><path d="M21 8V3h-5"></path><path d="M8 21H3v-5"></path><path d="M16 21h5v-5"></path></g>\n                <g><path d="M7 2v5H2M17 2v5h5M2 17h5v5M22 17h-5v5"/></g>\n            </svg>',click:function(t){t.preventDefault(),Z.element()?Z.deactivate():Z.activate(this.fancybox.$container)}},slideshow:{type:"button",class:"fancybox__button--slideshow",label:"TOGGLE_SLIDESHOW",html:'<svg viewBox="0 0 24 24">\n                <g><path d="M6 4v16"/><path d="M20 12L6 20"/><path d="M20 12L6 4"/></g>\n                <g><path d="M7 4v15M17 4v15"/></g>\n            </svg>',click:function(t){t.preventDefault(),this.Slideshow.toggle()}},zoom:{type:"button",class:"fancybox__button--zoom",label:"TOGGLE_ZOOM",html:'<svg viewBox="0 0 24 24"><circle cx="10" cy="10" r="7"></circle><path d="M16 16 L21 21"></svg>',click:function(t){t.preventDefault();var e=this.fancybox.getSlide().Panzoom;e&&e.toggleZoom()}},download:{type:"link",label:"DOWNLOAD",class:"fancybox__button--download",html:'<svg viewBox="0 0 24 24"><path d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.62 2.48A2 2 0 004.56 21h14.88a2 2 0 001.94-1.51L22 17"/></svg>',click:function(t){t.stopPropagation()}},thumbs:{type:"button",label:"TOGGLE_THUMBS",class:"fancybox__button--thumbs",html:'<svg viewBox="0 0 24 24"><circle cx="4" cy="4" r="1" /><circle cx="12" cy="4" r="1" transform="rotate(90 12 4)"/><circle cx="20" cy="4" r="1" transform="rotate(90 20 4)"/><circle cx="4" cy="12" r="1" transform="rotate(90 4 12)"/><circle cx="12" cy="12" r="1" transform="rotate(90 12 12)"/><circle cx="20" cy="12" r="1" transform="rotate(90 20 12)"/><circle cx="4" cy="20" r="1" transform="rotate(90 4 20)"/><circle cx="12" cy="20" r="1" transform="rotate(90 12 20)"/><circle cx="20" cy="20" r="1" transform="rotate(90 20 20)"/></svg>',click:function(t){t.stopPropagation();var e=this.fancybox.plugins.Thumbs;e&&e.toggle()}},close:{type:"button",label:"CLOSE",class:"fancybox__button--close",html:'<svg viewBox="0 0 24 24"><path d="M20 20L4 4m16 0L4 20"></path></svg>',tabindex:0,click:function(t){t.stopPropagation(),t.preventDefault(),this.fancybox.close()}}}},J=function(){function t(e){var i=this;o(this,t),this.fancybox=e,this.$container=null,this.state="init";for(var n=0,a=["onInit","onPrepare","onDone","onKeydown","onClosing","onChange","onSettle","onRefresh"];n<a.length;n++){var s=a[n];this[s]=this[s].bind(this)}this.events={init:this.onInit,prepare:this.onPrepare,done:this.onDone,keydown:this.onKeydown,closing:this.onClosing,"Carousel.change":this.onChange,"Carousel.settle":this.onSettle,"Carousel.Panzoom.touchStart":function(){return i.onRefresh()},"Image.startAnimation":function(t,e){return i.onRefresh(e)},"Image.afterUpdate":function(t,e){return i.onRefresh(e)}}}return s(t,[{key:"onInit",value:function(){if(this.fancybox.option("Toolbar.autoEnable")){var t,e=!1,i=y(this.fancybox.items);try{for(i.s();!(t=i.n()).done;){if("image"===t.value.type){e=!0;break}}}catch(t){i.e(t)}finally{i.f()}if(!e)return void(this.state="disabled")}var n,o=y(this.fancybox.option("Toolbar.display"));try{for(o.s();!(n=o.n()).done;){var a=n.value;if("close"===(b(a)?a.id:a)){this.fancybox.options.closeButton=!1;break}}}catch(t){o.e(t)}finally{o.f()}}},{key:"onPrepare",value:function(){if("init"===this.state&&(this.build(),this.update(),this.Slideshow=new G(this.fancybox),!this.fancybox.Carousel.prevPage&&(this.fancybox.option("slideshow.autoStart")&&this.Slideshow.activate(),this.fancybox.option("fullscreen.autoStart")&&!Z.element())))try{Z.activate(this.fancybox.$container)}catch(t){}}},{key:"onFsChange",value:function(){window.scrollTo(Z.pageXOffset,Z.pageYOffset)}},{key:"onSettle",value:function(){this.Slideshow&&this.Slideshow.isActive()&&(this.fancybox.getSlide().index!==this.fancybox.Carousel.slides.length-1||this.fancybox.option("infinite")?"done"===this.fancybox.getSlide().state&&this.Slideshow.setTimer():this.Slideshow.deactivate())}},{key:"onChange",value:function(){this.update(),this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer()}},{key:"onDone",value:function(t,e){e.index===t.getSlide().index&&(this.update(),this.Slideshow&&this.Slideshow.isActive()&&(this.fancybox.option("infinite")||e.index!==this.fancybox.Carousel.slides.length-1?this.Slideshow.setTimer():this.Slideshow.deactivate()))}},{key:"onRefresh",value:function(t){t&&t.index!==this.fancybox.getSlide().index||(this.update(),!this.Slideshow||!this.Slideshow.isActive()||t&&"done"!==t.state||this.Slideshow.deactivate())}},{key:"onKeydown",value:function(t,e,i){" "===e&&this.Slideshow&&(this.Slideshow.toggle(),i.preventDefault())}},{key:"onClosing",value:function(){this.Slideshow&&this.Slideshow.deactivate(),document.removeEventListener("fullscreenchange",this.onFsChange)}},{key:"createElement",value:function(t){var e,i;("div"===t.type?e=document.createElement("div"):(e=document.createElement("link"===t.type?"a":"button")).classList.add("carousel__button"),e.innerHTML=t.html,e.setAttribute("tabindex",t.tabindex||0),t.class)&&(i=e.classList).add.apply(i,p(t.class.split(" ")));t.label&&e.setAttribute("title",this.fancybox.localize("{{".concat(t.label,"}}"))),t.click&&e.addEventListener("click",t.click.bind(this)),"prev"===t.id&&e.setAttribute("data-fancybox-prev",""),"next"===t.id&&e.setAttribute("data-fancybox-next","");var n=e.querySelector("svg");return n&&(n.setAttribute("role","img"),n.setAttribute("tabindex","-1"),n.setAttribute("xmlns","http://www.w3.org/2000/svg")),e}},{key:"build",value:function(){var t=this;this.cleanup();var e,i=this.fancybox.option("Toolbar.items"),n=[{position:"left",items:[]},{position:"center",items:[]},{position:"right",items:[]}],o=this.fancybox.plugins.Thumbs,a=y(this.fancybox.option("Toolbar.display"));try{var s=function(){var a=e.value,s=void 0,r=void 0;if(b(a)?(s=a.id,r=x({},i[s],a)):r=i[s=a],["counter","next","prev","slideshow"].includes(s)&&t.fancybox.items.length<2)return"continue";if("fullscreen"===s){if(!document.fullscreenEnabled||window.fullScreen)return"continue";document.addEventListener("fullscreenchange",t.onFsChange)}if("thumbs"===s&&(!o||"disabled"===o.state))return"continue";if(!r)return"continue";var l=r.position||"right",c=n.find((function(t){return t.position===l}));c&&c.items.push(r)};for(a.s();!(e=a.n()).done;)s()}catch(t){a.e(t)}finally{a.f()}var r=document.createElement("div");r.classList.add("fancybox__toolbar");for(var l=0,c=n;l<c.length;l++){var h=c[l];if(h.items.length){var d=document.createElement("div");d.classList.add("fancybox__toolbar__items"),d.classList.add("fancybox__toolbar__items--".concat(h.position));var u,f=y(h.items);try{for(f.s();!(u=f.n()).done;){var v=u.value;d.appendChild(this.createElement(v))}}catch(t){f.e(t)}finally{f.f()}r.appendChild(d)}}this.fancybox.$carousel.parentNode.insertBefore(r,this.fancybox.$carousel),this.$container=r}},{key:"update",value:function(){var t,e=this.fancybox.getSlide(),i=e.index,n=this.fancybox.items.length,o=e.downloadSrc||("image"!==e.type||e.error?null:e.src),a=y(this.fancybox.$container.querySelectorAll("a.fancybox__button--download"));try{for(a.s();!(t=a.n()).done;){var s=t.value;o?(s.removeAttribute("disabled"),s.removeAttribute("tabindex"),s.setAttribute("href",o),s.setAttribute("download",o),s.setAttribute("target","_blank")):(s.setAttribute("disabled",""),s.setAttribute("tabindex",-1),s.removeAttribute("href"),s.removeAttribute("download"))}}catch(t){a.e(t)}finally{a.f()}var r,l=e.Panzoom,c=l&&l.option("maxScale")>l.option("baseScale"),h=y(this.fancybox.$container.querySelectorAll(".fancybox__button--zoom"));try{for(h.s();!(r=h.n()).done;){var d=r.value;c?d.removeAttribute("disabled"):d.setAttribute("disabled","")}}catch(t){h.e(t)}finally{h.f()}var u,f=y(this.fancybox.$container.querySelectorAll("[data-fancybox-index]"));try{for(f.s();!(u=f.n()).done;){u.value.innerHTML=e.index+1}}catch(t){f.e(t)}finally{f.f()}var v,p=y(this.fancybox.$container.querySelectorAll("[data-fancybox-count]"));try{for(p.s();!(v=p.n()).done;){v.value.innerHTML=n}}catch(t){p.e(t)}finally{p.f()}if(!this.fancybox.option("infinite")){var g,m=y(this.fancybox.$container.querySelectorAll("[data-fancybox-prev]"));try{for(m.s();!(g=m.n()).done;){var b=g.value;0===i?b.setAttribute("disabled",""):b.removeAttribute("disabled")}}catch(t){m.e(t)}finally{m.f()}var x,w=y(this.fancybox.$container.querySelectorAll("[data-fancybox-next]"));try{for(w.s();!(x=w.n()).done;){var k=x.value;i===n-1?k.setAttribute("disabled",""):k.removeAttribute("disabled")}}catch(t){w.e(t)}finally{w.f()}}}},{key:"cleanup",value:function(){this.Slideshow&&this.Slideshow.isActive()&&this.Slideshow.clearTimer(),this.$container&&this.$container.remove(),this.$container=null}},{key:"attach",value:function(){this.fancybox.on(this.events)}},{key:"detach",value:function(){this.fancybox.off(this.events),this.cleanup()}}]),t}();J.defaults=K;var Q={ScrollLock:H,Thumbs:W,Html:q,Toolbar:J,Image:Y,Hash:V},tt={startIndex:0,preload:1,infinite:!0,showClass:"fancybox-zoomInUp",hideClass:"fancybox-fadeOut",animated:!0,hideScrollbar:!0,parentEl:null,mainClass:null,autoFocus:!0,trapFocus:!0,placeFocusBack:!0,click:"close",closeButton:"inside",dragToClose:!0,keyboard:{Escape:"close",Delete:"close",Backspace:"close",PageUp:"next",PageDown:"prev",ArrowUp:"next",ArrowDown:"prev",ArrowRight:"next",ArrowLeft:"prev"},template:{closeButton:'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg>',spinner:'<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="25 25 50 50" tabindex="-1"><circle cx="50" cy="50" r="20"/></svg>',main:null},l10n:{CLOSE:"Close",NEXT:"Next",PREV:"Previous",MODAL:"You can close this modal content with the ESC key",ERROR:"Something Went Wrong, Please Try Again Later",IMAGE_ERROR:"Image Not Found",ELEMENT_NOT_FOUND:"HTML Element Not Found",AJAX_NOT_FOUND:"Error Loading AJAX : Not Found",AJAX_FORBIDDEN:"Error Loading AJAX : Forbidden",IFRAME_ERROR:"Error Loading Page",TOGGLE_ZOOM:"Toggle zoom level",TOGGLE_THUMBS:"Toggle thumbnails",TOGGLE_SLIDESHOW:"Toggle slideshow",TOGGLE_FULLSCREEN:"Toggle full-screen mode",DOWNLOAD:"Download"}},et={},it=0,nt=function(t){l(i,t);var e=f(i);function i(t){var n,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return o(this,i),(n=e.call(this,x(!0,{},tt,a))).bindHandlers(),n.state="init",n.setItems(t),n.attachPlugins(i.Plugins),n.trigger("init"),!0===n.option("hideScrollbar")&&n.hideScrollbar(),n.initLayout(),n.initCarousel(),n.attachEvents(),et[n.id]=d(n),n.trigger("prepare"),n.state="ready",n.trigger("ready"),n.$container.setAttribute("aria-hidden","false"),n.option("trapFocus")&&n.focus(),n}return s(i,[{key:"bindHandlers",value:function(){for(var t=0,e=["onMousedown","onKeydown","onClick","onFocus","onCreateSlide","onTouchMove","onTouchEnd","onTransform"];t<e.length;t++){var i=e[t];this[i]=this[i].bind(this)}}},{key:"attachEvents",value:function(){document.addEventListener("mousedown",this.onMousedown),document.addEventListener("keydown",this.onKeydown,!0),this.option("trapFocus")&&document.addEventListener("focus",this.onFocus,!0),this.$container.addEventListener("click",this.onClick)}},{key:"detachEvents",value:function(){document.removeEventListener("mousedown",this.onMousedown),document.removeEventListener("keydown",this.onKeydown,!0),document.removeEventListener("focus",this.onFocus,!0),this.$container.removeEventListener("click",this.onClick)}},{key:"initLayout",value:function(){var t=this;this.$root=this.option("parentEl")||document.body;var e=this.option("template.main");e&&(this.$root.insertAdjacentHTML("beforeend",this.localize(e)),this.$container=this.$root.querySelector(".fancybox__container")),this.$container||(this.$container=document.createElement("div"),this.$root.appendChild(this.$container)),this.$container.onscroll=function(){return t.$container.scrollLeft=0,!1},Object.entries({class:"fancybox__container",role:"dialog","aria-modal":"true","aria-hidden":"true","aria-label":this.localize("{{MODAL}}")}).forEach((function(e){var i;return(i=t.$container).setAttribute.apply(i,p(e))})),this.option("animated")&&this.$container.classList.add("is-animated"),this.$backdrop=this.$container.querySelector(".fancybox__backdrop"),this.$backdrop||(this.$backdrop=document.createElement("div"),this.$backdrop.classList.add("fancybox__backdrop"),this.$container.appendChild(this.$backdrop)),this.$carousel=this.$container.querySelector(".fancybox__carousel"),this.$carousel||(this.$carousel=document.createElement("div"),this.$carousel.classList.add("fancybox__carousel"),this.$container.appendChild(this.$carousel)),this.$container.Fancybox=this,this.id=this.$container.getAttribute("id"),this.id||(this.id=this.options.id||++it,this.$container.setAttribute("id","fancybox-"+this.id));var i,n=this.options.mainClass;n&&(i=this.$container.classList).add.apply(i,p(n.split(" ")));return document.documentElement.classList.add("with-fancybox"),this.trigger("initLayout"),this}},{key:"setItems",value:function(t){var e,i=[],n=y(t);try{for(n.s();!(e=n.n()).done;){var o=e.value,a=o.$trigger;if(a){var s=a.dataset||{};o.src=s.src||a.getAttribute("href")||o.src,o.type=s.type||o.type,!o.src&&a instanceof HTMLImageElement&&(o.src=a.currentSrc||o.$trigger.src)}var r=o.$thumb;if(!r){var l=o.$trigger&&o.$trigger.origTarget;l&&(r=l instanceof HTMLImageElement?l:l.querySelector("img")),!r&&o.$trigger&&(r=o.$trigger instanceof HTMLImageElement?o.$trigger:o.$trigger.querySelector("img"))}o.$thumb=r||null;var c=o.thumb;!c&&r&&!(c=r.currentSrc||r.src)&&r.dataset&&(c=r.dataset.lazySrc||r.dataset.src),c||"image"!==o.type||(c=o.src),o.thumb=c||null,o.caption=o.caption||"",i.push(o)}}catch(t){n.e(t)}finally{n.f()}this.items=i}},{key:"initCarousel",value:function(){var t=this;return this.Carousel=new D(this.$carousel,x(!0,{},{prefix:"",classNames:{viewport:"fancybox__viewport",track:"fancybox__track",slide:"fancybox__slide"},textSelection:!0,preload:this.option("preload"),friction:.88,slides:this.items,initialPage:this.options.startIndex,slidesPerPage:1,infiniteX:this.option("infinite"),infiniteY:!0,l10n:this.option("l10n"),Dots:!1,Navigation:{classNames:{main:"fancybox__nav",button:"carousel__button",next:"is-next",prev:"is-prev"}},Panzoom:{textSelection:!0,panOnlyZoomed:function(){return t.Carousel&&t.Carousel.pages&&t.Carousel.pages.length<2&&!t.options.dragToClose},lockAxis:function(){if(t.Carousel){var e="x";return t.options.dragToClose&&(e+="y"),e}}},on:{"*":function(e){for(var i=arguments.length,n=new Array(i>1?i-1:0),o=1;o<i;o++)n[o-1]=arguments[o];return t.trigger.apply(t,["Carousel.".concat(e)].concat(n))},init:function(e){return t.Carousel=e},createSlide:this.onCreateSlide}},this.option("Carousel"))),this.option("dragToClose")&&this.Carousel.Panzoom.on({touchMove:this.onTouchMove,afterTransform:this.onTransform,touchEnd:this.onTouchEnd}),this.trigger("initCarousel"),this}},{key:"onCreateSlide",value:function(t,e){var i=e.caption||"";if("function"==typeof this.options.caption&&(i=this.options.caption.call(this,this,this.Carousel,e)),"string"==typeof i&&i.length){var n=document.createElement("div"),o="fancybox__caption_".concat(this.id,"_").concat(e.index);n.className="fancybox__caption",n.innerHTML=i,n.setAttribute("id",o),e.$caption=e.$el.appendChild(n),e.$el.classList.add("has-caption"),e.$el.setAttribute("aria-labelledby",o)}}},{key:"onFocus",value:function(t){this.focus(t)}},{key:"onClick",value:function(t){if(!t.defaultPrevented&&(!t.target.closest(".fancybox__content")&&!getSelection().toString().length&&!1!==this.trigger("click",t)))switch(this.option("click")){case"close":this.close();break;case"next":this.next()}}},{key:"onTouchMove",value:function(){var t=this.getSlide().Panzoom;return!t||1===t.content.scale}},{key:"onTouchEnd",value:function(t){var e=t.dragOffset.y;Math.abs(e)>=150||Math.abs(e)>=35&&t.dragOffset.time<350?(this.option("hideClass")&&(this.getSlide().hideClass="fancybox-throwOut".concat(t.content.y<0?"Up":"Down")),this.close()):"y"===t.lockAxis&&t.panTo({y:0})}},{key:"onTransform",value:function(t){if(this.$backdrop){var e=Math.abs(t.content.y),i=e<1?"":Math.max(.33,Math.min(1,1-e/t.content.fitHeight*1.5));this.$container.style.setProperty("--fancybox-ts",i?"0s":""),this.$container.style.setProperty("--fancybox-opacity",i)}}},{key:"onMousedown",value:function(){document.body.classList.add("is-using-mouse")}},{key:"onKeydown",value:function(t){if(i.getInstance().id===this.id){document.body.classList.remove("is-using-mouse");var e=t.key,n=this.option("keyboard");if(n&&!t.ctrlKey&&!t.altKey&&!t.shiftKey){var o=document.activeElement&&document.activeElement.classList,a=o&&o.contains("carousel__button");if("Escape"!==e&&!a)if(t.target.isContentEditable||-1!==["BUTTON","TEXTAREA","OPTION","INPUT","SELECT","VIDEO"].indexOf(t.target.nodeName))return;if(!1!==this.trigger("keydown",e,t)){var s=n[e];"function"==typeof this[s]&&this[s]()}}}}},{key:"getSlide",value:function(){var t=this.Carousel;if(!t)return null;var e=null===t.page?t.option("initialPage"):t.page,i=t.pages||[];return i.length&&i[e]?i[e].slides[0]:null}},{key:"focus",value:function(t){var e=this,n=function(t){if(t){e.ignoreFocusChange=!0;try{t.setActive?t.setActive():i.preventScrollSupported?t.focus({preventScroll:!0}):t.focus()}catch(t){}e.ignoreFocusChange=!1}};if(!(this.ignoreFocusChange||["init","closing","customClosing","destroy"].indexOf(this.state)>-1)){var o=this.getSlide().$el;if(o){t&&t.preventDefault();for(var a,s,r=[],l=0,c=Array.from(this.$container.querySelectorAll(["a[href]","area[href]",'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',"select:not([disabled]):not([aria-hidden])","textarea:not([disabled]):not([aria-hidden])","button:not([disabled]):not([aria-hidden])","iframe","object","embed","video","audio","[contenteditable]",'[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])']));l<c.length;l++){var h=c[l],d=o.contains(h);!h.offsetParent||!d&&this.Carousel.$viewport.contains(h)?(h.dataset.origTabindex=void 0===h.dataset.origTabindex?h.getAttribute("tabindex"):h.dataset.origTabindex,h.tabIndex=-1):(r.push(h),void 0!==h.dataset.origTabindex&&(h.tabIndex=h.dataset.tabindex,h.removeAttribute("data-tabindex")),h.hasAttribute("autoFocus")||!a&&d?a=h:h.matches(".fancybox__button--close")&&(s=h))}if(r.indexOf(document.activeElement)>-1)this.lastFocus=document.activeElement;else if(t){if(!o.contains(document.activeElement)){if(this.lastFocus===r[0])n(r[r.length-1]);else{var u=r.indexOf(this.lastFocus);u<r.length-2?n(r[u+1]):n(r[0])}this.lastFocus=document.activeElement}}else n(a||s||r[0])}}}},{key:"hideScrollbar",value:function(){if(B){var t=window.innerWidth-document.documentElement.getBoundingClientRect().width,e="fancybox-style-noscroll",i=document.getElementById(e);i||t>0&&((i=document.createElement("style")).id=e,i.type="text/css",i.innerHTML=".compensate-for-scrollbar {padding-right: ".concat(t,"px;}"),document.getElementsByTagName("head")[0].appendChild(i),document.body.classList.add("compensate-for-scrollbar"))}}},{key:"revealScrollbar",value:function(){document.body.classList.remove("compensate-for-scrollbar");var t=document.getElementById("fancybox-style-noscroll");t&&t.remove()}},{key:"clearContent",value:function(t){this.Carousel.trigger("removeSlide",t),t.$content&&(t.$content.remove(),t.$content=null),t.$closeButton&&(t.$closeButton.remove(),t.$closeButton=null),t._className&&t.$el.classList.remove(t._className)}},{key:"setContent",value:function(t,e){var i,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=t.$el;if(e instanceof HTMLElement)["img","iframe","video","audio"].indexOf(e.nodeName.toLowerCase())>-1?(i=document.createElement("div")).appendChild(e):i=e;else{var a=document.createRange().createContextualFragment(e);(i=document.createElement("div")).appendChild(a)}if(t.filter&&!t.error&&(i=i.querySelector(t.filter)),i instanceof Element)return t._className="has-".concat(n.suffix||t.type||"unknown"),o.classList.add(t._className),i.classList.add("fancybox__content"),"none"!==i.style.display&&"none"!==getComputedStyle(i).getPropertyValue("display")||(i.style.display=t.display||this.option("defaultDisplay")||"flex"),t.id&&i.setAttribute("id",t.id),t.$content=i,o.prepend(i),this.manageCloseButton(t),"loading"!==t.state&&this.revealContent(t),i;this.setError(t,"{{ELEMENT_NOT_FOUND}}")}},{key:"manageCloseButton",value:function(t){var e=this,i=void 0===t.closeButton?this.option("closeButton"):t.closeButton;if(i&&("top"!==i||!this.$closeButton)){var n=document.createElement("button");n.classList.add("carousel__button","is-close"),n.setAttribute("title",this.options.l10n.CLOSE),n.innerHTML=this.option("template.closeButton"),n.addEventListener("click",(function(t){return e.close(t)})),"inside"===i?(t.$closeButton&&t.$closeButton.remove(),t.$closeButton=t.$content.appendChild(n)):this.$closeButton=this.$container.insertBefore(n,this.$container.firstChild)}}},{key:"revealContent",value:function(t){var e=this;this.trigger("reveal",t),t.$content.style.visibility="";var i=!1;t.error||"loading"===t.state||null!==this.Carousel.prevPage||t.index!==this.options.startIndex||(i=void 0===t.showClass?this.option("showClass"):t.showClass),i?(t.state="animating",this.animateCSS(t.$content,i,(function(){e.done(t)}))):this.done(t)}},{key:"animateCSS",value:function(t,e,i){if(t&&t.dispatchEvent(new CustomEvent("animationend",{bubbles:!0,cancelable:!0})),t&&e){t.addEventListener("animationend",(function n(o){o.currentTarget===this&&(t.removeEventListener("animationend",n),i&&i(),t.classList.remove(e))})),t.classList.add(e)}else"function"==typeof i&&i()}},{key:"done",value:function(t){t.state="done",this.trigger("done",t);var e=this.getSlide();e&&t.index===e.index&&this.option("autoFocus")&&this.focus()}},{key:"setError",value:function(t,e){t.error=e,this.hideLoading(t),this.clearContent(t);var i=document.createElement("div");i.classList.add("fancybox-error"),i.innerHTML=this.localize(e||"<p>{{ERROR}}</p>"),this.setContent(t,i,{suffix:"error"})}},{key:"showLoading",value:function(t){var e=this;t.state="loading",t.$el.classList.add("is-loading");var i=t.$el.querySelector(".fancybox__spinner");i||((i=document.createElement("div")).classList.add("fancybox__spinner"),i.innerHTML=this.option("template.spinner"),i.addEventListener("click",(function(){e.Carousel.Panzoom.velocity||e.close()})),t.$el.prepend(i))}},{key:"hideLoading",value:function(t){var e=t.$el&&t.$el.querySelector(".fancybox__spinner");e&&(e.remove(),t.$el.classList.remove("is-loading")),"loading"===t.state&&(this.trigger("load",t),t.state="ready")}},{key:"next",value:function(){var t=this.Carousel;t&&t.pages.length>1&&t.slideNext()}},{key:"prev",value:function(){var t=this.Carousel;t&&t.pages.length>1&&t.slidePrev()}},{key:"jumpTo",value:function(){var t;this.Carousel&&(t=this.Carousel).slideTo.apply(t,arguments)}},{key:"close",value:function(t){var e=this;if(t&&t.preventDefault(),!["closing","customClosing","destroy"].includes(this.state)&&!1!==this.trigger("shouldClose",t)&&(this.state="closing",this.Carousel.Panzoom.destroy(),this.detachEvents(),this.trigger("closing",t),"destroy"!==this.state)){this.$container.setAttribute("aria-hidden","true"),this.$container.classList.add("is-closing");var i=this.getSlide();if(this.Carousel.slides.forEach((function(t){t.$content&&t.index!==i.index&&e.Carousel.trigger("removeSlide",t)})),"closing"===this.state){var n=void 0===i.hideClass?this.option("hideClass"):i.hideClass;this.animateCSS(i.$content,n,(function(){e.destroy()}),!0)}}}},{key:"destroy",value:function(){if("destroy"!==this.state){this.state="destroy",this.trigger("destroy");var t=this.option("placeFocusBack")?this.getSlide().$trigger:null;if(this.Carousel.destroy(),this.detachPlugins(),this.Carousel=null,this.options={},this.events={},this.$container.remove(),this.$container=this.$backdrop=this.$carousel=null,t)if(i.preventScrollSupported)t.focus({preventScroll:!0});else{var e=document.body.scrollTop;t.focus(),document.body.scrollTop=e}delete et[this.id];var n=i.getInstance();n?n.focus():(document.documentElement.classList.remove("with-fancybox"),document.body.classList.remove("is-using-mouse"),this.revealScrollbar())}}}],[{key:"show",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new i(t,e)}},{key:"fromEvent",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t.defaultPrevented&&!(t.button&&0!==t.button||t.ctrlKey||t.metaKey||t.shiftKey)){var n,o,a,s=t.target;if((s.matches("[data-fancybox-trigger]")||(s=s.closest("[data-fancybox-trigger]")))&&(n=s&&s.dataset&&s.dataset.fancyboxTrigger),n){var r=document.querySelectorAll('[data-fancybox="'.concat(n,'"]')),l=parseInt(s.dataset.fancyboxIndex,10)||0;s=r.length?r[l]:s}s||(s=t.target),Array.from(i.openers.keys()).reverse().some((function(e){a=s;var i=!1;try{a instanceof Element&&("string"==typeof e||e instanceof String)&&(i=a.matches(e)||(a=a.closest(e)))}catch(t){}return!!i&&(t.preventDefault(),o=e,!0)}));var c=!1;if(o){e.event=t,e.target=a,a.origTarget=t.target,c=i.fromOpener(o,e);var h=i.getInstance();h&&"ready"===h.state&&t.detail&&document.body.classList.add("is-using-mouse")}return c}}},{key:"fromOpener",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=function(t){for(var e=["false","0","no","null","undefined"],i=["true","1","yes"],n=Object.assign({},t.dataset),o={},a=0,s=Object.entries(n);a<s.length;a++){var r=v(s[a],2),l=r[0],c=r[1];if("fancybox"!==l)if("width"===l||"height"===l)o["_".concat(l)]=c;else if("string"==typeof c||c instanceof String)if(e.indexOf(c)>-1)o[l]=!1;else if(i.indexOf(o[l])>-1)o[l]=!0;else try{o[l]=JSON.parse(c)}catch(t){o[l]=c}else o[l]=c}return t instanceof Element&&(o.$trigger=t),o},o=[],a=e.startIndex||0,s=e.target||null,r=void 0===(e=x({},e,i.openers.get(t))).groupAttr?"data-fancybox":e.groupAttr,l=r&&s&&s.getAttribute("".concat(r)),c=void 0!==e.groupAll&&e.groupAll;if(c||l?(o=[].slice.call(document.querySelectorAll(t)),c||(o=o.filter((function(t){return t.getAttribute("".concat(r))===l})))):o=[s],!o.length)return!1;var h=i.getInstance();return!(h&&o.indexOf(h.options.$trigger)>-1)&&(a=s?o.indexOf(s):a,new i(o=o.map(n),x({},e,{startIndex:a,$trigger:s})))}},{key:"bind",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};function n(){document.body.addEventListener("click",i.fromEvent,!1)}B&&(i.openers.size||(/complete|interactive|loaded/.test(document.readyState)?n():document.addEventListener("DOMContentLoaded",n)),i.openers.set(t,e))}},{key:"unbind",value:function(t){i.openers.delete(t),i.openers.size||i.destroy()}},{key:"destroy",value:function(){for(var t;t=i.getInstance();)t.destroy();i.openers=new Map,document.body.removeEventListener("click",i.fromEvent,!1)}},{key:"getInstance",value:function(t){return t?et[t]:Object.values(et).reverse().find((function(t){return!["closing","customClosing","destroy"].includes(t.state)&&t}))||null}},{key:"close",value:function(){for(var t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],e=null;e=i.getInstance();)if(e.close(),!t)return}}]),i}(A);nt.version="4.0.7",nt.defaults=tt,nt.openers=new Map,nt.Plugins=Q,nt.bind("[data-fancybox]");for(var ot=0,at=Object.entries(nt.Plugins||{});ot<at.length;ot++){var st=v(at[ot],2);st[0];var rt=st[1];"function"==typeof rt.create&&rt.create(nt)}t.Carousel=D,t.Fancybox=nt,t.Panzoom=z}));;!function(t){"use strict";function e(){var e=this;e.reads=[],e.writes=[],e.raf=u.bind(t)}function n(t){t.scheduled||(t.scheduled=!0,t.raf(i.bind(null,t)))}function i(t){var e,i=t.writes,o=t.reads;try{r(o),r(i)}catch(s){e=s}if(t.scheduled=!1,(o.length||i.length)&&n(t),e){if(!t["catch"])throw e;t["catch"](e)}}function r(t){for(var e;e=t.shift();)e()}function o(t,e){var n=t.indexOf(e);return!!~n&&!!t.splice(n,1)}function s(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])}var u=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)};e.prototype={constructor:e,measure:function(t,e){var i=e?t.bind(e):t;return this.reads.push(i),n(this),i},mutate:function(t,e){var i=e?t.bind(e):t;return this.writes.push(i),n(this),i},clear:function(t){return o(this.reads,t)||o(this.writes,t)},extend:function(t){if("object"!=typeof t)throw new Error("expected object");var e=Object.create(this);return s(e,t),e.fastdom=this,e.initialize&&e.initialize(),e},"catch":null};var exports=t.fastdom=t.fastdom||new e;"f"==(typeof define)[0]?define(function(){return exports}):"o"==(typeof module)[0]&&(module.exports=exports)}("undefined"!=typeof window?window:this);
;/*!
 * dist/inputmask.min
 * https://github.com/RobinHerbots/Inputmask
 * Copyright (c) 2010 - 2021 Robin Herbots
 * Licensed under the MIT license
 * Version: 5.0.7-beta.0
 */
!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var a=t();for(var i in a)("object"==typeof exports?exports:e)[i]=a[i]}}(this,(function(){return function(){"use strict";var e={4528:function(e){e.exports=JSON.parse('{"BACKSPACE":8,"BACKSPACE_SAFARI":127,"DELETE":46,"DOWN":40,"END":35,"ENTER":13,"ESCAPE":27,"HOME":36,"INSERT":45,"LEFT":37,"PAGE_DOWN":34,"PAGE_UP":33,"RIGHT":39,"SPACE":32,"TAB":9,"UP":38,"X":88,"Z":90,"CONTROL":17,"PAUSE/BREAK":19,"WINDOWS_LEFT":91,"WINDOWS_RIGHT":92,"KEY_229":229}')},8741:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=!("undefined"==typeof window||!window.document||!window.document.createElement);t.default=a},3976:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,n=(i=a(4528))&&i.__esModule?i:{default:i};var r={_maxTestPos:500,placeholder:"_",optionalmarker:["[","]"],quantifiermarker:["{","}"],groupmarker:["(",")"],alternatormarker:"|",escapeChar:"\\",mask:null,regex:null,oncomplete:function(){},onincomplete:function(){},oncleared:function(){},repeat:0,greedy:!1,autoUnmask:!1,removeMaskOnSubmit:!1,clearMaskOnLostFocus:!0,insertMode:!0,insertModeVisual:!0,clearIncomplete:!1,alias:null,onKeyDown:function(){},onBeforeMask:null,onBeforePaste:function(e,t){return"function"==typeof t.onBeforeMask?t.onBeforeMask.call(this,e,t):e},onBeforeWrite:null,onUnMask:null,showMaskOnFocus:!0,showMaskOnHover:!0,onKeyValidation:function(){},skipOptionalPartCharacter:" ",numericInput:!1,rightAlign:!1,undoOnEscape:!0,radixPoint:"",_radixDance:!1,groupSeparator:"",keepStatic:null,positionCaretOnTab:!0,tabThrough:!1,supportsInputType:["text","tel","url","password","search"],ignorables:[n.default.BACKSPACE,n.default.TAB,n.default["PAUSE/BREAK"],n.default.ESCAPE,n.default.PAGE_UP,n.default.PAGE_DOWN,n.default.END,n.default.HOME,n.default.LEFT,n.default.UP,n.default.RIGHT,n.default.DOWN,n.default.INSERT,n.default.DELETE,93,112,113,114,115,116,117,118,119,120,121,122,123,0,229],isComplete:null,preValidation:null,postValidation:null,staticDefinitionSymbol:void 0,jitMasking:!1,nullable:!0,inputEventOnly:!1,noValuePatching:!1,positionCaretOnClick:"lvp",casing:null,inputmode:"text",importDataAttributes:!0,shiftPositions:!0,usePrototypeDefinitions:!0,validationEventTimeOut:3e3};t.default=r},7392:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default={9:{validator:"[0-9\uff10-\uff19]",definitionSymbol:"*"},a:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",definitionSymbol:"*"},"*":{validator:"[0-9\uff10-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]"}}},253:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){if(void 0===a)return e.__data?e.__data[t]:null;e.__data=e.__data||{},e.__data[t]=a}},3776:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t){function a(e,a){n.addEventListener?n.addEventListener(e,t,!1):n.attachEvent&&n.attachEvent("on"+e,t),i[e]=i[e]||{},i[e][a]=i[e][a]||[],i[e][a].push(t)}if(u(this[0]))for(var i=this[0].eventRegistry,n=this[0],r=e.split(" "),o=0;o<r.length;o++){var s=r[o].split("."),l=s[0],c=s[1]||"global";a(l,c)}return this},t.off=function(e,t){var a,i;function n(e,t,n){if(e in a==!0)if(i.removeEventListener?i.removeEventListener(e,n,!1):i.detachEvent&&i.detachEvent("on"+e,n),"global"===t)for(var r in a[e])a[e][r].splice(a[e][r].indexOf(n),1);else a[e][t].splice(a[e][t].indexOf(n),1)}function r(e,i){var n,r,o=[];if(e.length>0)if(void 0===t)for(n=0,r=a[e][i].length;n<r;n++)o.push({ev:e,namespace:i&&i.length>0?i:"global",handler:a[e][i][n]});else o.push({ev:e,namespace:i&&i.length>0?i:"global",handler:t});else if(i.length>0)for(var s in a)for(var l in a[s])if(l===i)if(void 0===t)for(n=0,r=a[s][l].length;n<r;n++)o.push({ev:s,namespace:l,handler:a[s][l][n]});else o.push({ev:s,namespace:l,handler:t});return o}if(u(this[0])&&e){a=this[0].eventRegistry,i=this[0];for(var o=e.split(" "),s=0;s<o.length;s++)for(var l=o[s].split("."),c=r(l[0],l[1]),f=0,d=c.length;f<d;f++)n(c[f].ev,c[f].namespace,c[f].handler)}return this},t.trigger=function(e){if(u(this[0]))for(var t=this[0].eventRegistry,a=this[0],i="string"==typeof e?e.split(" "):[e.type],r=0;r<i.length;r++){var s=i[r].split("."),l=s[0],c=s[1]||"global";if(void 0!==document&&"global"===c){var f,d,p={bubbles:!0,cancelable:!0,detail:arguments[1]};if(document.createEvent){try{switch(l){case"input":p.inputType="insertText",f=new InputEvent(l,p);break;default:f=new CustomEvent(l,p)}}catch(e){(f=document.createEvent("CustomEvent")).initCustomEvent(l,p.bubbles,p.cancelable,p.detail)}e.type&&(0,n.default)(f,e),a.dispatchEvent(f)}else(f=document.createEventObject()).eventType=l,f.detail=arguments[1],e.type&&(0,n.default)(f,e),a.fireEvent("on"+f.eventType,f)}else if(void 0!==t[l])if(arguments[0]=arguments[0].type?arguments[0]:o.default.Event(arguments[0]),arguments[0].detail=arguments.slice(1),"global"===c)for(var h in t[l])for(d=0;d<t[l][h].length;d++)t[l][h][d].apply(a,arguments);else for(d=0;d<t[l][c].length;d++)t[l][c][d].apply(a,arguments)}return this},t.Event=void 0;var i,n=l(a(600)),r=l(a(9380)),o=l(a(4963)),s=l(a(8741));function l(e){return e&&e.__esModule?e:{default:e}}function u(e){return e instanceof Element}t.Event=i,"function"==typeof r.default.CustomEvent?t.Event=i=r.default.CustomEvent:s.default&&(t.Event=i=function(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a},i.prototype=r.default.Event.prototype)},600:function(e,t){function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(){var t,i,n,r,o,s,l=arguments[0]||{},u=1,c=arguments.length,f=!1;"boolean"==typeof l&&(f=l,l=arguments[u]||{},u++);"object"!==a(l)&&"function"!=typeof l&&(l={});for(;u<c;u++)if(null!=(t=arguments[u]))for(i in t)n=l[i],r=t[i],l!==r&&(f&&r&&("[object Object]"===Object.prototype.toString.call(r)||(o=Array.isArray(r)))?(o?(o=!1,s=n&&Array.isArray(n)?n:[]):s=n&&"[object Object]"===Object.prototype.toString.call(n)?n:{},l[i]=e(f,s,r)):void 0!==r&&(l[i]=r));return l}},4963:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=s(a(600)),n=s(a(9380)),r=s(a(253)),o=a(3776);function s(e){return e&&e.__esModule?e:{default:e}}var l=n.default.document;function u(e){return e instanceof u?e:this instanceof u?void(null!=e&&e!==n.default&&(this[0]=e.nodeName?e:void 0!==e[0]&&e[0].nodeName?e[0]:l.querySelector(e),void 0!==this[0]&&null!==this[0]&&(this[0].eventRegistry=this[0].eventRegistry||{}))):new u(e)}u.prototype={on:o.on,off:o.off,trigger:o.trigger},u.extend=i.default,u.data=r.default,u.Event=o.Event;var c=u;t.default=c},9845:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.iphone=t.iemobile=t.mobile=t.ie=t.ua=void 0;var i,n=(i=a(9380))&&i.__esModule?i:{default:i};var r=n.default.navigator&&n.default.navigator.userAgent||"",o=r.indexOf("MSIE ")>0||r.indexOf("Trident/")>0,s="ontouchstart"in n.default,l=/iemobile/i.test(r),u=/iphone/i.test(r)&&!l;t.iphone=u,t.iemobile=l,t.mobile=s,t.ie=o,t.ua=r},7184:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e.replace(a,"\\$1")};var a=new RegExp("(\\"+["/",".","*","+","?","|","(",")","[","]","{","}","\\","$","^"].join("|\\")+")","gim")},6030:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.EventHandlers=void 0;var i,n=a(8711),r=(i=a(4528))&&i.__esModule?i:{default:i},o=a(9845),s=a(7215),l=a(7760),u=a(4713);var c={keydownEvent:function(e){var t=this.inputmask,a=t.opts,i=t.dependencyLib,c=t.maskset,f=this,d=i(f),p=e.keyCode,h=n.caret.call(t,f),v=a.onKeyDown.call(this,e,n.getBuffer.call(t),h,a);if(void 0!==v)return v;if(p===r.default.BACKSPACE||p===r.default.DELETE||o.iphone&&p===r.default.BACKSPACE_SAFARI||e.ctrlKey&&p===r.default.X&&!("oncut"in f))e.preventDefault(),s.handleRemove.call(t,f,p,h),(0,l.writeBuffer)(f,n.getBuffer.call(t,!0),c.p,e,f.inputmask._valueGet()!==n.getBuffer.call(t).join(""));else if(p===r.default.END||p===r.default.PAGE_DOWN){e.preventDefault();var m=n.seekNext.call(t,n.getLastValidPosition.call(t));n.caret.call(t,f,e.shiftKey?h.begin:m,m,!0)}else p===r.default.HOME&&!e.shiftKey||p===r.default.PAGE_UP?(e.preventDefault(),n.caret.call(t,f,0,e.shiftKey?h.begin:0,!0)):a.undoOnEscape&&p===r.default.ESCAPE&&!0!==e.altKey?((0,l.checkVal)(f,!0,!1,t.undoValue.split("")),d.trigger("click")):!0===a.tabThrough&&p===r.default.TAB?!0===e.shiftKey?(h.end=n.seekPrevious.call(t,h.end,!0),!0===u.getTest.call(t,h.end-1).match.static&&h.end--,h.begin=n.seekPrevious.call(t,h.end,!0),h.begin>=0&&h.end>0&&(e.preventDefault(),n.caret.call(t,f,h.begin,h.end))):(h.begin=n.seekNext.call(t,h.begin,!0),h.end=n.seekNext.call(t,h.begin,!0),h.end<c.maskLength&&h.end--,h.begin<=c.maskLength&&(e.preventDefault(),n.caret.call(t,f,h.begin,h.end))):e.shiftKey||a.insertModeVisual&&!1===a.insertMode&&(p===r.default.RIGHT?setTimeout((function(){var e=n.caret.call(t,f);n.caret.call(t,f,e.begin)}),0):p===r.default.LEFT&&setTimeout((function(){var e=n.translatePosition.call(t,f.inputmask.caretPos.begin);n.translatePosition.call(t,f.inputmask.caretPos.end);t.isRTL?n.caret.call(t,f,e+(e===c.maskLength?0:1)):n.caret.call(t,f,e-(0===e?0:1))}),0));t.ignorable=a.ignorables.includes(p)},keypressEvent:function(e,t,a,i,o){var u=this.inputmask||this,c=u.opts,f=u.dependencyLib,d=u.maskset,p=u.el,h=f(p),v=e.which||e.charCode||e.keyCode;if(!(!0===t||e.ctrlKey&&e.altKey)&&(e.ctrlKey||e.metaKey||u.ignorable))return v===r.default.ENTER&&u.undoValue!==u._valueGet(!0)&&(u.undoValue=u._valueGet(!0),setTimeout((function(){h.trigger("change")}),0)),u.skipInputEvent=!0,!0;if(v){44!==v&&46!==v||3!==e.location||""===c.radixPoint||(v=c.radixPoint.charCodeAt(0));var m,g=t?{begin:o,end:o}:n.caret.call(u,p),k=String.fromCharCode(v);d.writeOutBuffer=!0;var y=s.isValid.call(u,g,k,i,void 0,void 0,void 0,t);if(!1!==y&&(n.resetMaskSet.call(u,!0),m=void 0!==y.caret?y.caret:n.seekNext.call(u,y.pos.begin?y.pos.begin:y.pos),d.p=m),m=c.numericInput&&void 0===y.caret?n.seekPrevious.call(u,m):m,!1!==a&&(setTimeout((function(){c.onKeyValidation.call(p,v,y)}),0),d.writeOutBuffer&&!1!==y)){var b=n.getBuffer.call(u);(0,l.writeBuffer)(p,b,m,e,!0!==t)}if(e.preventDefault(),t)return!1!==y&&(y.forwardPosition=m),y}},keyupEvent:function(e){var t=this.inputmask;!t.isComposing||e.keyCode!==r.default.KEY_229&&e.keyCode!==r.default.ENTER||t.$el.trigger("input")},pasteEvent:function(e){var t,a=this.inputmask,i=a.opts,r=a._valueGet(!0),o=n.caret.call(a,this);a.isRTL&&(t=o.end,o.end=o.begin,o.begin=t);var s=r.substr(0,o.begin),u=r.substr(o.end,r.length);if(s==(a.isRTL?n.getBufferTemplate.call(a).slice().reverse():n.getBufferTemplate.call(a)).slice(0,o.begin).join("")&&(s=""),u==(a.isRTL?n.getBufferTemplate.call(a).slice().reverse():n.getBufferTemplate.call(a)).slice(o.end).join("")&&(u=""),window.clipboardData&&window.clipboardData.getData)r=s+window.clipboardData.getData("Text")+u;else{if(!e.clipboardData||!e.clipboardData.getData)return!0;r=s+e.clipboardData.getData("text/plain")+u}var c=r;if("function"==typeof i.onBeforePaste){if(!1===(c=i.onBeforePaste.call(a,r,i)))return e.preventDefault();c||(c=r)}return(0,l.checkVal)(this,!0,!1,c.toString().split(""),e),e.preventDefault()},inputFallBackEvent:function(e){var t=this.inputmask,a=t.opts,i=t.dependencyLib;var s=this,f=s.inputmask._valueGet(!0),d=(t.isRTL?n.getBuffer.call(t).slice().reverse():n.getBuffer.call(t)).join(""),p=n.caret.call(t,s,void 0,void 0,!0);if(d!==f){var h=function(e,i,r){for(var o,s,l,c=e.substr(0,r.begin).split(""),f=e.substr(r.begin).split(""),d=i.substr(0,r.begin).split(""),p=i.substr(r.begin).split(""),h=c.length>=d.length?c.length:d.length,v=f.length>=p.length?f.length:p.length,m="",g=[],k="~";c.length<h;)c.push(k);for(;d.length<h;)d.push(k);for(;f.length<v;)f.unshift(k);for(;p.length<v;)p.unshift(k);var y=c.concat(f),b=d.concat(p);for(s=0,o=y.length;s<o;s++)switch(l=u.getPlaceholder.call(t,n.translatePosition.call(t,s)),m){case"insertText":b[s-1]===y[s]&&r.begin==y.length-1&&g.push(y[s]),s=o;break;case"insertReplacementText":case"deleteContentBackward":y[s]===k?r.end++:s=o;break;default:y[s]!==b[s]&&(y[s+1]!==k&&y[s+1]!==l&&void 0!==y[s+1]||(b[s]!==l||b[s+1]!==k)&&b[s]!==k?b[s+1]===k&&b[s]===y[s+1]?(m="insertText",g.push(y[s]),r.begin--,r.end--):y[s]!==l&&y[s]!==k&&(y[s+1]===k||b[s]!==y[s]&&b[s+1]===y[s+1])?(m="insertReplacementText",g.push(y[s]),r.begin--):y[s]===k?(m="deleteContentBackward",(n.isMask.call(t,n.translatePosition.call(t,s),!0)||b[s]===a.radixPoint)&&r.end++):s=o:(m="insertText",g.push(y[s]),r.begin--,r.end--))}return{action:m,data:g,caret:r}}(f=function(e,a,i){if(o.iemobile){var r=a.replace(n.getBuffer.call(t).join(""),"");if(1===r.length){var s=a.split("");s.splice(i.begin,0,r),a=s.join("")}}return a}(0,f,p),d,p);switch((s.inputmask.shadowRoot||s.ownerDocument).activeElement!==s&&s.focus(),(0,l.writeBuffer)(s,n.getBuffer.call(t)),n.caret.call(t,s,p.begin,p.end,!0),h.action){case"insertText":case"insertReplacementText":h.data.forEach((function(e,a){var n=new i.Event("keypress");n.which=e.charCodeAt(0),t.ignorable=!1,c.keypressEvent.call(s,n)})),setTimeout((function(){t.$el.trigger("keyup")}),0);break;case"deleteContentBackward":var v=new i.Event("keydown");v.keyCode=r.default.BACKSPACE,c.keydownEvent.call(s,v);break;default:(0,l.applyInputValue)(s,f)}e.preventDefault()}},compositionendEvent:function(e){var t=this.inputmask;t.isComposing=!1,t.$el.trigger("input")},setValueEvent:function(e){var t=this.inputmask,a=this,i=e&&e.detail?e.detail[0]:arguments[1];void 0===i&&(i=a.inputmask._valueGet(!0)),(0,l.applyInputValue)(a,i),(e.detail&&void 0!==e.detail[1]||void 0!==arguments[2])&&n.caret.call(t,a,e.detail?e.detail[1]:arguments[2])},focusEvent:function(e){var t=this.inputmask,a=t.opts,i=this,r=i.inputmask._valueGet();a.showMaskOnFocus&&r!==n.getBuffer.call(t).join("")&&(0,l.writeBuffer)(i,n.getBuffer.call(t),n.seekNext.call(t,n.getLastValidPosition.call(t))),!0!==a.positionCaretOnTab||!1!==t.mouseEnter||s.isComplete.call(t,n.getBuffer.call(t))&&-1!==n.getLastValidPosition.call(t)||c.clickEvent.apply(i,[e,!0]),t.undoValue=t._valueGet(!0)},invalidEvent:function(e){this.inputmask.validationEvent=!0},mouseleaveEvent:function(){var e=this.inputmask,t=e.opts,a=this;e.mouseEnter=!1,t.clearMaskOnLostFocus&&(a.inputmask.shadowRoot||a.ownerDocument).activeElement!==a&&(0,l.HandleNativePlaceholder)(a,e.originalPlaceholder)},clickEvent:function(e,t){var a=this.inputmask,i=this;if((i.inputmask.shadowRoot||i.ownerDocument).activeElement===i){var r=n.determineNewCaretPosition.call(a,n.caret.call(a,i),t);void 0!==r&&n.caret.call(a,i,r)}},cutEvent:function(e){var t=this.inputmask,a=t.maskset,i=this,o=n.caret.call(t,i),u=window.clipboardData||e.clipboardData,c=t.isRTL?n.getBuffer.call(t).slice(o.end,o.begin):n.getBuffer.call(t).slice(o.begin,o.end);u.setData("text",t.isRTL?c.reverse().join(""):c.join("")),document.execCommand&&document.execCommand("copy"),s.handleRemove.call(t,i,r.default.DELETE,o),(0,l.writeBuffer)(i,n.getBuffer.call(t),a.p,e,t.undoValue!==t._valueGet(!0))},blurEvent:function(e){var t=this.inputmask,a=t.opts,i=(0,t.dependencyLib)(this),r=this;if(r.inputmask){(0,l.HandleNativePlaceholder)(r,t.originalPlaceholder);var o=r.inputmask._valueGet(),u=n.getBuffer.call(t).slice();""!==o&&(a.clearMaskOnLostFocus&&(-1===n.getLastValidPosition.call(t)&&o===n.getBufferTemplate.call(t).join("")?u=[]:l.clearOptionalTail.call(t,u)),!1===s.isComplete.call(t,u)&&(setTimeout((function(){i.trigger("incomplete")}),0),a.clearIncomplete&&(n.resetMaskSet.call(t),u=a.clearMaskOnLostFocus?[]:n.getBufferTemplate.call(t).slice())),(0,l.writeBuffer)(r,u,void 0,e)),t.undoValue!==t._valueGet(!0)&&(t.undoValue=t._valueGet(!0),i.trigger("change"))}},mouseenterEvent:function(){var e=this.inputmask,t=e.opts,a=this;if(e.mouseEnter=!0,(a.inputmask.shadowRoot||a.ownerDocument).activeElement!==a){var i=(e.isRTL?n.getBufferTemplate.call(e).slice().reverse():n.getBufferTemplate.call(e)).join("");e.placeholder!==i&&a.placeholder!==e.originalPlaceholder&&(e.originalPlaceholder=a.placeholder),t.showMaskOnHover&&(0,l.HandleNativePlaceholder)(a,i)}},submitEvent:function(){var e=this.inputmask,t=e.opts;e.undoValue!==e._valueGet(!0)&&e.$el.trigger("change"),t.clearMaskOnLostFocus&&-1===n.getLastValidPosition.call(e)&&e._valueGet&&e._valueGet()===n.getBufferTemplate.call(e).join("")&&e._valueSet(""),t.clearIncomplete&&!1===s.isComplete.call(e,n.getBuffer.call(e))&&e._valueSet(""),t.removeMaskOnSubmit&&(e._valueSet(e.unmaskedvalue(),!0),setTimeout((function(){(0,l.writeBuffer)(e.el,n.getBuffer.call(e))}),0))},resetEvent:function(){var e=this.inputmask;e.refreshValue=!0,setTimeout((function(){(0,l.applyInputValue)(e.el,e._valueGet(!0))}),0)}};t.EventHandlers=c},9716:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.EventRuler=void 0;var i=s(a(2394)),n=s(a(4528)),r=a(8711),o=a(7760);function s(e){return e&&e.__esModule?e:{default:e}}var l={on:function(e,t,a){var s=e.inputmask.dependencyLib,l=function(t){t.originalEvent&&(t=t.originalEvent||t,arguments[0]=t);var l,u=this,c=u.inputmask,f=c?c.opts:void 0;if(void 0===c&&"FORM"!==this.nodeName){var d=s.data(u,"_inputmask_opts");s(u).off(),d&&new i.default(d).mask(u)}else{if(["submit","reset","setvalue"].includes(t.type)||"FORM"===this.nodeName||!(u.disabled||u.readOnly&&!("keydown"===t.type&&t.ctrlKey&&67===t.keyCode||!1===f.tabThrough&&t.keyCode===n.default.TAB))){switch(t.type){case"input":if(!0===c.skipInputEvent||t.inputType&&"insertCompositionText"===t.inputType)return c.skipInputEvent=!1,t.preventDefault();break;case"keydown":c.skipKeyPressEvent=!1,c.skipInputEvent=c.isComposing=t.keyCode===n.default.KEY_229;break;case"keyup":case"compositionend":c.isComposing&&(c.skipInputEvent=!1);break;case"keypress":if(!0===c.skipKeyPressEvent)return t.preventDefault();c.skipKeyPressEvent=!0;break;case"click":case"focus":return c.validationEvent?(c.validationEvent=!1,e.blur(),(0,o.HandleNativePlaceholder)(e,(c.isRTL?r.getBufferTemplate.call(c).slice().reverse():r.getBufferTemplate.call(c)).join("")),setTimeout((function(){e.focus()}),f.validationEventTimeOut),!1):(l=arguments,setTimeout((function(){e.inputmask&&a.apply(u,l)}),0),!1)}var p=a.apply(u,arguments);return!1===p&&(t.preventDefault(),t.stopPropagation()),p}t.preventDefault()}};["submit","reset"].includes(t)?(l=l.bind(e),null!==e.form&&s(e.form).on(t,l)):s(e).on(t,l),e.inputmask.events[t]=e.inputmask.events[t]||[],e.inputmask.events[t].push(l)},off:function(e,t){if(e.inputmask&&e.inputmask.events){var a=e.inputmask.dependencyLib,i=e.inputmask.events;for(var n in t&&((i=[])[t]=e.inputmask.events[t]),i){for(var r=i[n];r.length>0;){var o=r.pop();["submit","reset"].includes(n)?null!==e.form&&a(e.form).off(n,o):a(e).off(n,o)}delete e.inputmask.events[n]}}}};t.EventRuler=l},219:function(e,t,a){var i=l(a(2394)),n=l(a(4528)),r=l(a(7184)),o=a(8711);function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){return e&&e.__esModule?e:{default:e}}var u=i.default.dependencyLib,c=(new Date).getFullYear(),f={d:["[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",Date.prototype.getDate],dd:["0[1-9]|[12][0-9]|3[01]",Date.prototype.setDate,"day",function(){return y(Date.prototype.getDate.call(this),2)}],ddd:[""],dddd:[""],m:["[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return Date.prototype.getMonth.call(this)+1}],mm:["0[1-9]|1[012]",Date.prototype.setMonth,"month",function(){return y(Date.prototype.getMonth.call(this)+1,2)}],mmm:[""],mmmm:[""],yy:["[0-9]{2}",Date.prototype.setFullYear,"year",function(){return y(Date.prototype.getFullYear.call(this),2)}],yyyy:["[0-9]{4}",Date.prototype.setFullYear,"year",function(){return y(Date.prototype.getFullYear.call(this),4)}],h:["[1-9]|1[0-2]",Date.prototype.setHours,"hours",Date.prototype.getHours],hh:["0[1-9]|1[0-2]",Date.prototype.setHours,"hours",function(){return y(Date.prototype.getHours.call(this),2)}],hx:[function(e){return"[0-9]{".concat(e,"}")},Date.prototype.setHours,"hours",function(e){return Date.prototype.getHours}],H:["1?[0-9]|2[0-3]",Date.prototype.setHours,"hours",Date.prototype.getHours],HH:["0[0-9]|1[0-9]|2[0-3]",Date.prototype.setHours,"hours",function(){return y(Date.prototype.getHours.call(this),2)}],Hx:[function(e){return"[0-9]{".concat(e,"}")},Date.prototype.setHours,"hours",function(e){return function(){return y(Date.prototype.getHours.call(this),e)}}],M:["[1-5]?[0-9]",Date.prototype.setMinutes,"minutes",Date.prototype.getMinutes],MM:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setMinutes,"minutes",function(){return y(Date.prototype.getMinutes.call(this),2)}],s:["[1-5]?[0-9]",Date.prototype.setSeconds,"seconds",Date.prototype.getSeconds],ss:["0[0-9]|1[0-9]|2[0-9]|3[0-9]|4[0-9]|5[0-9]",Date.prototype.setSeconds,"seconds",function(){return y(Date.prototype.getSeconds.call(this),2)}],l:["[0-9]{3}",Date.prototype.setMilliseconds,"milliseconds",function(){return y(Date.prototype.getMilliseconds.call(this),3)}],L:["[0-9]{2}",Date.prototype.setMilliseconds,"milliseconds",function(){return y(Date.prototype.getMilliseconds.call(this),2)}],t:["[ap]",p,"ampm",h,1],tt:["[ap]m",p,"ampm",h,2],T:["[AP]",p,"ampm",h,1],TT:["[AP]M",p,"ampm",h,2],Z:[""],o:[""],S:[""]},d={isoDate:"yyyy-mm-dd",isoTime:"HH:MM:ss",isoDateTime:"yyyy-mm-dd'T'HH:MM:ss",isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"};function p(e){e.toLowerCase().includes("p")&&this.setHours(this.getHours()+12)}function h(){}function v(e){var t=new RegExp("\\d+$").exec(e[0]);if(t&&void 0!==t[0]){var a=f[e[0][0]+"x"].slice("");return a[0]=a[0](t[0]),a[3]=a[3](t[0]),a}if(f[e[0]])return f[e[0]]}function m(e){if(!e.tokenizer){var t=[],a=[];for(var i in f)if(/\.*x$/.test(i)){var n=i[0]+"\\d+";-1===a.indexOf(n)&&a.push(n)}else-1===t.indexOf(i[0])&&t.push(i[0]);e.tokenizer="("+(a.length>0?a.join("|")+"|":"")+t.join("+|")+")+?|.",e.tokenizer=new RegExp(e.tokenizer,"g")}return e.tokenizer}function g(e,t,a){if(void 0===e.rawday||!isFinite(e.rawday)&&new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day||"29"==e.day&&!Number.isFinite(e.rawyear)||new Date(e.date.getFullYear(),isFinite(e.rawmonth)?e.month:e.date.getMonth()+1,0).getDate()>=e.day)return t;if("29"==e.day){var i=P(t.pos,a);if("yyyy"===i.targetMatch[0]&&t.pos-i.targetMatchIndex==2)return t.remove=t.pos+1,t}else if("02"==e.month&&"30"==e.day&&void 0!==t.c)return e.day="03",e.date.setDate(3),e.date.setMonth(1),t.insert=[{pos:t.pos,c:"0"},{pos:t.pos+1,c:t.c}],t.caret=o.seekNext.call(this,t.pos+1),t;return!1}function k(e,t,a,i){var n,o,s="";for(m(a).lastIndex=0;n=m(a).exec(e);){if(void 0===t)if(o=v(n))s+="("+o[0]+")";else switch(n[0]){case"[":s+="(";break;case"]":s+=")?";break;default:s+=(0,r.default)(n[0])}else if(o=v(n))if(!0!==i&&o[3])s+=o[3].call(t.date);else o[2]?s+=t["raw"+o[2]]:s+=n[0];else s+=n[0]}return s}function y(e,t,a){for(e=String(e),t=t||2;e.length<t;)e=a?e+"0":"0"+e;return e}function b(e,t,a){var i,n,r,o={date:new Date(1,0,1)},l=e;function u(e,t,a){if(e[i]="ampm"===i?t:t.replace(/[^0-9]/g,"0"),e["raw"+i]=t,void 0!==r){var n=e[i];("day"===i&&29===parseInt(n)||"month"===i&&2===parseInt(n))&&(29!==parseInt(e.day)||2!==parseInt(e.month)||""!==e.year&&void 0!==e.year||e.date.setFullYear(2012,1,29)),"day"===i&&0===parseInt(n)&&(n=1),"month"===i&&(n=parseInt(n))>0&&(n-=1),"year"===i&&n.length<4&&(n=y(n,4,!0)),""===n||isNaN(n)||r.call(e.date,n),"ampm"===i&&r.call(e.date,n)}}if("string"==typeof l){for(m(a).lastIndex=0;n=m(a).exec(t);){var c=new RegExp("\\d+$").exec(n[0]),d=c?n[0][0]+"x":n[0],p=void 0;if(c){var h=m(a).lastIndex,v=P(n.index,a);m(a).lastIndex=h,p=l.slice(0,l.indexOf(v.nextMatch[0]))}else p=l.slice(0,d.length);Object.prototype.hasOwnProperty.call(f,d)&&(i=f[d][2],r=f[d][1],u(o,p)),l=l.slice(p.length)}return o}if(l&&"object"===s(l)&&Object.prototype.hasOwnProperty.call(l,"date"))return l}function x(e,t){return k(t.inputFormat,{date:e},t)}function P(e,t){var a,i,n=0,r=0;for(m(t).lastIndex=0;i=m(t).exec(t.inputFormat);){var o=new RegExp("\\d+$").exec(i[0]);if((n+=r=o?parseInt(o[0]):i[0].length)>=e){a=i,i=m(t).exec(t.inputFormat);break}}return{targetMatchIndex:n-r,nextMatch:i,targetMatch:a}}i.default.extendAliases({datetime:{mask:function(e){return e.numericInput=!1,f.S=e.i18n.ordinalSuffix.join("|"),e.inputFormat=d[e.inputFormat]||e.inputFormat,e.displayFormat=d[e.displayFormat]||e.displayFormat||e.inputFormat,e.outputFormat=d[e.outputFormat]||e.outputFormat||e.inputFormat,e.placeholder=""!==e.placeholder?e.placeholder:e.inputFormat.replace(/[[\]]/,""),e.regex=k(e.inputFormat,void 0,e),e.min=b(e.min,e.inputFormat,e),e.max=b(e.max,e.inputFormat,e),null},placeholder:"",inputFormat:"isoDateTime",displayFormat:void 0,outputFormat:void 0,min:null,max:null,skipOptionalPartCharacter:"",i18n:{dayNames:["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],monthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec","January","February","March","April","May","June","July","August","September","October","November","December"],ordinalSuffix:["st","nd","rd","th"]},preValidation:function(e,t,a,i,n,r,o,s){if(s)return!0;if(isNaN(a)&&e[t]!==a){var l=P(t,n);if(l.nextMatch&&l.nextMatch[0]===a&&l.targetMatch[0].length>1){var u=f[l.targetMatch[0]][0];if(new RegExp(u).test("0"+e[t-1]))return e[t]=e[t-1],e[t-1]="0",{fuzzy:!0,buffer:e,refreshFromBuffer:{start:t-1,end:t+1},pos:t+1}}}return!0},postValidation:function(e,t,a,i,n,r,o,s){var l,u;if(o)return!0;if(!1===i&&(((l=P(t+1,n)).targetMatch&&l.targetMatchIndex===t&&l.targetMatch[0].length>1&&void 0!==f[l.targetMatch[0]]||(l=P(t+2,n)).targetMatch&&l.targetMatchIndex===t+1&&l.targetMatch[0].length>1&&void 0!==f[l.targetMatch[0]])&&(u=f[l.targetMatch[0]][0]),void 0!==u&&(void 0!==r.validPositions[t+1]&&new RegExp(u).test(a+"0")?(e[t]=a,e[t+1]="0",i={pos:t+2,caret:t}):new RegExp(u).test("0"+a)&&(e[t]="0",e[t+1]=a,i={pos:t+2})),!1===i))return i;if(i.fuzzy&&(e=i.buffer,t=i.pos),(l=P(t,n)).targetMatch&&l.targetMatch[0]&&void 0!==f[l.targetMatch[0]]){u=f[l.targetMatch[0]][0];var d=e.slice(l.targetMatchIndex,l.targetMatchIndex+l.targetMatch[0].length);!1===new RegExp(u).test(d.join(""))&&2===l.targetMatch[0].length&&r.validPositions[l.targetMatchIndex]&&r.validPositions[l.targetMatchIndex+1]&&(r.validPositions[l.targetMatchIndex+1].input="0")}var p=i,h=b(e.join(""),n.inputFormat,n);return p&&h.date.getTime()==h.date.getTime()&&(n.prefillYear&&(p=function(e,t,a){if(e.year!==e.rawyear){var i=c.toString(),n=e.rawyear.replace(/[^0-9]/g,""),r=i.slice(0,n.length),o=i.slice(n.length);if(2===n.length&&n===r){var s=new Date(c,e.month-1,e.day);e.day==s.getDate()&&(!a.max||a.max.date.getTime()>=s.getTime())&&(e.date.setFullYear(c),e.year=i,t.insert=[{pos:t.pos+1,c:o[0]},{pos:t.pos+2,c:o[1]}])}}return t}(h,p,n)),p=function(e,t,a,i,n){if(!t)return t;if(a.min){if(e.rawyear){var r,o=e.rawyear.replace(/[^0-9]/g,""),s=a.min.year.substr(0,o.length);if(o<s){var l=P(t.pos,a);if(o=e.rawyear.substr(0,t.pos-l.targetMatchIndex+1).replace(/[^0-9]/g,"0"),(s=a.min.year.substr(0,o.length))<=o)return t.remove=l.targetMatchIndex+o.length,t;if(o="yyyy"===l.targetMatch[0]?e.rawyear.substr(1,1):e.rawyear.substr(0,1),s=a.min.year.substr(2,1),r=a.max?a.max.year.substr(2,1):o,1===o.length&&s<=o&&o<=r&&!0!==n)return"yyyy"===l.targetMatch[0]?(t.insert=[{pos:t.pos+1,c:o,strict:!0}],t.caret=t.pos+2,i.validPositions[t.pos].input=a.min.year[1]):(t.insert=[{pos:t.pos+1,c:a.min.year[1],strict:!0},{pos:t.pos+2,c:o,strict:!0}],t.caret=t.pos+3,i.validPositions[t.pos].input=a.min.year[0]),t;t=!1}}for(var u in e)-1===u.indexOf("raw")&&e["raw".concat(u)]&&(e[u],e["raw".concat(u)]);t&&e.year&&e.year===e.rawyear&&a.min.date.getTime()==a.min.date.getTime()&&(t=a.min.date.getTime()<=e.date.getTime())}return t&&a.max&&a.max.date.getTime()==a.max.date.getTime()&&(t=a.max.date.getTime()>=e.date.getTime()),t}(h,p=g.call(this,h,p,n),n,r,s)),void 0!==t&&p&&i.pos!==t?{buffer:k(n.inputFormat,h,n).split(""),refreshFromBuffer:{start:t,end:i.pos},pos:i.caret||i.pos}:p},onKeyDown:function(e,t,a,i){e.ctrlKey&&e.keyCode===n.default.RIGHT&&(this.inputmask._valueSet(x(new Date,i)),u(this).trigger("setvalue"))},onUnMask:function(e,t,a){return t?k(a.outputFormat,b(e,a.inputFormat,a),a,!0):t},casing:function(e,t,a,i){return 0==t.nativeDef.indexOf("[ap]")?e.toLowerCase():0==t.nativeDef.indexOf("[AP]")?e.toUpperCase():e},onBeforeMask:function(e,t){return"[object Date]"===Object.prototype.toString.call(e)&&(e=x(e,t)),e},insertMode:!1,shiftPositions:!1,keepStatic:!1,inputmode:"numeric",prefillYear:!0}})},3851:function(e,t,a){var i,n=(i=a(2394))&&i.__esModule?i:{default:i},r=a(8711),o=a(4713);n.default.extendDefinitions({A:{validator:"[A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"&":{validator:"[0-9A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5]",casing:"upper"},"#":{validator:"[0-9A-Fa-f]",casing:"upper"}});var s=new RegExp("25[0-5]|2[0-4][0-9]|[01][0-9][0-9]");function l(e,t,a,i,n){return a-1>-1&&"."!==t.buffer[a-1]?(e=t.buffer[a-1]+e,e=a-2>-1&&"."!==t.buffer[a-2]?t.buffer[a-2]+e:"0"+e):e="00"+e,s.test(e)}n.default.extendAliases({cssunit:{regex:"[+-]?[0-9]+\\.?([0-9]+)?(px|em|rem|ex|%|in|cm|mm|pt|pc)"},url:{regex:"(https?|ftp)://.*",autoUnmask:!1,keepStatic:!1,tabThrough:!0},ip:{mask:"i[i[i]].j[j[j]].k[k[k]].l[l[l]]",definitions:{i:{validator:l},j:{validator:l},k:{validator:l},l:{validator:l}},onUnMask:function(e,t,a){return e},inputmode:"numeric"},email:{mask:"*{1,64}[.*{1,64}][.*{1,64}][.*{1,63}]@-{1,63}.-{1,63}[.-{1,63}][.-{1,63}]",greedy:!1,casing:"lower",onBeforePaste:function(e,t){return(e=e.toLowerCase()).replace("mailto:","")},definitions:{"*":{validator:"[0-9\uff11-\uff19A-Za-z\u0410-\u044f\u0401\u0451\xc0-\xff\xb5!#$%&'*+/=?^_`{|}~-]"},"-":{validator:"[0-9A-Za-z-]"}},onUnMask:function(e,t,a){return e},inputmode:"email"},mac:{mask:"##:##:##:##:##:##"},vin:{mask:"V{13}9{4}",definitions:{V:{validator:"[A-HJ-NPR-Za-hj-npr-z\\d]",casing:"upper"}},clearIncomplete:!0,autoUnmask:!0},ssn:{mask:"999-99-9999",postValidation:function(e,t,a,i,n,s,l){var u=o.getMaskTemplate.call(this,!0,r.getLastValidPosition.call(this),!0,!0);return/^(?!219-09-9999|078-05-1120)(?!666|000|9.{2}).{3}-(?!00).{2}-(?!0{4}).{4}$/.test(u.join(""))}}})},207:function(e,t,a){var i=s(a(2394)),n=s(a(4528)),r=s(a(7184)),o=a(8711);function s(e){return e&&e.__esModule?e:{default:e}}var l=i.default.dependencyLib;function u(e,t){for(var a="",n=0;n<e.length;n++)i.default.prototype.definitions[e.charAt(n)]||t.definitions[e.charAt(n)]||t.optionalmarker[0]===e.charAt(n)||t.optionalmarker[1]===e.charAt(n)||t.quantifiermarker[0]===e.charAt(n)||t.quantifiermarker[1]===e.charAt(n)||t.groupmarker[0]===e.charAt(n)||t.groupmarker[1]===e.charAt(n)||t.alternatormarker===e.charAt(n)?a+="\\"+e.charAt(n):a+=e.charAt(n);return a}function c(e,t,a,i){if(e.length>0&&t>0&&(!a.digitsOptional||i)){var n=e.indexOf(a.radixPoint),r=!1;a.negationSymbol.back===e[e.length-1]&&(r=!0,e.length--),-1===n&&(e.push(a.radixPoint),n=e.length-1);for(var o=1;o<=t;o++)isFinite(e[n+o])||(e[n+o]="0")}return r&&e.push(a.negationSymbol.back),e}function f(e,t){var a=0;if("+"===e){for(a in t.validPositions);a=o.seekNext.call(this,parseInt(a))}for(var i in t.tests)if((i=parseInt(i))>=a)for(var n=0,r=t.tests[i].length;n<r;n++)if((void 0===t.validPositions[i]||"-"===e)&&t.tests[i][n].match.def===e)return i+(void 0!==t.validPositions[i]&&"-"!==e?1:0);return a}function d(e,t){var a=-1;for(var i in t.validPositions){var n=t.validPositions[i];if(n&&n.match.def===e){a=parseInt(i);break}}return a}function p(e,t,a,i,n){var r=t.buffer?t.buffer.indexOf(n.radixPoint):-1,o=(-1!==r||i&&n.jitMasking)&&new RegExp(n.definitions[9].validator).test(e);return n._radixDance&&-1!==r&&o&&null==t.validPositions[r]?{insert:{pos:r===a?r+1:r,c:n.radixPoint},pos:a}:o}i.default.extendAliases({numeric:{mask:function(e){e.repeat=0,e.groupSeparator===e.radixPoint&&e.digits&&"0"!==e.digits&&("."===e.radixPoint?e.groupSeparator=",":","===e.radixPoint?e.groupSeparator=".":e.groupSeparator="")," "===e.groupSeparator&&(e.skipOptionalPartCharacter=void 0),e.placeholder.length>1&&(e.placeholder=e.placeholder.charAt(0)),"radixFocus"===e.positionCaretOnClick&&""===e.placeholder&&(e.positionCaretOnClick="lvp");var t="0",a=e.radixPoint;!0===e.numericInput&&void 0===e.__financeInput?(t="1",e.positionCaretOnClick="radixFocus"===e.positionCaretOnClick?"lvp":e.positionCaretOnClick,e.digitsOptional=!1,isNaN(e.digits)&&(e.digits=2),e._radixDance=!1,a=","===e.radixPoint?"?":"!",""!==e.radixPoint&&void 0===e.definitions[a]&&(e.definitions[a]={},e.definitions[a].validator="["+e.radixPoint+"]",e.definitions[a].placeholder=e.radixPoint,e.definitions[a].static=!0,e.definitions[a].generated=!0)):(e.__financeInput=!1,e.numericInput=!0);var i,n="[+]";if(n+=u(e.prefix,e),""!==e.groupSeparator?(void 0===e.definitions[e.groupSeparator]&&(e.definitions[e.groupSeparator]={},e.definitions[e.groupSeparator].validator="["+e.groupSeparator+"]",e.definitions[e.groupSeparator].placeholder=e.groupSeparator,e.definitions[e.groupSeparator].static=!0,e.definitions[e.groupSeparator].generated=!0),n+=e._mask(e)):n+="9{+}",void 0!==e.digits&&0!==e.digits){var o=e.digits.toString().split(",");isFinite(o[0])&&o[1]&&isFinite(o[1])?n+=a+t+"{"+e.digits+"}":(isNaN(e.digits)||parseInt(e.digits)>0)&&(e.digitsOptional||e.jitMasking?(i=n+a+t+"{0,"+e.digits+"}",e.keepStatic=!0):n+=a+t+"{"+e.digits+"}")}else e.inputmode="numeric";return n+=u(e.suffix,e),n+="[-]",i&&(n=[i+u(e.suffix,e)+"[-]",n]),e.greedy=!1,function(e){void 0===e.parseMinMaxOptions&&(null!==e.min&&(e.min=e.min.toString().replace(new RegExp((0,r.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.min=e.min.replace(e.radixPoint,".")),e.min=isFinite(e.min)?parseFloat(e.min):NaN,isNaN(e.min)&&(e.min=Number.MIN_VALUE)),null!==e.max&&(e.max=e.max.toString().replace(new RegExp((0,r.default)(e.groupSeparator),"g"),""),","===e.radixPoint&&(e.max=e.max.replace(e.radixPoint,".")),e.max=isFinite(e.max)?parseFloat(e.max):NaN,isNaN(e.max)&&(e.max=Number.MAX_VALUE)),e.parseMinMaxOptions="done")}(e),n},_mask:function(e){return"("+e.groupSeparator+"999){+|1}"},digits:"*",digitsOptional:!0,enforceDigitsOnBlur:!1,radixPoint:".",positionCaretOnClick:"radixFocus",_radixDance:!0,groupSeparator:"",allowMinus:!0,negationSymbol:{front:"-",back:""},prefix:"",suffix:"",min:null,max:null,SetMaxOnOverflow:!1,step:1,inputType:"text",unmaskAsNumber:!1,roundingFN:Math.round,inputmode:"decimal",shortcuts:{k:"000",m:"000000"},placeholder:"0",greedy:!1,rightAlign:!0,insertMode:!0,autoUnmask:!1,skipOptionalPartCharacter:"",usePrototypeDefinitions:!1,definitions:{0:{validator:p},1:{validator:p,definitionSymbol:"9"},9:{validator:"[0-9\uff10-\uff19\u0660-\u0669\u06f0-\u06f9]",definitionSymbol:"*"},"+":{validator:function(e,t,a,i,n){return n.allowMinus&&("-"===e||e===n.negationSymbol.front)}},"-":{validator:function(e,t,a,i,n){return n.allowMinus&&e===n.negationSymbol.back}}},preValidation:function(e,t,a,i,n,r,o,s){var l;if(!1!==n.__financeInput&&a===n.radixPoint)return!1;if(l=n.shortcuts&&n.shortcuts[a]){if(l.length>1)for(var u=[],c=0;c<l.length;c++)u.push({pos:t+c,c:l[c],strict:!1});return{insert:u}}var p=e.indexOf(n.radixPoint),h=t;if(t=function(e,t,a,i,n){return n._radixDance&&n.numericInput&&t!==n.negationSymbol.back&&e<=a&&(a>0||t==n.radixPoint)&&(void 0===i.validPositions[e-1]||i.validPositions[e-1].input!==n.negationSymbol.back)&&(e-=1),e}(t,a,p,r,n),"-"===a||a===n.negationSymbol.front){if(!0!==n.allowMinus)return!1;var v=!1,m=d("+",r),g=d("-",r);return-1!==m&&(v=[m,g]),!1!==v?{remove:v,caret:h-n.negationSymbol.back.length}:{insert:[{pos:f.call(this,"+",r),c:n.negationSymbol.front,fromIsValid:!0},{pos:f.call(this,"-",r),c:n.negationSymbol.back,fromIsValid:void 0}],caret:h+n.negationSymbol.back.length}}if(a===n.groupSeparator)return{caret:h};if(s)return!0;if(-1!==p&&!0===n._radixDance&&!1===i&&a===n.radixPoint&&void 0!==n.digits&&(isNaN(n.digits)||parseInt(n.digits)>0)&&p!==t)return{caret:n._radixDance&&t===p-1?p+1:p};if(!1===n.__financeInput)if(i){if(n.digitsOptional)return{rewritePosition:o.end};if(!n.digitsOptional){if(o.begin>p&&o.end<=p)return a===n.radixPoint?{insert:{pos:p+1,c:"0",fromIsValid:!0},rewritePosition:p}:{rewritePosition:p+1};if(o.begin<p)return{rewritePosition:o.begin-1}}}else if(!n.showMaskOnHover&&!n.showMaskOnFocus&&!n.digitsOptional&&n.digits>0&&""===this.__valueGet.call(this.el))return{rewritePosition:p};return{rewritePosition:t}},postValidation:function(e,t,a,i,n,r,o){if(!1===i)return i;if(o)return!0;if(null!==n.min||null!==n.max){var s=n.onUnMask(e.slice().reverse().join(""),void 0,l.extend({},n,{unmaskAsNumber:!0}));if(null!==n.min&&s<n.min&&(s.toString().length>n.min.toString().length||s<0))return!1;if(null!==n.max&&s>n.max)return!!n.SetMaxOnOverflow&&{refreshFromBuffer:!0,buffer:c(n.max.toString().replace(".",n.radixPoint).split(""),n.digits,n).reverse()}}return i},onUnMask:function(e,t,a){if(""===t&&!0===a.nullable)return t;var i=e.replace(a.prefix,"");return i=(i=i.replace(a.suffix,"")).replace(new RegExp((0,r.default)(a.groupSeparator),"g"),""),""!==a.placeholder.charAt(0)&&(i=i.replace(new RegExp(a.placeholder.charAt(0),"g"),"0")),a.unmaskAsNumber?(""!==a.radixPoint&&-1!==i.indexOf(a.radixPoint)&&(i=i.replace(r.default.call(this,a.radixPoint),".")),i=(i=i.replace(new RegExp("^"+(0,r.default)(a.negationSymbol.front)),"-")).replace(new RegExp((0,r.default)(a.negationSymbol.back)+"$"),""),Number(i)):i},isComplete:function(e,t){var a=(t.numericInput?e.slice().reverse():e).join("");return a=(a=(a=(a=(a=a.replace(new RegExp("^"+(0,r.default)(t.negationSymbol.front)),"-")).replace(new RegExp((0,r.default)(t.negationSymbol.back)+"$"),"")).replace(t.prefix,"")).replace(t.suffix,"")).replace(new RegExp((0,r.default)(t.groupSeparator)+"([0-9]{3})","g"),"$1"),","===t.radixPoint&&(a=a.replace((0,r.default)(t.radixPoint),".")),isFinite(a)},onBeforeMask:function(e,t){var a=t.radixPoint||",";isFinite(t.digits)&&(t.digits=parseInt(t.digits)),"number"!=typeof e&&"number"!==t.inputType||""===a||(e=e.toString().replace(".",a));var i="-"===e.charAt(0)||e.charAt(0)===t.negationSymbol.front,n=e.split(a),o=n[0].replace(/[^\-0-9]/g,""),s=n.length>1?n[1].replace(/[^0-9]/g,""):"",l=n.length>1;e=o+(""!==s?a+s:s);var u=0;if(""!==a&&(u=t.digitsOptional?t.digits<s.length?t.digits:s.length:t.digits,""!==s||!t.digitsOptional)){var f=Math.pow(10,u||1);e=e.replace((0,r.default)(a),"."),isNaN(parseFloat(e))||(e=(t.roundingFN(parseFloat(e)*f)/f).toFixed(u)),e=e.toString().replace(".",a)}if(0===t.digits&&-1!==e.indexOf(a)&&(e=e.substring(0,e.indexOf(a))),null!==t.min||null!==t.max){var d=e.toString().replace(a,".");null!==t.min&&d<t.min?e=t.min.toString().replace(".",a):null!==t.max&&d>t.max&&(e=t.max.toString().replace(".",a))}return i&&"-"!==e.charAt(0)&&(e="-"+e),c(e.toString().split(""),u,t,l).join("")},onBeforeWrite:function(e,t,a,i){function n(e,t){if(!1!==i.__financeInput||t){var a=e.indexOf(i.radixPoint);-1!==a&&e.splice(a,1)}if(""!==i.groupSeparator)for(;-1!==(a=e.indexOf(i.groupSeparator));)e.splice(a,1);return e}var o,s=function(e,t){var a=new RegExp("(^"+(""!==t.negationSymbol.front?(0,r.default)(t.negationSymbol.front)+"?":"")+(0,r.default)(t.prefix)+")(.*)("+(0,r.default)(t.suffix)+(""!=t.negationSymbol.back?(0,r.default)(t.negationSymbol.back)+"?":"")+"$)").exec(e.slice().reverse().join("")),i=a?a[2]:"",n=!1;return i&&(i=i.split(t.radixPoint.charAt(0))[0],n=new RegExp("^[0"+t.groupSeparator+"]*").exec(i)),!(!n||!(n[0].length>1||n[0].length>0&&n[0].length<i.length))&&n}(t,i);if(s)for(var u=t.join("").lastIndexOf(s[0].split("").reverse().join(""))-(s[0]==s.input?0:1),f=s[0]==s.input?1:0,d=s[0].length-f;d>0;d--)delete this.maskset.validPositions[u+d],delete t[u+d];if(e)switch(e.type){case"blur":case"checkval":if(null!==i.min){var p=i.onUnMask(t.slice().reverse().join(""),void 0,l.extend({},i,{unmaskAsNumber:!0}));if(null!==i.min&&p<i.min)return{refreshFromBuffer:!0,buffer:c(i.min.toString().replace(".",i.radixPoint).split(""),i.digits,i).reverse()}}if(t[t.length-1]===i.negationSymbol.front){var h=new RegExp("(^"+(""!=i.negationSymbol.front?(0,r.default)(i.negationSymbol.front)+"?":"")+(0,r.default)(i.prefix)+")(.*)("+(0,r.default)(i.suffix)+(""!=i.negationSymbol.back?(0,r.default)(i.negationSymbol.back)+"?":"")+"$)").exec(n(t.slice(),!0).reverse().join(""));0==(h?h[2]:"")&&(o={refreshFromBuffer:!0,buffer:[0]})}else""!==i.radixPoint&&t[0]===i.radixPoint&&(o&&o.buffer?o.buffer.shift():(t.shift(),o={refreshFromBuffer:!0,buffer:n(t)}));if(i.enforceDigitsOnBlur){var v=(o=o||{})&&o.buffer||t.slice().reverse();o.refreshFromBuffer=!0,o.buffer=c(v,i.digits,i,!0).reverse()}}return o},onKeyDown:function(e,t,a,i){var r,o=l(this);if(e.ctrlKey)switch(e.keyCode){case n.default.UP:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())+parseInt(i.step)),o.trigger("setvalue"),!1;case n.default.DOWN:return this.inputmask.__valueSet.call(this,parseFloat(this.inputmask.unmaskedvalue())-parseInt(i.step)),o.trigger("setvalue"),!1}if(!e.shiftKey&&(e.keyCode===n.default.DELETE||e.keyCode===n.default.BACKSPACE||e.keyCode===n.default.BACKSPACE_SAFARI)&&a.begin!==t.length){if(t[e.keyCode===n.default.DELETE?a.begin-1:a.end]===i.negationSymbol.front)return r=t.slice().reverse(),""!==i.negationSymbol.front&&r.shift(),""!==i.negationSymbol.back&&r.pop(),o.trigger("setvalue",[r.join(""),a.begin]),!1;if(!0===i._radixDance){var s=t.indexOf(i.radixPoint);if(i.digitsOptional){if(0===s)return(r=t.slice().reverse()).pop(),o.trigger("setvalue",[r.join(""),a.begin>=r.length?r.length:a.begin]),!1}else if(-1!==s&&(a.begin<s||a.end<s||e.keyCode===n.default.DELETE&&a.begin===s))return a.begin!==a.end||e.keyCode!==n.default.BACKSPACE&&e.keyCode!==n.default.BACKSPACE_SAFARI||a.begin++,(r=t.slice().reverse()).splice(r.length-a.begin,a.begin-a.end+1),r=c(r,i.digits,i).join(""),o.trigger("setvalue",[r,a.begin>=r.length?s+1:a.begin]),!1}}}},currency:{prefix:"",groupSeparator:",",alias:"numeric",digits:2,digitsOptional:!1},decimal:{alias:"numeric"},integer:{alias:"numeric",inputmode:"numeric",digits:0},percentage:{alias:"numeric",min:0,max:100,suffix:" %",digits:0,allowMinus:!1},indianns:{alias:"numeric",_mask:function(e){return"("+e.groupSeparator+"99){*|1}("+e.groupSeparator+"999){1|1}"},groupSeparator:",",radixPoint:".",placeholder:"0",digits:2,digitsOptional:!1}})},9380:function(e,t,a){var i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=((i=a(8741))&&i.__esModule?i:{default:i}).default?window:{};t.default=n},7760:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.applyInputValue=c,t.clearOptionalTail=f,t.checkVal=d,t.HandleNativePlaceholder=function(e,t){var a=e?e.inputmask:this;if(l.ie){if(e.inputmask._valueGet()!==t&&(e.placeholder!==t||""===e.placeholder)){var i=o.getBuffer.call(a).slice(),n=e.inputmask._valueGet();if(n!==t){var r=o.getLastValidPosition.call(a);-1===r&&n===o.getBufferTemplate.call(a).join("")?i=[]:-1!==r&&f.call(a,i),p(e,i)}}}else e.placeholder!==t&&(e.placeholder=t,""===e.placeholder&&e.removeAttribute("placeholder"))},t.unmaskedvalue=function(e){var t=e?e.inputmask:this,a=t.opts,i=t.maskset;if(e){if(void 0===e.inputmask)return e.value;e.inputmask&&e.inputmask.refreshValue&&c(e,e.inputmask._valueGet(!0))}var n=[],r=i.validPositions;for(var s in r)r[s]&&r[s].match&&(1!=r[s].match.static||Array.isArray(i.metadata)&&!0!==r[s].generatedInput)&&n.push(r[s].input);var l=0===n.length?"":(t.isRTL?n.reverse():n).join("");if("function"==typeof a.onUnMask){var u=(t.isRTL?o.getBuffer.call(t).slice().reverse():o.getBuffer.call(t)).join("");l=a.onUnMask.call(t,u,l,a)}return l},t.writeBuffer=p;var i,n=(i=a(4528))&&i.__esModule?i:{default:i},r=a(4713),o=a(8711),s=a(7215),l=a(9845),u=a(6030);function c(e,t){var a=e?e.inputmask:this,i=a.opts;e.inputmask.refreshValue=!1,"function"==typeof i.onBeforeMask&&(t=i.onBeforeMask.call(a,t,i)||t),d(e,!0,!1,t=t.toString().split("")),a.undoValue=a._valueGet(!0),(i.clearMaskOnLostFocus||i.clearIncomplete)&&e.inputmask._valueGet()===o.getBufferTemplate.call(a).join("")&&-1===o.getLastValidPosition.call(a)&&e.inputmask._valueSet("")}function f(e){e.length=0;for(var t,a=r.getMaskTemplate.call(this,!0,0,!0,void 0,!0);void 0!==(t=a.shift());)e.push(t);return e}function d(e,t,a,i,n){var l=e?e.inputmask:this,c=l.maskset,f=l.opts,d=l.dependencyLib,h=i.slice(),v="",m=-1,g=void 0,k=f.skipOptionalPartCharacter;f.skipOptionalPartCharacter="",o.resetMaskSet.call(l),c.tests={},m=f.radixPoint?o.determineNewCaretPosition.call(l,{begin:0,end:0},!1,!1===f.__financeInput?"radixFocus":void 0).begin:0,c.p=m,l.caretPos={begin:m};var y=[],b=l.caretPos;if(h.forEach((function(e,t){if(void 0!==e){var i=new d.Event("_checkval");i.which=e.toString().charCodeAt(0),v+=e;var n=o.getLastValidPosition.call(l,void 0,!0);!function(e,t){for(var a=r.getMaskTemplate.call(l,!0,0).slice(e,o.seekNext.call(l,e,!1,!1)).join("").replace(/'/g,""),i=a.indexOf(t);i>0&&" "===a[i-1];)i--;var n=0===i&&!o.isMask.call(l,e)&&(r.getTest.call(l,e).match.nativeDef===t.charAt(0)||!0===r.getTest.call(l,e).match.static&&r.getTest.call(l,e).match.nativeDef==="'"+t.charAt(0)||" "===r.getTest.call(l,e).match.nativeDef&&(r.getTest.call(l,e+1).match.nativeDef===t.charAt(0)||!0===r.getTest.call(l,e+1).match.static&&r.getTest.call(l,e+1).match.nativeDef==="'"+t.charAt(0)));if(!n&&i>0&&!o.isMask.call(l,e,!1,!0)){var s=o.seekNext.call(l,e);l.caretPos.begin<s&&(l.caretPos={begin:s})}return n}(m,v)?(g=u.EventHandlers.keypressEvent.call(l,i,!0,!1,a,l.caretPos.begin))&&(m=l.caretPos.begin+1,v=""):g=u.EventHandlers.keypressEvent.call(l,i,!0,!1,a,n+1),g?(void 0!==g.pos&&c.validPositions[g.pos]&&!0===c.validPositions[g.pos].match.static&&void 0===c.validPositions[g.pos].alternation&&(y.push(g.pos),l.isRTL||(g.forwardPosition=g.pos+1)),p.call(l,void 0,o.getBuffer.call(l),g.forwardPosition,i,!1),l.caretPos={begin:g.forwardPosition,end:g.forwardPosition},b=l.caretPos):void 0===c.validPositions[t]&&h[t]===r.getPlaceholder.call(l,t)&&o.isMask.call(l,t,!0)?l.caretPos.begin++:l.caretPos=b}})),y.length>0){var x,P,E=o.seekNext.call(l,-1,void 0,!1);if(!s.isComplete.call(l,o.getBuffer.call(l))&&y.length<=E||s.isComplete.call(l,o.getBuffer.call(l))&&y.length>0&&y.length!==E&&0===y[0])for(var S=E;void 0!==(x=y.shift());){var _=new d.Event("_checkval");if((P=c.validPositions[x]).generatedInput=!0,_.which=P.input.charCodeAt(0),(g=u.EventHandlers.keypressEvent.call(l,_,!0,!1,a,S))&&void 0!==g.pos&&g.pos!==x&&c.validPositions[g.pos]&&!0===c.validPositions[g.pos].match.static)y.push(g.pos);else if(!g)break;S++}}t&&p.call(l,e,o.getBuffer.call(l),g?g.forwardPosition:l.caretPos.begin,n||new d.Event("checkval"),n&&"input"===n.type&&l.undoValue!==l._valueGet(!0)),f.skipOptionalPartCharacter=k}function p(e,t,a,i,r){var l=e?e.inputmask:this,u=l.opts,c=l.dependencyLib;if(i&&"function"==typeof u.onBeforeWrite){var f=u.onBeforeWrite.call(l,i,t,a,u);if(f){if(f.refreshFromBuffer){var d=f.refreshFromBuffer;s.refreshFromBuffer.call(l,!0===d?d:d.start,d.end,f.buffer||t),t=o.getBuffer.call(l,!0)}void 0!==a&&(a=void 0!==f.caret?f.caret:a)}}if(void 0!==e&&(e.inputmask._valueSet(t.join("")),void 0===a||void 0!==i&&"blur"===i.type||o.caret.call(l,e,a,void 0,void 0,void 0!==i&&"keydown"===i.type&&(i.keyCode===n.default.DELETE||i.keyCode===n.default.BACKSPACE)),!0===r)){var p=c(e),h=e.inputmask._valueGet();e.inputmask.skipInputEvent=!0,p.trigger("input"),setTimeout((function(){h===o.getBufferTemplate.call(l).join("")?p.trigger("cleared"):!0===s.isComplete.call(l,t)&&p.trigger("complete")}),0)}}},2394:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(7149),a(3194);var i=a(157),n=m(a(4963)),r=m(a(9380)),o=a(2391),s=a(4713),l=a(8711),u=a(7215),c=a(7760),f=a(9716),d=m(a(7392)),p=m(a(3976)),h=m(a(8741));function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return e&&e.__esModule?e:{default:e}}var g=r.default.document,k="_inputmask_opts";function y(e,t,a){if(h.default){if(!(this instanceof y))return new y(e,t,a);this.dependencyLib=n.default,this.el=void 0,this.events={},this.maskset=void 0,!0!==a&&("[object Object]"===Object.prototype.toString.call(e)?t=e:(t=t||{},e&&(t.alias=e)),this.opts=n.default.extend(!0,{},this.defaults,t),this.noMasksCache=t&&void 0!==t.definitions,this.userOptions=t||{},b(this.opts.alias,t,this.opts)),this.refreshValue=!1,this.undoValue=void 0,this.$el=void 0,this.skipKeyPressEvent=!1,this.skipInputEvent=!1,this.validationEvent=!1,this.ignorable=!1,this.maxLength,this.mouseEnter=!1,this.originalPlaceholder=void 0,this.isComposing=!1}}function b(e,t,a){var i=y.prototype.aliases[e];return i?(i.alias&&b(i.alias,void 0,a),n.default.extend(!0,a,i),n.default.extend(!0,a,t),!0):(null===a.mask&&(a.mask=e),!1)}y.prototype={dataAttribute:"data-inputmask",defaults:p.default,definitions:d.default,aliases:{},masksCache:{},get isRTL(){return this.opts.isRTL||this.opts.numericInput},mask:function(e){var t=this;return"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:Array.isArray(e)?e:Array.from(e)).forEach((function(e,a){var s=n.default.extend(!0,{},t.opts);if(function(e,t,a,i){function o(t,n){var o=""===i?t:i+"-"+t;null!==(n=void 0!==n?n:e.getAttribute(o))&&("string"==typeof n&&(0===t.indexOf("on")?n=r.default[n]:"false"===n?n=!1:"true"===n&&(n=!0)),a[t]=n)}if(!0===t.importDataAttributes){var s,l,u,c,f=e.getAttribute(i);if(f&&""!==f&&(f=f.replace(/'/g,'"'),l=JSON.parse("{"+f+"}")),l)for(c in u=void 0,l)if("alias"===c.toLowerCase()){u=l[c];break}for(s in o("alias",u),a.alias&&b(a.alias,a,t),t){if(l)for(c in u=void 0,l)if(c.toLowerCase()===s.toLowerCase()){u=l[c];break}o(s,u)}}n.default.extend(!0,t,a),("rtl"===e.dir||t.rightAlign)&&(e.style.textAlign="right");("rtl"===e.dir||t.numericInput)&&(e.dir="ltr",e.removeAttribute("dir"),t.isRTL=!0);return Object.keys(a).length}(e,s,n.default.extend(!0,{},t.userOptions),t.dataAttribute)){var l=(0,o.generateMaskSet)(s,t.noMasksCache);void 0!==l&&(void 0!==e.inputmask&&(e.inputmask.opts.autoUnmask=!0,e.inputmask.remove()),e.inputmask=new y(void 0,void 0,!0),e.inputmask.opts=s,e.inputmask.noMasksCache=t.noMasksCache,e.inputmask.userOptions=n.default.extend(!0,{},t.userOptions),e.inputmask.el=e,e.inputmask.$el=(0,n.default)(e),e.inputmask.maskset=l,n.default.data(e,k,t.userOptions),i.mask.call(e.inputmask))}})),e&&e[0]&&e[0].inputmask||this},option:function(e,t){return"string"==typeof e?this.opts[e]:"object"===v(e)?(n.default.extend(this.userOptions,e),this.el&&!0!==t&&this.mask(this.el),this):void 0},unmaskedvalue:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),void 0===this.el||void 0!==e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!1,!1,t),"function"==typeof this.opts.onBeforeWrite&&this.opts.onBeforeWrite.call(this,void 0,l.getBuffer.call(this),0,this.opts)}return c.unmaskedvalue.call(this,this.el)},remove:function(){if(this.el){n.default.data(this.el,k,null);var e=this.opts.autoUnmask?(0,c.unmaskedvalue)(this.el):this._valueGet(this.opts.autoUnmask);e!==l.getBufferTemplate.call(this).join("")?this._valueSet(e,this.opts.autoUnmask):this._valueSet(""),f.EventRuler.off(this.el),Object.getOwnPropertyDescriptor&&Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(this.el),"value")&&this.__valueGet&&Object.defineProperty(this.el,"value",{get:this.__valueGet,set:this.__valueSet,configurable:!0}):g.__lookupGetter__&&this.el.__lookupGetter__("value")&&this.__valueGet&&(this.el.__defineGetter__("value",this.__valueGet),this.el.__defineSetter__("value",this.__valueSet)),this.el.inputmask=void 0}return this.el},getemptymask:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),l.getBufferTemplate.call(this).join("")},hasMaskedValue:function(){return!this.opts.autoUnmask},isComplete:function(){return this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),u.isComplete.call(this,l.getBuffer.call(this))},getmetadata:function(){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),Array.isArray(this.maskset.metadata)){var e=s.getMaskTemplate.call(this,!0,0,!1).join("");return this.maskset.metadata.forEach((function(t){return t.mask!==e||(e=t,!1)})),e}return this.maskset.metadata},isValid:function(e){if(this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache),e){var t=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!0,!1,t)}else e=this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join("");for(var a=l.getBuffer.call(this),i=l.determineLastRequiredPosition.call(this),n=a.length-1;n>i&&!l.isMask.call(this,n);n--);return a.splice(i,n+1-i),u.isComplete.call(this,a)&&e===(this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join(""))},format:function(e,t){this.maskset=this.maskset||(0,o.generateMaskSet)(this.opts,this.noMasksCache);var a=("function"==typeof this.opts.onBeforeMask&&this.opts.onBeforeMask.call(this,e,this.opts)||e).split("");c.checkVal.call(this,void 0,!0,!1,a);var i=this.isRTL?l.getBuffer.call(this).slice().reverse().join(""):l.getBuffer.call(this).join("");return t?{value:i,metadata:this.getmetadata()}:i},setValue:function(e){this.el&&(0,n.default)(this.el).trigger("setvalue",[e])},analyseMask:o.analyseMask},y.extendDefaults=function(e){n.default.extend(!0,y.prototype.defaults,e)},y.extendDefinitions=function(e){n.default.extend(!0,y.prototype.definitions,e)},y.extendAliases=function(e){n.default.extend(!0,y.prototype.aliases,e)},y.format=function(e,t,a){return y(t).format(e,a)},y.unmask=function(e,t){return y(t).unmaskedvalue(e)},y.isValid=function(e,t){return y(t).isValid(e)},y.remove=function(e){"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach((function(e){e.inputmask&&e.inputmask.remove()}))},y.setValue=function(e,t){"string"==typeof e&&(e=g.getElementById(e)||g.querySelectorAll(e)),(e=e.nodeName?[e]:e).forEach((function(e){e.inputmask?e.inputmask.setValue(t):(0,n.default)(e).trigger("setvalue",[t])}))},y.dependencyLib=n.default,r.default.Inputmask=y;var x=y;t.default=x},5296:function(e,t,a){function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var n=p(a(9380)),r=p(a(2394)),o=p(a(8741));function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){var t="function"==typeof Map?new Map:void 0;return(l=function(e){if(null===e||(a=e,-1===Function.toString.call(a).indexOf("[native code]")))return e;var a;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,i)}function i(){return u(e,arguments,d(this).constructor)}return i.prototype=Object.create(e.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),f(i,e)})(e)}function u(e,t,a){return(u=c()?Reflect.construct:function(e,t,a){var i=[null];i.push.apply(i,t);var n=new(Function.bind.apply(e,i));return a&&f(n,a.prototype),n}).apply(null,arguments)}function c(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){return e&&e.__esModule?e:{default:e}}var h=n.default.document;if(o.default&&h&&h.head&&h.head.attachShadow&&n.default.customElements&&void 0===n.default.customElements.get("input-mask")){var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(n,e);var t,a,i=(t=n,a=c(),function(){var e,i=d(t);if(a){var n=d(this).constructor;e=Reflect.construct(i,arguments,n)}else e=i.apply(this,arguments);return s(this,e)});function n(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=(e=i.call(this)).getAttributeNames(),a=e.attachShadow({mode:"closed"}),o=h.createElement("input");for(var s in o.type="text",a.appendChild(o),t)Object.prototype.hasOwnProperty.call(t,s)&&o.setAttribute(t[s],e.getAttribute(t[s]));var l=new r.default;return l.dataAttribute="",l.mask(o),o.inputmask.shadowRoot=a,e}return n}(l(HTMLElement));n.default.customElements.define("input-mask",v)}},2391:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.generateMaskSet=function(e,t){var a;function n(e,a,n){var r,o,s=!1;if(null!==e&&""!==e||((s=null!==n.regex)?e=(e=n.regex).replace(/^(\^)(.*)(\$)$/,"$2"):(s=!0,e=".*")),1===e.length&&!1===n.greedy&&0!==n.repeat&&(n.placeholder=""),n.repeat>0||"*"===n.repeat||"+"===n.repeat){var l="*"===n.repeat?0:"+"===n.repeat?1:n.repeat;e=n.groupmarker[0]+e+n.groupmarker[1]+n.quantifiermarker[0]+l+","+n.repeat+n.quantifiermarker[1]}return o=s?"regex_"+n.regex:n.numericInput?e.split("").reverse().join(""):e,!1!==n.keepStatic&&(o="ks_"+o),void 0===Inputmask.prototype.masksCache[o]||!0===t?(r={mask:e,maskToken:Inputmask.prototype.analyseMask(e,s,n),validPositions:{},_buffer:void 0,buffer:void 0,tests:{},excludes:{},metadata:a,maskLength:void 0,jitOffset:{}},!0!==t&&(Inputmask.prototype.masksCache[o]=r,r=i.default.extend(!0,{},Inputmask.prototype.masksCache[o]))):r=i.default.extend(!0,{},Inputmask.prototype.masksCache[o]),r}"function"==typeof e.mask&&(e.mask=e.mask(e));if(Array.isArray(e.mask)){if(e.mask.length>1){null===e.keepStatic&&(e.keepStatic=!0);var r=e.groupmarker[0];return(e.isRTL?e.mask.reverse():e.mask).forEach((function(t){r.length>1&&(r+=e.groupmarker[1]+e.alternatormarker+e.groupmarker[0]),void 0!==t.mask&&"function"!=typeof t.mask?r+=t.mask:r+=t})),n(r+=e.groupmarker[1],e.mask,e)}e.mask=e.mask.pop()}null===e.keepStatic&&(e.keepStatic=!1);a=e.mask&&void 0!==e.mask.mask&&"function"!=typeof e.mask.mask?n(e.mask.mask,e.mask,e):n(e.mask,e.mask,e);return a},t.analyseMask=function(e,t,a){var i,r,o,s,l,u,c=/(?:[?*+]|\{[0-9+*]+(?:,[0-9+*]*)?(?:\|[0-9+*]*)?\})|[^.?*+^${[]()|\\]+|./g,f=/\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,d=!1,p=new n.default,h=[],v=[],m=!1;function g(e,i,n){n=void 0!==n?n:e.matches.length;var r=e.matches[n-1];if(t)0===i.indexOf("[")||d&&/\\d|\\s|\\w]/i.test(i)||"."===i?e.matches.splice(n++,0,{fn:new RegExp(i,a.casing?"i":""),static:!1,optionality:!1,newBlockMarker:void 0===r?"master":r.def!==i,casing:null,def:i,placeholder:void 0,nativeDef:i}):(d&&(i=i[i.length-1]),i.split("").forEach((function(t,i){r=e.matches[n-1],e.matches.splice(n++,0,{fn:/[a-z]/i.test(a.staticDefinitionSymbol||t)?new RegExp("["+(a.staticDefinitionSymbol||t)+"]",a.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===r?"master":r.def!==t&&!0!==r.static,casing:null,def:a.staticDefinitionSymbol||t,placeholder:void 0!==a.staticDefinitionSymbol?t:void 0,nativeDef:(d?"'":"")+t})}))),d=!1;else{var o=a.definitions&&a.definitions[i]||a.usePrototypeDefinitions&&Inputmask.prototype.definitions[i];o&&!d?e.matches.splice(n++,0,{fn:o.validator?"string"==typeof o.validator?new RegExp(o.validator,a.casing?"i":""):new function(){this.test=o.validator}:new RegExp("."),static:o.static||!1,optionality:!1,newBlockMarker:void 0===r?"master":r.def!==(o.definitionSymbol||i),casing:o.casing,def:o.definitionSymbol||i,placeholder:o.placeholder,nativeDef:i,generated:o.generated}):(e.matches.splice(n++,0,{fn:/[a-z]/i.test(a.staticDefinitionSymbol||i)?new RegExp("["+(a.staticDefinitionSymbol||i)+"]",a.casing?"i":""):null,static:!0,optionality:!1,newBlockMarker:void 0===r?"master":r.def!==i&&!0!==r.static,casing:null,def:a.staticDefinitionSymbol||i,placeholder:void 0!==a.staticDefinitionSymbol?i:void 0,nativeDef:(d?"'":"")+i}),d=!1)}}function k(){if(h.length>0){if(g(s=h[h.length-1],r),s.isAlternator){l=h.pop();for(var e=0;e<l.matches.length;e++)l.matches[e].isGroup&&(l.matches[e].isGroup=!1);h.length>0?(s=h[h.length-1]).matches.push(l):p.matches.push(l)}}else g(p,r)}function y(e){var t=new n.default(!0);return t.openGroup=!1,t.matches=e,t}function b(){if((o=h.pop()).openGroup=!1,void 0!==o)if(h.length>0){if((s=h[h.length-1]).matches.push(o),s.isAlternator){l=h.pop();for(var e=0;e<l.matches.length;e++)l.matches[e].isGroup=!1,l.matches[e].alternatorGroup=!1;h.length>0?(s=h[h.length-1]).matches.push(l):p.matches.push(l)}}else p.matches.push(o);else k()}function x(e){var t=e.pop();return t.isQuantifier&&(t=y([e.pop(),t])),t}t&&(a.optionalmarker[0]=void 0,a.optionalmarker[1]=void 0);for(;i=t?f.exec(e):c.exec(e);){if(r=i[0],t)switch(r.charAt(0)){case"?":r="{0,1}";break;case"+":case"*":r="{"+r+"}";break;case"|":if(0===h.length){var P=y(p.matches);P.openGroup=!0,h.push(P),p.matches=[],m=!0}}if(d)k();else switch(r.charAt(0)){case"$":case"^":t||k();break;case"(?=":case"(?!":case"(?<=":case"(?<!":h.push(new n.default(!0));break;case a.escapeChar:d=!0,t&&k();break;case a.optionalmarker[1]:case a.groupmarker[1]:b();break;case a.optionalmarker[0]:h.push(new n.default(!1,!0));break;case a.groupmarker[0]:h.push(new n.default(!0));break;case a.quantifiermarker[0]:var E=new n.default(!1,!1,!0),S=(r=r.replace(/[{}]/g,"")).split("|"),_=S[0].split(","),M=isNaN(_[0])?_[0]:parseInt(_[0]),w=1===_.length?M:isNaN(_[1])?_[1]:parseInt(_[1]),O=isNaN(S[1])?S[1]:parseInt(S[1]);"*"!==M&&"+"!==M||(M="*"===w?0:1),E.quantifier={min:M,max:w,jit:O};var T=h.length>0?h[h.length-1].matches:p.matches;if((i=T.pop()).isAlternator){T.push(i),T=i.matches;var C=new n.default(!0),A=T.pop();T.push(C),T=C.matches,i=A}i.isGroup||(i=y([i])),T.push(i),T.push(E);break;case a.alternatormarker:if(h.length>0){var D=(s=h[h.length-1]).matches[s.matches.length-1];u=s.openGroup&&(void 0===D.matches||!1===D.isGroup&&!1===D.isAlternator)?h.pop():x(s.matches)}else u=x(p.matches);if(u.isAlternator)h.push(u);else if(u.alternatorGroup?(l=h.pop(),u.alternatorGroup=!1):l=new n.default(!1,!1,!1,!0),l.matches.push(u),h.push(l),u.openGroup){u.openGroup=!1;var B=new n.default(!0);B.alternatorGroup=!0,h.push(B)}break;default:k()}}m&&b();for(;h.length>0;)o=h.pop(),p.matches.push(o);p.matches.length>0&&(!function e(i){i&&i.matches&&i.matches.forEach((function(n,r){var o=i.matches[r+1];(void 0===o||void 0===o.matches||!1===o.isQuantifier)&&n&&n.isGroup&&(n.isGroup=!1,t||(g(n,a.groupmarker[0],0),!0!==n.openGroup&&g(n,a.groupmarker[1]))),e(n)}))}(p),v.push(p));(a.numericInput||a.isRTL)&&function e(t){for(var i in t.matches=t.matches.reverse(),t.matches)if(Object.prototype.hasOwnProperty.call(t.matches,i)){var n=parseInt(i);if(t.matches[i].isQuantifier&&t.matches[n+1]&&t.matches[n+1].isGroup){var r=t.matches[i];t.matches.splice(i,1),t.matches.splice(n+1,0,r)}void 0!==t.matches[i].matches?t.matches[i]=e(t.matches[i]):t.matches[i]=((o=t.matches[i])===a.optionalmarker[0]?o=a.optionalmarker[1]:o===a.optionalmarker[1]?o=a.optionalmarker[0]:o===a.groupmarker[0]?o=a.groupmarker[1]:o===a.groupmarker[1]&&(o=a.groupmarker[0]),o)}var o;return t}(v[0]);return v};var i=r(a(4963)),n=r(a(9695));function r(e){return e&&e.__esModule?e:{default:e}}},157:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.mask=function(){var e=this,t=this.opts,a=this.el,i=this.dependencyLib;s.EventRuler.off(a);var f=function(t,a){"textarea"!==t.tagName.toLowerCase()&&a.ignorables.push(n.default.ENTER);var l=t.getAttribute("type"),u="input"===t.tagName.toLowerCase()&&a.supportsInputType.includes(l)||t.isContentEditable||"textarea"===t.tagName.toLowerCase();if(!u)if("input"===t.tagName.toLowerCase()){var c=document.createElement("input");c.setAttribute("type",l),u="text"===c.type,c=null}else u="partial";return!1!==u?function(t){var n,l;function u(){return this.inputmask?this.inputmask.opts.autoUnmask?this.inputmask.unmaskedvalue():-1!==r.getLastValidPosition.call(e)||!0!==a.nullable?(this.inputmask.shadowRoot||this.ownerDocument).activeElement===this&&a.clearMaskOnLostFocus?(e.isRTL?o.clearOptionalTail.call(e,r.getBuffer.call(e).slice()).reverse():o.clearOptionalTail.call(e,r.getBuffer.call(e).slice())).join(""):n.call(this):"":n.call(this)}function c(e){l.call(this,e),this.inputmask&&(0,o.applyInputValue)(this,e)}if(!t.inputmask.__valueGet){if(!0!==a.noValuePatching){if(Object.getOwnPropertyDescriptor){var f=Object.getPrototypeOf?Object.getOwnPropertyDescriptor(Object.getPrototypeOf(t),"value"):void 0;f&&f.get&&f.set?(n=f.get,l=f.set,Object.defineProperty(t,"value",{get:u,set:c,configurable:!0})):"input"!==t.tagName.toLowerCase()&&(n=function(){return this.textContent},l=function(e){this.textContent=e},Object.defineProperty(t,"value",{get:u,set:c,configurable:!0}))}else document.__lookupGetter__&&t.__lookupGetter__("value")&&(n=t.__lookupGetter__("value"),l=t.__lookupSetter__("value"),t.__defineGetter__("value",u),t.__defineSetter__("value",c));t.inputmask.__valueGet=n,t.inputmask.__valueSet=l}t.inputmask._valueGet=function(t){return e.isRTL&&!0!==t?n.call(this.el).split("").reverse().join(""):n.call(this.el)},t.inputmask._valueSet=function(t,a){l.call(this.el,null==t?"":!0!==a&&e.isRTL?t.split("").reverse().join(""):t)},void 0===n&&(n=function(){return this.value},l=function(e){this.value=e},function(t){if(i.valHooks&&(void 0===i.valHooks[t]||!0!==i.valHooks[t].inputmaskpatch)){var n=i.valHooks[t]&&i.valHooks[t].get?i.valHooks[t].get:function(e){return e.value},s=i.valHooks[t]&&i.valHooks[t].set?i.valHooks[t].set:function(e,t){return e.value=t,e};i.valHooks[t]={get:function(t){if(t.inputmask){if(t.inputmask.opts.autoUnmask)return t.inputmask.unmaskedvalue();var i=n(t);return-1!==r.getLastValidPosition.call(e,void 0,void 0,t.inputmask.maskset.validPositions)||!0!==a.nullable?i:""}return n(t)},set:function(e,t){var a=s(e,t);return e.inputmask&&(0,o.applyInputValue)(e,t),a},inputmaskpatch:!0}}}(t.type),function(t){s.EventRuler.on(t,"mouseenter",(function(){var t=this.inputmask._valueGet(!0);t!==(e.isRTL?r.getBuffer.call(e).reverse():r.getBuffer.call(e)).join("")&&(0,o.applyInputValue)(this,t)}))}(t))}}(t):t.inputmask=void 0,u}(a,t);if(!1!==f){e.originalPlaceholder=a.placeholder,e.maxLength=void 0!==a?a.maxLength:void 0,-1===e.maxLength&&(e.maxLength=void 0),"inputMode"in a&&null===a.getAttribute("inputmode")&&(a.inputMode=t.inputmode,a.setAttribute("inputmode",t.inputmode)),!0===f&&(t.showMaskOnFocus=t.showMaskOnFocus&&-1===["cc-number","cc-exp"].indexOf(a.autocomplete),l.iphone&&(t.insertModeVisual=!1),s.EventRuler.on(a,"submit",c.EventHandlers.submitEvent),s.EventRuler.on(a,"reset",c.EventHandlers.resetEvent),s.EventRuler.on(a,"blur",c.EventHandlers.blurEvent),s.EventRuler.on(a,"focus",c.EventHandlers.focusEvent),s.EventRuler.on(a,"invalid",c.EventHandlers.invalidEvent),s.EventRuler.on(a,"click",c.EventHandlers.clickEvent),s.EventRuler.on(a,"mouseleave",c.EventHandlers.mouseleaveEvent),s.EventRuler.on(a,"mouseenter",c.EventHandlers.mouseenterEvent),s.EventRuler.on(a,"paste",c.EventHandlers.pasteEvent),s.EventRuler.on(a,"cut",c.EventHandlers.cutEvent),s.EventRuler.on(a,"complete",t.oncomplete),s.EventRuler.on(a,"incomplete",t.onincomplete),s.EventRuler.on(a,"cleared",t.oncleared),!0!==t.inputEventOnly&&(s.EventRuler.on(a,"keydown",c.EventHandlers.keydownEvent),s.EventRuler.on(a,"keypress",c.EventHandlers.keypressEvent),s.EventRuler.on(a,"keyup",c.EventHandlers.keyupEvent)),(l.mobile||t.inputEventOnly)&&a.removeAttribute("maxLength"),s.EventRuler.on(a,"input",c.EventHandlers.inputFallBackEvent),s.EventRuler.on(a,"compositionend",c.EventHandlers.compositionendEvent)),s.EventRuler.on(a,"setvalue",c.EventHandlers.setValueEvent),r.getBufferTemplate.call(e).join(""),e.undoValue=e._valueGet(!0);var d=(a.inputmask.shadowRoot||a.ownerDocument).activeElement;if(""!==a.inputmask._valueGet(!0)||!1===t.clearMaskOnLostFocus||d===a){(0,o.applyInputValue)(a,a.inputmask._valueGet(!0),t);var p=r.getBuffer.call(e).slice();!1===u.isComplete.call(e,p)&&t.clearIncomplete&&r.resetMaskSet.call(e),t.clearMaskOnLostFocus&&d!==a&&(-1===r.getLastValidPosition.call(e)?p=[]:o.clearOptionalTail.call(e,p)),(!1===t.clearMaskOnLostFocus||t.showMaskOnFocus&&d===a||""!==a.inputmask._valueGet(!0))&&(0,o.writeBuffer)(a,p),d===a&&r.caret.call(e,a,r.seekNext.call(e,r.getLastValidPosition.call(e)))}}};var i,n=(i=a(4528))&&i.__esModule?i:{default:i},r=a(8711),o=a(7760),s=a(9716),l=a(9845),u=a(7215),c=a(6030)},9695:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a,i){this.matches=[],this.openGroup=e||!1,this.alternatorGroup=!1,this.isGroup=e||!1,this.isOptional=t||!1,this.isQuantifier=a||!1,this.isAlternator=i||!1,this.quantifier={min:1,max:1}}},3194:function(){Array.prototype.includes||Object.defineProperty(Array.prototype,"includes",{value:function(e,t){if(null==this)throw new TypeError('"this" is null or not defined');var a=Object(this),i=a.length>>>0;if(0===i)return!1;for(var n=0|t,r=Math.max(n>=0?n:i-Math.abs(n),0);r<i;){if(a[r]===e)return!0;r++}return!1}})},7149:function(){function e(t){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}"function"!=typeof Object.getPrototypeOf&&(Object.getPrototypeOf="object"===e("test".__proto__)?function(e){return e.__proto__}:function(e){return e.constructor.prototype})},8711:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.caret=function(e,t,a,i,n){var r,o=this,s=this.opts;if(void 0===t)return"selectionStart"in e&&"selectionEnd"in e?(t=e.selectionStart,a=e.selectionEnd):window.getSelection?(r=window.getSelection().getRangeAt(0)).commonAncestorContainer.parentNode!==e&&r.commonAncestorContainer!==e||(t=r.startOffset,a=r.endOffset):document.selection&&document.selection.createRange&&(r=document.selection.createRange(),t=0-r.duplicate().moveStart("character",-e.inputmask._valueGet().length),a=t+r.text.length),{begin:i?t:u.call(o,t),end:i?a:u.call(o,a)};if(Array.isArray(t)&&(a=o.isRTL?t[0]:t[1],t=o.isRTL?t[1]:t[0]),void 0!==t.begin&&(a=o.isRTL?t.begin:t.end,t=o.isRTL?t.end:t.begin),"number"==typeof t){t=i?t:u.call(o,t),a="number"==typeof(a=i?a:u.call(o,a))?a:t;var l=parseInt(((e.ownerDocument.defaultView||window).getComputedStyle?(e.ownerDocument.defaultView||window).getComputedStyle(e,null):e.currentStyle).fontSize)*a;if(e.scrollLeft=l>e.scrollWidth?l:0,e.inputmask.caretPos={begin:t,end:a},s.insertModeVisual&&!1===s.insertMode&&t===a&&(n||a++),e===(e.inputmask.shadowRoot||e.ownerDocument).activeElement)if("setSelectionRange"in e)e.setSelectionRange(t,a);else if(window.getSelection){if(r=document.createRange(),void 0===e.firstChild||null===e.firstChild){var c=document.createTextNode("");e.appendChild(c)}r.setStart(e.firstChild,t<e.inputmask._valueGet().length?t:e.inputmask._valueGet().length),r.setEnd(e.firstChild,a<e.inputmask._valueGet().length?a:e.inputmask._valueGet().length),r.collapse(!0);var f=window.getSelection();f.removeAllRanges(),f.addRange(r)}else e.createTextRange&&((r=e.createTextRange()).collapse(!0),r.moveEnd("character",a),r.moveStart("character",t),r.select())}},t.determineLastRequiredPosition=function(e){var t,a,r=this,s=this.maskset,l=this.dependencyLib,u=i.getMaskTemplate.call(r,!0,o.call(r),!0,!0),c=u.length,f=o.call(r),d={},p=s.validPositions[f],h=void 0!==p?p.locator.slice():void 0;for(t=f+1;t<u.length;t++)a=i.getTestTemplate.call(r,t,h,t-1),h=a.locator.slice(),d[t]=l.extend(!0,{},a);var v=p&&void 0!==p.alternation?p.locator[p.alternation]:void 0;for(t=c-1;t>f&&(((a=d[t]).match.optionality||a.match.optionalQuantifier&&a.match.newBlockMarker||v&&(v!==d[t].locator[p.alternation]&&1!=a.match.static||!0===a.match.static&&a.locator[p.alternation]&&n.checkAlternationMatch.call(r,a.locator[p.alternation].toString().split(","),v.toString().split(","))&&""!==i.getTests.call(r,t)[0].def))&&u[t]===i.getPlaceholder.call(r,t,a.match));t--)c--;return e?{l:c,def:d[c]?d[c].match:void 0}:c},t.determineNewCaretPosition=function(e,t,a){var n=this,u=this.maskset,c=this.opts;t&&(n.isRTL?e.end=e.begin:e.begin=e.end);if(e.begin===e.end){switch(a=a||c.positionCaretOnClick){case"none":break;case"select":e={begin:0,end:r.call(n).length};break;case"ignore":e.end=e.begin=l.call(n,o.call(n));break;case"radixFocus":if(function(e){if(""!==c.radixPoint&&0!==c.digits){var t=u.validPositions;if(void 0===t[e]||t[e].input===i.getPlaceholder.call(n,e)){if(e<l.call(n,-1))return!0;var a=r.call(n).indexOf(c.radixPoint);if(-1!==a){for(var o in t)if(t[o]&&a<o&&t[o].input!==i.getPlaceholder.call(n,o))return!1;return!0}}}return!1}(e.begin)){var f=r.call(n).join("").indexOf(c.radixPoint);e.end=e.begin=c.numericInput?l.call(n,f):f;break}default:var d=e.begin,p=o.call(n,d,!0),h=l.call(n,-1!==p||s.call(n,0)?p:-1);if(d<=h)e.end=e.begin=s.call(n,d,!1,!0)?d:l.call(n,d);else{var v=u.validPositions[p],m=i.getTestTemplate.call(n,h,v?v.match.locator:void 0,v),g=i.getPlaceholder.call(n,h,m.match);if(""!==g&&r.call(n)[h]!==g&&!0!==m.match.optionalQuantifier&&!0!==m.match.newBlockMarker||!s.call(n,h,c.keepStatic,!0)&&m.match.def===g){var k=l.call(n,h);(d>=k||d===h)&&(h=k)}e.end=e.begin=h}}return e}},t.getBuffer=r,t.getBufferTemplate=function(){var e=this.maskset;void 0===e._buffer&&(e._buffer=i.getMaskTemplate.call(this,!1,1),void 0===e.buffer&&(e.buffer=e._buffer.slice()));return e._buffer},t.getLastValidPosition=o,t.isMask=s,t.resetMaskSet=function(e){var t=this.maskset;t.buffer=void 0,!0!==e&&(t.validPositions={},t.p=0)},t.seekNext=l,t.seekPrevious=function(e,t){var a=this,n=e-1;if(e<=0)return 0;for(;n>0&&(!0===t&&(!0!==i.getTest.call(a,n).match.newBlockMarker||!s.call(a,n,void 0,!0))||!0!==t&&!s.call(a,n,void 0,!0));)n--;return n},t.translatePosition=u;var i=a(4713),n=a(7215);function r(e){var t=this.maskset;return void 0!==t.buffer&&!0!==e||(t.buffer=i.getMaskTemplate.call(this,!0,o.call(this),!0),void 0===t._buffer&&(t._buffer=t.buffer.slice())),t.buffer}function o(e,t,a){var i=this.maskset,n=-1,r=-1,o=a||i.validPositions;for(var s in void 0===e&&(e=-1),o){var l=parseInt(s);o[l]&&(t||!0!==o[l].generatedInput)&&(l<=e&&(n=l),l>=e&&(r=l))}return-1===n||n==e?r:-1==r||e-n<r-e?n:r}function s(e,t,a){var n=this,r=this.maskset,o=i.getTestTemplate.call(n,e).match;if(""===o.def&&(o=i.getTest.call(n,e).match),!0!==o.static)return o.fn;if(!0===a&&void 0!==r.validPositions[e]&&!0!==r.validPositions[e].generatedInput)return!0;if(!0!==t&&e>-1){if(a){var s=i.getTests.call(n,e);return s.length>1+(""===s[s.length-1].match.def?1:0)}var l=i.determineTestTemplate.call(n,e,i.getTests.call(n,e)),u=i.getPlaceholder.call(n,e,l.match);return l.match.def!==u}return!1}function l(e,t,a){var n=this;void 0===a&&(a=!0);for(var r=e+1;""!==i.getTest.call(n,r).match.def&&(!0===t&&(!0!==i.getTest.call(n,r).match.newBlockMarker||!s.call(n,r,void 0,!0))||!0!==t&&!s.call(n,r,void 0,a));)r++;return r}function u(e){var t=this.opts,a=this.el;return!this.isRTL||"number"!=typeof e||t.greedy&&""===t.placeholder||!a||(e=Math.abs(this._valueGet().length-e)),e}},4713:function(e,t){function a(e,t){var a=(null!=e.alternation?e.mloc[i(e)]:e.locator).join("");if(""!==a)for(;a.length<t;)a+="0";return a}function i(e){var t=e.locator[e.alternation];return"string"==typeof t&&t.length>0&&(t=t.split(",")[0]),void 0!==t?t.toString():""}function n(e,t,a){var i=this.opts,n=this.maskset;if(void 0!==(t=t||s.call(this,e).match).placeholder||!0===a)return"function"==typeof t.placeholder?t.placeholder(i):t.placeholder;if(!0===t.static){if(e>-1&&void 0===n.validPositions[e]){var r,o=u.call(this,e),l=[];if(o.length>1+(""===o[o.length-1].match.def?1:0))for(var c=0;c<o.length;c++)if(""!==o[c].match.def&&!0!==o[c].match.optionality&&!0!==o[c].match.optionalQuantifier&&(!0===o[c].match.static||void 0===r||!1!==o[c].match.fn.test(r.match.def,n,e,!0,i))&&(l.push(o[c]),!0===o[c].match.static&&(r=o[c]),l.length>1&&/[0-9a-bA-Z]/.test(l[0].match.def)))return i.placeholder.charAt(e%i.placeholder.length)}return t.def}return i.placeholder.charAt(e%i.placeholder.length)}function r(e,t,a){return this.maskset.validPositions[e]||o.call(this,e,u.call(this,e,t?t.slice():t,a))}function o(e,t){var i=this.opts;e=e>0?e-1:0;for(var n,r,o,l=a(s.call(this,e)),u=0;u<t.length;u++){var c=t[u];n=a(c,l.length);var f=Math.abs(n-l);(void 0===r||""!==n&&f<r||o&&!i.greedy&&o.match.optionality&&"master"===o.match.newBlockMarker&&(!c.match.optionality||!c.match.newBlockMarker)||o&&o.match.optionalQuantifier&&!c.match.optionalQuantifier)&&(r=f,o=c)}return o}function s(e,t){var a=this.maskset;return a.validPositions[e]?a.validPositions[e]:(t||u.call(this,e))[0]}function l(e,t,a){function i(e){for(var t,a=[],i=-1,n=0,r=e.length;n<r;n++)if("-"===e.charAt(n))for(t=e.charCodeAt(n+1);++i<t;)a.push(String.fromCharCode(i));else i=e.charCodeAt(n),a.push(e.charAt(n));return a.join("")}return e.match.def===t.match.nativeDef||!(!(a.regex||e.match.fn instanceof RegExp&&t.match.fn instanceof RegExp)||!0===e.match.static||!0===t.match.static)&&-1!==i(t.match.fn.toString().replace(/[[\]/]/g,"")).indexOf(i(e.match.fn.toString().replace(/[[\]/]/g,"")))}function u(e,t,a){var i,n=this,r=this.dependencyLib,s=this.maskset,u=this.opts,c=this.el,f=s.maskToken,d=t?a:0,p=t?t.slice():[0],h=[],v=!1,m=t?t.join(""):"";function g(t,a,n,r){function o(n,r,f){function p(e,t){var a=0===t.matches.indexOf(e);return a||t.matches.every((function(i,n){return!0===i.isQuantifier?a=p(e,t.matches[n-1]):Object.prototype.hasOwnProperty.call(i,"matches")&&(a=p(e,i)),!a})),a}function k(e,t,a){var i,n;if((s.tests[e]||s.validPositions[e])&&(s.tests[e]||[s.validPositions[e]]).every((function(e,r){if(e.mloc[t])return i=e,!1;var o=void 0!==a?a:e.alternation,s=void 0!==e.locator[o]?e.locator[o].toString().indexOf(t):-1;return(void 0===n||s<n)&&-1!==s&&(i=e,n=s),!0})),i){var r=i.locator[i.alternation];return(i.mloc[t]||i.mloc[r]||i.locator).slice((void 0!==a?a:i.alternation)+1)}return void 0!==a?k(e,t):void 0}function y(e,t){var a=e.alternation,i=void 0===t||a===t.alternation&&-1===e.locator[a].toString().indexOf(t.locator[a]);if(!i&&a>t.alternation)for(var n=t.alternation;n<a;n++)if(e.locator[n]!==t.locator[n]){a=n,i=!0;break}if(i){e.mloc=e.mloc||{};var r=e.locator[a];if(void 0!==r){if("string"==typeof r&&(r=r.split(",")[0]),void 0===e.mloc[r]&&(e.mloc[r]=e.locator.slice()),void 0!==t){for(var o in t.mloc)"string"==typeof o&&(o=o.split(",")[0]),void 0===e.mloc[o]&&(e.mloc[o]=t.mloc[o]);e.locator[a]=Object.keys(e.mloc).join(",")}return!0}e.alternation=void 0}return!1}function b(e,t){if(e.locator.length!==t.locator.length)return!1;for(var a=e.alternation+1;a<e.locator.length;a++)if(e.locator[a]!==t.locator[a])return!1;return!0}if(d>e+u._maxTestPos)throw"Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. "+s.mask;if(d===e&&void 0===n.matches)return h.push({match:n,locator:r.reverse(),cd:m,mloc:{}}),!0;if(void 0!==n.matches){if(n.isGroup&&f!==n){if(n=o(t.matches[t.matches.indexOf(n)+1],r,f))return!0}else if(n.isOptional){var x=n,P=h.length;if(n=g(n,a,r,f)){if(h.forEach((function(e,t){t>=P&&(e.match.optionality=!0)})),i=h[h.length-1].match,void 0!==f||!p(i,x))return!0;v=!0,d=e}}else if(n.isAlternator){var E,S=n,_=[],M=h.slice(),w=r.length,O=!1,T=a.length>0?a.shift():-1;if(-1===T||"string"==typeof T){var C,A=d,D=a.slice(),B=[];if("string"==typeof T)B=T.split(",");else for(C=0;C<S.matches.length;C++)B.push(C.toString());if(void 0!==s.excludes[e]){for(var j=B.slice(),R=0,L=s.excludes[e].length;R<L;R++){var I=s.excludes[e][R].toString().split(":");r.length==I[1]&&B.splice(B.indexOf(I[0]),1)}0===B.length&&(delete s.excludes[e],B=j)}(!0===u.keepStatic||isFinite(parseInt(u.keepStatic))&&A>=u.keepStatic)&&(B=B.slice(0,1));for(var F=0;F<B.length;F++){C=parseInt(B[F]),h=[],a="string"==typeof T&&k(d,C,w)||D.slice();var N=S.matches[C];if(N&&o(N,[C].concat(r),f))n=!0;else if(0===F&&(O=!0),N&&N.matches&&N.matches.length>S.matches[0].matches.length)break;E=h.slice(),d=A,h=[];for(var V=0;V<E.length;V++){var G=E[V],H=!1;G.match.jit=G.match.jit||O,G.alternation=G.alternation||w,y(G);for(var K=0;K<_.length;K++){var U=_[K];if("string"!=typeof T||void 0!==G.alternation&&B.includes(G.locator[G.alternation].toString())){if(G.match.nativeDef===U.match.nativeDef){H=!0,y(U,G);break}if(l(G,U,u)){y(G,U)&&(H=!0,_.splice(_.indexOf(U),0,G));break}if(l(U,G,u)){y(U,G);break}if(Q=U,!0===(W=G).match.static&&!0!==Q.match.static&&Q.match.fn.test(W.match.def,s,e,!1,u,!1)){b(G,U)||void 0!==c.inputmask.userOptions.keepStatic?y(G,U)&&(H=!0,_.splice(_.indexOf(U),0,G)):u.keepStatic=!0;break}}}H||_.push(G)}}h=M.concat(_),d=e,v=h.length>0,n=_.length>0,a=D.slice()}else n=o(S.matches[T]||t.matches[T],[T].concat(r),f);if(n)return!0}else if(n.isQuantifier&&f!==t.matches[t.matches.indexOf(n)-1])for(var $=n,z=a.length>0?a.shift():0;z<(isNaN($.quantifier.max)?z+1:$.quantifier.max)&&d<=e;z++){var q=t.matches[t.matches.indexOf($)-1];if(n=o(q,[z].concat(r),q)){if((i=h[h.length-1].match).optionalQuantifier=z>=$.quantifier.min,i.jit=(z+1)*(q.matches.indexOf(i)+1)>$.quantifier.jit,i.optionalQuantifier&&p(i,q)){v=!0,d=e;break}return i.jit&&(s.jitOffset[e]=q.matches.length-q.matches.indexOf(i)),!0}}else if(n=g(n,a,r,f))return!0}else d++;var W,Q}for(var f=a.length>0?a.shift():0;f<t.matches.length;f++)if(!0!==t.matches[f].isQuantifier){var p=o(t.matches[f],[f].concat(n),r);if(p&&d===e)return p;if(d>e)break}}if(e>-1){if(void 0===t){for(var k,y=e-1;void 0===(k=s.validPositions[y]||s.tests[y])&&y>-1;)y--;void 0!==k&&y>-1&&(p=function(e,t){var a,i=[];return Array.isArray(t)||(t=[t]),t.length>0&&(void 0===t[0].alternation||!0===u.keepStatic?0===(i=o.call(n,e,t.slice()).locator.slice()).length&&(i=t[0].locator.slice()):t.forEach((function(e){""!==e.def&&(0===i.length?(a=e.alternation,i=e.locator.slice()):e.locator[a]&&-1===i[a].toString().indexOf(e.locator[a])&&(i[a]+=","+e.locator[a]))}))),i}(y,k),m=p.join(""),d=y)}if(s.tests[e]&&s.tests[e][0].cd===m)return s.tests[e];for(var b=p.shift();b<f.length;b++){if(g(f[b],p,[b])&&d===e||d>e)break}}return(0===h.length||v)&&h.push({match:{fn:null,static:!0,optionality:!1,casing:null,def:"",placeholder:""},locator:[],mloc:{},cd:m}),void 0!==t&&s.tests[e]?r.extend(!0,[],h):(s.tests[e]=r.extend(!0,[],h),s.tests[e])}Object.defineProperty(t,"__esModule",{value:!0}),t.determineTestTemplate=o,t.getDecisionTaker=i,t.getMaskTemplate=function(e,t,a,i,s){var l=this,c=this.opts,f=this.maskset,d=c.greedy;s&&(c.greedy=!1);t=t||0;var p,h,v,m,g=[],k=0;do{if(!0===e&&f.validPositions[k])v=s&&!0===f.validPositions[k].match.optionality&&void 0===f.validPositions[k+1]&&(!0===f.validPositions[k].generatedInput||f.validPositions[k].input==c.skipOptionalPartCharacter&&k>0)?o.call(l,k,u.call(l,k,p,k-1)):f.validPositions[k],h=v.match,p=v.locator.slice(),g.push(!0===a?v.input:!1===a?h.nativeDef:n.call(l,k,h));else{v=r.call(l,k,p,k-1),h=v.match,p=v.locator.slice();var y=!0!==i&&(!1!==c.jitMasking?c.jitMasking:h.jit);(m=(m&&h.static&&h.def!==c.groupSeparator&&null===h.fn||f.validPositions[k-1]&&h.static&&h.def!==c.groupSeparator&&null===h.fn)&&f.tests[k]&&1===f.tests[k].length)||!1===y||void 0===y||"number"==typeof y&&isFinite(y)&&y>k?g.push(!1===a?h.nativeDef:n.call(l,k,h)):m=!1}k++}while(!0!==h.static||""!==h.def||t>k);""===g[g.length-1]&&g.pop();!1===a&&void 0!==f.maskLength||(f.maskLength=k-1);return c.greedy=d,g},t.getPlaceholder=n,t.getTest=s,t.getTests=u,t.getTestTemplate=r,t.isSubsetOf=l},7215:function(e,t,a){Object.defineProperty(t,"__esModule",{value:!0}),t.alternate=l,t.checkAlternationMatch=function(e,t,a){for(var i,n=this.opts.greedy?t:t.slice(0,1),r=!1,o=void 0!==a?a.split(","):[],s=0;s<o.length;s++)-1!==(i=e.indexOf(o[s]))&&e.splice(i,1);for(var l=0;l<e.length;l++)if(n.includes(e[l])){r=!0;break}return r},t.isComplete=c,t.isValid=f,t.refreshFromBuffer=p,t.revalidateMask=v,t.handleRemove=function(e,t,a,i,s){var u=this,c=this.maskset,f=this.opts;if((f.numericInput||u.isRTL)&&(t===r.default.BACKSPACE?t=r.default.DELETE:t===r.default.DELETE&&(t=r.default.BACKSPACE),u.isRTL)){var d=a.end;a.end=a.begin,a.begin=d}var p,h=o.getLastValidPosition.call(u,void 0,!0);a.end>=o.getBuffer.call(u).length&&h>=a.end&&(a.end=h+1);t===r.default.BACKSPACE?a.end-a.begin<1&&(a.begin=o.seekPrevious.call(u,a.begin)):t===r.default.DELETE&&a.begin===a.end&&(a.end=o.isMask.call(u,a.end,!0,!0)?a.end+1:o.seekNext.call(u,a.end)+1);if(!1!==(p=v.call(u,a))){if(!0!==i&&!1!==f.keepStatic||null!==f.regex&&-1!==n.getTest.call(u,a.begin).match.def.indexOf("|")){var m=l.call(u,!0);if(m){var g=void 0!==m.caret?m.caret:m.pos?o.seekNext.call(u,m.pos.begin?m.pos.begin:m.pos):o.getLastValidPosition.call(u,-1,!0);(t!==r.default.DELETE||a.begin>g)&&a.begin}}!0!==i&&(c.p=t===r.default.DELETE?a.begin+p:a.begin,c.p=o.determineNewCaretPosition.call(u,{begin:c.p,end:c.p},!1).begin)}};var i,n=a(4713),r=(i=a(4528))&&i.__esModule?i:{default:i},o=a(8711),s=a(6030);function l(e,t,a,i,r,s){var u,c,d,p,h,v,m,g,k,y,b,x=this,P=this.dependencyLib,E=this.opts,S=x.maskset,_=P.extend(!0,{},S.validPositions),M=P.extend(!0,{},S.tests),w=!1,O=!1,T=void 0!==r?r:o.getLastValidPosition.call(x);if(s&&(y=s.begin,b=s.end,s.begin>s.end&&(y=s.end,b=s.begin)),-1===T&&void 0===r)u=0,c=(p=n.getTest.call(x,u)).alternation;else for(;T>=0;T--)if((d=S.validPositions[T])&&void 0!==d.alternation){if(p&&p.locator[d.alternation]!==d.locator[d.alternation])break;u=T,c=S.validPositions[u].alternation,p=d}if(void 0!==c){m=parseInt(u),S.excludes[m]=S.excludes[m]||[],!0!==e&&S.excludes[m].push((0,n.getDecisionTaker)(p)+":"+p.alternation);var C=[],A=-1;for(h=m;h<o.getLastValidPosition.call(x,void 0,!0)+1;h++)-1===A&&e<=h&&void 0!==t&&(C.push(t),A=C.length-1),(v=S.validPositions[h])&&!0!==v.generatedInput&&(void 0===s||h<y||h>=b)&&C.push(v.input),delete S.validPositions[h];for(-1===A&&void 0!==t&&(C.push(t),A=C.length-1);void 0!==S.excludes[m]&&S.excludes[m].length<10;){for(S.tests={},o.resetMaskSet.call(x,!0),w=!0,h=0;h<C.length&&(g=w.caret||o.getLastValidPosition.call(x,void 0,!0)+1,k=C[h],w=f.call(x,g,k,!1,i,!0));h++)h===A&&(O=w),1==e&&w&&(O={caretPos:h});if(w)break;if(o.resetMaskSet.call(x),p=n.getTest.call(x,m),S.validPositions=P.extend(!0,{},_),S.tests=P.extend(!0,{},M),!S.excludes[m]){O=l.call(x,e,t,a,i,m-1,s);break}var D=(0,n.getDecisionTaker)(p);if(-1!==S.excludes[m].indexOf(D+":"+p.alternation)){O=l.call(x,e,t,a,i,m-1,s);break}for(S.excludes[m].push(D+":"+p.alternation),h=m;h<o.getLastValidPosition.call(x,void 0,!0)+1;h++)delete S.validPositions[h]}}return O&&!1===E.keepStatic||delete S.excludes[m],O}function u(e,t,a){var i=this.opts,n=this.maskset;switch(i.casing||t.casing){case"upper":e=e.toUpperCase();break;case"lower":e=e.toLowerCase();break;case"title":var o=n.validPositions[a-1];e=0===a||o&&o.input===String.fromCharCode(r.default.SPACE)?e.toUpperCase():e.toLowerCase();break;default:if("function"==typeof i.casing){var s=Array.prototype.slice.call(arguments);s.push(n.validPositions),e=i.casing.apply(this,s)}}return e}function c(e){var t=this,a=this.opts,i=this.maskset;if("function"==typeof a.isComplete)return a.isComplete(e,a);if("*"!==a.repeat){var r=!1,s=o.determineLastRequiredPosition.call(t,!0),l=o.seekPrevious.call(t,s.l);if(void 0===s.def||s.def.newBlockMarker||s.def.optionality||s.def.optionalQuantifier){r=!0;for(var u=0;u<=l;u++){var c=n.getTestTemplate.call(t,u).match;if(!0!==c.static&&void 0===i.validPositions[u]&&!0!==c.optionality&&!0!==c.optionalQuantifier||!0===c.static&&e[u]!==n.getPlaceholder.call(t,u,c)){r=!1;break}}}return r}}function f(e,t,a,i,r,s,d){var m=this,g=this.dependencyLib,k=this.opts,y=m.maskset;function b(e){return m.isRTL?e.begin-e.end>1||e.begin-e.end==1:e.end-e.begin>1||e.end-e.begin==1}a=!0===a;var x=e;function P(e){if(void 0!==e){if(void 0!==e.remove&&(Array.isArray(e.remove)||(e.remove=[e.remove]),e.remove.sort((function(e,t){return t.pos-e.pos})).forEach((function(e){v.call(m,{begin:e,end:e+1})})),e.remove=void 0),void 0!==e.insert&&(Array.isArray(e.insert)||(e.insert=[e.insert]),e.insert.sort((function(e,t){return e.pos-t.pos})).forEach((function(e){""!==e.c&&f.call(m,e.pos,e.c,void 0===e.strict||e.strict,void 0!==e.fromIsValid?e.fromIsValid:i)})),e.insert=void 0),e.refreshFromBuffer&&e.buffer){var t=e.refreshFromBuffer;p.call(m,!0===t?t:t.start,t.end,e.buffer),e.refreshFromBuffer=void 0}void 0!==e.rewritePosition&&(x=e.rewritePosition,e=!0)}return e}function E(t,a,r){var s=!1;return n.getTests.call(m,t).every((function(l,c){var f=l.match;if(o.getBuffer.call(m,!0),!1!==(s=(!f.jit||void 0!==y.validPositions[o.seekPrevious.call(m,t)])&&(null!=f.fn?f.fn.test(a,y,t,r,k,b(e)):(a===f.def||a===k.skipOptionalPartCharacter)&&""!==f.def&&{c:n.getPlaceholder.call(m,t,f,!0)||f.def,pos:t}))){var d=void 0!==s.c?s.c:a,p=t;return d=d===k.skipOptionalPartCharacter&&!0===f.static?n.getPlaceholder.call(m,t,f,!0)||f.def:d,!0!==(s=P(s))&&void 0!==s.pos&&s.pos!==t&&(p=s.pos),!0!==s&&void 0===s.pos&&void 0===s.c?!1:(!1===v.call(m,e,g.extend({},l,{input:u.call(m,d,f,p)}),i,p)&&(s=!1),!1)}return!0})),s}void 0!==e.begin&&(x=m.isRTL?e.end:e.begin);var S=!0,_=g.extend(!0,{},y.validPositions);if(!1===k.keepStatic&&void 0!==y.excludes[x]&&!0!==r&&!0!==i)for(var M=x;M<(m.isRTL?e.begin:e.end);M++)void 0!==y.excludes[M]&&(y.excludes[M]=void 0,delete y.tests[M]);if("function"==typeof k.preValidation&&!0!==i&&!0!==s&&(S=P(S=k.preValidation.call(m,o.getBuffer.call(m),x,t,b(e),k,y,e,a||r))),!0===S){if(S=E(x,t,a),(!a||!0===i)&&!1===S&&!0!==s){var w=y.validPositions[x];if(!w||!0!==w.match.static||w.match.def!==t&&t!==k.skipOptionalPartCharacter){if(k.insertMode||void 0===y.validPositions[o.seekNext.call(m,x)]||e.end>x){var O=!1;if(y.jitOffset[x]&&void 0===y.validPositions[o.seekNext.call(m,x)]&&!1!==(S=f.call(m,x+y.jitOffset[x],t,!0,!0))&&(!0!==r&&(S.caret=x),O=!0),e.end>x&&(y.validPositions[x]=void 0),!O&&!o.isMask.call(m,x,k.keepStatic&&0===x))for(var T=x+1,C=o.seekNext.call(m,x,!1,0!==x);T<=C;T++)if(!1!==(S=E(T,t,a))){S=h.call(m,x,void 0!==S.pos?S.pos:T)||S,x=T;break}}}else S={caret:o.seekNext.call(m,x)}}!1!==S||!k.keepStatic||!c.call(m,o.getBuffer.call(m))&&0!==x||a||!0===r?b(e)&&y.tests[x]&&y.tests[x].length>1&&k.keepStatic&&!a&&!0!==r&&(S=l.call(m,!0)):S=l.call(m,x,t,a,i,void 0,e),!0===S&&(S={pos:x})}if("function"==typeof k.postValidation&&!0!==i&&!0!==s){var A=k.postValidation.call(m,o.getBuffer.call(m,!0),void 0!==e.begin?m.isRTL?e.end:e.begin:e,t,S,k,y,a,d);void 0!==A&&(S=!0===A?S:A)}S&&void 0===S.pos&&(S.pos=x),!1===S||!0===s?(o.resetMaskSet.call(m,!0),y.validPositions=g.extend(!0,{},_)):h.call(m,void 0,x,!0);var D=P(S);void 0!==m.maxLength&&(o.getBuffer.call(m).length>m.maxLength&&!i&&(o.resetMaskSet.call(m,!0),y.validPositions=g.extend(!0,{},_),D=!1));return D}function d(e,t,a){for(var i=this.maskset,r=!1,o=n.getTests.call(this,e),s=0;s<o.length;s++){if(o[s].match&&(o[s].match.nativeDef===t.match[a.shiftPositions?"def":"nativeDef"]&&(!a.shiftPositions||!t.match.static)||o[s].match.nativeDef===t.match.nativeDef||a.regex&&!o[s].match.static&&o[s].match.fn.test(t.input))){r=!0;break}if(o[s].match&&o[s].match.def===t.match.nativeDef){r=void 0;break}}return!1===r&&void 0!==i.jitOffset[e]&&(r=d.call(this,e+i.jitOffset[e],t,a)),r}function p(e,t,a){var i,n,r=this,l=this.maskset,u=this.opts,c=this.dependencyLib,f=u.skipOptionalPartCharacter,d=r.isRTL?a.slice().reverse():a;if(u.skipOptionalPartCharacter="",!0===e)o.resetMaskSet.call(r),l.tests={},e=0,t=a.length,n=o.determineNewCaretPosition.call(r,{begin:0,end:0},!1).begin;else{for(i=e;i<t;i++)delete l.validPositions[i];n=e}var p=new c.Event("keypress");for(i=e;i<t;i++){p.which=d[i].toString().charCodeAt(0),r.ignorable=!1;var h=s.EventHandlers.keypressEvent.call(r,p,!0,!1,!1,n);!1!==h&&void 0!==h&&(n=h.forwardPosition)}u.skipOptionalPartCharacter=f}function h(e,t,a){var i=this,r=this.maskset,s=this.dependencyLib;if(void 0===e)for(e=t-1;e>0&&!r.validPositions[e];e--);for(var l=e;l<t;l++){if(void 0===r.validPositions[l]&&!o.isMask.call(i,l,!1))if(0==l?n.getTest.call(i,l):r.validPositions[l-1]){var u=n.getTests.call(i,l).slice();""===u[u.length-1].match.def&&u.pop();var c,d=n.determineTestTemplate.call(i,l,u);if(d&&(!0!==d.match.jit||"master"===d.match.newBlockMarker&&(c=r.validPositions[l+1])&&!0===c.match.optionalQuantifier)&&((d=s.extend({},d,{input:n.getPlaceholder.call(i,l,d.match,!0)||d.match.def})).generatedInput=!0,v.call(i,l,d,!0),!0!==a)){var p=r.validPositions[t].input;return r.validPositions[t]=void 0,f.call(i,t,p,!0,!0)}}}}function v(e,t,a,i){var r=this,s=this.maskset,l=this.opts,u=this.dependencyLib;function c(e,t,a){var i=t[e];if(void 0!==i&&!0===i.match.static&&!0!==i.match.optionality&&(void 0===t[0]||void 0===t[0].alternation)){var n=a.begin<=e-1?t[e-1]&&!0===t[e-1].match.static&&t[e-1]:t[e-1],r=a.end>e+1?t[e+1]&&!0===t[e+1].match.static&&t[e+1]:t[e+1];return n&&r}return!1}var p=0,h=void 0!==e.begin?e.begin:e,v=void 0!==e.end?e.end:e,m=!0;if(e.begin>e.end&&(h=e.end,v=e.begin),i=void 0!==i?i:h,h!==v||l.insertMode&&void 0!==s.validPositions[i]&&void 0===a||void 0===t){var g,k=u.extend(!0,{},s.validPositions),y=o.getLastValidPosition.call(r,void 0,!0);for(s.p=h,g=y;g>=h;g--)delete s.validPositions[g],void 0===t&&delete s.tests[g+1];var b,x,P=i,E=P;for(t&&(s.validPositions[i]=u.extend(!0,{},t),E++,P++),g=t?v:v-1;g<=y;g++){if(void 0!==(b=k[g])&&!0!==b.generatedInput&&(g>=v||g>=h&&c(g,k,{begin:h,end:v}))){for(;""!==n.getTest.call(r,E).match.def;){if(!1!==(x=d.call(r,E,b,l))||"+"===b.match.def){"+"===b.match.def&&o.getBuffer.call(r,!0);var S=f.call(r,E,b.input,"+"!==b.match.def,!0);if(m=!1!==S,P=(S.pos||E)+1,!m&&x)break}else m=!1;if(m){void 0===t&&b.match.static&&g===e.begin&&p++;break}if(!m&&E>s.maskLength)break;E++}""==n.getTest.call(r,E).match.def&&(m=!1),E=P}if(!m)break}if(!m)return s.validPositions=u.extend(!0,{},k),o.resetMaskSet.call(r,!0),!1}else t&&n.getTest.call(r,i).match.cd===t.match.cd&&(s.validPositions[i]=u.extend(!0,{},t));return o.resetMaskSet.call(r,!0),p}}},t={};function a(i){var n=t[i];if(void 0!==n)return n.exports;var r=t[i]={exports:{}};return e[i](r,r.exports,a),r.exports}var i={};return function(){var e,t=i;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a(3851),a(219),a(207),a(5296);var n=((e=a(2394))&&e.__esModule?e:{default:e}).default;t.default=n}(),i}()}));;!function(a){var b=/iPhone/i,c=/iPod/i,d=/iPad/i,e=/(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,f=/Android/i,g=/(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,h=/(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,i=/Windows Phone/i,j=/(?=.*\bWindows\b)(?=.*\bARM\b)/i,k=/BlackBerry/i,l=/BB10/i,m=/Opera Mini/i,n=/(CriOS|Chrome)(?=.*\bMobile\b)/i,o=/(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,p=new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)","i"),q=function(a,b){return a.test(b)},r=function(a){var r=a||navigator.userAgent,s=r.split("[FBAN");if("undefined"!=typeof s[1]&&(r=s[0]),s=r.split("Twitter"),"undefined"!=typeof s[1]&&(r=s[0]),this.apple={phone:q(b,r),ipod:q(c,r),tablet:!q(b,r)&&q(d,r),device:q(b,r)||q(c,r)||q(d,r)},this.amazon={phone:q(g,r),tablet:!q(g,r)&&q(h,r),device:q(g,r)||q(h,r)},this.android={phone:q(g,r)||q(e,r),tablet:!q(g,r)&&!q(e,r)&&(q(h,r)||q(f,r)),device:q(g,r)||q(h,r)||q(e,r)||q(f,r)},this.windows={phone:q(i,r),tablet:q(j,r),device:q(i,r)||q(j,r)},this.other={blackberry:q(k,r),blackberry10:q(l,r),opera:q(m,r),firefox:q(o,r),chrome:q(n,r),device:q(k,r)||q(l,r)||q(m,r)||q(o,r)||q(n,r)},this.seven_inch=q(p,r),this.any=this.apple.device||this.android.device||this.windows.device||this.other.device||this.seven_inch,this.phone=this.apple.phone||this.android.phone||this.windows.phone,this.tablet=this.apple.tablet||this.android.tablet||this.windows.tablet,"undefined"==typeof window)return this},s=function(){var a=new r;return a.Class=r,a};"undefined"!=typeof module&&module.exports&&"undefined"==typeof window?module.exports=r:"undefined"!=typeof module&&module.exports&&"undefined"!=typeof window?module.exports=s():"function"==typeof define&&define.amd?define("isMobile",[],a.isMobile=s()):a.isMobile=s()}(this);;/*! modernizr 3.2.0 (Custom Build) | MIT *
 * http://modernizr.com/download/?-backgroundcliptext-setclasses !*/
!function(e,n,t){function r(e){var n=_.className,t=Modernizr._config.classPrefix||"";if(x&&(n=n.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+t+"no-js(\\s|$)");n=n.replace(r,"$1"+t+"js$2")}Modernizr._config.enableClasses&&(n+=" "+t+e.join(" "+t),x?_.className.baseVal=n:_.className=n)}function o(e,n){return typeof e===n}function s(){var e,n,t,r,s,i,a;for(var l in C)if(C.hasOwnProperty(l)){if(e=[],n=C[l],n.name&&(e.push(n.name.toLowerCase()),n.options&&n.options.aliases&&n.options.aliases.length))for(t=0;t<n.options.aliases.length;t++)e.push(n.options.aliases[t].toLowerCase());for(r=o(n.fn,"function")?n.fn():n.fn,s=0;s<e.length;s++)i=e[s],a=i.split("."),1===a.length?Modernizr[a[0]]=r:(!Modernizr[a[0]]||Modernizr[a[0]]instanceof Boolean||(Modernizr[a[0]]=new Boolean(Modernizr[a[0]])),Modernizr[a[0]][a[1]]=r),g.push((r?"":"no-")+a.join("-"))}}function i(e,n){return function(){return e.apply(n,arguments)}}function a(e,n,t){var r;for(var s in e)if(e[s]in n)return t===!1?e[s]:(r=n[e[s]],o(r,"function")?i(r,t||n):r);return!1}function l(e,n){return!!~(""+e).indexOf(n)}function f(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):x?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function u(e){return e.replace(/([a-z])-([a-z])/g,function(e,n,t){return n+t.toUpperCase()}).replace(/^-/,"")}function d(e){return e.replace(/([A-Z])/g,function(e,n){return"-"+n.toLowerCase()}).replace(/^ms-/,"-ms-")}function c(){var e=n.body;return e||(e=f(x?"svg":"body"),e.fake=!0),e}function p(e,t,r,o){var s,i,a,l,u="modernizr",d=f("div"),p=c();if(parseInt(r,10))for(;r--;)a=f("div"),a.id=o?o[r]:u+(r+1),d.appendChild(a);return s=f("style"),s.type="text/css",s.id="s"+u,(p.fake?p:d).appendChild(s),p.appendChild(d),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(n.createTextNode(e)),d.id=u,p.fake&&(p.style.background="",p.style.overflow="hidden",l=_.style.overflow,_.style.overflow="hidden",_.appendChild(p)),i=t(d,e),p.fake?(p.parentNode.removeChild(p),_.style.overflow=l,_.offsetHeight):d.parentNode.removeChild(d),!!i}function m(n,r){var o=n.length;if("CSS"in e&&"supports"in e.CSS){for(;o--;)if(e.CSS.supports(d(n[o]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];o--;)s.push("("+d(n[o])+":"+r+")");return s=s.join(" or "),p("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==getComputedStyle(e,null).position})}return t}function h(e,n,r,s){function i(){d&&(delete z.style,delete z.modElem)}if(s=o(s,"undefined")?!1:s,!o(r,"undefined")){var a=m(e,r);if(!o(a,"undefined"))return a}for(var d,c,p,h,v,y=["modernizr","tspan"];!z.style;)d=!0,z.modElem=f(y.shift()),z.style=z.modElem.style;for(p=e.length,c=0;p>c;c++)if(h=e[c],v=z.style[h],l(h,"-")&&(h=u(h)),z.style[h]!==t){if(s||o(r,"undefined"))return i(),"pfx"==n?h:!0;try{z.style[h]=r}catch(g){}if(z.style[h]!=v)return i(),"pfx"==n?h:!0}return i(),!1}function v(e,n,t,r,s){var i=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+b.join(i+" ")+i).split(" ");return o(n,"string")||o(n,"undefined")?h(l,n,r,s):(l=(e+" "+E.join(i+" ")+i).split(" "),a(l,n,t))}function y(e,n,r){return v(e,t,t,n,r)}var g=[],C=[],w={_version:"3.2.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,n){var t=this;setTimeout(function(){n(t[e])},0)},addTest:function(e,n,t){C.push({name:e,fn:n,options:t})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=w,Modernizr=new Modernizr;var _=n.documentElement,x="svg"===_.nodeName.toLowerCase(),S="Moz O ms Webkit",b=w._config.usePrefixes?S.split(" "):[];w._cssomPrefixes=b;var E=w._config.usePrefixes?S.toLowerCase().split(" "):[];w._domPrefixes=E;var P={elem:f("modernizr")};Modernizr._q.push(function(){delete P.elem});var z={style:P.elem.style};Modernizr._q.unshift(function(){delete z.style}),w.testAllProps=v,w.testAllProps=y,Modernizr.addTest("backgroundcliptext",function(){return y("backgroundClip","text")}),s(),r(g),delete w.addTest,delete w.addAsyncTest;for(var N=0;N<Modernizr._q.length;N++)Modernizr._q[N]();e.Modernizr=Modernizr}(window,document);;!function(a,b){"function"==typeof define&&define.amd?
// AMD. Register as an anonymous module unless amdModuleId is set
define([],function(){return a.svg4everybody=b()}):"object"==typeof exports?module.exports=b():a.svg4everybody=b()}(this,function(){/*! svg4everybody v2.0.3 | github.com/jonathantneal/svg4everybody */
function a(a,b){
// if the target exists
if(b){
// create a document fragment to hold the contents of the target
var c=document.createDocumentFragment(),d=!a.getAttribute("viewBox")&&b.getAttribute("viewBox");
// conditionally set the viewBox on the svg
d&&a.setAttribute("viewBox",d);
// copy the contents of the clone into the fragment
for(
// clone the target
var e=b.cloneNode(!0);e.childNodes.length;)c.appendChild(e.firstChild);
// append the fragment into the svg
a.appendChild(c)}}function b(b){
// listen to changes in the request
b.onreadystatechange=function(){
// if the request is ready
if(4===b.readyState){
// get the cached html document
var c=b._cachedDocument;
// ensure the cached html document based on the xhr response
c||(c=b._cachedDocument=document.implementation.createHTMLDocument(""),c.body.innerHTML=b.responseText,b._cachedTarget={}),
// clear the xhr embeds list and embed each item
b._embeds.splice(0).map(function(d){
// get the cached target
var e=b._cachedTarget[d.id];
// ensure the cached target
e||(e=b._cachedTarget[d.id]=c.getElementById(d.id)),
// embed the target into the svg
a(d.svg,e)})}},
// test the ready state change immediately
b.onreadystatechange()}function c(c){function d(){
// while the index exists in the live <use> collection
for(
// get the cached <use> index
var c=0;c<l.length;){
// get the current <use>
var g=l[c],h=g.parentNode;if(h&&/svg/i.test(h.nodeName)){var i=g.getAttribute("xlink:href");if(e&&(!f.validate||f.validate(i,h,g))){
// remove the <use> element
h.removeChild(g);
// parse the src and get the url and id
var m=i.split("#"),n=m.shift(),o=m.join("#");
// if the link is external
if(n.length){
// get the cached xhr request
var p=j[n];
// ensure the xhr request exists
p||(p=j[n]=new XMLHttpRequest,p.open("GET",n),p.send(),p._embeds=[]),
// add the svg and id as an item to the xhr embeds list
p._embeds.push({svg:h,id:o}),
// prepare the xhr ready state change event
b(p)}else
// embed the local id into the svg
a(h,document.getElementById(o))}}else
// increase the index when the previous value was not "valid"
++c}
// continue the interval
k(d,67)}var e,f=Object(c),g=/\bTrident\/[567]\b|\bMSIE (?:9|10)\.0\b/,h=/\bAppleWebKit\/(\d+)\b/,i=/\bEdge\/12\.(\d+)\b/;e="polyfill"in f?f.polyfill:g.test(navigator.userAgent)||(navigator.userAgent.match(i)||[])[1]<10547||(navigator.userAgent.match(h)||[])[1]<537;
// create xhr requests object
var j={},k=window.requestAnimationFrame||setTimeout,l=document.getElementsByTagName("use");
// conditionally start the interval if the polyfill is active
e&&d()}return c});;/**
 * Swiper 6.3.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2020 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: October 30, 2020
 */

 (function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = global || self, global.Swiper = factory());
  }(this, (function () { 'use strict';
  
    function _defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
  
    function _createClass(Constructor, protoProps, staticProps) {
      if (protoProps) _defineProperties(Constructor.prototype, protoProps);
      if (staticProps) _defineProperties(Constructor, staticProps);
      return Constructor;
    }
  
    function _extends() {
      _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];
  
          for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }
  
        return target;
      };
  
      return _extends.apply(this, arguments);
    }
  
    /**
     * SSR Window 3.0.0-alpha.4
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: May 20, 2020
     */
  
    /* eslint-disable no-param-reassign */
    function isObject(obj) {
      return obj !== null && typeof obj === 'object' && 'constructor' in obj && obj.constructor === Object;
    }
  
    function extend(target, src) {
      if (target === void 0) {
        target = {};
      }
  
      if (src === void 0) {
        src = {};
      }
  
      Object.keys(src).forEach(function (key) {
        if (typeof target[key] === 'undefined') target[key] = src[key];else if (isObject(src[key]) && isObject(target[key]) && Object.keys(src[key]).length > 0) {
          extend(target[key], src[key]);
        }
      });
    }
  
    var ssrDocument = {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ''
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      createElementNS: function createElementNS() {
        return {};
      },
      importNode: function importNode() {
        return null;
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      }
    };
  
    function getDocument() {
      var doc = typeof document !== 'undefined' ? document : {};
      extend(doc, ssrDocument);
      return doc;
    }
  
    var ssrWindow = {
      document: ssrDocument,
      navigator: {
        userAgent: ''
      },
      location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: ''
      },
      history: {
        replaceState: function replaceState() {},
        pushState: function pushState() {},
        go: function go() {},
        back: function back() {}
      },
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return '';
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {},
      matchMedia: function matchMedia() {
        return {};
      },
      requestAnimationFrame: function requestAnimationFrame(callback) {
        if (typeof setTimeout === 'undefined') {
          callback();
          return null;
        }
  
        return setTimeout(callback, 0);
      },
      cancelAnimationFrame: function cancelAnimationFrame(id) {
        if (typeof setTimeout === 'undefined') {
          return;
        }
  
        clearTimeout(id);
      }
    };
  
    function getWindow() {
      var win = typeof window !== 'undefined' ? window : {};
      extend(win, ssrWindow);
      return win;
    }
  
    /**
     * Dom7 3.0.0-alpha.7
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * https://framework7.io/docs/dom7.html
     *
     * Copyright 2020, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: July 14, 2020
     */
  
    function _inheritsLoose(subClass, superClass) {
      subClass.prototype = Object.create(superClass.prototype);
      subClass.prototype.constructor = subClass;
      subClass.__proto__ = superClass;
    }
  
    function _getPrototypeOf(o) {
      _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
      return _getPrototypeOf(o);
    }
  
    function _setPrototypeOf(o, p) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  
      return _setPrototypeOf(o, p);
    }
  
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct) return false;
      if (Reflect.construct.sham) return false;
      if (typeof Proxy === "function") return true;
  
      try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
        return true;
      } catch (e) {
        return false;
      }
    }
  
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct(Parent, args, Class) {
          var a = [null];
          a.push.apply(a, args);
          var Constructor = Function.bind.apply(Parent, a);
          var instance = new Constructor();
          if (Class) _setPrototypeOf(instance, Class.prototype);
          return instance;
        };
      }
  
      return _construct.apply(null, arguments);
    }
  
    function _isNativeFunction(fn) {
      return Function.toString.call(fn).indexOf("[native code]") !== -1;
    }
  
    function _wrapNativeSuper(Class) {
      var _cache = typeof Map === "function" ? new Map() : undefined;
  
      _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
  
        if (typeof Class !== "function") {
          throw new TypeError("Super expression must either be null or a function");
        }
  
        if (typeof _cache !== "undefined") {
          if (_cache.has(Class)) return _cache.get(Class);
  
          _cache.set(Class, Wrapper);
        }
  
        function Wrapper() {
          return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
  
        Wrapper.prototype = Object.create(Class.prototype, {
          constructor: {
            value: Wrapper,
            enumerable: false,
            writable: true,
            configurable: true
          }
        });
        return _setPrototypeOf(Wrapper, Class);
      };
  
      return _wrapNativeSuper(Class);
    }
  
    function _assertThisInitialized(self) {
      if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
  
      return self;
    }
    /* eslint-disable no-proto */
  
  
    function makeReactive(obj) {
      var proto = obj.__proto__;
      Object.defineProperty(obj, '__proto__', {
        get: function get() {
          return proto;
        },
        set: function set(value) {
          proto.__proto__ = value;
        }
      });
    }
  
    var Dom7 = /*#__PURE__*/function (_Array) {
      _inheritsLoose(Dom7, _Array);
  
      function Dom7(items) {
        var _this;
  
        _this = _Array.call.apply(_Array, [this].concat(items)) || this;
        makeReactive(_assertThisInitialized(_this));
        return _this;
      }
  
      return Dom7;
    }( /*#__PURE__*/_wrapNativeSuper(Array));
  
    function arrayFlat(arr) {
      if (arr === void 0) {
        arr = [];
      }
  
      var res = [];
      arr.forEach(function (el) {
        if (Array.isArray(el)) {
          res.push.apply(res, arrayFlat(el));
        } else {
          res.push(el);
        }
      });
      return res;
    }
  
    function arrayFilter(arr, callback) {
      return Array.prototype.filter.call(arr, callback);
    }
  
    function arrayUnique(arr) {
      var uniqueArray = [];
  
      for (var i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1) uniqueArray.push(arr[i]);
      }
  
      return uniqueArray;
    }
  
    function qsa(selector, context) {
      if (typeof selector !== 'string') {
        return [selector];
      }
  
      var a = [];
      var res = context.querySelectorAll(selector);
  
      for (var i = 0; i < res.length; i += 1) {
        a.push(res[i]);
      }
  
      return a;
    }
  
    function $(selector, context) {
      var window = getWindow();
      var document = getDocument();
      var arr = [];
  
      if (!context && selector instanceof Dom7) {
        return selector;
      }
  
      if (!selector) {
        return new Dom7(arr);
      }
  
      if (typeof selector === 'string') {
        var html = selector.trim();
  
        if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
          var toCreate = 'div';
          if (html.indexOf('<li') === 0) toCreate = 'ul';
          if (html.indexOf('<tr') === 0) toCreate = 'tbody';
          if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) toCreate = 'tr';
          if (html.indexOf('<tbody') === 0) toCreate = 'table';
          if (html.indexOf('<option') === 0) toCreate = 'select';
          var tempParent = document.createElement(toCreate);
          tempParent.innerHTML = html;
  
          for (var i = 0; i < tempParent.childNodes.length; i += 1) {
            arr.push(tempParent.childNodes[i]);
          }
        } else {
          arr = qsa(selector.trim(), context || document);
        } // arr = qsa(selector, document);
  
      } else if (selector.nodeType || selector === window || selector === document) {
        arr.push(selector);
      } else if (Array.isArray(selector)) {
        if (selector instanceof Dom7) return selector;
        arr = selector;
      }
  
      return new Dom7(arrayUnique(arr));
    }
  
    $.fn = Dom7.prototype;
  
    function addClass() {
      for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
        classes[_key] = arguments[_key];
      }
  
      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      this.forEach(function (el) {
        var _el$classList;
  
        (_el$classList = el.classList).add.apply(_el$classList, classNames);
      });
      return this;
    }
  
    function removeClass() {
      for (var _len2 = arguments.length, classes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        classes[_key2] = arguments[_key2];
      }
  
      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      this.forEach(function (el) {
        var _el$classList2;
  
        (_el$classList2 = el.classList).remove.apply(_el$classList2, classNames);
      });
      return this;
    }
  
    function toggleClass() {
      for (var _len3 = arguments.length, classes = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        classes[_key3] = arguments[_key3];
      }
  
      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      this.forEach(function (el) {
        classNames.forEach(function (className) {
          el.classList.toggle(className);
        });
      });
    }
  
    function hasClass() {
      for (var _len4 = arguments.length, classes = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        classes[_key4] = arguments[_key4];
      }
  
      var classNames = arrayFlat(classes.map(function (c) {
        return c.split(' ');
      }));
      return arrayFilter(this, function (el) {
        return classNames.filter(function (className) {
          return el.classList.contains(className);
        }).length > 0;
      }).length > 0;
    }
  
    function attr(attrs, value) {
      if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) return this[0].getAttribute(attrs);
        return undefined;
      } // Set attrs
  
  
      for (var i = 0; i < this.length; i += 1) {
        if (arguments.length === 2) {
          // String
          this[i].setAttribute(attrs, value);
        } else {
          // Object
          for (var attrName in attrs) {
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
          }
        }
      }
  
      return this;
    }
  
    function removeAttr(attr) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
      }
  
      return this;
    }
  
    function transform(transform) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].style.transform = transform;
      }
  
      return this;
    }
  
    function transition(duration) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].style.transition = typeof duration !== 'string' ? duration + "ms" : duration;
      }
  
      return this;
    }
  
    function on() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
  
      var eventType = args[0],
          targetSelector = args[1],
          listener = args[2],
          capture = args[3];
  
      if (typeof args[1] === 'function') {
        eventType = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
      }
  
      if (!capture) capture = false;
  
      function handleLiveEvent(e) {
        var target = e.target;
        if (!target) return;
        var eventData = e.target.dom7EventData || [];
  
        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }
  
        if ($(target).is(targetSelector)) listener.apply(target, eventData);else {
          var _parents = $(target).parents(); // eslint-disable-line
  
  
          for (var k = 0; k < _parents.length; k += 1) {
            if ($(_parents[k]).is(targetSelector)) listener.apply(_parents[k], eventData);
          }
        }
      }
  
      function handleEvent(e) {
        var eventData = e && e.target ? e.target.dom7EventData || [] : [];
  
        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }
  
        listener.apply(this, eventData);
      }
  
      var events = eventType.split(' ');
      var j;
  
      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];
  
        if (!targetSelector) {
          for (j = 0; j < events.length; j += 1) {
            var event = events[j];
            if (!el.dom7Listeners) el.dom7Listeners = {};
            if (!el.dom7Listeners[event]) el.dom7Listeners[event] = [];
            el.dom7Listeners[event].push({
              listener: listener,
              proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
          }
        } else {
          // Live events
          for (j = 0; j < events.length; j += 1) {
            var _event = events[j];
            if (!el.dom7LiveListeners) el.dom7LiveListeners = {};
            if (!el.dom7LiveListeners[_event]) el.dom7LiveListeners[_event] = [];
  
            el.dom7LiveListeners[_event].push({
              listener: listener,
              proxyListener: handleLiveEvent
            });
  
            el.addEventListener(_event, handleLiveEvent, capture);
          }
        }
      }
  
      return this;
    }
  
    function off() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }
  
      var eventType = args[0],
          targetSelector = args[1],
          listener = args[2],
          capture = args[3];
  
      if (typeof args[1] === 'function') {
        eventType = args[0];
        listener = args[1];
        capture = args[2];
        targetSelector = undefined;
      }
  
      if (!capture) capture = false;
      var events = eventType.split(' ');
  
      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];
  
        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];
          var handlers = void 0;
  
          if (!targetSelector && el.dom7Listeners) {
            handlers = el.dom7Listeners[event];
          } else if (targetSelector && el.dom7LiveListeners) {
            handlers = el.dom7LiveListeners[event];
          }
  
          if (handlers && handlers.length) {
            for (var k = handlers.length - 1; k >= 0; k -= 1) {
              var handler = handlers[k];
  
              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              }
            }
          }
        }
      }
  
      return this;
    }
  
    function trigger() {
      var window = getWindow();
  
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
  
      var events = args[0].split(' ');
      var eventData = args[1];
  
      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];
  
        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];
  
          if (window.CustomEvent) {
            var evt = new window.CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
            el.dom7EventData = args.filter(function (data, dataIndex) {
              return dataIndex > 0;
            });
            el.dispatchEvent(evt);
            el.dom7EventData = [];
            delete el.dom7EventData;
          }
        }
      }
  
      return this;
    }
  
    function transitionEnd(callback) {
      var dom = this;
  
      function fireCallBack(e) {
        if (e.target !== this) return;
        callback.call(this, e);
        dom.off('transitionend', fireCallBack);
      }
  
      if (callback) {
        dom.on('transitionend', fireCallBack);
      }
  
      return this;
    }
  
    function outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          var _styles = this.styles();
  
          return this[0].offsetWidth + parseFloat(_styles.getPropertyValue('margin-right')) + parseFloat(_styles.getPropertyValue('margin-left'));
        }
  
        return this[0].offsetWidth;
      }
  
      return null;
    }
  
    function outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          var _styles2 = this.styles();
  
          return this[0].offsetHeight + parseFloat(_styles2.getPropertyValue('margin-top')) + parseFloat(_styles2.getPropertyValue('margin-bottom'));
        }
  
        return this[0].offsetHeight;
      }
  
      return null;
    }
  
    function offset() {
      if (this.length > 0) {
        var window = getWindow();
        var document = getDocument();
        var el = this[0];
        var box = el.getBoundingClientRect();
        var body = document.body;
        var clientTop = el.clientTop || body.clientTop || 0;
        var clientLeft = el.clientLeft || body.clientLeft || 0;
        var scrollTop = el === window ? window.scrollY : el.scrollTop;
        var scrollLeft = el === window ? window.scrollX : el.scrollLeft;
        return {
          top: box.top + scrollTop - clientTop,
          left: box.left + scrollLeft - clientLeft
        };
      }
  
      return null;
    }
  
    function styles() {
      var window = getWindow();
      if (this[0]) return window.getComputedStyle(this[0], null);
      return {};
    }
  
    function css(props, value) {
      var window = getWindow();
      var i;
  
      if (arguments.length === 1) {
        if (typeof props === 'string') {
          // .css('width')
          if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(props);
        } else {
          // .css({ width: '100px' })
          for (i = 0; i < this.length; i += 1) {
            for (var _prop in props) {
              this[i].style[_prop] = props[_prop];
            }
          }
  
          return this;
        }
      }
  
      if (arguments.length === 2 && typeof props === 'string') {
        // .css('width', '100px')
        for (i = 0; i < this.length; i += 1) {
          this[i].style[props] = value;
        }
  
        return this;
      }
  
      return this;
    }
  
    function each(callback) {
      if (!callback) return this;
      this.forEach(function (el, index) {
        callback.apply(el, [el, index]);
      });
      return this;
    }
  
    function filter(callback) {
      var result = arrayFilter(this, callback);
      return $(result);
    }
  
    function html(html) {
      if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : null;
      }
  
      for (var i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
      }
  
      return this;
    }
  
    function text(text) {
      if (typeof text === 'undefined') {
        return this[0] ? this[0].textContent.trim() : null;
      }
  
      for (var i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
      }
  
      return this;
    }
  
    function is(selector) {
      var window = getWindow();
      var document = getDocument();
      var el = this[0];
      var compareWith;
      var i;
      if (!el || typeof selector === 'undefined') return false;
  
      if (typeof selector === 'string') {
        if (el.matches) return el.matches(selector);
        if (el.webkitMatchesSelector) return el.webkitMatchesSelector(selector);
        if (el.msMatchesSelector) return el.msMatchesSelector(selector);
        compareWith = $(selector);
  
        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }
  
        return false;
      }
  
      if (selector === document) {
        return el === document;
      }
  
      if (selector === window) {
        return el === window;
      }
  
      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;
  
        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) return true;
        }
  
        return false;
      }
  
      return false;
    }
  
    function index() {
      var child = this[0];
      var i;
  
      if (child) {
        i = 0; // eslint-disable-next-line
  
        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) i += 1;
        }
  
        return i;
      }
  
      return undefined;
    }
  
    function eq(index) {
      if (typeof index === 'undefined') return this;
      var length = this.length;
  
      if (index > length - 1) {
        return $([]);
      }
  
      if (index < 0) {
        var returnIndex = length + index;
        if (returnIndex < 0) return $([]);
        return $([this[returnIndex]]);
      }
  
      return $([this[index]]);
    }
  
    function append() {
      var newChild;
      var document = getDocument();
  
      for (var k = 0; k < arguments.length; k += 1) {
        newChild = k < 0 || arguments.length <= k ? undefined : arguments[k];
  
        for (var i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            var tempDiv = document.createElement('div');
            tempDiv.innerHTML = newChild;
  
            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (var j = 0; j < newChild.length; j += 1) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
      }
  
      return this;
    }
  
    function prepend(newChild) {
      var document = getDocument();
      var i;
      var j;
  
      for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = document.createElement('div');
          tempDiv.innerHTML = newChild;
  
          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
          }
        } else if (newChild instanceof Dom7) {
          for (j = 0; j < newChild.length; j += 1) {
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
          }
        } else {
          this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
      }
  
      return this;
    }
  
    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
            return $([this[0].nextElementSibling]);
          }
  
          return $([]);
        }
  
        if (this[0].nextElementSibling) return $([this[0].nextElementSibling]);
        return $([]);
      }
  
      return $([]);
    }
  
    function nextAll(selector) {
      var nextEls = [];
      var el = this[0];
      if (!el) return $([]);
  
      while (el.nextElementSibling) {
        var _next = el.nextElementSibling; // eslint-disable-line
  
        if (selector) {
          if ($(_next).is(selector)) nextEls.push(_next);
        } else nextEls.push(_next);
  
        el = _next;
      }
  
      return $(nextEls);
    }
  
    function prev(selector) {
      if (this.length > 0) {
        var el = this[0];
  
        if (selector) {
          if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
            return $([el.previousElementSibling]);
          }
  
          return $([]);
        }
  
        if (el.previousElementSibling) return $([el.previousElementSibling]);
        return $([]);
      }
  
      return $([]);
    }
  
    function prevAll(selector) {
      var prevEls = [];
      var el = this[0];
      if (!el) return $([]);
  
      while (el.previousElementSibling) {
        var _prev = el.previousElementSibling; // eslint-disable-line
  
        if (selector) {
          if ($(_prev).is(selector)) prevEls.push(_prev);
        } else prevEls.push(_prev);
  
        el = _prev;
      }
  
      return $(prevEls);
    }
  
    function parent(selector) {
      var parents = []; // eslint-disable-line
  
      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) parents.push(this[i].parentNode);
          } else {
            parents.push(this[i].parentNode);
          }
        }
      }
  
      return $(parents);
    }
  
    function parents(selector) {
      var parents = []; // eslint-disable-line
  
      for (var i = 0; i < this.length; i += 1) {
        var _parent = this[i].parentNode; // eslint-disable-line
  
        while (_parent) {
          if (selector) {
            if ($(_parent).is(selector)) parents.push(_parent);
          } else {
            parents.push(_parent);
          }
  
          _parent = _parent.parentNode;
        }
      }
  
      return $(parents);
    }
  
    function closest(selector) {
      var closest = this; // eslint-disable-line
  
      if (typeof selector === 'undefined') {
        return $([]);
      }
  
      if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
      }
  
      return closest;
    }
  
    function find(selector) {
      var foundElements = [];
  
      for (var i = 0; i < this.length; i += 1) {
        var found = this[i].querySelectorAll(selector);
  
        for (var j = 0; j < found.length; j += 1) {
          foundElements.push(found[j]);
        }
      }
  
      return $(foundElements);
    }
  
    function children(selector) {
      var children = []; // eslint-disable-line
  
      for (var i = 0; i < this.length; i += 1) {
        var childNodes = this[i].children;
  
        for (var j = 0; j < childNodes.length; j += 1) {
          if (!selector || $(childNodes[j]).is(selector)) {
            children.push(childNodes[j]);
          }
        }
      }
  
      return $(children);
    }
  
    function remove() {
      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode) this[i].parentNode.removeChild(this[i]);
      }
  
      return this;
    }
  
    var Methods = {
      addClass: addClass,
      removeClass: removeClass,
      hasClass: hasClass,
      toggleClass: toggleClass,
      attr: attr,
      removeAttr: removeAttr,
      transform: transform,
      transition: transition,
      on: on,
      off: off,
      trigger: trigger,
      transitionEnd: transitionEnd,
      outerWidth: outerWidth,
      outerHeight: outerHeight,
      styles: styles,
      offset: offset,
      css: css,
      each: each,
      html: html,
      text: text,
      is: is,
      index: index,
      eq: eq,
      append: append,
      prepend: prepend,
      next: next,
      nextAll: nextAll,
      prev: prev,
      prevAll: prevAll,
      parent: parent,
      parents: parents,
      closest: closest,
      find: find,
      children: children,
      filter: filter,
      remove: remove
    };
    Object.keys(Methods).forEach(function (methodName) {
      $.fn[methodName] = Methods[methodName];
    });
  
    function deleteProps(obj) {
      var object = obj;
      Object.keys(object).forEach(function (key) {
        try {
          object[key] = null;
        } catch (e) {// no getter for object
        }
  
        try {
          delete object[key];
        } catch (e) {// something got wrong
        }
      });
    }
  
    function nextTick(callback, delay) {
      if (delay === void 0) {
        delay = 0;
      }
  
      return setTimeout(callback, delay);
    }
  
    function now() {
      return Date.now();
    }
  
    function getTranslate(el, axis) {
      if (axis === void 0) {
        axis = 'x';
      }
  
      var window = getWindow();
      var matrix;
      var curTransform;
      var transformMatrix;
      var curStyle = window.getComputedStyle(el, null);
  
      if (window.WebKitCSSMatrix) {
        curTransform = curStyle.transform || curStyle.webkitTransform;
  
        if (curTransform.split(',').length > 6) {
          curTransform = curTransform.split(', ').map(function (a) {
            return a.replace(',', '.');
          }).join(', ');
        } // Some old versions of Webkit choke when 'none' is passed; pass
        // empty string instead in this case
  
  
        transformMatrix = new window.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
      } else {
        transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
        matrix = transformMatrix.toString().split(',');
      }
  
      if (axis === 'x') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m41; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[12]); // Normal Browsers
          else curTransform = parseFloat(matrix[4]);
      }
  
      if (axis === 'y') {
        // Latest Chrome and webkits Fix
        if (window.WebKitCSSMatrix) curTransform = transformMatrix.m42; // Crazy IE10 Matrix
        else if (matrix.length === 16) curTransform = parseFloat(matrix[13]); // Normal Browsers
          else curTransform = parseFloat(matrix[5]);
      }
  
      return curTransform || 0;
    }
  
    function isObject$1(o) {
      return typeof o === 'object' && o !== null && o.constructor && o.constructor === Object;
    }
  
    function extend$1() {
      var to = Object(arguments.length <= 0 ? undefined : arguments[0]);
  
      for (var i = 1; i < arguments.length; i += 1) {
        var nextSource = i < 0 || arguments.length <= i ? undefined : arguments[i];
  
        if (nextSource !== undefined && nextSource !== null) {
          var keysArray = Object.keys(Object(nextSource));
  
          for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
            var nextKey = keysArray[nextIndex];
            var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);
  
            if (desc !== undefined && desc.enumerable) {
              if (isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
                extend$1(to[nextKey], nextSource[nextKey]);
              } else if (!isObject$1(to[nextKey]) && isObject$1(nextSource[nextKey])) {
                to[nextKey] = {};
                extend$1(to[nextKey], nextSource[nextKey]);
              } else {
                to[nextKey] = nextSource[nextKey];
              }
            }
          }
        }
      }
  
      return to;
    }
  
    function bindModuleMethods(instance, obj) {
      Object.keys(obj).forEach(function (key) {
        if (isObject$1(obj[key])) {
          Object.keys(obj[key]).forEach(function (subKey) {
            if (typeof obj[key][subKey] === 'function') {
              obj[key][subKey] = obj[key][subKey].bind(instance);
            }
          });
        }
  
        instance[key] = obj[key];
      });
    }
  
    var support;
  
    function calcSupport() {
      var window = getWindow();
      var document = getDocument();
      return {
        touch: !!('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch),
        pointerEvents: !!window.PointerEvent && 'maxTouchPoints' in window.navigator && window.navigator.maxTouchPoints >= 0,
        observer: function checkObserver() {
          return 'MutationObserver' in window || 'WebkitMutationObserver' in window;
        }(),
        passiveListener: function checkPassiveListener() {
          var supportsPassive = false;
  
          try {
            var opts = Object.defineProperty({}, 'passive', {
              // eslint-disable-next-line
              get: function get() {
                supportsPassive = true;
              }
            });
            window.addEventListener('testPassiveListener', null, opts);
          } catch (e) {// No support
          }
  
          return supportsPassive;
        }(),
        gestures: function checkGestures() {
          return 'ongesturestart' in window;
        }()
      };
    }
  
    function getSupport() {
      if (!support) {
        support = calcSupport();
      }
  
      return support;
    }
  
    var device;
  
    function calcDevice(_temp) {
      var _ref = _temp === void 0 ? {} : _temp,
          userAgent = _ref.userAgent;
  
      var support = getSupport();
      var window = getWindow();
      var platform = window.navigator.platform;
      var ua = userAgent || window.navigator.userAgent;
      var device = {
        ios: false,
        android: false
      };
      var screenWidth = window.screen.width;
      var screenHeight = window.screen.height;
      var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line
  
      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      var windows = platform === 'Win32';
      var macos = platform === 'MacIntel'; // iPadOs 13 fix
  
      var iPadScreens = ['1024x1366', '1366x1024', '834x1194', '1194x834', '834x1112', '1112x834', '768x1024', '1024x768', '820x1180', '1180x820', '810x1080', '1080x810'];
  
      if (!ipad && macos && support.touch && iPadScreens.indexOf(screenWidth + "x" + screenHeight) >= 0) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        if (!ipad) ipad = [0, 1, '13_0_0'];
        macos = false;
      } // Android
  
  
      if (android && !windows) {
        device.os = 'android';
        device.android = true;
      }
  
      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      } // Export object
  
  
      return device;
    }
  
    function getDevice(overrides) {
      if (overrides === void 0) {
        overrides = {};
      }
  
      if (!device) {
        device = calcDevice(overrides);
      }
  
      return device;
    }
  
    var browser;
  
    function calcBrowser() {
      var window = getWindow();
  
      function isSafari() {
        var ua = window.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }
  
      return {
        isEdge: !!window.navigator.userAgent.match(/Edge/g),
        isSafari: isSafari(),
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(window.navigator.userAgent)
      };
    }
  
    function getBrowser() {
      if (!browser) {
        browser = calcBrowser();
      }
  
      return browser;
    }
  
    var Resize = {
      name: 'resize',
      create: function create() {
        var swiper = this;
        extend$1(swiper, {
          resize: {
            resizeHandler: function resizeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              swiper.emit('beforeResize');
              swiper.emit('resize');
            },
            orientationChangeHandler: function orientationChangeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) return;
              swiper.emit('orientationchange');
            }
          }
        });
      },
      on: {
        init: function init(swiper) {
          var window = getWindow(); // Emit resize
  
          window.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange
  
          window.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        },
        destroy: function destroy(swiper) {
          var window = getWindow();
          window.removeEventListener('resize', swiper.resize.resizeHandler);
          window.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        }
      }
    };
  
    var Observer = {
      attach: function attach(target, options) {
        if (options === void 0) {
          options = {};
        }
  
        var window = getWindow();
        var swiper = this;
        var ObserverFunc = window.MutationObserver || window.WebkitMutationObserver;
        var observer = new ObserverFunc(function (mutations) {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (mutations.length === 1) {
            swiper.emit('observerUpdate', mutations[0]);
            return;
          }
  
          var observerUpdate = function observerUpdate() {
            swiper.emit('observerUpdate', mutations[0]);
          };
  
          if (window.requestAnimationFrame) {
            window.requestAnimationFrame(observerUpdate);
          } else {
            window.setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        swiper.observer.observers.push(observer);
      },
      init: function init() {
        var swiper = this;
        if (!swiper.support.observer || !swiper.params.observer) return;
  
        if (swiper.params.observeParents) {
          var containerParents = swiper.$el.parents();
  
          for (var i = 0; i < containerParents.length; i += 1) {
            swiper.observer.attach(containerParents[i]);
          }
        } // Observe container
  
  
        swiper.observer.attach(swiper.$el[0], {
          childList: swiper.params.observeSlideChildren
        }); // Observe wrapper
  
        swiper.observer.attach(swiper.$wrapperEl[0], {
          attributes: false
        });
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.observers.forEach(function (observer) {
          observer.disconnect();
        });
        swiper.observer.observers = [];
      }
    };
    var Observer$1 = {
      name: 'observer',
      params: {
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          observer: _extends(_extends({}, Observer), {}, {
            observers: []
          })
        });
      },
      on: {
        init: function init(swiper) {
          swiper.observer.init();
        },
        destroy: function destroy(swiper) {
          swiper.observer.destroy();
        }
      }
    };
  
    var modular = {
      useParams: function useParams(instanceParams) {
        var instance = this;
        if (!instance.modules) return;
        Object.keys(instance.modules).forEach(function (moduleName) {
          var module = instance.modules[moduleName]; // Extend params
  
          if (module.params) {
            extend$1(instanceParams, module.params);
          }
        });
      },
      useModules: function useModules(modulesParams) {
        if (modulesParams === void 0) {
          modulesParams = {};
        }
  
        var instance = this;
        if (!instance.modules) return;
        Object.keys(instance.modules).forEach(function (moduleName) {
          var module = instance.modules[moduleName];
          var moduleParams = modulesParams[moduleName] || {}; // Add event listeners
  
          if (module.on && instance.on) {
            Object.keys(module.on).forEach(function (moduleEventName) {
              instance.on(moduleEventName, module.on[moduleEventName]);
            });
          } // Module create callback
  
  
          if (module.create) {
            module.create.bind(instance)(moduleParams);
          }
        });
      }
    };
  
    /* eslint-disable no-underscore-dangle */
    var eventsEmitter = {
      on: function on(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;
        var method = priority ? 'unshift' : 'push';
        events.split(' ').forEach(function (event) {
          if (!self.eventsListeners[event]) self.eventsListeners[event] = [];
          self.eventsListeners[event][method](handler);
        });
        return self;
      },
      once: function once(events, handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;
  
        function onceHandler() {
          self.off(events, onceHandler);
  
          if (onceHandler.__emitterProxy) {
            delete onceHandler.__emitterProxy;
          }
  
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
  
          handler.apply(self, args);
        }
  
        onceHandler.__emitterProxy = handler;
        return self.on(events, onceHandler, priority);
      },
      onAny: function onAny(handler, priority) {
        var self = this;
        if (typeof handler !== 'function') return self;
        var method = priority ? 'unshift' : 'push';
  
        if (self.eventsAnyListeners.indexOf(handler) < 0) {
          self.eventsAnyListeners[method](handler);
        }
  
        return self;
      },
      offAny: function offAny(handler) {
        var self = this;
        if (!self.eventsAnyListeners) return self;
        var index = self.eventsAnyListeners.indexOf(handler);
  
        if (index >= 0) {
          self.eventsAnyListeners.splice(index, 1);
        }
  
        return self;
      },
      off: function off(events, handler) {
        var self = this;
        if (!self.eventsListeners) return self;
        events.split(' ').forEach(function (event) {
          if (typeof handler === 'undefined') {
            self.eventsListeners[event] = [];
          } else if (self.eventsListeners[event]) {
            self.eventsListeners[event].forEach(function (eventHandler, index) {
              if (eventHandler === handler || eventHandler.__emitterProxy && eventHandler.__emitterProxy === handler) {
                self.eventsListeners[event].splice(index, 1);
              }
            });
          }
        });
        return self;
      },
      emit: function emit() {
        var self = this;
        if (!self.eventsListeners) return self;
        var events;
        var data;
        var context;
  
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
  
        if (typeof args[0] === 'string' || Array.isArray(args[0])) {
          events = args[0];
          data = args.slice(1, args.length);
          context = self;
        } else {
          events = args[0].events;
          data = args[0].data;
          context = args[0].context || self;
        }
  
        data.unshift(context);
        var eventsArray = Array.isArray(events) ? events : events.split(' ');
        eventsArray.forEach(function (event) {
          if (self.eventsAnyListeners && self.eventsAnyListeners.length) {
            self.eventsAnyListeners.forEach(function (eventHandler) {
              eventHandler.apply(context, [event].concat(data));
            });
          }
  
          if (self.eventsListeners && self.eventsListeners[event]) {
            var handlers = [];
            self.eventsListeners[event].forEach(function (eventHandler) {
              handlers.push(eventHandler);
            });
            handlers.forEach(function (eventHandler) {
              eventHandler.apply(context, data);
            });
          }
        });
        return self;
      }
    };
  
    function updateSize() {
      var swiper = this;
      var width;
      var height;
      var $el = swiper.$el;
  
      if (typeof swiper.params.width !== 'undefined' && swiper.params.width !== null) {
        width = swiper.params.width;
      } else {
        width = $el[0].clientWidth;
      }
  
      if (typeof swiper.params.height !== 'undefined' && swiper.params.width !== null) {
        height = swiper.params.height;
      } else {
        height = $el[0].clientHeight;
      }
  
      if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
        return;
      } // Subtract paddings
  
  
      width = width - parseInt($el.css('padding-left') || 0, 10) - parseInt($el.css('padding-right') || 0, 10);
      height = height - parseInt($el.css('padding-top') || 0, 10) - parseInt($el.css('padding-bottom') || 0, 10);
      if (Number.isNaN(width)) width = 0;
      if (Number.isNaN(height)) height = 0;
      extend$1(swiper, {
        width: width,
        height: height,
        size: swiper.isHorizontal() ? width : height
      });
    }
  
    function updateSlides() {
      var swiper = this;
      var window = getWindow();
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl,
          swiperSize = swiper.size,
          rtl = swiper.rtlTranslate,
          wrongRTL = swiper.wrongRTL;
      var isVirtual = swiper.virtual && params.virtual.enabled;
      var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
      var slides = $wrapperEl.children("." + swiper.params.slideClass);
      var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
      var snapGrid = [];
      var slidesGrid = [];
      var slidesSizesGrid = [];
  
      function slidesForMargin(slideEl, slideIndex) {
        if (!params.cssMode) return true;
  
        if (slideIndex === slides.length - 1) {
          return false;
        }
  
        return true;
      }
  
      var offsetBefore = params.slidesOffsetBefore;
  
      if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
      }
  
      var offsetAfter = params.slidesOffsetAfter;
  
      if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
      }
  
      var previousSnapGridLength = swiper.snapGrid.length;
      var previousSlidesGridLength = swiper.snapGrid.length;
      var spaceBetween = params.spaceBetween;
      var slidePosition = -offsetBefore;
      var prevSlideSize = 0;
      var index = 0;
  
      if (typeof swiperSize === 'undefined') {
        return;
      }
  
      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
      }
  
      swiper.virtualSize = -spaceBetween; // reset margins
  
      if (rtl) slides.css({
        marginLeft: '',
        marginTop: ''
      });else slides.css({
        marginRight: '',
        marginBottom: ''
      });
      var slidesNumberEvenToRows;
  
      if (params.slidesPerColumn > 1) {
        if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
          slidesNumberEvenToRows = slidesLength;
        } else {
          slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
        }
  
        if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
        }
      } // Calc slides
  
  
      var slideSize;
      var slidesPerColumn = params.slidesPerColumn;
      var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
      var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);
  
      for (var i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        var slide = slides.eq(i);
  
        if (params.slidesPerColumn > 1) {
          // Set slides order
          var newSlideOrderIndex = void 0;
          var column = void 0;
          var row = void 0;
  
          if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
            var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
            var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
            var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
            slide.css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex
            });
          } else if (params.slidesPerColumnFill === 'column') {
            column = Math.floor(i / slidesPerColumn);
            row = i - column * slidesPerColumn;
  
            if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
              row += 1;
  
              if (row >= slidesPerColumn) {
                row = 0;
                column += 1;
              }
            }
          } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
          }
  
          slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
        }
  
        if (slide.css('display') === 'none') continue; // eslint-disable-line
  
        if (params.slidesPerView === 'auto') {
          var slideStyles = window.getComputedStyle(slide[0], null);
          var currentTransform = slide[0].style.transform;
          var currentWebKitTransform = slide[0].style.webkitTransform;
  
          if (currentTransform) {
            slide[0].style.transform = 'none';
          }
  
          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = 'none';
          }
  
          if (params.roundLengths) {
            slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
          } else {
            // eslint-disable-next-line
            if (swiper.isHorizontal()) {
              var width = parseFloat(slideStyles.getPropertyValue('width') || 0);
              var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left') || 0);
              var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right') || 0);
              var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left') || 0);
              var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right') || 0);
              var boxSizing = slideStyles.getPropertyValue('box-sizing');
  
              if (boxSizing && boxSizing === 'border-box') {
                slideSize = width + marginLeft + marginRight;
              } else {
                var _slide$ = slide[0],
                    clientWidth = _slide$.clientWidth,
                    offsetWidth = _slide$.offsetWidth;
                slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight + (offsetWidth - clientWidth);
              }
            } else {
              var height = parseFloat(slideStyles.getPropertyValue('height') || 0);
              var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top') || 0);
              var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom') || 0);
              var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top') || 0);
              var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom') || 0);
  
              var _boxSizing = slideStyles.getPropertyValue('box-sizing');
  
              if (_boxSizing && _boxSizing === 'border-box') {
                slideSize = height + marginTop + marginBottom;
              } else {
                var _slide$2 = slide[0],
                    clientHeight = _slide$2.clientHeight,
                    offsetHeight = _slide$2.offsetHeight;
                slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom + (offsetHeight - clientHeight);
              }
            }
          }
  
          if (currentTransform) {
            slide[0].style.transform = currentTransform;
          }
  
          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = currentWebKitTransform;
          }
  
          if (params.roundLengths) slideSize = Math.floor(slideSize);
        } else {
          slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;
          if (params.roundLengths) slideSize = Math.floor(slideSize);
  
          if (slides[i]) {
            if (swiper.isHorizontal()) {
              slides[i].style.width = slideSize + "px";
            } else {
              slides[i].style.height = slideSize + "px";
            }
          }
        }
  
        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }
  
        slidesSizesGrid.push(slideSize);
  
        if (params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;
          if (prevSlideSize === 0 && i !== 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (i === 0) slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          if (Math.abs(slidePosition) < 1 / 1000) slidePosition = 0;
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if (index % params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths) slidePosition = Math.floor(slidePosition);
          if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) snapGrid.push(slidePosition);
          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }
  
        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
      }
  
      swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
      var newSlidesGrid;
  
      if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px"
        });
      }
  
      if (params.setWrapperSize) {
        if (swiper.isHorizontal()) $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px"
        });else $wrapperEl.css({
          height: swiper.virtualSize + params.spaceBetween + "px"
        });
      }
  
      if (params.slidesPerColumn > 1) {
        swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;
        if (swiper.isHorizontal()) $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px"
        });else $wrapperEl.css({
          height: swiper.virtualSize + params.spaceBetween + "px"
        });
  
        if (params.centeredSlides) {
          newSlidesGrid = [];
  
          for (var _i = 0; _i < snapGrid.length; _i += 1) {
            var slidesGridItem = snapGrid[_i];
            if (params.roundLengths) slidesGridItem = Math.floor(slidesGridItem);
            if (snapGrid[_i] < swiper.virtualSize + snapGrid[0]) newSlidesGrid.push(slidesGridItem);
          }
  
          snapGrid = newSlidesGrid;
        }
      } // Remove last grid elements depending on width
  
  
      if (!params.centeredSlides) {
        newSlidesGrid = [];
  
        for (var _i2 = 0; _i2 < snapGrid.length; _i2 += 1) {
          var _slidesGridItem = snapGrid[_i2];
          if (params.roundLengths) _slidesGridItem = Math.floor(_slidesGridItem);
  
          if (snapGrid[_i2] <= swiper.virtualSize - swiperSize) {
            newSlidesGrid.push(_slidesGridItem);
          }
        }
  
        snapGrid = newSlidesGrid;
  
        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper.virtualSize - swiperSize);
        }
      }
  
      if (snapGrid.length === 0) snapGrid = [0];
  
      if (params.spaceBetween !== 0) {
        if (swiper.isHorizontal()) {
          if (rtl) slides.filter(slidesForMargin).css({
            marginLeft: spaceBetween + "px"
          });else slides.filter(slidesForMargin).css({
            marginRight: spaceBetween + "px"
          });
        } else slides.filter(slidesForMargin).css({
          marginBottom: spaceBetween + "px"
        });
      }
  
      if (params.centeredSlides && params.centeredSlidesBounds) {
        var allSlidesSize = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        var maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(function (snap) {
          if (snap < 0) return -offsetBefore;
          if (snap > maxSnap) return maxSnap + offsetAfter;
          return snap;
        });
      }
  
      if (params.centerInsufficientSlides) {
        var _allSlidesSize = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          _allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        _allSlidesSize -= params.spaceBetween;
  
        if (_allSlidesSize < swiperSize) {
          var allSlidesOffset = (swiperSize - _allSlidesSize) / 2;
          snapGrid.forEach(function (snap, snapIndex) {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach(function (snap, snapIndex) {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }
  
      extend$1(swiper, {
        slides: slides,
        snapGrid: snapGrid,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid
      });
  
      if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
      }
  
      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) swiper.checkOverflow();
        swiper.emit('snapGridLengthChange');
      }
  
      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
      }
  
      if (params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateSlidesOffset();
      }
    }
  
    function updateAutoHeight(speed) {
      var swiper = this;
      var activeSlides = [];
      var newHeight = 0;
      var i;
  
      if (typeof speed === 'number') {
        swiper.setTransition(speed);
      } else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
      } // Find slides currently in view
  
  
      if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
          swiper.visibleSlides.each(function (slide) {
            activeSlides.push(slide);
          });
        } else {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            var index = swiper.activeIndex + i;
            if (index > swiper.slides.length) break;
            activeSlides.push(swiper.slides.eq(index)[0]);
          }
        }
      } else {
        activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
      } // Find new height from highest slide in view
  
  
      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
          var height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      } // Update Height
  
  
      if (newHeight) swiper.$wrapperEl.css('height', newHeight + "px");
    }
  
    function updateSlidesOffset() {
      var swiper = this;
      var slides = swiper.slides;
  
      for (var i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
      }
    }
  
    function updateSlidesProgress(translate) {
      if (translate === void 0) {
        translate = this && this.translate || 0;
      }
  
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides,
          rtl = swiper.rtlTranslate;
      if (slides.length === 0) return;
      if (typeof slides[0].swiperSlideOffset === 'undefined') swiper.updateSlidesOffset();
      var offsetCenter = -translate;
      if (rtl) offsetCenter = translate; // Visible Slides
  
      slides.removeClass(params.slideVisibleClass);
      swiper.visibleSlidesIndexes = [];
      swiper.visibleSlides = [];
  
      for (var i = 0; i < slides.length; i += 1) {
        var slide = slides[i];
        var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);
  
        if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
          var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
          var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
          var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;
  
          if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
          }
        }
  
        slide.progress = rtl ? -slideProgress : slideProgress;
      }
  
      swiper.visibleSlides = $(swiper.visibleSlides);
    }
  
    function updateProgress(translate) {
      var swiper = this;
  
      if (typeof translate === 'undefined') {
        var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line
  
        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
      }
  
      var params = swiper.params;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      var progress = swiper.progress,
          isBeginning = swiper.isBeginning,
          isEnd = swiper.isEnd;
      var wasBeginning = isBeginning;
      var wasEnd = isEnd;
  
      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
      }
  
      extend$1(swiper, {
        progress: progress,
        isBeginning: isBeginning,
        isEnd: isEnd
      });
      if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) swiper.updateSlidesProgress(translate);
  
      if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
      }
  
      if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
      }
  
      if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper.emit('fromEdge');
      }
  
      swiper.emit('progress', progress);
    }
  
    function updateSlidesClasses() {
      var swiper = this;
      var slides = swiper.slides,
          params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex,
          realIndex = swiper.realIndex;
      var isVirtual = swiper.virtual && params.virtual.enabled;
      slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
      var activeSlide;
  
      if (isVirtual) {
        activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
      } else {
        activeSlide = slides.eq(activeIndex);
      } // Active classes
  
  
      activeSlide.addClass(params.slideActiveClass);
  
      if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
        }
      } // Next Slide
  
  
      var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);
  
      if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
      } // Prev Slide
  
  
      var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);
  
      if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
      }
  
      if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
        }
  
        if (prevSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
        }
      }
  
      swiper.emitSlidesClasses();
    }
  
    function updateActiveIndex(newActiveIndex) {
      var swiper = this;
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      var slidesGrid = swiper.slidesGrid,
          snapGrid = swiper.snapGrid,
          params = swiper.params,
          previousIndex = swiper.activeIndex,
          previousRealIndex = swiper.realIndex,
          previousSnapIndex = swiper.snapIndex;
      var activeIndex = newActiveIndex;
      var snapIndex;
  
      if (typeof activeIndex === 'undefined') {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
              activeIndex = i;
            } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
              activeIndex = i + 1;
            }
          } else if (translate >= slidesGrid[i]) {
            activeIndex = i;
          }
        } // Normalize slideIndex
  
  
        if (params.normalizeSlideIndex) {
          if (activeIndex < 0 || typeof activeIndex === 'undefined') activeIndex = 0;
        }
      }
  
      if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
      } else {
        var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }
  
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  
      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper.snapIndex = snapIndex;
          swiper.emit('snapIndexChange');
        }
  
        return;
      } // Get real index
  
  
      var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
      extend$1(swiper, {
        snapIndex: snapIndex,
        realIndex: realIndex,
        previousIndex: previousIndex,
        activeIndex: activeIndex
      });
      swiper.emit('activeIndexChange');
      swiper.emit('snapIndexChange');
  
      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }
  
      if (swiper.initialized || swiper.params.runCallbacksOnInit) {
        swiper.emit('slideChange');
      }
    }
  
    function updateClickedSlide(e) {
      var swiper = this;
      var params = swiper.params;
      var slide = $(e.target).closest("." + params.slideClass)[0];
      var slideFound = false;
  
      if (slide) {
        for (var i = 0; i < swiper.slides.length; i += 1) {
          if (swiper.slides[i] === slide) slideFound = true;
        }
      }
  
      if (slide && slideFound) {
        swiper.clickedSlide = slide;
  
        if (swiper.virtual && swiper.params.virtual.enabled) {
          swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
        } else {
          swiper.clickedIndex = $(slide).index();
        }
      } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
      }
  
      if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
      }
    }
  
    var update = {
      updateSize: updateSize,
      updateSlides: updateSlides,
      updateAutoHeight: updateAutoHeight,
      updateSlidesOffset: updateSlidesOffset,
      updateSlidesProgress: updateSlidesProgress,
      updateProgress: updateProgress,
      updateSlidesClasses: updateSlidesClasses,
      updateActiveIndex: updateActiveIndex,
      updateClickedSlide: updateClickedSlide
    };
  
    function getSwiperTranslate(axis) {
      if (axis === void 0) {
        axis = this.isHorizontal() ? 'x' : 'y';
      }
  
      var swiper = this;
      var params = swiper.params,
          rtl = swiper.rtlTranslate,
          translate = swiper.translate,
          $wrapperEl = swiper.$wrapperEl;
  
      if (params.virtualTranslate) {
        return rtl ? -translate : translate;
      }
  
      if (params.cssMode) {
        return translate;
      }
  
      var currentTranslate = getTranslate($wrapperEl[0], axis);
      if (rtl) currentTranslate = -currentTranslate;
      return currentTranslate || 0;
    }
  
    function setTranslate(translate, byController) {
      var swiper = this;
      var rtl = swiper.rtlTranslate,
          params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          wrapperEl = swiper.wrapperEl,
          progress = swiper.progress;
      var x = 0;
      var y = 0;
      var z = 0;
  
      if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
      } else {
        y = translate;
      }
  
      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }
  
      if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
      }
  
      swiper.previousTranslate = swiper.translate;
      swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress
  
      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  
      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate - swiper.minTranslate()) / translatesDiff;
      }
  
      if (newProgress !== progress) {
        swiper.updateProgress(translate);
      }
  
      swiper.emit('setTranslate', swiper.translate, byController);
    }
  
    function minTranslate() {
      return -this.snapGrid[0];
    }
  
    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }
  
    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
      if (translate === void 0) {
        translate = 0;
      }
  
      if (speed === void 0) {
        speed = this.params.speed;
      }
  
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
  
      if (translateBounds === void 0) {
        translateBounds = true;
      }
  
      var swiper = this;
      var params = swiper.params,
          wrapperEl = swiper.wrapperEl;
  
      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }
  
      var minTranslate = swiper.minTranslate();
      var maxTranslate = swiper.maxTranslate();
      var newTranslate;
      if (translateBounds && translate > minTranslate) newTranslate = minTranslate;else if (translateBounds && translate < maxTranslate) newTranslate = maxTranslate;else newTranslate = translate; // Update progress
  
      swiper.updateProgress(newTranslate);
  
      if (params.cssMode) {
        var isH = swiper.isHorizontal();
  
        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            var _wrapperEl$scrollTo;
  
            wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = -newTranslate, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
          }
        }
  
        return true;
      }
  
      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);
  
        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionEnd');
        }
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);
  
        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionStart');
        }
  
        if (!swiper.animating) {
          swiper.animating = true;
  
          if (!swiper.onTranslateToWrapperTransitionEnd) {
            swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
              swiper.onTranslateToWrapperTransitionEnd = null;
              delete swiper.onTranslateToWrapperTransitionEnd;
  
              if (runCallbacks) {
                swiper.emit('transitionEnd');
              }
            };
          }
  
          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
      }
  
      return true;
    }
  
    var translate = {
      getTranslate: getSwiperTranslate,
      setTranslate: setTranslate,
      minTranslate: minTranslate,
      maxTranslate: maxTranslate,
      translateTo: translateTo
    };
  
    function setTransition(duration, byController) {
      var swiper = this;
  
      if (!swiper.params.cssMode) {
        swiper.$wrapperEl.transition(duration);
      }
  
      swiper.emit('setTransition', duration, byController);
    }
  
    function transitionStart(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
  
      var swiper = this;
      var activeIndex = swiper.activeIndex,
          params = swiper.params,
          previousIndex = swiper.previousIndex;
      if (params.cssMode) return;
  
      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }
  
      var dir = direction;
  
      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }
  
      swiper.emit('transitionStart');
  
      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionStart');
          return;
        }
  
        swiper.emit('slideChangeTransitionStart');
  
        if (dir === 'next') {
          swiper.emit('slideNextTransitionStart');
        } else {
          swiper.emit('slidePrevTransitionStart');
        }
      }
    }
  
    function transitionEnd$1(runCallbacks, direction) {
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
  
      var swiper = this;
      var activeIndex = swiper.activeIndex,
          previousIndex = swiper.previousIndex,
          params = swiper.params;
      swiper.animating = false;
      if (params.cssMode) return;
      swiper.setTransition(0);
      var dir = direction;
  
      if (!dir) {
        if (activeIndex > previousIndex) dir = 'next';else if (activeIndex < previousIndex) dir = 'prev';else dir = 'reset';
      }
  
      swiper.emit('transitionEnd');
  
      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionEnd');
          return;
        }
  
        swiper.emit('slideChangeTransitionEnd');
  
        if (dir === 'next') {
          swiper.emit('slideNextTransitionEnd');
        } else {
          swiper.emit('slidePrevTransitionEnd');
        }
      }
    }
  
    var transition$1 = {
      setTransition: setTransition,
      transitionStart: transitionStart,
      transitionEnd: transitionEnd$1
    };
  
    function slideTo(index, speed, runCallbacks, internal) {
      if (index === void 0) {
        index = 0;
      }
  
      if (speed === void 0) {
        speed = this.params.speed;
      }
  
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
  
      if (typeof index !== 'number' && typeof index !== 'string') {
        throw new Error("The 'index' argument cannot have type other than 'number' or 'string'. [" + typeof index + "] given.");
      }
  
      if (typeof index === 'string') {
        /**
         * The `index` argument converted from `string` to `number`.
         * @type {number}
         */
        var indexAsNumber = parseInt(index, 10);
        /**
         * Determines whether the `index` argument is a valid `number`
         * after being converted from the `string` type.
         * @type {boolean}
         */
  
        var isValidNumber = isFinite(indexAsNumber);
  
        if (!isValidNumber) {
          throw new Error("The passed-in 'index' (string) couldn't be converted to 'number'. [" + index + "] given.");
        } // Knowing that the converted `index` is a valid number,
        // we can update the original argument's value.
  
  
        index = indexAsNumber;
      }
  
      var swiper = this;
      var slideIndex = index;
      if (slideIndex < 0) slideIndex = 0;
      var params = swiper.params,
          snapGrid = swiper.snapGrid,
          slidesGrid = swiper.slidesGrid,
          previousIndex = swiper.previousIndex,
          activeIndex = swiper.activeIndex,
          rtl = swiper.rtlTranslate,
          wrapperEl = swiper.wrapperEl;
  
      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }
  
      var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
      var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);
      if (snapIndex >= snapGrid.length) snapIndex = snapGrid.length - 1;
  
      if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
      }
  
      var translate = -snapGrid[snapIndex]; // Update progress
  
      swiper.updateProgress(translate); // Normalize slideIndex
  
      if (params.normalizeSlideIndex) {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
            slideIndex = i;
          }
        }
      } // Directions locks
  
  
      if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
          return false;
        }
  
        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) return false;
        }
      }
  
      var direction;
      if (slideIndex > activeIndex) direction = 'next';else if (slideIndex < activeIndex) direction = 'prev';else direction = 'reset'; // Update Index
  
      if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height
  
        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }
  
        swiper.updateSlidesClasses();
  
        if (params.effect !== 'slide') {
          swiper.setTranslate(translate);
        }
  
        if (direction !== 'reset') {
          swiper.transitionStart(runCallbacks, direction);
          swiper.transitionEnd(runCallbacks, direction);
        }
  
        return false;
      }
  
      if (params.cssMode) {
        var isH = swiper.isHorizontal();
        var t = -translate;
  
        if (rtl) {
          t = wrapperEl.scrollWidth - wrapperEl.offsetWidth - t;
        }
  
        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            var _wrapperEl$scrollTo;
  
            wrapperEl.scrollTo((_wrapperEl$scrollTo = {}, _wrapperEl$scrollTo[isH ? 'left' : 'top'] = t, _wrapperEl$scrollTo.behavior = 'smooth', _wrapperEl$scrollTo));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = t;
          }
        }
  
        return true;
      }
  
      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
  
        if (!swiper.animating) {
          swiper.animating = true;
  
          if (!swiper.onSlideToWrapperTransitionEnd) {
            swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) return;
              if (e.target !== this) return;
              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
              swiper.onSlideToWrapperTransitionEnd = null;
              delete swiper.onSlideToWrapperTransitionEnd;
              swiper.transitionEnd(runCallbacks, direction);
            };
          }
  
          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        }
      }
  
      return true;
    }
  
    function slideToLoop(index, speed, runCallbacks, internal) {
      if (index === void 0) {
        index = 0;
      }
  
      if (speed === void 0) {
        speed = this.params.speed;
      }
  
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
  
      var swiper = this;
      var newIndex = index;
  
      if (swiper.params.loop) {
        newIndex += swiper.loopedSlides;
      }
  
      return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }
  
    /* eslint no-unused-vars: "off" */
    function slideNext(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }
  
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
  
      var swiper = this;
      var params = swiper.params,
          animating = swiper.animating;
      var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;
  
      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
  
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }
  
      return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }
  
    /* eslint no-unused-vars: "off" */
    function slidePrev(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }
  
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
  
      var swiper = this;
      var params = swiper.params,
          animating = swiper.animating,
          snapGrid = swiper.snapGrid,
          slidesGrid = swiper.slidesGrid,
          rtlTranslate = swiper.rtlTranslate;
  
      if (params.loop) {
        if (animating && params.loopPreventsSlide) return false;
        swiper.loopFix(); // eslint-disable-next-line
  
        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }
  
      var translate = rtlTranslate ? swiper.translate : -swiper.translate;
  
      function normalize(val) {
        if (val < 0) return -Math.floor(Math.abs(val));
        return Math.floor(val);
      }
  
      var normalizedTranslate = normalize(translate);
      var normalizedSnapGrid = snapGrid.map(function (val) {
        return normalize(val);
      });
      var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
      var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];
  
      if (typeof prevSnap === 'undefined' && params.cssMode) {
        snapGrid.forEach(function (snap) {
          if (!prevSnap && normalizedTranslate >= snap) prevSnap = snap;
        });
      }
  
      var prevIndex;
  
      if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);
        if (prevIndex < 0) prevIndex = swiper.activeIndex - 1;
      }
  
      return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }
  
    /* eslint no-unused-vars: "off" */
    function slideReset(speed, runCallbacks, internal) {
      if (speed === void 0) {
        speed = this.params.speed;
      }
  
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
  
      var swiper = this;
      return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }
  
    /* eslint no-unused-vars: "off" */
    function slideToClosest(speed, runCallbacks, internal, threshold) {
      if (speed === void 0) {
        speed = this.params.speed;
      }
  
      if (runCallbacks === void 0) {
        runCallbacks = true;
      }
  
      if (threshold === void 0) {
        threshold = 0.5;
      }
  
      var swiper = this;
      var index = swiper.activeIndex;
      var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
      var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
  
      if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        var currentSnap = swiper.snapGrid[snapIndex];
        var nextSnap = swiper.snapGrid[snapIndex + 1];
  
        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
          index += swiper.params.slidesPerGroup;
        }
      } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        var prevSnap = swiper.snapGrid[snapIndex - 1];
        var _currentSnap = swiper.snapGrid[snapIndex];
  
        if (translate - prevSnap <= (_currentSnap - prevSnap) * threshold) {
          index -= swiper.params.slidesPerGroup;
        }
      }
  
      index = Math.max(index, 0);
      index = Math.min(index, swiper.slidesGrid.length - 1);
      return swiper.slideTo(index, speed, runCallbacks, internal);
    }
  
    function slideToClickedSlide() {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl;
      var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
      var slideToIndex = swiper.clickedIndex;
      var realIndex;
  
      if (params.loop) {
        if (swiper.animating) return;
        realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);
  
        if (params.centeredSlides) {
          if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
            nextTick(function () {
              swiper.slideTo(slideToIndex);
            });
          } else {
            swiper.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
          nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else {
        swiper.slideTo(slideToIndex);
      }
    }
  
    var slide = {
      slideTo: slideTo,
      slideToLoop: slideToLoop,
      slideNext: slideNext,
      slidePrev: slidePrev,
      slideReset: slideReset,
      slideToClosest: slideToClosest,
      slideToClickedSlide: slideToClickedSlide
    };
  
    function loopCreate() {
      var swiper = this;
      var document = getDocument();
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides
  
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
      var slides = $wrapperEl.children("." + params.slideClass);
  
      if (params.loopFillGroupWithBlank) {
        var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;
  
        if (blankSlidesNum !== params.slidesPerGroup) {
          for (var i = 0; i < blankSlidesNum; i += 1) {
            var blankNode = $(document.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
            $wrapperEl.append(blankNode);
          }
  
          slides = $wrapperEl.children("." + params.slideClass);
        }
      }
  
      if (params.slidesPerView === 'auto' && !params.loopedSlides) params.loopedSlides = slides.length;
      swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
      swiper.loopedSlides += params.loopAdditionalSlides;
  
      if (swiper.loopedSlides > slides.length) {
        swiper.loopedSlides = slides.length;
      }
  
      var prependSlides = [];
      var appendSlides = [];
      slides.each(function (el, index) {
        var slide = $(el);
  
        if (index < swiper.loopedSlides) {
          appendSlides.push(el);
        }
  
        if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
          prependSlides.push(el);
        }
  
        slide.attr('data-swiper-slide-index', index);
      });
  
      for (var _i = 0; _i < appendSlides.length; _i += 1) {
        $wrapperEl.append($(appendSlides[_i].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
  
      for (var _i2 = prependSlides.length - 1; _i2 >= 0; _i2 -= 1) {
        $wrapperEl.prepend($(prependSlides[_i2].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
    }
  
    function loopFix() {
      var swiper = this;
      swiper.emit('beforeLoopFix');
      var activeIndex = swiper.activeIndex,
          slides = swiper.slides,
          loopedSlides = swiper.loopedSlides,
          allowSlidePrev = swiper.allowSlidePrev,
          allowSlideNext = swiper.allowSlideNext,
          snapGrid = swiper.snapGrid,
          rtl = swiper.rtlTranslate;
      var newIndex;
      swiper.allowSlidePrev = true;
      swiper.allowSlideNext = true;
      var snapTranslate = -snapGrid[activeIndex];
      var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding
  
      if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        var slideChanged = swiper.slideTo(newIndex, 0, false, true);
  
        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
  
        var _slideChanged = swiper.slideTo(newIndex, 0, false, true);
  
        if (_slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      }
  
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit('loopFix');
    }
  
    function loopDestroy() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params,
          slides = swiper.slides;
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
      slides.removeAttr('data-swiper-slide-index');
    }
  
    var loop = {
      loopCreate: loopCreate,
      loopFix: loopFix,
      loopDestroy: loopDestroy
    };
  
    function setGrabCursor(moving) {
      var swiper = this;
      if (swiper.support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) return;
      var el = swiper.el;
      el.style.cursor = 'move';
      el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
      el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
      el.style.cursor = moving ? 'grabbing' : 'grab';
    }
  
    function unsetGrabCursor() {
      var swiper = this;
  
      if (swiper.support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
        return;
      }
  
      swiper.el.style.cursor = '';
    }
  
    var grabCursor = {
      setGrabCursor: setGrabCursor,
      unsetGrabCursor: unsetGrabCursor
    };
  
    function appendSlide(slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params;
  
      if (params.loop) {
        swiper.loopDestroy();
      }
  
      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.append(slides[i]);
        }
      } else {
        $wrapperEl.append(slides);
      }
  
      if (params.loop) {
        swiper.loopCreate();
      }
  
      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }
    }
  
    function prependSlide(slides) {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex;
  
      if (params.loop) {
        swiper.loopDestroy();
      }
  
      var newActiveIndex = activeIndex + 1;
  
      if (typeof slides === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) $wrapperEl.prepend(slides[i]);
        }
  
        newActiveIndex = activeIndex + slides.length;
      } else {
        $wrapperEl.prepend(slides);
      }
  
      if (params.loop) {
        swiper.loopCreate();
      }
  
      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }
  
      swiper.slideTo(newActiveIndex, 0, false);
    }
  
    function addSlide(index, slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl,
          params = swiper.params,
          activeIndex = swiper.activeIndex;
      var activeIndexBuffer = activeIndex;
  
      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
      }
  
      var baseLength = swiper.slides.length;
  
      if (index <= 0) {
        swiper.prependSlide(slides);
        return;
      }
  
      if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
      }
  
      var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
      var slidesBuffer = [];
  
      for (var i = baseLength - 1; i >= index; i -= 1) {
        var currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
      }
  
      if (typeof slides === 'object' && 'length' in slides) {
        for (var _i = 0; _i < slides.length; _i += 1) {
          if (slides[_i]) $wrapperEl.append(slides[_i]);
        }
  
        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
      } else {
        $wrapperEl.append(slides);
      }
  
      for (var _i2 = 0; _i2 < slidesBuffer.length; _i2 += 1) {
        $wrapperEl.append(slidesBuffer[_i2]);
      }
  
      if (params.loop) {
        swiper.loopCreate();
      }
  
      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }
  
      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }
  
    function removeSlide(slidesIndexes) {
      var swiper = this;
      var params = swiper.params,
          $wrapperEl = swiper.$wrapperEl,
          activeIndex = swiper.activeIndex;
      var activeIndexBuffer = activeIndex;
  
      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
      }
  
      var newActiveIndex = activeIndexBuffer;
      var indexToRemove;
  
      if (typeof slidesIndexes === 'object' && 'length' in slidesIndexes) {
        for (var i = 0; i < slidesIndexes.length; i += 1) {
          indexToRemove = slidesIndexes[i];
          if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
          if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        }
  
        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;
        if (swiper.slides[indexToRemove]) swiper.slides.eq(indexToRemove).remove();
        if (indexToRemove < newActiveIndex) newActiveIndex -= 1;
        newActiveIndex = Math.max(newActiveIndex, 0);
      }
  
      if (params.loop) {
        swiper.loopCreate();
      }
  
      if (!(params.observer && swiper.support.observer)) {
        swiper.update();
      }
  
      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }
  
    function removeAllSlides() {
      var swiper = this;
      var slidesIndexes = [];
  
      for (var i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
      }
  
      swiper.removeSlide(slidesIndexes);
    }
  
    var manipulation = {
      appendSlide: appendSlide,
      prependSlide: prependSlide,
      addSlide: addSlide,
      removeSlide: removeSlide,
      removeAllSlides: removeAllSlides
    };
  
    function onTouchStart(event) {
      var swiper = this;
      var document = getDocument();
      var window = getWindow();
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches;
  
      if (swiper.animating && params.preventInteractionOnTransition) {
        return;
      }
  
      var e = event;
      if (e.originalEvent) e = e.originalEvent;
      var $targetEl = $(e.target);
  
      if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) return;
      }
  
      data.isTouchEvent = e.type === 'touchstart';
      if (!data.isTouchEvent && 'which' in e && e.which === 3) return;
      if (!data.isTouchEvent && 'button' in e && e.button > 0) return;
      if (data.isTouched && data.isMoved) return; // change target el for shadow root componenet
  
      var swipingClassHasValue = !!params.noSwipingClass && params.noSwipingClass !== '';
  
      if (swipingClassHasValue && e.target && e.target.shadowRoot && event.path && event.path[0]) {
        $targetEl = $(event.path[0]);
      }
  
      if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
        swiper.allowClick = true;
        return;
      }
  
      if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) return;
      }
  
      touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      var startX = touches.currentX;
      var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app cannot swipe-to-go-back anymore
  
      var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;
  
      if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= window.screen.width - edgeSwipeThreshold)) {
        return;
      }
  
      extend$1(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
      });
      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = now();
      swiper.allowClick = true;
      swiper.updateSize();
      swiper.swipeDirection = undefined;
      if (params.threshold > 0) data.allowThresholdMove = false;
  
      if (e.type !== 'touchstart') {
        var preventDefault = true;
        if ($targetEl.is(data.formElements)) preventDefault = false;
  
        if (document.activeElement && $(document.activeElement).is(data.formElements) && document.activeElement !== $targetEl[0]) {
          document.activeElement.blur();
        }
  
        var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;
  
        if (params.touchStartForcePreventDefault || shouldPreventDefault) {
          e.preventDefault();
        }
      }
  
      swiper.emit('touchStart', e);
    }
  
    function onTouchMove(event) {
      var document = getDocument();
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches,
          rtl = swiper.rtlTranslate;
      var e = event;
      if (e.originalEvent) e = e.originalEvent;
  
      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper.emit('touchMoveOpposite', e);
        }
  
        return;
      }
  
      if (data.isTouchEvent && e.type !== 'touchmove') return;
      var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
      var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
      var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;
  
      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }
  
      if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;
  
        if (data.isTouched) {
          extend$1(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY
          });
          data.touchStartTime = now();
        }
  
        return;
      }
  
      if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
          // Vertical
          if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
          return;
        }
      }
  
      if (data.isTouchEvent && document.activeElement) {
        if (e.target === document.activeElement && $(e.target).is(data.formElements)) {
          data.isMoved = true;
          swiper.allowClick = false;
          return;
        }
      }
  
      if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
      }
  
      if (e.targetTouches && e.targetTouches.length > 1) return;
      touches.currentX = pageX;
      touches.currentY = pageY;
      var diffX = touches.currentX - touches.startX;
      var diffY = touches.currentY - touches.startY;
      if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) return;
  
      if (typeof data.isScrolling === 'undefined') {
        var touchAngle;
  
        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
          data.isScrolling = false;
        } else {
          // eslint-disable-next-line
          if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
          }
        }
      }
  
      if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }
  
      if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }
  
      if (data.isScrolling) {
        data.isTouched = false;
        return;
      }
  
      if (!data.startMoving) {
        return;
      }
  
      swiper.allowClick = false;
  
      if (!params.cssMode && e.cancelable) {
        e.preventDefault();
      }
  
      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }
  
      if (!data.isMoved) {
        if (params.loop) {
          swiper.loopFix();
        }
  
        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);
  
        if (swiper.animating) {
          swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        }
  
        data.allowMomentumBounce = false; // Grab Cursor
  
        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(true);
        }
  
        swiper.emit('sliderFirstMove', e);
      }
  
      swiper.emit('sliderMove', e);
      data.isMoved = true;
      var diff = swiper.isHorizontal() ? diffX : diffY;
      touches.diff = diff;
      diff *= params.touchRatio;
      if (rtl) diff = -diff;
      swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
      data.currentTranslate = diff + data.startTranslate;
      var disableParentSwiper = true;
      var resistanceRatio = params.resistanceRatio;
  
      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }
  
      if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
      } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;
        if (params.resistance) data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
      }
  
      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      } // Directions locks
  
  
      if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }
  
      if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      } // Threshold
  
  
      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }
  
      if (!params.followFinger || params.cssMode) return; // Update active index in free mode
  
      if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }
  
      if (params.freeMode) {
        // Velocity
        if (data.velocities.length === 0) {
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
          });
        }
  
        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
          time: now()
        });
      } // Update progress
  
  
      swiper.updateProgress(data.currentTranslate); // Update translate
  
      swiper.setTranslate(data.currentTranslate);
    }
  
    function onTouchEnd(event) {
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params,
          touches = swiper.touches,
          rtl = swiper.rtlTranslate,
          $wrapperEl = swiper.$wrapperEl,
          slidesGrid = swiper.slidesGrid,
          snapGrid = swiper.snapGrid;
      var e = event;
      if (e.originalEvent) e = e.originalEvent;
  
      if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
      }
  
      data.allowTouchCallbacks = false;
  
      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper.setGrabCursor(false);
        }
  
        data.isMoved = false;
        data.startMoving = false;
        return;
      } // Return Grab Cursor
  
  
      if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
      } // Time diff
  
  
      var touchEndTime = now();
      var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click
  
      if (swiper.allowClick) {
        swiper.updateClickedSlide(e);
        swiper.emit('tap click', e);
  
        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
          swiper.emit('doubleTap doubleClick', e);
        }
      }
  
      data.lastClickTime = now();
      nextTick(function () {
        if (!swiper.destroyed) swiper.allowClick = true;
      });
  
      if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }
  
      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      var currentPos;
  
      if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
      } else {
        currentPos = -data.currentTranslate;
      }
  
      if (params.cssMode) {
        return;
      }
  
      if (params.freeMode) {
        if (currentPos < -swiper.minTranslate()) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
  
        if (currentPos > -swiper.maxTranslate()) {
          if (swiper.slides.length < snapGrid.length) {
            swiper.slideTo(snapGrid.length - 1);
          } else {
            swiper.slideTo(swiper.slides.length - 1);
          }
  
          return;
        }
  
        if (params.freeModeMomentum) {
          if (data.velocities.length > 1) {
            var lastMoveEvent = data.velocities.pop();
            var velocityEvent = data.velocities.pop();
            var distance = lastMoveEvent.position - velocityEvent.position;
            var time = lastMoveEvent.time - velocityEvent.time;
            swiper.velocity = distance / time;
            swiper.velocity /= 2;
  
            if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
              swiper.velocity = 0;
            } // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.
  
  
            if (time > 150 || now() - lastMoveEvent.time > 300) {
              swiper.velocity = 0;
            }
          } else {
            swiper.velocity = 0;
          }
  
          swiper.velocity *= params.freeModeMomentumVelocityRatio;
          data.velocities.length = 0;
          var momentumDuration = 1000 * params.freeModeMomentumRatio;
          var momentumDistance = swiper.velocity * momentumDuration;
          var newPosition = swiper.translate + momentumDistance;
          if (rtl) newPosition = -newPosition;
          var doBounce = false;
          var afterBouncePosition;
          var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
          var needsLoopFix;
  
          if (newPosition < swiper.maxTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                newPosition = swiper.maxTranslate() - bounceAmount;
              }
  
              afterBouncePosition = swiper.maxTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.maxTranslate();
            }
  
            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (newPosition > swiper.minTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition - swiper.minTranslate() > bounceAmount) {
                newPosition = swiper.minTranslate() + bounceAmount;
              }
  
              afterBouncePosition = swiper.minTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.minTranslate();
            }
  
            if (params.loop && params.centeredSlides) needsLoopFix = true;
          } else if (params.freeModeSticky) {
            var nextSlide;
  
            for (var j = 0; j < snapGrid.length; j += 1) {
              if (snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }
  
            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
              newPosition = snapGrid[nextSlide];
            } else {
              newPosition = snapGrid[nextSlide - 1];
            }
  
            newPosition = -newPosition;
          }
  
          if (needsLoopFix) {
            swiper.once('transitionEnd', function () {
              swiper.loopFix();
            });
          } // Fix duration
  
  
          if (swiper.velocity !== 0) {
            if (rtl) {
              momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
            }
  
            if (params.freeModeSticky) {
              // If freeModeSticky is active and the user ends a swipe with a slow-velocity
              // event, then durations can be 20+ seconds to slide one (or zero!) slides.
              // It's easy to see this when simulating touch with mouse events. To fix this,
              // limit single-slide swipes to the default slide duration. This also has the
              // nice side effect of matching slide speed if the user stopped moving before
              // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
              // For faster swipes, also apply limits (albeit higher ones).
              var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
              var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];
  
              if (moveDistance < currentSlideSize) {
                momentumDuration = params.speed;
              } else if (moveDistance < 2 * currentSlideSize) {
                momentumDuration = params.speed * 1.5;
              } else {
                momentumDuration = params.speed * 2.5;
              }
            }
          } else if (params.freeModeSticky) {
            swiper.slideToClosest();
            return;
          }
  
          if (params.freeModeMomentumBounce && doBounce) {
            swiper.updateProgress(afterBouncePosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed || !data.allowMomentumBounce) return;
              swiper.emit('momentumBounce');
              swiper.setTransition(params.speed);
              setTimeout(function () {
                swiper.setTranslate(afterBouncePosition);
                $wrapperEl.transitionEnd(function () {
                  if (!swiper || swiper.destroyed) return;
                  swiper.transitionEnd();
                });
              }, 0);
            });
          } else if (swiper.velocity) {
            swiper.updateProgress(newPosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
  
            if (!swiper.animating) {
              swiper.animating = true;
              $wrapperEl.transitionEnd(function () {
                if (!swiper || swiper.destroyed) return;
                swiper.transitionEnd();
              });
            }
          } else {
            swiper.updateProgress(newPosition);
          }
  
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }
  
        if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
  
        return;
      } // Find current slide
  
  
      var stopIndex = 0;
      var groupSize = swiper.slidesSizesGrid[0];
  
      for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        var _increment = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  
        if (typeof slidesGrid[i + _increment] !== 'undefined') {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + _increment]) {
            stopIndex = i;
            groupSize = slidesGrid[i + _increment] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      } // Find current slide size
  
  
      var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;
  
      if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
  
        if (swiper.swipeDirection === 'next') {
          if (ratio >= params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
        }
  
        if (swiper.swipeDirection === 'prev') {
          if (ratio > 1 - params.longSwipesRatio) swiper.slideTo(stopIndex + increment);else swiper.slideTo(stopIndex);
        }
      } else {
        // Short swipes
        if (!params.shortSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }
  
        var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);
  
        if (!isNavButtonTarget) {
          if (swiper.swipeDirection === 'next') {
            swiper.slideTo(stopIndex + increment);
          }
  
          if (swiper.swipeDirection === 'prev') {
            swiper.slideTo(stopIndex);
          }
        } else if (e.target === swiper.navigation.nextEl) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    }
  
    function onResize() {
      var swiper = this;
      var params = swiper.params,
          el = swiper.el;
      if (el && el.offsetWidth === 0) return; // Breakpoints
  
      if (params.breakpoints) {
        swiper.setBreakpoint();
      } // Save locks
  
  
      var allowSlideNext = swiper.allowSlideNext,
          allowSlidePrev = swiper.allowSlidePrev,
          snapGrid = swiper.snapGrid; // Disable locks on resize
  
      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateSlidesClasses();
  
      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.isBeginning && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }
  
      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.run();
      } // Return locks after resize
  
  
      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
  
      if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
    }
  
    function onClick(e) {
      var swiper = this;
  
      if (!swiper.allowClick) {
        if (swiper.params.preventClicks) e.preventDefault();
  
        if (swiper.params.preventClicksPropagation && swiper.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }
  
    function onScroll() {
      var swiper = this;
      var wrapperEl = swiper.wrapperEl,
          rtlTranslate = swiper.rtlTranslate;
      swiper.previousTranslate = swiper.translate;
  
      if (swiper.isHorizontal()) {
        if (rtlTranslate) {
          swiper.translate = wrapperEl.scrollWidth - wrapperEl.offsetWidth - wrapperEl.scrollLeft;
        } else {
          swiper.translate = -wrapperEl.scrollLeft;
        }
      } else {
        swiper.translate = -wrapperEl.scrollTop;
      } // eslint-disable-next-line
  
  
      if (swiper.translate === -0) swiper.translate = 0;
      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
  
      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
      }
  
      if (newProgress !== swiper.progress) {
        swiper.updateProgress(rtlTranslate ? -swiper.translate : swiper.translate);
      }
  
      swiper.emit('setTranslate', swiper.translate, false);
    }
  
    var dummyEventAttached = false;
  
    function dummyEventListener() {}
  
    function attachEvents() {
      var swiper = this;
      var document = getDocument();
      var params = swiper.params,
          touchEvents = swiper.touchEvents,
          el = swiper.el,
          wrapperEl = swiper.wrapperEl,
          device = swiper.device,
          support = swiper.support;
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);
  
      if (params.cssMode) {
        swiper.onScroll = onScroll.bind(swiper);
      }
  
      swiper.onClick = onClick.bind(swiper);
      var capture = !!params.nested; // Touch Events
  
      if (!support.touch && support.pointerEvents) {
        el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        document.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        document.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.addEventListener(touchEvents.move, swiper.onTouchMove, support.passiveListener ? {
            passive: false,
            capture: capture
          } : capture);
          el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
  
          if (touchEvents.cancel) {
            el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }
  
          if (!dummyEventAttached) {
            document.addEventListener('touchstart', dummyEventListener);
            dummyEventAttached = true;
          }
        }
  
        if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
          el.addEventListener('mousedown', swiper.onTouchStart, false);
          document.addEventListener('mousemove', swiper.onTouchMove, capture);
          document.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks
  
  
      if (params.preventClicks || params.preventClicksPropagation) {
        el.addEventListener('click', swiper.onClick, true);
      }
  
      if (params.cssMode) {
        wrapperEl.addEventListener('scroll', swiper.onScroll);
      } // Resize handler
  
  
      if (params.updateOnWindowResize) {
        swiper.on(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
      } else {
        swiper.on('observerUpdate', onResize, true);
      }
    }
  
    function detachEvents() {
      var swiper = this;
      var document = getDocument();
      var params = swiper.params,
          touchEvents = swiper.touchEvents,
          el = swiper.el,
          wrapperEl = swiper.wrapperEl,
          device = swiper.device,
          support = swiper.support;
      var capture = !!params.nested; // Touch Events
  
      if (!support.touch && support.pointerEvents) {
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        document.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        document.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);
  
          if (touchEvents.cancel) {
            el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }
        }
  
        if (params.simulateTouch && !device.ios && !device.android || params.simulateTouch && !support.touch && device.ios) {
          el.removeEventListener('mousedown', swiper.onTouchStart, false);
          document.removeEventListener('mousemove', swiper.onTouchMove, capture);
          document.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks
  
  
      if (params.preventClicks || params.preventClicksPropagation) {
        el.removeEventListener('click', swiper.onClick, true);
      }
  
      if (params.cssMode) {
        wrapperEl.removeEventListener('scroll', swiper.onScroll);
      } // Resize handler
  
  
      swiper.off(device.ios || device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
    }
  
    var events = {
      attachEvents: attachEvents,
      detachEvents: detachEvents
    };
  
    function setBreakpoint() {
      var swiper = this;
      var activeIndex = swiper.activeIndex,
          initialized = swiper.initialized,
          _swiper$loopedSlides = swiper.loopedSlides,
          loopedSlides = _swiper$loopedSlides === void 0 ? 0 : _swiper$loopedSlides,
          params = swiper.params,
          $el = swiper.$el;
      var breakpoints = params.breakpoints;
      if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) return; // Get breakpoint for window width and update parameters
  
      var breakpoint = swiper.getBreakpoint(breakpoints);
  
      if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
        var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;
  
        if (breakpointOnlyParams) {
          ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
            var paramValue = breakpointOnlyParams[param];
            if (typeof paramValue === 'undefined') return;
  
            if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
              breakpointOnlyParams[param] = 'auto';
            } else if (param === 'slidesPerView') {
              breakpointOnlyParams[param] = parseFloat(paramValue);
            } else {
              breakpointOnlyParams[param] = parseInt(paramValue, 10);
            }
          });
        }
  
        var breakpointParams = breakpointOnlyParams || swiper.originalParams;
        var wasMultiRow = params.slidesPerColumn > 1;
        var isMultiRow = breakpointParams.slidesPerColumn > 1;
  
        if (wasMultiRow && !isMultiRow) {
          $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
          swiper.emitContainerClasses();
        } else if (!wasMultiRow && isMultiRow) {
          $el.addClass(params.containerModifierClass + "multirow");
  
          if (breakpointParams.slidesPerColumnFill === 'column') {
            $el.addClass(params.containerModifierClass + "multirow-column");
          }
  
          swiper.emitContainerClasses();
        }
  
        var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);
  
        if (directionChanged && initialized) {
          swiper.changeDirection();
        }
  
        extend$1(swiper.params, breakpointParams);
        extend$1(swiper, {
          allowTouchMove: swiper.params.allowTouchMove,
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev
        });
        swiper.currentBreakpoint = breakpoint;
        swiper.emit('_beforeBreakpoint', breakpointParams);
  
        if (needsReLoop && initialized) {
          swiper.loopDestroy();
          swiper.loopCreate();
          swiper.updateSlides();
          swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
        }
  
        swiper.emit('breakpoint', breakpointParams);
      }
    }
  
    function getBreakpoints(breakpoints) {
      var window = getWindow(); // Get breakpoint for window width
  
      if (!breakpoints) return undefined;
      var breakpoint = false;
      var points = Object.keys(breakpoints).map(function (point) {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
          var minRatio = parseFloat(point.substr(1));
          var value = window.innerHeight * minRatio;
          return {
            value: value,
            point: point
          };
        }
  
        return {
          value: point,
          point: point
        };
      });
      points.sort(function (a, b) {
        return parseInt(a.value, 10) - parseInt(b.value, 10);
      });
  
      for (var i = 0; i < points.length; i += 1) {
        var _points$i = points[i],
            point = _points$i.point,
            value = _points$i.value;
  
        if (value <= window.innerWidth) {
          breakpoint = point;
        }
      }
  
      return breakpoint || 'max';
    }
  
    var breakpoints = {
      setBreakpoint: setBreakpoint,
      getBreakpoint: getBreakpoints
    };
  
    function addClasses() {
      var swiper = this;
      var classNames = swiper.classNames,
          params = swiper.params,
          rtl = swiper.rtl,
          $el = swiper.$el,
          device = swiper.device;
      var suffixes = [];
      suffixes.push('initialized');
      suffixes.push(params.direction);
  
      if (params.freeMode) {
        suffixes.push('free-mode');
      }
  
      if (params.autoHeight) {
        suffixes.push('autoheight');
      }
  
      if (rtl) {
        suffixes.push('rtl');
      }
  
      if (params.slidesPerColumn > 1) {
        suffixes.push('multirow');
  
        if (params.slidesPerColumnFill === 'column') {
          suffixes.push('multirow-column');
        }
      }
  
      if (device.android) {
        suffixes.push('android');
      }
  
      if (device.ios) {
        suffixes.push('ios');
      }
  
      if (params.cssMode) {
        suffixes.push('css-mode');
      }
  
      suffixes.forEach(function (suffix) {
        classNames.push(params.containerModifierClass + suffix);
      });
      $el.addClass(classNames.join(' '));
      swiper.emitContainerClasses();
    }
  
    function removeClasses() {
      var swiper = this;
      var $el = swiper.$el,
          classNames = swiper.classNames;
      $el.removeClass(classNames.join(' '));
      swiper.emitContainerClasses();
    }
  
    var classes = {
      addClasses: addClasses,
      removeClasses: removeClasses
    };
  
    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
      var window = getWindow();
      var image;
  
      function onReady() {
        if (callback) callback();
      }
  
      var isPicture = $(imageEl).parent('picture')[0];
  
      if (!isPicture && (!imageEl.complete || !checkForComplete)) {
        if (src) {
          image = new window.Image();
          image.onload = onReady;
          image.onerror = onReady;
  
          if (sizes) {
            image.sizes = sizes;
          }
  
          if (srcset) {
            image.srcset = srcset;
          }
  
          if (src) {
            image.src = src;
          }
        } else {
          onReady();
        }
      } else {
        // image already loaded...
        onReady();
      }
    }
  
    function preloadImages() {
      var swiper = this;
      swiper.imagesToLoad = swiper.$el.find('img');
  
      function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) return;
        if (swiper.imagesLoaded !== undefined) swiper.imagesLoaded += 1;
  
        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
          if (swiper.params.updateOnImagesReady) swiper.update();
          swiper.emit('imagesReady');
        }
      }
  
      for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
        var imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
      }
    }
  
    var images = {
      loadImage: loadImage,
      preloadImages: preloadImages
    };
  
    function checkOverflow() {
      var swiper = this;
      var params = swiper.params;
      var wasLocked = swiper.isLocked;
      var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;
  
      if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
        swiper.isLocked = lastSlidePosition <= swiper.size;
      } else {
        swiper.isLocked = swiper.snapGrid.length === 1;
      }
  
      swiper.allowSlideNext = !swiper.isLocked;
      swiper.allowSlidePrev = !swiper.isLocked; // events
  
      if (wasLocked !== swiper.isLocked) swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
  
      if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
        if (swiper.navigation) swiper.navigation.update();
      }
    }
  
    var checkOverflow$1 = {
      checkOverflow: checkOverflow
    };
  
    var defaults = {
      init: true,
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      nested: false,
      // Overrides
      width: null,
      height: null,
      //
      preventInteractionOnTransition: false,
      // ssr
      userAgent: null,
      url: null,
      // To support iOS's swipe-to-go-back gesture (when being used in-app).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      // Free mode
      freeMode: false,
      freeModeMomentum: true,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: true,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: false,
      freeModeMinimumVelocity: 0.02,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: 'slide',
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      // Breakpoints
      breakpoints: undefined,
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      // Disable swiper and hide navigation when container not overflow
      watchOverflow: false,
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Progress
      watchSlidesProgress: false,
      watchSlidesVisibility: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // Images
      preloadImages: true,
      updateOnImagesReady: true,
      // loop
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: false,
      loopPreventsSlide: true,
      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      // Passive Listeners
      passiveListeners: true,
      // NS
      containerModifierClass: 'swiper-container-',
      // NEW
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      // Callbacks
      runCallbacksOnInit: true,
      // Internals
      _emitClasses: false
    };
  
    var prototypes = {
      modular: modular,
      eventsEmitter: eventsEmitter,
      update: update,
      translate: translate,
      transition: transition$1,
      slide: slide,
      loop: loop,
      grabCursor: grabCursor,
      manipulation: manipulation,
      events: events,
      breakpoints: breakpoints,
      checkOverflow: checkOverflow$1,
      classes: classes,
      images: images
    };
    var extendedDefaults = {};
  
    var Swiper = /*#__PURE__*/function () {
      function Swiper() {
        var el;
        var params;
  
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
  
        if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
          params = args[0];
        } else {
          el = args[0];
          params = args[1];
        }
  
        if (!params) params = {};
        params = extend$1({}, params);
        if (el && !params.el) params.el = el; // Swiper Instance
  
        var swiper = this;
        swiper.support = getSupport();
        swiper.device = getDevice({
          userAgent: params.userAgent
        });
        swiper.browser = getBrowser();
        swiper.eventsListeners = {};
        swiper.eventsAnyListeners = [];
  
        if (typeof swiper.modules === 'undefined') {
          swiper.modules = {};
        }
  
        Object.keys(swiper.modules).forEach(function (moduleName) {
          var module = swiper.modules[moduleName];
  
          if (module.params) {
            var moduleParamName = Object.keys(module.params)[0];
            var moduleParams = module.params[moduleParamName];
            if (typeof moduleParams !== 'object' || moduleParams === null) return;
            if (!(moduleParamName in params && 'enabled' in moduleParams)) return;
  
            if (params[moduleParamName] === true) {
              params[moduleParamName] = {
                enabled: true
              };
            }
  
            if (typeof params[moduleParamName] === 'object' && !('enabled' in params[moduleParamName])) {
              params[moduleParamName].enabled = true;
            }
  
            if (!params[moduleParamName]) params[moduleParamName] = {
              enabled: false
            };
          }
        }); // Extend defaults with modules params
  
        var swiperParams = extend$1({}, defaults);
        swiper.useParams(swiperParams); // Extend defaults with passed params
  
        swiper.params = extend$1({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = extend$1({}, swiper.params);
        swiper.passedParams = extend$1({}, params); // add event listeners
  
        if (swiper.params && swiper.params.on) {
          Object.keys(swiper.params.on).forEach(function (eventName) {
            swiper.on(eventName, swiper.params.on[eventName]);
          });
        }
  
        if (swiper.params && swiper.params.onAny) {
          swiper.onAny(swiper.params.onAny);
        } // Save Dom lib
  
  
        swiper.$ = $; // Find el
  
        var $el = $(swiper.params.el);
        el = $el[0];
  
        if (!el) {
          return undefined;
        }
  
        if ($el.length > 1) {
          var swipers = [];
          $el.each(function (containerEl) {
            var newParams = extend$1({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper(newParams));
          });
          return swipers;
        }
  
        el.swiper = swiper; // Find Wrapper
  
        var $wrapperEl;
  
        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          $wrapperEl = $(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items
  
          $wrapperEl.children = function (options) {
            return $el.children(options);
          };
        } else {
          $wrapperEl = $el.children("." + swiper.params.wrapperClass);
        } // Extend Swiper
  
  
        extend$1(swiper, {
          $el: $el,
          el: el,
          $wrapperEl: $wrapperEl,
          wrapperEl: $wrapperEl[0],
          // Classes
          classNames: [],
          // Slides
          slides: $(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          // isDirection
          isHorizontal: function isHorizontal() {
            return swiper.params.direction === 'horizontal';
          },
          isVertical: function isVertical() {
            return swiper.params.direction === 'vertical';
          },
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          wrongRTL: $wrapperEl.css('display') === '-webkit-box',
          // Indexes
          activeIndex: 0,
          realIndex: 0,
          //
          isBeginning: true,
          isEnd: false,
          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          // Locks
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          // Touch Events
          touchEvents: function touchEvents() {
            var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
            var desktop = ['mousedown', 'mousemove', 'mouseup'];
  
            if (swiper.support.pointerEvents) {
              desktop = ['pointerdown', 'pointermove', 'pointerup'];
            }
  
            swiper.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3]
            };
            swiper.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2]
            };
            return swiper.support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: undefined,
            isMoved: undefined,
            allowTouchCallbacks: undefined,
            touchStartTime: undefined,
            isScrolling: undefined,
            currentTranslate: undefined,
            startTranslate: undefined,
            allowThresholdMove: undefined,
            // Form elements to match
            formElements: 'input, select, option, textarea, button, video, label',
            // Last click time
            lastClickTime: now(),
            clickTimeout: undefined,
            // Velocities
            velocities: [],
            allowMomentumBounce: undefined,
            isTouchEvent: undefined,
            startMoving: undefined
          },
          // Clicks
          allowClick: true,
          // Touches
          allowTouchMove: swiper.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          // Images
          imagesToLoad: [],
          imagesLoaded: 0
        }); // Install Modules
  
        swiper.useModules();
        swiper.emit('_swiper'); // Init
  
        if (swiper.params.init) {
          swiper.init();
        } // Return app instance
  
  
        return swiper;
      }
  
      var _proto = Swiper.prototype;
  
      _proto.emitContainerClasses = function emitContainerClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        var classes = swiper.el.className.split(' ').filter(function (className) {
          return className.indexOf('swiper-container') === 0 || className.indexOf(swiper.params.containerModifierClass) === 0;
        });
        swiper.emit('_containerClasses', classes.join(' '));
      };
  
      _proto.getSlideClasses = function getSlideClasses(slideEl) {
        var swiper = this;
        return slideEl.className.split(' ').filter(function (className) {
          return className.indexOf('swiper-slide') === 0 || className.indexOf(swiper.params.slideClass) === 0;
        }).join(' ');
      };
  
      _proto.emitSlidesClasses = function emitSlidesClasses() {
        var swiper = this;
        if (!swiper.params._emitClasses || !swiper.el) return;
        swiper.slides.each(function (slideEl) {
          var classNames = swiper.getSlideClasses(slideEl);
          swiper.emit('_slideClass', slideEl, classNames);
        });
      };
  
      _proto.slidesPerViewDynamic = function slidesPerViewDynamic() {
        var swiper = this;
        var params = swiper.params,
            slides = swiper.slides,
            slidesGrid = swiper.slidesGrid,
            swiperSize = swiper.size,
            activeIndex = swiper.activeIndex;
        var spv = 1;
  
        if (params.centeredSlides) {
          var slideSize = slides[activeIndex].swiperSlideSize;
          var breakLoop;
  
          for (var i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
  
          for (var _i = activeIndex - 1; _i >= 0; _i -= 1) {
            if (slides[_i] && !breakLoop) {
              slideSize += slides[_i].swiperSlideSize;
              spv += 1;
              if (slideSize > swiperSize) breakLoop = true;
            }
          }
        } else {
          for (var _i2 = activeIndex + 1; _i2 < slides.length; _i2 += 1) {
            if (slidesGrid[_i2] - slidesGrid[activeIndex] < swiperSize) {
              spv += 1;
            }
          }
        }
  
        return spv;
      };
  
      _proto.update = function update() {
        var swiper = this;
        if (!swiper || swiper.destroyed) return;
        var snapGrid = swiper.snapGrid,
            params = swiper.params; // Breakpoints
  
        if (params.breakpoints) {
          swiper.setBreakpoint();
        }
  
        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();
  
        function setTranslate() {
          var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }
  
        var translated;
  
        if (swiper.params.freeMode) {
          setTranslate();
  
          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }
  
          if (!translated) {
            setTranslate();
          }
        }
  
        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }
  
        swiper.emit('update');
      };
  
      _proto.changeDirection = function changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) {
          needUpdate = true;
        }
  
        var swiper = this;
        var currentDirection = swiper.params.direction;
  
        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }
  
        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper;
        }
  
        swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
        swiper.emitContainerClasses();
        swiper.params.direction = newDirection;
        swiper.slides.each(function (slideEl) {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper.emit('changeDirection');
        if (needUpdate) swiper.update();
        return swiper;
      };
  
      _proto.init = function init() {
        var swiper = this;
        if (swiper.initialized) return;
        swiper.emit('beforeInit'); // Set breakpoint
  
        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        } // Add Classes
  
  
        swiper.addClasses(); // Create loop
  
        if (swiper.params.loop) {
          swiper.loopCreate();
        } // Update size
  
  
        swiper.updateSize(); // Update slides
  
        swiper.updateSlides();
  
        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        } // Set Grab Cursor
  
  
        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }
  
        if (swiper.params.preloadImages) {
          swiper.preloadImages();
        } // Slide To Initial Slide
  
  
        if (swiper.params.loop) {
          swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
        } // Attach events
  
  
        swiper.attachEvents(); // Init Flag
  
        swiper.initialized = true; // Emit
  
        swiper.emit('init');
        swiper.emit('afterInit');
      };
  
      _proto.destroy = function destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) {
          deleteInstance = true;
        }
  
        if (cleanStyles === void 0) {
          cleanStyles = true;
        }
  
        var swiper = this;
        var params = swiper.params,
            $el = swiper.$el,
            $wrapperEl = swiper.$wrapperEl,
            slides = swiper.slides;
  
        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }
  
        swiper.emit('beforeDestroy'); // Init Flag
  
        swiper.initialized = false; // Detach events
  
        swiper.detachEvents(); // Destroy loop
  
        if (params.loop) {
          swiper.loopDestroy();
        } // Cleanup styles
  
  
        if (cleanStyles) {
          swiper.removeClasses();
          $el.removeAttr('style');
          $wrapperEl.removeAttr('style');
  
          if (slides && slides.length) {
            slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
          }
        }
  
        swiper.emit('destroy'); // Detach emitter events
  
        Object.keys(swiper.eventsListeners).forEach(function (eventName) {
          swiper.off(eventName);
        });
  
        if (deleteInstance !== false) {
          swiper.$el[0].swiper = null;
          deleteProps(swiper);
        }
  
        swiper.destroyed = true;
        return null;
      };
  
      Swiper.extendDefaults = function extendDefaults(newDefaults) {
        extend$1(extendedDefaults, newDefaults);
      };
  
      Swiper.installModule = function installModule(module) {
        if (!Swiper.prototype.modules) Swiper.prototype.modules = {};
        var name = module.name || Object.keys(Swiper.prototype.modules).length + "_" + now();
        Swiper.prototype.modules[name] = module;
      };
  
      Swiper.use = function use(module) {
        if (Array.isArray(module)) {
          module.forEach(function (m) {
            return Swiper.installModule(m);
          });
          return Swiper;
        }
  
        Swiper.installModule(module);
        return Swiper;
      };
  
      _createClass(Swiper, null, [{
        key: "extendedDefaults",
        get: function get() {
          return extendedDefaults;
        }
      }, {
        key: "defaults",
        get: function get() {
          return defaults;
        }
      }]);
  
      return Swiper;
    }();
  
    Object.keys(prototypes).forEach(function (prototypeGroup) {
      Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
        Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
      });
    });
    Swiper.use([Resize, Observer$1]);
  
    var Virtual = {
      update: function update(force) {
        var swiper = this;
        var _swiper$params = swiper.params,
            slidesPerView = _swiper$params.slidesPerView,
            slidesPerGroup = _swiper$params.slidesPerGroup,
            centeredSlides = _swiper$params.centeredSlides;
        var _swiper$params$virtua = swiper.params.virtual,
            addSlidesBefore = _swiper$params$virtua.addSlidesBefore,
            addSlidesAfter = _swiper$params$virtua.addSlidesAfter;
        var _swiper$virtual = swiper.virtual,
            previousFrom = _swiper$virtual.from,
            previousTo = _swiper$virtual.to,
            slides = _swiper$virtual.slides,
            previousSlidesGrid = _swiper$virtual.slidesGrid,
            renderSlide = _swiper$virtual.renderSlide,
            previousOffset = _swiper$virtual.offset;
        swiper.updateActiveIndex();
        var activeIndex = swiper.activeIndex || 0;
        var offsetProp;
        if (swiper.rtlTranslate) offsetProp = 'right';else offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        var slidesAfter;
        var slidesBefore;
  
        if (centeredSlides) {
          slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
          slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
        } else {
          slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesAfter;
          slidesBefore = slidesPerGroup + addSlidesBefore;
        }
  
        var from = Math.max((activeIndex || 0) - slidesBefore, 0);
        var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        extend$1(swiper.virtual, {
          from: from,
          to: to,
          offset: offset,
          slidesGrid: swiper.slidesGrid
        });
  
        function onRendered() {
          swiper.updateSlides();
          swiper.updateProgress();
          swiper.updateSlidesClasses();
  
          if (swiper.lazy && swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        }
  
        if (previousFrom === from && previousTo === to && !force) {
          if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
            swiper.slides.css(offsetProp, offset + "px");
          }
  
          swiper.updateProgress();
          return;
        }
  
        if (swiper.params.virtual.renderExternal) {
          swiper.params.virtual.renderExternal.call(swiper, {
            offset: offset,
            from: from,
            to: to,
            slides: function getSlides() {
              var slidesToRender = [];
  
              for (var i = from; i <= to; i += 1) {
                slidesToRender.push(slides[i]);
              }
  
              return slidesToRender;
            }()
          });
  
          if (swiper.params.virtual.renderExternalUpdate) {
            onRendered();
          }
  
          return;
        }
  
        var prependIndexes = [];
        var appendIndexes = [];
  
        if (force) {
          swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
        } else {
          for (var i = previousFrom; i <= previousTo; i += 1) {
            if (i < from || i > to) {
              swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
            }
          }
        }
  
        for (var _i = 0; _i < slides.length; _i += 1) {
          if (_i >= from && _i <= to) {
            if (typeof previousTo === 'undefined' || force) {
              appendIndexes.push(_i);
            } else {
              if (_i > previousTo) appendIndexes.push(_i);
              if (_i < previousFrom) prependIndexes.push(_i);
            }
          }
        }
  
        appendIndexes.forEach(function (index) {
          swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort(function (a, b) {
          return b - a;
        }).forEach(function (index) {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
        onRendered();
      },
      renderSlide: function renderSlide(slide, index) {
        var swiper = this;
        var params = swiper.params.virtual;
  
        if (params.cache && swiper.virtual.cache[index]) {
          return swiper.virtual.cache[index];
        }
  
        var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");
        if (!$slideEl.attr('data-swiper-slide-index')) $slideEl.attr('data-swiper-slide-index', index);
        if (params.cache) swiper.virtual.cache[index] = $slideEl;
        return $slideEl;
      },
      appendSlide: function appendSlide(slides) {
        var swiper = this;
  
        if (typeof slides === 'object' && 'length' in slides) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.push(slides[i]);
          }
        } else {
          swiper.virtual.slides.push(slides);
        }
  
        swiper.virtual.update(true);
      },
      prependSlide: function prependSlide(slides) {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var newActiveIndex = activeIndex + 1;
        var numberOfNewSlides = 1;
  
        if (Array.isArray(slides)) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) swiper.virtual.slides.unshift(slides[i]);
          }
  
          newActiveIndex = activeIndex + slides.length;
          numberOfNewSlides = slides.length;
        } else {
          swiper.virtual.slides.unshift(slides);
        }
  
        if (swiper.params.virtual.cache) {
          var cache = swiper.virtual.cache;
          var newCache = {};
          Object.keys(cache).forEach(function (cachedIndex) {
            var $cachedEl = cache[cachedIndex];
            var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');
  
            if (cachedElIndex) {
              $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
            }
  
            newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
          });
          swiper.virtual.cache = newCache;
        }
  
        swiper.virtual.update(true);
        swiper.slideTo(newActiveIndex, 0);
      },
      removeSlide: function removeSlide(slidesIndexes) {
        var swiper = this;
        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) return;
        var activeIndex = swiper.activeIndex;
  
        if (Array.isArray(slidesIndexes)) {
          for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
            swiper.virtual.slides.splice(slidesIndexes[i], 1);
  
            if (swiper.params.virtual.cache) {
              delete swiper.virtual.cache[slidesIndexes[i]];
            }
  
            if (slidesIndexes[i] < activeIndex) activeIndex -= 1;
            activeIndex = Math.max(activeIndex, 0);
          }
        } else {
          swiper.virtual.slides.splice(slidesIndexes, 1);
  
          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes];
          }
  
          if (slidesIndexes < activeIndex) activeIndex -= 1;
          activeIndex = Math.max(activeIndex, 0);
        }
  
        swiper.virtual.update(true);
        swiper.slideTo(activeIndex, 0);
      },
      removeAllSlides: function removeAllSlides() {
        var swiper = this;
        swiper.virtual.slides = [];
  
        if (swiper.params.virtual.cache) {
          swiper.virtual.cache = {};
        }
  
        swiper.virtual.update(true);
        swiper.slideTo(0, 0);
      }
    };
    var Virtual$1 = {
      name: 'virtual',
      params: {
        virtual: {
          enabled: false,
          slides: [],
          cache: true,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: true,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          virtual: _extends(_extends({}, Virtual), {}, {
            slides: swiper.params.virtual.slides,
            cache: {}
          })
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (!swiper.params.virtual.enabled) return;
          swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
          var overwriteParams = {
            watchSlidesProgress: true
          };
          extend$1(swiper.params, overwriteParams);
          extend$1(swiper.originalParams, overwriteParams);
  
          if (!swiper.params.initialSlide) {
            swiper.virtual.update();
          }
        },
        setTranslate: function setTranslate(swiper) {
          if (!swiper.params.virtual.enabled) return;
          swiper.virtual.update();
        }
      }
    };
  
    var Keyboard = {
      handle: function handle(event) {
        var swiper = this;
        var window = getWindow();
        var document = getDocument();
        var rtl = swiper.rtlTranslate;
        var e = event;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
  
        var kc = e.keyCode || e.charCode;
        var pageUpDown = swiper.params.keyboard.pageUpDown;
        var isPageUp = pageUpDown && kc === 33;
        var isPageDown = pageUpDown && kc === 34;
        var isArrowLeft = kc === 37;
        var isArrowRight = kc === 39;
        var isArrowUp = kc === 38;
        var isArrowDown = kc === 40; // Directions locks
  
        if (!swiper.allowSlideNext && (swiper.isHorizontal() && isArrowRight || swiper.isVertical() && isArrowDown || isPageDown)) {
          return false;
        }
  
        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && isArrowLeft || swiper.isVertical() && isArrowUp || isPageUp)) {
          return false;
        }
  
        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
          return undefined;
        }
  
        if (document.activeElement && document.activeElement.nodeName && (document.activeElement.nodeName.toLowerCase() === 'input' || document.activeElement.nodeName.toLowerCase() === 'textarea')) {
          return undefined;
        }
  
        if (swiper.params.keyboard.onlyInViewport && (isPageUp || isPageDown || isArrowLeft || isArrowRight || isArrowUp || isArrowDown)) {
          var inView = false; // Check that swiper should be inside of visible area of window
  
          if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
            return undefined;
          }
  
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
          var swiperOffset = swiper.$el.offset();
          if (rtl) swiperOffset.left -= swiper.$el[0].scrollLeft;
          var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];
  
          for (var i = 0; i < swiperCoord.length; i += 1) {
            var point = swiperCoord[i];
  
            if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
              inView = true;
            }
          }
  
          if (!inView) return undefined;
        }
  
        if (swiper.isHorizontal()) {
          if (isPageUp || isPageDown || isArrowLeft || isArrowRight) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }
  
          if ((isPageDown || isArrowRight) && !rtl || (isPageUp || isArrowLeft) && rtl) swiper.slideNext();
          if ((isPageUp || isArrowLeft) && !rtl || (isPageDown || isArrowRight) && rtl) swiper.slidePrev();
        } else {
          if (isPageUp || isPageDown || isArrowUp || isArrowDown) {
            if (e.preventDefault) e.preventDefault();else e.returnValue = false;
          }
  
          if (isPageDown || isArrowDown) swiper.slideNext();
          if (isPageUp || isArrowUp) swiper.slidePrev();
        }
  
        swiper.emit('keyPress', kc);
        return undefined;
      },
      enable: function enable() {
        var swiper = this;
        var document = getDocument();
        if (swiper.keyboard.enabled) return;
        $(document).on('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = true;
      },
      disable: function disable() {
        var swiper = this;
        var document = getDocument();
        if (!swiper.keyboard.enabled) return;
        $(document).off('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = false;
      }
    };
    var Keyboard$1 = {
      name: 'keyboard',
      params: {
        keyboard: {
          enabled: false,
          onlyInViewport: true,
          pageUpDown: true
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          keyboard: _extends({
            enabled: false
          }, Keyboard)
        });
      },
      on: {
        init: function init(swiper) {
          if (swiper.params.keyboard.enabled) {
            swiper.keyboard.enable();
          }
        },
        destroy: function destroy(swiper) {
          if (swiper.keyboard.enabled) {
            swiper.keyboard.disable();
          }
        }
      }
    };
  
    function isEventSupported() {
      var document = getDocument();
      var eventName = 'onwheel';
      var isSupported = (eventName in document);
  
      if (!isSupported) {
        var element = document.createElement('div');
        element.setAttribute(eventName, 'return;');
        isSupported = typeof element[eventName] === 'function';
      }
  
      if (!isSupported && document.implementation && document.implementation.hasFeature && // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      document.implementation.hasFeature('', '') !== true) {
        // This is the only way to test support for the `wheel` event in IE9+.
        isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
      }
  
      return isSupported;
    }
  
    var Mousewheel = {
      lastScrollTime: now(),
      lastEventBeforeSnap: undefined,
      recentWheelEvents: [],
      event: function event() {
        var window = getWindow();
        if (window.navigator.userAgent.indexOf('firefox') > -1) return 'DOMMouseScroll';
        return isEventSupported() ? 'wheel' : 'mousewheel';
      },
      normalize: function normalize(e) {
        // Reasonable defaults
        var PIXEL_STEP = 10;
        var LINE_HEIGHT = 40;
        var PAGE_HEIGHT = 800;
        var sX = 0;
        var sY = 0; // spinX, spinY
  
        var pX = 0;
        var pY = 0; // pixelX, pixelY
        // Legacy
  
        if ('detail' in e) {
          sY = e.detail;
        }
  
        if ('wheelDelta' in e) {
          sY = -e.wheelDelta / 120;
        }
  
        if ('wheelDeltaY' in e) {
          sY = -e.wheelDeltaY / 120;
        }
  
        if ('wheelDeltaX' in e) {
          sX = -e.wheelDeltaX / 120;
        } // side scrolling on FF with DOMMouseScroll
  
  
        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY;
          sY = 0;
        }
  
        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;
  
        if ('deltaY' in e) {
          pY = e.deltaY;
        }
  
        if ('deltaX' in e) {
          pX = e.deltaX;
        }
  
        if (e.shiftKey && !pX) {
          // if user scrolls with shift he wants horizontal scroll
          pX = pY;
          pY = 0;
        }
  
        if ((pX || pY) && e.deltaMode) {
          if (e.deltaMode === 1) {
            // delta in LINE units
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
          } else {
            // delta in PAGE units
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
          }
        } // Fall-back if spin cannot be determined
  
  
        if (pX && !sX) {
          sX = pX < 1 ? -1 : 1;
        }
  
        if (pY && !sY) {
          sY = pY < 1 ? -1 : 1;
        }
  
        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        var swiper = this;
        swiper.mouseEntered = true;
      },
      handleMouseLeave: function handleMouseLeave() {
        var swiper = this;
        swiper.mouseEntered = false;
      },
      handle: function handle(event) {
        var e = event;
        var swiper = this;
        var params = swiper.params.mousewheel;
  
        if (swiper.params.cssMode) {
          e.preventDefault();
        }
  
        var target = swiper.$el;
  
        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarget);
        }
  
        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) return true;
        if (e.originalEvent) e = e.originalEvent; // jquery fix
  
        var delta = 0;
        var rtlFactor = swiper.rtlTranslate ? -1 : 1;
        var data = Mousewheel.normalize(e);
  
        if (params.forceToAxis) {
          if (swiper.isHorizontal()) {
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) delta = -data.pixelX * rtlFactor;else return true;
          } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) delta = -data.pixelY;else return true;
        } else {
          delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }
  
        if (delta === 0) return true;
        if (params.invert) delta = -delta;
  
        if (!swiper.params.freeMode) {
          // Register the new event in a variable which stores the relevant data
          var newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event
          }; // Keep the most recent events
  
          var recentWheelEvents = swiper.mousewheel.recentWheelEvents;
  
          if (recentWheelEvents.length >= 2) {
            recentWheelEvents.shift(); // only store the last N events
          }
  
          var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
          //   If direction has changed or
          //   if the scroll is quicker than the previous one:
          //     Animate the slider.
          // Else (this is the first time the wheel is moved):
          //     Animate the slider.
  
          if (prevEvent) {
            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta || newEvent.time > prevEvent.time + 150) {
              swiper.mousewheel.animateSlider(newEvent);
            }
          } else {
            swiper.mousewheel.animateSlider(newEvent);
          } // If it's time to release the scroll:
          //   Return now so you don't hit the preventDefault.
  
  
          if (swiper.mousewheel.releaseScroll(newEvent)) {
            return true;
          }
        } else {
          // Freemode or scrollContainer:
          // If we recently snapped after a momentum scroll, then ignore wheel events
          // to give time for the deceleration to finish. Stop ignoring after 500 msecs
          // or if it's a new scroll (larger delta or inverse sign as last event before
          // an end-of-momentum snap).
          var _newEvent = {
            time: now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta)
          };
          var lastEventBeforeSnap = swiper.mousewheel.lastEventBeforeSnap;
          var ignoreWheelEvents = lastEventBeforeSnap && _newEvent.time < lastEventBeforeSnap.time + 500 && _newEvent.delta <= lastEventBeforeSnap.delta && _newEvent.direction === lastEventBeforeSnap.direction;
  
          if (!ignoreWheelEvents) {
            swiper.mousewheel.lastEventBeforeSnap = undefined;
  
            if (swiper.params.loop) {
              swiper.loopFix();
            }
  
            var position = swiper.getTranslate() + delta * params.sensitivity;
            var wasBeginning = swiper.isBeginning;
            var wasEnd = swiper.isEnd;
            if (position >= swiper.minTranslate()) position = swiper.minTranslate();
            if (position <= swiper.maxTranslate()) position = swiper.maxTranslate();
            swiper.setTransition(0);
            swiper.setTranslate(position);
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();
  
            if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
              swiper.updateSlidesClasses();
            }
  
            if (swiper.params.freeModeSticky) {
              // When wheel scrolling starts with sticky (aka snap) enabled, then detect
              // the end of a momentum scroll by storing recent (N=15?) wheel events.
              // 1. do all N events have decreasing or same (absolute value) delta?
              // 2. did all N events arrive in the last M (M=500?) msecs?
              // 3. does the earliest event have an (absolute value) delta that's
              //    at least P (P=1?) larger than the most recent event's delta?
              // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
              // If 1-4 are "yes" then we're near the end of a momentum scroll deceleration.
              // Snap immediately and ignore remaining wheel events in this scroll.
              // See comment above for "remaining wheel events in this scroll" determination.
              // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
              clearTimeout(swiper.mousewheel.timeout);
              swiper.mousewheel.timeout = undefined;
              var _recentWheelEvents = swiper.mousewheel.recentWheelEvents;
  
              if (_recentWheelEvents.length >= 15) {
                _recentWheelEvents.shift(); // only store the last N events
  
              }
  
              var _prevEvent = _recentWheelEvents.length ? _recentWheelEvents[_recentWheelEvents.length - 1] : undefined;
  
              var firstEvent = _recentWheelEvents[0];
  
              _recentWheelEvents.push(_newEvent);
  
              if (_prevEvent && (_newEvent.delta > _prevEvent.delta || _newEvent.direction !== _prevEvent.direction)) {
                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                _recentWheelEvents.splice(0);
              } else if (_recentWheelEvents.length >= 15 && _newEvent.time - firstEvent.time < 500 && firstEvent.delta - _newEvent.delta >= 1 && _newEvent.delta <= 6) {
                // We're at the end of the deceleration of a momentum scroll, so there's no need
                // to wait for more events. Snap ASAP on the next tick.
                // Also, because there's some remaining momentum we'll bias the snap in the
                // direction of the ongoing scroll because it's better UX for the scroll to snap
                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                // if it's already scrolled more than 20% in the current direction, keep going.
                var snapToThreshold = delta > 0 ? 0.8 : 0.2;
                swiper.mousewheel.lastEventBeforeSnap = _newEvent;
  
                _recentWheelEvents.splice(0);
  
                swiper.mousewheel.timeout = nextTick(function () {
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 0); // no delay; move on next tick
              }
  
              if (!swiper.mousewheel.timeout) {
                // if we get here, then we haven't detected the end of a momentum scroll, so
                // we'll consider a scroll "complete" when there haven't been any wheel events
                // for 500ms.
                swiper.mousewheel.timeout = nextTick(function () {
                  var snapToThreshold = 0.5;
                  swiper.mousewheel.lastEventBeforeSnap = _newEvent;
  
                  _recentWheelEvents.splice(0);
  
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 500);
              }
            } // Emit event
  
  
            if (!ignoreWheelEvents) swiper.emit('scroll', e); // Stop autoplay
  
            if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) swiper.autoplay.stop(); // Return page scroll on edge positions
  
            if (position === swiper.minTranslate() || position === swiper.maxTranslate()) return true;
          }
        }
  
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        return false;
      },
      animateSlider: function animateSlider(newEvent) {
        var swiper = this;
        var window = getWindow();
  
        if (this.params.mousewheel.thresholdDelta && newEvent.delta < this.params.mousewheel.thresholdDelta) {
          // Prevent if delta of wheel scroll delta is below configured threshold
          return false;
        }
  
        if (this.params.mousewheel.thresholdTime && now() - swiper.mousewheel.lastScrollTime < this.params.mousewheel.thresholdTime) {
          // Prevent if time between scrolls is below configured threshold
          return false;
        } // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).
  
  
        if (newEvent.delta >= 6 && now() - swiper.mousewheel.lastScrollTime < 60) {
          // Return false as a default
          return true;
        } // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.
  
  
        if (newEvent.direction < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', newEvent.raw);
          }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time
  
  
        swiper.mousewheel.lastScrollTime = new window.Date().getTime(); // Return false as a default
  
        return false;
      },
      releaseScroll: function releaseScroll(newEvent) {
        var swiper = this;
        var params = swiper.params.mousewheel;
  
        if (newEvent.direction < 0) {
          if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
          }
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }
  
        return false;
      },
      enable: function enable() {
        var swiper = this;
        var event = Mousewheel.event();
  
        if (swiper.params.cssMode) {
          swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
          return true;
        }
  
        if (!event) return false;
        if (swiper.mousewheel.enabled) return false;
        var target = swiper.$el;
  
        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarget);
        }
  
        target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
        target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
        target.on(event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = true;
        return true;
      },
      disable: function disable() {
        var swiper = this;
        var event = Mousewheel.event();
  
        if (swiper.params.cssMode) {
          swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
          return true;
        }
  
        if (!event) return false;
        if (!swiper.mousewheel.enabled) return false;
        var target = swiper.$el;
  
        if (swiper.params.mousewheel.eventsTarget !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarget);
        }
  
        target.off(event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = false;
        return true;
      }
    };
    var Mousewheel$1 = {
      name: 'mousewheel',
      params: {
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarget: 'container',
          thresholdDelta: null,
          thresholdTime: null
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          mousewheel: {
            enabled: false,
            lastScrollTime: now(),
            lastEventBeforeSnap: undefined,
            recentWheelEvents: [],
            enable: Mousewheel.enable,
            disable: Mousewheel.disable,
            handle: Mousewheel.handle,
            handleMouseEnter: Mousewheel.handleMouseEnter,
            handleMouseLeave: Mousewheel.handleMouseLeave,
            animateSlider: Mousewheel.animateSlider,
            releaseScroll: Mousewheel.releaseScroll
          }
        });
      },
      on: {
        init: function init(swiper) {
          if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
            swiper.mousewheel.disable();
          }
  
          if (swiper.params.mousewheel.enabled) swiper.mousewheel.enable();
        },
        destroy: function destroy(swiper) {
          if (swiper.params.cssMode) {
            swiper.mousewheel.enable();
          }
  
          if (swiper.mousewheel.enabled) swiper.mousewheel.disable();
        }
      }
    };
  
    var Navigation = {
      update: function update() {
        // Update Navigation Buttons
        var swiper = this;
        var params = swiper.params.navigation;
        if (swiper.params.loop) return;
        var _swiper$navigation = swiper.navigation,
            $nextEl = _swiper$navigation.$nextEl,
            $prevEl = _swiper$navigation.$prevEl;
  
        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            $prevEl.addClass(params.disabledClass);
          } else {
            $prevEl.removeClass(params.disabledClass);
          }
  
          $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
  
        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            $nextEl.addClass(params.disabledClass);
          } else {
            $nextEl.removeClass(params.disabledClass);
          }
  
          $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      },
      onPrevClick: function onPrevClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isBeginning && !swiper.params.loop) return;
        swiper.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        var swiper = this;
        e.preventDefault();
        if (swiper.isEnd && !swiper.params.loop) return;
        swiper.slideNext();
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.navigation;
        if (!(params.nextEl || params.prevEl)) return;
        var $nextEl;
        var $prevEl;
  
        if (params.nextEl) {
          $nextEl = $(params.nextEl);
  
          if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
            $nextEl = swiper.$el.find(params.nextEl);
          }
        }
  
        if (params.prevEl) {
          $prevEl = $(params.prevEl);
  
          if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
            $prevEl = swiper.$el.find(params.prevEl);
          }
        }
  
        if ($nextEl && $nextEl.length > 0) {
          $nextEl.on('click', swiper.navigation.onNextClick);
        }
  
        if ($prevEl && $prevEl.length > 0) {
          $prevEl.on('click', swiper.navigation.onPrevClick);
        }
  
        extend$1(swiper.navigation, {
          $nextEl: $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl: $prevEl,
          prevEl: $prevEl && $prevEl[0]
        });
      },
      destroy: function destroy() {
        var swiper = this;
        var _swiper$navigation2 = swiper.navigation,
            $nextEl = _swiper$navigation2.$nextEl,
            $prevEl = _swiper$navigation2.$prevEl;
  
        if ($nextEl && $nextEl.length) {
          $nextEl.off('click', swiper.navigation.onNextClick);
          $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }
  
        if ($prevEl && $prevEl.length) {
          $prevEl.off('click', swiper.navigation.onPrevClick);
          $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
      }
    };
    var Navigation$1 = {
      name: 'navigation',
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock'
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          navigation: _extends({}, Navigation)
        });
      },
      on: {
        init: function init(swiper) {
          swiper.navigation.init();
          swiper.navigation.update();
        },
        toEdge: function toEdge(swiper) {
          swiper.navigation.update();
        },
        fromEdge: function fromEdge(swiper) {
          swiper.navigation.update();
        },
        destroy: function destroy(swiper) {
          swiper.navigation.destroy();
        },
        click: function click(swiper, e) {
          var _swiper$navigation3 = swiper.navigation,
              $nextEl = _swiper$navigation3.$nextEl,
              $prevEl = _swiper$navigation3.$prevEl;
  
          if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
            var isHidden;
  
            if ($nextEl) {
              isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            } else if ($prevEl) {
              isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            }
  
            if (isHidden === true) {
              swiper.emit('navigationShow');
            } else {
              swiper.emit('navigationHide');
            }
  
            if ($nextEl) {
              $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            }
  
            if ($prevEl) {
              $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
            }
          }
        }
      }
    };
  
    var Pagination = {
      update: function update() {
        // Render || Update Pagination bullets/items
        var swiper = this;
        var rtl = swiper.rtl;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el; // Current/Total
  
        var current;
        var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
  
        if (swiper.params.loop) {
          current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);
  
          if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
            current -= slidesLength - swiper.loopedSlides * 2;
          }
  
          if (current > total - 1) current -= total;
          if (current < 0 && swiper.params.paginationType !== 'bullets') current = total + current;
        } else if (typeof swiper.snapIndex !== 'undefined') {
          current = swiper.snapIndex;
        } else {
          current = swiper.activeIndex || 0;
        } // Types
  
  
        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
          var bullets = swiper.pagination.bullets;
          var firstIndex;
          var lastIndex;
          var midIndex;
  
          if (params.dynamicBullets) {
            swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
            $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");
  
            if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
              swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;
  
              if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
                swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (swiper.pagination.dynamicBulletIndex < 0) {
                swiper.pagination.dynamicBulletIndex = 0;
              }
            }
  
            firstIndex = current - swiper.pagination.dynamicBulletIndex;
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }
  
          bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");
  
          if ($el.length > 1) {
            bullets.each(function (bullet) {
              var $bullet = $(bullet);
              var bulletIndex = $bullet.index();
  
              if (bulletIndex === current) {
                $bullet.addClass(params.bulletActiveClass);
              }
  
              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  $bullet.addClass(params.bulletActiveClass + "-main");
                }
  
                if (bulletIndex === firstIndex) {
                  $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                }
  
                if (bulletIndex === lastIndex) {
                  $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                }
              }
            });
          } else {
            var $bullet = bullets.eq(current);
            var bulletIndex = $bullet.index();
            $bullet.addClass(params.bulletActiveClass);
  
            if (params.dynamicBullets) {
              var $firstDisplayedBullet = bullets.eq(firstIndex);
              var $lastDisplayedBullet = bullets.eq(lastIndex);
  
              for (var i = firstIndex; i <= lastIndex; i += 1) {
                bullets.eq(i).addClass(params.bulletActiveClass + "-main");
              }
  
              if (swiper.params.loop) {
                if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                  for (var _i = params.dynamicMainBullets; _i >= 0; _i -= 1) {
                    bullets.eq(bullets.length - _i).addClass(params.bulletActiveClass + "-main");
                  }
  
                  bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
                } else {
                  $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                  $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                }
              } else {
                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
              }
            }
          }
  
          if (params.dynamicBullets) {
            var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
            var offsetProp = rtl ? 'right' : 'left';
            bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
          }
        }
  
        if (params.type === 'fraction') {
          $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
          $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
        }
  
        if (params.type === 'progressbar') {
          var progressbarDirection;
  
          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }
  
          var scale = (current + 1) / total;
          var scaleX = 1;
          var scaleY = 1;
  
          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }
  
          $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
        }
  
        if (params.type === 'custom' && params.renderCustom) {
          $el.html(params.renderCustom(swiper, current + 1, total));
          swiper.emit('paginationRender', $el[0]);
        } else {
          swiper.emit('paginationUpdate', $el[0]);
        }
  
        $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      },
      render: function render() {
        // Render Container
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el;
        var paginationHTML = '';
  
        if (params.type === 'bullets') {
          var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;
  
          for (var i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            } else {
              paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
            }
          }
  
          $el.html(paginationHTML);
          swiper.pagination.bullets = $el.find("." + params.bulletClass);
        }
  
        if (params.type === 'fraction') {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
          } else {
            paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + ("<span class=\"" + params.totalClass + "\"></span>");
          }
  
          $el.html(paginationHTML);
        }
  
        if (params.type === 'progressbar') {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
          } else {
            paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
          }
  
          $el.html(paginationHTML);
        }
  
        if (params.type !== 'custom') {
          swiper.emit('paginationRender', swiper.pagination.$el[0]);
        }
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el) return;
        var $el = $(params.el);
        if ($el.length === 0) return;
  
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1) {
          $el = swiper.$el.find(params.el);
        }
  
        if (params.type === 'bullets' && params.clickable) {
          $el.addClass(params.clickableClass);
        }
  
        $el.addClass(params.modifierClass + params.type);
  
        if (params.type === 'bullets' && params.dynamicBullets) {
          $el.addClass("" + params.modifierClass + params.type + "-dynamic");
          swiper.pagination.dynamicBulletIndex = 0;
  
          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }
  
        if (params.type === 'progressbar' && params.progressbarOpposite) {
          $el.addClass(params.progressbarOppositeClass);
        }
  
        if (params.clickable) {
          $el.on('click', "." + params.bulletClass, function onClick(e) {
            e.preventDefault();
            var index = $(this).index() * swiper.params.slidesPerGroup;
            if (swiper.params.loop) index += swiper.loopedSlides;
            swiper.slideTo(index);
          });
        }
  
        extend$1(swiper.pagination, {
          $el: $el,
          el: $el[0]
        });
      },
      destroy: function destroy() {
        var swiper = this;
        var params = swiper.params.pagination;
        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) return;
        var $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);
        if (swiper.pagination.bullets) swiper.pagination.bullets.removeClass(params.bulletActiveClass);
  
        if (params.clickable) {
          $el.off('click', "." + params.bulletClass);
        }
      }
    };
    var Pagination$1 = {
      name: 'pagination',
      params: {
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: 'bullets',
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(number) {
            return number;
          },
          formatFractionTotal: function formatFractionTotal(number) {
            return number;
          },
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          modifierClass: 'swiper-pagination-',
          // NEW
          currentClass: 'swiper-pagination-current',
          totalClass: 'swiper-pagination-total',
          hiddenClass: 'swiper-pagination-hidden',
          progressbarFillClass: 'swiper-pagination-progressbar-fill',
          progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
          clickableClass: 'swiper-pagination-clickable',
          // NEW
          lockClass: 'swiper-pagination-lock'
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          pagination: _extends({
            dynamicBulletIndex: 0
          }, Pagination)
        });
      },
      on: {
        init: function init(swiper) {
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        },
        activeIndexChange: function activeIndexChange(swiper) {
          if (swiper.params.loop) {
            swiper.pagination.update();
          } else if (typeof swiper.snapIndex === 'undefined') {
            swiper.pagination.update();
          }
        },
        snapIndexChange: function snapIndexChange(swiper) {
          if (!swiper.params.loop) {
            swiper.pagination.update();
          }
        },
        slidesLengthChange: function slidesLengthChange(swiper) {
          if (swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        snapGridLengthChange: function snapGridLengthChange(swiper) {
          if (!swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        destroy: function destroy(swiper) {
          swiper.pagination.destroy();
        },
        click: function click(swiper, e) {
          if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
            var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);
  
            if (isHidden === true) {
              swiper.emit('paginationShow');
            } else {
              swiper.emit('paginationHide');
            }
  
            swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
          }
        }
      }
    };
  
    var Scrollbar = {
      setTranslate: function setTranslate() {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        var scrollbar = swiper.scrollbar,
            rtl = swiper.rtlTranslate,
            progress = swiper.progress;
        var dragSize = scrollbar.dragSize,
            trackSize = scrollbar.trackSize,
            $dragEl = scrollbar.$dragEl,
            $el = scrollbar.$el;
        var params = swiper.params.scrollbar;
        var newSize = dragSize;
        var newPos = (trackSize - dragSize) * progress;
  
        if (rtl) {
          newPos = -newPos;
  
          if (newPos > 0) {
            newSize = dragSize - newPos;
            newPos = 0;
          } else if (-newPos + dragSize > trackSize) {
            newSize = trackSize + newPos;
          }
        } else if (newPos < 0) {
          newSize = dragSize + newPos;
          newPos = 0;
        } else if (newPos + dragSize > trackSize) {
          newSize = trackSize - newPos;
        }
  
        if (swiper.isHorizontal()) {
          $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
          $dragEl[0].style.width = newSize + "px";
        } else {
          $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
          $dragEl[0].style.height = newSize + "px";
        }
  
        if (params.hide) {
          clearTimeout(swiper.scrollbar.timeout);
          $el[0].style.opacity = 1;
          swiper.scrollbar.timeout = setTimeout(function () {
            $el[0].style.opacity = 0;
            $el.transition(400);
          }, 1000);
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        swiper.scrollbar.$dragEl.transition(duration);
      },
      updateSize: function updateSize() {
        var swiper = this;
        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) return;
        var scrollbar = swiper.scrollbar;
        var $dragEl = scrollbar.$dragEl,
            $el = scrollbar.$el;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        var divider = swiper.size / swiper.virtualSize;
        var moveDivider = divider * (trackSize / swiper.size);
        var dragSize;
  
        if (swiper.params.scrollbar.dragSize === 'auto') {
          dragSize = trackSize * divider;
        } else {
          dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        }
  
        if (swiper.isHorizontal()) {
          $dragEl[0].style.width = dragSize + "px";
        } else {
          $dragEl[0].style.height = dragSize + "px";
        }
  
        if (divider >= 1) {
          $el[0].style.display = 'none';
        } else {
          $el[0].style.display = '';
        }
  
        if (swiper.params.scrollbar.hide) {
          $el[0].style.opacity = 0;
        }
  
        extend$1(scrollbar, {
          trackSize: trackSize,
          divider: divider,
          moveDivider: moveDivider,
          dragSize: dragSize
        });
        scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
      },
      getPointerPosition: function getPointerPosition(e) {
        var swiper = this;
  
        if (swiper.isHorizontal()) {
          return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        }
  
        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
      },
      setDragPosition: function setDragPosition(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar,
            rtl = swiper.rtlTranslate;
        var $el = scrollbar.$el,
            dragSize = scrollbar.dragSize,
            trackSize = scrollbar.trackSize,
            dragStartPos = scrollbar.dragStartPos;
        var positionRatio;
        positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);
  
        if (rtl) {
          positionRatio = 1 - positionRatio;
        }
  
        var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar,
            $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el,
            $dragEl = scrollbar.$dragEl;
        swiper.scrollbar.isTouched = true;
        swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        scrollbar.setDragPosition(e);
        clearTimeout(swiper.scrollbar.dragTimeout);
        $el.transition(0);
  
        if (params.hide) {
          $el.css('opacity', 1);
        }
  
        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', 'none');
        }
  
        swiper.emit('scrollbarDragStart', e);
      },
      onDragMove: function onDragMove(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar,
            $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el,
            $dragEl = scrollbar.$dragEl;
        if (!swiper.scrollbar.isTouched) return;
        if (e.preventDefault) e.preventDefault();else e.returnValue = false;
        scrollbar.setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        swiper.emit('scrollbarDragMove', e);
      },
      onDragEnd: function onDragEnd(e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar,
            $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el;
        if (!swiper.scrollbar.isTouched) return;
        swiper.scrollbar.isTouched = false;
  
        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', '');
          $wrapperEl.transition('');
        }
  
        if (params.hide) {
          clearTimeout(swiper.scrollbar.dragTimeout);
          swiper.scrollbar.dragTimeout = nextTick(function () {
            $el.css('opacity', 0);
            $el.transition(400);
          }, 1000);
        }
  
        swiper.emit('scrollbarDragEnd', e);
  
        if (params.snapOnRelease) {
          swiper.slideToClosest();
        }
      },
      enableDraggable: function enableDraggable() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) return;
        var document = getDocument();
        var scrollbar = swiper.scrollbar,
            touchEventsTouch = swiper.touchEventsTouch,
            touchEventsDesktop = swiper.touchEventsDesktop,
            params = swiper.params,
            support = swiper.support;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        var passiveListener = support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
  
        if (!support.touch) {
          target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
          document.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
          document.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
          target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
          target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
          target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
      },
      disableDraggable: function disableDraggable() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) return;
        var document = getDocument();
        var scrollbar = swiper.scrollbar,
            touchEventsTouch = swiper.touchEventsTouch,
            touchEventsDesktop = swiper.touchEventsDesktop,
            params = swiper.params,
            support = swiper.support;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        var passiveListener = support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
  
        if (!support.touch) {
          target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
          document.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
          document.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
          target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
          target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
          target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
      },
      init: function init() {
        var swiper = this;
        if (!swiper.params.scrollbar.el) return;
        var scrollbar = swiper.scrollbar,
            $swiperEl = swiper.$el;
        var params = swiper.params.scrollbar;
        var $el = $(params.el);
  
        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
          $el = $swiperEl.find(params.el);
        }
  
        var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);
  
        if ($dragEl.length === 0) {
          $dragEl = $("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
          $el.append($dragEl);
        }
  
        extend$1(scrollbar, {
          $el: $el,
          el: $el[0],
          $dragEl: $dragEl,
          dragEl: $dragEl[0]
        });
  
        if (params.draggable) {
          scrollbar.enableDraggable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.disableDraggable();
      }
    };
    var Scrollbar$1 = {
      name: 'scrollbar',
      params: {
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: false,
          draggable: false,
          snapOnRelease: true,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag'
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          scrollbar: _extends({
            isTouched: false,
            timeout: null,
            dragTimeout: null
          }, Scrollbar)
        });
      },
      on: {
        init: function init(swiper) {
          swiper.scrollbar.init();
          swiper.scrollbar.updateSize();
          swiper.scrollbar.setTranslate();
        },
        update: function update(swiper) {
          swiper.scrollbar.updateSize();
        },
        resize: function resize(swiper) {
          swiper.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate(swiper) {
          swiper.scrollbar.updateSize();
        },
        setTranslate: function setTranslate(swiper) {
          swiper.scrollbar.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          swiper.scrollbar.setTransition(duration);
        },
        destroy: function destroy(swiper) {
          swiper.scrollbar.destroy();
        }
      }
    };
  
    var Parallax = {
      setTransform: function setTransform(el, progress) {
        var swiper = this;
        var rtl = swiper.rtl;
        var $el = $(el);
        var rtlFactor = rtl ? -1 : 1;
        var p = $el.attr('data-swiper-parallax') || '0';
        var x = $el.attr('data-swiper-parallax-x');
        var y = $el.attr('data-swiper-parallax-y');
        var scale = $el.attr('data-swiper-parallax-scale');
        var opacity = $el.attr('data-swiper-parallax-opacity');
  
        if (x || y) {
          x = x || '0';
          y = y || '0';
        } else if (swiper.isHorizontal()) {
          x = p;
          y = '0';
        } else {
          y = p;
          x = '0';
        }
  
        if (x.indexOf('%') >= 0) {
          x = parseInt(x, 10) * progress * rtlFactor + "%";
        } else {
          x = x * progress * rtlFactor + "px";
        }
  
        if (y.indexOf('%') >= 0) {
          y = parseInt(y, 10) * progress + "%";
        } else {
          y = y * progress + "px";
        }
  
        if (typeof opacity !== 'undefined' && opacity !== null) {
          var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
          $el[0].style.opacity = currentOpacity;
        }
  
        if (typeof scale === 'undefined' || scale === null) {
          $el.transform("translate3d(" + x + ", " + y + ", 0px)");
        } else {
          var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
          $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el,
            slides = swiper.slides,
            progress = swiper.progress,
            snapGrid = swiper.snapGrid;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
          swiper.parallax.setTransform(el, progress);
        });
        slides.each(function (slideEl, slideIndex) {
          var slideProgress = slideEl.progress;
  
          if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
            slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
          }
  
          slideProgress = Math.min(Math.max(slideProgress, -1), 1);
          $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
        });
      },
      setTransition: function setTransition(duration) {
        if (duration === void 0) {
          duration = this.params.speed;
        }
  
        var swiper = this;
        var $el = swiper.$el;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;
          if (duration === 0) parallaxDuration = 0;
          $parallaxEl.transition(parallaxDuration);
        });
      }
    };
    var Parallax$1 = {
      name: 'parallax',
      params: {
        parallax: {
          enabled: false
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          parallax: _extends({}, Parallax)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (!swiper.params.parallax.enabled) return;
          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        },
        init: function init(swiper) {
          if (!swiper.params.parallax.enabled) return;
          swiper.parallax.setTranslate();
        },
        setTranslate: function setTranslate(swiper) {
          if (!swiper.params.parallax.enabled) return;
          swiper.parallax.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          if (!swiper.params.parallax.enabled) return;
          swiper.parallax.setTransition(duration);
        }
      }
    };
  
    var Zoom = {
      // Calc Scale From Multi-touches
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) return 1;
        var x1 = e.targetTouches[0].pageX;
        var y1 = e.targetTouches[0].pageY;
        var x2 = e.targetTouches[1].pageX;
        var y2 = e.targetTouches[1].pageY;
        var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
      },
      // Events
      onGestureStart: function onGestureStart(e) {
        var swiper = this;
        var support = swiper.support;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;
  
        if (!support.gestures) {
          if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
            return;
          }
  
          zoom.fakeGestureTouched = true;
          gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
        }
  
        if (!gesture.$slideEl || !gesture.$slideEl.length) {
          gesture.$slideEl = $(e.target).closest("." + swiper.params.slideClass);
          if (gesture.$slideEl.length === 0) gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
          gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
  
          if (gesture.$imageWrapEl.length === 0) {
            gesture.$imageEl = undefined;
            return;
          }
        }
  
        if (gesture.$imageEl) {
          gesture.$imageEl.transition(0);
        }
  
        swiper.zoom.isScaling = true;
      },
      onGestureChange: function onGestureChange(e) {
        var swiper = this;
        var support = swiper.support;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
  
        if (!support.gestures) {
          if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
            return;
          }
  
          zoom.fakeGestureMoved = true;
          gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
        }
  
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          if (e.type === 'gesturechange') zoom.onGestureStart(e);
          return;
        }
  
        if (support.gestures) {
          zoom.scale = e.scale * zoom.currentScale;
        } else {
          zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
        }
  
        if (zoom.scale > gesture.maxRatio) {
          zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
        }
  
        if (zoom.scale < params.minRatio) {
          zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
        }
  
        gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      },
      onGestureEnd: function onGestureEnd(e) {
        var swiper = this;
        var device = swiper.device;
        var support = swiper.support;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
  
        if (!support.gestures) {
          if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
            return;
          }
  
          if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !device.android) {
            return;
          }
  
          zoom.fakeGestureTouched = false;
          zoom.fakeGestureMoved = false;
        }
  
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        zoom.currentScale = zoom.scale;
        zoom.isScaling = false;
        if (zoom.scale === 1) gesture.$slideEl = undefined;
      },
      onTouchStart: function onTouchStart(e) {
        var swiper = this;
        var device = swiper.device;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture,
            image = zoom.image;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        if (image.isTouched) return;
        if (device.android && e.cancelable) e.preventDefault();
        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      },
      onTouchMove: function onTouchMove(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture,
            image = zoom.image,
            velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        swiper.allowClick = false;
        if (!image.isTouched || !gesture.$slideEl) return;
  
        if (!image.isMoved) {
          image.width = gesture.$imageEl[0].offsetWidth;
          image.height = gesture.$imageEl[0].offsetHeight;
          image.startX = getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
          image.startY = getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
          gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
          gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
          gesture.$imageWrapEl.transition(0);
  
          if (swiper.rtl) {
            image.startX = -image.startX;
            image.startY = -image.startY;
          }
        } // Define if we need image drag
  
  
        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) return;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;
  
        if (!image.isMoved && !zoom.isScaling) {
          if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
            image.isTouched = false;
            return;
          }
  
          if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
            image.isTouched = false;
            return;
          }
        }
  
        if (e.cancelable) {
          e.preventDefault();
        }
  
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;
  
        if (image.currentX < image.minX) {
          image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
        }
  
        if (image.currentX > image.maxX) {
          image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
        }
  
        if (image.currentY < image.minY) {
          image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
        }
  
        if (image.currentY > image.maxY) {
          image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
        } // Velocity
  
  
        if (!velocity.prevPositionX) velocity.prevPositionX = image.touchesCurrent.x;
        if (!velocity.prevPositionY) velocity.prevPositionY = image.touchesCurrent.y;
        if (!velocity.prevTime) velocity.prevTime = Date.now();
        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;
        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) velocity.x = 0;
        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) velocity.y = 0;
        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
      },
      onTouchEnd: function onTouchEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture,
            image = zoom.image,
            velocity = zoom.velocity;
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
  
        if (!image.isTouched || !image.isMoved) {
          image.isTouched = false;
          image.isMoved = false;
          return;
        }
  
        image.isTouched = false;
        image.isMoved = false;
        var momentumDurationX = 300;
        var momentumDurationY = 300;
        var momentumDistanceX = velocity.x * momentumDurationX;
        var newPositionX = image.currentX + momentumDistanceX;
        var momentumDistanceY = velocity.y * momentumDurationY;
        var newPositionY = image.currentY + momentumDistanceY; // Fix duration
  
        if (velocity.x !== 0) momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        if (velocity.y !== 0) momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag
  
        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
      },
      onTransitionEnd: function onTransitionEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
  
        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
          if (gesture.$imageEl) {
            gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
          }
  
          if (gesture.$imageWrapEl) {
            gesture.$imageWrapEl.transform('translate3d(0,0,0)');
          }
  
          zoom.scale = 1;
          zoom.currentScale = 1;
          gesture.$slideEl = undefined;
          gesture.$imageEl = undefined;
          gesture.$imageWrapEl = undefined;
        }
      },
      // Toggle Zoom
      toggle: function toggle(e) {
        var swiper = this;
        var zoom = swiper.zoom;
  
        if (zoom.scale && zoom.scale !== 1) {
          // Zoom Out
          zoom.out();
        } else {
          // Zoom In
          zoom.in(e);
        }
      },
      in: function _in(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture,
            image = zoom.image;
  
        if (!gesture.$slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }
  
          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        }
  
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        gesture.$slideEl.addClass("" + params.zoomedSlideClass);
        var touchX;
        var touchY;
        var offsetX;
        var offsetY;
        var diffX;
        var diffY;
        var translateX;
        var translateY;
        var imageWidth;
        var imageHeight;
        var scaledWidth;
        var scaledHeight;
        var translateMinX;
        var translateMinY;
        var translateMaxX;
        var translateMaxY;
        var slideWidth;
        var slideHeight;
  
        if (typeof image.touchesStart.x === 'undefined' && e) {
          touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
          touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
          touchX = image.touchesStart.x;
          touchY = image.touchesStart.y;
        }
  
        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
  
        if (e) {
          slideWidth = gesture.$slideEl[0].offsetWidth;
          slideHeight = gesture.$slideEl[0].offsetHeight;
          offsetX = gesture.$slideEl.offset().left;
          offsetY = gesture.$slideEl.offset().top;
          diffX = offsetX + slideWidth / 2 - touchX;
          diffY = offsetY + slideHeight / 2 - touchY;
          imageWidth = gesture.$imageEl[0].offsetWidth;
          imageHeight = gesture.$imageEl[0].offsetHeight;
          scaledWidth = imageWidth * zoom.scale;
          scaledHeight = imageHeight * zoom.scale;
          translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
          translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
          translateMaxX = -translateMinX;
          translateMaxY = -translateMinY;
          translateX = diffX * zoom.scale;
          translateY = diffY * zoom.scale;
  
          if (translateX < translateMinX) {
            translateX = translateMinX;
          }
  
          if (translateX > translateMaxX) {
            translateX = translateMaxX;
          }
  
          if (translateY < translateMinY) {
            translateY = translateMinY;
          }
  
          if (translateY > translateMaxY) {
            translateY = translateMaxY;
          }
        } else {
          translateX = 0;
          translateY = 0;
        }
  
        gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
        gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      },
      out: function out() {
        var swiper = this;
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture;
  
        if (!gesture.$slideEl) {
          if (swiper.params.virtual && swiper.params.virtual.enabled && swiper.virtual) {
            gesture.$slideEl = swiper.$wrapperEl.children("." + swiper.params.slideActiveClass);
          } else {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }
  
          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        }
  
        if (!gesture.$imageEl || gesture.$imageEl.length === 0) return;
        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
        gesture.$slideEl = undefined;
      },
      toggleGestures: function toggleGestures(method) {
        var swiper = this;
        var zoom = swiper.zoom;
        var selector = zoom.slideSelector,
            passive = zoom.passiveListener;
        swiper.$wrapperEl[method]('gesturestart', selector, zoom.onGestureStart, passive);
        swiper.$wrapperEl[method]('gesturechange', selector, zoom.onGestureChange, passive);
        swiper.$wrapperEl[method]('gestureend', selector, zoom.onGestureEnd, passive);
      },
      enableGestures: function enableGestures() {
        if (this.zoom.gesturesEnabled) return;
        this.zoom.gesturesEnabled = true;
        this.zoom.toggleGestures('on');
      },
      disableGestures: function disableGestures() {
        if (!this.zoom.gesturesEnabled) return;
        this.zoom.gesturesEnabled = false;
        this.zoom.toggleGestures('off');
      },
      // Attach/Detach Events
      enable: function enable() {
        var swiper = this;
        var support = swiper.support;
        var zoom = swiper.zoom;
        if (zoom.enabled) return;
        zoom.enabled = true;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        var activeListenerWithCapture = support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        var slideSelector = "." + swiper.params.slideClass;
        swiper.zoom.passiveListener = passiveListener;
        swiper.zoom.slideSelector = slideSelector; // Scale image
  
        if (support.gestures) {
          swiper.$wrapperEl.on(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
  
          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
          }
        } // Move image
  
  
        swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
      },
      disable: function disable() {
        var swiper = this;
        var zoom = swiper.zoom;
        if (!zoom.enabled) return;
        var support = swiper.support;
        swiper.zoom.enabled = false;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        var activeListenerWithCapture = support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        var slideSelector = "." + swiper.params.slideClass; // Scale image
  
        if (support.gestures) {
          swiper.$wrapperEl.off(swiper.touchEvents.start, swiper.zoom.enableGestures, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.end, swiper.zoom.disableGestures, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);
  
          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
          }
        } // Move image
  
  
        swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
      }
    };
    var Zoom$1 = {
      name: 'zoom',
      params: {
        zoom: {
          enabled: false,
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed'
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          zoom: _extends({
            enabled: false,
            scale: 1,
            currentScale: 1,
            isScaling: false,
            gesture: {
              $slideEl: undefined,
              slideWidth: undefined,
              slideHeight: undefined,
              $imageEl: undefined,
              $imageWrapEl: undefined,
              maxRatio: 3
            },
            image: {
              isTouched: undefined,
              isMoved: undefined,
              currentX: undefined,
              currentY: undefined,
              minX: undefined,
              minY: undefined,
              maxX: undefined,
              maxY: undefined,
              width: undefined,
              height: undefined,
              startX: undefined,
              startY: undefined,
              touchesStart: {},
              touchesCurrent: {}
            },
            velocity: {
              x: undefined,
              y: undefined,
              prevPositionX: undefined,
              prevPositionY: undefined,
              prevTime: undefined
            }
          }, Zoom)
        });
        var scale = 1;
        Object.defineProperty(swiper.zoom, 'scale', {
          get: function get() {
            return scale;
          },
          set: function set(value) {
            if (scale !== value) {
              var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
              var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
              swiper.emit('zoomChange', value, imageEl, slideEl);
            }
  
            scale = value;
          }
        });
      },
      on: {
        init: function init(swiper) {
          if (swiper.params.zoom.enabled) {
            swiper.zoom.enable();
          }
        },
        destroy: function destroy(swiper) {
          swiper.zoom.disable();
        },
        touchStart: function touchStart(swiper, e) {
          if (!swiper.zoom.enabled) return;
          swiper.zoom.onTouchStart(e);
        },
        touchEnd: function touchEnd(swiper, e) {
          if (!swiper.zoom.enabled) return;
          swiper.zoom.onTouchEnd(e);
        },
        doubleTap: function doubleTap(swiper, e) {
          if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
            swiper.zoom.toggle(e);
          }
        },
        transitionEnd: function transitionEnd(swiper) {
          if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
            swiper.zoom.onTransitionEnd();
          }
        },
        slideChange: function slideChange(swiper) {
          if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
            swiper.zoom.onTransitionEnd();
          }
        }
      }
    };
  
    var Lazy = {
      loadInSlide: function loadInSlide(index, loadInDuplicate) {
        if (loadInDuplicate === void 0) {
          loadInDuplicate = true;
        }
  
        var swiper = this;
        var params = swiper.params.lazy;
        if (typeof index === 'undefined') return;
        if (swiper.slides.length === 0) return;
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
        var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");
  
        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
          $images.push($slideEl[0]);
        }
  
        if ($images.length === 0) return;
        $images.each(function (imageEl) {
          var $imageEl = $(imageEl);
          $imageEl.addClass(params.loadingClass);
          var background = $imageEl.attr('data-background');
          var src = $imageEl.attr('data-src');
          var srcset = $imageEl.attr('data-srcset');
          var sizes = $imageEl.attr('data-sizes');
          var $pictureEl = $imageEl.parent('picture');
          swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) return;
  
            if (background) {
              $imageEl.css('background-image', "url(\"" + background + "\")");
              $imageEl.removeAttr('data-background');
            } else {
              if (srcset) {
                $imageEl.attr('srcset', srcset);
                $imageEl.removeAttr('data-srcset');
              }
  
              if (sizes) {
                $imageEl.attr('sizes', sizes);
                $imageEl.removeAttr('data-sizes');
              }
  
              if ($pictureEl.length) {
                $pictureEl.children('source').each(function (sourceEl) {
                  var $source = $(sourceEl);
  
                  if ($source.attr('data-srcset')) {
                    $source.attr('srcset', $source.attr('data-srcset'));
                    $source.removeAttr('data-srcset');
                  }
                });
              }
  
              if (src) {
                $imageEl.attr('src', src);
                $imageEl.removeAttr('data-src');
              }
            }
  
            $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
            $slideEl.find("." + params.preloaderClass).remove();
  
            if (swiper.params.loop && loadInDuplicate) {
              var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');
  
              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
                swiper.lazy.loadInSlide(originalSlide.index(), false);
              } else {
                var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
                swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
              }
            }
  
            swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);
  
            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          });
          swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
      },
      load: function load() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl,
            swiperParams = swiper.params,
            slides = swiper.slides,
            activeIndex = swiper.activeIndex;
        var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        var params = swiperParams.lazy;
        var slidesPerView = swiperParams.slidesPerView;
  
        if (slidesPerView === 'auto') {
          slidesPerView = 0;
        }
  
        function slideExist(index) {
          if (isVirtual) {
            if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
              return true;
            }
          } else if (slides[index]) return true;
  
          return false;
        }
  
        function slideIndex(slideEl) {
          if (isVirtual) {
            return $(slideEl).attr('data-swiper-slide-index');
          }
  
          return $(slideEl).index();
        }
  
        if (!swiper.lazy.initialImageLoaded) swiper.lazy.initialImageLoaded = true;
  
        if (swiper.params.watchSlidesVisibility) {
          $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (slideEl) {
            var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
            swiper.lazy.loadInSlide(index);
          });
        } else if (slidesPerView > 1) {
          for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
            if (slideExist(i)) swiper.lazy.loadInSlide(i);
          }
        } else {
          swiper.lazy.loadInSlide(activeIndex);
        }
  
        if (params.loadPrevNext) {
          if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
            var amount = params.loadPrevNextAmount;
            var spv = slidesPerView;
            var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
            var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides
  
            for (var _i = activeIndex + slidesPerView; _i < maxIndex; _i += 1) {
              if (slideExist(_i)) swiper.lazy.loadInSlide(_i);
            } // Prev Slides
  
  
            for (var _i2 = minIndex; _i2 < activeIndex; _i2 += 1) {
              if (slideExist(_i2)) swiper.lazy.loadInSlide(_i2);
            }
          } else {
            var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);
            if (nextSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(nextSlide));
            var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);
            if (prevSlide.length > 0) swiper.lazy.loadInSlide(slideIndex(prevSlide));
          }
        }
      }
    };
    var Lazy$1 = {
      name: 'lazy',
      params: {
        lazy: {
          enabled: false,
          loadPrevNext: false,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: false,
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader'
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          lazy: _extends({
            initialImageLoaded: false
          }, Lazy)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
            swiper.params.preloadImages = false;
          }
        },
        init: function init(swiper) {
          if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
            swiper.lazy.load();
          }
        },
        scroll: function scroll(swiper) {
          if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
            swiper.lazy.load();
          }
        },
        resize: function resize(swiper) {
          if (swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        },
        scrollbarDragMove: function scrollbarDragMove(swiper) {
          if (swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        },
        transitionStart: function transitionStart(swiper) {
          if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
              swiper.lazy.load();
            }
          }
        },
        transitionEnd: function transitionEnd(swiper) {
          if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
            swiper.lazy.load();
          }
        },
        slideChange: function slideChange(swiper) {
          if (swiper.params.lazy.enabled && swiper.params.cssMode) {
            swiper.lazy.load();
          }
        }
      }
    };
  
    var Controller = {
      LinearSpline: function LinearSpline(x, y) {
        var binarySearch = function search() {
          var maxIndex;
          var minIndex;
          var guess;
          return function (array, val) {
            minIndex = -1;
            maxIndex = array.length;
  
            while (maxIndex - minIndex > 1) {
              guess = maxIndex + minIndex >> 1;
  
              if (array[guess] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            }
  
            return maxIndex;
          };
        }();
  
        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.
  
        var i1;
        var i3;
  
        this.interpolate = function interpolate(x2) {
          if (!x2) return 0; // Get the indexes of x1 and x3 (the array indexes before and after given x2):
  
          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
          // y2 := ((x2−x1) × (y3−y1)) ÷ (x3−x1) + y1
  
          return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };
  
        return this;
      },
      // xxx: for now i will just save one spline function to to
      getInterpolateFunction: function getInterpolateFunction(c) {
        var swiper = this;
  
        if (!swiper.controller.spline) {
          swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
        }
      },
      setTranslate: function setTranslate(_setTranslate, byController) {
        var swiper = this;
        var controlled = swiper.controller.control;
        var multiplier;
        var controlledTranslate;
        var Swiper = swiper.constructor;
  
        function setControlledTranslate(c) {
          // this will create an Interpolate function based on the snapGrids
          // x is the Grid of the scrolled scroller and y will be the controlled scroller
          // it makes sense to create this only once and recall it for the interpolation
          // the function does a lot of value caching for performance
          var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;
  
          if (swiper.params.controller.by === 'slide') {
            swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
            // but it did not work out
  
            controlledTranslate = -swiper.controller.spline.interpolate(-translate);
          }
  
          if (!controlledTranslate || swiper.params.controller.by === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
            controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
          }
  
          if (swiper.params.controller.inverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }
  
          c.updateProgress(controlledTranslate);
          c.setTranslate(controlledTranslate, swiper);
          c.updateActiveIndex();
          c.updateSlidesClasses();
        }
  
        if (Array.isArray(controlled)) {
          for (var i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        var Swiper = swiper.constructor;
        var controlled = swiper.controller.control;
        var i;
  
        function setControlledTransition(c) {
          c.setTransition(duration, swiper);
  
          if (duration !== 0) {
            c.transitionStart();
  
            if (c.params.autoHeight) {
              nextTick(function () {
                c.updateAutoHeight();
              });
            }
  
            c.$wrapperEl.transitionEnd(function () {
              if (!controlled) return;
  
              if (c.params.loop && swiper.params.controller.by === 'slide') {
                c.loopFix();
              }
  
              c.transitionEnd();
            });
          }
        }
  
        if (Array.isArray(controlled)) {
          for (i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTransition(controlled);
        }
      }
    };
    var Controller$1 = {
      name: 'controller',
      params: {
        controller: {
          control: undefined,
          inverse: false,
          by: 'slide' // or 'container'
  
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          controller: _extends({
            control: swiper.params.controller.control
          }, Controller)
        });
      },
      on: {
        update: function update(swiper) {
          if (!swiper.controller.control) return;
  
          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        resize: function resize(swiper) {
          if (!swiper.controller.control) return;
  
          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        observerUpdate: function observerUpdate(swiper) {
          if (!swiper.controller.control) return;
  
          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        setTranslate: function setTranslate(swiper, translate, byController) {
          if (!swiper.controller.control) return;
          swiper.controller.setTranslate(translate, byController);
        },
        setTransition: function setTransition(swiper, duration, byController) {
          if (!swiper.controller.control) return;
          swiper.controller.setTransition(duration, byController);
        }
      }
    };
  
    var A11y = {
      getRandomNumber: function getRandomNumber(size) {
        if (size === void 0) {
          size = 16;
        }
  
        var randomChar = function randomChar() {
          return Math.round(16 * Math.random()).toString(16);
        };
  
        return 'x'.repeat(size).replace(/x/g, randomChar);
      },
      makeElFocusable: function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
        return $el;
      },
      makeElNotFocusable: function makeElNotFocusable($el) {
        $el.attr('tabIndex', '-1');
        return $el;
      },
      addElRole: function addElRole($el, role) {
        $el.attr('role', role);
        return $el;
      },
      addElRoleDescription: function addElRoleDescription($el, description) {
        $el.attr('aria-role-description', description);
        return $el;
      },
      addElControls: function addElControls($el, controls) {
        $el.attr('aria-controls', controls);
        return $el;
      },
      addElLabel: function addElLabel($el, label) {
        $el.attr('aria-label', label);
        return $el;
      },
      addElId: function addElId($el, id) {
        $el.attr('id', id);
        return $el;
      },
      addElLive: function addElLive($el, live) {
        $el.attr('aria-live', live);
        return $el;
      },
      disableEl: function disableEl($el) {
        $el.attr('aria-disabled', true);
        return $el;
      },
      enableEl: function enableEl($el) {
        $el.attr('aria-disabled', false);
        return $el;
      },
      onEnterKey: function onEnterKey(e) {
        var swiper = this;
        var params = swiper.params.a11y;
        if (e.keyCode !== 13) return;
        var $targetEl = $(e.target);
  
        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }
  
          if (swiper.isEnd) {
            swiper.a11y.notify(params.lastSlideMessage);
          } else {
            swiper.a11y.notify(params.nextSlideMessage);
          }
        }
  
        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }
  
          if (swiper.isBeginning) {
            swiper.a11y.notify(params.firstSlideMessage);
          } else {
            swiper.a11y.notify(params.prevSlideMessage);
          }
        }
  
        if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass)) {
          $targetEl[0].click();
        }
      },
      notify: function notify(message) {
        var swiper = this;
        var notification = swiper.a11y.liveRegion;
        if (notification.length === 0) return;
        notification.html('');
        notification.html(message);
      },
      updateNavigation: function updateNavigation() {
        var swiper = this;
        if (swiper.params.loop || !swiper.navigation) return;
        var _swiper$navigation = swiper.navigation,
            $nextEl = _swiper$navigation.$nextEl,
            $prevEl = _swiper$navigation.$prevEl;
  
        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            swiper.a11y.disableEl($prevEl);
            swiper.a11y.makeElNotFocusable($prevEl);
          } else {
            swiper.a11y.enableEl($prevEl);
            swiper.a11y.makeElFocusable($prevEl);
          }
        }
  
        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            swiper.a11y.disableEl($nextEl);
            swiper.a11y.makeElNotFocusable($nextEl);
          } else {
            swiper.a11y.enableEl($nextEl);
            swiper.a11y.makeElFocusable($nextEl);
          }
        }
      },
      updatePagination: function updatePagination() {
        var swiper = this;
        var params = swiper.params.a11y;
  
        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.bullets.each(function (bulletEl) {
            var $bulletEl = $(bulletEl);
            swiper.a11y.makeElFocusable($bulletEl);
  
            if (!swiper.params.pagination.renderBullet) {
              swiper.a11y.addElRole($bulletEl, 'button');
              swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/\{\{index\}\}/, $bulletEl.index() + 1));
            }
          });
        }
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.a11y;
        swiper.$el.append(swiper.a11y.liveRegion); // Container
  
        var $containerEl = swiper.$el;
  
        if (params.containerRoleDescriptionMessage) {
          swiper.a11y.addElRoleDescription($containerEl, params.containerRoleDescriptionMessage);
        }
  
        if (params.containerMessage) {
          swiper.a11y.addElLabel($containerEl, params.containerMessage);
        } // Wrapper
  
  
        var $wrapperEl = swiper.$wrapperEl;
        var wrapperId = $wrapperEl.attr('id') || "swiper-wrapper-" + swiper.a11y.getRandomNumber(16);
        var live;
        swiper.a11y.addElId($wrapperEl, wrapperId);
  
        if (swiper.params.autoplay && swiper.params.autoplay.enabled) {
          live = 'off';
        } else {
          live = 'polite';
        }
  
        swiper.a11y.addElLive($wrapperEl, live); // Slide
  
        if (params.itemRoleDescriptionMessage) {
          swiper.a11y.addElRoleDescription($(swiper.slides), params.itemRoleDescriptionMessage);
        }
  
        swiper.a11y.addElRole($(swiper.slides), 'group');
        swiper.slides.each(function (slideEl) {
          var $slideEl = $(slideEl);
          swiper.a11y.addElLabel($slideEl, $slideEl.index() + 1 + " / " + swiper.slides.length);
        }); // Navigation
  
        var $nextEl;
        var $prevEl;
  
        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }
  
        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }
  
        if ($nextEl && $nextEl.length) {
          swiper.a11y.makeElFocusable($nextEl);
  
          if ($nextEl[0].tagName !== 'BUTTON') {
            swiper.a11y.addElRole($nextEl, 'button');
            $nextEl.on('keydown', swiper.a11y.onEnterKey);
          }
  
          swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
          swiper.a11y.addElControls($nextEl, wrapperId);
        }
  
        if ($prevEl && $prevEl.length) {
          swiper.a11y.makeElFocusable($prevEl);
  
          if ($prevEl[0].tagName !== 'BUTTON') {
            swiper.a11y.addElRole($prevEl, 'button');
            $prevEl.on('keydown', swiper.a11y.onEnterKey);
          }
  
          swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
          swiper.a11y.addElControls($prevEl, wrapperId);
        } // Pagination
  
  
        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) swiper.a11y.liveRegion.remove();
        var $nextEl;
        var $prevEl;
  
        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }
  
        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }
  
        if ($nextEl) {
          $nextEl.off('keydown', swiper.a11y.onEnterKey);
        }
  
        if ($prevEl) {
          $prevEl.off('keydown', swiper.a11y.onEnterKey);
        } // Pagination
  
  
        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
        }
      }
    };
    var A11y$1 = {
      name: 'a11y',
      params: {
        a11y: {
          enabled: true,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          a11y: _extends(_extends({}, A11y), {}, {
            liveRegion: $("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
          })
        });
      },
      on: {
        afterInit: function afterInit(swiper) {
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.init();
          swiper.a11y.updateNavigation();
        },
        toEdge: function toEdge(swiper) {
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.updateNavigation();
        },
        fromEdge: function fromEdge(swiper) {
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate(swiper) {
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.updatePagination();
        },
        destroy: function destroy(swiper) {
          if (!swiper.params.a11y.enabled) return;
          swiper.a11y.destroy();
        }
      }
    };
  
    var History = {
      init: function init() {
        var swiper = this;
        var window = getWindow();
        if (!swiper.params.history) return;
  
        if (!window.history || !window.history.pushState) {
          swiper.params.history.enabled = false;
          swiper.params.hashNavigation.enabled = true;
          return;
        }
  
        var history = swiper.history;
        history.initialized = true;
        history.paths = History.getPathValues(swiper.params.url);
        if (!history.paths.key && !history.paths.value) return;
        history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);
  
        if (!swiper.params.history.replaceState) {
          window.addEventListener('popstate', swiper.history.setHistoryPopState);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        var window = getWindow();
  
        if (!swiper.params.history.replaceState) {
          window.removeEventListener('popstate', swiper.history.setHistoryPopState);
        }
      },
      setHistoryPopState: function setHistoryPopState() {
        var swiper = this;
        swiper.history.paths = History.getPathValues(swiper.params.url);
        swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
      },
      getPathValues: function getPathValues(urlOverride) {
        var window = getWindow();
        var location;
  
        if (urlOverride) {
          location = new URL(urlOverride);
        } else {
          location = window.location;
        }
  
        var pathArray = location.pathname.slice(1).split('/').filter(function (part) {
          return part !== '';
        });
        var total = pathArray.length;
        var key = pathArray[total - 2];
        var value = pathArray[total - 1];
        return {
          key: key,
          value: value
        };
      },
      setHistory: function setHistory(key, index) {
        var swiper = this;
        var window = getWindow();
        if (!swiper.history.initialized || !swiper.params.history.enabled) return;
        var location;
  
        if (swiper.params.url) {
          location = new URL(swiper.params.url);
        } else {
          location = window.location;
        }
  
        var slide = swiper.slides.eq(index);
        var value = History.slugify(slide.attr('data-history'));
  
        if (!location.pathname.includes(key)) {
          value = key + "/" + value;
        }
  
        var currentState = window.history.state;
  
        if (currentState && currentState.value === value) {
          return;
        }
  
        if (swiper.params.history.replaceState) {
          window.history.replaceState({
            value: value
          }, null, value);
        } else {
          window.history.pushState({
            value: value
          }, null, value);
        }
      },
      slugify: function slugify(text) {
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
      },
      scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
        var swiper = this;
  
        if (value) {
          for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
            var slide = swiper.slides.eq(i);
            var slideHistory = History.slugify(slide.attr('data-history'));
  
            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              var index = slide.index();
              swiper.slideTo(index, speed, runCallbacks);
            }
          }
        } else {
          swiper.slideTo(0, speed, runCallbacks);
        }
      }
    };
    var History$1 = {
      name: 'history',
      params: {
        history: {
          enabled: false,
          replaceState: false,
          key: 'slides'
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          history: _extends({}, History)
        });
      },
      on: {
        init: function init(swiper) {
          if (swiper.params.history.enabled) {
            swiper.history.init();
          }
        },
        destroy: function destroy(swiper) {
          if (swiper.params.history.enabled) {
            swiper.history.destroy();
          }
        },
        transitionEnd: function transitionEnd(swiper) {
          if (swiper.history.initialized) {
            swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
          }
        },
        slideChange: function slideChange(swiper) {
          if (swiper.history.initialized && swiper.params.cssMode) {
            swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
          }
        }
      }
    };
  
    var HashNavigation = {
      onHashCange: function onHashCange() {
        var swiper = this;
        var document = getDocument();
        swiper.emit('hashChange');
        var newHash = document.location.hash.replace('#', '');
        var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');
  
        if (newHash !== activeSlideHash) {
          var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();
          if (typeof newIndex === 'undefined') return;
          swiper.slideTo(newIndex);
        }
      },
      setHash: function setHash() {
        var swiper = this;
        var window = getWindow();
        var document = getDocument();
        if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) return;
  
        if (swiper.params.hashNavigation.replaceState && window.history && window.history.replaceState) {
          window.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || '');
          swiper.emit('hashSet');
        } else {
          var slide = swiper.slides.eq(swiper.activeIndex);
          var hash = slide.attr('data-hash') || slide.attr('data-history');
          document.location.hash = hash || '';
          swiper.emit('hashSet');
        }
      },
      init: function init() {
        var swiper = this;
        var document = getDocument();
        var window = getWindow();
        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) return;
        swiper.hashNavigation.initialized = true;
        var hash = document.location.hash.replace('#', '');
  
        if (hash) {
          var speed = 0;
  
          for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
            var slide = swiper.slides.eq(i);
            var slideHash = slide.attr('data-hash') || slide.attr('data-history');
  
            if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              var index = slide.index();
              swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
            }
          }
        }
  
        if (swiper.params.hashNavigation.watchState) {
          $(window).on('hashchange', swiper.hashNavigation.onHashCange);
        }
      },
      destroy: function destroy() {
        var swiper = this;
        var window = getWindow();
  
        if (swiper.params.hashNavigation.watchState) {
          $(window).off('hashchange', swiper.hashNavigation.onHashCange);
        }
      }
    };
    var HashNavigation$1 = {
      name: 'hash-navigation',
      params: {
        hashNavigation: {
          enabled: false,
          replaceState: false,
          watchState: false
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          hashNavigation: _extends({
            initialized: false
          }, HashNavigation)
        });
      },
      on: {
        init: function init(swiper) {
          if (swiper.params.hashNavigation.enabled) {
            swiper.hashNavigation.init();
          }
        },
        destroy: function destroy(swiper) {
          if (swiper.params.hashNavigation.enabled) {
            swiper.hashNavigation.destroy();
          }
        },
        transitionEnd: function transitionEnd(swiper) {
          if (swiper.hashNavigation.initialized) {
            swiper.hashNavigation.setHash();
          }
        },
        slideChange: function slideChange(swiper) {
          if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
            swiper.hashNavigation.setHash();
          }
        }
      }
    };
  
    var Autoplay = {
      run: function run() {
        var swiper = this;
        var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        var delay = swiper.params.autoplay.delay;
  
        if ($activeSlideEl.attr('data-swiper-autoplay')) {
          delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        }
  
        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = nextTick(function () {
          var autoplayResult;
  
          if (swiper.params.autoplay.reverseDirection) {
            if (swiper.params.loop) {
              swiper.loopFix();
              autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.isBeginning) {
              autoplayResult = swiper.slidePrev(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              autoplayResult = swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else {
              swiper.autoplay.stop();
            }
          } else if (swiper.params.loop) {
            swiper.loopFix();
            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isEnd) {
            autoplayResult = swiper.slideNext(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            autoplayResult = swiper.slideTo(0, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }
  
          if (swiper.params.cssMode && swiper.autoplay.running) swiper.autoplay.run();else if (autoplayResult === false) {
            swiper.autoplay.run();
          }
        }, delay);
      },
      start: function start() {
        var swiper = this;
        if (typeof swiper.autoplay.timeout !== 'undefined') return false;
        if (swiper.autoplay.running) return false;
        swiper.autoplay.running = true;
        swiper.emit('autoplayStart');
        swiper.autoplay.run();
        return true;
      },
      stop: function stop() {
        var swiper = this;
        if (!swiper.autoplay.running) return false;
        if (typeof swiper.autoplay.timeout === 'undefined') return false;
  
        if (swiper.autoplay.timeout) {
          clearTimeout(swiper.autoplay.timeout);
          swiper.autoplay.timeout = undefined;
        }
  
        swiper.autoplay.running = false;
        swiper.emit('autoplayStop');
        return true;
      },
      pause: function pause(speed) {
        var swiper = this;
        if (!swiper.autoplay.running) return;
        if (swiper.autoplay.paused) return;
        if (swiper.autoplay.timeout) clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.paused = true;
  
        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
          swiper.autoplay.paused = false;
          swiper.autoplay.run();
        } else {
          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
        }
      },
      onVisibilityChange: function onVisibilityChange() {
        var swiper = this;
        var document = getDocument();
  
        if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
          swiper.autoplay.pause();
        }
  
        if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
          swiper.autoplay.run();
          swiper.autoplay.paused = false;
        }
      },
      onTransitionEnd: function onTransitionEnd(e) {
        var swiper = this;
        if (!swiper || swiper.destroyed || !swiper.$wrapperEl) return;
        if (e.target !== swiper.$wrapperEl[0]) return;
        swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
        swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
        swiper.autoplay.paused = false;
  
        if (!swiper.autoplay.running) {
          swiper.autoplay.stop();
        } else {
          swiper.autoplay.run();
        }
      }
    };
    var Autoplay$1 = {
      name: 'autoplay',
      params: {
        autoplay: {
          enabled: false,
          delay: 3000,
          waitForTransition: true,
          disableOnInteraction: true,
          stopOnLastSlide: false,
          reverseDirection: false
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          autoplay: _extends(_extends({}, Autoplay), {}, {
            running: false,
            paused: false
          })
        });
      },
      on: {
        init: function init(swiper) {
          if (swiper.params.autoplay.enabled) {
            swiper.autoplay.start();
            var document = getDocument();
            document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
          }
        },
        beforeTransitionStart: function beforeTransitionStart(swiper, speed, internal) {
          if (swiper.autoplay.running) {
            if (internal || !swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.pause(speed);
            } else {
              swiper.autoplay.stop();
            }
          }
        },
        sliderFirstMove: function sliderFirstMove(swiper) {
          if (swiper.autoplay.running) {
            if (swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.pause();
            }
          }
        },
        touchEnd: function touchEnd(swiper) {
          if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.run();
          }
        },
        destroy: function destroy(swiper) {
          if (swiper.autoplay.running) {
            swiper.autoplay.stop();
          }
  
          var document = getDocument();
          document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
        }
      }
    };
  
    var Fade = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides;
  
        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = swiper.slides.eq(i);
          var offset = $slideEl[0].swiperSlideOffset;
          var tx = -offset;
          if (!swiper.params.virtualTranslate) tx -= swiper.translate;
          var ty = 0;
  
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }
  
          var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl.css({
            opacity: slideOpacity
          }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var slides = swiper.slides,
            $wrapperEl = swiper.$wrapperEl;
        slides.transition(duration);
  
        if (swiper.params.virtualTranslate && duration !== 0) {
          var eventTriggered = false;
          slides.transitionEnd(function () {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return;
            eventTriggered = true;
            swiper.animating = false;
            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
  
            for (var i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    };
    var EffectFade = {
      name: 'effect-fade',
      params: {
        fadeEffect: {
          crossFade: false
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          fadeEffect: _extends({}, Fade)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (swiper.params.effect !== 'fade') return;
          swiper.classNames.push(swiper.params.containerModifierClass + "fade");
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true
          };
          extend$1(swiper.params, overwriteParams);
          extend$1(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate(swiper) {
          if (swiper.params.effect !== 'fade') return;
          swiper.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          if (swiper.params.effect !== 'fade') return;
          swiper.fadeEffect.setTransition(duration);
        }
      }
    };
  
    var Cube = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el,
            $wrapperEl = swiper.$wrapperEl,
            slides = swiper.slides,
            swiperWidth = swiper.width,
            swiperHeight = swiper.height,
            rtl = swiper.rtlTranslate,
            swiperSize = swiper.size,
            browser = swiper.browser;
        var params = swiper.params.cubeEffect;
        var isHorizontal = swiper.isHorizontal();
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        var wrapperRotate = 0;
        var $cubeShadowEl;
  
        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');
  
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $wrapperEl.append($cubeShadowEl);
            }
  
            $cubeShadowEl.css({
              height: swiperWidth + "px"
            });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');
  
            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $el.append($cubeShadowEl);
            }
          }
        }
  
        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = slides.eq(i);
          var slideIndex = i;
  
          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }
  
          var slideAngle = slideIndex * 90;
          var round = Math.floor(slideAngle / 360);
  
          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }
  
          var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          var tx = 0;
          var ty = 0;
          var tz = 0;
  
          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + round * 4 * swiperSize;
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = 3 * swiperSize + swiperSize * 4 * round;
          }
  
          if (rtl) {
            tx = -tx;
          }
  
          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }
  
          var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";
  
          if (progress <= 1 && progress > -1) {
            wrapperRotate = slideIndex * 90 + progress * 90;
            if (rtl) wrapperRotate = -slideIndex * 90 - progress * 90;
          }
  
          $slideEl.transform(transform);
  
          if (params.slideShadows) {
            // Set shadows
            var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
  
            if (shadowBefore.length === 0) {
              shadowBefore = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
              $slideEl.append(shadowBefore);
            }
  
            if (shadowAfter.length === 0) {
              shadowAfter = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
              $slideEl.append(shadowAfter);
            }
  
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
        }
  
        $wrapperEl.css({
          '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
          '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
          '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
          'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
        });
  
        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
          } else {
            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
            var scale1 = params.shadowScale;
            var scale2 = params.shadowScale / multiplier;
            var offset = params.shadowOffset;
            $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
          }
        }
  
        var zFactor = browser.isSafari || browser.isWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var $el = swiper.$el,
            slides = swiper.slides;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  
        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      }
    };
    var EffectCube = {
      name: 'effect-cube',
      params: {
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          cubeEffect: _extends({}, Cube)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (swiper.params.effect !== 'cube') return;
          swiper.classNames.push(swiper.params.containerModifierClass + "cube");
          swiper.classNames.push(swiper.params.containerModifierClass + "3d");
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: false,
            virtualTranslate: true
          };
          extend$1(swiper.params, overwriteParams);
          extend$1(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate(swiper) {
          if (swiper.params.effect !== 'cube') return;
          swiper.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          if (swiper.params.effect !== 'cube') return;
          swiper.cubeEffect.setTransition(duration);
        }
      }
    };
  
    var Flip = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides,
            rtl = swiper.rtlTranslate;
  
        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = slides.eq(i);
          var progress = $slideEl[0].progress;
  
          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }
  
          var offset = $slideEl[0].swiperSlideOffset;
          var rotate = -180 * progress;
          var rotateY = rotate;
          var rotateX = 0;
          var tx = -offset;
          var ty = 0;
  
          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }
  
          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;
  
          if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
  
            if (shadowBefore.length === 0) {
              shadowBefore = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
              $slideEl.append(shadowBefore);
            }
  
            if (shadowAfter.length === 0) {
              shadowAfter = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
              $slideEl.append(shadowAfter);
            }
  
            if (shadowBefore.length) shadowBefore[0].style.opacity = Math.max(-progress, 0);
            if (shadowAfter.length) shadowAfter[0].style.opacity = Math.max(progress, 0);
          }
  
          $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var slides = swiper.slides,
            activeIndex = swiper.activeIndex,
            $wrapperEl = swiper.$wrapperEl;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
  
        if (swiper.params.virtualTranslate && duration !== 0) {
          var eventTriggered = false; // eslint-disable-next-line
  
          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) return;
            if (!swiper || swiper.destroyed) return; // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;
  
            eventTriggered = true;
            swiper.animating = false;
            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];
  
            for (var i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    };
    var EffectFlip = {
      name: 'effect-flip',
      params: {
        flipEffect: {
          slideShadows: true,
          limitRotation: true
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          flipEffect: _extends({}, Flip)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (swiper.params.effect !== 'flip') return;
          swiper.classNames.push(swiper.params.containerModifierClass + "flip");
          swiper.classNames.push(swiper.params.containerModifierClass + "3d");
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true
          };
          extend$1(swiper.params, overwriteParams);
          extend$1(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate(swiper) {
          if (swiper.params.effect !== 'flip') return;
          swiper.flipEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          if (swiper.params.effect !== 'flip') return;
          swiper.flipEffect.setTransition(duration);
        }
      }
    };
  
    var Coverflow = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var swiperWidth = swiper.width,
            swiperHeight = swiper.height,
            slides = swiper.slides,
            slidesSizesGrid = swiper.slidesSizesGrid;
        var params = swiper.params.coverflowEffect;
        var isHorizontal = swiper.isHorizontal();
        var transform = swiper.translate;
        var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        var rotate = isHorizontal ? params.rotate : -params.rotate;
        var translate = params.depth; // Each slide offset from center
  
        for (var i = 0, length = slides.length; i < length; i += 1) {
          var $slideEl = slides.eq(i);
          var slideSize = slidesSizesGrid[i];
          var slideOffset = $slideEl[0].swiperSlideOffset;
          var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
          var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0
  
          var translateZ = -translate * Math.abs(offsetMultiplier);
          var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders
  
          if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
            stretch = parseFloat(params.stretch) / 100 * slideSize;
          }
  
          var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
          var translateX = isHorizontal ? stretch * offsetMultiplier : 0;
          var scale = 1 - (1 - params.scale) * Math.abs(offsetMultiplier); // Fix for ultra small values
  
          if (Math.abs(translateX) < 0.001) translateX = 0;
          if (Math.abs(translateY) < 0.001) translateY = 0;
          if (Math.abs(translateZ) < 0.001) translateZ = 0;
          if (Math.abs(rotateY) < 0.001) rotateY = 0;
          if (Math.abs(rotateX) < 0.001) rotateX = 0;
          if (Math.abs(scale) < 0.001) scale = 0;
          var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg) scale(" + scale + ")";
          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;
  
          if (params.slideShadows) {
            // Set shadows
            var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');
  
            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
              $slideEl.append($shadowBeforeEl);
            }
  
            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
              $slideEl.append($shadowAfterEl);
            }
  
            if ($shadowBeforeEl.length) $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            if ($shadowAfterEl.length) $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
          }
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
      }
    };
    var EffectCoverflow = {
      name: 'effect-coverflow',
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: true
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          coverflowEffect: _extends({}, Coverflow)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          if (swiper.params.effect !== 'coverflow') return;
          swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
          swiper.classNames.push(swiper.params.containerModifierClass + "3d");
          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        },
        setTranslate: function setTranslate(swiper) {
          if (swiper.params.effect !== 'coverflow') return;
          swiper.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(swiper, duration) {
          if (swiper.params.effect !== 'coverflow') return;
          swiper.coverflowEffect.setTransition(duration);
        }
      }
    };
  
    var Thumbs = {
      init: function init() {
        var swiper = this;
        var thumbsParams = swiper.params.thumbs;
        if (swiper.thumbs.initialized) return false;
        swiper.thumbs.initialized = true;
        var SwiperClass = swiper.constructor;
  
        if (thumbsParams.swiper instanceof SwiperClass) {
          swiper.thumbs.swiper = thumbsParams.swiper;
          extend$1(swiper.thumbs.swiper.originalParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          extend$1(swiper.thumbs.swiper.params, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
        } else if (isObject$1(thumbsParams.swiper)) {
          swiper.thumbs.swiper = new SwiperClass(extend$1({}, thumbsParams.swiper, {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: false
          }));
          swiper.thumbs.swiperCreated = true;
        }
  
        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
        return true;
      },
      onThumbClick: function onThumbClick() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        var clickedIndex = thumbsSwiper.clickedIndex;
        var clickedSlide = thumbsSwiper.clickedSlide;
        if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) return;
        if (typeof clickedIndex === 'undefined' || clickedIndex === null) return;
        var slideToIndex;
  
        if (thumbsSwiper.params.loop) {
          slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        } else {
          slideToIndex = clickedIndex;
        }
  
        if (swiper.params.loop) {
          var currentIndex = swiper.activeIndex;
  
          if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
            swiper.loopFix(); // eslint-disable-next-line
  
            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            currentIndex = swiper.activeIndex;
          }
  
          var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
          var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
          if (typeof prevIndex === 'undefined') slideToIndex = nextIndex;else if (typeof nextIndex === 'undefined') slideToIndex = prevIndex;else if (nextIndex - currentIndex < currentIndex - prevIndex) slideToIndex = nextIndex;else slideToIndex = prevIndex;
        }
  
        swiper.slideTo(slideToIndex);
      },
      update: function update(initial) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;
        if (!thumbsSwiper) return;
        var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;
        var autoScrollOffset = swiper.params.thumbs.autoScrollOffset;
        var useOffset = autoScrollOffset && !thumbsSwiper.params.loop;
  
        if (swiper.realIndex !== thumbsSwiper.realIndex || useOffset) {
          var currentThumbsIndex = thumbsSwiper.activeIndex;
          var newThumbsIndex;
          var direction;
  
          if (thumbsSwiper.params.loop) {
            if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
              thumbsSwiper.loopFix(); // eslint-disable-next-line
  
              thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
              currentThumbsIndex = thumbsSwiper.activeIndex;
            } // Find actual thumbs index to slide to
  
  
            var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
            var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
            if (typeof prevThumbsIndex === 'undefined') newThumbsIndex = nextThumbsIndex;else if (typeof nextThumbsIndex === 'undefined') newThumbsIndex = prevThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) newThumbsIndex = currentThumbsIndex;else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) newThumbsIndex = nextThumbsIndex;else newThumbsIndex = prevThumbsIndex;
            direction = swiper.activeIndex > swiper.previousIndex ? 'next' : 'prev';
          } else {
            newThumbsIndex = swiper.realIndex;
            direction = newThumbsIndex > swiper.previousIndex ? 'next' : 'prev';
          }
  
          if (useOffset) {
            newThumbsIndex += direction === 'next' ? autoScrollOffset : -1 * autoScrollOffset;
          }
  
          if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
            if (thumbsSwiper.params.centeredSlides) {
              if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
              } else {
                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
              }
            } else if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - slidesPerView + 1;
            }
  
            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
          }
        } // Activate thumbs
  
  
        var thumbsToActivate = 1;
        var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;
  
        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
          thumbsToActivate = swiper.params.slidesPerView;
        }
  
        if (!swiper.params.thumbs.multipleActiveThumbs) {
          thumbsToActivate = 1;
        }
  
        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);
  
        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
          for (var i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
          }
        } else {
          for (var _i = 0; _i < thumbsToActivate; _i += 1) {
            thumbsSwiper.slides.eq(swiper.realIndex + _i).addClass(thumbActiveClass);
          }
        }
      }
    };
    var Thumbs$1 = {
      name: 'thumbs',
      params: {
        thumbs: {
          swiper: null,
          multipleActiveThumbs: true,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-container-thumbs'
        }
      },
      create: function create() {
        var swiper = this;
        bindModuleMethods(swiper, {
          thumbs: _extends({
            swiper: null,
            initialized: false
          }, Thumbs)
        });
      },
      on: {
        beforeInit: function beforeInit(swiper) {
          var thumbs = swiper.params.thumbs;
          if (!thumbs || !thumbs.swiper) return;
          swiper.thumbs.init();
          swiper.thumbs.update(true);
        },
        slideChange: function slideChange(swiper) {
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        update: function update(swiper) {
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        resize: function resize(swiper) {
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        observerUpdate: function observerUpdate(swiper) {
          if (!swiper.thumbs.swiper) return;
          swiper.thumbs.update();
        },
        setTransition: function setTransition(swiper, duration) {
          var thumbsSwiper = swiper.thumbs.swiper;
          if (!thumbsSwiper) return;
          thumbsSwiper.setTransition(duration);
        },
        beforeDestroy: function beforeDestroy(swiper) {
          var thumbsSwiper = swiper.thumbs.swiper;
          if (!thumbsSwiper) return;
  
          if (swiper.thumbs.swiperCreated && thumbsSwiper) {
            thumbsSwiper.destroy();
          }
        }
      }
    };
  
    // Swiper Class
    var components = [Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y$1, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];
    Swiper.use(components);
  
    return Swiper;
  
  })));
  //# sourceMappingURL=swiper-bundle.js.map