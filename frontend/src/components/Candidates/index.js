import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllCandidates } from '../../redux/actions/interview'
import Candidates from "./Candidates"
import './index.scss'

const Index = () => {
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
    <div className="index__container">
      <div className="index__top">
        <input
          type="text"
          placeholder="Search"
          value={q}
          onChange={e => setQ(e.target.value)}
          className="index__search"
        />
        <div className="index__archive">
          <span className="index__showText">Show archives</span>
          <label className="index__container">
            <input
              type="checkbox"
              checked={toggleArchive}
              onChange={() => setToggleArchive(!toggleArchive)}/>
            <span className="checkmark"></span>
          </label>
        </div>
      </div>
      <Candidates data={search(data)} showArchives={toggleArchive}/>
    </div>
  )
}

export default Index
