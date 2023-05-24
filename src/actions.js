export const startPractice = () => {
    return {
      type: 'START_PRACTICE',
    };
  };
  
  export const updateInput = key => {
    return {
      type: 'UPDATE_INPUT',
      payload: key,
    };
  };
  
  export const finishPractice = () => {
    return {
      type: 'FINISH_PRACTICE',
    };
  };
  