document.getElementById('economy-ticket-increase').addEventListener('click', function () {
    const ticketInput = document.getElementById('ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    const ticketNewCount = ticketCount + 1;
    ticketInput.value = ticketNewCount;
    // ticketTotal = ticketNewCount * 100;
});
document.getElementById('economy-ticket-decrease').addEventListener('click',function () {
    const ticketInput = document.getElementById('ticket-count');
    const ticketCount = parseInt(ticketInput.value);
    const ticketNewCount = ticketCount - 1;
    ticketInput.value = ticketNewCount;
    // ticketTotal = ticketNewCount * 100;
})