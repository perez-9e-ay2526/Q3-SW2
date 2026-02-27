function discount(){
    let varBudget = document.getElementById("budget").value;
    let varDisc = Number(varBudget * 0.2);

    document.getElementById("disc-area").innerHTML=`
    
        <div class="container bg-secondary text-light text-center mt-3 p-5">
            <h4>Recommended Brands: </h4><br></br>
            
            <button class="btn btn-info">Acer</button>
            <button class="btn btn-info">Lenovo</button>
            <button class="btn btn-info">ASUS</button>
            <br></br>

            <p>Eligible Discount:<span class="bg-danger">${varDisc}</span></p>
        </div>`;


}

function store(){

    document.getElementById("store-area").innerHTML=`
    
        <div class="container bg-secondary text-light mt-3 p-5">
            <h4 class="text-center">Store Location:</h4><br></br>
        
            <img src="logo.png" style="width: 200px;"></img><br></br>
            <p>Quezon City: SM North Edsa, VStore, Trinoma Mall, Gateway Mall, and SM Fairview</p>
            <p>Mandaluyong City: SM Megamall and SM Cherry Shaw</p>
            <p>San Juan City: VMall Greenhills and GH Mall</p>
            <p>Taguig City: Market! Market!</p>

    </div>`;
    
}
