$(document).ready(function(){
    $('#fullpage').fullpage({
        anchors: ['1', '2'],
        autoScrolling: true,
        onLeave: function(origin, destination, direction){
            if (origin.index == 0 && direction == 'down') {
                $('.life').animate({
                        bottom: "0px",
                        position: "fixed"
                    },
                    1000,
                    () => {

                    });
            }
        },
        afterLoad: function(origin, destination, direction){

            var loadedSection = this;

            //using index
            if (origin !== null && origin.index === 0) {
            }
        }
        

    //fixedElements: '#navbar'
    });

    

    //fullpage_api.silentMoveTo('2', 2);
});

