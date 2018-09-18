/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/todo_container.html":
/*!*********************************!*\
  !*** ./src/todo_container.html ***!
  \*********************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"container\\\">\\n    <div class=\\\"input_holder\\\">\\n        <input placeholder=\\\"Type a todo!\\\" id=\\\"input\\\"/>\\n    </div>\\n    <div class=\\\"button_holder\\\">\\n        <button id=\\\"button\\\">Add Todo</button>\\n    </div>\\n    <div id=\\\"todo_list_holder\\\"></div>\\n</div>\\n<style>\\n    .container{\\n        display:grid;\\n        grid-template-areas: 'input_holder input_holder button_holder' 'todo_list_holder todo_list_holder todo_list_holder';\\n        width: 70%;\\n        margin-left:15%;\\n    }\\n    .input_holder{\\n        grid-area: input_holder;\\n    }\\n    .button_holder{ \\n        grid-area: button_holder;\\n\\n    }\\n    #todo_list_holder{\\n        grid-area: todo_list_holder;\\n        height:500px;\\n        overflow-y: scroll;\\n    }\\n</style>\"\n\n//# sourceURL=webpack:///./src/todo_container.html?");

/***/ }),

/***/ "./src/todo_container.js":
/*!*******************************!*\
  !*** ./src/todo_container.js ***!
  \*******************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./src/todo_container.js ./src/todo_item.js (referenced with single entry) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_container_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_container.html */ \"./src/todo_container.html\");\n/* harmony import */ var _todo_container_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_todo_container_html__WEBPACK_IMPORTED_MODULE_0__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _CustomElement() {\n    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);\n}\n\n;\nObject.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);\nObject.setPrototypeOf(_CustomElement, HTMLElement);\n\n(function (document) {\n    var TodoContainer = function (_CustomElement2) {\n        _inherits(TodoContainer, _CustomElement2);\n\n        function TodoContainer() {\n            _classCallCheck(this, TodoContainer);\n\n            return _possibleConstructorReturn(this, (TodoContainer.__proto__ || Object.getPrototypeOf(TodoContainer)).call(this));\n        }\n\n        _createClass(TodoContainer, [{\n            key: 'connectedCallback',\n            value: function connectedCallback() {\n                var _this2 = this;\n\n                //create all our content\n                var template = document.createElement('div');\n                template.innerHTML = _todo_container_html__WEBPACK_IMPORTED_MODULE_0___default.a;\n                var shadowRoot = this.attachShadow({ mode: \"closed\" });\n                shadowRoot.appendChild(template);\n                this.input = shadowRoot.getElementById('input');\n                this.button = shadowRoot.getElementById('button');\n                this.list_holder = shadowRoot.getElementById('todo_list_holder');\n                this.errorHolder = shadowRoot.getElementById('errors');\n                this.button.addEventListener('click', function (evt) {\n                    //make a new todo, tell the server to add, \n                    //on success tell the element what its id is and \n                    //add to DOM\n                    var text = _this2.input.value;\n                    if (text != \"\") {\n                        fetch(new Request(\"/todos\", {\n                            method: \"POST\",\n                            headers: { 'Content-Type': 'application/json' },\n                            body: JSON.stringify({ text: text })\n                        })).then(function (res) {\n                            res.json().then(function (data) {\n                                console.log(data);\n                                if (data.success) {\n                                    var todo = document.createElement('todo-item');\n                                    todo.setAttribute(\"todoText\", text);\n                                    todo.setAttribute(\"todoId\", data.id);\n                                    _this2.list_holder.appendChild(todo);\n                                    _this2.input.value = \"\";\n                                }\n                            });\n                        });\n                    }\n                });\n\n                //get a list of all the todos and then add them to holder\n                fetch(new Request(\"/todos\", { method: \"GET\" })).then(function (res) {\n                    res.json().then(function (data) {\n                        console.log(data);\n                        if (data.success) {\n                            var _iteratorNormalCompletion = true;\n                            var _didIteratorError = false;\n                            var _iteratorError = undefined;\n\n                            try {\n                                for (var _iterator = data.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                                    var todoObj = _step.value;\n\n                                    //make a todo and add it to the holder\n                                    var todo = document.createElement('todo-item');\n                                    todo.setAttribute(\"todoText\", todoObj.text);\n                                    todo.setAttribute(\"todoId\", todoObj._id);\n                                    _this2.list_holder.appendChild(todo);\n                                }\n                            } catch (err) {\n                                _didIteratorError = true;\n                                _iteratorError = err;\n                            } finally {\n                                try {\n                                    if (!_iteratorNormalCompletion && _iterator.return) {\n                                        _iterator.return();\n                                    }\n                                } finally {\n                                    if (_didIteratorError) {\n                                        throw _iteratorError;\n                                    }\n                                }\n                            }\n                        } else {\n                            _this2.errorHolder.textContent = \"Error getting content\";\n                        }\n                    });\n                });\n            }\n        }]);\n\n        return TodoContainer;\n    }(_CustomElement);\n\n    window.customElements.define('todo-container', TodoContainer);\n})(document);\n\n//# sourceURL=webpack:///./src/todo_container.js?");

/***/ }),

/***/ "./src/todo_item.html":
/*!****************************!*\
  !*** ./src/todo_item.html ***!
  \****************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

eval("module.exports = \"<div class=\\\"container\\\">\\n    <div class=\\\"text_holder\\\">\\n        <p id=\\\"text\\\"></p>\\n    </div>\\n    <div class=\\\"button_holder\\\">\\n        <button id=\\\"button\\\">Delete</button>\\n    </div>\\n</div>\\n<style>\\n    .container {\\n        display: grid;\\n        grid-template-areas: 'text_holder text_holder button_holder';\\n        border: 1px solid black;\\n    }\\n    .button_holder {\\n        grid-area: button_holder;\\n    }\\n    .text_holder{\\n        grid-area: text_holder;\\n    }\\n</style>\"\n\n//# sourceURL=webpack:///./src/todo_item.html?");

/***/ }),

/***/ "./src/todo_item.js":
/*!**************************!*\
  !*** ./src/todo_item.js ***!
  \**************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./src/todo_container.js ./src/todo_item.js (referenced with single entry) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_item_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_item.html */ \"./src/todo_item.html\");\n/* harmony import */ var _todo_item_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_todo_item_html__WEBPACK_IMPORTED_MODULE_0__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _CustomElement() {\n    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);\n}\n\n;\nObject.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);\nObject.setPrototypeOf(_CustomElement, HTMLElement);\n\n(function (document) {\n    var TodoItem = function (_CustomElement2) {\n        _inherits(TodoItem, _CustomElement2);\n\n        function TodoItem() {\n            _classCallCheck(this, TodoItem);\n\n            return _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call(this));\n        }\n\n        _createClass(TodoItem, [{\n            key: 'connectedCallback',\n            value: function connectedCallback() {\n                var _this2 = this;\n\n                //create all our content\n                console.log(this.parentElement);\n                var template = document.createElement('div');\n                template.innerHTML = _todo_item_html__WEBPACK_IMPORTED_MODULE_0___default.a;\n                var shadowRoot = this.attachShadow({ mode: \"closed\" });\n                shadowRoot.appendChild(template);\n                shadowRoot.getElementById('text').textContent = this.getAttribute('todoText');\n\n                shadowRoot.getElementById('button').addEventListener('click', function (evt) {\n                    //tell the server to delete us\n                    //on success, delete ourselves from parent\n                    fetch(new Request(\"/todos/\" + _this2.getAttribute(\"todoId\"), {\n                        method: \"DELETE\"\n                    })).then(function (res) {\n                        res.json().then(function (data) {\n                            console.log(data);\n                            if (data.success) {\n                                _this2.parentElement.removeChild(_this2);\n                            }\n                        });\n                    });\n                });\n\n                //Challenge for students: figure out a graceful way to handle editing!\n            }\n        }]);\n\n        return TodoItem;\n    }(_CustomElement);\n\n    window.customElements.define('todo-item', TodoItem);\n})(document);\n\n//# sourceURL=webpack:///./src/todo_item.js?");

/***/ }),

/***/ 0:
/*!********************************************************!*\
  !*** multi ./src/todo_container.js ./src/todo_item.js ***!
  \********************************************************/
/*! no static exports found */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/todo_container.js */\"./src/todo_container.js\");\nmodule.exports = __webpack_require__(/*! ./src/todo_item.js */\"./src/todo_item.js\");\n\n\n//# sourceURL=webpack:///multi_./src/todo_container.js_./src/todo_item.js?");

/***/ })

/******/ });