const form = document.querySelector("#form-habits")
const nlwsetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwsetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso 🛑")
    return
  }

  alert("Adicionado com sucesso ✅")
  nlwsetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwsetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwsetup.setData(data)
nlwsetup.load()
