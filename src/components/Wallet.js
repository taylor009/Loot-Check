import React from 'react';
import {connect} from 'react-redux';


export class Wallet extends React.Component{
  constructor(){
    super();

    this.state = {balance: undefined};
  }

  updateBalance = event => this.setState({balance: parseInt(event.target.value, 10)})

  render(){
    return(
      <div>
        <h3 className='balance'>Wallet balance: {this.props.balance}</h3>
        <br/>
        <input onChange={this.updateBalance} className='input-wallet'/>
      </div>
    )
  }
}

export default connect(state => {return{balance: state}}, null)(Wallet);