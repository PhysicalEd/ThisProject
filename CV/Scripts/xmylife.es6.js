//$(document).ready(function () {
//    Vue.directive('backgroundimage',
//        {
//            // When the bound element is inserted into the DOM...
//            bind: function (el, value) {
//                $(el).css('background-image', `url('/content/img/${value.value}'`);
//                $(el).css('background-repeat', 'no-repeat');
//                $(el).css('background-size', 'cover');
//                $(el).css('background-position', 'center center');

//            }
//        });

//    Vue.component('timeline-item', {
//        props: ['title', 'subtitle', 'image', 'description'],
//        template: `
//            <div class ="timeline-item is-primary">
//                <div class ="timeline-marker is-primary is-centered"></div>
//                <div class = "timeline-content box">
//                <h4 class ="title is-4" v-html="title"></h4>
//                <h4 class ="subtitle is-6" v-html="subtitle"></h4>
//                <div class ="box has-background-white-ter image-container">
//                    <div class ="image is-128x128 box" v-backgroundimage="image"></div>
//                    <p v-html="description"></p>
//                </div>
//            </div>
//            </div>`
//    });

//    var app = new Vue({
//        el: '#vue-instance',
//        data: {
//            message: 'Hello Vue!'
//        }
//        //directives: {
//        //    focus: {
//        //        bind: function (el, val, val2) {
//        //            $(el).css('background-color', 'black');
//        //            console.log("Val", val);
//        //            console.log("Val2", val2);

//        //        }
//        //    }
//        //}
//    });
//})



