import React from 'react';
import {Link} from 'react-router-dom';
// // import {withRouter} from 'react-router';
// // import {connect} from 'react-redux';



const Nav = props => {
    return(
        <div>
            <Link to='/' ><button>Logout</button></Link>
        </div>
    )
}

export default Nav

/* 

  // console.log(props)
    // const {location} = props;

    // if(location.pathname === this.props.location.pathname){
    //     return '/'
    // } else {
    //     return (
            <div>
    {/* //             <Link to='/' ><button>Logout</button></Link>
    //             {props} */