import React from "react";

  interface States{
      value : string;
  }

  interface Props{
      onSubmit : Function;
  }

class Todoform extends React.Component<Props, States> {
  constructor(props : Props){
      super(props)
      this.state = {value : ""}
  }

    handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()

        this.props.onSubmit({
            id : Math.floor(Math.random() * 10000), 
            text : this.state.value
        });

        this.setState({value: ""})

    }

    handleChange(event:any) {
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