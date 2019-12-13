var contacto = document.getElementById('contactoForm');
contactoForm.setAttribute('action','https://formspree.io/'+'digipixelagencia'+'@'+'gmail'+'.'+'com');

$(document).ready(function(){
    var controller = new ScrollMagic.Controller();
    var escena = new ScrollMagic.Scene({
        triggerElement: '#trigger ul',
        triggerHook: 0,
        reverse: false
    })
    .setClassToggle('#header-fade1', 'fade')
    // .addIndicators({
    //     name: 'fade-scene',
    //     colorTrigger: 'yellow',
    //     colorStart: 'green'
    // })
    .addTo(controller);

    var escena2 = new ScrollMagic.Scene({
        triggerElement: '#trigger ul',
        triggerHook: 0,
        reverse: false
    })
    .setClassToggle('#header-fade2', 'fade')
    // .addIndicators({
    //     name: 'fade-scene',
    //     colorTrigger: 'yellow',
    //     colorStart: 'green'
    // })
    .addTo(controller);

    var escena3 = new ScrollMagic.Scene({
        triggerElement: '#trigger ul',
        triggerHook: 0,
        reverse: false
    })
    .setClassToggle('#header-fade3', 'fade')
    // .addIndicators({
    //     name: 'fade-scene',
    //     colorTrigger: 'yellow',
    //     colorStart: 'green'
    // })
    .addTo(controller);

    var escena4 = new ScrollMagic.Scene({
        triggerElement: '#trigger4',
        triggerHook: 0,
        reverse: false
    })
    .setClassToggle('#mover', 'move')
    // .addIndicators({
    //     name: 'fade-scene',
    //     colorTrigger: 'yellow',
    //     colorStart: 'green'
    // })
    .addTo(controller);

    var escena5 = new ScrollMagic.Scene({
        triggerElement: '#trigger5',
        triggerHook: 0,
        reverse: false
    })
    .setClassToggle('#somos-fade1', 'fade')
    // .addIndicators({
    //     name: 'fade-scene',
    //     colorTrigger: 'yellow',
    //     colorStart: 'green'
    // })
    .addTo(controller);

    var escena6 = new ScrollMagic.Scene({
        triggerElement: '#trigger6',
        triggerHook: 0,
        reverse: false
    })
    .setClassToggle('#somos-fade2', 'fade')
    // .addIndicators({
    //     name: 'fade-scene',
    //     colorTrigger: 'yellow',
    //     colorStart: 'green'
    // })
    .addTo(controller);

    var escena7 = new ScrollMagic.Scene({
        triggerElement: '#trigger7',
        triggerHook: 0,
        reverse: false
    })
    .setClassToggle('#proyecto-move', 'desplazar')
    // .addIndicators({
    //     name: 'fade-scene',
    //     colorTrigger: 'yellow',
    //     colorStart: 'green'
    // })
    .addTo(controller);

    var escena8 = new ScrollMagic.Scene({
        triggerElement: '#trigger8',
        triggerHook: 0,
        reverse: false
    })
    .setClassToggle('#equipo-move', 'moveY')
    // .addIndicators({
    //     // name: 'fade-scene',
    //     // colorTrigger: 'yellow',
    //     // colorStart: 'green'
    // })
    .addTo(controller);
});

//loader
$(window).on('load', function () {
    setTimeout(function () {
  $(".loader-page").css({visibility:"hidden",opacity:"0"})
}, 2000);
   
});