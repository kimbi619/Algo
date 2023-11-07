

const bankAccount =
    {
        customerId: "A10120123",
        accountNumber: "502362145",
        balance: 5000,
        addressLine1: "Parkway Avenue",
        addressLine2: "United States",
        uniqueRegex: /.* /,
        date : new Date("02-02-2023")
    }



function calcFare() {
    const conse = JSON.parse(JSON.stringify(this))
    console.log(conse.date);
}

const bind = calcFare.bind(bankAccount)
bind()