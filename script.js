const binaryDiv = document.querySelector('#binary')
const octDiv = document.querySelector('#oct')
const decimalDiv = document.querySelector('#decimal')
const hexDiv = document.querySelector('#hex')
const allBases = document.querySelectorAll('.base')

const decimalValue = document.getElementById("decimal_value")
const octalValue = document.getElementById("octal_value")
const hexadeciamalValue = document.getElementById("hexadecimal_value")
const binaryValue = document.getElementById("binary_value")

const baseOct = document.getElementById("base_value_oct")
const baseDecimal = document.getElementById("base_value_decimal")
const baseBinary = document.getElementById("base_value_binary")
const baseHex = document.getElementById("base_value_hex")

allBases.forEach(e => {
  e.style.display = 'none'
})


function change_base(selectedBase){

  if(selectedBase == 'binary'){
    decimalDiv.style.display = 'none'
    octDiv.style.display = 'none'
    hexDiv.style.display = 'none'
    binaryDiv.style.display = 'flex'

  }else if(selectedBase == 'hex'){
    decimalDiv.style.display = 'none'
    octDiv.style.display = 'none'
    hexDiv.style.display = 'flex'
    binaryDiv.style.display = 'none'

  }else if(selectedBase == 'decimal'){
    decimalDiv.style.display = 'flex'
    octDiv.style.display = 'none'
    hexDiv.style.display = 'none'
    binaryDiv.style.display = 'none'
    
  }else{
    decimalDiv.style.display = 'none'
    octDiv.style.display = 'flex'
    hexDiv.style.display = 'none'
    binaryDiv.style.display = 'none'

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
    }else{
      baseBinary.style.color = 'red'
    }
  }else if(selectedBase == 'decimal'){
    if(baseDecimal.value.match(/^[0123456789]+$/)){
      let decimal = parseInt(baseDecimal.value)
      let binary = decimal.toString(2)
      let octal = decimal.toString(8)
      let hex = decimal.toString(16)
  
      binary_value_decimal.value = binary
      octal_value_decimal.value = octal
      hexadecimal_value_decimal.value = hex
    }else{
      baseDecimal.style.color = 'red'
    }
  }else if(selectedBase == 'hex'){
    if(baseHex.value.match(/^[0123456789ABCDEFabcedf]+$/)){
      let hex = baseHex.value
      let decimal = parseInt(hex, 16)
      let octal = parseInt(hex, 16).toString(8)
      let binary = parseInt(hex, 16).toString(2)
  
      decimal_value_hex.value = decimal
      binary_value_hex.value = binary
      octal_value_hex.value = octal
    }else{
      baseHex.style.color = 'red'
    }
   

  }else{
    if(baseDecimal.value.match(/^[01234567]+$/)){
      let octal = baseOct.value
      let decimal = parseInt(octal, 8)
      let binary = parseInt(octal, 8).toString(2)
      let hex = parseInt(octal, 8).toString(16)

      decimal_value_octal.value = decimal
      binary_value_octal.value = binary
      hexadecimal_value_octal.value = hex
    }else{
      baseOct.style.color = 'red'
    }
    
  }

}
