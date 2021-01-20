import { getListFromLS } from "./filmServices";

const setShowModalHandler = () => {
  const newUser = getListFromLS() ? false : true;
  return newUser;
};

export default setShowModalHandler;
