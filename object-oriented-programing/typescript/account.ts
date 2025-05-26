
interface AccountShape{
    id: number,
    name: string,
    balance: number ,
    deposit: (amount: number)  => void,
    withDraw: (amount: number)  => number | null
    transfer: (toAcount:AccountShape ,amount: number)  => AccountShape | null
}
const Account = function (id: number, name: string, balance: number = 0): AccountShape {
   this.id = id,
   this.name = name,
   this.balance = balance

   this.deposit = (amount: number)  => {

    this.balance = this.balance + amount
   }

   this.whitDraw = (amount: number)  => {

    if (this.balance >= amount) {
        this.balance -= amount
        return amount
    } else { 
        console.log ('No tiene suficientes fondos')
    }

    this.balance -= amount
   }


   this.transfer = (toAcount: AccountShape ,amount: number) => {
    const cash = this.whitDraw(amount)
    
    if(cash) {
        toAcount.deposit(amount)
        return toAcount
    }

    return null
   }

   return this
}

const acc1 : AccountShape = new (Account as any)(1, 'Mari', 10000)
const acc2 : AccountShape = new  (Account as any)(2, 'Richi', 1000)

acc1.deposit (1000)
acc1.transfer(acc2, 5000)
console.log(acc1)
console.log(acc2)

