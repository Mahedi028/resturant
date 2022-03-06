import React from "react";
import { Card, CardImg,  CardBody, CardTitle, CardText } from 'reactstrap';
import LoadComments from './LoadComments';
import CommentFrom from "./CommentFrom";

const DishDetail=props=>{

    return (
        <div>
            <Card style={{margin:"10px"}}>
                <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody style={{ textAlign:"left"}}>
                    <CardTitle>{props.dish.name}</CardTitle>
                    <CardText>{props.dish.description}</CardText>
                    <CardText>{props.dish.price}</CardText>
                    <hr/>
                    <LoadComments comments={props.comments}/>
                    <hr/>
                    <CommentFrom></CommentFrom>
                </CardBody>
            </Card>
          

        </div>
    );
}


export default DishDetail;