let id = 0;
class Pokemon {
  constructor({name, sprites}) {
    this.name = name
    this.frontSprite = sprites.front
    this.backSprite = sprites.back
    this.image = this.frontSprite
    this.id = ++id
  }

  render() {
    return (
      `
      <div class="pokemon-container">
        <div style='width:230px;margin:10px;background:#fecd2f;color:#2d72fc' class="pokemon-frame">
        <h1 class="center-text">${this.name}</h1>
        <div style="width:239px;margin:auto">
          <div style="width:96px;margin:auto" class="poke-image">
            <img src="${this.image}" id="${this.id}"/>
          </div>
        </div>
        <p style="padding:10px;" class="center-text flip-image" data-pokename="${this.name}" data-action="flip-image">flip card</p>
        </div>
      </div>
      `
    )
  }

  flipCard() {
    if (this.image === this.frontSprite) {
      this.image = this.backSprite
    } else {
      this.image = this.frontSprite
    }
  }
  //
  // let pokeCard = document.getElementById('pokemon-card')



}
