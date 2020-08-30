import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Square from './Square'
import { WIDTH, HEIGHT } from './Game'
import './Board.css'

class Board extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  }

  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
        key={i}
      />
    );
  }
  
  // create a range of numbers from _start to _end
  range(_start, _end) {
    var result = []
    for (let i=_start; i<=_end; i++){
      result.push(i)
    }
    return result
  }

  render() {
    const widthTable = this.range(1, WIDTH)
    const heightTable = this.range(1, HEIGHT)

    return (
      <div>
        {
          heightTable.map( i => (
            <div className="board-row" key={i}>
              {
                widthTable.map( j => this.renderSquare((i-1)*WIDTH + j-1) )
              }
            </div>
          ))
        }
      </div>
    );
  }
}

export default Board