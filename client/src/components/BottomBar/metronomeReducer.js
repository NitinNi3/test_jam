export const INITIAL_STATE = {
    isPlaying: false,
    count: 0,
    bpm: 100,
    beatsPerMeasure: 4,
    
  }

export const metronomeReducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_INPUT":
            return{
                    ...state, [action.payload.name]: action.payload.value
                };
        // case "CHANGE_COUNT":
        //     return{
        //         ...state, count: action.payload.count
        //     };
        // case "CHANGE_BEATS":
        //     return{
        //         ...state, bpm: action.payload.bpm
        //     };
        case "PLAYING":
            return{
                ...state, isPlaying: !action.payload.isPlaying
            };
        default: 
            return state
    }
}