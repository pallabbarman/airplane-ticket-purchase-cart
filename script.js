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
    const tax = Math.round(totalPrice * 0.1);
    document.getElementById('tax-amount').innerText = tax;
    const totalAmount = totalPrice + tax;
    document.getElementById('total-amount').innerText = totalAmount;
}

// ticket class value 
function getTicketClassValue(ticketClass) {
    const ticketInput = document.getElementById(ticketClass + '-ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    return ticketCount;
}
