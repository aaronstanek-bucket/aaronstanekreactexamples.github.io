'use strict';

class BarSubItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "highlight": false
        };
    }
    handleOnMouseOver() {
        this.state.highlight = true;
        this.setState(this.state);
    }
    handleOnMouseOut() {
        this.state.highlight = false;
        this.setState(this.state);
    }
    render() {
        if (this.props.elem === null) {
            return (<div className="barSubSpace"></div>);
        }
        var c;
        if (this.state.highlight) {
            c = "barSubItem barSubHighlight";
        }
        else {
            c = "barSubItem";
        }
        var mouseOn = (e) => {this.handleOnMouseOver()};
        var mouseOff = (e) => {this.handleOnMouseOut()};
        var clicked = (e) => {this.props.cf(this.props.elem[1])};
        return (
            <div className={c} onMouseOver={mouseOn} onMouseOut={mouseOff} onClick={clicked}>
                <p>{this.props.elem[0]}</p>
            </div>
        );
    }
}

class BarSubMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var stuff = [];
        stuff.push(
            <BarSubItem key={this.props.path+"0/"} path={this.props.path+"0/"} elem={null} />
        );
        for (let i = 0; i < this.props.elems.length; i++) {
            let e = this.props.elems[i];
            stuff.push(<BarSubItem key={this.props.path+e[1]+"/"} path={this.props.path+e[1]+"/"} elem={e} cf={this.props.cf} />);
        }
        var c;
        if (this.props.cantsee) {
            c = "barSubMenu cantsee";
        }
        else {
            c = "barSubMenu";
        }
        return (
            <div className={c}>
                {stuff}
            </div>
        );
    }
}

class BarCell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "highlight": false
        };
    }
    handleOnMouseOver() {
        this.state.highlight = true;
        this.setState(this.state);
    }
    handleOnMouseOut() {
        this.state.highlight = false;
        this.setState(this.state);
    }
    render() {
        var c;
        if (this.state.highlight) {
            c = "barCell barCellHighlight";
        }
        else {
            c = "barCell";
        }
        var mouseOn = (e) => {this.handleOnMouseOver()};
        var mouseOff = (e) => {this.handleOnMouseOut()};
        if (typeof BarCell.lookup[this.props.name][1] == "string") {
            var clicked = (e) => {this.props.cf(this.props.name)};
            return (
                <div className={c}>
                    <div className="mask" onMouseOver={mouseOn} onMouseOut={mouseOff} onClick={clicked}></div>
                    <p>{BarCell.lookup[this.props.name][0]}</p>
                </div>
            );
        }
        else {
            var menu;
            if (this.state.highlight) {
                menu = (<BarSubMenu key={this.props.path+"sub/"} path={this.props.path+"sub/"} elems={BarCell.lookup[this.props.name][1]} cantsee={false} cf={this.props.cf} />);
            }
            else {
                menu = (<BarSubMenu key={this.props.path+"sub/"} path={this.props.path+"sub/"} elems={BarCell.lookup[this.props.name][1]} cantsee={true} cf={this.props.cf} />);
            }
            return (
                <div className={c}>
                    <div className="mask maskBig" onMouseOver={mouseOn} onMouseOut={mouseOff}>
                        {menu}
                    </div>
                    <p>{BarCell.lookup[this.props.name][0]}</p>
                </div>
            );
        }
    }
}

BarCell.lookup = {
    "home": ["HOME","home"],
    "articles": ["ARTICLES",[["ARTICLE 1","article1"],["ARTICLE 2","article2"],["ARTICLE 3","article3"]]],
    "projects": ["PROJECTS","projects"],
    "user": ["USER",[["LOG IN","login"],["LOG OUT","logout"],["SETTINGS","settings"]]]
};

class Bar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="barTable">
                <div className="barRow">
                    <BarCell path={this.props.path+"home/"} name={"home"} cf={this.props.cf} />
                    <BarCell path={this.props.path+"articles/"} name={"articles"} cf={this.props.cf} />
                    <BarCell path={this.props.path+"projects/"} name={"projects"} cf={this.props.cf} />
                    <BarCell path={this.props.path+"user/"} name={"user"} cf={this.props.cf} />
                </div>
            </div>
        );
    }
}

class PageContent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var text = document.getElementById(this.props.focus).innerHTML;
        return (
            <div dangerouslySetInnerHTML={{__html: text}} />
        );
    };
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "path": "ReactComponent/Page/",
            "focus": "home"
        };
    }
    changeFocus(f) {
        this.state.focus = f;
        this.setState(this.state);
    }
    render() {
        var cf = (f) => {this.changeFocus(f)};
        return (
            <div className="page">
                <Bar key={this.state.path+"Bar/"} path={this.state.path+"Bar/"} cf={cf} />
                <br />
                <hr className={"hbar"} />
                <br />
                <PageContent key={this.state.path+"Content/"} path={this.state.path+"Content/"} focus={this.state.focus} />
            </div>
        );
    }
}

ReactDOM.render(
    <Page />,
    document.getElementById('Page')
  );