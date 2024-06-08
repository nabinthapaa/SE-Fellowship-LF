function getChildren(input) {
    let obj = []
    let { children } = input;
    while (children.length > 0) {
        const child = children.pop();
        let child_re = {}
        if ((Object.keys(child))?.includes("children")) {
            child_re = getChildren(child);
        }
        const { id, name } = child;
        if (Object.keys(child_re).length !== 0) obj = [...child_re]
        obj.push({ id, name, parent: input.id });
    }
    return obj;
}

function normalize(input) {
    const orginal_keys = Object.keys(input);
    let normal_1 = [];
    for (let key of orginal_keys) {
        let childrens = getChildren(input[key]);
        normal_1 = [...childrens, ...normal_1]
    }
    for (let i in input) {
        i?.children = [];
    }
    normal_1 = [...input, ...normal_1];
    console.log(normal_1);
}



let input = {
    '1': {
        id: 1,
        name: 'John',
        children: [
            { id: 2, name: 'Sally' },
            { id: 3, name: 'Mark', children: [{ id: 4, name: 'Harry' }] }
        ]
    },
    '5': {
        id: 5,
        name: 'Mike',
        children: [{ id: 6, name: 'Peter' }]
    }
};
// To this
let output = {
    '1': { id: 1, name: 'John', children: [2, 3] },
    '2': { id: 2, name: 'Sally' },
    '3': { id: 3, name: 'Mark', children: [4] },
    '4': { id: 4, name: 'Harry' },
    '5': { id: 5, name: 'Mike', children: [6] },
    '6': { id: 6, name: 'Peter' }
};

normalize(input);
// console.log(output);