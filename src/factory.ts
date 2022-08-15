abstract class Creator {
    public abstract factoryMethod() : Product

    public someOperation(): string {
        const product = this.factoryMethod()

        return `Creator: The same creator's code just worked with ${product.operation()}`
    }
}

interface Product {
    operation(): string
}

class ConcreteCreator1 extends Creator implements Product {
    public factoryMethod() {
        return new ConcreteCreator1()
    }

    public operation(): string {
        return '{result of the concreteProduct1}'
    }
}

class ConcreteCreator2 extends Creator implements Product{
    public factoryMethod() {
        return new ConcreteCreator2()
    }

    public operation(): string {
        return '{result of the concreteProduct2}'
    }
}

function clientCode2(creator: Creator) {
    console.log('Client: I\'m not aware of the creator\'s class, but it still works')
    console.log(creator.someOperation())
}

console.log('App: Launched with the ConcreteCreator1.')
clientCode2(new ConcreteCreator1())
console.log('')

console.log('App: Launched with the ConcreteCreator2.')
clientCode2(new ConcreteCreator2())