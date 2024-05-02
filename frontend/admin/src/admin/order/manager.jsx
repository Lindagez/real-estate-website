import { useLocation, Link } from "react-router-dom";
import Orders from "./orders"
import DisplayOrder from "./displayOrder"
import Layout from "../layout";

export default function Manager() {

  const { pathname, } = useLocation();

  return <>
    <div>
      <Layout title='Order Management'>
        <div className="m-t-10 s-b">
          <div className="f">
            <div className="c-a f-c pr-10">
              <span>Total orders</span>
              <span className="i-c p10-20">20</span>
            </div>
          </div>
        </div>
        <div className="c-a p100 ord">
          {pathname === '/admin/orders' && Orders()}
          {pathname.includes('/admin/orders/') && DisplayOrder()}
        </div>
      </Layout>
    </div>
  </>
}