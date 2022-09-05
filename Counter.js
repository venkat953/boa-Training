
import { Component } from 'react';

export default class Counter extends Component {
    /*
    constructor(props){
super(props)
this.inc
    }
    */
    componentDidMount() {
        console.log('called once')
    }
    componentDidUpdate() {
        console.log('called on every update')
    }
    state = {
        counter: 0
    }
    increment = () => {
        //e.preventDefault()

        //alert('Clicked Increment')
        //this.state.counter=this.state.counter+1
        //console.log(this.state);

        this.setState((prevState) => {
            return {
                counter: prevState.counter + 1
            }

        })
    }
    decrement=()=> {
        this.setState((prevState) => {
            return {
                counter: prevState.counter -1
            }

        })
    }
    reset=()=> {
        this.setState((prevState) => {
            return {
                counter: 0
            }

        })
    }
    render() {
        return (
            <div>
                <p>Counter is : {this.state.counter}</p>
                <button onClick={this.increment} >Increment</button>
                <button onClick={this.decrement}>Decrement</button>
                <button onClick={this.reset}>Reset</button>
            </div>
        );
    }
}