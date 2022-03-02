import { Mark, Color } from "./enum";
import { Deck, Joker, Card } from "./type";

export function createPork(): Deck {
    let deck: Deck = [];
    const mark = Object.values(Mark);
    const color = Object.values(Color);
    for (const m of mark) {
        for (const c of color) {
            deck.push({
                color: c,
                mark: m,
                getString() {
                    return this.color + this.mark;
                } 
            } as Card);
        }
    }
    let joker:Joker = {
        type: "Small",
        getString() {
            return "jo"
        }
    }
    deck.push(joker);
    joker = {
        type: "Big",
        getString() {
            return "JO"
        }
    }
    deck.push(joker);
    return deck;
}

export function printDeck(deck: Deck) {
    let res = "\n";
    deck.forEach((item, i) => {
        res += item.getString() + "\t";
        if((i+1) % 6 === 0) {
            res += "\n";
        }
    });
    console.log(res);
}