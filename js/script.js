// purchases ticket 
function purchasingTicket(ticketClass, isIncrease) {
    const ticketInput = document.getElementById(ticketClass + '-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    let ticketNewCount = ticketCount;
    if (isIncrease == true) {
        ticketNewCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        ticketNewCount = ticketCount - 1;
    }
    ticketInput.value = ticketNewCount;
    let ticketTotal = 0;
    if (ticketClass == 'fistClass') {
        ticketTotal = ticketNewCount * 150;
    }
    if (ticketClass == 'economy') {
        ticketTotal = ticketNewCount * 100;
    }
    calculateTotalAmount();
}

// total amount calculate 
function calculateTotalAmount() {
    const firstClassQuantity = getTicketClassValue('firstClass');
    const economyQuantity = getTicketClassValue('economy');
    const totalPrice = firstClassQuantity * 150 + economyQuantity * 100;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById("totalPrice").innerText = totalPrice;
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('taxAmount').innerText = tax;
    const totalAmount = totalPrice + tax;
    document.getElementById('total-amount').innerText = totalAmount;
    document.getElementById('totalAmount').innerText = totalAmount;
}

// ticket class value 
function getTicketClassValue(ticketClass) {
    const ticketInput = document.getElementById(ticketClass + '-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}

// book now event handler
document.getElementById("book-now").addEventListener('click', function () {
    const firstClassQuantity = document.getElementById("firstClass-ticket-count").value;
    const economyQuantity = document.getElementById("economy-ticket-count").value;
    if (firstClassQuantity > 0 || economyQuantity > 0) {
        const purchasesArea = document.getElementById("purchase-area");
        purchasesArea.style.display = "none";
        const receiptArea = document.getElementById("receipt-area");
        receiptArea.style.display = "block";
        document.getElementById("firstClass").innerText = firstClassQuantity;
        document.getElementById("economyClass").innerText = economyQuantity;
        calculateTotalAmount();
    }
    else {
        alert("Please buy tickets first");
    }
})