const aside = document.getElementById('aside');
const main = document.getElementById('main');

// Create Video Boxes Loop

const randomVideoData = [
  {
    name: 'Woman Dancing',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-woman-cleaning-her-house-dancing-happy-43379-large.mp4',
  },
  {
    name: 'Gamer Keyboard',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-playing-on-a-computer-43527-large.mp4',
  },
  {
    name: 'Old Radio',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-putting-music-on-an-old-radio-43374-large.mp4',
  },
  {
    name: 'Campfire',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-people-pouring-a-warm-drink-around-a-campfire-513-large.mp4',
  },
  {
    name: 'Fireworks on a beach',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-fireworks-illuminating-the-beach-sky-4157-large.mp4',
  },
  {
    name: 'Waves coming to the beach',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4',
  },
  {
    name: 'Watering the plants',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-young-woman-dancing-while-watering-her-plants-43378-large.mp4',
  },
  {
    name: 'Landscape of mountains',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-landscape-of-mountains-and-sunset-3128-large.mp4',
  },
  {
    name: 'Rainy Night',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-traffic-on-a-rainy-night-4331-large.mp4',
  },
  {
    name: 'Curvy Road',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-large.mp4',
  },

]

const carVideoData = [
  {
    name: 'Busy City',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-daytime-city-traffic-aerial-view-56-large.mp4',
  },
  {
    name: 'Drive N Cill',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-dashboard-of-a-car-72-large.mp4',
  },
  {
    name: 'Good vibes in the car',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-female-models-in-a-convertible-car-43192-large.mp4',
  },
  {
    name: 'Super Cool Red Car',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-red-sports-car-74-large.mp4',
  },
  {
    name: 'Speedometer of a car',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-accelerating-car-dashboard-64-large.mp4',
  },

]

for (let info of randomVideoData) {
  randomVideoBoxes(info);
}

for (let info of carVideoData) {
  carVideoBoxes(info);
}

function randomVideoBoxes(info) {
  const videoList = document.getElementById('list__random');
  const videoContainer = document.createElement('div');
  videoContainer.classList.add('video__container');
  videoList.append(videoContainer);
  videoContainer.innerHTML = `<video muted class="video__pre" loop  type="video/mp4" src="${info.url}"></video>
  <div class="video__info">
      <img class="video__profile" src="${info.profileImage}" alt="Profile Picture">
      <p>${info.name}</p>`;

}

function carVideoBoxes(info) {
  const videoList = document.getElementById('list__cars');
  const videoContainer = document.createElement('div');
  videoContainer.classList.add('video__container');
  videoList.append(videoContainer);
  videoContainer.innerHTML = `<video muted class="video__pre" loop  type="video/mp4" src="${info.url}"></video>
  <div class="video__info">
      <img class="video__profile" src="${info.profileImage}" alt="Profile Picture">
      <p>${info.name}</p>`;

}

// Thumbnail Hover

let videoThumb = document.querySelectorAll('.video__pre');

videoThumb.forEach((e) => {
  e.addEventListener('mouseout', () => {
    e.currentTime = 0;
    e.pause();
  });
});

videoThumb.forEach((e) => {
  e.addEventListener('mouseenter', () => {
    e.play();
  });
});

// MENUS

let notificationMenu = false;
let profileMenu = false;

const burguerMenu = document.querySelector('.main__menu');
const headerIcon = document.querySelector('.header__profile');
const asideProfile = document.querySelector('.aside__profile');
const asideNotification = document.querySelector('.aside__notification');
const headerNotification = document.querySelector('.header__notification');

burguerMenu.addEventListener('click', menuToggle);
headerIcon.addEventListener('click', profileToggle);
headerNotification.addEventListener('click', notificationToggle);

function menuToggle() {
  main.classList.toggle('main__solo');
  aside.classList.toggle('aside__hidden');
}

function profileToggle() {
  profileMenu = !profileMenu;
  asideProfile.classList.toggle('aside__profile__visible');
}

function notificationToggle() {
  notificationMenu = !notificationMenu;
  asideNotification.classList.toggle('aside__notification__visible');

  // Menu Position Adjustment

 setInterval(checkMenuPosition, 500);

  function checkMenuPosition() {
    if (profileMenu) {
      asideNotification.style.top = '200px';
    } else {
      asideNotification.style.top = '0px';
    }
  }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  menuToggle();
}
