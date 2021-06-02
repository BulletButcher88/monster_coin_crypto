import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.gif';

class App extends Component {
  state = { walletInfo: {} };

  componentDidMount() {
    fetch(`${document.location.origin}/api/wallet-info`)
      .then(response => response.json())
      .then(json => this.setState({ walletInfo: json }));
  }

  render() {
    const { address, balance } = this.state.walletInfo;

    return (
      <div className='App'>
        <img className='logo' src={logo}></img>
        <div style={{ fontSize: 30 }}>
          Monster Meeting Crypto
        </div>
        <br />
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <div style={styles.button}>
            <Link to='/conduct-transaction' style={styles.btn_text}>Conduct a Transaction</Link>
          </div>
          <br />
          <div style={styles.button}>
            <Link to='/blocks' style={styles.btn_text}>Blocks</Link>
          </div>
          <div style={styles.button}>
            <Link to='/transaction-pool' style={styles.btn_text}>Transaction Pool</Link>
          </div>
        </div>
        <br />
        <div className='WalletInfo'>
          <div>Address: {address}</div>
          <div>Balance: {balance}</div>
        </div>
      </div>
    );
  }
}

const styles = {
  button: {
    background: 'grey',
    margin: 8,
    padding: 8,
    borderRadius: 8,
    width: 300
  },
  btn_text: {
    color: 'white',
    textDecoration: 'none'
  }
}

export default App;