export class CatLogic {
  countOfCats = 0

  get catGreetings() {
    return `${this.countOfCats} cats are meawings you!`
  }

  static staticMethod() {
    console.log('Static method was called...')
  }

  nonStaticMethod() {
    console.log('Non static method was called...')
  }

  makeMoreCats() {
    this.countOfCats++
  }

  makeLessCats() {
    this.countOfCats--
  }

  randomizeCatsCount() {
    this.countOfCats = Number((Math.random() * 10).toFixed(0))
  }
}

export default new CatLogic()
