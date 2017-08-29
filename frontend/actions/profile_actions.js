import * as ProfileAPIUtil from '../util/profile_api_util';

export const RECEIVE_COMPLETE_PROFILE = "RECEIVE_COMPLETE_PROFILE";
export const RECEIVE_UPDATED_PROFILE = "RECEIVE_UPDATED_PROFILE";

export const fetchCompleteProfile = username => dispatch => {
  return ProfileAPIUtil.fetchCompleteProfile(username)
    .then(
      (profile) => {
        dispatch(receiveCompleteProfile(profile));
      }
      // (error) => {
      //   dispatch(receive####Error(error.responseJSON));
      // }
    );
};

export const updateProfile = (form, userId) => dispatch => {
  return ProfileAPIUtil.updateProfile(form, userId)
    .then(
      (profile) => {
        dispatch(receiveUpdatedProfile(profile));
      }
    );
};

export const receiveCompleteProfile = (profile) => ({
  type: RECEIVE_COMPLETE_PROFILE,
  payload: profile,
});

export const receiveUpdatedProfile = (profile) => ({
  type: RECEIVE_UPDATED_PROFILE,
  payload: profile,
});
