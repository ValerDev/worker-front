import React from 'react';
import "../../.././styles/my-Account/imageStyles/worksImageStyle.css";
import '../../.././styles/AvatarStyle.css';
import HighlightOff from '@material-ui/icons/HighlightOff'
import image from "../../header/logo-var.png";


class ImgZoomIn extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
    };

    render() {
        return(
            <div className='zoomInMainDiv'>
            <div className= 'preview__header'>
                <img className='logoStyle'  src={image} alt="Varpet Logo"/>
                <HighlightOff   className= 'imgDelete' onClick={this.props.close}/></div>
            <div className='zoomInDiv'>
            </div>
                <img className='imgZoom' src = {this.props.imgUrl}/>
            </div>
        )
    }

}


export default ImgZoomIn;
