import { ON_FIELD_SELECTION, RESET_SELECTION, IS_CHECKED_TRUE, SET_RESULT, SET_VICTORY, IS_CHAMP_TRUE, ON_RESET, CHAMPIONS } from '../actions/actionTypes'

const initialState = {
    fields: [
        { id: 1, isSelected: false }, { id: 2, isSelected: false }, { id: 3, isSelected: false },
        { id: 4, isSelected: false }, { id: 5, isSelected: false }, { id: 6, isSelected: false },
        { id: 7, isSelected: false }, { id: 8, isSelected: false }, { id: 9, isSelected: false },
        { id: 10, isSelected: false }, { id: 11, isSelected: false }, { id: 12, isSelected: false },
        { id: 13, isSelected: false }, { id: 14, isSelected: false }, { id: 15, isSelected: false },
        { id: 16, isSelected: false }, { id: 17, isSelected: false }, { id: 18, isSelected: false },
        { id: 19, isSelected: false }, { id: 20, isSelected: false }, { id: 21, isSelected: false },
        { id: 22, isSelected: false }, { id: 23, isSelected: false }, { id: 24, isSelected: false },
        { id: 25, isSelected: false }, { id: 26, isSelected: false }, { id: 27, isSelected: false },
        { id: 28, isSelected: false }, { id: 29, isSelected: false }, { id: 30, isSelected: false },
        { id: 31, isSelected: false }, { id: 32, isSelected: false }, { id: 33, isSelected: false },
        { id: 34, isSelected: false }, { id: 35, isSelected: false }, { id: 36, isSelected: false },
        { id: 37, isSelected: false }, { id: 38, isSelected: false }, { id: 39, isSelected: false },
        { id: 40, isSelected: false }, { id: 41, isSelected: false }, { id: 42, isSelected: false },
        { id: 43, isSelected: false }, { id: 44, isSelected: false }, { id: 45, isSelected: false }
    ],
    isChecked: false,
    isChamp: false,
    result: [],
    victory: []
}

export default function lotoSixReducer(state = initialState, action) {
    switch (action.type){
        case ON_FIELD_SELECTION: {
            let fields = [...state.fields]
            fields[action.index].isSelected = !fields[action.index].isSelected
            return {
               ...state, fields: [...fields] 
            }
        }            
        case RESET_SELECTION: {
            let fields = [...state.fields]
            fields.map(field => field.isSelected = false)
            return {
                ...state, fields: [...fields] 
            }
        }
        case SET_RESULT: {
            let fields = [...state.fields]
            let result = [...state.result]
            fields.map(({ id, isSelected }) => isSelected && result.push(id))
            return {
                ...state, result: [...result] 
            }
        }
        case SET_VICTORY: {
            let victory = [...state.victory]
            while (victory.length < 6) {    
                let temp = (Math.floor(Math.random() * 44) + 1)        
                if (victory.indexOf(temp) === -1) {
                    victory.push(temp);
                }
            }
            return {
                ...state, victory: [...victory] 
            }
        }
        case IS_CHECKED_TRUE: 
            return {
                ...state, isChecked: true 
            }
        case IS_CHAMP_TRUE: 
            return {
                ...state, isChamp: true 
            }
        case ON_RESET: 
            return {
                ...state, isChecked: false, isChamp: false, result: [], victory: [] 
            }
        case CHAMPIONS: {
            let result = [...state.result]
            let victory = [...state.victory]
            const r = result.sort().join('')
            const v = victory.sort().join('')
            if (r === v){
                return {...state, isChamp: true }
            } else {
                return {...state, isChamp: false }
            }
        }    
        default:
            return state
    }
}


