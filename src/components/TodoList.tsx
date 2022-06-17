import React from "react";
import { RiCloseCircleFill } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

interface todo{
    id:number,
    text:string
}

interface Props { 
   todos : Array<todo>
    removeTodo : Function
    updateTodo : Function
}

interface Stage {
    showInputUpdade : boolean
    editTodo : todo

}

class TodoList extends React.Component<Props,Stage> {
    constructor(props:any){
        super(props)

        this.state = { 
            showInputUpdade : false,
            editTodo : {id:0, text:""}
        }
    }

    handleSubmitUpdate(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        this.setState({showInputUpdade:false});

        this.props.updateTodo(this.state.editTodo)

        var e:todo = {id : 0, text: "" }

        this.setState({editTodo: e});
    }


    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        var e:todo = {id : this.state.editTodo.id, text: event.target.value }

        this.setState({editTodo: e});
    }

    render(){
        if (this.state.showInputUpdade)
            return (
                <form onSubmit={this.handleSubmitUpdate.bind(this)}>
                    <input type="text" placeholder="Digite a nova tarefa" value={this.state.editTodo.text} onChange={this.handleChange.bind(this)} /> 
                    <button>Ok</button>
                </form>
            )


        return (
            <>
                {this.props.todos.map(
                        (todo : todo) => (
                            <div key={todo.id.toString()}>
                                <div > 
                                    {todo.text}
                                </div>

                                <div>
                                    <RiCloseCircleFill  onClick={ () => this.props.removeTodo(todo.id)}/>
                                    <TiEdit onClick={ () => { 
                                        this.setState({showInputUpdade : true, editTodo:todo})
                                        }
                                    }/>
                                </div>
                            </div>
                        )
                    )
                }
            </>
        )
    }

}

export default TodoList