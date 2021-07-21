
const shortUrl = document.querySelector('#short-url')
const copyUrl = document.querySelector('#copy-url')
shortUrl.innerText = document.URL + shortUrl.innerText

// copy to clipboard. ref: https://iter01.com/582157.html
copyUrl.addEventListener('click', async () => {
  await navigator.clipboard.writeText(shortUrl.innerText)
  copyUrl.innerText = 'Copied'
})

copyUrl.addEventListener('mouseleave',()=>{
  copyUrl.innerText = 'Copy'
})
