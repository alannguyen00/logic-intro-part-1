function shippy () {
    Space_Coupe = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 1 1 1 2 1 1 1 1 1 1 2 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 1 1 1 2 9 2 1 1 1 1 2 9 2 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 1 1 1 1 1 2 1 1 1 1 1 1 2 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 1 1 1 . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 1 1 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 1 1 . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . 1 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 4 1 1 1 1 1 1 . 1 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . 1 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 1 1 1 f f f f f f f 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 1 1 1 1 f f f f f f f 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 1 1 1 1 f f f f f f f 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 1 1 1 1 f f 1 1 1 f f 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . 1 1 1 1 f f 1 f 1 f f 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 1 1 1 1 1 f f 1 1 1 f f 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 1 1 1 1 1 f f f f f f f 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 1 1 1 1 1 f f f f f f f 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . 1 1 1 1 4 4 4 4 4 4 4 4 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 1 1 1 1 1 1 5 4 4 4 4 4 4 4 4 4 5 5 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 1 1 1 1 1 1 5 5 5 5 4 4 4 4 4 5 5 . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . 1 1 1 1 1 1 . . . 5 5 5 5 4 4 5 5 5 . . . . 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . 5 5 5 5 . . . . . . . 1 1 1 1 . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 1 . . . . . . . . . . 5 . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
    controller.moveSprite(Space_Coupe)
    Space_Coupe.x = 8
    Space_Coupe.setFlag(SpriteFlag.StayInScreen, true)
    info.setScore(5)
}
function bad_guy () {
    bad = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . b b . . . . 
. . . . b . . . . b d d . . . . 
. . . b d b . b b d d d d b . . 
. . . b d d b d d d d d d b . . 
. . . b d d d d d d d d d d b . 
. . b d d d d d d d d d d d b . 
. b d d d d d d d d d d d d b . 
. . b d d d d d d d d d d d b . 
. . b d d d d d d d d d d d b . 
. . . b b d d d d d d d d b . . 
. . . . . b d d d d d d b . . . 
. . . . . . b d d d d b . . . . 
. . . . . . . b b b b . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
    bad.setPosition(scene.screenWidth(), Math.randomRange(0, scene.screenHeight()))
    extra_velocity = 0
    if (Math.percentChance(20)) {
        extra_velocity = Math.randomRange(0, 50)
    } else {
        extra_velocity = Math.randomRange(-16, 16)
    }
    bad.vx = (-50 - 5) * extra_velocity
    if (info.score() <= 20) {
        controller.moveSprite(Space_Coupe, 100 - 2, 100)
    }
}
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game_over()
})
function game_over () {
    game.over(false)
}
function change_score () {
	
}
let extra_velocity = 0
let bad: Sprite = null
let Space_Coupe: Sprite = null
shippy()
// For scoreboard
game.onUpdateInterval(2000, function () {
    info.changeScoreBy(1)
})
// For bad guy
game.onUpdateInterval(200, function () {
    bad_guy()
})
