export default async function Fetch({method,url,data,}){
    const fetch = await axios({ method,url,data,})
      .then(res=>res)
      .catch(err=>err)
      return fetch      
}