import { graphql } from "react-apollo";
import gql from "graphql-tag";

import logo from './logo.svg';
import './App.css';

function App(props) {
  console.log(props.data.repository);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
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
    }
  }
`;

export default graphql(queries, {
  options: {
    variables: {
      owner: "raosan",
      repo: "is-this-repo-legit"
    }
  }
})(App);