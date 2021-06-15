import React from 'react'
import Result2 from "./result2"
import {H2} from "./styles"





class Result extends React.Component{

    constructor(props){
        super(props)
    }



    state = {
        dot : "..",
        showresult : false
    }

    componentDidMount(){
        setTimeout(()=>{
            this.setState({showresult : true})
        }, 8000)

        setTimeout(()=>{
            this.setState({dot:this.state.dot + "."})
        },2000)
        setTimeout(()=>{
            this.setState({dot:this.state.dot + "."})
        },3000)
        setTimeout(()=>{
            this.setState({dot:this.state.dot + "."})
        },4000)
        setTimeout(()=>{
            this.setState({dot:this.state.dot + "."})
        },5000)
        setTimeout(()=>{
            this.setState({dot:this.state.dot + "."})
        },6000)
    }

    render(){
        return <div>

            {(this.state.showresult == false) ? <H2>로딩중{this.state.dot}</H2> : <></>}
            {(this.state.showresult == true) ? <Result2 mbti={this.props.mbti} who={this.props.who} /> : <></>}
            

        </div>
    }
}

export default Result