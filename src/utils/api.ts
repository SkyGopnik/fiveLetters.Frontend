import axios from "axios";

export class ApiUtil {

  public static game = {

    checkActive: () => axios.get("/game/active")

  };

}
