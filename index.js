// this is a function that will get value
function getValue(id) {
    const getNumber = document.getElementById(id).value;
    const getNumberInt = parseInt(getNumber);
    return getNumberInt;
}
// If wrong Input it will remove the all value
function removeValue() {
    document.getElementById('getMoney').value = '';
    document.getElementById('getFoodPrice').value = '';
    document.getElementById('getRentPrice').value = '';
    document.getElementById('getClothesPrice').value = '';

}
// This is calculator button function
document.getElementById('addTotal').addEventListener('click', function () {
    const getIncome = getValue('getMoney');
    const getFood = getValue('getFoodPrice');
    const getRent = getValue('getRentPrice');
    const getClothes = getValue('getClothesPrice');
    const totalExpensesAmount = getFood + getRent + getClothes;
    // if user input the correct value then it will work
    if (getIncome >= 0 && getFood >= 0 && getRent >= 0 && getClothes >= 0 && getIncome > totalExpensesAmount) {
        const totalExpenses = document.getElementById('totalExpenses');
        totalExpenses.innerText = totalExpensesAmount;

        const currentBalance = document.getElementById('currentBalance');
        const getBalance = getIncome - totalExpensesAmount;
        currentBalance.innerText = getBalance;

    }
    // if user input the incorrect calue then it will work
    else if (getIncome < totalExpensesAmount) {
        alert("Income must be greater than Total Expenses")
        removeValue();

    }
    // if user input the incorrect calue then it will work
    else {
        alert('Input number please...!')
        removeValue();
    }


})
// this is save button function
document.getElementById('displaySaveingAmount').addEventListener('click', function () {
    const getSaving = getValue('getSaving');
    const getIncome = getValue('getMoney');
    const getFood = getValue('getFoodPrice');
    const getRent = getValue('getRentPrice');
    const getClothes = getValue('getClothesPrice');
    const totalExpensesAmount = getFood + getRent + getClothes;
    const currentBalance = getIncome - totalExpensesAmount
    const savingAmount = getIncome / 100 * getSaving;
    const remainingBalance = currentBalance - savingAmount;
    // if user input correct value it will work
    if (getSaving > 0 && getSaving < remainingBalance) {
        const currentSavingAmount = document.getElementById('displaySaveing');
        currentSavingAmount.innerText = savingAmount;
        const currentAmountBalance = document.getElementById('displayBalance');
        currentAmountBalance.innerText = remainingBalance
    }
    // if use input incorrect value it will work
    else{
        alert('saving amount must be lower then balace..!')
    }
})