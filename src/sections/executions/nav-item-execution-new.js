import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { Box, ButtonBase, IconButton, SvgIcon } from '@mui/material';

export const SideNavItem = (props) => {
  const { active = false, disabled, external, icon, path, title } = props;

  const linkProps = path
    ? external
      ? {
        component: 'a',
        href: path,
        target: '_blank'
      }
      : {
        component: NextLink,
        href: path
      }
    : {};

  return (
    <ButtonBase
      sx={{
        alignItems: 'center',
        borderRadius: 1,
        display: 'flex',
        justifyContent: 'flex-start',
        pl: '16px',
        pr: '16px',
        py: '6px',
        textAlign: 'left',
        width: '100%',
        ...(active && {
          backgroundColor: 'rgba(255, 255, 255, 0.04)'
        }),
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 0.04)'
        }
      }}
      {...linkProps}
    >      
      {title}     
    </ButtonBase>
  );
};

SideNavItem.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  external: PropTypes.bool,
  icon: PropTypes.node,
  path: PropTypes.string,
  title: PropTypes.string.isRequired
};
