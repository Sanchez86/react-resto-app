
const initialState = {
    menu: [],
    loading: true,
    error: false,
    items: [],
    totalPrice: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
      case 'MENU_LOADED' :
          return {
              ...state,
              menu: action.payload,
              loading: false
          };
      case 'MENU_REQUESTED' :
          return {
              ...state,
              menu: state.menu,
              loading: true
          };
      case 'MENU_ERROR' :
          return {
              ...state,
              menu: state.menu,
              loading: true,
              error: true
          };
      case 'MENU_ADD_TO_CART' :
          const id = action.payload;
          const check = state.items.find(item => item.id === id);

          if(!check){
              const item = state.menu.find(item => item.id === id);
              const newItem = {
                  title: item.title,
                  price: item.price,
                  url: item.url,
                  id: item.id,
                  quantity: 1
              };
              return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                totalPrice: state.totalPrice + item.price
              };
          }else{
              return {
                  ...state,
              };
          }

      case 'ITEM_REMOVE_FROM_CART' :
          const idx = action.payload;
          const itemIndex = state.items.findIndex(item => item.id === idx);
          const price = state.items[itemIndex]['price'] * state.items[itemIndex]['quantity'];
          return{
             ...state,
             items: [
                 ...state.items.slice(0, itemIndex),
                 ...state.items.slice(itemIndex + 1)
             ],
              totalPrice: state.totalPrice - price
            };

      case 'ADD_THE_SAME' :
          // нахожу элемент
          let foundElement = state.items.find(item => item.id === action.payload);
          // добавляю еденицу к найденому элементу
          foundElement.quantity++;

          // определяю индекс элемента
          const foundItemIndex = state.items.findIndex(item => item.id === action.payload);

          // формирую новый массив
          const items = [
              ...state.items.slice(0, foundItemIndex),
              foundElement,
              ...state.items.slice(foundItemIndex + 1)
          ];

          return {
               ...state,
              items,
              totalPrice: state.totalPrice + foundElement.price
          };

        case 'KILL_THE_SAME' :

          let kill_foundElement = state.items.find(item => item.id === action.payload);
          if(kill_foundElement.quantity === 1){
              return {
                  ...state
              };
          }

          --kill_foundElement.quantity;

          const kill_foundItemIndex = state.items.findIndex(item => item.id === action.payload);

          const kill_items = [
              ...state.items.slice(0, kill_foundItemIndex),
              kill_foundElement,
              ...state.items.slice(kill_foundItemIndex + 1)
          ];

          return {
               ...state,
              items: kill_items,
              totalPrice: state.totalPrice - kill_foundElement.price
          };


      default:
          return state;
  }
};

export default reducer;