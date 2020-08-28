import axios from 'axios';
//todo: spotify api needs to be on backend
export default {
  requestPodcastAPI: async (query) => {
    try {
      //
    } catch (e){
      console.error(`Error Requesting From Spotify API:`, e);
      throw(e);
    }
  }
}