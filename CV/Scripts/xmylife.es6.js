$(document).ready(() => {
    $('#fullpage').fullpage({
        autoScrolling: true,
        onLeave: (origin, destination, direction) => {
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
        afterLoad: (origin, destination, direction) => {
            var loadedSection = this;

            //using index
            if (origin !== null && origin.index === 0) {
            }
        },
        

    //fixedElements: '#navbar'
});
});

