const tictactoeApp = {};

tictactoeApp.spanIDObj = {};
tictactoeApp.count = 0;
$gridSpan = $('.grid span');

tictactoeApp.play = () => {
    $h2Span = $('h2 span');
    $gridSpan.on('click', function () {
        const h2ID = $h2Span.attr('id');
        const spanID = $(this).attr('id');
        if (spanID in tictactoeApp.spanIDObj) {
            alert('Click another tile.');
        }
        else {
            if (h2ID === 'blue') {
                $(this).addClass('blue');
                // $h2Span.html('Yellow');
                $h2Span.removeClass('blue');
                $h2Span.addClass('yellow');
                $h2Span.prop('id', 'yellow');
                tictactoeApp.spanIDObj[spanID] = 'blue';
            }
            else {
                $(this).addClass('yellow');
                // $h2Span.html('Blue');
                $h2Span.removeClass('yellow');
                $h2Span.addClass('blue');
                $h2Span.prop('id', 'blue');
                tictactoeApp.spanIDObj[spanID] = 'yellow';
            }
            tictactoeApp.count++;
            tictactoeApp.match();
            // console.log(tictactoeApp.count);
            // console.log(tictactoeApp.spanIDObj);
        }
    })
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
        $gridSpan.off('click');
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
        $gridSpan.off('click');
    }
    else if (tictactoeApp.count === 9) {
        $h2.html('Player Won: TIE');
        $gridSpan.off('click');
    }
}

tictactoeApp.replay = () => {
    $('button').on('click', () => {
        location.reload();
    })
}

tictactoeApp.init = () => {
    tictactoeApp.play();
    tictactoeApp.replay();
}

$(document).ready(function () {
    tictactoeApp.init();
})