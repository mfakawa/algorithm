const mergeLists = (list1, list2) => {

    let dict = {};
    for (n of list2) {   //for a longer list for loop will be faster than for...of
        dict[n] = list2.filter(i => i === n)
    }

    let toDelete = [];
    for (n in dict) {
        if (dict[n].length > 1) {
            toDelete.push(parseInt(n));
            for (i = 2; i < dict[n].length; i++) {
                if (dict[n].length % i === 0) {
                    toDelete.pop();
                }
            }
        }
    }
    return list1.filter(i => !toDelete.includes(i));
}


let list1 = [2, 3, 9, 2, 5, 1, 3, 7, 10];
let list2 = [2, 1, 3, 4, 3, 10, 6, 6, 1, 7, 10, 10, 10];
let list3 = [];


let t0 = performance.now();
list3 = mergeLists(list1, list2);
let t1 = performance.now();

console.log((t1 - t0).toFixed(3))   // 0.230 ms
console.log(list3);     // [2, 9, 2, 5, 7, 10]