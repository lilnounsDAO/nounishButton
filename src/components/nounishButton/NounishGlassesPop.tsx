//["⌐◨–◨"]

interface Particle {
  element: HTMLSpanElement
  size: number
  speedHorz: number
  speedUp: number
  spinVal: number
  spinSpeed: number
  top: number
  left: number
  direction: number
}

const validateEventPosition = (
  mouseX: number,
  mouseY: number,
  rect?: DOMRect
) => {
  if (!rect) return
  return (
    mouseX > rect.x &&
    mouseX < rect.x + rect.width &&
    mouseY > rect.y &&
    mouseY < rect.y + rect.height
  )
}

class Fountain {
  limit: number
  particles: Particle[]
  autoAddParticle: boolean
  height: number
  sizes: number[]
  variants: string[]
  mouseX: number
  mouseY: number
  rect?: DOMRect

  constructor() {
    this.limit = 7
    this.particles = []
    this.autoAddParticle = false
    this.height = document.documentElement.clientHeight
    this.sizes = [15, 20, 25, 35, 45]
    this.mouseX = 0
    this.mouseY = 0
    this.variants = [
      '<img src="https://i.ibb.co/YyWvHqg/glasses-hip-rose.png" width="78px" height="45px">',
      '<img src="https://i.ibb.co/7GcmVpq/glasses-square-black-eyes-red.png" width="78px" height="45px">',
      '<img src="https://i.ibb.co/yXVZTRm/glasses-square-black-rgb.png" width="78px" height="45px">',
      '<img src="https://i.ibb.co/SPrzqNm/glasses-square-black.png" width="78px" height="45px">',
      '<img src="https://i.ibb.co/ngzLTg1/glasses-square-blue-med-saturated.png" width="78px" height="45px">',
      '<img src="https://i.ibb.co/n3kwqQk/glasses-square-blue.png" width="78px" height="45px">',
      '<img src="https://i.ibb.co/VQQTgJS/glasses-square-frog-green.png" width="78px" height="45px">',
      '<img src="https://i.ibb.co/ZWBRHcp/glasses-square-fullblack.png" width="78px" height="45px">',
      '<img src="https://i.ibb.co/V2tf0gT/glasses-square-green-blue-multi.png" width="78px" height="45px">',
      '<img src="https://i.ibb.co/0cBcXpY/glasses-square-grey-light.png" width="78px" height="45px">',
      '<img src="https://i.ibb.co/ByGD4Dr/glasses-square-guava.png" width="36px" height="21px">',
      '<img src="https://i.ibb.co/rZvRpVF/glasses-square-honey.png" width="36px" height="21px">',
      '<img src="https://i.ibb.co/MD8QpJD/glasses-square-magenta.png" width="36px" height="21px">',
      '<img src="https://i.ibb.co/4WfJyrt/glasses-square-orange.png" width="36px" height="21px">',
      '<img src="https://i.ibb.co/YjRZG9T/glasses-square-pink-purple-multi.png" width="36px" height="21px">',
      '<img src="https://i.ibb.co/KN7YwFn/glasses-square-red.png" width="36px" height="21px">',
      '<img src="https://i.ibb.co/0cBcXpY/glasses-square-grey-light.png" width="36px" height="21px">',
      '<img src="https://i.ibb.co/W0X6HP7/glasses-square-teal.png" width="36px" height="21px">',
      '<img src="https://i.ibb.co/ByGD4Dr/glasses-square-guava.png" width="36px" height="21px">',
      '<img src="https://i.ibb.co/6rXrNNh/glasses-square-yellow-orange-multi.png" width="36px" height="21px">',
      '<img src="https://i.ibb.co/JF9bmdJ/glasses-square-yellow-saturated.png" width="36px" height="21px">',
    ]
    //["⌐◨–◨"]
    this.addHandlers()
    this.loop()
    this.rect = document
      ?.getElementById("nounish_button")
      ?.getBoundingClientRect()
  }

  loop() {
    if (
      validateEventPosition(this.mouseX, this.mouseY, this.rect) &&
      this.autoAddParticle &&
      this.particles.length < this.limit
    ) {
      this.createParticle()
    }

    this.updateParticles()

    requestAnimationFrame(this.loop.bind(this))
  }

  addHandlers() {
    const isTouchInteraction =
      "ontouchstart" in window || navigator.maxTouchPoints

    const tap = isTouchInteraction ? "touchstart" : "mousedown"
    const tapCancel = isTouchInteraction ? "touchcancel" : "contextmenu"
    const tapEnd = isTouchInteraction ? "touchend" : "mouseup"
    const move = isTouchInteraction ? "touchmove" : "mousemove"

    document?.getElementById("nounish_button")?.addEventListener(
      move,
      (e) => {
        this.mouseX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX
        this.mouseY = e instanceof MouseEvent ? e.pageY : e.touches[0].pageY
      },
      { passive: false }
    )

    document
      ?.getElementById("nounish_button")
      ?.addEventListener(tap, (e: MouseEvent | TouchEvent) => {
        this.mouseX = e instanceof MouseEvent ? e.pageX : e.touches[0].pageX
        this.mouseY = e instanceof MouseEvent ? e.pageY : e.touches[0].pageY
        this.autoAddParticle = true
      })

    document.addEventListener(tapCancel, () => {
      this.autoAddParticle = false
    })

    document.addEventListener(tapEnd, () => {
      this.autoAddParticle = false
    })

    document.addEventListener("mouseleave", () => {
      this.autoAddParticle = false
    })
  }

  createParticle() {
    const size = this.sizes[Math.floor(Math.random() * this.sizes.length)]
    const speedHorz = Math.random() * 7
    const speedUp = Math.random() * 25
    const spinVal = Math.random() * 360
    const spinSpeed = Math.random() * 25 * (Math.random() <= 0.5 ? -1 : 1)
    const top = this.mouseY - size
    const left = this.mouseX - size
    const direction = Math.random() <= 0.5 ? -1 : 1

    const particle = document.createElement("span")
    particle.innerHTML =
      this.variants[Math.floor(Math.random() * this.variants.length)]
    particle.classList.add("particle")

    particle.setAttribute(
      "style",
      `
      -webkit-user-select: none;
      font-size: ${size}px;
      left: ${left}px;
      pointer-events: none;
      position: fixed;
      top: ${top}px;
      overflow: hidden;
      transform: rotate(${spinVal}deg);
    `
    )

    document?.documentElement?.appendChild(particle)

    this.particles.push({
      direction,
      element: particle,
      left,
      size,
      speedHorz,
      speedUp,
      spinSpeed,
      spinVal,
      top,
    })
  }

  updateParticles() {
    this.particles.forEach((p) => {
      p.left = p.left - p.speedHorz * p.direction
      p.top = p.top - p.speedUp
      p.speedUp = Math.min(p.size, p.speedUp - 1)
      p.spinVal = p.spinVal + p.spinSpeed

      if (p.top > this.height - p.size) {
        this.particles = this.particles.filter((o) => o !== p)
        p.element.remove()
      }

      p.element.setAttribute(
        "style",
        `
        -webkit-user-select: none;
        font-size: ${p.size}px;
        left: ${p.left}px;
        pointer-events: none;
        position: fixed;
        top: ${p.top}px;
        transform: rotate(${p.spinVal}deg);
      `
      )
    })
  }
}

export default Fountain
