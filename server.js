const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

mongoose.connect('mongodb://localhost:27017/concertsApp', { useNewUrlParser: true, useUnifiedTopology: true });

const EventSchema = new mongoose.Schema({
    title: String,
    date: String,
    location: String,
    description: String
});

const Event = mongoose.model('Event', EventSchema);

app.use(bodyParser.json());
app.use(express.static('public'));

// Get all events
app.get('/api/events', async (req, res) => {
    const events = await Event.find();
    res.json(events);
});

// Add new event (admin)
app.post('/api/events', async (req, res) => {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.json({ message: 'Event added successfully' });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
