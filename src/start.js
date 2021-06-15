import React from 'react'
import styled from 'styled-components';

const StartButton = styled.div`
    margin:10px auto;
    margin-bottom:50px;
    width:300px;
    height:60px;
    border:1px solid #cccccc;
    border-radius:7px;
    background-color:#fbffe0;
    text-align:center;
    color:#537af5;
    font-size:35px;
    cursor:pointer;
    line-height:60px;

    &:hover{
        background-color:#c5e3b1;
        color:#306880;
    }
`


class Start extends React.Component{

    constructor(props){
        super(props)
    }



    render(){
        return <div>
            <StartButton onClick={this.props.startbutton}>시작하기!</StartButton>
        </div>
    }
}

export default Start