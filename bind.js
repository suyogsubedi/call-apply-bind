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
// Bind here instead of running the value to us, stores it as a function which we can invoke whenever we want 
const healHermione=wizard.heal.bind(studentWizard,35)
healHermione()

console.log("Hermione health after using heal from the wizard object", studentWizard.health)