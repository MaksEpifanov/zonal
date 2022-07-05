export const addCityAction = (city) => ({
  type: 'ADD_CITY',
  payload: city,
});

export const deleteCityAction = (id) => ({
  type: 'DELETE_CITY',
  payload: id,
});

export const changeActiveCityAction = (city) => ({
  type: 'CHANGE_ACTIVE_CITY',
  payload: city,
});
