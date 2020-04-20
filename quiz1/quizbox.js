'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function keyGen() {
    var output = keyGen.value;
    keyGen.value++;
    return "ReactElement" + output;
}

keyGen.value = BigInt(0);

var QuizOptions = function (_React$Component) {
    _inherits(QuizOptions, _React$Component);

    function QuizOptions(props) {
        _classCallCheck(this, QuizOptions);

        return _possibleConstructorReturn(this, (QuizOptions.__proto__ || Object.getPrototypeOf(QuizOptions)).call(this, props));
    }

    _createClass(QuizOptions, [{
        key: "getThisValue",
        value: function getThisValue() {
            var number = QUIZDATA.number;
            var cookie = getCookie("quiz1");
            if (cookie == "") {
                return "";
            }
            var data = JSON.parse(cookie);
            if (number in data) {
                return data[number];
            }
            return "";
        }
    }, {
        key: "setThisValue",
        value: function setThisValue(value) {
            var number = QUIZDATA.number;
            var cookie = getCookie("quiz1");
            if (cookie == "") {
                cookie = "{}";
            }
            var data = JSON.parse(cookie);
            data[number] = value;
            cookie = JSON.stringify(data);
            document.cookie = "quiz1=" + cookie + ";path=/;";
        }
    }, {
        key: "update",
        value: function update(id) {
            var elem = document.getElementById(id);
            var children = elem.childNodes;
            for (var i = 0; i < children.length; i++) {
                if (children[i].nodeName != "INPUT") {
                    continue;
                }
                if (children[i].checked) {
                    this.setThisValue(children[i].value);
                    break;
                }
            }
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var picked = this.getThisValue();
            var options = [];
            for (var i = 0; i < QUIZDATA.answers.length; i++) {
                var text = QUIZDATA.answers[i][0];
                var value = QUIZDATA.answers[i][1];
                var key = keyGen();
                options.push(React.createElement("input", { key: key, type: "radio", id: key, name: "option",
                    value: value, defaultChecked: value == picked }));
                options.push(React.createElement(
                    "label",
                    { key: keyGen(), htmlFor: key },
                    text
                ));
                options.push(React.createElement("br", { key: keyGen() }));
                options.push(React.createElement("br", { key: keyGen() }));
            }
            var id = keyGen();
            var clicked = function clicked() {
                _this2.update(id);
            };
            return React.createElement(
                "form",
                { id: id, onClick: clicked },
                options
            );
        }
    }]);

    return QuizOptions;
}(React.Component);

var NextButton = function (_React$Component2) {
    _inherits(NextButton, _React$Component2);

    function NextButton(props) {
        _classCallCheck(this, NextButton);

        return _possibleConstructorReturn(this, (NextButton.__proto__ || Object.getPrototypeOf(NextButton)).call(this, props));
    }

    _createClass(NextButton, [{
        key: "nextFunction",
        value: function nextFunction() {
            var number = parseInt(QUIZDATA.number);
            number++;
            window.location.href = number + ".html";
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "nextDiv" },
                React.createElement(
                    "button",
                    { onClick: this.nextFunction },
                    "Next"
                )
            );
        }
    }]);

    return NextButton;
}(React.Component);

var QuizBox = function (_React$Component3) {
    _inherits(QuizBox, _React$Component3);

    function QuizBox(props) {
        _classCallCheck(this, QuizBox);

        return _possibleConstructorReturn(this, (QuizBox.__proto__ || Object.getPrototypeOf(QuizBox)).call(this, props));
    }

    _createClass(QuizBox, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    QUIZDATA.question
                ),
                React.createElement("hr", null),
                React.createElement("br", null),
                React.createElement(QuizOptions, null),
                React.createElement(NextButton, null)
            );
        }
    }]);

    return QuizBox;
}(React.Component);

function runSetup() {
    ReactDOM.render(React.createElement(QuizBox, null), document.getElementById('QuizBox'));
}

function callSetup(callTime) {
    if (document.readyState != "complete" || typeof QUIZDATA == "undefined") {
        var now = new Date().getTime();
        if (now - callTime > 30000) {
            console.log("failed to load resources");
        } else {
            setTimeout(callSetup, 20, callTime);
        }
    } else {
        runSetup();
    }
}

callSetup(new Date().getTime());