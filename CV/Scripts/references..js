$(document).ready(function() {
    var references = new Vue({
        el: '#References',
        data: {
            Reference: "Blackball",
        },
        methods: {
            DownloadReference: function () { DownloadReference(this.Reference) },
            ShowReference: function (reference) {
                $('#' + this.Reference + "Tab").removeClass('is-active');
                $('#' + reference + "Tab").addClass('is-active');
                this.Reference = reference;
            },
        }
    });
})

function DownloadReference(reference) {
    window.open("/home/DownloadReference?referenceName=" + reference);
}