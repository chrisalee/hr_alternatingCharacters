/*
 * Complete the 'alternatingCharacters' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function alternatingCharacters(s) {
    let deletions = 0;
    
    for(let i = 0; i < s.length; i++) {
        if(s[i] === s[i + 1]) {
            deletions++
        }
    }
    
    console.log(deletions);
    return deletions;
}
