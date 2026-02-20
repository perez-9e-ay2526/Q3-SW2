// Function for Discount button

function discount(){
    let varBudget = document.getElementById("budget").value;
    const varDisc = Number(varBudget*0.2);

    document.getElementById("discPrice").value=varDisc.toFixed(2);
}