// It is same as call the main difference being it takes array of parameters
const wizard={
    name:"Severus",
    health:05,
    heal(num1,num2){
        return this.health+= num1 + num2;
    }
}
const studentWizard={
    name:"Hermione",
    health : 60,
}
console.log("Hermione health before using heal from the wizard object", studentWizard.health)

// The only difference
wizard.heal.apply(studentWizard,[35,65])
console.log("Hermione health after using heal from the wizard object", studentWizard.health)