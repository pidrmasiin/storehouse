import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import DeleteIcon from '@material-ui/icons/Delete';
import CloseIcon from '@material-ui/icons/Close';

import categoryService from '../services/categoryService'
import itemService from '../services/itemService'
import FormInput from './FormInput';


function getModalStyle() {
  const top = 50
  const left = 48

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 30,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
});

class SimpleModal extends React.Component {
    state= {
      open: false,
      category: {},
      item: '',
      items: [],
    }

      componentDidMount = async () => {
        const items = await itemService.getAll();
        if (this.props.open) {
          this.setState({
            open: this.props.open,
            category: this.props.category,
            items,
          })
        }
        console.log('år', this.props)
      }

      forceUpdate = async (upperName) => {
        const items = await itemService.getAll();
        const item = items.find(x => x.name === upperName)
        console.log('item', item)
        const updateCategory = this.state.category
        if (!updateCategory.items) {
          updateCategory.items = []
        }

        updateCategory.items.push(item.id)
        console.log('item', updateCategory)
        this.setState({
          category: updateCategory,
          items,
        })
      }

      deleteCategory = category => () => {
        const ok = window.confirm(`Poistetaanko ${category.name} listalta`);
        if (!ok) {
          return;
        }
        try {
          categoryService.remove(category.id);
          window.location.assign('/varastosi')
        } catch (error) {
          console.log('jotain meni vikaan');
        }
      }

    saveItem = () => async () => {
      try {
        const upperName = this.state.item.charAt(0).toUpperCase()
    + this.state.item.slice(1);
        await itemService.add({ name: upperName, categories: [this.state.category.id] });
        this.forceUpdate(upperName)
      } catch (error) {
        console.log('jotain meni vikaan');
      }
    }

      handleChange = prop => (event) => {
        this.setState({ [prop]: event.target.value });
      };

      render() {
        const { classes } = this.props;
        return (
          <div>
            <Typography gutterBottom>Click to get the full Modal experience!</Typography>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.props.handleClose}
            >
              <div style={getModalStyle()} className={classes.paper}>
                <Grid container>
                  <Grid item xs={10}>
                    <ListItemIcon>
                      <IconButton color="secondary" onClick={this.deleteCategory(this.state.category)}>
                        <DeleteIcon style={{ color: '#660000' }} />
                      </IconButton>
                    </ListItemIcon>
                  </Grid>
                  <Grid item xs={2}>
                    <IconButton onClick={this.props.handleClose}>
                      <CloseIcon />
                    </IconButton>
                  </Grid>
                </Grid>
                <List style={{ background: 'white' }}>
                  <ListSubheader disableSticky style={{ color: '#1a001a', fontSize: '1.5em' }}>{this.state.category.name}</ListSubheader>
                  <ListItem style={{ padding: '1em' }}>
                    <FormInput
                      label="Lisää uusi tuote"
                      save={this.saveItem()}
                      value={this.state.item}
                      handle={this.handleChange('item')}
                    />
                  </ListItem>
                  {this.state.category.items && this.state.category.items.map(c => (
                    <ListItem key={c}>
                      {this.state.items.find(x => x.id === c).name}
                    </ListItem>
                  ))}

                </List>
              </div>
            </Modal>
          </div>
        );
      }
}

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
