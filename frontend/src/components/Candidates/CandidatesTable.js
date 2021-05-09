import moment from "moment"
import * as _ from "lodash"
import { tableTitle } from '../../constants/tableTitle'
import './CandidatesTable.scss'

const CandidatesTable = ({ data = [], showArchives }) => {

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
    <div className="candidatesTable__container">
      <div className="candidatesTable__section">
        <p className="candidatesTable__requests">{data.length} interview requests</p>
        <div className="candidatesTable__tableSection">
          <table>
            <tr>
              {
                checkTitles().map(titles => {
                  const { title, id, icon } = titles
                  return (
                    <th
                      key={id}
                      className="candidatesTable__tableTitle">
                      {title}
                      {
                        icon && <img src={icon} alt="icons" className="candidatesTable__icons"/>
                      }
                    </th>
                  )
                })
              }
            </tr>
            {
              data.map((data, index) => {
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
                    style={unread ? { fontWeight: "bolder" } : {}}
                    className={!archived ? "candidatesTable__tableRowArchived" : "candidatesTable__tableRow"}>
                    <td>
                      <img
                        src={image}
                        alt="profile pic"
                        className="candidatesTable__tableImg"
                      />
                      {candidate}
                    </td>
                    <td>{role ? role : "-"}</td>
                    <td>
                      {unread &&
                        <span className="candidatesTable__tableUnread"></span>
                      }{" "}
                      <span>{description}</span>{" "}
                      <span className="candidatesTable__tableDate">
                        {moment(date_time, "YYYYMMDD").fromNow()}
                      </span>
                    </td>
                    <td>R{salary}</td>
                    <td>{sent_by}</td>
                    {
                      showArchives &&
                        <td className="candidatesTable__tableArchive">
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

export default CandidatesTable
