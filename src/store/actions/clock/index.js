export const addCity = (city) => ({
  type: 'ADD_CITY',
  payload: city,
});

export const deleteCity = (id) => ({
  type: 'DELETE_CITY',
  payload: id,
});
