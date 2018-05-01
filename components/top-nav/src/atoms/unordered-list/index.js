import glamorous from 'glamorous';
import {
  MEDIA_QUERIES,
  SPACING,
} from '@govuk-react/constants';

const Ul = glamorous.ul(({
  serviceTitle,
}) => ({
  display: 'none',
  flexWrap: 'wrap',
  margin: 0,
  padding: 0,
  marginTop: SPACING.SCALE_1,
  width: '100%',
  [MEDIA_QUERIES.LARGESCREEN]: {
    display: 'flex',
    paddingTop: serviceTitle ? 0 : SPACING.SCALE_5,
    width: 'auto',
  },
}));

export default Ul;