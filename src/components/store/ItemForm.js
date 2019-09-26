import React, { Component } from 'react';
import {Container, Form, Button} from 'semantic-ui-react';

class ItemForm extends Component {
    state = { name: '', price: '', image: '' }

    componentDidMount() {
        if (this.props.id) {
            this.setState({ name: this.props.name, price: this.props.price, image: this.props.image,})
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target
        this.setState({ [name]: value })
      }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.props.id) {
            this.props.update(this.props.id, this.state)
            this.props.toggleEdit()
        } else {
            this.props.add(this.state)
        }
        // this.props.addItem(this.state)
        this.setState( {name: '', price:'', image: ''})
    }

    render() {
        const { name, price, image } = this.state
        return (
            <Container>

            <Form onSubmit={this.handleSubmit}>
                <Form.Input
                onChange={this.handleChange}
                required
                placeholder='Add Item'
                name='name'
                value={name}
                />

               <Form.Input onChange={this.handleChange} name='price' placeholder='9.99' value={price} required/>

               <Form.Input onChange={this.handleChange} name='image' placeholder='image link' value={image} required/>

               <Form.Button type="submit">Submit</Form.Button>
            </Form>
            </Container>
        )
    }
}

export default ItemForm;
