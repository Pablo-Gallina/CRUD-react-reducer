export const contactosReducer = (state, {type, payload}) => {
    switch (type) {
        //Mientras el tipo sea agregar
        case "agregar":
            //Realizaras una copia de lo que tienes en el state (datos actuales), y agregaras el payload (nuevo dato)
            return [...state, payload];

        case "eliminar":
            //Realizaras una copia de lo que tienes en el state (datos actuales), y agregaras el payload (nuevo dato)
            return state.filter(_state => _state.id !== payload);
    
        default:
            return state //Sino se realiza alguna accion, retorna el state
    }
}
