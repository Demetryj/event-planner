export const clearCastomInputs = (namesInput, values) => {
  namesInput.forEach(name => {
    values[name] = '';
    document.getElementById(name).value = '';
  });
};
