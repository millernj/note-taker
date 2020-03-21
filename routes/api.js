const { Router } = require('express');

const notes = require('../db/db.json');

const router = Router();

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    const { body } = req;
    body.id = notes.length + 1;
    notes.push(body);
    res.send(true);
})

router.delete('/notes/:id', (req, res) => {
    notes.splice(
        notes.findIndex(element => element.id === parseInt(req.params.id)),
        1
    )
    res.send(true);
});

module.exports = router;