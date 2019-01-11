import React, { Component } from "react";
import { Input } from "../Input";
import { Button } from "../Button";

export class Add extends Component {
    state = {
        text: "",
    };

    update = text => {
        this.setState({text})
    } 
    
    updateComponent = () => {
        this.props.onClick(this.state.text);
        this.setState({text:""})
    }

    render() {
        return(
        <React.fragment>
            <Input name={this.state.text} value={this.state.text} update={this.update}/>
            <Button onClick={this.updateComponent} text='Add'/>
        </React.fragment>
        )
    }
}




