import react from 'react';


class NewComponent extends react.Component {
    constructor(props) {
        super(props);
        this.state = {
            name:""
        };
        this.handleChange  = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState(state=> ({
            name: event.target.value
        }))

    }
    render(){
        return(
            <div>
                <input value={this.state.name} onChange={this.handleChange} />
                <h2>{this.state.name}</h2>
                <form>
                    <input value = "nombre"/>
                    <button>enviar</button>

                </form>
            </div>
        )
    }
}
export default NewComponent;