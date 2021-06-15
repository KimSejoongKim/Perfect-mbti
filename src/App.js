import React from 'react'
import Title from './Title'
import "./appcss.css"
import {MainWrap} from "./styles"
import Start from "./start"
import Question from "./Question"
import styled from "styled-components";

const InputName = styled.input`
    text-align:center;
    margin: 30px auto;
    margin-top:55px;
    width:250px;
    height:40px;
    font-size:20px;
    line-height:30px;

`

const Div = styled.div`
    width:max-content;
    height:max-content;
    margin:0 auto;
`

class App extends React.Component{

    constructor(props){
        super(props)
    }

    state = {
        isstart:false,
        who : ""
    }

    start = () => {
        this.setState({
            isstart : this.state.isstart = true,
        })
    }

    render(){
        return <div>
            <MainWrap>
                <Title/>
                <Div>{this.state.isstart ? <></> : <InputName onChange={ (e)=>{this.setState({who:e.target.value}) } } placeholder="당신의 이름을 입력하세요."/>}</Div>
                {this.state.isstart ? <Question who={this.state.who}/> : <Start startbutton={this.start}/>}

            </MainWrap>
        </div>
    }
}

export default App