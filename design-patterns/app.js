var scoreboard1 = {
    increaseScore: function () {
        var currentScore = parseInt($('#scoreboard1 h1').text());
        $('#scoreboard1 h1').text(currentScore + 1);
    }
};

var scoreboard2 = {
    increaseScore: function () {
        var currentScore = parseInt($('#scoreboard2 h1').text());
        $('#scoreboard2 h1').text(currentScore + 1);
    }
};

var keyboard = {
    onPlus: function (fn) {
        $(document).on('keypress', function (e) {
            if (e.keyCode === 61) fn();
        });
    },
    onMinus: function (fn) {
        $(document).on('keypress', function (e) {
            if (e.keyCode === 45) fn();
        });
    }
};

var timer = {
    currentTime: 10,
    startTimer: function () {
        var self = this;
        setInterval(function () {
            self.currentTime--;
        }, 1000);
    }
};

var game = {
    startGame: function () {
        keyboard.onPlus(function () {
            if (timer.currentTime > 0) {
                scoreboard1.increaseScore();
            }
        });
        keyboard.onMinus(function () {
            if (timer.currentTime > 0) {
                scoreboard2.increaseScore();
            }
        });
        timer.startTimer();
    }
};

game.startGame();