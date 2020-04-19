import React from 'react';
import {Button} from 'reactstrap'

class NavBar extends React.Component{

    goToNewPage(page){
        window.location.href = page
    }

    render(){
        return(
            <React.Fragment>
                <div class="text-center">
                    <Button color="light" onClick={() => this.goToNewPage('/')} id='create'>Create Art</Button>
                    <Button color="light" onClick={() => this.goToNewPage('browse')} id='browse'>Browse Art</Button>
                    <Button color="light" onClick={() => this.goToNewPage('login')} id='login'>Login/Signup</Button>
                    <Button color="light" onClick={() => this.goToNewPage('profile')} id='profile'>View Profile</Button>
                </div>
            </React.Fragment>
        );
    }
}

export default NavBar;