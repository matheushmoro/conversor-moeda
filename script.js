const convertButton = document.querySelector('.convert-button')
const currencySelectFrom = document.querySelector('.currency-select-from')
const currencySelectTo = document.querySelector('.currency-select-to')


function convertValues() {
    const inputCurrencyValue = document.querySelector('.input-currency').value
    const inputCurrencyNumber = Number(inputCurrencyValue.replace(/\./g, '').replace(',', '.')) || 0
    const currencyValueToConvert = document.querySelector('.currency-value-to-convert')
    const currencyValueConverted = document.querySelector('.currency-value')

    const dolarToday = 5.2
    const euroToday = 6.2
    const libraToday = 7.2
    const yeneToday = 0.035
    const bitcoinToday = 300000
    let valueInReal = inputCurrencyNumber

    if (currencySelectFrom.value == 'dolar') {
        valueInReal = inputCurrencyNumber * dolarToday
    }

    if (currencySelectFrom.value == 'euro') {
        valueInReal = inputCurrencyNumber * euroToday
    }

    if (currencySelectFrom.value == 'libra') {
        valueInReal = inputCurrencyNumber * libraToday
    }

    if (currencySelectFrom.value == 'yene') {
        valueInReal = inputCurrencyNumber * yeneToday
    }

    if (currencySelectFrom.value == 'bitcoin') {
        valueInReal = inputCurrencyNumber * bitcoinToday
    }

    if (currencySelectFrom.value == 'real') {
        valueInReal = inputCurrencyNumber
    }

    if (currencySelectTo.value == 'dolar') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: "currency",
            currency: "USD"
        }).format(valueInReal / dolarToday)
    }

    if (currencySelectTo.value == 'euro') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(valueInReal / euroToday)
    }

    if (currencySelectTo.value == 'libra') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(valueInReal / libraToday)
    }

    if (currencySelectTo.value == 'yene') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        }).format(valueInReal / yeneToday)
    }

    if (currencySelectTo.value == 'bitcoin') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(valueInReal / bitcoinToday)
    }

    if (currencySelectTo.value == 'real') {
        currencyValueConverted.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(valueInReal)
    }

    if (currencySelectFrom.value == 'real') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(inputCurrencyNumber)
    }

    if (currencySelectFrom.value == 'dolar') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(inputCurrencyNumber)
    }

    if (currencySelectFrom.value == 'euro') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'EUR'
        }).format(inputCurrencyNumber)
    }

    if (currencySelectFrom.value == 'libra') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-GB', {
            style: 'currency',
            currency: 'GBP'
        }).format(inputCurrencyNumber)
    }

    if (currencySelectFrom.value == 'yene') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('ja-JP', {
            style: 'currency',
            currency: 'JPY'
        }).format(inputCurrencyNumber)
    }

    if (currencySelectFrom.value == 'bitcoin') {
        currencyValueToConvert.innerHTML = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'BTC',
            minimumFractionDigits: 2,
            maximumFractionDigits: 8
        }).format(inputCurrencyNumber)
    }
}

function changeCurrencyTo() {
    const currencyNameTo = document.querySelector('.currency-name-to')
    const currencyImageTo = document.querySelector('.currency-img-to')

    if (currencySelectTo.value == 'dolar') {
        currencyNameTo.innerHTML = 'Dólar'
        currencyImageTo.src = 'assets/dolar.png'
    }

    if (currencySelectTo.value == 'euro') {
        currencyNameTo.innerHTML = 'Euro'
        currencyImageTo.src = 'assets/euro.png'
    }

    if (currencySelectTo.value == 'libra') {
        currencyNameTo.innerHTML = 'Libra'
        currencyImageTo.src = 'assets/libra.png'
    }

    if (currencySelectTo.value == 'yene') {
        currencyNameTo.innerHTML = 'Iene'
        currencyImageTo.src = 'assets/yene.png'
    }

    if (currencySelectTo.value == 'bitcoin') {
        currencyNameTo.innerHTML = 'Bitcoin'
        currencyImageTo.src = 'assets/bitcoin.png'
    }

    if (currencySelectTo.value == 'real') {
        currencyNameTo.innerHTML = 'Real'
        currencyImageTo.src = 'assets/real.png'
    }

    convertValues()
}

function changeCurrencyFrom() {
    const currencyNameFrom = document.querySelector('.currency-name-from')
    const currencyImageFrom = document.querySelector('.currency-img-from')

    if (currencySelectFrom.value == 'dolar') {
        currencyNameFrom.innerHTML = 'Dólar'
        currencyImageFrom.src = 'assets/dolar.png'
    }

    if (currencySelectFrom.value == 'euro') {
        currencyNameFrom.innerHTML = 'Euro'
        currencyImageFrom.src = 'assets/euro.png'
    }

    if (currencySelectFrom.value == 'libra') {
        currencyNameFrom.innerHTML = 'Libra'
        currencyImageFrom.src = 'assets/libra.png'
    }

    if (currencySelectFrom.value == 'yene') {
        currencyNameFrom.innerHTML = 'Iene'
        currencyImageFrom.src = 'assets/yene.png'
    }

    if (currencySelectFrom.value == 'bitcoin') {
        currencyNameFrom.innerHTML = 'Bitcoin'
        currencyImageFrom.src = 'assets/bitcoin.png'
    }

    if (currencySelectFrom.value == 'real') {
        currencyNameFrom.innerHTML = 'Real'
        currencyImageFrom.src = 'assets/real.png'
    }

    convertValues()
}

currencySelectTo.addEventListener('change', changeCurrencyTo)
currencySelectFrom.addEventListener('change', changeCurrencyFrom)

convertButton.addEventListener('click', convertValues)

changeCurrencyFrom()
changeCurrencyTo()