import { LOGIN, LOGOUT } from './types';
import { defaultsConfig } from '../config/defaultsConfig';

export const login = () => (dispatch, getState, { getFirebase, getFirestore }) => {
    getFirebase().login({ provider: 'google', type: 'popup' })
        .then(res => {
            setupDefaultProfile(res.user, getFirestore).then(profile => {
                console.log("Final Profile", profile);
                dispatch({ type: LOGIN, payload: profile });
            });

        });
}

export const logout = () => (dispatch, getState, { getFirebase }) => {
    getFirebase().logout()
        .then(res => {
            dispatch({ type: LOGOUT, payload: null });
        });
}

export const clearFirestore = () => (dispatch) => {
    dispatch({ type: '@@reduxFirestore/CLEAR_DATA' });
}

const setupDefaultProfile = async (user, getFirestore) => {
    let profile = {
        displayName: user.displayName
    }

    const userDoc = getFirestore().collection('users').doc(user.uid);
    const userData = await userDoc.get();
    if (!userData.exists) {
        profile = {
            ...defaultsConfig.userDocument,
            ...profile
        }

        let seasonDefault = {
            ...defaultsConfig.seasonDocument,
            season: profile.season
        }

        const seasonsCollection = getFirestore().collection('seasons');
        const seasonDocument = await seasonsCollection.add(seasonDefault);
        const seasonReference = getFirestore().doc(`seasons/${seasonDocument.id}`);
        console.log("sf", seasonReference);
        profile.seasons[seasonDefault.season] = seasonReference;

        await userData.ref.set(profile)
    } else {
        profile = userData.data();
    }

    profile = {
        ...profile,
        uid: user.uid
    };
    return profile;
}