import { Link } from "react-router-dom";

export default function Orders() {

  const listOrders = () => {

    const orders = [
      { id: "asdasdasd", name: "Linda Gezahegn's Order" },
      { id: "asdas", name: "Linda Gezahegn's Order" },
      { id: "asdasasdasdasd", name: "Linda Gezahegn's Order" },
      { id: "asd12121asdasd", name: "Linda Gezahegn's Order" },
    ];

    return (
      <>
        {
          orders.map(o => (
            <tr key={o.id} className="b-b1">
              <td className="b-l1 b-r1 o-u">{o.name}</td>
              <td className="b-r1 o-a">
                <div className="c-a">
                  <div className="s-b">
                    <Link to={`/admin/orders/${o.id}`}><span className="a-l"><i class="fa-solid fa-circle-info fa-shake" style={{ color: "#d69129" }}></i></span></Link>
                    <Link to={`/admin/orders/update/${o.id}`}><span className="a-l"><i class="fa-solid fa-wrench fa-beat"></i></span></Link>
                    <span className="a-l"><i class="fa-sharp fa-solid fa-trash fa-bounce" style={{ color: "#b30000" }}></i></span>
                  </div>
                </div>
              </td>
            </tr>
          ))
        }
      </>
    );
  };

  return <>
    <div>
      <table>
        <thead className="b-t1 b-b1">
          <th className="b-l1 b-r1 o-u">Orders</th>
          <th className="b-r1 o-a">Actions</th>
        </thead>
        <tbody>
          {listOrders()}
        </tbody>
      </table>
    </div>
  </>
}