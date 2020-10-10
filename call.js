const shadowRanger ={
    name:"Doggie",
    health:50,
    healGadget(){
        return this.health=100;
    }
}
console.log(shadowRanger.name)

const redRanger={
    name:'Jack',
    health:70,
}
console.log("Red Ranger health before using call",redRanger.health)

// The major difference between out shadow Ranger and redRanger is that our red ranger does not have a health method
// We can get access to the health method if we use call

shadowRanger.healGadget.call(redRanger)
console.log("Red Ranger health after using call",redRanger.health)

// Things does not end here , we can pass parameter too

const wizard={
    name:"Severus",
    health:05,
    heal(num1){
        return this.health+= num1
    }
}
const studentWizard={
    name:"Hermione",
    health : 60,
}
console.log("Hermione health before using heal from the wizard object", studentWizard.health)

wizard.heal.call(studentWizard,35)
console.log("Hermione health after using heal from the wizard object", studentWizard.health)