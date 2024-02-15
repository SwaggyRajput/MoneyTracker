let expenses =[];
let totalAmount = 0;

const categorySelect = document.getElementById('category-select')
const amountInput = document.getElementById('amount-input')
const dateInput = document.getElementById('date-input')
const addBtn = document.getElementById('add-btn')
const expenseTableBody = document.getElementById('expense-table-body')
const totalAmountCell = document.getElementById('total-amount')
const totalAmountExpense=document.getElementById('totalexpense')

addBtn.addEventListener('click', function(){
    const category = categorySelect.value;
    const amount = Number(amountInput.value);
    const date= dateInput.value;

    if(category === '' || category==='SELECT'){
        alert('please select a category');
        return;
    }
    if(isNaN(amount) || amount <= 0){
        alert('please enter a valid amount');
        return;
    }
    if(date ===''){
        alert('please select a date');
        return;
    }
    
    expenses.push({category,amount,date})
    document.getElementById('total').innerHTML="Total:"
    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;
    totalAmountExpense.textContent=totalAmount

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;
        totalAmountExpense.textContent=totalAmount;

        expenseTableBody.removeChild(newRow);
    })
    const expense= expenses[expenses.length - 1];
    categoryCell.textContent=expense.category;
    AmountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);

});
for(const exepense of expenses){
    totalAmount += amount;
    totalAmountCell.textContent=totalAmount;
    totalAmountExpense.textContent=totalAmount;

    const newRow = expenseTableBody.insertRow();

    const categoryCell = newRow.insertCell();
    const AmountCell = newRow.insertCell();
    const dateCell = newRow.insertCell();
    const deleteCell = newRow.insertCell();

    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function(){
        expenses.splioce(expenses.indexOf(expense),1);

        totalAmount -= expense.amount;
        totalAmountCell.textContent = totalAmount;
        totalAmountExpense.textContent=totalAmount;
        expenseTableBody.removeChild(newRow);
    })
    
   
    const expense= expenses[expenses.length - 1];
    categoryCell.textContent=expense.category;
    AmountCell.textContent=expense.amount;
    dateCell.textContent=expense.date;
    deleteCell.appendChild(deleteBtn);
}


deleteallBtn.addEventListener('click', function(){
         
    var rowCount = expenseTableBody.rows.length;
    for (var i = rowCount-1; i >= 0; i--) {
        expenseTableBody.deleteRow(i);
    }
    // document.getElementById('expensetable').deleteTFoot();
    // document.getElementById('expensetable').deleteRow('total-amount-row')
    document.getElementById('total').innerHTML=""
    document.getElementById('total-amount').innerHTML=""
    document.getElementById('totalexpense').innerHTML="0"

})