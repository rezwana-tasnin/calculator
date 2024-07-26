(function () {
  const output1 = document.querySelector(".output1");
  const output2 = document.querySelector(".output2");

  const btnInps = document.querySelectorAll(".btn-inp");
  btnInps.forEach(function (btn) {
    btn.addEventListener("click", function () {
      output2.innerHTML = "";
      output1.innerHTML += btn.innerHTML;
    });
  });

  const btnEqual = document.querySelector(".btn-equal");
  btnEqual.addEventListener("click", function () {
    output2.innerHTML = output1.innerHTML;
    output1.innerHTML = eval(output1.innerHTML);
  });

  const btnAC = document.querySelector(".btn-ac");
  btnAC.addEventListener("click", function () {
    output1.innerHTML = "";
    output2.innerHTML = "";
  });

  const btnBackspace = document.querySelector(".btn-backspace");
  btnBackspace.addEventListener("click", function () {
    output2.innerHTML = "";
    output1.innerHTML = output1.innerHTML.substring(
      0,
      output1.innerHTML.length - 1
    );
  });
})();
