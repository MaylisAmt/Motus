function tryWord(word, base) {
	// TODO: fix jeu sensible à la casse.
	if (word === base) {
		return true
  } else {
  	let wellPlaced = [];
    let notInWord = [];
    let missPlaced = [];
    
  	let arrayBase = base.split('');
    let arrayWord = word.split('');
    
		for (let i = 0; i < arrayWord.length; i++) {
    	if (arrayBase[i] === arrayWord[i]) {
      	    wellPlaced.push(arrayWord[i]);
        }	
        else if (!arrayBase.includes(arrayWord[i])) {
            notInWord.push(arrayWord[i])
        }
        else {
            missPlaced.push(arrayWord[i])
        }
    }
    
    
    
    return { wellPlaced: wellPlaced, missPlaced: missPlaced, notInWord: notInWord }
  }
}

let base = "dictionnaire"
document.getElementById("length").innerText = `Longueur du mot : ${base.length}`
document.getElementById("firstLetter").innerText = `Première lettre : ${base.charAt(0)}`

const guess = () => {
	let word = document.getElementById("word").value.toLowerCase()
	let result = tryWord(word, base)
  document.getElementById("word").value = ''
  document.getElementById("try").innerText = word
  if (result.wellPlaced != undefined) {
  document.getElementById("well").innerText = 'Bien placé: '+result.wellPlaced.join('')
  }
  if (result.missPlaced != undefined) {
  document.getElementById("miss").innerText = 'Mal placé: '+result.missPlaced.join('')
  }
  if (result.notInWord != undefined) {
  document.getElementById("not").innerText = 'Pas dans le mot: '+result.notInWord.join('')
  }
  if (result === true) {
	document.getElementById("win").innerText = "Vous avez gagné"
  document.getElementById("well").innerText = ""
  document.getElementById("miss").innerText = ""
  document.getElementById("not").innerText = ""
  }
}
