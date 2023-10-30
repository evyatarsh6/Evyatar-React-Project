let sendButton = document.getElementById('sendButton');

let input = document.getElementById('userInput');

let ul = document.querySelector('ul');

let item = document.getElementsByTagName('li');

const log = document.getElementById("log");

const inputLength = () => input.value.length

const inputOnChange = () => input.addEventListener('change', updateValue('change'))

const updateValue = (event) => log.textContent = event.target.value;

const listLength = () => item.length

const createListElement = () => {
	// updateValue('change') //this is probably doesnt work at all

	let li = document.createElement('li'); // creates an element 'li'

	li.append(document.createTextNode(input.value)); //makes text from input field the li text

	ul.append(li); //adds li to ul

	input.value = ''; //Reset text input field - for now there is no value for the input
    console.dir(document.body.outerHTML)
    document.body.outerHTML += `<a link= TODO.css> ${input.value} </a>`
    console.log(document.body.outerHTML)

	// START STRIKETHROUGH - because it's in the function, it only adds it for new items

	const crossOut = () => {
		li.classList.toggle('done');
		li.addEventListener('click',crossOut());
	}
	//END STRIKETHROUGH

	// START ADD DELETE BUTTON
	let dBtn = document.createElement('button');
	dBtn.append(document.createTextNode('X'));
	li.append(dBtn);
	dBtn.addEventListener('click', deleteListItem);
	// END ADD DELETE BUTTON

	//ADD CLASS DELETE (DISPLAY: NONE)

	 const deleteListItem = () => li.classList.add('delete')
	
	 //END ADD CLASS DELETE
}

 const getVal = () =>  document.querySelector('input').value;
  

const sayhi = () => alert('hi')

const changeLocation = (url = 'https://wikipedia.org') => (confirm(`Go to following url ${url}?`))?location.href = url:null

const addListAfterClick = () => inputLength>0?createListElement(): alert('no TODO list name was written')


const addListAfterKeypress = (event) => (inputLength() > 0 && event.which ===13)? createListElement():


sendButton.addEventListener('click',addListAfterClick);

input.addEventListener('keypress', addListAfterKeypress('keypress'));

changeLocation()