import React from "react";
import { Div } from "../globalStyle";
import { RiCloseCircleFill } from 'react-icons/ri'
import { TiEdit } from 'react-icons/ti'

interface todos{
    id:number,
    text:string
}

interface Props { 
   todos : Array<todos>;
    handleClikRemoveIcon : any;
}

interface Stage {

}

class TodoList extends React.Component<Props,{}> {
    constructor(props:any){
        super(props)
    }

    render(){
        return (
            <>
                {this.props.todos.map(
                        (todo : todos) => (
                            <div key={todo.id.toString()}>
                                <div > 
                                    {todo.text}
                                </div>

                                <div>
                                    <RiCloseCircleFill  onClick={ () => this.props.handleClikRemoveIcon(todo.id)}/>
                                    <TiEdit />
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