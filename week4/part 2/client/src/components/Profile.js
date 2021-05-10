import React, {useContext} from 'react'
import IssueForm from './IssueForm'
import {UserContext} from "../context/UserProvider"
import IssueList from './IssueList'
// import Issue from './Issue'

export default function Profile(){
  const { 
    user: { 
      username 
    }, 
    addIssue,
    issues 
  } = useContext(UserContext)

  return (
    <div className="profile">
      <h1>Voter{username}!</h1>
      <h3>Whats the Issue</h3>
      <IssueForm addIssue={addIssue}/>
      <h3>Your Issues</h3>
      <IssueList issues={issues}/>
    </div>
  )
}