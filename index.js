const http = require('http');
const fs = require('fs');
const url = require('url');
const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const replaceTemplate = require('./modules/replaceTemplate');
const replaceTemplateProduct = require('./modules/replaceTemplateProduct');
const animation_js = fs.readFileSync('./modules/animation.js', 'utf-8');
const chart_js = fs.readFileSync('./modules/chart.js', 'utf-8');
const timeaxis_js = fs.readFileSync('./modules/timeaxis.js', 'utf-8');

const templateOverview = fs.readFileSync('./templates/template-overview.html', 'utf-8');
const templateCard = fs.readFileSync('./templates/template-card.html', 'utf-8');
const templateDynasty = fs.readFileSync('./templates/template-dynasty.html', 'utf-8');
const templateProduct = fs.readFileSync('./templates/template-product.html', 'utf-8');
const templateTotal = fs.readFileSync('./templates/template-total.html', 'utf-8');
const templateTimeaxis = fs.readFileSync('./templates/template-timeaxis.html', 'utf-8');

const Data = JSON.parse(fs.readFileSync('./json/Data.json', 'utf-8'));
const pData = JSON.parse(fs.readFileSync('./json/DataProduct.json', 'utf-8'));
const tData = JSON.parse(fs.readFileSync('./json/DataTotal.json', 'utf-8'));
const style_css = fs.readFileSync('./css/style.css', 'utf-8');
const navbar_css = fs.readFileSync('./css/navbar.css', 'utf-8');
const card_css = fs.readFileSync('./css/card.css', 'utf-8');
const banner_css = fs.readFileSync('./css/banner.css', 'utf-8');
const dynasty_css = fs.readFileSync('./css/dynasty.css', 'utf-8');
const product_css = fs.readFileSync('./css/product.css', 'utf-8');

const server = http.createServer(function (request, response) {
    const { query, pathname } = url.parse(request.url, true);
    if (pathname === '/' || pathname === '/overview') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        const cardsHtml = Data
            .map((el) => replaceTemplate(templateCard, el))
            .join('');
        let output = templateOverview.replace('{%PRODUCT_CARDS%}', cardsHtml);
        output = output.replace('</head>', `<style>${style_css}</style></head>`);
        output = output.replace('</head>', `<style>${navbar_css}</style></head>`);
        output = output.replace('</head>', `<style>${card_css}</style></head>`);
        output = output.replace('</head>', `<style>${banner_css}</style></head>`);
        output = output.replace('</body>', `<script>${animation_js}</script></body>`);
        response.end(output);
    } else if (pathname === '/dynasty') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        const dynastyData = Data[query.id];
        let output = replaceTemplate(templateDynasty, dynastyData);
        output = output.replace('</head>', `<style>${style_css}</style></head>`);
        output = output.replace('</head>', `<style>${navbar_css}</style></head>`);
        output = output.replace('</head>', `<style>${dynasty_css}</style></head>`);
        let chartJS = replaceTemplate(chart_js, dynastyData);
        output = output.replace('</body>', `<script type="module">${chartJS}</script></body>`);
        response.end(output);
        // console.log(output);
    } else if (pathname === '/product') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        const productData = pData[query.id];
        let output = replaceTemplateProduct(templateProduct, productData);
        output = output.replace('</head>', `<style>${style_css}</style></head>`);
        output = output.replace('</head>', `<style>${navbar_css}</style></head>`);
        output = output.replace('</head>', `<style>${product_css}</style></head>`);
        response.end(output);
    } else if (pathname === '/data') {
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.end(templateTotal);
    }else if (pathname === '/time-axis') {
        // 在这里写时间轴的代码
    } else if (pathname === '/ai') {
        response.writeHead(302, {
            'Location': 'http://localhost:3000'
        });
            
        response.end();
    } else if (pathname === '/main') {
        response.writeHead(302, {
            'Location': 'http://localhost:8000'
        });
            
        response.end();
    }
    else if (pathname === '/timeaxis') {
        response.writeHead(302, {
            'Location': 'http://localhost:3002'
        });
            
        response.end();
    } 
     else if (pathname === '/background') {
        response.writeHead(302, {
            'Location': ' http://localhost:3001'
        });
    
        response.end();
    }
    else {
        response.writeHead(404, {'Content-Type': 'text/plain'});
        response.end('Not Found\n');
    }

}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');