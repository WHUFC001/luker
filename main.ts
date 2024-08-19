namespace SpriteKind {
    export const gem = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (DLJ.vy == 0) {
        DLJ.vy = -115
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile5`, function (sprite, location) {
    DLJ.vy = -300
})
info.onScore(3, function () {
    info.changeLifeBy(1)
})
info.onLifeZero(function () {
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.gem, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let gem: Sprite = null
let DLJ: Sprite = null
DLJ = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    `, SpriteKind.Player)
DLJ.ay = 200
controller.moveSprite(DLJ, 100, 0)
scene.setBackgroundImage(img`
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555555558888888
    8888888881118888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555555888888
    8888888111111188811118888118888888888888888888888888888888888888888888888888888888888888888888888811111888888888888888888888888888888888888888555555555555588888
    8888881111111118811111888111888888888888888888888888888888888888888888888888888888888888888888888111111111888888888811188888888888888888888885555555555555558888
    8811111111111111111111181111188888888888888888888888888888888888888888888888888888888888888888888111111111888888881111118888888118888888888855555555555555555888
    8811111111111111111111111111188888888888888888888888888888888888888888888888888888888888888888881111111111888888111111111888881118888888888855555555555555555888
    8111111111111111111111111111118888888888888888888888888888888888888888888888888888888888881118881111111111188881111111111188881111888888888855555555555555555888
    8111111111111111111111111111118888888888888888888888888888888888888888888888888888888888811118811111111111118811111111111118111111118888888855555555555555555888
    8111111111111111111111111111118888888888888888888888888888888888888888888888888888888888811111111111111111118111111111111118111111118888888855555555555555555888
    8111111111111111111111111111118888888888888888888888888888888888888888888888888888888888811111111111111111111111111111111111111111118888888855555555555555555888
    8888888888888888888888888888888888888881888888888888888888888888888888888888888888888888811111111111111111111111111111111111111111111888888855555555555555555888
    8888888888888888888888888888888888888811111888888888888888888888888888888888888888888888811111111111111111111111111111111111111111111888888855555555555555555888
    8888888888888888888888888888888888888811111118888888888888888888888888888888888888888888811111111111111111111111111111111111111111111888888855555555555555555888
    8888888888888888888888888888888888888811111111188888888888888888888888888888888888888888811111111111111111111111111111111111111111111888888885555555555555558888
    8888888888888888888888888888888888888811111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888555555555555588888
    8888888888888888888888888888888888888811111111188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888855555555555888888
    8888888888888888888888888888888888888881111111888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888885555555558888888
    8888888888888888888888888888888888888888888888888888888888888888888811188888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
    88888888888888888dddd888888888888888888888888888888888888dddd888888111181118888888888888888888888dddd888888888888888888888888888888888888dddd8888888888888888888
    88888888888ddddddddddd88888888888888888888888888888ddddddddddd88888111111111188888888888888ddddddddddd88888888888888888888888888888ddddddddddd888888888888888888
    88888888dddddddddddddd88888888888888888888888888dddddddddddddd88888111111111888888888888dddddddddddddd88888888888888888888888888dddddddddddddd888888888888888888
    888888dddddddddddddddd888888888888888888888888dddddddddddddddd888881111111188888888888dddddddddddddddd888888888888888888888888dddddddddddddddd888888888888888888
    88888ddddddddddddddddd88888888888888888888888ddddddddddddddddd88888888888888888888888ddddddddddddddddd88888888888888888888888ddddddddddddddddd888888888888888888
    88888ddddddddddddddddd88888888888888888888888ddddddddddddddddd88888888888888888888888ddddddddddddddddd88888888888888888888888ddddddddddddddddd888888888888888888
    8888ddddddddddddddddddd888888888888888888888ddddddddddddddddddd888888888888888888888ddddddddddddddddddd888888888888888888888ddddddddddddddddddd88888888888888888
    8888ddddddddddddddddddd888888888888888888888ddddddddddddddddddd888888888888888888888ddddddddddddddddddd888888888888888888888ddddddddddddddddddd88888888888888888
    888dddddddddddddddddddd888888ddd88888888888dddddddddddddddddddd88888888888888888888dddddddddddddddddddd888888ddd88888888888dddddddddddddddddddd88888888888888888
    888dddddddddddddddddddd88888ddddd8888888888dddddddddddddddddddd88888888888888888888dddddddddddddddddddd88888ddddd8888888888dddddddddddddddddddd88888888888888888
    88ddddddddddddddddddddd88888ddddd888888888ddddddddddddddddddddd8888888888888888888ddddddddddddddddddddd888888dddd888888888ddddddddddddddddddddd88888888888888888
    88ddddddddddddddddddddd88888ddddd888888888ddddddddddddddddddddd8888888888888888888ddddddddddddddddddddd888888dddd888888888ddddddddddddddddddddd88888888888888888
    88ddddddddddddddddddddd88888dddddd88888888ddddddddddddddddddddd8888888888888888888ddddddddddddddddddddd8888888dddd88888888ddddddddddddddddddddd88888888888888888
    8dddddddddddddddddddddd88888dddddd8888888dddddddddddddddddddddd888888888888888888dddddddddddddddddddddd88888d88ddd8888888dddddddddddddddddddddd88888888888888888
    8dddddddddddddddddddddd88888dddddd8888888dddddddddddddddddddddd888888888888888888dddddddddddddddddddddd88888dd8ddd8888888dddddddddddddddddddddd888888888dd888888
    8dddddddddddddddddddddd8888ddddddd8888888dddddddddddddddddddddd888888888888888888dddddddddddddddddddddd8888ddddddd8888888dddddddddddddddddddddd8888888dddd888888
    ddddddddddddddd7ddddddd8888ddddddd8888ddddddddddddddddd7ddddddd888888888888888ddddddddddddddddd7ddddddd8888ddddddd8888ddddddddddddddddd7ddddddd88888dddddd8888dd
    dddddddddddddd77ddddddd8888ddddddd88dddddddddddddddddd77ddddddd8888888888888dddddddddddddddddd77ddddddd8888ddddddd88dddddddddddddddddd77ddddddd8888ddddddd88dddd
    dddddddddddddd77ddddddd8888dddddddd8dddddddddddddddddd77ddddddd8888888888888dddddddddddddddddd77ddddddd8888dddddddd8dddddddddddddddddd77ddddddd8888dddddddd8dddd
    ddddddddddddd7777dddddd8888dddddddddddddddddddddddddd7777dddddd8888dddddddddddddddddddddddddd7777dddddd8888dddddddddddddddddddddddddd7777dddddd8888ddddddddddddd
    ddddddddddd77777ddddddddddddddddddddddddddddddddddd77777ddddddddddddddddddddddddddddddddddd77777ddddddddddddddddddddddddddddddddddd77777dddddddddddddddddddddddd
    ddddddddddddd777ddddddddddddddd6666666ddddddddddddddd777ddddddddddddddd6666666ddddddddddddddd777ddddddddddddddd6666666ddddddddddddddd777ddddddddddddddd6666666dd
    dddddddddddd77777dddddddddddd66666666666dddddddddddd77777dddddddddddd66666666666dddddddddddd77777dddddddddddd66666666666dddddddddddd77777dddddddddddd66666666666
    6ddddddddddd7777777ddddddddd6666666666666ddddddddddd7777777ddddddddd6666666666666ddddddddddd7777777ddddddddd6666666666666ddddddddddd7777777ddddddddd666666666666
    666dddddddd777777ddddddddd66666666666666666dddddddd777777ddddddddd66666666666666666dddddddd777777ddddddddd66666666666666666dddddddd777777ddddddddd66666666666666
    6666ddddd777777777ddddddd6666666666666666666ddddd777777777ddddddd6666666666666666666ddddd777777777ddddddd6666666666666666666ddddd777777777ddddddd666666666666666
    66666dddddd77777777ddddd666666666666666666666dddddd77777777ddddd666666666666666666666dddddd77777777ddddd666666666666666666666dddddd77777777ddddd6666666666666666
    666666dd667777777dddddd66666666666666666666666dd667777777dddddd66666666666666666666666dd667777777dddddd66666666666666666666666dd667777777dddddd66666666666666666
    666666666666777777dddd667666666666666666666666666666777777dddd667666666666666666666666666666777777dddd667666666666666666666666666666777777dddd667666666666666666
    6666666666777777777dd66676666666666666666666666666777777777dd66676666666666666666666666666777777777dd66676666666666666666666666666777777777dd6667666666666666666
    6666666667777777777766677666666666666666666666666777777777776667766666666666666666666666677777777777666776666666666666666666666667777777777766677666666666666666
    6666666777777777776666667766666666666666666666677777777777666666776666666666666666666667777777777766666677666666666666666666666777777777776666667766666666666666
    6666666667777777776666677666666666666666666666666777777777666667766666666666666666666666677777777766666776666666666666666666666667777777776666677666666666666666
    6666666667777777666666777766666666666666666666666777777766666677776666666666666666666666677777776666667777666666666666666666666667777777666666777766666666666666
    6666666677777777777667777776666666666666666666667777777777766777777666666666666666666666777777777776677777766666666666666666666677777777777667777776666666666666
    6666666666777777777766677666666666667666666666666677777777776667766666666666766666666666667777777777666776666666666676666666666666777777777766677666666666667666
    6666666677777777777667777776666666667666666666667777777777766777777666666666766666666666777777777776677777766666666676666666666677777777777667777776666666667666
    6667666777777777777677777777666666677766666766677777777777767777777766666667776666676667777777777776777777776666666777666667666777777777777677777777666666677766
    6667766666777777777777777766666666667766666776666677777777777777776666666666776666677666667777777777777777666666666677666667766666777777777777777766666666667766
    6677666677777777777777777777666666677666667766667777777777777777777766666667766666776666777777777777777777776666666776666677666677777777777777777777666666677666
    6667766777777777777777777777766666777766666776677777777777777777777776666677776666677667777777777777777777777666667777666667766777777777777777777777766666777766
    6677777777777777777777777776666666677776667777777777777777777777777666666667777666777777777777777777777777766666666777766677777777777777777777777776666666677776
    6667777777777777777777777777766666777766666777777777777777777777777776666677776666677777777777777777777777777666667777666667777777777777777777777777766666777766
    6667777777777777777777777777776667777776666777777777777777777777777777666777777666677777777777777777777777777766677777766667777777777777777777777777776667777776
    6677777777777777777777777777666666777766667777777777777777777777777766666677776666777777777777777777777777776666667777666677777777777777777777777777666666777766
    6777777777777777777777777777776677777776677777777777777777777777777777667777777667777777777777777777777777777766777777766777777777777777777777777777776677777776
    6677777777777777777777777777777667777777667777777777777777777777777777766777777766777777777777777777777777777776677777776677777777777777777777777777777667777777
    6677777777777777777777777777776677777777667777777777777777777777777777667777777766777777777777777777777777777766777777776677777777777777777777777777776677777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeedeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeedeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeedeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeedeeeeeeeeeeeeeeede
    edeeeeedeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeedeeeeeeeeee
    eeeeeeeeeedeeeeeeeeeeeeeeeeeeedeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeedeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeedeeeeeeeeeeeedeeeeeeeeeeeeeeeeeedeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeedeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeedeeeeeeeeeeedeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeee
    eedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeedeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeee
    eeeeeeeeeeeedeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeee
    eeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeedeeeeeeeeeeeeeeeeeeeeeeee
    eedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeedeeeeeeee
    eeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeddeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeedeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeee
    eeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeedeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeee
    edeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeedeeeeeeeeedeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeedeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeee
    eeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeedeeeeeeeeeedeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeedeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
tiles.setCurrentTilemap(tilemap`level2`)
scene.cameraFollowSprite(DLJ)
tiles.placeOnRandomTile(DLJ, assets.tile`myTile`)
info.setLife(3)
animation.runImageAnimation(
DLJ,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 f f 5 5 5 f f 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    `,img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    . . . . 5 5 5 . 5 5 5 . . . . . 
    `],
100,
true
)
for (let value of tiles.getTilesByType(assets.tile`myTile4`)) {
    gem = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.gem)
    animation.runImageAnimation(
    gem,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 6 9 9 6 6 6 6 f . . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . . f 6 6 6 6 6 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 9 6 6 f . . . . . . 
        . . . . f 6 6 6 6 6 f . . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . . f 6 6 6 6 6 f . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . . f 6 f . . . . . . . 
        . . . . . . f f f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f 9 6 6 f . . . . . . 
        . . . . f 6 6 6 6 6 f . . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . . f 6 6 6 6 6 f . . . . . 
        . . . . . f 6 6 6 f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . f 6 9 6 6 6 f . . . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . . f 6 9 6 6 6 6 6 f . . . . 
        . . . . f 6 6 6 6 6 f . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f . . . . . 
        . . . f 6 9 9 6 6 6 6 f . . . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . f 6 9 6 6 6 6 6 6 6 6 6 f . . 
        . . f 6 9 6 6 6 6 6 6 6 f . . . 
        . . . f 6 6 6 6 6 6 6 f . . . . 
        . . . . f f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    true
    )
    tiles.placeOnTile(gem, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
}
