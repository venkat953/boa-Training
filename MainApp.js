
import { Component } from "react";
import AddUser from "./AddUser";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import UserAction from "./UserAction";
import Users from "./Users";

export default class MainApp extends Component {

    componentDidMount() {
        //console.log('called once')
        const json=localStorage.getItem('boa')
        const users=JSON.parse(json)
        if(users){
            this.setState(()=>({users}))
        }
    }
    componentDidUpdate() {
        //console.log('called on every update')
        const json=JSON.stringify(this.state.users)
        localStorage.setItem('boa',json)
    }

    state = {
        headerdata: 'welcome to Header from state',
        footerData: 'welcome to Footer',
        users: []
    }
    deleteUsers = () => {
        this.setState(() => {
            return {
                users: []
            }
        })
    }
    deleteUser = (user) => {
        this.setState((prevState) => ({
            users: prevState.users.filter((option) => user != option)
        }))
    }
    addUser = (input) => {
        this.setState((prevState) => {
            return {
                users: prevState.users.concat(input)
            };
        });
    };
    render() {
        /*
        const headerdata='welcome to Header'
        const footerData='welcome to Footer'
        const users=['admin','manager','qa']
        */
        return (
            <div>
                <Header hdata={this.state.headerdata} />
                <div>
                    <p> welcome to MainAPP</p>
                </div>
                <Users udata={this.state.users}
                    da={this.deleteUsers} du={this.deleteUser} hasData={this.state.users.length > 0} />
                <UserAction hasData={this.state.users.length > 0} />
                <AddUser adduser={this.addUser} />
                <Counter />
                <Footer fdata={this.state.footerData} />
            </div>
        );
    }
}
