export default function Table() {
  return (
    <>
      <div className='card'>
        <div className='card-body'>
          <div className='table-responsive'>
            <table className='table table-hover text-nowrap'>
              <thead>
                <tr>
                  <th scope='col'></th>
                  <th scope='col'>Product Detail Views</th>
                  <th scope='col'>Unique Purchases</th>
                  <th scope='col'>Quantity</th>
                  <th scope='col'>Product Revenue</th>
                  <th scope='col'>Avg. Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope='row'>Value</th>
                  <td>18,492</td>
                  <td>228</td>
                  <td>350</td>
                  <td>$4,787.64</td>
                  <td>$13.68</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
