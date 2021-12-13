class Spells {
    constructor(name, magicWords, useOfSpell) {
        this.name = name;
        this.magicWords = magicWords;
        this.useOfSpell = useOfSpell;
    }

    describeSpell() {
        return `The ${this.name} spell can be cast by saying ${this.magicWords} 
        and it's use is ${this.useOfSpell}`;
    }
}

class Angels {
    constructor(name, summonMethod) {
        this.name = name;
        this.summonMethod = summonMethod;
    }
}


class Menu {
    constructor() {
        this.spells = [];
        this.angels = [];
        this.selectedSection = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case "1":
                    this.createSpell();
                    break;
                case "2":
                    this.viewSpells();
                    break;
                case "3":
                    this.deleteSpell();
                    break;
                case "4":
                    this.createAngel();
                    break;
                case "5":
                    this.viewAngels();
                    break;
                case "6":
                    this.deleteAngel();
                    break;
                default:
                    selection = 0;
            }
        selection = this.showMainMenuOptions();
        }
        alert("See ya later alligator!");
    }
}