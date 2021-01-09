const tictactoeApp = {};

tictactoeApp.spanIDObj = {};
tictactoeApp.count = 0;
$gridSpan = $('.grid span');

tictactoeApp.play = () => {
    let spanID = 0;
    $h2Span = $('h2 span');

    $gridSpan.keypress(function (event) {
        //check
        if (!$('input[type=checkbox]').prop('checked')) {
            if (event.keyCode === 13) {
                event.preventDefault();
                spanID = $(this).attr('id');
                if (!tictactoeApp.match()) {
                    game();
                }
            }
        }
    })

    $gridSpan.on('click', function () {
        spanID = $(this).attr('id');
        // game();
        if (!tictactoeApp.match()) {
            game();
        }
        else {
            $gridSpan.off('click');
        }
    })

    const game = () => {
        const h2ID = $h2Span.attr('id');
        //disabling random checkbox if not selected before tap or click
        $('input[type=checkbox]').attr('disabled', true);
        if (spanID in tictactoeApp.spanIDObj) {
            alert('Click another tile.');
        }
        else {
            if (h2ID === 'blue') {
                $(`#${spanID}`).addClass('blue');
                $h2Span.removeClass('blue');
                $h2Span.addClass('yellow');
                $h2Span.prop('id', 'yellow');
                tictactoeApp.spanIDObj[spanID] = 'blue';
            }
            else {
                $(`#${spanID}`).addClass('yellow');
                $h2Span.removeClass('yellow');
                $h2Span.addClass('blue');
                $h2Span.prop('id', 'blue');
                tictactoeApp.spanIDObj[spanID] = 'yellow';
            }
            tictactoeApp.count++;
            tictactoeApp.match();
        }
    }
}

tictactoeApp.random = () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const arrRandom = [];
    // const arrRandom = [1, 4, 2, 5, 3, 6, 7, 8, 9]
    let clickCount = 0;
    while(arr.length) {
        const randomNum = Math.floor(Math.random() * arr.length);
        const index = arr.splice(randomNum, 1)[0];
        arrRandom.push(index);
    }
    console.log(arrRandom);
    // console.log($('input[type=checkbox]').prop('checked'));

    $('.random').on('change', () => {
        if ($('input[type=checkbox]').prop('checked')) {
            $('input[type=checkbox]').attr('disabled', true);
            $gridSpan.off('click');
            // console.log(true);
        }
        $gridSpan.keypress(function (event) {
            if (event.keyCode === 13) {
                event.preventDefault();
                // spanID = $(this).attr('id');
                if (!tictactoeApp.match()) {
                    game();

                    tictactoeApp.match();
                }
            }
        })
        $gridSpan.on('click', () => {
            // game2();
            if (!tictactoeApp.match()) {
                game();

                tictactoeApp.match();
            }
            else {
                $gridSpan.off('click');
            }
        })
    })


    const game = () => {
        if (clickCount === 0) {
            $(`#${arrRandom[0]}`).addClass('blue');
            tictactoeApp.spanIDObj[`${arrRandom[0]}`] = 'blue';
            if (!tictactoeApp.match()) {
                $(`#${arrRandom[1]}`).addClass('yellow');
                tictactoeApp.spanIDObj[`${arrRandom[1]}`] = 'yellow';
            }
            clickCount++;
            // tictactoeApp.match();
        }
        else if (clickCount === 1) {
            $(`#${arrRandom[2]}`).addClass('blue');
            tictactoeApp.spanIDObj[`${arrRandom[2]}`] = 'blue';
            if (!tictactoeApp.match()) {
                $(`#${arrRandom[3]}`).addClass('yellow');
                tictactoeApp.spanIDObj[`${arrRandom[3]}`] = 'yellow';
            }
            clickCount++;
            // tictactoeApp.match();
        }
        else if (clickCount === 2) {
            $(`#${arrRandom[4]}`).addClass('blue');
            tictactoeApp.spanIDObj[`${arrRandom[4]}`] = 'blue';
            if (!tictactoeApp.match()) {
                $(`#${arrRandom[5]}`).addClass('yellow');
                tictactoeApp.spanIDObj[`${arrRandom[5]}`] = 'yellow';
            }
            clickCount++;
            // tictactoeApp.match();
        }
        else if (clickCount === 3) {
            $(`#${arrRandom[6]}`).addClass('blue');
            tictactoeApp.spanIDObj[`${arrRandom[6]}`] = 'blue';
            if (!tictactoeApp.match()) {
                tictactoeApp.spanIDObj[`${arrRandom[7]}`] = 'yellow';
                $(`#${arrRandom[7]}`).addClass('yellow');
            }
            clickCount++;
            // tictactoeApp.match();
        }
        else if (clickCount === 4) {
            $(`#${arrRandom[8]}`).addClass('blue');
            // $(`#${arrRandom[1]}`).addClass('yellow');
            tictactoeApp.spanIDObj[`${arrRandom[8]}`] = 'blue';
            // tictactoeApp.spanIDObj[1] = 'yellow';
            // clickCount++;
            tictactoeApp.count = 9;
            // tictactoeApp.match();
            // $gridSpan.off('click');
        }
        console.log(tictactoeApp.spanIDObj);
    }

    //turn off event listeners
    // $('.random').on('click', () => {
    //     if ($('input[type=checkbox]').prop('checked')) {
    //         $('input[type=checkbox]').attr('disabled', true);
    //         $gridSpan.off('click');
    //         $gridSpan.on('click', () => {
    //             if (clickCount === 0) {
    //                 $(`#${arrRandom[0]}`).addClass('blue');
    //                 tictactoeApp.spanIDObj[`${arrRandom[0]}`] = 'blue';
    //                 if (!tictactoeApp.match()) {
    //                     $(`#${arrRandom[1]}`).addClass('yellow');
    //                     tictactoeApp.spanIDObj[`${arrRandom[1]}`] = 'yellow';
    //                 }
    //                 clickCount++;
    //                 tictactoeApp.match();
    //             }
    //             else if (clickCount === 1) {
    //                 $(`#${arrRandom[2]}`).addClass('blue');
    //                 tictactoeApp.spanIDObj[`${arrRandom[2]}`] = 'blue';
    //                 if (!tictactoeApp.match()) {
    //                     $(`#${arrRandom[3]}`).addClass('yellow');
    //                     tictactoeApp.spanIDObj[`${arrRandom[3]}`] = 'yellow';
    //                 }
    //                 clickCount++;
    //                 tictactoeApp.match();
    //             }
    //             else if (clickCount === 2) {
    //                 $(`#${arrRandom[4]}`).addClass('blue');
    //                 tictactoeApp.spanIDObj[`${arrRandom[4]}`] = 'blue';
    //                 if (!tictactoeApp.match()) {
    //                     $(`#${arrRandom[5]}`).addClass('yellow');
    //                     tictactoeApp.spanIDObj[`${arrRandom[5]}`] = 'yellow';
    //                 }
    //                 clickCount++;
    //                 tictactoeApp.match();
    //             }
    //             else if (clickCount === 3) {
    //                 $(`#${arrRandom[6]}`).addClass('blue');
    //                 tictactoeApp.spanIDObj[`${arrRandom[6]}`] = 'blue';
    //                 if (!tictactoeApp.match()) {
    //                     tictactoeApp.spanIDObj[`${arrRandom[7]}`] = 'yellow';
    //                     $(`#${arrRandom[7]}`).addClass('yellow');
    //                 }
    //                 clickCount++;
    //                 tictactoeApp.match();
    //             }
    //             else if (clickCount === 4) {
    //                 $(`#${arrRandom[8]}`).addClass('blue');
    //                 // $(`#${arrRandom[1]}`).addClass('yellow');
    //                 tictactoeApp.spanIDObj[`${arrRandom[8]}`] = 'blue';
    //                 // tictactoeApp.spanIDObj[1] = 'yellow';
    //                 // clickCount++;
    //                 tictactoeApp.count = 9;
    //                 tictactoeApp.match();
    //                 // $gridSpan.off('click');
    //             }
    //             console.log(tictactoeApp.spanIDObj);
    //         })
    //     }
    //     else {
    //         // tictactoeApp.play();
    //         // location.reload();
    //     }
    // })
}

tictactoeApp.match = () => {
    $h2 = $('h2');
    if ((tictactoeApp.spanIDObj[1] === 'blue' && tictactoeApp.spanIDObj[2] === 'blue' && tictactoeApp.spanIDObj[3] === 'blue') || 
        (tictactoeApp.spanIDObj[4] === 'blue' && tictactoeApp.spanIDObj[5] === 'blue' && tictactoeApp.spanIDObj[6] === 'blue') || 
        (tictactoeApp.spanIDObj[7] === 'blue' && tictactoeApp.spanIDObj[8] === 'blue' && tictactoeApp.spanIDObj[9] === 'blue') || 
        (tictactoeApp.spanIDObj[1] === 'blue' && tictactoeApp.spanIDObj[4] === 'blue' && tictactoeApp.spanIDObj[7] === 'blue') || 
        (tictactoeApp.spanIDObj[2] === 'blue' && tictactoeApp.spanIDObj[5] === 'blue' && tictactoeApp.spanIDObj[8] === 'blue') || 
        (tictactoeApp.spanIDObj[3] === 'blue' && tictactoeApp.spanIDObj[6] === 'blue' && tictactoeApp.spanIDObj[9] === 'blue') || 
        (tictactoeApp.spanIDObj[1] === 'blue' && tictactoeApp.spanIDObj[5] === 'blue' && tictactoeApp.spanIDObj[9] === 'blue') || 
        (tictactoeApp.spanIDObj[3] === 'blue' && tictactoeApp.spanIDObj[5] === 'blue' && tictactoeApp.spanIDObj[7] === 'blue')) {
        $h2.html(`Player Won: <span class="blue">blue</span>`);
        // $gridSpan.off('click');
        return true;
    } else
    if ((tictactoeApp.spanIDObj[1] === 'yellow' && tictactoeApp.spanIDObj[2] === 'yellow' && tictactoeApp.spanIDObj[3] === 'yellow') ||
        (tictactoeApp.spanIDObj[4] === 'yellow' && tictactoeApp.spanIDObj[5] === 'yellow' && tictactoeApp.spanIDObj[6] === 'yellow') ||
        (tictactoeApp.spanIDObj[7] === 'yellow' && tictactoeApp.spanIDObj[8] === 'yellow' && tictactoeApp.spanIDObj[9] === 'yellow') ||
        (tictactoeApp.spanIDObj[1] === 'yellow' && tictactoeApp.spanIDObj[4] === 'yellow' && tictactoeApp.spanIDObj[7] === 'yellow') ||
        (tictactoeApp.spanIDObj[2] === 'yellow' && tictactoeApp.spanIDObj[5] === 'yellow' && tictactoeApp.spanIDObj[8] === 'yellow') ||
        (tictactoeApp.spanIDObj[3] === 'yellow' && tictactoeApp.spanIDObj[6] === 'yellow' && tictactoeApp.spanIDObj[9] === 'yellow') ||
        (tictactoeApp.spanIDObj[1] === 'yellow' && tictactoeApp.spanIDObj[5] === 'yellow' && tictactoeApp.spanIDObj[9] === 'yellow') ||
        (tictactoeApp.spanIDObj[3] === 'yellow' && tictactoeApp.spanIDObj[5] === 'yellow' && tictactoeApp.spanIDObj[7] === 'yellow')) {
        $h2.html(`Player Won: <span class="yellow">blue</span>`);
        // $gridSpan.off('click');
        return true;
    }
    else if (tictactoeApp.count === 9) {
        $h2.html('Player Won: TIE');
        // $gridSpan.off('click');
        return true;
    }
}

tictactoeApp.replay = () => {
    $('button').on('click', () => {
        //refresh
        location.reload();
    })
}

tictactoeApp.init = () => {
    tictactoeApp.play();
    tictactoeApp.random();
    tictactoeApp.replay();
}

$(document).ready(function () {
    tictactoeApp.init();
})