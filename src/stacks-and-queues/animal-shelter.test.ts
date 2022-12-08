import { describe, test, expect } from '@jest/globals'
import { AnimalShelter, Cat, Dog, Animal } from './animal-shelter'


function createAnimalShelter() {

    const shelter = new AnimalShelter()

    shelter.enque(new Cat('whiskers'))
    shelter.enque(new Cat('patsy'))
    shelter.enque(new Dog('jimme'))
    shelter.enque(new Cat('libbi'))
    shelter.enque(new Dog('woopie'))
    return shelter
}


describe('test AnimalShelter', () => {
    test('edge cases', () => {
        const shelter = new AnimalShelter()

        expect(shelter.dequeue()).toEqual(undefined)
        expect(shelter.dequeueCat()).toEqual(undefined)
        expect(shelter.dequeueDog()).toEqual(undefined)
    })

    test('dequeue retrieves animal per order of entry', () => {
        const shelter = createAnimalShelter()

        expect(shelter.dequeue()?.name).toEqual('whiskers')
        expect(shelter.dequeue()?.name).toEqual('patsy')
        expect(shelter.dequeue()?.name).toEqual('jimme')
        expect(shelter.dequeue()?.name).toEqual('libbi')
        expect(shelter.dequeue()?.name).toEqual('woopie')
        expect(shelter.dequeue()).toEqual(undefined)
    })

    test('dequeueDog retrieves all dogs, and later dequeues will just have the cats', () => {
        const shelter = createAnimalShelter()

        expect(shelter.dequeueDog()?.name).toEqual('jimme')
        expect(shelter.dequeueDog()?.name).toEqual('woopie')
        expect(shelter.dequeueDog()).toEqual(undefined)


        expect(shelter.dequeue()?.name).toEqual('whiskers')
        expect(shelter.dequeue()?.name).toEqual('patsy')
        expect(shelter.dequeue()?.name).toEqual('libbi')
        expect(shelter.dequeue()).toEqual(undefined)
    })

    test('dequeueCat retrieves all cats, and later dequeues will just have the dogs', () => {
        const shelter = createAnimalShelter()

        expect(shelter.dequeueCat()?.name).toEqual('whiskers')
        expect(shelter.dequeueCat()?.name).toEqual('patsy')
        expect(shelter.dequeueCat()?.name).toEqual('libbi')
        expect(shelter.dequeueCat()).toEqual(undefined)


        expect(shelter.dequeue()?.name).toEqual('jimme')
        expect(shelter.dequeue()?.name).toEqual('woopie')
        expect(shelter.dequeue()).toEqual(undefined)
    })

    test('mixed dequeuing returns the expected animal', () => {
        const shelter = createAnimalShelter()

        expect(shelter.dequeueDog()?.name).toEqual('jimme')
        expect(shelter.dequeue()?.name).toEqual('whiskers')
        expect(shelter.dequeueCat()?.name).toEqual('patsy')
        expect(shelter.dequeueCat()?.name).toEqual('libbi')
        expect(shelter.dequeueCat()).toEqual(undefined)
        expect(shelter.dequeueDog()?.name).toEqual('woopie')
        expect(shelter.dequeue()).toEqual(undefined)

    })

    test('check that cant insert a new kind of animal', () => {
        class Elephant extends Animal {}

        const shelter = new AnimalShelter()

        expect(()=>shelter.enque(new Elephant('oops'))).toThrow(/Animal is not dog or cat/)
    })
})