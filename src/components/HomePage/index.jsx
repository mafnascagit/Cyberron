import React, {Component} from 'react'; 
import NavBar from '../NavBar'; 
import Cards from '../Cards'; 
import Banner from '../Banner';
import Footer from '../Footer';
import FoundersSection from '../FoundersSection'; 
import './style.css';


class HomePage extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            isLoading: false, 
        }
    }

    render() {
        return(
            <React.Fragment>
                <NavBar/> 
                <Banner/>
                {/* <div className ="HomePage"> */}
                    <Cards/>
                {/* </div> */}
                <FoundersSection/>
               <Footer/>
            </React.Fragment>
        )
    }
}

export default HomePage; 