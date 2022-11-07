const key = "b68a7d79992b7f40551dbd706e6b4caa";
const imagePath = 'https://image.tmdb.org/t/p/w500'
const apiPageRequestLimit = 500
const pageNmbr = +(new URLSearchParams(window.location.search).get("page")) || 1;




const button = document.querySelector("#button");

button.addEventListener("click", () => {
    const value = document.querySelector("#input").value;
    document.querySelector('.loading').style.display = 'flex';
    // window.location.href = "ara.html"
    getSearch(value, pageNmbr);
});






//! Arama           


async function getSearch(value, pageNmbr) {
    document.querySelector(".row-search").innerHTML = '';
    const { results, total_results, total_pages } = await
        (await fetch(`https://api.themoviedb.org/3/search/movie?query=${value}&api_key=${key}&page=${pageNmbr}`)).json()
    console.log(total_pages)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search").innerHTML += `
                <div class="item">
                    <a href="${movie + item.id}"> <img class="searched-img" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h5> IMDb Puanı : ${item.vote_average} </h5>
                </div>`
        })
        document.querySelector(".paginate-wrapper").style.display = 'none';
        document.querySelector(".text-center").style.display = 'none';


        // if (total_pages > 0) {
        //     document.querySelector(".paginate-wrapper2").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

        //     document.querySelector(".paginate-wrapper2").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
        //     for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
        //         document.querySelector(".paginate-wrapper2").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
        //     }
        //     document.querySelector(".paginate-wrapper2").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
        //     document.querySelector(".paginate-wrapper2").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        // }




        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';

    }
}



const movie = "https://www.themoviedb.org/movie/"

//! Anasayfa

async function getPopular() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${pageNmbr}`)).json()
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item ">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }



    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}


const person = "https://www.themoviedb.org/person/"

//! Oyuncular

async function getPeoplePopular() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${person + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.profile_path !== null ? imagePath + item.profile_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.name}</h4>
                    <h6 href="#"> ${"Popülerlik : " + item.popularity} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}





//! En Çok İzlenenler

async function getNowPlaying() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"  class="title-link"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }



        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}





//! Gelecek Filmler

async function getUpComing() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}





//! En Son Çıkanlar

async function getTopRated() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}





//! Türkçe Dublaj

async function deneme2() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}






//! Romantik
async function getRomance() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=10749&api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}





//! macera 


async function getAdventure() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=12&api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}






//! komedi





async function getComedy() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}






//! drama





async function getDrama() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=18&api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}






//! Bilim Kurgu




async function getScienceFiction() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=878&api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}






//! Aksiyon




async function getAction() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=28&api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}





//! Korku




async function getFear() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=27&api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}



//! Animasyon




async function getAnimation() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}




//! TV Film





async function getTvMovie() {
    document.querySelector(".row-search ").innerHTML = '';
    const { total_pages, results, total_results } = await
        (await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=10770&api_key=${key}&page=${pageNmbr}`)).json()
    console.log(results)
    if (total_results > 0) {
        await results.forEach((item) => {
            document.querySelector(".row-search ").innerHTML += `
                <div class="col-6 col-md-4 col-lg-3 item">
                    <a href="${movie + item.id}"> <img class="searched-img" alt="${item.original_title}" src="${item.poster_path !== null ? imagePath + item.poster_path : 'assets/images/no-image.jpeg'}"> </a>
                    <h4>${item.original_title}</h4> 
                    <a href="#"> ${item.original_title} </a>
                    <div class="overview"> ${item.overview}</div>
                    <h6> IMDb Puanı : ${item.vote_average} </h6>
                </div>`
        })

        if (total_pages > 0) {
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${1}` : 'javascript:void(0)'}" class="paginate-item">İlk</a>`;

            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr !== 1 ? `?page=${pageNmbr - 1}` : 'javascript:void(0)'}" class="paginate-item">Geri</a>`;
            for (let i = pageNmbr; i <= 4 + pageNmbr; i++) {
                document.querySelector(".paginate-wrapper").innerHTML += `<a href="?page=${i}" class="paginate-item${i === pageNmbr ? 'active' : ''}">${i}</a>`;
            }
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${pageNmbr + 1}` : 'javascript:void(0)'}" class="paginate-item">İleri</a>`;
            document.querySelector(".paginate-wrapper").innerHTML += `<a href="${pageNmbr < apiPageRequestLimit ? `?page=${apiPageRequestLimit}` : 'javascript:void(0)'}" class="paginate-item">Son</a>`;
        }


        document.querySelector('.loading').style.display = 'none';
    } else {
        document.querySelector(".row-search ").innerHTML = `<h4>İçerik Bulunamadı</h4>`;
        document.querySelector('.loading').style.display = 'none';
    }
}







// fetch(`https://api.themoviedb.org/3/movie/550?api_key=${key}&append_to_response=credits`)
//     .then(response => response.json())
//     .then((jsonData) => jsonData.crew.filter(({ job }) => job === 'Director'))
// console.log(result.credits.crew[12].name);



