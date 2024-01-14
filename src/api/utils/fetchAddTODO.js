import axios from "axios";
import { genID } from "../../utils/generalUtils";


export const fetchAddTODO = async(TODOKind) => {

  await axios.post(`http://localhost:3000/addTODO`,
    {
        _id: genID(),
        description : "Avi Berger is a god", 
        kind: TODOKind,
        isChoosen: false,
        isDeleted:false, 
        location: {},
        isPinBtnDisable : false 
    },
    {
      headers: {}
    }
  )
  .then((response) => {
      console.log(response.data)
  })
  .catch((error) => {
    alert(`avi's server had a problam with error message of : ${error.message}`);
  });
}