"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.merge = merge;
// src/merge.ts
function merge(c1, c2, // descending
c3) {
    const result = [];
    let i = 0, j = c2.length - 1, k = 0;
    while (i < c1.length || j >= 0 || k < c3.length) {
        const candidates = [];
        if (i < c1.length)
            candidates.push(c1[i]);
        if (j >= 0)
            candidates.push(c2[j]);
        if (k < c3.length)
            candidates.push(c3[k]);
        let min = candidates[0];
        for (let x = 1; x < candidates.length; x++) {
            if (candidates[x] < min)
                min = candidates[x];
        }
        result.push(min);
        if (i < c1.length && c1[i] === min)
            i++;
        else if (j >= 0 && c2[j] === min)
            j--;
        else
            k++;
    }
    return result;
}
