$(document).ready(function() {
    $('#nav-button').on('click',
        function() {
            $('#navbar').slideToggle();
        });

    Vue.directive('backgroundimage',
        {
            // When the bound element is inserted into the DOM...
            bind: function(el, value) {
                $(el).css('background-image', `url('/content/img/${value.value}'`);
                $(el).css('background-repeat', 'no-repeat');
                $(el).css('background-size', 'cover');
                $(el).css('background-position', 'center center');

            }
        });

    Vue.component('timeline-item',
        {
            props: ['title', 'subtitle', 'image', 'description'],
            template: `
            <div class ="timeline-item is-primary">
                <div class ="timeline-marker is-primary is-centered"></div>
                <div class = "timeline-content box">
                <h4 class ="title is-4" v-html="title"></h4>
                <h4 class ="subtitle is-6" v-html="subtitle"></h4>
                <div class ="box has-background-white-ter image-container">
                    <div class ="image is-128x128 box" v-backgroundimage="image"></div>
                    <p v-html="description"></p>
                </div>
            </div>
            </div>`
        });

    Vue.component('skill-item',
        {
            props: ['skill', 'level'],
            template: `
                <div class ="columns">
                    <div class ="column is-3" v-html="skill"></div>
                    <div class ="column is-9 is-div-centered">
                        <div class ="myprogress has-text-centered" data-years="level"></div>
                    </div>
                </div>`
        });

    var app = new Vue({
        el: '#vue-instance'
    });
});



