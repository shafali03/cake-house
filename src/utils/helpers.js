// import url from './URL'

// flatten
export function flattenProducts(data) {
  return data.map(item => {
    // cloudinary 
    // console.log(item)
    let image = (item.image && item.image.url) || null
    // let image = item.image.url
    return { ...item, image }
  })
}

export function featuredProducts(data) {
  return data.filter(item => {
    return item.featured === true;
  })
}