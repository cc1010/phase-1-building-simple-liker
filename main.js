// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
///
const list = document.querySelectorAll('article')

for (const item of list) {
  const heart = item.querySelector('.like-glyph')
  //console.log(heart)
  
  heart.addEventListener('click', (e) => {
    if (heart.innerText === EMPTY_HEART) {
    //console.log('event clicked!')
    mimicServerCall()
    .then(data => {
      //console.log('succees')
      // changing the heart to red
      heart.classList.add('activated-heart')
      // changing to a fuul heart
      heart.innerText = FULL_HEART
    })
    .catch(error => {
      console.log('error')
      // showing error banner
      const modal = document.getElementById('modal');
      //console.log(modal)
      modal.classList.remove('hidden')
      // adding error message to red banner
      const modalMessage = document.getElementById('modal-message')
      modalMessage.innerText = error
      // remove error banner afrer 3 seconds
      setTimeout(() => {
        modal.classList.add('hidden')
      }, 3000)
    })

  } else if (heart.innerText === FULL_HEART){
      //remove red heart
      heart.classList.remove('activated-heart')
      // changing to a empty heart
      heart.innerText = EMPTY_HEART
  }
})

}



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
