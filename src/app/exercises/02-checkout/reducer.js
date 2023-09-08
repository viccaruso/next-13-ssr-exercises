import produce from 'immer';

function reducer(state, action) {
  return produce(state, (draftState) => {
    switch (action.type) {
      case 'set-loading': {
        draftState.status = 'loading';
        return;
      }
      case 'set-idle': {
        draftState.status = 'idle';
        return;
      }
      case 'initialize-items': {
        draftState.items = action.value;
        return;
      }
      case 'add-item': {
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );

        if (itemIndex !== -1) {
          draftState.items[itemIndex].quantity += 1;
          return;
        }

        draftState.items.push({
          ...action.item,
          quantity: 1,
        });
        return;
      }

      case 'delete-item': {
        const itemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );

        draftState.items.splice(itemIndex, 1);
        return;
      }
    }
  });
}

export default reducer;
