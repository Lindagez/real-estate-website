export default function Registrations() {
  const listRegistrations = () => {
    const registrations = [
      { id: 'asdasdasd', name: 'Linda Gezahegn' },
      { id: 'asdas', name: 'Linda Gezahegn' },
      { id: 'asdasasdasdasd', name: 'Linda Gezahegn' },
      { id: 'asd12121asdasd', name: 'Linda Gezahegn' },
    ];

    return (
      <>
        {/* {
          registrations.map(r => (
            <tr key={r.id} className="b-b1">
              <td className="b-l1 b-r1 o-u">{r.name}</td>
              <td className="b-r1 o-a">
                <div className="c-a">
                  <div className="s-b">
                    <Link to={`/admin/registrations/${r.id}`}><span className="a-l"><i class="fa-solid fa-circle-info fa-bounce" style={{ color: "#d69129" }}></i></span></Link>
                    <Link to={`/admin/registrations/update/${r.id}`}><span className="a-l"><i class="fa-solid fa-wrench fa-beat"></i></span></Link>
                    <span className="a-l"><i class="fa-sharp fa-solid fa-trash fa-shake" style={{ color: "#b30000" }}></i></span>
                  </div>
                </div>
              </td>
            </tr>
          ))
        } */}
      </>
    );
  };

  return (
    <>
      <div>
        <table>
          <thead className='b-t1 b-b1'>
            <th className='b-l1 b-r1 o-u'>Registered Customers</th>
            <th className='b-r1 o-a'>Actions</th>
          </thead>
          {/* <tbody>{listRegistrations()}</tbody> */}
        </table>
      </div>
    </>
  );
}
