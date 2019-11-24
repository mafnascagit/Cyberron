import React, {Component} from 'react'; 
import './style.css'; 

class FoundersSection extends Component {
    constructor() {
        super();
        this.state = {
            isLoading: false, 
        }
    }

    render() {
        return (
            <div className="foundersSection">
                <div className="title">Our Founders</div>
                <div className="founderContainer">
                    <div className="founder">
                        <div className="founderName">Nelson Gomez</div>
                     </div>
                    <div className="founderDescription">
                    <div className="founderHistory">Career History</div>
                    </div>
                    <div></div>
                </div>
                <div className="founderContainer">
                    <div className="founder">
                        <div className="founderName">Conan Mafnas</div>
                     </div>
                    <div className="founderDescription">
                        <div className="founderHistory">Career History</div>
                    </div>
                    <div></div>
                </div>
                <div className="founderContainer">
                    <div className="founder">
                        <div className="founderName">Matthew Meelaphsom</div>
                     </div>
                    <div className="founderDescription">
                        <div className="founderHistory">Career History</div>
                    </div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default FoundersSection;