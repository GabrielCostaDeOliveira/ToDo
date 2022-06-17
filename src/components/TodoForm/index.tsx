import React from "react";
import {Form} from "./styled"

  interface States{
      value : string
  }

  interface Props{
      submit : Function
      type : string
      value : string
  }

class TodoForm extends React.Component<Props, States> {

    id: number;

  constructor(props : Props){
      super(props)
      this.state = {value : this.props.value}
      this.id = 0
  }

    handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        if (this.props.type == 'i')
            this.props.submit({
                id : Math.floor(this.id++), 
                text : this.state.value
            });
        else 
            this.props.submit( 
                this.state.value
            );

        this.setState({value: ""})

    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.target.value});
    }

    render(){
        return (
        <Form onSubmit={this.handleSubmit.bind(this)}>
            <input 
                type="text" 
                name="text"
                placeholder="digite uma tarefa"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}

            />
            <button>ok</button>
        </Form>
        )
    }

}

export default TodoForm;