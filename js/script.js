// Get the toggle Button
document.addEventListener('DOMContentLoaded', () => {
	const toggleButton = document.getElementById('dark-mode-toggle');
	toggleButton.addEventListener('click', () => {
		document.body.classList.toggle('dark-mode')
	});
});

// Check and apply saved mode from localStorage
if (localStorage.getItem('darkMode') === 'enabled') {
	document.body.classList.add('dark-mode');
}

//Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
	document.body,classList.toggle('dark-mode');
	
	//Save the current mode in localStorage
	if (document.body.classList.contains('dark-mode')) {
		localStorage.setItem('darkMode', 'enabled');
	} else {
		localStorage.setItem('darkMode', 'disabled');
	}
});