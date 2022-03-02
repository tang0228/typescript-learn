Object.defineProperty(exports, "__esModule", { value: true });
exports.printDeck = exports.createPork = void 0;
const enum_1 = require("./enum");
function createPork() {
    let deck = [];
    const mark = Object.values(enum_1.Mark);
    const color = Object.values(enum_1.Color);
    for (const m of mark) {
        for (const c of color) {
            deck.push({
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark;
                }
            });
        }
    }
    let joker = {
        type: "Small",
        getString() {
            return "jo";
        }
    };
    deck.push(joker);
    joker = {
        type: "Big",
        getString() {
            return "JO";
        }
    };
    deck.push(joker);
    return deck;
}
exports.createPork = createPork;
function printDeck(deck) {
    let res = "\n";
    deck.forEach((item, i) => {
        res += item.getString() + "\t";
        if ((i + 1) % 6 === 0) {
            res += "\n";
        }
    });
    console.log(res);
}
exports.printDeck = printDeck;
