import React, { Component } from 'react';

class Header extends Component {
    state = {  } 

    render() { 
        return (
            <div className='ui fixed menu'>
                <div className='ui container center'>
                    <h2 className='app-name'>Shop - 001</h2>
                </div>
            </div>
        );
    }
}
 
export default Header;