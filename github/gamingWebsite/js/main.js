const leftArrow = document.querySelectorAll('.main__list__arrow--left')
const rightArrow = document.querySelectorAll('.main__list__arrow--right')

rightArrow.forEach(e => {
  e.addEventListener('click', () => {

    const localLeftArrow = e.previousElementSibling;
    const mainList = e.closest('.main__list');
    let maxScrollLeft = mainList.scrollWidth - mainList.clientWidth;
    console.log(maxScrollLeft);
    mainList.scrollLeft += 250;
    if (mainList.scrollLeft == 0) {
      localLeftArrow.classList.add('hidden')
    } else {
      localLeftArrow.classList.remove('hidden');
    }
    if (mainList.scrollLeft == maxScrollLeft) {
      e.classList.add('hidden')
    } else {
      e.classList.remove('hidden');
    }

  })
})

leftArrow.forEach(e => {
  e.addEventListener('click', () => {
    const localRightArrow = e.nextElementSibling;
    mainList = e.closest('.main__list');
    mainList.scrollLeft -= 250;
    if (mainList.scrollLeft == 0) {
      e.classList.add('hidden')
    } else {
      e.classList.remove('hidden');
    }
    if (mainList.scrollLeft == 1752) {
      localRightArrow.classList.add('hidden')
    } else {
      localRightArrow.classList.remove('hidden');
    }
  })
})

// Game Data

const officialGameData = [
  {
    name: 'Runny Aliens',
    profileImage: './assets/runnyAliensIcon.png',
    url: './games/runnyAliens/index.html',
  },

]
const unOfficialGameData = [
  {
    name: 'Om Nom Run',
    profileImage: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/OmNomRunTeaser.jpg?v=0.2-2dc8a5af',
    url: 'https://play.famobi.com/om-nom-run',
  },
  {
    name: '8 Ball Billiards Classic',
    profileImage: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/8BallBilliardsClassicTeaser.jpg?v=0.2-2dc8a5af',
    url: 'https://play.famobi.com/8-ball-billiards-classic',
  },
  {
    name: '3D Free Kick',
    profileImage: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/3dFreeKickTeaser.jpg?v=0.2-2dc8a5af',
    url: 'https://play.famobi.com/3d-free-kick',
  },
  {
    name: 'Candy Bubble',
    profileImage: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/CandyBubble_Teaser.jpg?v=0.2-2dc8a5af',
    url: 'https://play.famobi.com/candy-bubble',
  },
  {
    name: 'Moto X3M Pool Party',
    profileImage: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/MotoX3mPoolPartyTeaser.jpg?v=0.2-2dc8a5af',
    url: 'https://play.famobi.com/moto-x3m-pool-party',
  },
  {
    name: 'Tower Crash 3D',
    profileImage: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/TowerCrash3dTeaser.jpg?v=0.2-2dc8a5af',
    url: 'https://play.famobi.com/tower-crash-3d',
  },
  {
    name: 'Jetpack Joyride',
    profileImage: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/JetpackJoyrideTeaser.jpg?v=0.2-2dc8a5af',
    url: 'https://play.famobi.com/jetpack-joyride',
  },
  {
    name: 'Zoo Boom',
    profileImage: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/ZooBoomTeaser.jpg?v=0.2-2dc8a5af',
    url: 'https://play.famobi.com/zoo-boom',
  },
  {
    name: 'Om Nom Connect Classic',
    profileImage: 'https://img.cdn.famobi.com/portal/html5games/images/tmp/OmNomConnectClassicTeaser.jpg?v=0.2-2dc8a5af',
    url: 'https://play.famobi.com/om-nom-connect-classic',
  },

]

for (let info of officialGameData) {
  officialGameBox(info);
}

for (let info of unOfficialGameData) {
  unOfficialGameBox(info);
}

function officialGameBox(info) {
  const gameList = document.querySelector('#official div');
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('main__list__container');
  gameContainer.setAttribute('data-type', 'official');
  gameList.append(gameContainer);
  gameContainer.innerHTML = `
    <a href="${info.url}">
    <div class="main__list__game">
        <img src="${info.profileImage}" alt="Game Thumbnail">
    </div>
    <p class="main__list__title">${info.name}</p>
    </a>`;
}

function unOfficialGameBox(info) {
  const gameList = document.querySelector('#unofficial div');
  const gameContainer = document.createElement('div');
  gameContainer.classList.add('main__list__container');
  gameContainer.setAttribute('data-type', 'unofficial');
  gameList.append(gameContainer);
  gameContainer.innerHTML = `
    <a href="${info.url}">
    <div class="main__list__game">
        <img src="${info.profileImage}" alt="Game Thumbnail">
    </div>
    <p class="main__list__title">${info.name}</p>
    </a>`;
}
