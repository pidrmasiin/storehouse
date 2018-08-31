import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';

import shoppingCartService from '../services/shoppingCartService'
import FormInput from './FormInput';


class ShopCart extends React.Component {
    state = {
      items: [],
      item: '',
      // search: '',
    }

    componentDidMount = async () => {
      const items = await shoppingCartService.getAll();
      this.setState({
        items,
      });
    }

    forceUpdate = async () => {
      const items = await shoppingCartService.getAll();
      this.setState({
        items,
      });
    }

    deleteItem = item => () => {
      const ok = window.confirm(`Poistetaanko ${item.name} listalta`);
      if (!ok) {
        return;
      }
      try {
        shoppingCartService.remove(item.id);
        this.forceUpdate();
      } catch (error) {
        console.log('jotain meni vikaan');
      }
    }

    saveItem = () => async () => {
      try {
        const upperName = this.state.item.charAt(0).toUpperCase()
        + this.state.item.slice(1);
        await shoppingCartService.add({ item: upperName });
        this.forceUpdate();
      } catch (error) {
        console.log('jotain meni vikaan');
      }
    }

  handleChange = prop => (event) => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    return (
      <List style={{ background: 'white' }}>
        <ListSubheader disableSticky style={{ color: '#1a001a' }}>Kauppalista</ListSubheader>
        <ListItem style={{ padding: '1em' }}>
          <FormInput
            label="Lisää tuote kauppalistaan"
            save={this.saveItem()}
            value={this.state.item}
            handle={this.handleChange('item')}
          />
        </ListItem>
        {this.state.items.map(x => (
          <ListItem key={x.id} style={{ paddingBottom: '0em', paddingTop: '0em' }}>
            <ListItemText>
              {x.item}
            </ListItemText>
            <ListItemIcon>
              <IconButton color="secondary" onClick={this.deleteItem(x)}>
                <DeleteIcon style={{ color: '#660000' }} />
              </IconButton>
            </ListItemIcon>
          </ListItem>
        ))}
      </List>
    );
  }
}


export default ShopCart;
