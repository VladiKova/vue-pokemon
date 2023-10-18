import { ref } from "vue";
import axios from 'axios';
export const useGetData = () => {
  const data = ref(null);
  const loading=ref(true);
  const errorData=ref(null);
  const getData = async (url) => {
    loading.value=true;
    try {
      const res = await axios.get(url);
      data.value = res.data;
    } catch (error) {
      console.log(error);
      data.value = null;
      errorData.value = `Server error: ${error.message}`;
    } finally{
        loading.value=false;
    }
  };
  return {
    getData,
    data,
    loading,
    errorData
  };
};
