import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCandidates } from '../redux/actions/interview'
import { tableTitle } from '../constants/tableTitle'
import './Candidates.scss'

const Candidates = () => {
  const { data, loading, error } = useSelector(state => state.getAllInterviews)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCandidates())
  }, [])

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
                    <th
                      key={titles.id}
                      className="candidates__tableTitle">
                      {title}
                    </th>
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
