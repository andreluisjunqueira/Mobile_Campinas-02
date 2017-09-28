export const novo = (todo)=>{
    return{
        type : 'novo',
        payload : todo
    }
}

export const concluir = (id)=>{
    return{
        type : 'concluir',
        payload : id
    }
}

export const excluir = (id)=>{
    return{
        type : 'excluir',
        payload : id
    }
}