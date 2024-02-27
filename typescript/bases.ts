const persona:string = "Botame tu jaaa"

type Person = {
    name: string
    age: number
}

const personA: Person = {
    name: "Andrew",
    age: 21
}

const changePersonName = (person: Person, newName: string) => {
    person.name = newName
    return person
}

const createPerson = (person:Person) => {
    return {
        name: person.name,
        age: person.age
    }
}

const personB: Person = {
    name: "Yisus",
    age: 22
}

const personChanged = changePersonName(personA, "Alejandro")
const personCreated = createPerson(personB)

// FIRST COMPARATION
if(personChanged == personA){
    console.log("Yes")
} else {
    console.log("No")
}

// SECOND COMPARATION
if(personCreated == personB){
    console.log("yes")
} else {
    console.log("no")
}
