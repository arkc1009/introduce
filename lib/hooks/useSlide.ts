import { useCallback, useReducer } from 'react';

export type SlideDirection = 'prev' | 'next';

interface SlideState {
  page: number;
  direction?: SlideDirection;
}

interface SlideAction {
  type: SlideDirection;
  state: SlideState;
}

function reducer(state: SlideState, action: SlideAction): SlideState {
  switch (action.type) {
    case 'prev': {
      return { page: state.page + action.state.page, direction: 'prev' };
    }
    case 'next': {
      return { page: state.page + action.state.page, direction: 'next' };
    }
    default: {
      return { page: state.page };
    }
  }
}

const _initialState: SlideState = {
  page: 0,
};

function useSlide(initialState?: SlideState) {
  const [{ direction, page }, dispatch] = useReducer(reducer, initialState ?? _initialState);

  const paginate = useCallback((pageArg: number) => {
    if (pageArg < 0) {
      dispatch({ type: 'prev', state: { page: pageArg, direction: 'prev' } });
      return;
    }

    dispatch({ type: 'next', state: { page: pageArg, direction: 'next' } });
  }, []);

  return { direction, page, paginate };
}

export default useSlide;
