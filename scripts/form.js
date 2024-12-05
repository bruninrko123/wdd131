const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];




  function productTemplate(product){

    return `<option value="${product.id}"> ${product.name}</option>`;

  };

  function displayProducts(products){

    const select = document.querySelector("#productName");

    const productOptions = products.map(productTemplate);

    select.innerHTML = `<option value="">Please Select &#9662;</option>` + productOptions.join("");

    products.map()
  };



  displayProducts(products);