import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCandidates } from '../../redux/actions/interview'
import CandidatesTable from "./CandidatesTable"
import './index.scss'

const Candidates= () => {
  const [q, setQ] = useState('')
  const [searchColumns] = useState(["candidate"])
  const [toggleArchive, setToggleArchive] = useState(true)
  const { data, loading, error } = useSelector(state => state.getAllInterviews)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllCandidates())
  }, [])

  if(loading && loading) return <h3>Loading...</h3>
  if(error && error) return <h3>Error: Sorry could not get the interview list</h3>

  const search = (data) => {
    return data?.filter(row =>
        searchColumns.some(column =>
          row[column].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
      )
    )
  }

  return (
    <div className="candidates__container">
      <div className="candidates__top">
        <input
          type="text"
          placeholder="Search"
          value={q}
          onChange={e => setQ(e.target.value)}
          className="candidates__search"
        />
        <div className="candidates__archive">
          <span className="candidates__showText">Show archives</span>
          <label className="candidates__container">
            <input
              type="checkbox"
              checked={toggleArchive}
              onChange={() => setToggleArchive(!toggleArchive)}/>
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <CandidatesTable data={search(data)} showArchives={toggleArchive}/>
    </div>
  )
}

export default Candidates
