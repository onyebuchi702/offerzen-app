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

  if(loading && loading) return <h3>Loading...</h3>
  if(error && error) return <h3>Error: Sorry could not get the interview list</h3>

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
            {
              data?.map((data, index) => {

                const {
                  image,
                  candidate,
                  role,
                  salary,
                  last_comms: {
                    unread,
                    date_time,
                    description
                  },
                  sent_by,
                  status,
                  archived
                } = data

                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={image}
                        alt="profile pic"
                        className="candidates__tableImg"
                      />
                      {candidate}
                    </td>
                    <td>{role ? role : "-"}</td>
                    <td>{unread}{date_time}{description}</td>
                    <td>R{salary}</td>
                    <td>{sent_by}</td>
                    <td>{archived ? "archive" : "unarchive"}</td>
                  </tr>
                )
              })
            }
          </table>
        </div>
      </div>
    </div>
  )
}

export default Candidates
