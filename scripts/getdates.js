let lastModified = document.lastModified;

document.getElementById("lastModified").innerText = `Last modification: ${lastModified}`


let currentDate = new Date();

let year = currentDate.getFullYear();

let footer = document.querySelector("footer");

let firstP = footer.firstElementChild;

firstP.innerHTML = `&copy; ${year} Gina Ahumada<br>Colombia<br><img src="images/Colombia_flag.svg" alt="Colombia Flag" width="15" height="25">`