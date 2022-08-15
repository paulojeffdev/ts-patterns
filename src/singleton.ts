class Singleton {
    private static instace: Singleton

    private constructor(){ }

    public static getInstance(): Singleton {
        if(!Singleton.instace) {
            Singleton.instace = new Singleton()
        }

        return Singleton.instace
    }

    public someBusinessLogic() {

    }
}

function clientCode() {
    const s1: Singleton = Singleton.getInstance()
    const s2: Singleton = Singleton.getInstance()

    if(s1 === s2) {
        console.log('Singleton works, both contain the same instace')
    } else {
        console.log('Singleton failed, variables contain different instances')
    }
}

clientCode()