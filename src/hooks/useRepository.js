import { useQuery } from "@apollo/react-hooks";
import {GET_REPOSITORIES, GET_REPOSITORY} from "../graphql/queries";

const useRepository = (id) => {
  console.log("id oon: ", id);
  const { data } = useQuery(GET_REPOSITORY, {
    variables: { id },
  });
  console.log('agagagagga', data)
  return data ? data.repository : undefined;
};

export default useRepository;
