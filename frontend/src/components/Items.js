import React from 'react';
import itemService from '../services/itemService'


class Item extends React.Component {
    state = {
        items: []
    }

  componentWillMount = async () => {
      const items = await itemService.getAll()
      this.setState({
          items
      })
  }

  render() {
    console.log('items', this.state.items)
    return (
        <div>
            <h1>HAOLOOO</h1>
            <ul>
                {this.state.items.map(x =>
                    <li key={x.id}>{x.name}</li>)}
            </ul>
        </div>
    )
  }
}


export default Item