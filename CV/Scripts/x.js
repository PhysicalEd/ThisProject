$(document).ready(function () {
    $('#nav-button').on('click',
        function () {
            $('#navbar').slideToggle();
        });

    Vue.directive('backgroundimage',
        {
            // When the bound element is inserted into the DOM...
            bind: function (el, value) {
                $(el).css('background-image', `url('/content/img/${value.value}'`);
                $(el).css('background-repeat', 'no-repeat');
                $(el).css('background-size', 'cover');
                $(el).css('background-position', 'center center');

            }
        });

    // Box layou
    //Vue.component('timeline-item',
    //    {
    //        props: ['title', 'subtitle', 'image', 'description'],
    //        template: `
    //        <div class ="timeline-item is-primary">
    //            <div class ="timeline-marker is-primary is-centered"></div>
    //            <div class = "timeline-content box">
    //            <h4 class ="title is-4" v-html="title"></h4>
    //            <h4 class ="subtitle is-6" v-html="subtitle"></h4>
    //            <div class ="box has-background-white-ter image-container">
    //                <div class ="image is-128x128 box" v-backgroundimage="image"></div>
    //                <p v-html="description"></p>
    //            </div>
    //        </div>
    //        </div>`
    //    });

    Vue.component('timeline-item',
        {
            props: ['title', 'subtitle'],
            template: `
                <div class ="timeline-item is-primary">
                    <div class ="timeline-marker is-primary is-centered"></div>
                    <div class ="timeline-content">
                        <h4 class ="title is-4" v-html="title"></h4>
                        <h4 class ="subtitle is-6" v-html="subtitle"></h4>
                    </div>
                </div>`
        });

    Vue.component('timeline-content',
        {
            props: ['image', 'description'],
            template: `
                <div class="timeline-item is-primary">
                    <div class="timeline-marker is-image is-96x96">
                        <div class="image is-96x96" v-backgroundimage="image"></div>
                    </div>

                    <div class="timeline-content is-128-high">
                        <p class="auto-margin" v-html="description"></p>
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

    Vue.component('project-item-section',
        {
            props: ['title', 'description'],
            template: `
                <div class ="columns sub-section-margin">
                    <div class ="column is-2">
                        <h6 class ="subtitle is-6 is-italic" v-html="title"></h6>
                    </div>
                    <div class ="column is-10">
                        <p v-html="description"></p>
                    </div>
                </div>`
        })

    var app = new Vue({
        el: '#vue-instance',
        data: {
            isActive: true
        },
        methods: {
            CRM: function() {
                LoadContent("CRM");
            },
            NFTB: function() {
                LoadContent("NFTB");
            },
            MT4: function () { LoadContent("MT4") },
            CloseModal: CloseModal,
            DownloadCV: function () {
                window.open("/home/DownloadCV");
            }
        }
    });
});


function LoadContent(projectName)
{
    ResetGrayscale();

    //$('#' + projectName).removeClass('grayscale');

    $.get("/project/" + projectName, function (data) {
        $('.modal-card-title').html(projectName);
        $('#ProjectContent').html(data);
        $('#ProjectModal').addClass('is-active');
    });
    
}

function ResetGrayscale() {
    $('.tile.is-child').addClass('grayscale');
}

function CloseModal() {
    $('#ProjectModal').removeClass('is-active');
}


