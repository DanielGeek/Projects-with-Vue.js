new Vue({
    el: '#app',
    data: {
        attachAqua: false
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