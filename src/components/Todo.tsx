import { allowedNodeEnvironmentFlags } from "process";
import React from "react";
import Todoform from "./Todoform";
import TodoList from "./TodoList"

  interface todos{
      id:number,
      text:string
  }

  interface Props { 

  }
  interface Stage {
      todos : Array<todos>;
  }


class Todo extends React.Component<Props, Stage> {
    constructor(props: any){
        super(props)

        this.state = {todos : []}
    }

    addTodo(todo : todos){
        if ( !todo.text || /^\s*$/.test(todo.text) )
            return;

        this.setState ({todos:[todo, ...this.state.todos]})
        console.log(this.state.todos)
       
  }

    removeTodo(id : number){
        this.setState((state, props) => ({
            todos : this.state.todos.filter( (e) => e.id !== id)
          }));
    }

    updateTodo(newTodo : todos){
        if ( !newTodo.text || /^\s*$/.test(newTodo.text) )
            return;

        this.setState((state, props) => ({ 
            todos : this.state.todos.map( (e) => (e.id === newTodo.id  ?  newTodo : e)) 
        }));


    }
    

    render(){
        return (
            <div>
                <h1>Quais são os seu planos para hoje?</h1>
                <Todoform onSubmit={this.addTodo.bind(this)}/>
                <TodoList  todos={this.state.todos}  removeTodo={this.removeTodo.bind(this)}  updateTodo={this.updateTodo.bind(this) }/>
            </div>
        )
        
    }

}

export default Todo;