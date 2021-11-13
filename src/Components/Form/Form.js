import React from "react";
import { useForm } from "react-hook-form";

import {
  form_container,
  wrapper,
  register_form,
  grid_form,
  headline,
} from './registerForm.module.css';

const Form = ({ defaultValues, children, onSubmit, title, description="" }) => {
  const { handleSubmit, register, formState: { errors } } = useForm({ defaultValues });
  console.log(errors)
  return (
    <div className={wrapper}>

        <form className={`${register_form}`} onSubmit={handleSubmit(onSubmit)}>
          <h1 className={`w-full text-3xl font-bold`}>{title}</h1> 
          <p class="text-lg text-gray-500">{description}</p>
          <div className={`${grid_form} `}>
          {Array.isArray(children)
            ? children.map((child) => {
              return child.props.name
                ? React.createElement(child.type, {
                  ...{
                    ...child.props,
                    register,
                    key: child.props.name
                  }
                })
                : child;
            })
            : children}
            </div>
        </form>

    </div>
  );
};

export default Form;
