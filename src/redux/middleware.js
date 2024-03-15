import axios from "axios";
import { addCard } from "./cardSlice";

const url = "https://www.boredapi.com/api/activity";

export const addUserCard = ({ description, id }) => {
  return async (dispatch) => {
    try {
      const title = await axios
        .get(url)
        .then((response) => response.data.activity);

      dispatch(
        addCard({
          id: id,
          title: title,
          description: description,
        })
      );
    } catch (error) {
      console.log("error", error);
    }
  };
};
