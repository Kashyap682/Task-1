var productsArray = [];

let p = fetch('https://s3.amazonaws.com/open-to-cors/assignment.json')

p.then((response) => {
    return response.json();
}).then((data) => {
    //console.log(data.products);
    for (i in data.products){
        //console.log(data.products[i].title);
        productsArray.splice(i, 0, [data.products[i].title, data.products[i].price, parseInt(data.products[i].popularity)]);
    }
    productsArray.sort(function(a,b){return b[2]-a[2]});

    const table = document.getElementById("Product Table");

    // console.log(productsArray[0][0]);
    for (j in productsArray){
        const row = table.insertRow();
        const titleCell = row.insertCell(0);
        const priceCell = row.insertCell(1);
        //const popularityCell = row.insertCell(2);

        titleCell.innerHTML = productsArray[j][0];
        priceCell.innerHTML = productsArray[j][1];
        //popularityCell.innerHTML = productsArray[j][2];
    }
})