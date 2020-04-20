'use strict';

function keyGen() {
    var output = keyGen.value;
    keyGen.value++;
    return "ReactElement"+output;
}

keyGen.value = BigInt(0);

class QuizOptions extends React.Component {
    constructor(props) {
        super(props);
    }
    getThisValue() {
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
    setThisValue(value) {
        var number = QUIZDATA.number;
        var cookie = getCookie("quiz1");
        if (cookie == "") {
            cookie = "{}";
        }
        var data = JSON.parse(cookie);
        data[number] = value;
        cookie = JSON.stringify(data);
        setCookie("quiz1",cookie);
    }
    update(id) {
        var elem = document.getElementById(id);
        var children = elem.childNodes;
        for (let i = 0; i < children.length; i++) {
            if (children[i].nodeName != "INPUT") {
                continue;
            }
            if (children[i].checked) {
                this.setThisValue(children[i].value);
                break;
            }
        }
    }
    render() {
        var picked = this.getThisValue();
        var options = [];
        for (let i = 0; i < QUIZDATA.answers.length; i++) {
            let text = QUIZDATA.answers[i][0];
            let value = QUIZDATA.answers[i][1];
            let key = keyGen();
            options.push(
                <input key={key} type="radio" id={key} name="option"
                value={value} defaultChecked={value==picked}/>
                );
            options.push(<label key={keyGen()} htmlFor={key}>{text}</label>);
            options.push(<br key={keyGen()} />);
            options.push(<br key={keyGen()} />);
        }
        var id = keyGen();
        var clicked = () => {this.update(id)};
        return (<form id={id} onClick={clicked}>{options}</form>);
    }
}

class NextButton extends React.Component {
    constructor(props) {
        super(props);
    }
    nextFunction() {
        var number = parseInt(QUIZDATA.number);
        number++;
        window.location.href = number+".html";
    }
    render() {
        return (
            <div className="nextDiv">
                <button onClick={this.nextFunction}>Next</button>
            </div>
        );
    }
}

class QuizBox extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            <p>{QUIZDATA.question}</p>
            <hr /><br />
            <QuizOptions />
            <NextButton />
            </div>
        );
    }
}

function runSetup() {
    ReactDOM.render(
        <QuizBox />,
        document.getElementById('QuizBox')
      );
}

function callSetup(callTime) {
    if (document.readyState != "complete" || typeof QUIZDATA == "undefined") {
        var now = (new Date()).getTime();
        if (now - callTime > 30000) {
            console.log("failed to load resources");
        }
        else {
            setTimeout(callSetup,20,callTime);
        }
    }
    else {
        runSetup();
    }
}

callSetup((new Date()).getTime());