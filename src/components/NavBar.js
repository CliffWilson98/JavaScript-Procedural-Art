import React from 'react';
import {Button} from 'reactstrap'

class NavBar extends React.Component{

    goToNewPage(page){
        window.location.href = page
    }

    render(){
        const style = {
            'margin-top': '20px'
        }
        return(
            <React.Fragment>
                <div class="text-center">
                    <h1 style={style}> Procedural Art Generator</h1>
                    <hr></hr>
                    <Button color="light" onClick={() => this.goToNewPage('/')} id='create'>Create Art</Button>
                    <Button color="light" onClick={() => this.goToNewPage('browse')} id='browse'>Browse Art</Button>
                    <Button color="light" onClick={() => this.goToNewPage('login')} id='login'>Login/Signup</Button>
                    <Button color="light" onClick={() => this.goToNewPage('profile')} id='profile'>View Profile</Button>
                    <hr></hr>
                </div>
            </React.Fragment>
        );
    }
}

export default NavBar;