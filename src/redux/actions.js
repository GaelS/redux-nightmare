export const ADD_NOTIFICATION = 'ADD_NOTIFICATION';
export const DISPLAY_NOTIFICATION = 'DISPLAY_NOTIFICATION';
export const END_NOTIFICATION = 'END_NOTIFICATION';

export const addNotification = (notification) => ({
  type: ADD_NOTIFICATION,
  value: notification,
});

export const displayNotification = (content) => ({
  type: DISPLAY_NOTIFICATION,
  value: content,
});

export const endNotification = () => ({
  type: END_NOTIFICATION,
});