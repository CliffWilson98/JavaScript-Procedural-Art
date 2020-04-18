import React from 'react';

class NavBar extends React.Component{

    goToNewPage(page){
        window.location.href = page
    }

    render(){
        return(
            <React.Fragment>
                <button onClick={() => this.goToNewPage('/')} id='create'>Create Art</button>
                <button onClick={() => this.goToNewPage('browse')} id='browse'>Browse Art</button>
                <button onClick={() => this.goToNewPage('login')} id='login'>Login/Signup</button>
                <button onClick={() => this.goToNewPage('profile')} id='profile'>View Profile</button>
            </React.Fragment>
        );
    }
}

export default NavBar;