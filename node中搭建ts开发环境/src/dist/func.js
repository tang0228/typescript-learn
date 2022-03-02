"use strict";
exports.__esModule = true;
exports.printDeck = exports.createPork = void 0;
var enum_1 = require("./enum");
function createPork() {
    var deck = [];
    var mark = Object.values(enum_1.Mark);
    var color = Object.values(enum_1.Color);
    for (var _i = 0, mark_1 = mark; _i < mark_1.length; _i++) {
        var m = mark_1[_i];
        for (var _a = 0, color_1 = color; _a < color_1.length; _a++) {
            var c = color_1[_a];
            deck.push({
                color: c,
                mark: m,
                getString: function () {
                    return this.color + this.mark;
                }
            });
        }
    }
    var joker = {
        type: "Small",
        getString: function () {
            return "jo";
        }
    };
    deck.push(joker);
    joker = {
        type: "Big",
        getString: function () {
            return "JO";
        }
    };
    deck.push(joker);
    return deck;
}
exports.createPork = createPork;
function printDeck(deck) {
    var res = "\n";
    deck.forEach(function (item, i) {
        res += item.getString() + "\t";
        if ((i + 1) % 6 === 0) {
            res += "\n";
        }
    });
    console.log(res);
}
exports.printDeck = printDeck;
