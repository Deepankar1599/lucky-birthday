const dateofbirth = document.body.querySelector("#date-of-birth")
const luckyNumber = document.body.querySelector("#lucky-number")
const checkButton = document.body.querySelector("#check-btn")
const output = document.body.querySelector("#output-container")


function checklucky(dobsum,num) {
  console.log(num)
  if (dobsum % num === 0) {
    // console.log("Your birthday is Lucky 👌👌😊")
    output.innerText = "Your birthday is Lucky 👌👌😊"
  }
  else {
    // console.log("Your birthady is not lucky, sorry ! 😶🫡")
    output.innerText =  " Your birthady is not lucky, sorry ! 😶🫡"
  }

}

function checkbdaylucky() {
  let date = dateofbirth.value
  let luckyNo=luckyNumber.value

  let dobSum = dosum(date)
  checklucky(dobSum,luckyNo)

}

function dosum(dob) {
  let val = dob.replaceAll("-", "")
  let sum = 0
  for (let i = 0; i < val.length; i++) {
    sum = sum + Number(val[i])
  }
  console.log(sum)
  return sum
}

checkButton.addEventListener('click', checkbdaylucky)