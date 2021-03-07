import axios from 'axios';

export const FETCHING_SMURF_START = "FETCHING_SMURF_START";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const FETCHING_SMURF_ERROR = "FETCHING_SMURF_ERROR";
export const ADD_SMURF = "ADD_SMURF";
export const UPDATE_ERROR = "UPDATE_ERROR";

export const fetchSmurfs = () => (dispatch) => {
	dispatch({type: FETCHING_SMURF_START});

	axios.get("http://localhost:3333/smurfs")
		.then((res) => {
			//console.log(res.data);
			dispatch({type: FETCHING_SMURF_SUCCESS,payload : res.data});
		})
		.catch((err) => {
			//console.log(err.data);
			dispatch({type: FETCHING_SMURF_ERROR,payload : err.data});
		})
};

export const addSmurf = (updateSmurf) => (dispatch) => {
	axios.post("http://localhost:3333/smurfs", updateSmurf)
		.then((res) => {
			dispatch({type: ADD_SMURF, payload: res.data});
		})
};

export const updateError = () => (dispatch) => {
	dispatch({type: UPDATE_ERROR});
}


//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.