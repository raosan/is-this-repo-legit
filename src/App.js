import { graphql } from "react-apollo";
import gql from "graphql-tag";

import "./App.css";
import "bulma/css/bulma.css";
import Header from "./components/Header";
import params from "./data/params";

function App(props) {
  console.log(props.data.repository);

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
                />
              </div>
              <div className="column is-2">
                <button className="button is-info is-outlined is-medium is-fullwidth">
                  Run Audit
                </button>
              </div>
            </div>

            <div className="box" style={{ marginTop: 50 }}>
              <div className="content">
                <div className="columns">
                  <div className="column">
                    <h1 className="title has-text-centered">
                      Score:
                      <span
                        className="tag is-success is-large is-rounded"
                        style={{ marginLeft: 10 }}
                      >
                        90 / 100
                      </span>
                    </h1>
                  </div>
                  <div className="column">
                    <h1 className="title has-text-centered">
                      Result:
                      <span
                        className="tag is-success is-large is-rounded"
                        style={{ marginLeft: 10 }}
                      >
                        LEGIT
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <table className="table is-fullwidth">
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                {params.map((item) => (
                  <tr key={item.key}>
                    <td>{item.key}</td>
                    <td>30</td>
                    <td>Good</td>
                  </tr>
                ))}
              </tbody>
            </table>
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

export default graphql(queries, {
  options: {
    variables: {
      owner: "raosan",
      repo: "is-this-repo-legit"
    }
  }
})(App);

