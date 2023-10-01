import {ChangeEvent, ReactNode} from 'react';

export interface InputProps {
  label: string;
  placeholder?:string;
  value?: string;
  checkboxValue?: boolean;
  type?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  children?: ReactNode;
}
