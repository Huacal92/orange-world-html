document.addEventListener('DOMContentLoaded', () => {
    const initializeSlider = () => {
        jQuery('#rev_slider_1').show().revolution({
            sliderType:"standard",
            jsFileLocation:"revolution/js/",
            sliderLayout:"fullwidth",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"off",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                },
                
                arrows: {
                    style: "nav-home-1",
                    enable: false,
                    hide_onmobile: false,
                    hide_onleave: false,
                    left: {
                        h_align: "left",
                        v_align: "bottom",
                        h_offset: 70,
                        v_offset: 100
                    },
                    right: {
                        h_align: "rigth",
                        v_align: "bottom",
                        h_offset: 70,
                        v_offset: 100
                    }
                },
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    style:"bullet-home-1",
                    hide_onleave:false,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"center",
                    h_offset:50,
                    v_offset:510,
                    space:6,
                    tmp:''
                }							
            },
            responsiveLevels:[1190,1080,980,480],
            visibilityLevels:[1190,1080,980,480],
            gridwidth:[1190,1080,980,480],
            gridheight:[1190,1080,980,480],
            lazyType:"none",
            parallax: {
                type:"scroll",
                origo:"slidercenter",
                speed:2000,
                levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55],
            },
            shadow:0,
            spinner:"off",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"on",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "60px",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
            

        });
    };

    initializeSlider();
});