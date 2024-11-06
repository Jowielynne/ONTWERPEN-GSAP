function naamvanjeAnimatie() {

    let naamvanjeTimeline = gsap.timeline({
        defaults: {
            duration: 1
        }
    })

        .from('.naamvanjeobject', { x: -300, ease: "expo.inout" })
        ;

    return naamvanjeTimeline;

}