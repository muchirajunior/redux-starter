import { BUG_ADDED, BUG_REMOVED } from "./actions";

var id=0;

export default function reducer( state=[], action){
    switch(action.type){

        case BUG_ADDED :
            return [...state, {
                id: id++,
                description:action.payload.description,
                resolved:false
            }]

        case BUG_REMOVED: return state.filter(state, state.id !== id);

        default : return state;
    }
}