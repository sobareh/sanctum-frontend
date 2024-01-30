import removeFadeOut from '../utils/removeFadeout';

export const setAlertTrue = (data, dispatch) => {
  const doc = document.getElementById('toast-container');

  doc.style.display = 'block';

  dispatch({
    type: 'SET_ALERT',
    payload: data,
  });

  setTimeout(() => {
    removeFadeOut(doc, 2000);
  }, 3000);
};
