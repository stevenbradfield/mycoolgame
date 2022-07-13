sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.spray, 100)
    music.powerUp.play()
})
let pepsiCan: Sprite = null
let mrBAvatar = sprites.create(assets.image`mrBAvatar`, SpriteKind.Player)
scene.setBackgroundColor(10)
controller.moveSprite(mrBAvatar)
mrBAvatar.setStayInScreen(true)
info.setScore(0)
info.startCountdown(10)
game.onUpdateInterval(500, function () {
    pepsiCan = sprites.createProjectileFromSide(assets.image`can`, 50, 0)
    pepsiCan.setPosition(0, randint(0, 120))
})
