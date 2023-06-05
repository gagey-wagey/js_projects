class Animal {
    #specie
    #sound

    constructor(specie, sound){
        this.#specie = specie;
        this.#sound = sound;
    }

    characteristics(){
        console.log(`${this.#specie} and makes ${this.#sound} as a sound.`)
    }
    
    get specie(){
        return this.#specie;
    }

    set specie(specie){
        this.#specie = specie;
    }

    get sound(){
        return this.#sound;
    }

    set sound(sound){
        this.#sound = sound;
    }
}

Animal.prototype.move = () => console.log("moving...");