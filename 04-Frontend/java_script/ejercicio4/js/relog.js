const d = document;
let relogTiempo;

export function relog() {
  d.addEventListener("click", (e) => {
    if (e.target.matches("#btn-on")) {
      relogTiempo = setInterval(() => {
        let relogHour = new Date().toLocaleString();
        const R =d.querySelector("#relog")
        R.textContent= relogHour

        e.target.disabled = true;
      }, 1000);
    }
    if (e.target.matches("#btn-off")) {
      d.querySelector("#btn-on").disabled = false;
      clearInterval(relogTiempo);
      const R =d.querySelector("#relog")
        R.textContent= ""
    }
  });
}
