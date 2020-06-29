import { ON_FIELD_SELECTION, RESET_SELECTION, IS_CHECKED_TRUE, SET_RESULT, SET_VICTORY, IS_CHAMP_TRUE, ON_RESET, CHAMPIONS } from './actionTypes'

export function onFieldSelection(index) {
    return {
        type: ON_FIELD_SELECTION,
        index: index
    }
}

export function onResetSelection() {
    return {
        type: RESET_SELECTION
    }
}

export function isCheckedTrue() {
    return {
        type: IS_CHECKED_TRUE
    }
}

export function setResult() {
    return {
        type: SET_RESULT
    }
}

export function setVictory() {
    return {
        type: SET_VICTORY
    }
}

export function isChampTrue() {
    return {
        type: IS_CHAMP_TRUE
    }
}

export function onReset() {
    return {
        type: ON_RESET
    }
}

export function champions() {
    return {
        type: CHAMPIONS
    }
}


// export function finishCreateQuiz() {
//     return async (dispatch, getState) => {
//         await axios.post('/quizes.json', getState().create.quiz)
//         dispatch(resetQuizCreation())
//     }    
// }


