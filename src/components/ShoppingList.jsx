import { Component } from 'react'
import {
    Container, Button, ListGroup, ListGroupItem
} from 'reactstrap';
import { CSSTransition, TransitionGroup } from "react-transition-group"

import { v4 as uuid } from 'uuid';

class ShoppingList extends Component {

    state = {
        items: [
            { id: uuid(), name: "Eggs" },
            { id: uuid(), name: "Milk" },
            { id: uuid(), name: "Steak" },
            { id: uuid(), name: "Water" }
        ]
    }

    render() {
        return (
            <div>
                <Container>
                    <Button className='mt-4' color='dark' style={{ marginBottom: "2rm" }}
                        onClick={() => {
                            const name = prompt("Enter Item");
                            if (name)
                                this.setState(state => ({
                                    items: [...state.items, { id: uuid(), name }]
                                })
                                )
                        }
                        }
                    >
                        Add Item
                    </Button>

                    <ListGroup className='mt-4'>
                        <ListGroupItem >
                            <TransitionGroup className="shopping-list" >
                                {this.state.items.map(({ id, name }) => (
                                    <CSSTransition key={id} timeout={500} classNames="fade">

                                        <ListGroupItem>
                                            <Button className='remove-btn' color='danger'
                                                onClick={() => this.setState(state => ({
                                                    items: this.state.items.filter(item => item.id !== id)
                                                }))}>&times;</Button>
                                            {name}</ListGroupItem>

                                    </CSSTransition>
                                ))}


                            </TransitionGroup>
                        </ListGroupItem>
                    </ListGroup>
                </Container>
            </div >
        )
    }
}

export default ShoppingList;