import type { ReactNode } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import type { DialogProps } from '@mui/material';
import { Dialog, DialogContent, DialogTitle, IconButton } from '@mui/material';

import { BASE_MODAL_UI } from '@/shared/config';

type BaseModalProps = {
  open: boolean;
  onClose: () => void;
  title: ReactNode;
  children: ReactNode;
  maxWidth?: DialogProps['maxWidth'];
  fullWidth?: boolean;
};

export const BaseModal = ({
  open,
  onClose,
  title,
  children,
  maxWidth = 'sm',
  fullWidth = true,
}: BaseModalProps) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth={maxWidth} fullWidth={fullWidth}>
      <DialogTitle sx={{ pr: BASE_MODAL_UI.titleClosePaddingRight }}>
        {title}
        <IconButton
          aria-label="Закрыть"
          onClick={onClose}
          sx={{
            position: 'absolute',
            top: BASE_MODAL_UI.closeButtonOffset,
            right: BASE_MODAL_UI.closeButtonOffset,
          }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};
