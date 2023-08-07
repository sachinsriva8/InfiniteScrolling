/**
 * @step1 create  divs within content for name email and body for rendring data
 * @step2 Make body div  text overflow ellipses.
 * @step3 Initially fetch 9 data. Therafter fetch every 9 data when page scroll to window end.
 * @step4 Use scroll event on window to call fetch function to render 9 data again and again.
 */

let container = document.getElementById("flx");
// console.log(container);
let i = 0;
fetch("https://jsonplaceholder.typicode.com/comments")
  .then((e) => e.json())
  .then((data) => {
    // console.log(data);
    for (i; i < 9; i++) {
      let con = document.createElement("div");
      let id = document.createElement("div");
      id.className = "id";
      id.innerText = data[i].id;
      let nm = document.createElement("div");
      nm.className = "nme";
      nm.innerText = data[i].name;
      let bdy = document.createElement("p");
      bdy.className = "bdy";
      bdy.innerText = data[i].body;
      con.className = "content";
      con.append(id);
      con.append(nm);
      con.append(bdy);
      container.append(con);
    }
  });

function pge() {
  fetch("https://jsonplaceholder.typicode.com/comments")
    .then((e) => e.json())
    .then((data) => {
      // console.log(data);
      let j = i + 9;
      for (i; i < j; i++) {
        console.log(data);
        let con = document.createElement("div");
        let id1 = document.createElement("div");
        id1.className = "id";
        id1.innerText = data[i].id;
        let nm = document.createElement("div");
        nm.className = "nme";
        nm.innerText = data[i].name;
        let bdy = document.createElement("p");
        bdy.className = "bdy";
        bdy.innerText = data[i].body;
        con.className = "content";
        con.append(id1);
        con.append(nm);
        con.append(bdy);
        container.append(con);
      }
    });
}

window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    pge();
    // console.log("scroll event");
  }
});
pge();
