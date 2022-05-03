import { useParams } from "react-router-dom";
import JoblyApi from "./api";


function CompanyDetail(){
  const params = useParams()
  const company = JoblyApi.getCompany(params.handle)

  //pass this into the api to get our company
  return <p>Companies Detail</p>
}

export default CompanyDetail