new Vue({
    el: '#app2',
    data: {
        title: 'Hello World',
        link: 'http://google.com'
    },
    methods: {
        sayHello: function() {
            this.title = 'Hello!';
            return this.title;
        }
    }
});