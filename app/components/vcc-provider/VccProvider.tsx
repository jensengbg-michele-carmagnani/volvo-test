'use client';
import { StyleProvider, ThemePicker } from 'vcc-ui';
type Props = {
  children: React.ReactNode;
};

const VccProvider = ({ children }: Props) => {
  return (
    <StyleProvider>
      <ThemePicker>{children}</ThemePicker>
    </StyleProvider>
  );
};

export default VccProvider;
