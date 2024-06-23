import { useSelector, useDispatch } from "react-redux"
import { getDataWords, fetchData } from "../../state/features/data/dataSlice";
import { useEffect } from "react"

export default function Dashboard() {
    
    const dispatch = useDispatch();

    // No need for the initial data state (useState) anymore
    const data = useSelector(getDataWords);
    const isLoading = useSelector((state) => state.data?.isLoading || null);
    const error = useSelector((state) => state.data?.error || null);


    useEffect(() => {
        dispatch(fetchData());
    }, [dispatch]); // Only dispatch on component mount
    
    

    return (
        <div>
        {isLoading ? (
          <p>Loading data...</p>
        ) : error ? (
          <p>Error fetching data: {error}</p>
        ) : data ? ( // Check if data is available before accessing it
          <div>
            {/* Access and display your fetched data here */}
            <p>Fetched Data: {JSON.stringify(data, null, 2)}</p> </div>
        ) : (
          <p>No data available yet.</p>
        )}
      </div>
  )
}
