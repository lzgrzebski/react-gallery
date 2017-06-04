var request = require('request');
var express = require('express');

var app = express();

app.use(express.static('public'));

var MAX_IMAGES = 250;
var authors = [
    'Agatha',
    'Danuta',
    'Antione',
    'Noella',
    'Marybelle',
    'Lynnette',
    'Eloisa',
    'Rosaura',
    'Mandie',
    'Ezra',
    'Bibi',
    'Priscila',
    'Owen',
    'Wilma',
    'Deloras',
    'Nellie',
    'Jestine',
    'Latrina',
    'Catalina',
    'Leisa',
    'Susie',
    'Elissa',
    'Mose',
    'Charlott',
    'Shannon',
    'Daisy',
    'Selina',
    'Arletha',
    'Vicente',
    'Christian',
];


app.get('/gallery', function(req, res) {
    var start = +req.query.start;
    var count = +req.query.count;

    var result = {
        images: []
    };
    for (var i = start; i < start + count; i++) {
        if (i > MAX_IMAGES) {
            break;
        }
        result.images.push({
            id: i,
            url: '/images/',
            author: authors[i % authors.length]
        });
    }
    res.send(JSON.stringify(result));
});

app.get('/images/:id/:size', function(req, res) {
    var id = req.params.id;
    if (id > MAX_IMAGES) {
        res.status(404).send();
    }
    if (Math.random() < 0.1) {
        // Pretend we have an unreliable service
        res.status(503).send();
    } else {
        var size = req.params.size;
        var color = (0 | (Math.abs(Math.sin(id) * 0xffffff)) % 0xffffff).toString(16);
        request('https://via.placeholder.com/' + size + '/' + color + '?text=' + id + '(' + size + ')').pipe(res);
    }
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log('navigate to http://localhost:'+port.toString());
});

