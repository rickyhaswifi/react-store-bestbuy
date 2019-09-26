import React, { Component } from 'react';
import ItemForm from './components/store/ItemForm';
import List from './components/store/List';
import Footer from './components/store/Footer'
import './App.css';
import {Container} from 'semantic-ui-react';

class App extends Component {

  state = {
    items: [
      { id:1, name: 'Drone', price: 9.99, completed: true, image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
      { id:2, name: 'Mac', price: 10.99, completed: false, image: 'https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80'},
      { id:3, name: 'Tacos', price: 599.99, completed: true, image: 'https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60'},
    ],
    filter: 'All'
  }

// priceTotal = (price) => price.reduce(function(prev, cur) {
//     return prev + cur.price;
//   }, 0);

  setFilter = (filter) => { this.setState({ filter })}

  removeItem = (id) => {
    const items = this.state.items.filter( item => {
      if ( item.id !== id )
        return item 
    })
    this.setState({ items: [ ...items ] })
  }

  getUniqId = () => {
    //NOTE We are just using this as a helper function for id's since we aren't using a db yet
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
   }
 

  addItem = (item) => {
    const { name, price } = item
    const { items } = this.state
    const newItem = { name, price, complete: false, id: this.getUniqId() }
    this.setState({ items: [newItem, ...items] })
  }

updateItem = (id, item) => {
  const items = this.state.items.map (
    i => {
      if (i.id === id)
      return i
    })
    this.setState({items})
}

  // componentWillUpdate() {
  //   localStorage.setItem('items', 'name')
  // }

  handleClick = (id) => {
    const { items } = this.state
    this.setState({
      items: items.map( item => {
        if (item.id === id) {
          return {
            ...item,
            complete: !item.complete
          }
        }
        return item
      })
    })
  }

 visibleItems = () => {
   const { items, filter } = this.state
   switch(filter) {
     case 'Need To Buy':
       return items.filter( i => !i.complete )
       return items.price.reduce()
     case 'In Cart':
       return items.filter( i => i.complete )
    default:
      return items
   }
 } 


  render() {
    const { filter } = this.state
    return(
      <Container>
        <List 
        name={"Best Buy"}
         items={this.visibleItems()} itemClick={this.handleClick} remove={this.removeItem} update={this.updateItem}/>
        {/* { priceTotal()} */}
        <ItemForm addItem={this.addItem} update={this.updateItem}/>
        <Footer filter={filter} setFilter={this.setFilter} />
      </Container>
    )
  }
}

export default App;
