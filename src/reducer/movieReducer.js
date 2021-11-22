const movieInitialState = []

const movieReducer = (state = movieInitialState, action) => {
    switch(action.type){
        case 'ADD_MOVIE' : {
            return [...state,{...action.payload}]
        }
        case 'A_Z' : {
            return state.sort((a, b) => a.name.toLowerCase() > b.name.toLowerCase() && 1 || -1)
        }
        case 'Z_A' : {
            return state.sort((a, b) => b.name.toLowerCase() > a.name.toLowerCase() && 1 || -1)
        }
        case 'ASCENDING' : {
            return state.sort((a,b) => parseFloat(a.rank) - parseFloat(b.rank))
        }
        case 'DECENDING' : {
            return state.sort((a,b) => parseFloat(b.rank) - parseFloat(a.rank))
        }
        case 'REMOVE_MOVIE' : {
            return state.filter((ele) => {
                return ele.id !== action.payload
            })
        }
        default : {
            return state
        }
    }
}

export default movieReducer