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
    

    render(){
        return (
            <div>
                <h1>Quais são os seu planos para hoje?</h1>
                <Todoform onSubmit={this.addTodo.bind(this)}/>
                <TodoList  todos={this.state.todos}  handleClikRemoveIcon={this.removeTodo.bind(this)}/>
            </div>
        )
        
    }

}

export default Todo;