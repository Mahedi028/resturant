import React, { Component } from "react";
import DISHES from '../../data/Dishes';
import MenuItem from './MenuItem';
import COMMENTS from "../../data/Comments";
import DishDetail from "./DishDetail";
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from 'reactstrap';
import * as actions from '../../redux/actions';
import { connect} from 'react-redux';


const mapStateToProps=state=>{
    return{
        dishes:state.dishes,
        comments:state.comments
    }
}

const mapDispatchToProps=dispatch=>{
    return{
        addComment:(dishId, rating, author, comment)=>dispatch({
            type:actions.ADD_COMMENT,
            payload:{
                dishId:dishId,
                author:author,
                rating:rating,
                comment:comment
            }
        })
    }
}
class Menu extends Component{
    constructor(props){
        super(props);
        console.log(props);
    }

    state={
        dishes:DISHES,
        comments:COMMENTS,
        selectedDish:null,
        modalOpen:false
    }

    onDishSelect=dish=>{
        // console.log(dish);
        this.setState({
            selectedDish:dish,
            modalOpen:!this.state.modalOpen

        });
    }

    toggleModal=()=>{
        this.setState({
            modalOpen:!this.state.modalOpen
        })
    }

    render()
    {
        document.title="Menu";
        const menu=this.state.dishes.map(item=>{
            return (
                <MenuItem
                 dish={item} 
                 key={item.id}
                 DishSelect={()=>this.onDishSelect(item)}
                 />

            );
        })
        let dishDetail=null;
        if(this.state.selectedDish != null){
            const comments=this.state.comments.filter(comment=>{
                return comment.dishId===this.state.selectedDish.id;
            })
            dishDetail=<DishDetail 
            dish={this.state.selectedDish}
            comments={comments}
            />
        }
        return(
            <div className="container">
                <div className="row">
                    <CardColumns>
                        {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.modalOpen} >
                        <ModalBody>
                            {dishDetail}
                        </ModalBody>
                        <ModalFooter>
                            <Button color="secondary"onClick={this.toggleModal}>
                                close
                            </Button>
                        </ModalFooter>
                    </Modal>
                </div>

            </div>
        );
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);

