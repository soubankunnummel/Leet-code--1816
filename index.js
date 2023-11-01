var truncateSentence = function(s, k) {
    const text = s.split(" ").slice(0,k).join(" ")
    return text
    

    
};


const s = "Hello how are you Contestant"
const k = 4
const truncated = truncateSentence(s, k)
console.log(truncated);