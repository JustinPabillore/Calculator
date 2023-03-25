let output = document.getElementById('output');

function addToOutput(value) {
	output.value += value;
}

function clearOutput() {
	output.value = '';
}

function calculate() {
	output.value = eval(output.value);
}
function del(){
	output.value = output.value.toString().slice(0,-1);
}