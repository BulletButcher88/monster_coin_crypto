import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Block from './Block';

class Blocks extends Component {
  state = { blocks: [], paginatedId: 1, blocksLength: 0 };

  componentDidMount() {
    fetch(`${document.location.origin}/api/blocks/length`)
      .then(response => response.json())
      .then(json => this.setState({ blocksLength: json }));

    this.fetchPaginatedBlocks(this.state.paginatedId)();
  }

  fetchPaginatedBlocks = paginatedId => () => {
    fetch(`${document.location.origin}/api/blocks/${paginatedId}`)
      .then(response => response.json())
      .then(json => this.setState({ blocks: json }));
  }

  render() {

    return (
      <div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div style={styles.button}>
              <Link to='/' style={styles.btn_text}>Home</Link>
            </div>
            <div style={styles.button}>
              <Link to='/transaction-pool' style={styles.btn_text}>Transaction Pool</Link>
            </div>
          </div>
        </div>
        <h3>Blocks</h3>
        <div>
          {
            [...Array(Math.ceil(this.state.blocksLength / 5)).keys()].map(key => {
              const paginatedId = key + 1;

              return (
                <span key={key} onClick={this.fetchPaginatedBlocks(paginatedId)}>
                  <Button bsSize="small" bsStyle="warning">
                    {paginatedId}
                  </Button>{' '}
                </span>
              )
            })
          }
        </div>
        {
          this.state.blocks.map(block => {
            return (
              <Block key={block.hash} block={block} />
            );
          })
        }
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

export default Blocks;