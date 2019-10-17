import gql from 'graphql-tag';

export default gql`
{
  ProcessInstances(filter: { parentProcessInstanceId: null }) {
    id
    processId
    parentProcessInstanceId
    roles
    state
  }
}`;