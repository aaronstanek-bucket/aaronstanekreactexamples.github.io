'use strict';

class MemoBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        var memo = this.props.memo;
        if (memo.length == 0) {
            return (<span></span>);
        }
        else {
            return (<p className="memo">{memo}</p>);
        }
    }
}

class Box extends React.Component {
    constructor(props) {
        super(props);
        this.state = {"memo":""};
    }
    memo(text) {
        this.state.memo = text;
        this.setState(this.state);
    }
    render() {
        var clickBox = () => {this.clicked();};
        return (
        <div className="Box">
            <p className="title">New Account</p>
            <MemoBox memo={this.state.memo} />
            <p>Username</p>
            <input type="text" id="username" />
            <p>Password</p>
            <input type="password" />
            <div className="click" onClick={clickBox}><p>Create</p></div>
        </div>);
    }
    checkChar(c) {
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
    checkValid(s) {
        for (let i = 0; i < s.length; i++) {
            if (!(this.checkChar(s[i]))) {
                return false;
            }
        }
        return true;
    }
    clicked() {
        var username = document.getElementById("username").value;
        this.state.username = username;
        if (!(this.checkValid(username))) {
            this.memo("Your username contains invalid characters.");
            return;
        }
        setCookie({"name":this.state.username,"info":{}});
        var callback = (text) => {this.callback1(text);};
        databaseRead(callback);
    }
    callback1(text) {
        console.log("callback1",text);
        if (typeof text != "string") {
            this.memo("Database Error");
            return;
        }
        var respond = JSON.parse(text);
        if (!(respond.good)) {
            this.memo("Database Error");
            return;
        }
        if (respond.found) {
            this.memo("That username is already taken.");
            return;
        }
        var callback = (text) => {this.callback2(text);};
        databaseWrite(callback);
    }
    callback2(text) {
        console.log("callback2",text);
        if (typeof text != "string") {
            this.memo("Database Error");
            return;
        }
        var respond = JSON.parse(text);
        if (!(respond.good)) {
            this.memo("Database Error");
            return;
        }
        window.location = "user.html";
    }
}

ReactDOM.render(
    <Box />,
    document.getElementById('Box')
    );