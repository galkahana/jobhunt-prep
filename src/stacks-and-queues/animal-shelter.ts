import { Queue } from '../structs/queue'

export class Animal {
    name: string


    constructor(name: string) {
        this.name = name
    }
}

export class Dog extends Animal{

}

export class Cat extends Animal{

}

type AnimalInShelter<T = Dog | Cat> = {
    animal: T
    order: number
}


export class AnimalShelter {
    dogsQueue: Queue<AnimalInShelter<Dog>>
    catsQueue: Queue<AnimalInShelter<Cat>>
    counter: number

    constructor() {
        this.dogsQueue = new Queue<AnimalInShelter<Dog>>()
        this.catsQueue = new Queue<AnimalInShelter<Cat>>()
        this.counter = 0
    }

    enque(animal: Animal) {
        if(animal instanceof Cat) {
            this.catsQueue.enqeue({ animal, order: this.counter++ })
        } else if (animal instanceof Dog) {
            this.dogsQueue.enqeue({ animal, order: this.counter++ })
        } else {
            throw("Animal is not dog or cat...we're only receiving either of those.")
        }
    }

    dequeue() {
        const topDog = this.dogsQueue.top()
        const topCat = this.catsQueue.top()

        if(!topDog|| !topCat) {
            if(!topDog)
                return this.catsQueue.dequeue()?.animal
            return this.dogsQueue.dequeue()?.animal
        }

        // we got both cats and dogs...let's check the order
        if(topDog.order < topCat.order) {
            this.dogsQueue.dequeue()
            return topDog.animal
        }
        else {
            this.catsQueue.dequeue()
            return topCat.animal
        }
    }

    dequeueDog() {
        return this.dogsQueue.dequeue()?.animal
    }

    dequeueCat() {
        return this.catsQueue.dequeue()?.animal
    }

}