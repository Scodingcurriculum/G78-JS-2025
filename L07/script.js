const exchangeRates = {
            USD: {
                EUR: 0.85,
                GBP: 0.75,
            },
            EUR: {
                USD: 1.18,
                GBP: 0.88,
            },
            GBP: {              //Additional Currencies can be added
                USD: 1.33,
                EUR: 1.14,
            }
        };

        function convertCurrency() {
            const amount = parseFloat(document.getElementById("amount").value);
            const fromCurrency = document.getElementById("fromCurrency").value;
            const toCurrency = document.getElementById("toCurrency").value;
            
            if (isNaN(amount) || amount <= 0) {
                document.getElementById("result").innerText = "Please enter a valid amount.";
                return;
            }

            if (fromCurrency === toCurrency) {
                document.getElementById("result").innerText = `No conversion needed. ${amount} ${fromCurrency} is equal to ${amount} ${toCurrency}.`;
                return;
            }

            const rate = exchangeRates[fromCurrency][toCurrency];
            const convertedAmount = amount * rate;
            
            document.getElementById("result").innerText = `${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}.`;
        }