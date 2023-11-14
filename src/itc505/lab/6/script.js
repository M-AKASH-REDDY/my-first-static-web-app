document.addEventListener('DOMContentLoaded', function () {
  const colorPicker = document.getElementById('color-picker');
  const applyColorButton = document.getElementById('apply-color');

  applyColorButton.addEventListener('click', function () {
    const selectedColor = colorPicker.value;
    document.body.style.backgroundColor = selectedColor;
  });
});
