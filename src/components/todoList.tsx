import { allowedNodeEnvironmentFlags } from "process";
import React from "react";
import Todoform from "./todoform";

  interface todos{
      id:number,
      text:string
  }

  interface Props { 

  }
  interface Stage {
      todos : Array<todos>;
  }


class TodoList extends React.Component<Props, Stage> {
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
    

    render(){
        return (
            <div>
                <h1>Quais são os seu planos para hoje?</h1>
                <Todoform onSubmit={this.addTodo.bind(this)}/>
            </div>
        )
        
    }

}

export default TodoList;