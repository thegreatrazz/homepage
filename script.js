
const bangs = [
    // Google stuff
    [ '!g', 'Google' ],
    [ '!gphotos', 'Google Photos' ],
    [ '!maps', 'Google Maps' ],

    //
    [ '!img', 'Search images' ],
    [ '!video', 'Search videos' ],
    
    // Media consumption
    [ '!yt', 'YouTube' ],
    [ '!spy', 'Spotify' ],
    [ '!scloud', 'Soundcloud' ],
    [ '!xkcd', 'sudo make me a sandwitch' ],
    [ '!xkcd', 'xkcd' ],
    [ '!netflix', 'Netflix' ],
    [ '!netflix', 'and chill' ],
    [ '!tweet', 'Twitter' ],
    [ '!r', 'Reddit' ],

    // UNIX
    [ '!die', 'Linux Manual Pages' ],
    
    // Programming
    [ '!sx', 'Stack Exchange' ],
    [ '!npm', 'Node Package Manager' ],
    
    // Maths
    [ '!calc', 'Calculator' ],
    [ '!wa', 'Wolfram Alpha' ],
    [ '!wa', 'Calculator powered by magic' ],

    // Translation
    [ '!tr', 'Translate' ],
    [ '!gtro', 'Translate to Romanian' ],
    [ '!gtro', 'traduce către limba română' ],
    [ '!gtja', 'Translate to Japanese' ],
    [ '!gtja', '日本語にホンヤクする' ],
    [ '!gtja', '<code>ALL YOUR BASE ARE BELONG TO US</code>' ],

    // Reading
    [ '!med', 'Medium' ],
]

$(() => {
    $("#search input").focus(() => {
        var index = Math.floor(Math.random() * bangs.length)
        var bang = bangs[index]

        $("#bang-suggestion").html('<b>' + bang[0] + '</b> ' + bang[1])
        $("#bangs").slideDown(150)
        // $("#sections").slideUp(250, 'linear')
    })

    $("#search input").blur(() => {
        $("#bangs").delay(225).slideUp(150)
        // $("#sections").slideDown(250, 'linear')
    })
})