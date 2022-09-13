
const aside = document.getElementById('aside');
const main = document.getElementById('main');

// Create Video Boxes Loop

const carVideoData = [
  {
    name: 'Busy City',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-daytime-city-traffic-aerial-view-56-large.mp4',
  },
  {
    name: 'Drive N Chill',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-dashboard-of-a-car-72-large.mp4',
  },
  {
    name: 'Good vibes in the car',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-female-models-in-a-convertible-car-43192-large.mp4',
  },
  {
    name: 'Super Cool Red Car',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-red-sports-car-74-large.mp4',
  },
  {
    name: 'Speedometer of a car',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-accelerating-car-dashboard-64-large.mp4',
  },
  {
    name: 'Driving Morning',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-blonde-woman-driving-on-road-4521-large.mp4',
  },
  {
    name: 'Red Sports Car',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-parked-red-sports-car-66-large.mp4',
  },
  {
    name: 'Snowy Forest Road',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-curve-on-a-snowy-forest-road-3317-large.mp4',
  },
  {
    name: 'White Sports Car',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-luxury-white-sports-car-in-the-highway-at-sunset-35540-large.mp4',
  },
  {
    name: 'Sports Car Engine',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-closeup-of-sports-car-engine-65-large.mp4',
  },

]

const foodVideoData = [
  {
    name: 'Fresh Fruit',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-rinsing-strawberries-apples-and-grapes-holding-hands-10434-large.mp4',
  },
  {
    name: 'Eating Breakfast',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-girl-eating-salad-in-her-kitchen-dining-room-26085-large.mp4',
  },
  {
    name: 'Healthy Breakfast',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-ingredients-for-a-healthy-breakfast-3795-large.mp4',
  },
  {
    name: 'Cooking Omelet',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-woman-flipping-her-egg-omelet-42910-large.mp4',
  },
  {
    name: 'Delicious Salad',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-eating-salad-with-a-fork-40521-large.mp4',
  },
  {
    name: 'Cooking Chinese Food',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-asian-food-9286-large.mp4',
  },
  {
    name: 'Hot Beef',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-cooking-roast-beef-slow-motion-18766-large.mp4',
  },
  {
    name: 'Colorful Food',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-fresh-vegetables-on-a-wooden-board-close-up-view-10420-large.mp4',
  },
  {
    name: 'Hot Tea',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-a-waiter-serves-coffee-to-a-customer-205-large.mp4',
  },
  {
    name: 'Gourmet Burguer',
    profileImage: 'https://picsum.photos/40',
    url: 'https://assets.mixkit.co/videos/preview/mixkit-man-eating-a-hamburger-372-large.mp4',
  },

]

const randomVideoData = [
  {
    name: 'Random Video',
    profileImage: 'https://picsum.photos/40',
  },
  {
    name: 'Random Video',
    profileImage: 'https://picsum.photos/40',
  },
  {
    name: 'Random Video',
    profileImage: 'https://picsum.photos/40',
  },
  {
    name: 'Random Video',
    profileImage: 'https://picsum.photos/40',
  },
  {
    name: 'Random Video',
    profileImage: 'https://picsum.photos/40',
  },
]

const randomVideos = [
'https://assets.mixkit.co/videos/preview/mixkit-woman-cleaning-her-house-dancing-happy-43379-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-man-playing-on-a-computer-43527-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-putting-music-on-an-old-radio-43374-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-people-pouring-a-warm-drink-around-a-campfire-513-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-fireworks-illuminating-the-beach-sky-4157-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-waves-coming-to-the-beach-5016-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-landscape-of-mountains-and-sunset-3128-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-traffic-on-a-rainy-night-4331-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-curvy-road-on-a-tree-covered-hill-41537-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-talented-freestyle-soccer-player-juggling-the-ball-43519-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-several-gamers-playing-on-computers-43541-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-dog-catches-a-ball-in-a-river-1494-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-white-tiger-resting-in-the-woods-6803-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-bartender-serving-beer-from-a-tap-in-a-glass-in-8710-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-female-inspector-checking-beer-production-33005-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-landscape-of-a-mountain-range-4366-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-traveling-through-a-tunnel-of-black-cubes-in-3d-31497-large.mp4',
'https://assets.mixkit.co/videos/preview/mixkit-multicolored-coral-shot-with-fish-projections-4020-large.mp4',
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
  videoContainer.innerHTML = `<video muted class="video__pre" loop  type="video/mp4" src="${randomVideos[Math.floor(Math.random()*randomVideos.length)]}"></video>
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
