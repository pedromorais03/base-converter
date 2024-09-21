const themeToggle = document.getElementById('theme-toggle')
const switchImage = document.querySelector('.switch-image')
const switchImageDiv = document.querySelector('.switch-image-div')

const binaryDiv = document.querySelector('#binary')
const octDiv = document.querySelector('#oct')
const decimalDiv = document.querySelector('#decimal')
const hexDiv = document.querySelector('#hex')
const operationsDiv = document.querySelector('#operations')
const allBases = document.querySelectorAll('.base')

const decimalValue = document.getElementById("decimal_value")
const octalValue = document.getElementById("octal_value")
const hexadeciamalValue = document.getElementById("hexadecimal_value")
const binaryValue = document.getElementById("binary_value")

const baseOct = document.getElementById("base_value_oct")
const baseDecimal = document.getElementById("base_value_decimal")
const baseBinary = document.getElementById("base_value_binary")
const baseHex = document.getElementById("base_value_hex")

const selectOperation = document.getElementById("operation_select")
const selectBase = document.getElementById("base_select")

const spanMessage = document.querySelector(".message")

let theme = localStorage.getItem("theme")

if(theme == 'dark'){
  document.body.classList.add('dark-theme')
  switchImage.src = './img/sun.png'
  themeToggle.checked = true
}else{
   switchImage.src = './img/moon.png'
}

allBases.forEach(e => {
  e.style.display = 'none'
})

themeToggle.addEventListener('change', function() {
  document.body.classList.toggle('dark-theme', this.checked)
  if(this.checked){
    switchImage.src = './img/sun.png'
    localStorage.setItem('theme', 'dark')
  }else{
    switchImage.src = './img/moon.png'
    localStorage.setItem('theme', 'light')
  }
})

function change_base(selectedBase){

  if(selectedBase == 'binary'){
    decimalDiv.style.display = 'none'
    octDiv.style.display = 'none'
    hexDiv.style.display = 'none'
    binaryDiv.style.display = 'flex'
    operationsDiv.style.display = 'none'

  }else if(selectedBase == 'hex'){
    decimalDiv.style.display = 'none'
    octDiv.style.display = 'none'
    hexDiv.style.display = 'flex'
    binaryDiv.style.display = 'none'
    operationsDiv.style.display = 'none'

  }else if(selectedBase == 'decimal'){
    decimalDiv.style.display = 'flex'
    octDiv.style.display = 'none'
    hexDiv.style.display = 'none'
    binaryDiv.style.display = 'none'
    operationsDiv.style.display = 'none'
    
  }else if(selectedBase == 'oct'){
    decimalDiv.style.display = 'none'
    octDiv.style.display = 'flex'
    hexDiv.style.display = 'none'
    binaryDiv.style.display = 'none'
    operationsDiv.style.display = 'none'

  }else if(selectedBase == 'operations'){
    decimalDiv.style.display = 'none'
    octDiv.style.display = 'none'
    hexDiv.style.display = 'none'
    binaryDiv.style.display = 'none'
    operationsDiv.style.display = 'flex'
  }

} 

function convert(selectedBase){
  if(selectedBase == 'binary'){
    if(baseBinary.value.match(/^[01]+$/)){
      let binary = baseBinary.value
      let decimal = parseInt(binary, 2)
      let octal = parseInt(binary, 2).toString(8)
      let hex = parseInt(binary, 2).toString(16)

      decimal_value_binary.value = decimal
      octal_value_binary.value = octal
      hexadecimal_value_binary.value = hex

      baseBinary.style.color = 'black'
    }else{
      baseBinary.style.color = 'red'
    }
  }else if(selectedBase == 'decimal'){
    if(baseDecimal.value.match(/^[0-9]+$/)){
      let decimal = parseInt(baseDecimal.value)
      let binary = decimal.toString(2)
      let octal = decimal.toString(8)
      let hex = decimal.toString(16)

      binary_value_decimal.value = binary
      octal_value_decimal.value = octal
      hexadecimal_value_decimal.value = hex

      baseDecimal.style.color = 'black'
    }else{
      baseDecimal.style.color = 'red'
    }
  }else if(selectedBase == 'hex'){
    if(baseHex.value.match(/^[0-9A-Fa-f]+$/)){
      let hex = baseHex.value
      let decimal = parseInt(hex, 16)
      let octal = parseInt(hex, 16).toString(8)
      let binary = parseInt(hex, 16).toString(2)

      decimal_value_hex.value = decimal
      binary_value_hex.value = binary
      octal_value_hex.value = octal

      baseHex.style.color = 'black'
    }else{
      baseHex.style.color = 'red'
    }
   

  }else{
    if(baseOct.value.match(/^[0-7]+$/)){
      let octal = baseOct.value
      let decimal = parseInt(octal, 8)
      let binary = parseInt(octal, 8).toString(2)
      let hex = parseInt(octal, 8).toString(16)

      decimal_value_octal.value = decimal
      binary_value_octal.value = binary
      hexadecimal_value_octal.value = hex

      baseOct.style.color = 'black'
    }else{
      baseOct.style.color = 'red'
    }
    
  }

}

function calc(){
  let n1 = 0
  let n2 = 0
  let result = 0

  if(selectBase.value == '' || selectOperation.value == '' || first_number.value == '' || second_number.value == ''){
    spanMessage.innerText = 'Please insert both numbers and select your base and your operation'
    spanMessage.style.color = 'red'
    spanMessage.style.display = 'block'
  }else{
    spanMessage.style.display = 'none'
  }


    
  if(selectBase.value == 'binary'){
    n1 = parseInt(first_number.value, 2)
    n2 = parseInt(second_number.value, 2)

    result = 0
    if(selectOperation.value == 'sum'){
      result = (n1 + n2).toString(2)
    }else if(selectOperation.value == 'sub'){
      result = (n1 - n2).toString(2)
    }
    result_operation.value = result
  }else if(selectBase.value == 'octal'){
    n1 = parseInt(first_number.value, 8)
    n2 = parseInt(second_number.value, 8)

    result = 0
    if(selectOperation.value == 'sum'){
      result = (n1 + n2).toString(8)
    }else if(selectOperation.value == 'sub'){
      result = (n1 - n2).toString(8)
    }
    result_operation.value = result
  }else if(selectBase.value == 'hex'){
    n1 = parseInt(first_number.value, 16)
    n2 = parseInt(second_number.value, 16)

    result = 0
    if(selectOperation.value == 'sum'){
      result = (n1 + n2).toString(16)
    }else if(selectOperation.value == 'sub'){
      result = (n1 - n2).toString(16)
    }
    result_operation.value = result

  }else if(selectBase.value == 'decimal'){
    n1 = parseInt(first_number.value)
    n2 = parseInt(second_number.value)

    result = 0
    if(selectOperation.value == 'sum'){
      result = (n1 + n2)
    }else if(selectOperation.value == 'sub'){
      result = (n1 - n2)
    }
    result_operation.value = result
  }

}