$(document).ready(function () {
    let landing = new Vue({
        el: '#LandingInstance',
        data: {
            EmployerCompany: IndexModel.EmployerCompany,
            EmployerPosition: IndexModel.EmployerPosition
        },
        methods: {
            DownloadCV: function () {
                window.open("/home/DownloadCV");
            },
        }

    });
});