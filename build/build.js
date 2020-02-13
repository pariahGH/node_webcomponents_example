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

eval("module.exports = \"<div class=\\\"container\\\">\\n    <div class=\\\"input_holder\\\">\\n        <input placeholder=\\\"Type a todo!\\\" id=\\\"input\\\"/>\\n    </div>\\n    <div class=\\\"button_holder\\\">\\n        <button id=\\\"add_button\\\">Add Todo</button>\\n        <button id=\\\"clear_button\\\">Clear Todos</button>\\n    </div>\\n    <div id=\\\"todo_list_holder\\\"></div>\\n</div>\\n<style>\\n    .container{\\n        display:grid;\\n        grid-template-areas: 'input_holder input_holder button_holder' 'todo_list_holder todo_list_holder todo_list_holder';\\n        width: 70%;\\n        margin-left:15%;\\n    }\\n    .input_holder{\\n        grid-area: input_holder;\\n    }\\n    .button_holder{ \\n        grid-area: button_holder;\\n\\n    }\\n    #todo_list_holder{\\n        grid-area: todo_list_holder;\\n        height:500px;\\n        overflow-y: scroll;\\n    }\\n</style>\"\n\n//# sourceURL=webpack:///./src/todo_container.html?");

/***/ }),

/***/ "./src/todo_container.js":
/*!*******************************!*\
  !*** ./src/todo_container.js ***!
  \*******************************/
/*! no exports provided */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: multi ./src/todo_container.js ./src/todo_item.js (referenced with single entry) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_container_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_container.html */ \"./src/todo_container.html\");\n/* harmony import */ var _todo_container_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_todo_container_html__WEBPACK_IMPORTED_MODULE_0__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _CustomElement() {\n    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);\n}\n\n;\nObject.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);\nObject.setPrototypeOf(_CustomElement, HTMLElement);\n\n\n(function (document) {\n    var TodoContainer = function (_CustomElement2) {\n        _inherits(TodoContainer, _CustomElement2);\n\n        function TodoContainer() {\n            _classCallCheck(this, TodoContainer);\n\n            var _this = _possibleConstructorReturn(this, (TodoContainer.__proto__ || Object.getPrototypeOf(TodoContainer)).call(this));\n\n            _this.shadow = _this.attachShadow({ 'mode': 'closed' });\n            _this.shadow.innerHTML = _todo_container_html__WEBPACK_IMPORTED_MODULE_0___default.a;\n            _this.todoContainer = _this.shadow.getElementById(\"todo_list_holder\");\n            var addTodoButton = _this.shadow.getElementById(\"add_button\");\n            var clearTodosButton = _this.shadow.getElementById(\"clear_button\");\n            var todoInput = _this.shadow.getElementById(\"input\");\n\n            addTodoButton.addEventListener(\"click\", function () {\n                var text = todoInput.value;\n                fetch(\"/todos/\", {\n                    method: \"POST\",\n                    body: JSON.stringify({ text: text }),\n                    headers: { \"Content-Type\": \"application/json\" }\n                }).then(function (res) {\n                    if (!res.ok) alert(\"Failed to reach server!\\n\" + res.status);else res.json().then(function (resJson) {\n                        resJson.success ? (_this.todoContainer.appendChild(_this.buildTodo(text, resJson.data)), todoInput.value = \"\") : alert(\"Failed to add todo!\\n\" + resJson.err.message);\n                    });\n                });\n            });\n\n            clearTodosButton.addEventListener(\"click\", function () {\n                fetch(\"/todos/\", { method: \"DELETE\" }).then(function (res) {\n                    if (!res.ok) alert(\"Failed to reach server!\" + \"\\n\" + res.status);else res.json().then(function (resJson) {\n                        resJson.success ? _this.clearTodoContainer() : alert(\"Failed to clear todo!\\n\" + resJson.err.message);\n                    });\n                });\n            });\n            return _this;\n        }\n\n        _createClass(TodoContainer, [{\n            key: 'setupListeners',\n            value: function setupListeners(newTodo) {\n                var _this2 = this;\n\n                newTodo.addEventListener(\"delete:success\", function () {\n                    _this2.todoContainer.removeChild(newTodo);\n                });\n            }\n        }, {\n            key: 'loadTodos',\n            value: function loadTodos(todos) {\n                var _iteratorNormalCompletion = true;\n                var _didIteratorError = false;\n                var _iteratorError = undefined;\n\n                try {\n                    for (var _iterator = todos[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n                        var todoData = _step.value;\n\n                        var todo = this.buildTodo(todoData.text, todoData._id);\n                        this.todoContainer.appendChild(todo);\n                    }\n                } catch (err) {\n                    _didIteratorError = true;\n                    _iteratorError = err;\n                } finally {\n                    try {\n                        if (!_iteratorNormalCompletion && _iterator.return) {\n                            _iterator.return();\n                        }\n                    } finally {\n                        if (_didIteratorError) {\n                            throw _iteratorError;\n                        }\n                    }\n                }\n            }\n        }, {\n            key: 'buildTodo',\n            value: function buildTodo(text, id) {\n                var newTodo = document.createElement(\"todo-item\");\n                newTodo.setTodo(text, id);\n                this.setupListeners(newTodo);\n                return newTodo;\n            }\n        }, {\n            key: 'clearTodoContainer',\n            value: function clearTodoContainer() {\n                var emptyClone = this.todoContainer.cloneNode(false);\n                this.todoContainer.parentNode.replaceChild(emptyClone, this.todoContainer);\n                this.todoContainer = emptyClone;\n            }\n        }, {\n            key: 'connectedCallback',\n            value: function connectedCallback() {\n                var _this3 = this;\n\n                fetch(\"/todos/\", { method: \"GET\" }).then(function (res) {\n                    if (!res.ok) alert(\"Failed to reach server!\" + \"\\n\" + res.status);else res.json().then(function (resJson) {\n                        resJson.success ? _this3.loadTodos(resJson.data) : alert(\"Failed to get todos!\\n\" + resJson.err.message);\n                    });\n                });\n            }\n        }]);\n\n        return TodoContainer;\n    }(_CustomElement);\n\n    window.customElements.define('todo-container', TodoContainer);\n})(document);\n\n//# sourceURL=webpack:///./src/todo_container.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _todo_item_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo_item.html */ \"./src/todo_item.html\");\n/* harmony import */ var _todo_item_html__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_todo_item_html__WEBPACK_IMPORTED_MODULE_0__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nfunction _CustomElement() {\n    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);\n}\n\n;\nObject.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);\nObject.setPrototypeOf(_CustomElement, HTMLElement);\n\n\n(function () {\n    var TodoItem = function (_CustomElement2) {\n        _inherits(TodoItem, _CustomElement2);\n\n        function TodoItem() {\n            _classCallCheck(this, TodoItem);\n\n            var _this = _possibleConstructorReturn(this, (TodoItem.__proto__ || Object.getPrototypeOf(TodoItem)).call(this));\n\n            _this.shadow = _this.attachShadow({ 'mode': 'closed' });\n            _this.shadow.innerHTML = _todo_item_html__WEBPACK_IMPORTED_MODULE_0___default.a;\n            _this.textDisplay = _this.shadow.getElementById(\"text\");\n\n            var button = _this.shadow.getElementById(\"button\");\n            button.addEventListener(\"click\", function () {\n                fetch(\"./todos/\" + _this.id, { \"method\": \"DELETE\" }).then(function (res) {\n                    if (!res.ok) alert(\"Failed to reach server!\" + \"\\n\" + res.status);else res.json().then(function (resJson) {\n                        resJson.success ? _this.dispatchEvent(new Event(\"delete:success\")) : alert(\"Failed to delete todo!\\n\" + resJson.err.message);\n                    });\n                });\n            });\n            return _this;\n        }\n\n        _createClass(TodoItem, [{\n            key: 'setTodo',\n            value: function setTodo(text, id) {\n                this.textDisplay.textContent = text;\n                this.id = id;\n            }\n        }]);\n\n        return TodoItem;\n    }(_CustomElement);\n\n    window.customElements.define('todo-item', TodoItem);\n})();\n\n//# sourceURL=webpack:///./src/todo_item.js?");

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