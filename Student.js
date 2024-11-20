import { Component } from "react";
import Child from "./Child";


class Student extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: this.props.count
        }
        console.log('student[child of App] constructor called');
    }
    static getDerivedStateFromProps(props, state) {
        console.log('student[child of App] getDerivedStateFromProps called ====>')
        console.log('student[child of App] getDerivedStateFromProps props ====>', props)
        console.log('student[child of App] getDerivedStateFromProps state ====>', state)
        if (state.num != props.count) {
            return { num: props.count }
        }
        return null
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('student[child of App] shouldComponentUpdate called ====>')
        console.log('student[child of App] shouldComponentUpdate nextProps ====>', nextProps)
        console.log('student[child of App] shouldComponentUpdate nextState ====>', nextState)
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('student[child of App] getSnapshotBeforeUpdate called ====>')
        console.log('student[child of App] getSnapshotBeforeUpdate prevProps ====>', prevProps)
        console.log('student[child of App] getSnapshotBeforeUpdate prevState ====>', prevState)
        return 14
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('student[child of App] componentDidUpdate called ====>')
        console.log('student[child of App] componentDidUpdate prevProps ====>', prevProps)
        console.log('student[child of App] componentDidUpdate prevState ====>', prevState)
        console.log('student[child of App] componentDidUpdate snapshot ====>', snapshot)
    }
    render() {
        console.log('student[child of App] render called')
        return (
            <>
                <h1>Student : {this.state.num}</h1>
                <Child />
            </>
        )
    }



    componentDidMount() {
        console.log('student[child of App] componentDidMount called')
    }
}
export default Student
