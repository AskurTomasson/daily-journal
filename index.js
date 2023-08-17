import { blogPosts } from "./data.js";

const showCaseDiv = document.getElementById('showcase-post-div')
const selectedPostDiv = document.getElementById('selected-post-div')
const whoAmIDiv = document.getElementById('who-am-i-div')
const socialsDiv = document.getElementById('socials-div')
const hamburger = document.querySelector('.hamburger')
const navMenu = document.querySelector('.nav-menu')
const timerId = setInterval(renderShowCaseHtml, 18000)
let timerFunctionOne;
let timerFunctionTwo;
let timerFunctionThree;

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.addEventListener('click', function(e){
    if(e.target.dataset.read) {
        myStopShowCaseFunction()
        renderSelectedPostHtml(e.target.dataset.read)
    }
    if(e.target.dataset.who) {
        renderWhoAmIHtml()
        navMenu.classList.toggle('active')
        hamburger.classList.toggle('active')
    }
    if(e.target.dataset.social) {
        renderSocialsHtml()
        navMenu.classList.toggle('active')
        hamburger.classList.toggle('active')
    }
})

function renderShowCaseHtml() {

    let newestPost = blogPosts[0]
    let secondPost = blogPosts[1]
    let thirdPost = blogPosts[2]

    timerFunctionOne = setTimeout(function(){
        showCaseDiv.innerHTML = `
            <img class="title-img" src="${newestPost.icon}">
            <p class="title-date">${newestPost.date}</p>
            <h1 class="post-title">${newestPost.name}</h1>
            <p class="title-blog-text">${newestPost.titlePost}</p>`
    }, 10)

    timerFunctionTwo = setTimeout(function(){
        showCaseDiv.innerHTML = `
            <img class="title-img" src="${secondPost.icon}">
            <p class="title-date">${secondPost.date}</p>
            <h1 class="post-title">${secondPost.name}</h1>
            <p class="title-blog-text">${secondPost.titlePost}</p>`
    }, 6000)

    timerFunctionThree = setTimeout(function(){
        showCaseDiv.innerHTML = `
            <img class="title-img" src="${thirdPost.icon}">
            <p class="title-date">${thirdPost.date}</p>
            <h1 class="post-title">${thirdPost.name}</h1>
            <p class="title-blog-text">${thirdPost.titlePost}</p>`
    }, 12000)

}

function myStopShowCaseFunction() {
    clearTimeout(timerFunctionOne)
    clearTimeout(timerFunctionTwo)
    clearTimeout(timerFunctionThree)
    clearInterval(timerId)
}

function renderSelectedPostHtml(postIde) {
    const targetRenderPost = blogPosts.filter(function(post){
        return post.postId === parseInt(postIde)
    })[0]

    showCaseDiv.style.display = 'none'
    selectedPostDiv.style.display = 'grid'
    whoAmIDiv.style.display = 'none'
    socialsDiv.style.display = 'none'
  
    selectedPostDiv.innerHTML = `
        <p class="selected-date">${targetRenderPost.date}</p>
        <h1 class="selected-title">${targetRenderPost.name}</h1>
        <p class="selected-blog-text">${targetRenderPost.titlePost}</p>
        <img class="selected-img" src="${targetRenderPost.icon}">
        <p class="selected-full-post">${targetRenderPost.fullPost}</p>
        <h3 class="recent-posts">Recent posts</h3>`

        window. scrollTo({top: 0, behavior: 'smooth'})
}

function renderWhoAmIHtml() {
    showCaseDiv.style.display = 'none'
    selectedPostDiv.style.display = 'none'
    whoAmIDiv.style.display = 'grid'
    socialsDiv.style.display = 'none'

    whoAmIDiv.innerHTML = `
        <img class="wai-img" src="/images/askur.png">
        <h1 class="wai-title">Hello there! My name is Askur.</h1>
        <p class="wai-text">I've been learning how to code for about 8 months now and it's alot of fun,
        I currently work as a Store Operations Manager for a company called Pierce group in the motorsport industry.
        My goal is to switch over to developing full time!</p>
        <h2 class="wai-sub-title">My journey into the world of computers</h2>
        <p class="wai-sub-text">It all started in primary school with my cousin wanting to get into this new hot game...
        It was called something like World of Warcraft, we had played a little bit of other games during the early stages of internet but nothing like this.
        My cousin who was 1 year older then me and by that time I was 11, he started making bots in Python to not go AFK in game, it would simply press a key.
        <br>
        <br>
        <span class="wai-sub-footer">From there we were off to the races in computers!</span></p>
        <h3 class="wai-recent-post">Recent posts</h3>
        `
}

function renderSocialsHtml() {
    showCaseDiv.style.display = 'none'
    selectedPostDiv.style.display = 'none'
    whoAmIDiv.style.display = 'none'
    socialsDiv.style.display = 'grid'

    socialsDiv.innerHTML = `
        <h1 class="socials-title">You can always contact me on any of the following platforms</h1>
        <a href="https://www.facebook.com/karlhenrik.gyllenkrans/" class="fa-brands fa-facebook-f"></a>
        <a href="https://www.instagram.com/askur.63/" class="fa-brands fa-instagram"></a>
        <a href="https://www.linkedin.com/in/askur-tomasson-b72327253/" class="fa-brands fa-linkedin-in"></a>
        <h3 class="socials-recent-post">Recent posts</h3>`
}


function blogFeed() {
    
    let blogFeedHtml = ``

    blogPosts.forEach(function(post){

        blogFeedHtml += `
        <div class="blog-card" id="blog-card">
            <img class="blog-card-img" data-read="${post.postId}" src="${post.icon}">
            <p class="blog-card-date">${post.date}</p>
            <h2 class="blog-card-title">${post.header}</h2>
            <p class="blog-card-post">${post.titlePost}</p>
        </div>
        `
    })
    return blogFeedHtml


}

function renderBlogFeed() {
    document.getElementById('blog-feed-div').innerHTML = blogFeed()
}

renderBlogFeed()
renderShowCaseHtml()

