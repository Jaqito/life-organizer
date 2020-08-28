import axios from 'axios';

export default {
  getAll: async () => {
    try {
      let res = await axios.get(`/users`);
      return res.data || [];
    } catch (e){
      console.error(e)
    }
  }
}