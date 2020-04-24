'use strict';

function keyGen() {
    var output = keyGen.value;
    keyGen.value++;
    return "ReactElement"+output;
}

keyGen.value = BigInt(0);

// StatsBox shows what percentage of responces
// aligned with each answer category
class StatsBox extends React.Component {
    constructor(props) {
        super(props);
        // compute how many responces in each category
        var stats = {
            "math": 0,
            "nature": 0,
            "sports": 0,
            "food": 0
        };
        for (let i = 1; i <= 5; i++) {
            stats[props.data[i]]++;
        }
        this.state = {
            "stats": stats
        };
    }
    render() {
        return (
            <div className="tableLike">
                <div className="rowLike"><div className="cellLike"><p>Math:</p></div><div className="cellSpace"></div><div className="cellLike"><p>{(this.state.stats.math*20)+"%"}</p></div></div>
                <div className="rowLike"><div className="cellLike"><p>Nature:</p></div><div className="cellSpace"></div><div className="cellLike"><p>{(this.state.stats.nature*20)+"%"}</p></div></div>
                <div className="rowLike"><div className="cellLike"><p>Sports:</p></div><div className="cellSpace"></div><div className="cellLike"><p>{(this.state.stats.sports*20)+"%"}</p></div></div>
                <div className="rowLike"><div className="cellLike"><p>Food:</p></div><div className="cellSpace"></div><div className="cellLike"><p>{(this.state.stats.food*20)+"%"}</p></div></div>
            </div>
        );
    }
}

class DescriptionMath extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>It looks like you have an interest in Mathematics.</p>
                <p>You might enjoy some of the following articles:</p>
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Mathematics">Mathematics</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/List_of_mathematical_symbols">List of mathematical symbols</a></li>
                </ul>
            </div>
        );
    }
}

class DescriptionNature extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>It looks like you have an interest in Nature.</p>
                <p>You might enjoy some of the following articles:</p>
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Nature">Nature</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Forestry">Forestry</a></li>
                </ul>
            </div>
        );
    }
}

class DescriptionSports extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>It looks like you have an interest in Sports.</p>
                <p>You might enjoy some of the following articles:</p>
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Sport">Sports</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Association_football">Football</a></li>
                </ul>
            </div>
        );
    }
}

class DescriptionFood extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <p>It looks like you have an interest in Food.</p>
                <p>You might enjoy some of the following articles:</p>
                <ul>
                    <li><a href="https://en.wikipedia.org/wiki/Food">Food</a></li>
                    <li><a href="https://en.wikipedia.org/wiki/Cooking">Cooking</a></li>
                </ul>
            </div>
        );
    }
}

// DescriptionBox decides which category descriptions to
// display and then displays them
class DescriptionBox extends React.Component {
    constructor(props) {
        super(props);
        // duplicate code from above
        // resolve with class inheritance
        var stats = {
            "math": 0,
            "nature": 0,
            "sports": 0,
            "food": 0
        };
        for (let i = 1; i <= 5; i++) {
            stats[props.data[i]]++;
        }
        this.state = {
            "stats": stats
        };
    }
    render() {
        var things = Object.keys(this.state.stats);
        // things is an array of the answer categories
        var winners = [things[0]];
        for (let i = 1; i < things.length; i++) {
            if (this.state.stats[things[i]] < this.state.stats[winners[0]]) {
                continue;
            }
            if (this.state.stats[things[i]] == this.state.stats[winners[0]]) {
                winners.push(things[i]);
            }
            else {
                winners = [things[i]];
            }
        }
        // winners is an array holding those answer categories
        // with a maximal number of responces
        var output = [];
        for (let i = 0; i < winners.length; i++) {
            output.push(<hr key={keyGen()} />)
            if (winners[i] == "math") {
                output.push(<DescriptionMath key={keyGen()} />);
            }
            else if (winners[i] == "nature") {
                output.push(<DescriptionNature key={keyGen()} />);
            }
            else if (winners[i] == "sports") {
                output.push(<DescriptionSports key={keyGen()} />);
            }
            else {
                output.push(<DescriptionFood key={keyGen()} />);
            }
        }
        return (<div>{output}</div>);
    }
}

// AnswerBox checks if all questions have been answered
// if not, it generates a link to the skipped question
// if yes, it shows the StatsBox and DescriptionBox
class AnswerBox extends React.Component {
    constructor(props) {
        super(props);
        var cookie = getCookie("quiz1");
        if (cookie == "") {
            cookie = "{}";
        }
        var data = JSON.parse(cookie);
        for (let i = 1; i <= 5; i++) {
            if (!(i in data)) {
                // question i is missing
                this.state = {
                    "complete": false,
                    "link": i+".html"
                }
                return;
            }
        }
        this.state = {
            "complete": true,
            "data": data
        }
    }
    render() {
        if (this.state.complete) {
            return (
                <div>
                <p>Results</p>
                <hr /><br />
                <StatsBox data={this.state.data} />
                <DescriptionBox data={this.state.data} />
                <hr />
                <p>To retake the quiz, <a href="reset.html">click here</a></p>
                </div>
            );
        }
        else {
            return (
                <div>
                <p>It looks like you missed a question.</p>
                <p>A link to the question you missed is <a href={this.state.link}>here</a></p>
                </div>
                );
        }
    }
}

function runSetup() {
    ReactDOM.render(
        <AnswerBox />,
        document.getElementById('QuizBox')
      );
}

function callSetup(callTime) {
    if (document.readyState != "complete") {
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