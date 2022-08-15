"use strict";
class Singleton {
    constructor() { }
    static getInstance() {
        if (!Singleton.instace) {
            Singleton.instace = new Singleton();
        }
        return Singleton.instace;
    }
    someBusinessLogic() {
    }
}
function clientCode() {
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log('Singleton works, both contain the same instace');
    }
    else {
        console.log('Singleton failed, variables contain different instances');
    }
}
clientCode();
