import React from 'react';
import itemService from '../services/itemService'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';

import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';



class Items extends React.Component {
    state = {
        items: [],
        item: '',
    }

    componentWillMount = async () => {
      const items = await itemService.getAll()
      this.setState({
          items
      })
    }

    deleteItem = (item) => () => {
        const ok = window.confirm(`Poistetaanko ${item.name} listalta`);
            if (!ok) {
                return;
            }
            try {
                itemService.remove(item.id);
                this.componentWillMount();
            } catch (error) {
                console.log('jotain meni vikaan');
            }
        }

    saveItem = () => () => {
            try {
                itemService.add({name: this.state.item});
                this.componentWillMount();
            } catch (error) {
                console.log('jotain meni vikaan');
            }
        }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    return (
        <List>
        <ListSubheader style={{color:'#1a001a'}}>Kauppalista</ListSubheader>
        <ListItem style={{ padding:'1em' }}>
        <FormControl>
          <InputLabel>Lisää</InputLabel>
          <Input 
            value={this.state.item}
            onChange={this.handleChange('item')} 
            endAdornment={
                <InputAdornment position="end">
                    <IconButton color='primary' onClick={this.saveItem()}>
                        <AddIcon style={{color:'#009900'}}/>
                    </IconButton>
                </InputAdornment>
              }/>
        </FormControl>
         </ListItem>
         {this.state.items.map(x =>
        <ListItem key={x.id} style={{ paddingBottom:'0em', paddingTop:'0em' }}>
          <ListItemText  >
           {x.name}
          </ListItemText>
          <ListItemIcon>
            <IconButton color='secondary' onClick={this.deleteItem(x)}>
                <DeleteIcon style={{color:'#660000'}}/>
            </IconButton>
          </ListItemIcon>
         </ListItem>
        )}
        </List>
    )
}

}


export default Items