const text_details_ = document.querySelector('.text-details');
const info_icons = document.querySelector('.info-icons');
const image = document.querySelector('.image');
const text_info_person = document.querySelector('.text-info-person');
const text_info1 = document.querySelector('.text_info');
const title_info1 = document.querySelector('.text-info');
const modal = document.getElementById('myModal');

function newHuman() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(function (data) {
            const user = data.results[0];
            const imageSrc = `<img id="image" src="${user.picture.large}" alt="">`;
            const text = 'Hi, My name is';
            const name = `${user.name.title} ${user.name.first} ${user.name.last}`;
            const content_ = `
<ul class="values_list">
    <li class="material-symbols-outlined person active" data-title="Hi, My name is" data-value="${user.name.title} ${user.name.first} ${user.name.last}"></li>
    <li class="material-symbols-outlined email active" data-title="My email address is" data-value="${user.email}"></li>
    <li class="material-symbols-outlined date active" data-title="My age is" data-value="${user.dob.age}"></li>
    <li class="material-symbols-outlined location active" data-title="My address is" data-value="${user.location.country}"></li>
    <li class="material-symbols-outlined phone active" data-title="My phone number is" data-value="${user.cell}"></li>
    <li class="material-symbols-outlined password active" data-title="My password is" data-value="${user.login.password}"></li>
</ul>`;

            info_icons.innerHTML = content_;
            image.innerHTML = imageSrc;
            title_info1.innerHTML = text;
            text_details_.innerHTML = name;

            const icon = document.querySelectorAll('.material-symbols-outlined');
            const title_info = document.querySelector('.text-info');
            const text_details = document.querySelector('.text-details');
            icon.forEach(function (item) {
                item.addEventListener('mouseover', function () {
                    let data_title = item.getAttribute('data-title');
                    let data_value = item.getAttribute('data-value');

                    title_info.innerHTML = data_title;
                    text_details.innerHTML = data_value;

                    let active = document.querySelectorAll('.active');
                    active.forEach(function (active) {
                        active.className = active.className.replace('active', '');
                    });
                    item.className += 'active';
                })
            });
            let prelodaer = document.getElementById('preloader');
            prelodaer.style.display = 'none';
            modal.style.display = 'none';
        })
        .catch(err => newHuman() );
    let prelodaer = document.getElementById('preloader');
    prelodaer.style.display = 'block';
    modal.style.display = 'block';
}
newHuman();



















