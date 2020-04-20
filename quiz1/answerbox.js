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

var StatsBox = function (_React$Component) {
    _inherits(StatsBox, _React$Component);

    function StatsBox(props) {
        _classCallCheck(this, StatsBox);

        var _this = _possibleConstructorReturn(this, (StatsBox.__proto__ || Object.getPrototypeOf(StatsBox)).call(this, props));

        var stats = {
            "math": 0,
            "nature": 0,
            "sports": 0,
            "food": 0
        };
        for (var i = 1; i <= 5; i++) {
            stats[props.data[i]]++;
        }
        _this.state = {
            "stats": stats
        };
        return _this;
    }

    _createClass(StatsBox, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "tableLike" },
                React.createElement(
                    "div",
                    { className: "rowLike" },
                    React.createElement(
                        "div",
                        { className: "cellLike" },
                        React.createElement(
                            "p",
                            null,
                            "Math:"
                        )
                    ),
                    React.createElement("div", { className: "cellSpace" }),
                    React.createElement(
                        "div",
                        { className: "cellLike" },
                        React.createElement(
                            "p",
                            null,
                            this.state.stats.math * 20 + "%"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "rowLike" },
                    React.createElement(
                        "div",
                        { className: "cellLike" },
                        React.createElement(
                            "p",
                            null,
                            "Nature:"
                        )
                    ),
                    React.createElement("div", { className: "cellSpace" }),
                    React.createElement(
                        "div",
                        { className: "cellLike" },
                        React.createElement(
                            "p",
                            null,
                            this.state.stats.nature * 20 + "%"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "rowLike" },
                    React.createElement(
                        "div",
                        { className: "cellLike" },
                        React.createElement(
                            "p",
                            null,
                            "Sports:"
                        )
                    ),
                    React.createElement("div", { className: "cellSpace" }),
                    React.createElement(
                        "div",
                        { className: "cellLike" },
                        React.createElement(
                            "p",
                            null,
                            this.state.stats.sports * 20 + "%"
                        )
                    )
                ),
                React.createElement(
                    "div",
                    { className: "rowLike" },
                    React.createElement(
                        "div",
                        { className: "cellLike" },
                        React.createElement(
                            "p",
                            null,
                            "Food:"
                        )
                    ),
                    React.createElement("div", { className: "cellSpace" }),
                    React.createElement(
                        "div",
                        { className: "cellLike" },
                        React.createElement(
                            "p",
                            null,
                            this.state.stats.food * 20 + "%"
                        )
                    )
                )
            );
        }
    }]);

    return StatsBox;
}(React.Component);

var DescriptionMath = function (_React$Component2) {
    _inherits(DescriptionMath, _React$Component2);

    function DescriptionMath(props) {
        _classCallCheck(this, DescriptionMath);

        return _possibleConstructorReturn(this, (DescriptionMath.__proto__ || Object.getPrototypeOf(DescriptionMath)).call(this, props));
    }

    _createClass(DescriptionMath, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "It looks like you have an interest in Mathematics."
                ),
                React.createElement(
                    "p",
                    null,
                    "You might enjoy some of the following articles:"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://en.wikipedia.org/wiki/Mathematics" },
                            "Mathematics"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://en.wikipedia.org/wiki/List_of_mathematical_symbols" },
                            "List of mathematical symbols"
                        )
                    )
                )
            );
        }
    }]);

    return DescriptionMath;
}(React.Component);

var DescriptionNature = function (_React$Component3) {
    _inherits(DescriptionNature, _React$Component3);

    function DescriptionNature(props) {
        _classCallCheck(this, DescriptionNature);

        return _possibleConstructorReturn(this, (DescriptionNature.__proto__ || Object.getPrototypeOf(DescriptionNature)).call(this, props));
    }

    _createClass(DescriptionNature, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "It looks like you have an interest in Nature."
                ),
                React.createElement(
                    "p",
                    null,
                    "You might enjoy some of the following articles:"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://en.wikipedia.org/wiki/Nature" },
                            "Nature"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://en.wikipedia.org/wiki/Forestry" },
                            "Forestry"
                        )
                    )
                )
            );
        }
    }]);

    return DescriptionNature;
}(React.Component);

var DescriptionSports = function (_React$Component4) {
    _inherits(DescriptionSports, _React$Component4);

    function DescriptionSports(props) {
        _classCallCheck(this, DescriptionSports);

        return _possibleConstructorReturn(this, (DescriptionSports.__proto__ || Object.getPrototypeOf(DescriptionSports)).call(this, props));
    }

    _createClass(DescriptionSports, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "It looks like you have an interest in Sports."
                ),
                React.createElement(
                    "p",
                    null,
                    "You might enjoy some of the following articles:"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://en.wikipedia.org/wiki/Sport" },
                            "Sports"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://en.wikipedia.org/wiki/Association_football" },
                            "Football"
                        )
                    )
                )
            );
        }
    }]);

    return DescriptionSports;
}(React.Component);

var DescriptionFood = function (_React$Component5) {
    _inherits(DescriptionFood, _React$Component5);

    function DescriptionFood(props) {
        _classCallCheck(this, DescriptionFood);

        return _possibleConstructorReturn(this, (DescriptionFood.__proto__ || Object.getPrototypeOf(DescriptionFood)).call(this, props));
    }

    _createClass(DescriptionFood, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                React.createElement(
                    "p",
                    null,
                    "It looks like you have an interest in Food."
                ),
                React.createElement(
                    "p",
                    null,
                    "You might enjoy some of the following articles:"
                ),
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://en.wikipedia.org/wiki/Food" },
                            "Food"
                        )
                    ),
                    React.createElement(
                        "li",
                        null,
                        React.createElement(
                            "a",
                            { href: "https://en.wikipedia.org/wiki/Cooking" },
                            "Cooking"
                        )
                    )
                )
            );
        }
    }]);

    return DescriptionFood;
}(React.Component);

var DescriptionBox = function (_React$Component6) {
    _inherits(DescriptionBox, _React$Component6);

    function DescriptionBox(props) {
        _classCallCheck(this, DescriptionBox);

        var _this6 = _possibleConstructorReturn(this, (DescriptionBox.__proto__ || Object.getPrototypeOf(DescriptionBox)).call(this, props));

        var stats = {
            "math": 0,
            "nature": 0,
            "sports": 0,
            "food": 0
        };
        for (var i = 1; i <= 5; i++) {
            stats[props.data[i]]++;
        }
        _this6.state = {
            "stats": stats
        };
        return _this6;
    }

    _createClass(DescriptionBox, [{
        key: "render",
        value: function render() {
            var things = Object.keys(this.state.stats);
            var winners = [things[0]];
            for (var i = 1; i < things.length; i++) {
                if (this.state.stats[things[i]] < this.state.stats[winners[0]]) {
                    continue;
                }
                if (this.state.stats[things[i]] == this.state.stats[winners[0]]) {
                    winners.push(things[i]);
                } else {
                    winners = [things[i]];
                }
            }
            var output = [];
            for (var _i = 0; _i < winners.length; _i++) {
                output.push(React.createElement("hr", { key: keyGen() }));
                if (winners[_i] == "math") {
                    output.push(React.createElement(DescriptionMath, { key: keyGen() }));
                } else if (winners[_i] == "nature") {
                    output.push(React.createElement(DescriptionNature, { key: keyGen() }));
                } else if (winners[_i] == "sports") {
                    output.push(React.createElement(DescriptionSports, { key: keyGen() }));
                } else {
                    output.push(React.createElement(DescriptionFood, { key: keyGen() }));
                }
            }
            return React.createElement(
                "div",
                null,
                output
            );
        }
    }]);

    return DescriptionBox;
}(React.Component);

var AnswerBox = function (_React$Component7) {
    _inherits(AnswerBox, _React$Component7);

    function AnswerBox(props) {
        _classCallCheck(this, AnswerBox);

        var _this7 = _possibleConstructorReturn(this, (AnswerBox.__proto__ || Object.getPrototypeOf(AnswerBox)).call(this, props));

        var cookie = getCookie("quiz1");
        if (cookie == "") {
            cookie = "{}";
        }
        var data = JSON.parse(cookie);
        for (var i = 1; i <= 5; i++) {
            if (!(i in data)) {
                _this7.state = {
                    "complete": false,
                    "link": i + ".html"
                };
                return _possibleConstructorReturn(_this7);
            }
        }
        _this7.state = {
            "complete": true,
            "data": data
        };
        return _this7;
    }

    _createClass(AnswerBox, [{
        key: "render",
        value: function render() {
            if (this.state.complete) {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        null,
                        "Results"
                    ),
                    React.createElement("hr", null),
                    React.createElement("br", null),
                    React.createElement(StatsBox, { data: this.state.data }),
                    React.createElement(DescriptionBox, { data: this.state.data }),
                    React.createElement("hr", null),
                    React.createElement(
                        "p",
                        null,
                        "To retake the quiz, ",
                        React.createElement(
                            "a",
                            { href: "reset.html" },
                            "click here"
                        )
                    )
                );
            } else {
                return React.createElement(
                    "div",
                    null,
                    React.createElement(
                        "p",
                        null,
                        "It looks like you missed a question."
                    ),
                    React.createElement(
                        "p",
                        null,
                        "A link to the question you missed is ",
                        React.createElement(
                            "a",
                            { href: this.state.link },
                            "here"
                        )
                    )
                );
            }
        }
    }]);

    return AnswerBox;
}(React.Component);

function runSetup() {
    ReactDOM.render(React.createElement(AnswerBox, null), document.getElementById('QuizBox'));
}

function callSetup(callTime) {
    if (document.readyState != "complete") {
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