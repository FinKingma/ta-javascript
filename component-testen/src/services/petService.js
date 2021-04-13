let Pet = require('../model/Pet')

class PetService {
    pets = []
    // constructor
    constructor() {
        this.pets.push(new Pet('Minoes'))
    }

    // methods
    addPet(name) {
        this.pets.push(new Pet(name))
    }
    deletePet(name) {
        for (let i=0;i<this.pets.length;i++) {
            if (this.pets[i].name === name) {
                this.pets.splice(i, 1)
                return
            }
        }
        throw new Error('no pet with that name exists')        
    }
    getAllPets() {
        return this.pets
    }
    makePetFound(name) {
        for (let pet of this.pets) {
            if (pet.name === name) {
                pet.found = true
                return
            }
        }
        throw new Error('no pet with that name exists')
    }
}

module.exports = PetService