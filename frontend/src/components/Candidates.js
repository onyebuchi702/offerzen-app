import React, { useEffect } from 'react'
import moment from "moment"
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
        <p className="candidates__requests">{data?.length} interview requests</p>
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
                  archived
                } = data

                return (
                  <tr key={index} className={!archived ? "candidates__tableRowArchived" : "candidates__tableRow"}>
                    <td>
                      <img
                        src={image}
                        alt="profile pic"
                        className="candidates__tableImg"
                      />
                      {candidate}
                    </td>
                    <td>{role ? role : "-"}</td>
                    <td>
                      <span>{description}</span>{" "}
                      <span className="">{unread}</span>{" "}
                      <span className="candidates__tableDate">{moment(date_time, "YYYYMMDD").fromNow()}</span>
                    </td>
                    <td>R{salary}</td>
                    <td>{sent_by}</td>
                    <td className="candidates__tableArchive">{archived ? "archive" : "unarchive"}</td>
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
