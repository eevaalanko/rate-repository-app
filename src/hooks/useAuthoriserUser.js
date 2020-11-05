import { useQuery } from "@apollo/react-hooks";
import {GET_AUTHORIZED_USER} from "../graphql/queries";

const useAuthorizedUser = () => {
    const { data } = useQuery(GET_AUTHORIZED_USER);
    return data ? data.authorizedUser : null;
};

export default useAuthorizedUser;