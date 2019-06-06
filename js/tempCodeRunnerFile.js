var CardType;
(function (CardType) {
    CardType[CardType["Ace"] = 1] = "Ace";
    CardType[CardType["Two"] = 2] = "Two";
    CardType[CardType["Three"] = 3] = "Three";
    CardType[CardType["Four"] = 4] = "Four";
})(CardType || (CardType = {})); //CardType[1] = Ace
var cardType = CardType[2];
console.log(cardType);
//# sourceMappingURL=tempCodeRunnerFile.js.map