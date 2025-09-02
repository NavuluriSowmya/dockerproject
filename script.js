window.addEventListener('DOMContentLoaded', async () => {
    const res = await fetch('/api/events');
    const events = await res.json();

    const container = document.getElementById('events-list');
    events.forEach(event => {
        const div = document.createElement('div');
        div.className = 'event';
        div.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p>${event.description}</p>
        `;
        container.appendChild(div);
    });
});
