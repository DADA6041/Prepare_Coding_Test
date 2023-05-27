function solution(myString, pat) {
    return myString.split("").map(i => i === "A" ? "B" : "A").join("").indexOf(pat) >= 0 ? 1 : 0;
}