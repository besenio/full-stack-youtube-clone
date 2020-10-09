import * as LikeAPIUtil from '../util/like_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = like => ({
   type: RECEIVE_LIKE,
   like
});

export const removeLike = likeId => ({
   type: REMOVE_LIKE,
   likeId
});

export const createLike = like => dispatch => {
   return LikeAPIUtil.createLike(like)
      .then(createdLike => dispatch(receiveLike(createdLike)))
}

export const updateLike = like => dispatch => {
   return LikeAPIUtil.updateLike(like)
      .then(updatedLike => dispatch(receiveLike(updatedLike)))
}

export const deleteLike = likeId => dispatch => {
   return LikeAPIUtil.deleteLike(likeId)
      .then(deletedLike => dispatch(deleteLike(deletedLike.id)))
}
