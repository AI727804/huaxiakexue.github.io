module.exports = (temp, product) => {
    let output = temp.replace(/{%ID%}/g, product.id);
    output = output.replace(/{%PRODUCTNAME%}/g, product.name);
    output = output.replace(/{%PRODUCTIMAGE%}/g, product.image);
    output = output.replace(/{%PRODUCTDESCRIPTION%}/g, product.description);
    return output;
  }
