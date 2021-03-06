import { connect } from 'react-redux';
import TagsIndex from './tags_index';
import { deleteTag,
         fetchTagNotes,
         setCurrentTag
       } from '../../actions/tag_actions';
import { setCurrentNotebook } from '../../actions/notebook_actions';

const mapStateToProps = (state) => {
  return ({
    allTags: state.tags.allTags,
    currentTag: state.tags.currentTag,
    tagCount: state.tags.allTags.length
  });
};

const mapDispatchToProps = dispatch => ({
  deleteTag: (tagId, noteId) => dispatch(deleteTag(tagId, noteId)),
  setCurrentTag: tag => dispatch(setCurrentTag(tag)),
  fetchTagNotes: id => dispatch(fetchTagNotes(id)),
  setCurrentNotebook: notebook => dispatch(setCurrentNotebook(notebook))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagsIndex);
