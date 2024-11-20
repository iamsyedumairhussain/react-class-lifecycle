import { Component } from 'react';
import './App.css';
import Student from './Student';

class  App extends Component {
  constructor(){
    super()
    this.state = {
      count: 0
  }
    console.log('App constructor called ====>')
  }

  
  handleCounter = () => {
    console.log('App handleCounter called ======')
    this.setState({count: this.state.count + 1})
}
  
  static getDerivedStateFromProps(props,state){
    console.log('App parent getDerivedStateFromProps called ====>')
    console.log('App getDerivedStateFromProps props ====>',props)
    console.log('App getDerivedStateFromProps state ====>',state)
    return null
}
  render(){
    console.log('App parent render called')

    return (
      <><h1>App called</h1>
      
      <h1>App Counter : {this.state.count}</h1>
            <button onClick={this.handleCounter}>Add</button>
      <Student count = {this.state.count} />
      </>
    );
  }

  componentDidMount(){
    console.log('App parent componentDidMount called')
  }
  

shouldComponentUpdate(nextProps, nextState){
  console.log('App parent shouldComponentUpdate called ====>')
  console.log('App shouldComponentUpdate nextProps ====>',nextProps)
  console.log('App shouldComponentUpdate nextState ====>',nextState)
  return true
}

getSnapshotBeforeUpdate(prevProps, prevState){
  console.log('App parent getSnapshotBeforeUpdate called ====>')
  console.log('App getSnapshotBeforeUpdate prevProps ====>',prevProps)
  console.log('App getSnapshotBeforeUpdate prevState ====>',prevState)
  return 7
}

componentDidUpdate(prevProps, prevState, snapshot){
  console.log('App parent componentDidUpdate called ====>')
  console.log('App componentDidUpdate prevProps ====>',prevProps)
  console.log('App componentDidUpdate prevState ====>',prevState)
  console.log('App componentDidUpdate snapshot ====>',snapshot)
}
}



export default App;
