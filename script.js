//your JS code here. If required.
const inputElement = document.getElementById('fname');

inputElement.oninput = function() {
    this.value = this.value.toUpperCase();
};