//count score 

const score = {
    pass: 0,
    loss: 0,
}

//play game start funciton 
function playGame() {
    hideSection('.home-screen');
    showSection('.play-ground');

    const key = randomKeywordGenerate();
    selectBgColorKeyboard(key.toLocaleLowerCase());

    findKeyboardkey(key);
}

function hideSection(elementClass) {
    const element = document.querySelector(elementClass);
    element.classList.add('hidden');
}

function showSection(elementClass) {
    const element = document.querySelector(elementClass);
    element.classList.remove('hidden');
}

function selectBgColorKeyboard(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-600');
}

function findKeyboardkey(key) {
    const generatedKey = key.toLocaleLowerCase();
    document.addEventListener('keydown', function(e) {
        if(generatedKey == e.key) {
            let pass = score.pass += 1;
            showScore('.pass', pass)
        }else {
            let loss = score.loss -= 1;
            showScore('.loss', loss)
        }
    })
}

function showScore(elementClass, score) {
    const element = document.querySelector(elementClass);
    element.innerText = score;
}

function randomKeywordGenerate() {
    const keyword = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z';
    const keywordArray = keyword.split(' ');

    const generateNum = Math.round(Math.random() * keywordArray.length - 1);
    const generateKey = keywordArray[generateNum];

    const showWord = document.getElementById('generate-word');
    showWord.innerText = generateKey;

    return generateKey;
}

