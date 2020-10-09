export const createLike = like => (
   $.ajax({
      method: 'POST',
      url: 'api/likes',
      data: { like }
   })
);

export const updateLike = like => (
   $.ajax({
      method: 'PATCH',
      url: `api/likes/${like.id}`,
      data: { like }
   })
);

export const deleteLike = likeId => (
   $.ajax({
      method: 'DELETE',
      url: `api/likes/${likeId}`
   })
);
