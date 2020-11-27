import { useQuery } from "react-apollo";
import gql from "graphql-tag";

import "./App.css";
import "bulma/css/bulma.css";
import Header from "./components/Header";
import Score from "./components/Score";
import DataTable from "./components/DataTable";
import {useEffect, useState } from "react";

function App() {
  const [url, setUrl] = useState('')
  const [ownerText, setOwnerText] = useState('')
  const [repoText, setRepoText] = useState('')
  const [status, setStatus] = useState('')

  const response = useQuery(queries, {
    variables: {
      owner: ownerText,
      repo: repoText
    },
  })

  const handleChangeInput = (e) => {
    const newUrl = e.target.value
    setUrl(newUrl)
  }

  const runAudit = () => {
    const params = url.split('/')
    const githubUrlIdx = params.indexOf('github.com')
    
    let owner = ''
    let repo = ''

    if (githubUrlIdx && params.length + 1 > githubUrlIdx) {
      owner = params[githubUrlIdx + 1]
      repo = params[githubUrlIdx + 2]
    }

    if(!!owner && !!repo) {
      setOwnerText(owner)
      setRepoText(repo)
    }
  }

  const responseData = response?.data?.repository || null

  useEffect(() => {
    let newStatus = 'NOT AWESOME'

    // if (responseData)
    
    // deprecated
    // - last PR mergedAt >1 year ago
    // - last release publishedAt >1 years ago
    // - issues OPEN / CLOSED > 60% (?)
    
    
    // normal
    // - last merged PR within past 1 year
    // - last release publishedAt within past 1 year    
    
    // good
    // - 100++ stars
    // - issues OPEN < 300 (?)
    // - issues OPEN / CLOSED < 60% (?)
    // - PR OPEN / MERGED < 10%
    
    
    
    if(responseData.stargazerCount > 500) {
      newStatus = 'AWESOME'
    }
        
    // awesome
    // - stars 500++
    // - fork 100++
    // - issues OPEN / CLOSE < 30%
    // - PR OPEN / MERGED < 10%
    
    
    setStatus(newStatus)
  }, [responseData])

  return (
    <div>
      <Header />
      <section className="hero">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title">Measure</h1>
            <h2 className="subtitle">Find out is this repo legit</h2>

            <div className="columns">
              <div className="column is-8 is-offset-1">
                <input
                  className="input is-medium"
                  type="text"
                  placeholder="Enter a github repo URL"
                  onChange={handleChangeInput}
                />
              </div>
              <div className="column is-2">
                <button 
                  className="button is-info is-outlined is-medium is-fullwidth"
                  onClick={() => runAudit()}
                >
                  Run Audit
                </button>
              </div>
            </div>

            {!!responseData && <Score status={status} />}
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            {!!responseData && <DataTable data={responseData} />}
          </div>
        </div>
      </section>
    </div>
  );
}

const queries = gql`
  query(
    $owner: String!
    $repo: String!
  ) {
    repository(owner: $owner, name: $repo) {
      createdAt
        defaultBranchRef {
        name
        prefix
      }
      description
      forkCount
      hasProjectsEnabled
      hasWikiEnabled
      isArchived
      isBlankIssuesEnabled
      isDisabled
      isEmpty
      isFork
      isInOrganization
      isLocked
      isMirror
      isPrivate
      isSecurityPolicyEnabled
      isTemplate
      isUserConfigurationRepository
      mirrorUrl
      name
      nameWithOwner
      openGraphImageUrl
      stargazerCount
      updatedAt
      usesCustomOpenGraphImage
      viewerCanAdminister
      viewerCanCreateProjects
      viewerCanSubscribe
      viewerCanUpdateTopics
      viewerDefaultCommitEmail
      viewerDefaultMergeMethod
      viewerHasStarred
      viewerPossibleCommitEmails
      open_issues: issues(states: OPEN) {
        totalCount
      }
      closed_issues: issues(states: CLOSED) {
        totalCount
      }
      open_pull_requests: pullRequests(states: OPEN) {
        totalCount
      }
      merged_pull_requests: pullRequests(states: MERGED) {
        totalCount
      }
      releases(first: 1, orderBy: {direction: DESC, field: CREATED_AT}) {
        edges {
            node {
              name
              publishedAt
            }
        }
      }
    }
  }
`;

export default App

// export default graphql(queries, {
//   options: {
//     variables: {
//       owner: "raosan",
//       repo: "is-this-repo-legit"
//     }
//   }
// })(App);

