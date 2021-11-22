export const addMovie = (randomMovie) => {
    return {
        type: 'ADD_MOVIE',
        payload: randomMovie
    }
}

export const AtoZ = () => {
    return {
        type: 'A_Z',
    }
}

export const ZtoA = () => {
    return {
        type: 'Z_A',
    }
}

export const ascending = () => {
    return {
        type: 'ASCENDING'
    }
}

export const decending = () => {
    return {
        type: 'DECENDING'
    }
}

export const removeMovie = (id) => {
    return {
        type: 'REMOVE_MOVIE',
        payload : id 
    }
}