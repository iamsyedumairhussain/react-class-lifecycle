import { Component } from "react";

class Child extends Component{
    constructor(){
        super() 
        this.state = {
            num: 0
        }
        console.log('Child[child of Student] constructor called');
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('Child[child of student] getDerivedStateFromProps called ====>')
        console.log('Child[child of student] getDerivedStateFromProps props ====>', props)
        console.log('Child[child of student] getDerivedStateFromProps state ====>', state)
        return null
    }
    


    render(){
        console.log('Child[child of Student] render called')
        return(<div>
            <h1>Child rendered</h1>
        </div>)
    }

    
  componentDidMount(){
    console.log('Child[child of student] componentDidMount called')
  }

  

shouldComponentUpdate(nextProps, nextState){
    console.log('Child[child of student] shouldComponentUpdate called ====>')
    console.log('Child[child of student] shouldComponentUpdate nextProps ====>', nextProps)
    console.log('Child[child of student] shouldComponentUpdate nextState ====>', nextState)
    return true
  }
  
  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Child[child of student] getSnapshotBeforeUpdate called ====>')
    console.log('Child[child of student] getSnapshotBeforeUpdate prevProps ====>', prevProps)
    console.log('Child[child of student] getSnapshotBeforeUpdate prevState ====>', prevState)
    return 21
  }
  
  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('Child[child of student] componentDidUpdate called ====>')
    console.log('Child[child of student] componentDidUpdate prevProps ====>', prevProps)
    console.log('Child[child of student] componentDidUpdate prevState ====>', prevState)
    console.log('Child[child of student] componentDidUpdate snapshot ====>', snapshot)
  }

}

export default Child
