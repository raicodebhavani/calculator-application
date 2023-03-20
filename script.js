let display = document.getElementById("display");
let value = display.innerText;

let buttons = Array.from(document.getElementsByClassName("button"));
buttons.map((button) => {
  button.addEventListener("click", (event) => {
    // console.log("clicked");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.innerText);
    switch (event.target.innerText) {
      case "c":
        display.innerText = "";
        break;
      case "←":
        display.innerText = display.innerText.slice(0, -1);
        break;
      case "=":
        if (
          display.innerText === "" ||
          display.innerText === "+" ||
          display.innerText === "-" ||
          display.innerText === "*" ||
          display.innerText === "/"
        ) {
          alert("enter a valid number");
          display.innerText = "";
        } else {
          // display.innerText = eval(display.innerText);
          display.innerText = eval(display.innerText);
        }

        //   case "=":
        //     if (true) {
        //       display.innerText = eval(display.innerText);
        //     } else if (
        //       display.innerText === undefined ||
        //       display.innerText === ""
        //     ) {
        //       display.innerText = 0;
        //       display.innerText = alert("enter the correct number");
        //     }

        // try {
        //   display.innerText = eval(display.innerText);
        // } catch {
        //     display.innerText = alert("enter the correct number");
        // }
        break;
      default:
        display.innerText += event.target.innerText;
    }
  });
});

// console.log(buttons);
