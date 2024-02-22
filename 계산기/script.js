function calculate() {
    var salary = parseFloat(document.getElementById('salary').value);
    var assetIncome = parseFloat(document.getElementById('assetIncome').value);
    var expenses = parseFloat(document.getElementById('expenses').value);
    var loan = parseFloat(document.getElementById('loan').value);

    var actualIncome = salary + assetIncome - expenses - (loan * 0.1);
    var loanInterest = loan * 0.1;

    var resultElement = document.getElementById('result');
    resultElement.style.color = 'red';
    resultElement.innerHTML = '실제 받는 돈: ' + actualIncome.toFixed(0) + '만원을 받으세요!' + '<br>' + '대출이자: ' + loanInterest.toFixed(0) + '만원입니다.';
}
