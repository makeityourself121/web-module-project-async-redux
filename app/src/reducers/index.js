import {FETCH_DATA, FETCH_SUCCESS, FETCH_FAIL} from './../actions'

const initialState={
    dog:[],
    isFeatching: false,
    err: ''
}
export const reducer = (state=initialState, action)=>{
    switch(action.type){
        case FETCH_DATA:
            return({
                ...state,
                isFeatching:true,
                err: ''
            })
            case FETCH_SUCCESS:
                return({
                    ...state,
                    dog: action.payload,
                    isFeatching:false
                })
                case FETCH_FAIL:
                    return({
                        ...state,
                        err: action.payload,
                        isFeatching:false
                    })
        default:
            return state
    }
}