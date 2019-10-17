import gql from 'graphql-tag';
export default gql`
        {
          ProcessInstances(filter: { parentProcessInstanceId:"${props.instanceID}"}) {
            id
            processId
            parentProcessInstanceId
            roles
            state
          }
        }
      `