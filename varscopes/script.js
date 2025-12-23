var name3 = "Mahes"
let age = 25;
const city = "Paramakudi";

let result = document.getElementById("op");

function globalscope(){
    result.innerHTML = `<p>Global Scoped Variables:</p> <br> 
    Name: ${name3} <br>
    Age: ${age} <br>
    City: ${city}`;
}

function functionalscope(){
    let role = "Interior";
    let income = "Rs.50,000 Per Annum";
    result.innerHTML = `<p>These are the Functional Scoped Variables:</p> <br>
    Role: ${role} <br>
    Income: ${income}`;
}

function blockscope(){
    // let rasidob = "24.01.2000";
    // let mahesdob = "21.10.2004";
    // result.innerHTML = `<p>Displaying the DOB within the Blocks:</p> <br>
    // RasiDOB: ${rasidob} <br>
    // MahesDOB: ${mahesdob}`;
   if (true) {
        let blockVar = "I am the block scoped variable";
        var notaBlockvar = "I am the global scoped variable. I escape the block";

        result.innerText = "Inside Block\n" + blockVar + "\n" + notaBlockvar; //using concatenation
      }
}

function innerhtmlvstext(){
     result.innerHTML = "<b>InnerHTML:</b> <br> <b>This text is Bold</b> <br><br>";

      result.innerText += "InnerText:\n <b>This will NOT be bold</b>";
}
