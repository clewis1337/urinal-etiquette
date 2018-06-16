let intervalId = null;
    let clockRunning = false;
    let seconds = 5;
    let playerScore = 0;
    let currentQuestion = 0;
    
    $('#start').on('click', countdownTimer);
    $('#submit1').on('click', submit1);
    $('#submit2').on('click', submit2);
    $('#submit3').on('click', submit3);
    $('#submit4').on('click', submit4);
    $('#submit5').on('click', submit5);
    $('#restartButton').on('click', resetGame);



    function submit1(){
        currentQuestion = 2;
        seconds = 5;
        let answer1 = $('.q1 :checked').val();
        if (answer1 === 'a'){
            playerScore++;
            console.log('playerScore: ' + playerScore);
        }
        $('.q1').hide();
        $('.q2').show(); 
    }
    function submit2(){
        currentQuestion = 3;
        seconds = 5;
        let answer2 = $('.q2 :checked').val();
        if (answer2 === 'd'){
            playerScore++;
            console.log('playerScore: ' + playerScore);
        }
        $('.q2').hide();
        $('.q3').show(); 
    }
    function submit3(){
        currentQuestion = 4;
        seconds = 5;
        let answer3 = $('.q3 :checked').val();
        if (answer3 === 'd'){
            playerScore++;
            console.log('playerScore: ' + playerScore);
        }
        $('.q3').hide();
        $('.q4').show(); 
    }
    function submit4(){
        currentQuestion = 5;
        seconds = 5;
        let answer4 = $('.q4 :checked').val();
        if (answer4 === 'a'){
            playerScore++;
            
            console.log('playerScore: ' + playerScore);
        }
        $('.q4').hide();
        $('.q5').show(); 
    }
    function submit5(){
        let answer5 = $('.q5 :checked').val();
        if (answer5 === 'c'){
            playerScore++;
            console.log('playerScore: ' + playerScore);
        }
        $('.q5').hide();
        $('.timer').hide();
        $('.displayScore').text('YOUR SCORE: ' + playerScore + '/5');
        $('.displayScore').show();
        $('.restart').show();
        currentQuestion = 6; 
    }

    function countdownTimer(){
        currentQuestion = 1;
        if (!clockRunning) {
            clockRunning = true;
            intervalID = setInterval(eachSecond, 1000);
        }
        
        $('.q1').show();
        $('#start').hide();
        $('.title-img').hide();
        $('.timer').show();
    }

    function eachSecond(){
        seconds--;
        $('.timer').text("TIME LEFT: " + seconds);
        
        if (seconds=== 0){
            seconds=5;
            switch (currentQuestion){
                case 1:
                    submit1();
                    break;
                case 2:
                    submit2();
                    break;
                case 3:
                    submit3();
                    break;
                case 4:
                    submit4();
                    break;
                case 5:
                    submit5();
                    break;
            }
        }
    }

    function resetGame() {
        seconds = 5;
        currentQuestion = 1;
        playerScore = 0;
        $('.timer').show();
        $('.displayScore').hide();
        $('.restart').hide(); 
        countdownTimer();
    }