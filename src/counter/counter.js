
import { Component } from "react";

class User extends Component {
    constructor(props) {
        this.state = { counter: 10, age: '' }
        this.onIncrement = this.onIncrement.bind(this)
    }

    onIncrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter + 1,
        }))
    }

    onDecrement = () => {
        this.setState(prevState => ({
            counter: prevState - 1,
        }))
    }

    onStart = () => {
        this.setState({
            counter: 0,
        })
    }

    changeHandler = (e, name) => {
        this.setState({
            age: e.target.value,
        })
    }

    render() {
        const { firstName, lastName, link } = this.props
        const { age, counter } = this.age

        return (
            <div className="w-50 mx-auto">
                <div className="border p-3 mt-5">
                    <h4>
                        Mening ismim-{firstName}, sharifim-{lastName}, yoshim-{age}
                    </h4>
                    <a href={link}>Youtube kanalim</a>
                    <div className="mt-3">
                        <button onClick={this.onIncrement} className='btn btn-success'>
                            Increment
                        </button>
                        <button onClick={() => this.onDecrement} className='btn btn-danger mx-2'>
                            Decrement
                        </button>
                        <button onClick={this.onStart} className='btn btn-info'>
                            Restart
                        </button>
                        <p>{counter}</p>
                    </div>
                    <form>
                        <span>Yoshingiz</span>
                        <input type="text" className="form-control" onChange={e => this.changeHandler(e, 'sammi')} />
                    </form>
                </div>
            </div>
        )
    }
}
export default User