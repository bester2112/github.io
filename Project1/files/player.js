// player is fire bullets
function fireBullet () {
    if (game.time.now > bulletTime) {
        var bullet = bullets.getFirstExists(false);
        if (bullet) {
            bullet.reset(player.x + 14, player.y);
            bullet.body.velocity.y = -customPlayerFireSpeed;
            bulletTime = game.time.now + customFireRate;
        }
    }
}