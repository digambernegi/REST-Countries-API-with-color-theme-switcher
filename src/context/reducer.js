

const themeReducer = (state, action) => {
    switch(action.type){
        case "LIGHTMODE":{
            return{darkMode:false};
}
            case "DARKMODE":{
            return{darkMode:true};
}
            case "TOGGLE": {
                return { darkMode: !state.darkMode };
              }

            default: return state;
    }
}

export default themeReducer