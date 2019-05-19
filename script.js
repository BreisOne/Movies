/* eslint-disable no-console */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

// Petición de datos a API con JQUERY (Encapsula un XMLHttpRequest)
// $.ajax('https://randomuser.me/api/',{
//     method: 'GET',
//     success: function(data){
//        console.log(data) 
//     },
//     error: function(error){
//         console.log(error)
//     }    
// });

// Peticion a API con vanillaJS
// fetch('https://randomuser.me/api/')
//     .then(function(response){
//         console.log(response)
//         return response.json() 
//     })
//     .then(function(user){
//         console.log('user', user.results[0].name.first)
//     })
//     .catch(function(error){
//         console.log(error)
//     });

// Función asincrona que trae datos de películas de la API de los generos de acción, drama y animación
    (async function load(){
        async function getData(url){
            const response = await fetch(url);
            const data = await response.json();
            return data;
        }
        // Forma alternativa de escribir la llamada a api

            // let terrorList;
            //  getData('https://yts.am/api/v2/list_movies.json?genre=terror')
            //     .then(function (data){
            //         console.log('terrorList', data);
            //         terrorList = data;
            //     })

        const actionList = await getData('https://yts.am/api/v2/list_movies.json?genre=action');
        const dramaList = await getData('https://yts.am/api/v2/list_movies.json?genre=drama');
        const animationList = await getData('https://yts.am/api/v2/list_movies.json?genre=animation');
        console.log (actionList,dramaList, animationList);

        // Creación de templates a partir de HTML en JS con template literals
        function videoItemTemplate (movie){
            return (
                `<li class="filmItem">
                     <figure class="filmIMG">
                         <img src="${movie.medium_cover_image}" alt="">
                     </figure>
                     <div class="filmOverlay">
                         <h3 class="filmTitle">
                             ${movie.title}
                         </h3>
                         <p class="filmDesccription">
                             ${movie.year}
                             <span class="seeMore">
                             ${movie.synopsis}
                             </span>
                         </p>
                     </div>
                 </li> `    
             )
         }
        // conversión del texto de la función iteradora a HTML
        function createTemplate(HTMLString){
            
            const html = document.implementation.createHTMLDocument();
            html.body.innerHTML = HTMLString;
            return html.body.children[0];
        }
        // Iterador para cada item del array/lista que trae el método fetch de la API.
        function renderMovieList(list, $container){
            // Funcion iteradora y encapsulación en una constante
            $container.children[0].remove(); //$container.querySelector('img') otra opción de escribirlo
            list.forEach((movie)=>{
                const HTMLString = videoItemTemplate(movie);
                const movieElement = createTemplate(HTMLString);
                // Introducción del elemento HTML creado en el lugar del DOM que le corresponde
                $container.append(movieElement)    
            })
        }
        // Generar constantes a partir de selectores con jquery:
                // const $home = $('.home .list #item');
        
        // Generar constantes a partir de selectores con vanillaJS:

            // Contantes para el modal y sus partes:

            const $modal = document.querySelector('#modal');
            const $overlay = document.querySelector('#overlay');
            const $hideModal = document.querySelector('#hideModal');
    
            // const $modalTitle = $modal.querySelector('h1');
            // const $modalImage = $modal.querySelector('img');
            // const $modalDescription = $modal.querySelector('p');
    
    
                // Contantes para los contenedores de las peliculas:
    
            const $actionContainer = document.getElementById('action');
            const $dramaContainer = document.getElementById('drama');
            const $animationContainer = document.getElementById('animation');
    
            const $featuringContainer = document.getElementById('featuring');
            const $form = document.getElementById('form');
            const $home = document.getElementById('home');

            renderMovieList(actionList.data.movies, $actionContainer);
            renderMovieList(dramaList.data.movies, $dramaContainer);
            renderMovieList(animationList.data.movies, $animationContainer);
        })()