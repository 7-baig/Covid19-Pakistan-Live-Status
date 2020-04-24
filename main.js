// const boxes = document.getElementsByClassName('boxes');
const box = document.querySelector('.boxes')
const infected = document.getElementById('confirmed');
const tested = document.getElementById('active');
const _recovered = document.getElementById('recovered');
const _deaths = document.getElementById('deaths');
const updates = document.getElementById('update')
const _source = document.getElementById('source')

const helper = (res) => {
    // box.innerHTML = `<p>${res.infected}</p>`
    const para1 = document.createElement('P');
    para1.innerHTML = `<p>${res.infected}</p>`;
    infected.appendChild(para1);
    const para2 = document.createElement('P');
    para2.innerHTML = `<p>${res.tested}</p>`;
    tested.appendChild(para2);
    const para3 = document.createElement('P');
    para3.innerHTML = `<p>${res.recovered}</p>`;
    _recovered.appendChild(para3);
    const para4 = document.createElement('P');
    para4.innerHTML = `<p>${res.deceased}</p>`;
    _deaths.appendChild(para4);
}
const update = (res) => {
    _source.innerHTML = `Source: <a href="${res.sourceUrl}" >${res.sourceUrl}</a>`
}



// AJAX Function
fetch('https://api.apify.com/v2/key-value-stores/QhfG8Kj6tVYMgud6R/records/LATEST?disableRedirect=true')
.then((response) => {
  if(response.ok) {
    return response.json()
}
  throw new Error('Request failed!');
}, (networkError) => {
  console.log(networkError.message)
})
.then(jsonResponse => {
    console.log(jsonResponse)
    helper(jsonResponse)
    update(jsonResponse)
},)

