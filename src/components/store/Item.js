import React, { Component } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';
import ItemForm from './ItemForm';

const styles = {
    item: {
        cursor: 'pointer'     
    },
    complete: {
        color: 'grey',
        textDecoration: 'line-through',
    },

}
// 

class Item extends Component {
    state = {editing: false }
    toggleEdit = () => this.setState({ editing: !this.state.editing })
    render () {
    const { id, name, price, image, complete, itemClick, remove, update} = this.props
    const {editing} = this.state
    return (
        <>
        {
            editing ? 
            <ItemForm 
            { ...this.props }
            update={update}
            toggleEdit={this.toggleEdit}
            />
            :
        <li style={ complete ? {...styles.item, ...styles.complete } : styles.item } >
        <Card raised link>
         <div>
            <Image src={image} size='medium' fluid rounded/>
         </div>

        <div>
      <h1>{name}</h1>
      <h2>${price}</h2>
        </div>

      <div>
      <Button color="green" onClick={ () => itemClick(id) }>
        Purchase
      </Button>
      <Button color="yellow" onClick={this.toggleEdit}>
        Edit
      </Button>
      <Button color="red" onClick={() => remove(id)}>
        Delete
      </Button>
      </div>

        </Card>
    </li>
        }
    </>

  )
 }
}

export default Item;

// 


// const Item = ({ id, name, price, image, complete, itemClick, remove, edit}) => (


// )

// export default Item;
