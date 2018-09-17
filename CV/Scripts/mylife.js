$(document).ready(function() {
    Vue.component('timeline-item',
        {
            props: ['title', 'subtitle'],
            template: `
                <div class ="timeline-item is-gray">
                    <div class ="timeline-marker is-gray"></div>
                    <div class ="timeline-content has-background-light">
                        <h4 class ="title is-4" v-html="title"></h4>
                        <h4 class ="subtitle is-6" v-html="subtitle"></h4>
                    </div>
                </div>`
        });

    Vue.component('timeline-content',
        {
            props: ['image', 'description'],
            template: `
                <div class="timeline-item is-gray">
                    <div class="timeline-marker is-image is-96x96">
                        <div class="image is-96x96" v-backgroundimage="image"></div>
                    </div>

                    <div class ="timeline-content is-128-high">
                        <p class="auto-margin has-text-dark" v-html="description"></p>
                    </div>
                </div>`
        });

    var myLife = new Vue({
        el: '#MyLife'
       
    });
})