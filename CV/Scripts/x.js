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

    //var isMobile = false; //initiate as false
    //// device detection
    //if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
    //    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) {
    //    isMobile = true;
    //}

    //if (!isMobile) {
    //    $.get("/home/mylife",
    //        function(data) {
    //            OpenModal(data, "Like sands through the hourglass...");
    //        }).done(function() { $(el).removeClass('is-loading'); });
    //} else {
    //    location.href = "/home/mylife?isPartial=true";
    //}

    $.get("/home/mylife",
        function (data) {
            OpenModal(data);
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