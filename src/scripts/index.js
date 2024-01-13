import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

import ('../public/data/DATA.json')
    .then(({default: jsonData}) => {
        console.log(jsonData)
        let dataRestaurant = jsonData['restaurants']
        let dataList = ''
        dataRestaurant.forEach(function(data) {
            dataList += `
            
                <article class="post-item">
                    <img class="post-item-thumb" 
                    src="${data['pictureId']}" 
                    alt="${data['name']}"/>
                    <div class="city">${data['city']}</div>
                    
                    <div class="post-item-content">
                        <p class="post-item-rating">Rating : <span class="rating-value">${data['rating']}</span></p>
                        <h3 class="post-item-title"><a id="tittle"href="#">${data['name']}</a></h3>
                        <div class="post-item-desc">${data['description'].slice(0, 150)}...</div>
                    </div>
                </article>            
        `;
        })
         document.querySelector('.posts').innerHTML = dataList;
    })
    // Menu
const menu = document.querySelector('#menu');
const hero = document.querySelector('.hero');
const main = document.querySelector('main');
const drawer = document.querySelector('.mobile-nav');

menu.addEventListener('click', function (event) {
    drawer.classList.toggle('open');
    event.stopPropagation();
});

hero.addEventListener('click', function () {
    drawer.classList.remove('open');
});

main.addEventListener('click', function () {
    drawer.classList.remove('open');
});

