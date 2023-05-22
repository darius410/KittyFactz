function generateHashtag (str) {
  
  const hashIt = []
  
  for (let i = 0; i < str.length ; i++ ) {
    
    console.log(str.charAt(0).toUpperCase() + str.slice(1) + str[1])
  }
  
  if(str.length > 140 || str === '')
    return false
}

generateHashtag("Hello there thanks for trying my Kata");
