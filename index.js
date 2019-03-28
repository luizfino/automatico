const readline = require('readline-sync')

function start() {
	const content = {}

	content.searchTerm = askandreturnsearchterm()
	content.prefix = askandreturnprefix()

	function askandreturnsearchterm() {
		return readline.question('Type a WikiPedia search term: ')
	}

	function askandreturnprefix() {
		const prefixes = ['Who is', 'What is', 'The history of']
		const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one option: ')
		const selectedPrefixText = prefixes[selectedPrefixIndex]

		return selectedPrefixText

		console.log(selectedPrefixText)
	}

	console.log(content)
}

start()
