const wordList = ["listen", "silent", "enlist", "rat", "tar", "art", "evil", "vile", "veil", "lives"]; 

function sortWord(word) {
    return word.split("").sort().join(""); // Sort letters alphabetically
}

function findAnagrams() {
    let word = document.getElementById("wordInput").value.trim().toLowerCase();
    if (!word) return alert("Please enter a word!");

    let sortedWord = sortWord(word);
    let anagrams = wordList.filter(w => sortWord(w) === sortedWord && w !== word);
//Additionally, display number of anagrams
    document.getElementById("result").innerText = anagrams.length 
        ? `Anagrams: ${anagrams.join(", ")}` 
        : "No anagrams found!";
}