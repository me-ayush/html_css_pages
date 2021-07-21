const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')
const txt = document.querySelector('.txtsss')

const text = [
    {
        text:"1 When we onboard our employees, its really quick and easy. We get to focus on making sure that they're okay and happy and being introduced to the comapny.",
    },
    {
        text:"2 When we onboard our employees, its really quick and easy. We get to focus on making sure that they're okay and happy and being introduced to the comapny.",
    },
    {
        text:"3 When we onboard our employees, its really quick and easy. We get to focus on making sure that they're okay and happy and being introduced to the comapny.",
    },
    {
        text:"4 When we onboard our employees, its really quick and easy. We get to focus on making sure that they're okay and happy and being introduced to the comapny.",
    },
    {
        text:"5 When we onboard our employees, its really quick and easy. We get to focus on making sure that they're okay and happy and being introduced to the comapny.",
    },
  ]



let idx = 0

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }
    imgs.style.transform = `translateX(${-idx * 500}px)`
    const t = text[idx].text;
    txt.innerHTML = t;
    // document.getElementsByClassName('user-pics')[idx].css='opacity: 1';
    user_pics = document.querySelectorAll('.user-pics span')
    user_pics.forEach(x => {
        x.style.opacity = '0.5'
    });
    user_pics[idx].style.opacity= '1';
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
    idx++
    changeImage()
    resetInterval()
})

leftBtn.addEventListener('click', () => {
    idx--
    changeImage()
    resetInterval()
})