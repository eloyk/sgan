import axios from 'axios';

const doRequest = async ({ url, method, body }, props = {}) => {
    try {
      
      const response = await axios[method](url, { ...body, ...props });
      
      const data = response.data
      const convetData = JSON.stringify(data)
      console.log('Data proveniente del do-request: ' + convetData)
      return data;
    } catch (err) {
      
      const errores = err.response.data.errores.map((err) => err.mensaje)

      throw errores;
    }
  };

export default  doRequest;
