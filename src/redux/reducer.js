import DISHES from '../data/Dishes';
import COMMENTS from '../data/Comments';
import { combineReducers} from 'redux';
import * as actions from './actions';

// const initialState={
//     dishes:DISHES,
//     comments:COMMENTS
// }

const commentReducer=(commentState=COMMENTS, action)=>{

    switch(action.type){
        case 'ADD_COMMENT':
            let comment=action.payload;
            comment.id=commentState.length;
            comment.date=new Date().toString;
            console.log(comment);
            return commentState.concat(comment);
        default:
            return commentState;

    }
    // if(action.type==='ADD_COMMENT'){
    //     let comment=action.payload;
    //     comment.id=commentState.length;
    //     comment.date=new Date().toString;
    //     console.log(comment);
    //     return commentState.concat(comment);
    // }
}


const dishReducer=(dishState=DISHES, action)=>{
    switch(action.type){
        default:
            return dishState;

    }
    

}

export const Reducer=combineReducers({
    dishes:dishReducer,
    comments:commentReducer
})

// export const Reducer=(state=initialState, action)=>{
    // if(action.type==='ADD_COMMENT'){
    //     let comment=action.payload;
    //     comment.id=state.comments.length;
    //     comment.date=new Date().toString;
    //     console.log(comment);
    //     return{
    //         ...state,
    //         comments:state.comments.concat(comment)
    //     }
    // }


    // return state;

    
// }