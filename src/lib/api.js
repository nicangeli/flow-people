// @flow
import type { PersonType, PersonDetailedType, APIError } from '../App'

const people: Array<PersonType> = [
    {
        name: 'Nick',
        age: 22
    },
    {
        name: 'Bob',
        age: 23
    }
]
zz 
export function fetchPeople () : Promise<Array<PersonType>> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve(people)
            } else {
                const err : APIError = { error: 'An unknown error happened'}
                reject(err)
            }
        }, Math.random() * 10000)
    })
}

export function fetchPerson (id: string) : Promise<PersonDetailedType> {
    return Promise.resolve({
        name: 'Nick',
        age: 10,
        description: 'hello nicol'
    })
}