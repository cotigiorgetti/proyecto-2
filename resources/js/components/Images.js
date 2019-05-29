import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../../../public/css/layout.css';
import '../../../public/css/images.css'

export default class Images extends Component {
    constructor(){
        super()
    }
    
    buttonClick(id){
        this.props.onClick(id)
    }

    render() {
        return (
            <div>

                <div className="hover-btn">
                <button onClick={() =>this.buttonClick(1)} className="btn btn-style"> <img src={require('./images/estampas/botones/girl_button.png')} height="35"/></button>
                <button onClick={() =>this.buttonClick(2)} className="btn btn-style"><img src={require('./images/estampas/botones/cat_button.png')} height="35"/></button>
                <button  onClick={() =>this.buttonClick(3)} className="btn btn-style"><img src={require('./images/estampas/botones/stitch_button.png')} height="35"/></button>
                <button onClick={() =>this.buttonClick(4)}  className="btn btn-style"><img src={require('./images/estampas/botones/palmeras_button.png')} height="35"/></button>
                <button onClick={() =>this.buttonClick(5)}  className="btn btn-style"><img src={require('./images/estampas/botones/cobra_button.png')} height="35"/></button>
                <button onClick={() =>this.buttonClick(6)} className="btn btn-style"><img src={require('./images/estampas/botones/elephant-mandala_button.png')} height="35"/></button>
                <button onClick={() =>this.buttonClick(7)} className="btn btn-style"><img src={require('./images/estampas/botones/minion_button.png')} height="35"/></button>
                <button onClick={() =>this.buttonClick(8)} className="btn btn-style"><img src={require('./images/estampas/botones/girl-poweer_button.png')} height="35"/></button>
                <button onClick={() =>this.buttonClick(9)} className="btn btn-style"><img src={require('./images/estampas/botones/abortolegal_button.png')} height="35"/></button>
                <button onClick={() =>this.buttonClick(0)} className="btn btn-style"><img src={require('./images/estampas/botones/sin-estampa_button.png')} height="35"/></button>
            </div>
            </div>
        );
    }
}