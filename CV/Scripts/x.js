$(document).ready(function () {
    var IndexModel = null;

    // Directives
    Vue.directive('backgroundimage',
        {
            bind: function (el, value) {
                $(el).css('background-image', `url('/content/img/${value.value}'`);
                $(el).css('background-repeat', 'no-repeat');
                $(el).css('background-size', 'cover');
                $(el).css('background-position', 'center center');
            }
        });

    // Timeline components
    //Vue.component('timeline-item',
    //    {
    //        props: ['title', 'subtitle'],
    //        template: `
    //            <div class ="timeline-item is-primary">
    //                <div class ="timeline-marker is-primary is-centered"></div>
    //                <div class ="timeline-content">
    //                    <h4 class ="title is-4" v-html="title"></h4>
    //                    <h4 class ="subtitle is-6" v-html="subtitle"></h4>
    //                </div>
    //            </div>`
    //    });

    //Vue.component('timeline-content',
    //    {
    //        props: ['image', 'description'],
    //        template: `
    //            <div class="timeline-item is-primary">
    //                <div class="timeline-marker is-image is-96x96">
    //                    <div class="image is-96x96" v-backgroundimage="image"></div>
    //                </div>

    //                <div class="timeline-content is-128-high">
    //                    <p class="auto-margin" v-html="description"></p>
    //                </div>
    //            </div>`
    //    });

    // Skill components
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


    // Project components
    //Vue.component('project-item-section',
    //    {
    //        props: ['title', 'description'],
    //        template: `
    //            <div class ="columns sub-section-margin">
    //                <div class ="column is-2">
    //                    <h6 class ="subtitle is-6 is-italic" v-html="title"></h6>
    //                </div>
    //                <div class ="column is-10">
    //                    <p v-html="description"></p>
    //                </div>
    //            </div>`
    //    });

    var app = new Vue({
        el: '#vue-instance',
        data: {
            Reference: "",
            IndexModel: IndexModel
            //TimelineItems: ""
        },
        methods: {
            Test: Test,
            CRM: function (event) {
                LoadContent("CRM");
            },
            NFTB: function (event) {
                LoadContent("NFTB");
            },
            MT4: function(event) {
                LoadContent(event.currentTarget, "MT4");
            },
            CloseModal: CloseModal,
            DownloadCV: function () {
                window.open("/home/DownloadCV");
            },
            ShowReference: function (reference) {
                this.Reference = reference;
                ShowReference(this.Reference);
            },
            DownloadReference: function () { DownloadReference(this.Reference) },
            MyLife: function (event) {
                MyLife(event.currentTarget);
                

                //this.$mount('#vue-instance');
                //console.log(app);

            },
            RenderSkillsInYears: RenderSkillsInYears,
            Back: function () { window.history.back(); }
        }
    });

    console.log(app);


    //AnimateSkills();

});

function MyLife(el) {
    $(el).addClass('is-loading');
    //location.href = "/home/mylife";
    $.get("/home/mylife", function (data) {
        $('.modal-card-title').html("Welcome!");
        $('#ProjectContent').html(data);
        $('#ProjectModal').addClass('is-active');
    }).done(function () { $(el).removeClass('is-loading'); });
}


function Test() {
    $.get("/home/landing", function (data) {
        $('.modal-card-title').html("Welcome!");
        $('#ProjectContent').html(data);
        $('#ProjectModal').addClass('is-active');
    });
}

function LoadContent(el, projectName) {
    $(el).addClass('is-loading');

    //$.get("/project/" + projectName, function (data) {

    //    $('.modal-card-title').html(projectName);
    //    $('#ProjectContent').html(data);
    //    $('#ProjectModal').addClass('is-active');
    //});

}

//function ResetGrayscale() {
//    $('.tile.is-child').addClass('grayscale');
//}

function CloseModal() {
    $('.modal').removeClass('is-active');
}

function ShowReference(reference) {
    var content = $('#' + reference).html();
    $('#ReferenceContent').html(content);
    $('.modal-card-title').html("Reference by " + reference);
    $('#ReferenceModal').addClass('is-active');
}

function DownloadReference(reference) {
    window.open("/home/DownloadReference?referenceName=" + reference);
}

function AnimateSkills() {
    var delay = 100;
    $('.myprogress').each(function (index, el) {
        setTimeout(function () {
            var progressVal = 0;
            var timer = setInterval(function () {
                progressVal += 1;
                var progressValDesc = progressVal + '%';
                $(el).css('width', progressValDesc);
                $(el).html(progressValDesc);
                if (progressVal == 100) {
                    $(el).addClass('shake');
                    clearInterval(timer);
                }
            },
                5);
        }, delay);
        delay += 100;
    });
}

function RenderSkillsInYears() {
    $('.myprogress').removeClass('shake');
    // Years working
    var delay = 100;
    $('.myprogress').each(function (index, el) {
        setTimeout(function () {
            var progressVal = 0;
            var numberOfYears = $(el).attr('data-years');
            var totalYears = 7;
            var timer = setInterval(function () {
                progressVal += 1;
                var progressValDesc = progressVal + '%';
                $(el).css('width', progressValDesc);
                $(el).html(numberOfYears + " yrs");
                if (progressVal >= (numberOfYears * 100) / totalYears) {
                    clearInterval(timer);
                }
            },
                5);
        }, delay);
        delay += 100;
    });
}