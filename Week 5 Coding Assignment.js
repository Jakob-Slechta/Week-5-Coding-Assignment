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
    constructor(name) {
        this.name = name;
    }
}


class Menu {
    constructor() {
        this.spells = [];
        this.angels = [];
        this.selectedSpell = null;
        this.selectedAngel = null;
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
                    this.displayAllSpells();
                    break;
                case "5":
                    this.createAngel();
                    break;
                case "6":
                    this.viewAngels();
                    break;
                case "7":
                    this.deleteAngel();
                    break;
                case "8":
                    this.displayAllAngels();
                    break;
                default:
                    selection = 0;
            }
        selection = this.showMainMenuOptions();
        }
        alert("See ya later alligator!");
    }
    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create New Spell
        2) View Spells
        3) Delete Spells
        4) Display ALL Spells
        5) Create New Angel
        6) View Angels
        7) Delete Angels
        8) Display All Angels
        `);
    }
//This is where the spell options coding begins:
showSpellMenuOptions(spellDescription) {
    return prompt(`
    0) Back
    1) Create Spell
    2) Delete Spell
    ------------------
    ${spellDescription}
    `);
}
showAngelMenuOptions(angelDescription) {
    return prompt(`
    0) Back
    1) Create Angel
    2) Delete Angel
    --------------------
    ${angelDescription}
    `);
} //Unable to get the create and delete angel options in this menu to work.
// A user could still do all the necessary features, but they wouldn't be able to
// immediately access the option to create or delete angels from the ShowAngelMenuOptions menu.

    displayAllSpells() {
        let spellString = "";
        for (let i = 0; i < this.spells.length; i++) {
            spellString += i + ") " + this.spells[i].name + "\n";
        }
        alert(spellString);
    }
   
    viewSpells() {
        let index = prompt("Enter the index of the spell you wish to view:");
        if (index > -1 && index < this.spells.length) {
            this.selectedSpell = this.spells[index];
            let spellDescription = "Spell Name: " + this.selectedSpell.name + "\n";

            for(let i = 0; i < this.selectedSpell.length; i++) {
                spellDescription += i + ") " + this.selectedSpell.spells[i].name 
                + " - " + this.selectedSpell.spells[i].magicWords + "\n" 
                + this.selectedSpell.spells[i].useOfSpell
                + "\n";
            }
            let selection = this.showSpellMenuOptions(spellDescription);
            switch (selection) {
                case "1":
                    this.createSpell();
                    break;
                case "2":
                    this.deleteSpell();
                    break;
                

            }
        }
    }
    createSpell() {
        let name = prompt("Enter name of your new spell:");
        let magicWords = prompt("Next, what are the magic words for this spell:");
        let useOfSpell = prompt("Finally, what is the use of this spell:")
        this.spells.push(new Spells(name, magicWords, useOfSpell));
    }
    deleteSpell(){
        let index = prompt("Enter the index of the spell you want to delete:")
        if (index > -1 && index < this.spells.length) {
            this.spells.splice(index, 1);
        }
    }
    //This is where the code for the Angels options will go:
    createAngel() {
    let name = prompt("What's the name of the Angel you wish to add:");
    this.angels.push(new Angels(name));
}
    
    deleteAngel(){
        let index = prompt("Enter the index of the Angel you want to delete:")
        if (index > -1 && index < this.angels.length) {
            this.angels.splice(index, 1);
        }
    }
    displayAllAngels() {
        let angelString = "";
        for(let i = 0; i < this.angels.length; i++) {
            angelString += i + ") " + this.angels[i].name + "\n";
        }
        alert(angelString);
    }
    viewAngels(){
        let index = prompt("Enter the index of the Angel you want to view:")
        if (index > -1 && index < this.angels.length) {
            this.selectedAngel = this.angels[index];
            let angelDescription = "Angel's Name: " + this.selectedAngel.name + "\n";
        
            for(let i = 0; i < this.selectedAngel.length; i++) {
                angelDescription += i + ") " + this.selectedAngel.angels[i].name + "\n";
            }    
        let selection = this.showAngelMenuOptions(angelDescription);
        switch(selection) {
            case "1":
                this.createAngel;
                break;
            case "2":
                this.deleteAngel;
                break;


        }
      }
    }
} 

let menu = new Menu();
menu.start();