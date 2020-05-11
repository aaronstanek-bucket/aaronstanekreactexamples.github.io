'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MemoBox = function (_React$Component) {
    _inherits(MemoBox, _React$Component);

    function MemoBox(props) {
        _classCallCheck(this, MemoBox);

        return _possibleConstructorReturn(this, (MemoBox.__proto__ || Object.getPrototypeOf(MemoBox)).call(this, props));
    }

    _createClass(MemoBox, [{
        key: "render",
        value: function render() {
            var memo = this.props.memo;
            if (memo.length == 0) {
                return React.createElement("span", null);
            } else {
                return React.createElement(
                    "p",
                    { className: "memo" },
                    memo
                );
            }
        }
    }]);

    return MemoBox;
}(React.Component);

var Box = function (_React$Component2) {
    _inherits(Box, _React$Component2);

    function Box(props) {
        _classCallCheck(this, Box);

        var _this2 = _possibleConstructorReturn(this, (Box.__proto__ || Object.getPrototypeOf(Box)).call(this, props));

        _this2.state = { "memo": "" };
        return _this2;
    }

    _createClass(Box, [{
        key: "memo",
        value: function memo(text) {
            this.state.memo = text;
            this.setState(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            var clickBox = function clickBox() {
                _this3.clicked();
            };
            return React.createElement(
                "div",
                { className: "Box" },
                React.createElement(
                    "p",
                    { className: "title" },
                    "Login"
                ),
                React.createElement(MemoBox, { memo: this.state.memo }),
                React.createElement(
                    "p",
                    null,
                    "Username"
                ),
                React.createElement("input", { type: "text", id: "username" }),
                React.createElement(
                    "p",
                    null,
                    "Password"
                ),
                React.createElement("input", { type: "password" }),
                React.createElement(
                    "div",
                    { className: "click", onClick: clickBox },
                    React.createElement(
                        "p",
                        null,
                        "Login"
                    )
                )
            );
        }
    }, {
        key: "checkChar",
        value: function checkChar(c) {
            var code = c.charCodeAt(0);
            if (code >= 48 && code <= 57) {
                return true;
            }
            if (code >= 65 && code <= 90) {
                return true;
            }
            if (code >= 97 && code <= 122) {
                return true;
            }
            return false;
        }
    }, {
        key: "checkValid",
        value: function checkValid(s) {
            for (var i = 0; i < s.length; i++) {
                if (!this.checkChar(s[i])) {
                    return false;
                }
            }
            return true;
        }
    }, {
        key: "clicked",
        value: function clicked() {
            var _this4 = this;

            var username = document.getElementById("username").value;
            this.state.username = username;
            if (!this.checkValid(username)) {
                this.memo("Your username contains invalid characters.");
                return;
            }
            setCookie({ "name": this.state.username, "info": {} });
            var callback = function callback(text) {
                _this4.callback1(text);
            };
            databaseRead(callback);
        }
    }, {
        key: "callback1",
        value: function callback1(text) {
            if (typeof text != "string") {
                this.memo("Database Error");
                return;
            }
            var respond = JSON.parse(text);
            if (!respond.good) {
                this.memo("Database Error");
                return;
            }
            if (!respond.found) {
                this.memo("An account with that username does not exist.");
                return;
            }
            var ret = JSON.parse(respond.info);
            setCookie({ "name": this.state.username, "info": ret });
            window.location = "user.html";
        }
    }]);

    return Box;
}(React.Component);

ReactDOM.render(React.createElement(Box, null), document.getElementById('Box'));