import React from 'react';

import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';

import AddIcon from '@material-ui/icons/Add';

import LogoLottie from '../lotties/LogoLottie';

import categoryService from '../services/categoryService'
import itemService from '../services/itemService'
import Category from './Category';
import FormInput from './FormInput';

class Storage extends React.Component {
    state = {
      categories: [],
      categoryName: '',
      category: {},
      showModal: false,
      items: [],
      search: '',
      showItemList: false,
    }

      componentDidMount = async () => {
        const categories = await categoryService.getAll();
        const items = await itemService.getAll();
        console.log('categories', categories)
        this.setState({
          categories,
          items,
        });
      }

      forceUpdate = async (id) => {
        const categories = await categoryService.getAll();
        this.setState({
          categories,
          showModal: true,
          category: categories.find(x => x.id === id),
        });
      }

      saveItem = () => async () => {
        try {
          const upperName = this.state.categoryName.charAt(0).toUpperCase()
          + this.state.categoryName.slice(1);
          const category = await categoryService.add({ name: upperName });
          this.forceUpdate(category.id);
        } catch (error) {
          console.log('jotain meni vikaan');
        }
      }

    handleChange = prop => (event) => {
      this.setState({ [prop]: event.target.value });
    };

    showCategory = id => () => {
      this.setState(prevState => ({
        showModal: true,
        category: [...prevState.categories].find(x => x.id === id),
      }))
    }

    closeCategory = () => () => {
      this.setState({
        showModal: false,
      })
    }

    handleItem = prop => (event) => {
      this.setState({
        [prop]: event.target.value,
        showItemList: true,
      });
      if (event.target.value.length === 0) {
        this.setState({
          showItemList: false,
        })
      }
    };

    render() {
      const bySearchTerm = (item) => {
        if (this.state.search.length === 0) {
          return true
        }
        return item.name.toLowerCase().includes(this.state.search.toLowerCase())
      }
      const itemsToShow = this.state.items.filter(bySearchTerm)

      return (
        <Grid container item xs={12} spacing={16}>
          <Grid item xs={12} sm={2} />
          <Grid item xs={12} sm={5}>
            <h1 style={{ color: 'white', textAlign: 'center' }}>Varastosi</h1>
            <LogoLottie size={{ height: '5em', width: '5em' }} />
            <List style={{ background: 'white', textAlign: 'center' }}>
              <ListItem>
                <FormInput
                  label="Etsi varastostasi"
                  value={this.state.search}
                  handle={this.handleItem('search')}
                />
              </ListItem>
              {this.state.showItemList && itemsToShow.map(x => (
                <ListItem key={x.id}>
                  {x.name}
                </ListItem>
              ))}
            </List>
            <br/>
            <LogoLottie size={{ height: '5em', width: '5em' }} />
            <br/>
            <List style={{ background: 'white', textAlign: 'center' }}>
              <ListSubheader style={{ color: '#1a001a' }}>Kategoriat</ListSubheader>
              <ListItem style={{ padding: '1em', paddingLeft: '10%' }}>
                <FormInput
                  label="Lisää kategoria"
                  save={this.saveItem()}
                  value={this.state.categoryName}
                  handle={this.handleChange('categoryName')}
                />

              </ListItem>
              <p>Valitse kategoria</p>
              {this.state.categories.map(x => (
                <ListItem button onClick={this.showCategory(x.id)} key={x.id} style={{ paddingBottom: '1em' }}>
                  <ListItemText style={{ paddingLeft: '30%' }}>
                    <AddIcon size="small" />
                    <sup>
                      {x.name}
                    </sup>
                  </ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item container sm={4}>
            <Grid item xs={2} />
            <Grid item xs={8} style={{ color: 'white', paddingTop: '15%' }}>
              <h2>Mitä varastostasi löytyy?</h2>
              <p>
              Etsi tavaroita nimellä. Voi myös lisätä uuden tuotteen johonkin
              kategoriaan tai luoda kokonaan uuden kategorian ja lisätä tuotteen siihen.
              </p>
            </Grid>
          </Grid>
          <Grid item xs={12} />
          {this.state.showModal
          && (
          <Category
            open={this.state.showModal}
            category={this.state.category}
            handleClose={this.closeCategory()}
          />
          )}
        </Grid>
      )
    }
}


export default Storage;
