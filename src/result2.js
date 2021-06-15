import React from 'react'
import {H2} from "./styles"

class Result2 extends React.Component{

    constructor(props){
        super(props)
    }

    render(){
        return <div>
            <H2>당신의 성향은 {this.props.mbti} 입니다.</H2>
            <H2>{this.props.mbti} 성향을 갖고 있는 사람 : {this.props.who}</H2>
        </div>
    }
}

export default Result2