import React from "react";
import TodoForm from "../TodoForm";
import { RiCloseCircleFill } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'
import { TodoRow, DivIcons } from './styled'

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


    handleSubmit(newstring:string) {
        var e:todo = {id : this.state.editTodo.id, text: newstring }

        this.props.updateTodo(e)

        var e:todo = {id : 0, text: "" }

        this.setState({editTodo: e, showInputUpdade:false});
    }

    render(){
        if (this.state.showInputUpdade)
            return <TodoForm  type={"e"} submit={this.handleSubmit.bind(this)} value={this.state.editTodo.text}/>

        return (
            <>
                {this.props.todos.map(
                        (todo : todo) => (
                            <TodoRow  typeColor={todo.id} key={todo.id.toString()} >
                                <div > 
                                    {todo.text}
                                </div>

                                <DivIcons>
                                    <RiCloseCircleFill  onClick={ () => this.props.removeTodo(todo.id)}/>
                                    <TiEdit onClick={ () => { 
                                        this.setState({showInputUpdade : true, editTodo:todo})
                                        }
                                    }/>
                                </DivIcons>
                            </TodoRow>
                        )
                    )
                }
            </>
        )
    }

}

export default TodoList