import React, { Component } from 'react'
import TimeFormat from './TimeFormat'


export class Time extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time: this.props.milliseconds,
            pause: false
        }

    }

    componentDidMount() {
        setInterval(() => {
            this.state.pause ? 
            (this.setState({time: this.state.time + 1000}) && this.conversion()) : clearInterval(this.state.time)
        }, 1000);
    }
    
    
    change = () => {
        this.setState({pause: !this.state.pause})
    }
    restart = () =>{
        return (
            this.setState({time: this.props.milliseconds})
        )
    }
    conversion = () => {
    
            let Hour = Math.floor((this.state.time / 3600000) % 24);
            let Minutes = Math.floor((this.state.time / 60000) % 60);
            let Seconds = Math.floor((this.state.time / 1000) % 60);
      return (
        <TimeFormat hours={Hour} minutes={Minutes} seconds={Seconds}/>

      )
        
    
    }

    render() {
        return (
            <div>
                <h1>{this.conversion()}</h1>
                <div className="title">
                   <h2>hours</h2>
                   <h2>minutes</h2>
                   <h2>seconds</h2>
                </div>
                <div className="button">
                    <button onClick={this.change}className="btn">{this.state.pause ? 'Pause' : 'Start'}</button>
                    <button onClick={this.restart} className="btn">Restart</button>
                </div>
            </div>
        );
    }
}

export default Time;
