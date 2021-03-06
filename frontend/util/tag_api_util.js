export const fetchTags = () => (
  $.ajax({
    url: "/api/tags"
  })
);

export const fetchTagNotes = id => (
  $.ajax({
    url: `/api/tags/${id}`
  })
);

export const createTag = (tag, id) => (
  $.ajax({
    method: "POST",
    url: "/api/tags",
    data: {tag: { tag_name: tag, note_id: id }}
  })
);

export const deleteTag = (tagId, noteId) => (
  $.ajax({
    method: "DELETE",
    url: `/api/tags/${tagId}`,
    data: {tag: {id: tagId, note_id: noteId}}
  })
);
