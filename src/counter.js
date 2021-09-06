import React from "react";


class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            name: "joyce"
        }
    }

    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }
    decrement = () => {
        this.setState({ count: this.state.count - 1 })
    }
    reset = () => {
        this.setState({ count: (this.state.count = 0) })
    }
    render() {
        console.log(this.state.count);
        return (
            <>
                <p>count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button><br></br><br></br>
                <button onClick={this.decrement}>Decrement</button><br></br><br></br>
                <button onClick={this.reset}>Reset</button>
            </>
        )

    }
}




export default Counter;