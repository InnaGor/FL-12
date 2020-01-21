function Fighter(featuresObj) {
    let features = featuresObj;
    features.totalHP = features.hp;
    features.wins = 0;
    features.losses = 0;

    return {
        getName: () => features.name,
        getDamage: () => features.damage,
        getStrength: () => features.strength,
        getHealth: () => features.hp,
        getAgility: () => features.agility,
        heal: (value) => {
            value + features.hp <= features.totalHP ?
                features.hp += value :
                features.hp = features.totalHP;
        },
        dealDamage: (value) => {
            features.hp - value >= 0 ?
                features.hp -= value :
                features.hp = 0;
        },
        attack: (fighter) => {
            const BEST_SUCCESS_LEVEL = 1;
            const SUCCESS_COEF = 100;
            let success = BEST_SUCCESS_LEVEL - (features.agility + features.strength) / SUCCESS_COEF;
            if (Math.random() <= success) {
                fighter.dealDamage(features.damage);
                console.log(`${features.name} makes ${features.damage} damage to ${fighter.getName()}`);
            } else {
                console.log(`${features.name} attack missed`);
            }
        },
        logCombatHistory: () => console.log(`Name: ${features.name}, ` +
            `Wins: ${features.wins}, ` +
            `Losses: ${features.losses}`),

        addWin: () => features.wins++,
        addLoss: () => features.losses++
    };
}

function battle(firstFighter, secondFighter) {
    if (firstFighter.getHealth() === 0 || secondFighter.getHealth() === 0) {
        firstFighter.getHealth() === 0 ?
            console.log(`${firstFighter.getName()} is dead and can't fight.`) :
            console.log(`${secondFighter.getName()} is dead and can't fight.`);

        return;
    }

    while (firstFighter.getHealth() > 0 && secondFighter.getHealth() > 0) {
        firstFighter.attack(secondFighter);
        if (secondFighter.getHealth() > 0) {
            secondFighter.attack(firstFighter);
            if (firstFighter.getHealth() === 0) {
                secondFighter.addWin();
                firstFighter.addLoss();
                console.log(`${secondFighter.getName()} has won!`);
            }
        } else {
            firstFighter.addWin();
            secondFighter.addLoss();
            console.log(`${firstFighter.getName()} has won!`);
        }
    }
}