$(document).ready(function () {
    let project = new Vue({
        el: '#ProjectInstance',
      methods: {
            LoadGitHub: function (projectName) { LoadGitHub(projectName) }
        }
    });
});

function LoadGitHub(projectName) {
    window.open("https://github.com/PhysicalEd/" + projectName);

}