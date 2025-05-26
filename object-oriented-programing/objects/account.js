
function Account (id, name, balance = 0) {
   this.id = id,
   this.name = name,
   this.balance = balance

   this.deposit = (amount)  => {

    this.balance = this.balance + amount
   }

   this.whitDraw = (amount)  => {

    if (this.balance >= amount) {
        this.balance -= amount
        return amount
    } else { 
        console.log ('No tiene suficientes fondos')
    }

    this.balance -= amount
   }


   this.transfer = (toAcount ,amount) => {
    const cash = this.whitDraw(amount)
    
    if(cash) {
        toAcount.deposit(amount)
        return toAcount
    }

    return null
   }

   return this
}

const acc1 = new Account(1, 'Mari', 10000)
const acc2 = new Account(2, 'Richi', 1000)

acc1.deposit (1000)
acc1.transfer(acc2, 5000)
console.log(acc1)
console.log(acc2)

