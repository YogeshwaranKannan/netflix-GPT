export const API_OPTION = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer' + process.env.React_APP_OPENAI_CDN,
  }
};

export const IMG_CDN ="https://image.tmdb.org/t/p/w500/";
export const BACK_CDN="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg";
export const OPENAI_CDN= process.env.React_APP_OPENAI_CDN;
  