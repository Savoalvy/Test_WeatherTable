import { FormControlLabel, Switch } from '@mui/material';

type ThemeModeSwitchProps = {
  checked: boolean;
  label: string;
  onChange: () => void;
};

export const ThemeModeSwitch = ({ checked, label, onChange }: ThemeModeSwitchProps) => {
  return (
    <FormControlLabel
      control={<Switch checked={checked} onChange={onChange} />}
      label={label}
      sx={{ m: 0, whiteSpace: 'nowrap' }}
    />
  );
};
