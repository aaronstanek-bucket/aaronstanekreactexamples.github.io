'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarSubItem = function (_React$Component) {
    _inherits(BarSubItem, _React$Component);

    function BarSubItem(props) {
        _classCallCheck(this, BarSubItem);

        var _this = _possibleConstructorReturn(this, (BarSubItem.__proto__ || Object.getPrototypeOf(BarSubItem)).call(this, props));

        _this.state = {
            "highlight": false
        };
        return _this;
    }

    _createClass(BarSubItem, [{
        key: "handleOnMouseOver",
        value: function handleOnMouseOver() {
            this.state.highlight = true;
            this.setState(this.state);
        }
    }, {
        key: "handleOnMouseOut",
        value: function handleOnMouseOut() {
            this.state.highlight = false;
            this.setState(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            if (this.props.elem === null) {
                return React.createElement("div", { className: "barSubSpace" });
            }
            var c;
            if (this.state.highlight) {
                c = "barSubItem barSubHighlight";
            } else {
                c = "barSubItem";
            }
            var mouseOn = function mouseOn(e) {
                _this2.handleOnMouseOver();
            };
            var mouseOff = function mouseOff(e) {
                _this2.handleOnMouseOut();
            };
            var clicked = function clicked(e) {
                _this2.props.cf(_this2.props.elem[1]);
            };
            return React.createElement(
                "div",
                { className: c, onMouseOver: mouseOn, onMouseOut: mouseOff, onClick: clicked },
                React.createElement(
                    "p",
                    null,
                    this.props.elem[0]
                )
            );
        }
    }]);

    return BarSubItem;
}(React.Component);

var BarSubMenu = function (_React$Component2) {
    _inherits(BarSubMenu, _React$Component2);

    function BarSubMenu(props) {
        _classCallCheck(this, BarSubMenu);

        return _possibleConstructorReturn(this, (BarSubMenu.__proto__ || Object.getPrototypeOf(BarSubMenu)).call(this, props));
    }

    _createClass(BarSubMenu, [{
        key: "render",
        value: function render() {
            var stuff = [];
            stuff.push(React.createElement(BarSubItem, { key: this.props.path + "0/", path: this.props.path + "0/", elem: null }));
            for (var i = 0; i < this.props.elems.length; i++) {
                var e = this.props.elems[i];
                stuff.push(React.createElement(BarSubItem, { key: this.props.path + e[1] + "/", path: this.props.path + e[1] + "/", elem: e, cf: this.props.cf }));
            }
            var c;
            if (this.props.cantsee) {
                c = "barSubMenu cantsee";
            } else {
                c = "barSubMenu";
            }
            return React.createElement(
                "div",
                { className: c },
                stuff
            );
        }
    }]);

    return BarSubMenu;
}(React.Component);

var BarCell = function (_React$Component3) {
    _inherits(BarCell, _React$Component3);

    function BarCell(props) {
        _classCallCheck(this, BarCell);

        var _this4 = _possibleConstructorReturn(this, (BarCell.__proto__ || Object.getPrototypeOf(BarCell)).call(this, props));

        _this4.state = {
            "highlight": false
        };
        return _this4;
    }

    _createClass(BarCell, [{
        key: "handleOnMouseOver",
        value: function handleOnMouseOver() {
            this.state.highlight = true;
            this.setState(this.state);
        }
    }, {
        key: "handleOnMouseOut",
        value: function handleOnMouseOut() {
            this.state.highlight = false;
            this.setState(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            var _this5 = this;

            var c;
            if (this.state.highlight) {
                c = "barCell barCellHighlight";
            } else {
                c = "barCell";
            }
            var mouseOn = function mouseOn(e) {
                _this5.handleOnMouseOver();
            };
            var mouseOff = function mouseOff(e) {
                _this5.handleOnMouseOut();
            };
            if (typeof BarCell.lookup[this.props.name][1] == "string") {
                var clicked = function clicked(e) {
                    _this5.props.cf(_this5.props.name);
                };
                return React.createElement(
                    "div",
                    { className: c },
                    React.createElement("div", { className: "mask", onMouseOver: mouseOn, onMouseOut: mouseOff, onClick: clicked }),
                    React.createElement(
                        "p",
                        null,
                        BarCell.lookup[this.props.name][0]
                    )
                );
            } else {
                var menu;
                if (this.state.highlight) {
                    menu = React.createElement(BarSubMenu, { key: this.props.path + "sub/", path: this.props.path + "sub/", elems: BarCell.lookup[this.props.name][1], cantsee: false, cf: this.props.cf });
                } else {
                    menu = React.createElement(BarSubMenu, { key: this.props.path + "sub/", path: this.props.path + "sub/", elems: BarCell.lookup[this.props.name][1], cantsee: true, cf: this.props.cf });
                }
                return React.createElement(
                    "div",
                    { className: c },
                    React.createElement(
                        "div",
                        { className: "mask maskBig", onMouseOver: mouseOn, onMouseOut: mouseOff },
                        menu
                    ),
                    React.createElement(
                        "p",
                        null,
                        BarCell.lookup[this.props.name][0]
                    )
                );
            }
        }
    }]);

    return BarCell;
}(React.Component);

BarCell.lookup = {
    "home": ["HOME", "home"],
    "articles": ["ARTICLES", [["ARTICLE 1", "article1"], ["ARTICLE 2", "article2"], ["ARTICLE 3", "article3"]]],
    "projects": ["PROJECTS", "projects"],
    "user": ["USER", [["LOG IN", "login"], ["LOG OUT", "logout"], ["SETTINGS", "settings"]]]
};

var Bar = function (_React$Component4) {
    _inherits(Bar, _React$Component4);

    function Bar(props) {
        _classCallCheck(this, Bar);

        return _possibleConstructorReturn(this, (Bar.__proto__ || Object.getPrototypeOf(Bar)).call(this, props));
    }

    _createClass(Bar, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "barTable" },
                React.createElement(
                    "div",
                    { className: "barRow" },
                    React.createElement(BarCell, { path: this.props.path + "home/", name: "home", cf: this.props.cf }),
                    React.createElement(BarCell, { path: this.props.path + "articles/", name: "articles", cf: this.props.cf }),
                    React.createElement(BarCell, { path: this.props.path + "projects/", name: "projects", cf: this.props.cf }),
                    React.createElement(BarCell, { path: this.props.path + "user/", name: "user", cf: this.props.cf })
                )
            );
        }
    }]);

    return Bar;
}(React.Component);

var PageContent = function (_React$Component5) {
    _inherits(PageContent, _React$Component5);

    function PageContent(props) {
        _classCallCheck(this, PageContent);

        return _possibleConstructorReturn(this, (PageContent.__proto__ || Object.getPrototypeOf(PageContent)).call(this, props));
    }

    _createClass(PageContent, [{
        key: "render",
        value: function render() {
            var text = document.getElementById(this.props.focus).innerHTML;
            return React.createElement("div", { dangerouslySetInnerHTML: { __html: text } });
        }
    }]);

    return PageContent;
}(React.Component);

var Page = function (_React$Component6) {
    _inherits(Page, _React$Component6);

    function Page(props) {
        _classCallCheck(this, Page);

        var _this8 = _possibleConstructorReturn(this, (Page.__proto__ || Object.getPrototypeOf(Page)).call(this, props));

        _this8.state = {
            "path": "ReactComponent/Page/",
            "focus": "home"
        };
        return _this8;
    }

    _createClass(Page, [{
        key: "changeFocus",
        value: function changeFocus(f) {
            this.state.focus = f;
            this.setState(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            var _this9 = this;

            var cf = function cf(f) {
                _this9.changeFocus(f);
            };
            return React.createElement(
                "div",
                { className: "page" },
                React.createElement(Bar, { key: this.state.path + "Bar/", path: this.state.path + "Bar/", cf: cf }),
                React.createElement("br", null),
                React.createElement("hr", { className: "hbar" }),
                React.createElement("br", null),
                React.createElement(PageContent, { key: this.state.path + "Content/", path: this.state.path + "Content/", focus: this.state.focus })
            );
        }
    }]);

    return Page;
}(React.Component);

ReactDOM.render(React.createElement(Page, null), document.getElementById('Page'));