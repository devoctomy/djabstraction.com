$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

function copyLink() {
  const currentLink = window.location.href;
  const tempInput = document.createElement('input');
  
  tempInput.style.position = 'absolute';
  tempInput.style.left = '-9999px';
  tempInput.value = currentLink;
  document.body.appendChild(tempInput);
  
  tempInput.select();
  tempInput.setSelectionRange(0, 99999); // For mobile devices
  
  try {
      const successful = document.execCommand('copy');
      console.log(successful ? 'Link copied successfully!' : 'Failed to copy the link.');
  } catch (err) {
      console.error('Error copying the link: ', err);
  }
  
  document.body.removeChild(tempInput);
}