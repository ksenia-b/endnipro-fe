import { useState } from "react";
import axios from "axios";

export const useData = (skip = 1, limit = 3) => {
    const [items, setItems] = useState([]);
    const [hasMore,  setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    console.log(skip, limit)
    const fetchMoreData = () => {
    
             setIsLoading(true);
             setIsError(false);
             axios.get(`http://${process.env.REACT_APP_BASE_URL}:${process.env.REACT_APP_BASE_PORT}/projects?skip=${skip * limit - limit}&limit=${limit}`, {
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              }
             }).then((res) => {
              setItems((prevItems) => [...prevItems, ...res.data]);

              res.data.length > 0 ? setHasMore(true) : setHasMore(false);
              setIsLoading(false);
             }).catch((err) => {
              setIsLoading(false);
              setIsError(true);
             })
          }

    return {
      isError, 
      isLoading,
      items, hasMore,
      fetchMoreData
    }
}