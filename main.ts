sprites.onOverlap(SpriteKind.Guard, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    Namor.setPosition(148, 2)
})
info.onScore(20, function () {
    Namor.destroy()
    scene.setBackgroundImage(assets.image`boston-bridge`)
    effects.confetti.startScreenEffect()
    Shuri.sayText("WAKANDA FOREVER", 2000, false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    Namor.setPosition(148, 2)
    Riri = sprites.create(assets.image`riri`, SpriteKind.Guard)
    Okoye = sprites.create(assets.image`okoye`, SpriteKind.Guard)
})
let Okoye: Sprite = null
let Riri: Sprite = null
let Namor: Sprite = null
let Shuri: Sprite = null
game.showLongText("When game begins, press the ARROW KEYS to move Shuri, Okoye and Riri. If Namor catches you, you will lose points! ", DialogLayout.Full)
scene.setBackgroundImage(assets.image`wakanda`)
Shuri = sprites.create(assets.image`shuri`, SpriteKind.Player)
controller.moveSprite(Shuri)
Shuri.setStayInScreen(true)
Namor = sprites.create(assets.image`namor`, SpriteKind.Enemy)
Namor.setPosition(148, 2)
Namor.follow(Shuri, 30)
controller.moveSprite(Riri, 34, -53)
controller.moveSprite(Okoye, -68, -58)
