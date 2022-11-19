import React from "react"
import "../styles/ContactPages.css"


class ContactPages extends React.Component {
   state={
    value: ""
   }

   handleClick = () => {
    this.setState({
        value: ""
    })
   }

   handleSubmit = (e) => {
    e.prevenDefault();
    this.setState({
        value: ""
    })
   }

   handleChange = (e) =>{
    this.setState({
        value: e.target.value
    })
   }

    render(){
    return(
        <div className="contact">
            <from onSubmit={this.handleSubmit}>
                <h3>Napisz do nas</h3>
                <textarea value={this.state.value} onChange={this.handleChange} placeholder="wpisz wiadomość..."></textarea>
                <button onClick={this.handleClick}>Wyślij</button>
            </from>
           
        </div>
    );
    }
}


export default ContactPages