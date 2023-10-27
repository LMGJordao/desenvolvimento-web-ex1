document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
            duration: "200%" // this works just fine with duration 0 as well
            // However with large numbers (>20) of pinned sections display errors can occur so every section should be unpinned once it's covered by the next section.
            // Normally 100% would work for this, but here 200% is used, as Panel 3 is shown for more than 100% of scrollheight due to the pause.
        }
    });

    let slides = document.querySelectorAll("section.panel");

    for (let i = 0; i < slides.length; i++) {
        new ScrollMagic.Scene({
            triggerElement: slides[i]
            })
            .setPin(slides[i], {pushFollowers: false})
            .addIndicators()    //debug
            .addTo(controller);
    }
});