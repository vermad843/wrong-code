import React,{Component} from 'react';

import {connect} from 'react-redux';



import {actions} from '../src/store';

import NewTodoForm from './component/NewTodoForm';





class App extends Component { 



 formSubmitted = (e) => {

  e.preventDefault();

  this.setState({

   newTodo : '',

   todos : [

    ...this.state.todos, 

    {

     title : this.state.newTodo,

     done : false

    }

   ]

  })

} 







  render() {
    return (

    <div>
       <h1>Hello World </h1>
         <NewTodoForm
            newTodo={this.props.newTodo}
            formSubmitted={this.formSubmitted.bind(this)}
            newTodoChanged={this.props.onNewTodoChanged} />
    </div>

  )

 }

}


function mapStateToProps(state) {
  return {
    newTodo : state.newTodo,
    todos : state.todos,
 }
}

function mapDispatchToProps(dispatch) {
  return {
    onNewTodoChanged(newTodo) {
      dispatch(actions.newTodoChanged(newTodo));
    },
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);