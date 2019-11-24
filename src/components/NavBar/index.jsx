import React, {Component} from 'react'; 
import { APPLICATION_NAME, LINK_NAMES } from '../../config'; 
import './style.css'; 
import { tsNamespaceExportDeclaration } from '@babel/types';

// Functional Component: NavBar 

const NavBar = (props) => {
    return (
        <React.Fragment>
            <div className="navContainer">
                <div className="appName">
                    {APPLICATION_NAME}
                </div>
                <div className="links">
                   {LINK_NAMES.map(linkName => { return (<span className="linkNames">{linkName}</span>)})}
                </div>
                <div className="Login">
                    <div className="logSignText">Login  | Sign up</div>
                    
                </div>                
            </div>
        </React.Fragment>
    )
}

export default NavBar; 