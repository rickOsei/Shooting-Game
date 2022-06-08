// SHOOTING ENEMIES
function playerShoot(enemy) {
    enemy.classList.add('dead')

    if(livingEnemies().length===0){
        alert('👏 Victory!')
        window.location.reload();
    }
};

// ENEMIES SHOW AND ATTACK

function enemyAttacks(enemy) {
    enemy.classList.add('showing')

    setTimeout(() => {
        enemyShoots(enemy);
    }, 1000)

    setTimeout(() => {
        enemy.classList.remove('showing')
    }, 3000)
};


function enemyShoots(enemy) {
    if (!enemy.classList.contains('dead')) {
        enemy.classList.add('shooting')

        updateHealthPoints(healthPoints - 20)

        setTimeout(() => {
            enemy.classList.remove('shooting')
        }, 200)
    }

};

function livingEnemies() {
    return document.querySelectorAll('.enemy:not(.dead)')
}

// ADDING SURPRISE
function randomEnemyAttacks() {
    let randomEnemyNo = Math.floor(Math.random() * livingEnemies().length);
    enemy = livingEnemies()[randomEnemyNo];

    // DEFINING SECS BEFORE SURPRISE ATTACK
    let randomDelay = Math.random() * 2000 + 1000;

    setTimeout(() => {
        enemyAttacks(enemy);
        randomEnemyAttacks();
    }, randomDelay)
};

// DEFINING HEALTH OF PLAYER

let healthPoints = 100;

let updateHealthPoints = (points) => {
    healthPoints = points;
    let healthBar = document.getElementById('healthBar');

    healthBar.style.width = `${points}%`

    if (healthPoints < 1) {
        alert('😞 Game Over!')
        window.location.reload();
    }
}

// DEFINING NEW GAME FUNCTION

let newGame = ()=>{
    randomEnemyAttacks();
    document.querySelector('button').style.display = 'none'
}

