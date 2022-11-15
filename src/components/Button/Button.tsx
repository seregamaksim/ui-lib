import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import classes from './Button.module.scss';
import classNames from 'classnames';
import { TypeWithoutClassName } from '../../types';

const classesContext = classNames.bind(classes);

export interface ButtonProps
  extends TypeWithoutClassName<ButtonHTMLAttributes<HTMLButtonElement>> {
  label: string;
  icon?: ReactNode;
  className?: string;
}

const Button = ({ label, className, ...props }: ButtonProps) => {
  const buttonClasses = classesContext(className);

  return (
    <button {...props} className={buttonClasses}>
      {label}
    </button>
  );
};

export default Button;
