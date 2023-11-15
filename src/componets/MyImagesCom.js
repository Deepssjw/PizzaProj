import React, { Component } from 'react'
import rajani from '../shared/images/rajnikant.jpg';
import samplevdo from '../shared/images/sample-vdo.mp4';
import dosa from '../shared/images/dosa.jfif';
import samosa from '../shared/images/samosa.jfif';
import sampleAdo from '../shared/images/sampleaudio.mp3';
// accessing constant file data
import { MultimediaData } from '../shared/constant/constantData';

class MyImagesCom extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div>
                <h2>This is MyImages Component</h2>
                <img src={rajani} alt='rajnikath' width="400px" height="200px"/> <br />
                <img src={dosa} alt='dosa' width="400px" height="200px"/>
                <img src={samosa} alt='samosa' width="400px" height="200px"/><br />
                <video controls src={samplevdo}></video>
                <audio controls src={sampleAdo}></audio>
                <hr/>
                {/* accessing constant file data */}
                <img src={MultimediaData.jalebi} alt='jalebi' width="400px" height="200px"/><br />
            </div>
        )
    }
}

export default MyImagesCom
