const aside = document.getElementById('aside');
const main = document.getElementById('main');

// Search Input

let categories = [];

const searchInput = document.querySelector('.header__searchBar');

searchInput.addEventListener('input', (e) => {
  const value = e.target.value.toLowerCase();

}
)

setInterval(() => {
  let value = document.querySelector('.header__searchBar').value.toLowerCase();
  let otherContainers = document.querySelectorAll('.video__container');

  otherContainers.forEach(e => {
    if (e.attributes != `data-type="${value}"` && value != ''){
      e.classList.add('hidden');
    }else{
      e.classList.remove('hidden');
    }
  })

  if (value != ''){
    let searchTarget = document.querySelectorAll(`[data-type=${value}]`);
  
    searchTarget.forEach((e) => {
      e.classList.toggle('hidden');
    })
  }
}, 500);

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
  {
    name: 'Driving Morning',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-blonde-woman-driving-on-road-4521-large.mp4',
  },
  {
    name: 'Red Sports Car',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-parked-red-sports-car-66-large.mp4',
  },
  {
    name: 'Snowy Forest Road',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-curve-on-a-snowy-forest-road-3317-large.mp4',
  },
  {
    name: 'White Sports Car',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-white-sports-car-in-the-highway-at-sunset-35540-large.mp4',
  },
  {
    name: 'Sports Car Engine',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-closeup-of-sports-car-engine-65-large.mp4',
  },

]

const foodVideoData = [
  {
    name: 'Fresh Fruit',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-rinsing-strawberries-apples-and-grapes-holding-hands-10434-large.mp4',
  },
  {
    name: 'Eating Breakfast',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-eating-salad-in-her-kitchen-dining-room-26085-large.mp4',
  },
  {
    name: 'Healthy Breakfast',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-ingredients-for-a-healthy-breakfast-3795-large.mp4',
  },
  {
    name: 'Cooking Omelet',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-woman-flipping-her-egg-omelet-42910-large.mp4',
  },
  {
    name: 'Delicious Salad',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-eating-salad-with-a-fork-40521-large.mp4',
  },
  {
    name: 'Cooking Chinese Food',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-asian-food-9286-large.mp4',
  },
  {
    name: 'Hot Beef',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-roast-beef-slow-motion-18766-large.mp4',
  },
  {
    name: 'Colorful Food',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-fresh-vegetables-on-a-wooden-board-close-up-view-10420-large.mp4',
  },
  {
    name: 'Hot Tea',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-a-waiter-serves-coffee-to-a-customer-205-large.mp4',
  },
  {
    name: 'Gourmet Burguer',
    profileImage: 'assets/user.jpg',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-man-eating-a-hamburger-372-large.mp4',
  },

]

for (let info of randomVideoData) {
  randomVideoBoxes(info);
}

for (let info of carVideoData) {
  carVideoBoxes(info);
}

for (let info of foodVideoData) {
  foodVideoBoxes(info);
}

function randomVideoBoxes(info) {
  const videoList = document.getElementById('list__random');
  const videoContainer = document.createElement('div');
  videoContainer.classList.add('video__container');
  videoContainer.setAttribute('data-type', 'random');
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
  videoContainer.setAttribute('data-type', 'cars');
  videoList.append(videoContainer);
  videoContainer.innerHTML = `<video muted class="video__pre" loop  type="video/mp4" src="${info.url}"></video>
  <div class="video__info">
      <img class="video__profile" src="${info.profileImage}" alt="Profile Picture">
      <p>${info.name}</p>`;

}

function foodVideoBoxes(info) {
  const videoList = document.getElementById('list__food');
  const videoContainer = document.createElement('div');
  videoContainer.classList.add('video__container');
  videoContainer.setAttribute('data-type', 'food');
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

// Modal Videos

const videoModal = document.querySelector('.video__modal');
const videoClose = document.querySelector('.video__modal i');

videoThumb.forEach((e) => { e.addEventListener('click', openVideo) });
videoClose.addEventListener('click', modalClose);

function openVideo(e) {
  let videoToCopy = e.srcElement.src;
  let newVideoBox = document.createElement('video');
  newVideoBox.setAttribute('controls', 'controls');
  newVideoBox.src = videoToCopy;
  videoModal.classList.toggle('video__modal__visible');
  videoModal.append(newVideoBox);
};

function modalClose() {
  const videoBox = document.querySelector('.video__modal video');
  videoBox.remove();
  videoModal.classList.toggle('video__modal__visible');
};



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
  checkMenuPosition();
}

function notificationToggle() {
  notificationMenu = !notificationMenu;
  asideNotification.classList.toggle('aside__notification__visible');
  checkMenuPosition();
}

// Menu Position Adjustment

setInterval(checkMenuPosition, 500);

function checkMenuPosition() {
  if (profileMenu) {
    asideNotification.style.top = '200px';
  } else {
    asideNotification.style.top = '0px';
  }
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
  menuToggle();
}
