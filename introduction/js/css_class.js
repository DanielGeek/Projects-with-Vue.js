new Vue({
    el: '#app',
    data: {
        attachAqua: false,
        color: 'green'
    },
    computed: {
        divClasses: function () {
            return {
                aqua: this.attachAqua,
                blue: !this.attachAqua
            }
        }
    }
});