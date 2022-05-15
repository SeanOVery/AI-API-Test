import { useQuery } from '@apollo/client';
import { QUERY_MESSAGES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_MESSAGES, {
    fetchPolicy: "no-cache"
  });

  const messageList = data?.messages || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to AI Chat!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of matchups you can vote on:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {messageList.map((messages) => {
              return (
                <li key={messages._id}>
                  
                    {messages.message} 
                    
                    {messages.response}
                 
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="card-footer text-center m-3">
        <h2>Ready to ask another question?</h2>
      </div>
    </div>
  );
};

export default Home;
