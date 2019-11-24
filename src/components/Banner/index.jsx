import React, {Component} from 'react'; 
import './style.css'; 


class Banner extends Component {
    constructor(props) {
        super(props); 
        this.state = {}
    }

    render() {
        return(
            <React.Fragment>
                <div className="banner">
                    <span className="bannerText">Stop. Think. Innovate!</span>
                </div>
            </React.Fragment>
        )
    }
}

export default Banner; 

