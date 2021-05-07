import React from 'react'
import { tableTitle } from '../constants/tableTitle'
import './Candidates.scss'

const Candidates = () => {
  return (
    <div className="candidates__container">
      <div className="candidates__section">
        <div className="candidates__tableSection">
          <table>
            <tr>
              {
                tableTitle.map(titles => {
                  const { title } = titles
                  return (
                    <th className="candidates__tableTitle">{title}</th>
                  )
                })
              }
            </tr>
            <tr>
              <td>Jill</td>
              <td>Smith</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
              <td>50</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>Jackson</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
              <td>94</td>
            </tr>
            <tr>
              <td>Adam</td>
              <td>Johnson</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
              <td>67</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Candidates
