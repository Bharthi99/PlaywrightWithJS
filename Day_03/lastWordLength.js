


function lastWordLength(sent)
{
        let words =  sent.trim().split(" ")
        let num =words.length
        console.log(`Number of words in the sentence ${words.length}`)
        let lastWord  = words[words.length-1]
        let lastWordLen = lastWord.length
        console.log(`last word in the sentence is ${lastWord} and its length is ${lastWordLen}`)
}

let sent = " fly me to the moon "
lastWordLength(sent)
let s = "Hello World"
lastWordLength(s)

