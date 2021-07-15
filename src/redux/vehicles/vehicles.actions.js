import vehiclesActionTypes from './vehicles.types';
import api from '../../utils/api.utils';
import { VEHICLES } from '../../utils/constants.utils';

const loadVehiclesStart = () => ({
  type: vehiclesActionTypes.LOAD_VEHICLES_START,
});

const loadVehiclesSuccess = (vehicles) => ({
  type: vehiclesActionTypes.LOAD_VEHICLES_SUCCESS,
  payload: vehicles,
});

const loadVehiclesFailure = (error) => ({
  type: vehiclesActionTypes.LOAD_VEHICLES_FAILURE,
  payload: error,
});

const loadVehicles = async (dispatch) => {
  dispatch(loadVehiclesStart());

  try {
    const vehicles = await api.getData(VEHICLES);
    dispatch(loadVehiclesSuccess(vehicles));
  } catch (error) {
    dispatch(loadVehiclesFailure(error));
  }
};

export default loadVehicles;
