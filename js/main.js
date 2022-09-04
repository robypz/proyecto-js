$(document).ready(function () {

    if (window.location.href.indexOf('index') > -1) {
        //Gallery
        $('.gellery').bxSlider({
            responsive: true,
            captions: false,
            mode: 'fade',
            pager: true
        });

        //post

        var posts = [
            {
                tittle: 'Prueba de titulo 1',
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos fugit nostrum, explicabo voluptatem aliquid aperiam laboriosam recusandae animi? Aut illum amet dolores nemoquam animi corrupti iure nesciunt blanditiis!',

            },
            {
                tittle: 'Prueba de titulo 2',
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos fugit nostrum, explicabo voluptatem aliquid aperiam laboriosam recusandae animi? Aut illum amet dolores nemoquam animi corrupti iure nesciunt blanditiis!',

            },
            {
                tittle: 'Prueba de titulo 3',
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos fugit nostrum, explicabo voluptatem aliquid aperiam laboriosam recusandae animi? Aut illum amet dolores nemoquam animi corrupti iure nesciunt blanditiis!',

            },
            {
                tittle: 'Prueba de titulo 4',
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos fugit nostrum, explicabo voluptatem aliquid aperiam laboriosam recusandae animi? Aut illum amet dolores nemoquam animi corrupti iure nesciunt blanditiis!',

            },
            {
                tittle: 'Prueba de titulo 5',
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos fugit nostrum, explicabo voluptatem aliquid aperiam laboriosam recusandae animi? Aut illum amet dolores nemoquam animi corrupti iure nesciunt blanditiis!',

            },
            {
                tittle: 'Prueba de titulo 6',
                date: "Publicado el dia " + moment().format("dddd") + " " + moment().format("DD") + " de " + moment().format("MMMM") + " de " + moment().format("YYYY"),
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam dignissimos fugit nostrum, explicabo voluptatem aliquid aperiam laboriosam recusandae animi? Aut illum amet dolores nemoquam animi corrupti iure nesciunt blanditiis!',

            },
        ];

        posts.forEach((element, index) => {
            var post = `
        <article class="post">
            <h2>${element.tittle}</h2>
            <span class="post-date">${element.date}</span>
            <p>
               ${element.content}
            </p>
            <a href="" class="read-more">Leer más</a>
        </article>
        `;

            $('#posts').append(post);

        });
    }




    // selector de temas

    var theme = $('#theme')

    $('#to-green').click(function () {
        theme.attr('href', 'css/green.css');
    });

    $('#to-red').click(function () {
        theme.attr('href', 'css/red.css');
    });

    $('#to-blue').click(function () {
        theme.attr('href', 'css/blue.css');
    });

    //scroll arriba de la web

    $('.go-up').click(function (e) {
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 500)
        return false;
    });

    // login

    $('#login form').submit(function () {
        var form_name = $('#form_name').val();
        localStorage.setItem('form_name', form_name);
        var form_name = localStorage.getItem('form_name');

        if (form_name != null && form_name != undefined) {
            var about_p = $('#about p')
            about_p.html("<b>Bienvenido, " + form_name + ".</b>");
            about_p.append("<a href='' id='logout'>Cerrar sesión</a>");
            $('#login').hide();
        }
    });



    $('#logout').click(function () {
        localStorage.clear();
        location.reload();
    });


    //acordeon
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }


    //reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function(){
            var reloj = moment().format('h:mm:ss');
            $('#reloj').html(reloj);
        },1000);
        
    }



});