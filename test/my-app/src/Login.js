import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
           data: 'Initial data...',
           fname:"myname",
           lname:"myname"
        }
        this.updateState = this.updateState.bind(this);
        this.updateStateInput = this.updateStateInput.bind(this);
     };
     updateState() {
        this.setState({data: 'Data updated...'})
     }
     updateStateInput(e) {
         console.log(e)
        this.setState({data: 'Data updated...',fname:e.target.value,lname:e.target.value})
     }
   render() {
      return (
         <div>
            First name: <input type="text" name="fname" value={this.state.fname} onChange={this.updateStateInput}/>
            <br/>
           Last name: <input type="text" name="lname" value={this.state.lname} onChange={this.updateStateInput}/>
           <br/>
           log in : <button  onClick = {this.updateState} className="btn-primary"> log in : </button >
           {this.state.data}
         </div>
      );
   }
}
export default Login;