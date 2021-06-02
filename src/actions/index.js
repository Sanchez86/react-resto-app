const menuLoaded = (newMenu) => {
    return{
        type: 'MENU_LOADED',
        payload: newMenu
    }
};

const menuRequested = () => {
    return{
        type: 'MENU_REQUESTED'
    }
};

const menuError = () => {
    return{
        type: 'MENU_ERROR'
    }
};

const onAddToCart = (id) => {
    return{
        type: 'MENU_ADD_TO_CART',
        payload: id
    }
};

const deleteFromCart = (id) => {
    return{
        type: 'ITEM_REMOVE_FROM_CART',
        payload: id
    }
};

const onAddTheSame = (id) => {
    return{
        type: 'ADD_THE_SAME',
        payload: id
    }
};

const onKillTheSame = (id) => {
    return{
        type: 'KILL_THE_SAME',
        payload: id
    }
};

export {
    menuLoaded,
    menuRequested,
    menuError,
    onAddToCart,
    deleteFromCart,
    onAddTheSame,
    onKillTheSame
};