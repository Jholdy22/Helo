import React from 'react';

class Auth extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            username: '',
            password: ''
        }

    };


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
                <button>Login</button>
                <button>Register</button>
            </div>
        )
    }
}

export default Auth