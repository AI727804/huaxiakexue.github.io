module.exports = (temp, product) => {
    let output = temp.replace(/{%ID%}/g, product.id);
    output = output.replace(/{%PRODUCTNAME%}/g, product.dynastyName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%QUANTITY%}/g, product.details);
    output = output.replace(/\'{%PIEDATA1%}\'/g, JSON.stringify(product.pieData1));
    output = output.replace(/\'{%PIEDATA2%}\'/g, JSON.stringify(product.pieData2));
    output = output.replace(/\'{%MAPDATA1%}\'/g, JSON.stringify(product.mapData1));
    output = output.replace(/\'{%BARDATA1%}\'/g, JSON.stringify(product.barData1));
    output = output.replace(/\'{%LINEDATA1%}\'/g, JSON.stringify(product.lineData1));
    return output;
  }
