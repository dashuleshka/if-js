// const colors = {
//     data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
//     counter: 0,
//     endIndex: 4,
//     [Symbol.iterator]() {
//         return this;
//     },
//     next() {
//         if (this.current === undefined) {
//             this.current = this.data[this.counter];
//         }
//         if (this.current > this.endIndex) {
//             return {
//                 done: true,
//             };
//         }
//         return {
//             done: false,
//             value: this.counter++,
//         };
//     },
// };

const colors = {
    data: ['magenta', 'cyan', 'firebrick', 'springgreen', 'skyblue'],
    from: 0,
    to: 4,
    [Symbol.iterator]() {
        return this;
    },
    next() {
        if (this.current === undefined) {
            this.current = this.from;
        }

        if (this.current > this.to) {
            return {
                done: true,
            };
        }

        return {
            done: false,
            value: this.data[this.current++],
        };
    },
};

console.log(colors);
for (const value of colors) {
    console.log(value);

}

const changeStyle = id => event => {
    event.target.style.color = colors.next(id).value;
};

const text1 = document.getElementById("text1");
const changeStyle2 = id => text1.addEventListener("click", (event) => {
    event.target.style.color = colors.next(id).value;
}


// const text2 = document.getElementById("text2");
// const text3 = document.getElementById("text3");
