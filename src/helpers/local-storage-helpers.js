export const create = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const update = (key, value) => {
  localStorage.setItem(key, value);
};

export const read = key => {
  const data = localStorage.getItem(key);
  try {
    return JSON.parse(data);
  } catch (err) {
    return data;
  }
};

export const remove = key => {
  localStorage.removeItem(key);
};
