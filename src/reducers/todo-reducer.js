export const todos = (state=[], action)=>{
    switch(action.type){
        case 'novo':
            return [...state, action.payload] 
        case 'concluir':
            const id = action.payload;
            const _state = state.map(t=>{if(t.id===id)t['concluida']=true ;return t});
            return _state;
        case 'excluir':
            const idExcluir = action.payload;
            const state_ = state.filter(t=>{if(t.id!=idExcluir) return t} );
            return state_;
        default : 
            return state;
    }
}