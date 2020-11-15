function compressWord(word, k) {
    let compressed = false;
    let chars = word.split('');
    let currentCount = 1;
    while (!compressed) {
        compressed = true;
        for (let i = 0; i < chars.length; i++) {
            if (chars[i] === chars[i - 1]) {
                currentCount++;
            } else {
                currentCount = 1;
            }
            if (currentCount === k) {
                chars.splice(i - k + 1, k);
                compressed = false;
                i -= k;
                currentCount = 1;
            }
        }
    }
    return chars.join('')
}
