function Calculator() {
  this.display = document.querySelector(".display");
  this.btnClear = document.querySelector(".btn-clear");

  this.start = () => {
    this.buttons();
    this.pressEnter();
  };

  this.buttons = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) {
        this.btnToDisplay(el.innerText);
      }

      if (el.classList.contains("btn-clear")) {
        this.clearDisplay();
      }

      if (el.classList.contains("btn-del")) {
        this.delete();
      }

      if (el.classList.contains("btn-eq")) {
        this.calculate();
      }
    });
  };

  this.btnToDisplay = (value) => {
    this.display.value += value;
  };

  this.clearDisplay = () => {
    this.display.value = "";
  };

  this.delete = () => {
    this.display.value = this.display.value.slice(0, -1);
  };

  this.pressEnter = () => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        this.calculate();
      }
    });
  };

  this.calculate = () => {
    let values = this.display.value.toString();

    try {
      values = eval(values);

      if (!values) {
        alert("Conta inválida.");
        return;
      }

      this.display.value = String(values);
    } catch (e) {
      alert("Conta inválida.");
      return;
    }
  };
}

const calculator = new Calculator();
calculator.start();
