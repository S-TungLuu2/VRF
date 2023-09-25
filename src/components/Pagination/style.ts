import { makeStyles } from '@material-ui/core/styles';

const stylesPagination = makeStyles(() => ({
  pagination: {
    '& .MuiPagination-ul > li:first-child, li:last-child': {
      '& .MuiPaginationItem-page': {
        // background: 'transparent',
        color: 'var(--body-text)',
      },
    },
    '& .MuiPagination-ul > li': {
      marginRight: 8,
    },

    '& .MuiPaginationItem-page': {
      width: 30,
      height: 30,
      borderRadius: 4,
      background: 'transparent',
      border: '1px solid var(--border-pagination) !important',
      color: 'var(--dark-text)',
      margin: 0,
      minWidth: 0,
      fontWeight: 'bold',
    },
    '& .Mui-selected': {
      border: '1px solid var(--border-primary) !important',
      color: 'var(--text-primary) !important',
      fontWeight: 'bold',
    },
    '& .MuiPaginationItem-ellipsis': {
      padding: 0,
      width: 30,
      height: 30,
      minWidth: 0,
      border: '1px solid var(--border-pagination) !important',
      background: 'transparent',
      borderRadius: 4,
      margin: 0,
      color: 'var(--body-text)',
    },
  },
}));

export default stylesPagination;
