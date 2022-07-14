import Echo from 'laravel-echo';
 
window.Pusher = require('pusher-js');
 
window.Echo = new Echo({
    broadcaster: 'pusher',
    key: "sdfdhjewewtrgdb32732b",
    wsHost: "127.0.0.1",
    wsPort: 6001,
    forceTLS: false,
    disableStats: true,
    enabledTransports: ['ws', 'wss']
});

window.Echo.channel('order-channel')
    .listen('.shouldPrint', (e) => {
        console.log(e.order);
    })
