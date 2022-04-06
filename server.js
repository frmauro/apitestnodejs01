const joy = require('joy');
const express = require('express');
const app = express();

app.use(express.json());

const courses = [
    {id: 1, name: 'course01'},
    {id: 2, name: 'course02'},
    {id: 3, name: 'course03'},
    {id: 4, name: 'course04'},
]

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id', (req, res) => {
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course)
    return res.status(404).send('The course with the given ID was not found !!');
    res.send(course);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listenning on port ${port}...`));