import React from "react";

  interface States{
      value : string;
  }

  interface Props{
      onSubmit : Function;
  }

class Todoform extends React.Component<Props, States> {

    id: number;

  constructor(props : Props){
      super(props)
      this.state = {value : ""}
      this.id = 0
  }

    handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        this.props.onSubmit({
            id : Math.floor(this.id++), 
            text : this.state.value
        });

        this.setState({value: ""})

    }

    handleChange(event: React.ChangeEvent<HTMLInputElement>) {
        this.setState({value: event.target.value});
    }

    render(){
        return (
        <form onSubmit={this.handleSubmit.bind(this)}>
            <input 
                type="text" 
                name="text"
                placeholder="digite uma tarefa"
                value={this.state.value}
                onChange={this.handleChange.bind(this)}

            />
            <button>ok</button>
        </form>
        )
    }

}

export default Todoform;