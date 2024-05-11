const data = JSON.parse(productData);
const productEl = document.querySelector('.products');

data.forEach(element => {
    const tempEl = document.getElementById('tempproduct');
    const clone = tempEl.content.cloneNode(true);

    clone.querySelector('.photo').src = element.pic;
    clone.querySelector('.lastH').innerHTML = element.name;
    clone.querySelector('.lastP').innerHTML = element.desc;
    clone.querySelector('.lastS').innerHTML = element.price;
    productEl.appendChild(clone);
});