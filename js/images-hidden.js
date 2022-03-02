function main(params){
   const $images = document.querySelectorAll('img')

   if (!$images) return

   $images.forEach(node => {
      node.classList.add('hidden')
   })
}

document.addEventListener('DOMContentLoaded', main)