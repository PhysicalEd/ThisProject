$(document).ready(function () {
    var IndexModel = null;
    var HasRenderedSkills = false;


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

    Vue.directive('backgroundimage-contain',
        {
            bind: function (el, value) {
                $(el).css('background-image', `url('/content/img/${value.value}'`);
                $(el).css('background-repeat', 'no-repeat');
                $(el).css('background-size', 'contain');
                $(el).css('background-position', 'center center');
            }
        });

    // Skill components
    Vue.component('skill-item',
        {
            props: ['skill', 'level'],
            template: `
                <div class ="columns">
                    <div class ="column is-3" v-html="skill"></div>
                    <div class ="column is-9 is-div-centered">
                        <div class ="myprogress has-text-centered" v-html="level"></div>
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

    let app = new Vue({
        el: '#vue-instance',
        props: {
                
        },
        data: {
            IndexModel: IndexModel,
            IsJoking: true,
            CurrentPersona: "software developer"
        },
        methods: {
            Test: Test,
            CRM: function (event) {
                LoadContent(event.currentTarget, "CRM");
            },
            NFTB: function (event) {
                LoadContent(event.currentTarget, "NFTB");
            },
            MT4: function (event) {
                LoadContent(event.currentTarget, "MT4");
            },
            ThisProject: function (event) {
                LoadContent(event.currentTarget, "ThisProject");
            },
            CloseModal: CloseModal,
            DownloadCV: function () {
                window.open("/home/DownloadCV");
            },

            MyLife: function (event) {
                MyLife(event.currentTarget);


                //this.$mount('#vue-instance');
                //console.log(app);

            },
            ShowReferences: function (event) { ShowReferences(event.currentTarget) },
            RenderSkillsInYears: RenderSkillsInYears,
            Back: function () { window.history.back(); },
            ChangePersona: function() {
                var personas = ['father', 'husband', 'dancer', 'photography enthusiast'];
                var randomNumber = Math.floor((Math.random() * (personas.length)));
                this.CurrentPersona = personas[randomNumber];
            },
            ResetPersona: function () { this.CurrentPersona = "software developer" }
        }
    });

    $(document).on('scroll', function () {
        if (HasRenderedSkills) return;
        var windowHeight = $(window).height();
        var current = $(document).scrollTop();
        var skills = $('#SkillsSection').offset().top;

        if ((skills - current) <= windowHeight / 4) {
            AnimateSkills();
            HasRenderedSkills = true;
       }
    });

});

function OpenModal(data, cardTitle) {
    $('.modal-card-title').html(cardTitle);
    $('#ProjectContent').html(data);
    $('#ProjectModal').addClass('is-active');
    // Disable scrolling in background
    $('html').addClass('modal-open');
    $('body').addClass('modal-open');
}

function MyLife(el) {
    $(el).addClass('is-loading');
    $.get("/home/mylife", function (data) {
        OpenModal(data, "Like sands through the hourglass...");
    }).done(function () { $(el).removeClass('is-loading'); });
}


function Test() {
    $.get("/home/landing", function (data) {
        OpenModal(data, "Welcome");
    });
}

function LoadContent(el, projectName) {
    $('#ProjectContent').html("");
    $(el).addClass('is-loading');
    $.get("/project/" + projectName, function (data) {
        OpenModal(data);
    }).done(function() {
        $(el).removeClass('is-loading');
    });

}

function ShowReferences(el) {
    $(el).addClass('is-loading');
    $.get("/home/references", function (data) {
        OpenModal(data, "References");
    }).done(function () {
        $(el).removeClass('is-loading');
    });
}

function CloseModal() {
    $('.modal').removeClass('is-active');
    // Re-enable scrolling in background
    $('html').removeClass('modal-open');
    $('body').removeClass('modal-open');

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
    this.IsJoking = false;
    $('.myprogress').removeClass('shake');
    // Years working
    var delay = 100;
    $('.myprogress').each(function (index, el) {
        setTimeout(function () {
            var progressVal = 0;
            var numberOfYears = $(el).attr('data-years');
            var totalYears = 6;
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