import React from 'react'
import styled from 'styled-components';
import Result from './result'

const SelectBtn1 = styled.div`
    margin:0px auto;
    margin-top:30px;
    margin-bottom:10px;
    width: 150px; height:50px;
    background-color:#92e899;
    border:1px solid #cccccc;
    line-height:50px;
    color:#f0fcfc;
    text-align:center;
    font-size:30px;
    border-radius:5px;
    cursor:pointer;

    &:hover{
        background-color:#92d1ad ;
        color: #d5e3e3;
    }
`

const SelectBtn2 = styled.div`
    margin:0px auto;
    width: 150px; height:50px;
    background-color:#f9c8fa;
    border:1px solid #cccccc;
    line-height:50px;
    color:#fffdf7;
    text-align:center;
    font-size:30px;
    border-radius:5px;
    cursor:pointer;

    &:hover{
        background-color:#e1bfe3 ;
        color: #edebe4;
    }
`

const H2 = styled.h2`
    padding-top:80px;
    text-align:center;
    font-family:"notosans";
    font-size:20px;
`

class Question extends React.Component{

    constructor(props){
        super(props)
    }

    state = {
        mbti:"",
        number:1
    }

    asking = () => {
        
        if(this.state.number == 1){
            return "당신은 외향형(E) 입니까 내향형(I) 입니까?"
        }else if(this.state.number == 2){
            return "당신은 감각형(S) 입니까 직관형(N) 입니까?"
        }else if (this.state.number == 3){
            return "당신은 사고형(T) 입니까 감정형(F) 입니까?"
        }else if(this.state.number == 4){
            return "당신은 판단형(J) 입니까 인식형(P)입니까?"
        }

    }

    answerBtn1 = () => {
        
        if(this.state.number == 1){

            return "E"
        }else if(this.state.number == 2){

            return "S"
        }else if (this.state.number == 3){

            return "T"
        }else if(this.state.number == 4){

            return "J"
        }

    }

    answerBtn2 = () => {
        
        if(this.state.number == 1){

            return "I"
        }else if(this.state.number == 2){

            return "N"
        }else if (this.state.number == 3){

            return "F"
        }else if(this.state.number == 4){

            return "P"
        }

    }


    clicked1 = () => {
        if(this.state.number == 1){
            this.setState({ mbti : this.state.mbti + "E" })

        }else if(this.state.number == 2){
            this.setState({ mbti : this.state.mbti + "S" })

        }else if (this.state.number == 3){
            this.setState({ mbti : this.state.mbti + "T" })

        }else if(this.state.number == 4){
            this.setState({ mbti : this.state.mbti + "J" })
        }

        this.setState({ number : this.state.number + 1 })
    }

    clicked2 = () => {
        if(this.state.number == 1){
            this.setState({ mbti : this.state.mbti + "I" })

        }else if(this.state.number == 2){
            this.setState({ mbti : this.state.mbti + "N" })

        }else if (this.state.number == 3){
            this.setState({ mbti : this.state.mbti + "F" })

        }else if(this.state.number == 4){
            this.setState({ mbti : this.state.mbti + "P" })
        }

        this.setState({ number : this.state.number + 1 })
    }

    render(){
        return <div>
            {(this.state.number < 5) ? <H2>{this.asking()}</H2> : <></>}
            {(this.state.number < 5) ? <SelectBtn1 onClick={this.clicked1}>{this.answerBtn1()}</SelectBtn1> : <></>}
            {(this.state.number < 5) ? <SelectBtn2 onClick={this.clicked2}>{this.answerBtn2()}</SelectBtn2> : <></>}

            {(this.state.number == 5) ? <Result mbti={this.state.mbti} who={this.props.who}/>:<></>}

        </div>
    }
}

export default Question