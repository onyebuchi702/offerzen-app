import moment from "moment"
import * as _ from "lodash"
import { tableTitle } from '../../constants/tableTitle'
import './Candidates.scss'

const Candidates = ({ data, showArchives }) => {

  const arr = [...tableTitle]
  const checkTitles = () => {
    if(!showArchives) {
      _.remove(arr, function(e) {
          return e.title === ""
      });
      return arr
    } else {
      return tableTitle
    }
  }

  return (
    <div className="candidates__container">
      <div className="candidates__section">
        <p className="candidates__requests">{data?.length} interview requests</p>
        <div className="candidates__tableSection">
          <table>
            <tr>
              {
                checkTitles().map(titles => {
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
                  <tr
                    key={index}
                    className={!archived ? "candidates__tableRowArchived" : "candidates__tableRow"}>
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
                    {
                      showArchives &&
                        <td className="candidates__tableArchive">
                          {archived ? "archive" : "unarchive"}
                        </td>
                    }
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
