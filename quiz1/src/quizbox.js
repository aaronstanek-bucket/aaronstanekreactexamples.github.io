'use strict';

function keyGen() {
    // generates a unique string
    // output each time it is called
    var output = keyGen.value;
    keyGen.value++;
    return "ReactElement"+output;
}

keyGen.value = BigInt(0);
// sets the initial value for keyGen

// QuizOptions operates the individual options
// within the multiple-choice menu
class QuizOptions extends React.Component {
    constructor(props) {
        super(props);
    }
    getThisValue() {
        // if the cookie has a record for this
        // question already
        // then select that option by default
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
        // sets the cookie value for this
        // question to what the user has selected
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
    update(id) {
        // identifies the multiple choice box in the DOM
        // calls setThisValue for the selected answer
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
        // renders the multiple choice box onto the screen
        var picked = this.getThisValue();
        // picked is which option was selected previously
        var options = [];
        for (let i = 0; i < QUIZDATA.answers.length; i++) {
            let text = QUIZDATA.answers[i][0];
            // the text of the option
            let value = QUIZDATA.answers[i][1];
            // the value to save to the cookie when
            // this option is chosen
            let key = keyGen();
            options.push(
                <input key={key} type="radio" id={key} name="option"
                value={value} defaultChecked={value==picked}/>
                );
            // if value==picked, then this option will be selected
            options.push(<label key={keyGen()} htmlFor={key}>{text}</label>);
            options.push(<br key={keyGen()} />);
            options.push(<br key={keyGen()} />);
        }
        var id = keyGen();
        var clicked = () => {this.update(id)};
        // when the multiple choice box gets clicked
        // then call the update method, passing the id
        // of the multiple choice box in the DOM
        return (<form id={id} onClick={clicked}>{options}</form>);
    }
}

// NextButton creates a next button
class NextButton extends React.Component {
    constructor(props) {
        super(props);
    }
    nextFunction() {
        // whatever number is in the QUIZDATA
        // increment the value and go to the
        // corresponding page
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

// QuizBox contains the question
// the multiple options
// and the next button
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