import { useLocation } from "react-router-dom"
import Layout from "../layout"
import Registrations from "./registrations";
import ManageRegistration from "./manager";

export default function Registration() {

  const { pathname: p } = useLocation();

  return <>
    <Layout title='Registrations Management'>
      <div className="c-a p100 ord">
        {p === '/admin/registrations' && Registrations()}
        {p.includes('/admin/registrations/') && ManageRegistration()}
      </div>
    </Layout>

  </>
}