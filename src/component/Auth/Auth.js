import React from 'react';
import {connect} from 'react-redux'
import {login} from '../../ducks/reducer'

class Auth extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    };

    login() {
        const { login } = this.props;
        const { username, password } = this.state;
        login({ username, password });
      }
    register(){
        const { register } = this.props;
        const { username, password } = this.state;
        register({username, password});
    }



    handleUsername(username){
        this.setState({username: username});
    }
    handlePassword(password){
        this.setState({password: password});
    }


    render(){
        
        return(
            <div>
                <input value={this.state.username} onChange={e => this.handleUsername(e.target.value)}type="text"/>
                <input value={this.state.password} onChange={e => this.handlePassword(e.target.value)}type="text"/>
                <button onClick={this.login}>Login</button>
                <button>Register</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    return state;
}

export default connect(mapStateToProps, {login}) (Auth)