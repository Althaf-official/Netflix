import { API_KEY } from './constants/constants'
// create one urls page and all the urls here and import the API_KEY for the url instead of all the page dont need import urls and api keys. only import this urls page there and call the variables only 

// export here and import where you want use the variables
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28`
export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35`
export const trending =`discover/movie?api_key=${API_KEY}&with_genres=27`
export const romance =`discover/movie?api_key=${API_KEY}&with_genres=10749`
export const documenteries =`discover/movie?api_key=${API_KEY}&with_genres=99`