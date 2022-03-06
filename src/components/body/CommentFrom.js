import React, { Component } from 'react';
import { Form, Button, Input} from 'reactstrap';
import { connect} from 'react-redux';
import * as actions from '../../redux/actions';

const mapDispatchToProps=dispatch=>{
    return{
        addComment:(dishId, rating, author, comment)=>dispatch({
            // type:"ADD_COMMENT",
            type:actions.ADD_COMMENT,
            payload:{
                dishId:dishId,
                author:author,
                rating:rating,
                comment:comment

            }
        }),
        // deleteComment:
    }
}

class CommentFrom extends Component{
    constructor(props){
        super(props);
        this.state={
            author:'',
            rating:'',
            comment:''
        }
        this.handleInputChange=this.handleInputChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleInputChange=event=>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    handleSubmit=event=>{
        // console.log(this.state);

        // this.props.dispatch({
        //     type:'ADD_COMMENT',
        //     payload:{
               
        //     }

        // });

        this.props.addComment(
            this.props.dishId,
            this.state.rating,
            this.state.author,
            this.state.comment
            );

        this.setState({
            author:'',
            rating:'',
            comment:''
        });
        event.preventDefault();
    }

    render(){
        console.log(this.props);
        return(
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Input
                        type="text"
                        name="author"
                        value={this.state.author}
                        placeholder="your Name"
                        onChange={this.handleInputChange}
                        required/>
                    <br/>
                    <Input
                    type="select"
                    name="rating"
                    onChange={this.handleInputChange}
                    value={this.state.rating}>
                    
                    <option>1</option>                    
                    <option>2</option>                    
                    <option>3</option>                    
                    <option>4</option>                    
                    <option>5</option>     
                    </Input>       
                    <br/>
                    <Input
                    type="textarea"
                    name="comment"
                    onChange={this.handleInputChange}
                    value={this.state.comment}
                    placeholder="your comment"
                    required>
                    </Input>      
                    <br/>
                    <Button type="submit">Submit comment</Button>  
                    


                </Form>
            </div>

        );
    }
}

export default connect(null, mapDispatchToProps)(CommentFrom);