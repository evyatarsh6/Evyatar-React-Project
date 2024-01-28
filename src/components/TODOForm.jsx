import React, {useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Form, useForm } from "react-hook-form"
import {Autocomplete} from '@mui/material';
import { GetFormDetails } from '../selectors';


export const TODOForm = () => {
    const { control, handleSubmit, reset } = useForm();
      const TODOKind = useSelector(GetFormDetails)
      const onSubmit = (data) => console.log(data)
    
      return (
        <Form  onSubmit={handleSubmit(onSubmit)}>
        {/* <Autocomplete
        disablePortal
        id='form-main-react-select-field'
        disabled
        inputValue={TODOKind.TODOKind}
        sx={{ width: '60%', margin:5}}
        >
        </Autocomplete> */}
        </Form>

        // <form onSubmit={handleSubmit(onSubmit)}>
        //   <input {...register("firstName")} />
        //   <select {...register("gender")}>
        //     <option value="female">female</option>
        //     <option value="male">male</option>
        //     <option value="other">other</option>
        //   </select>
        //   <input type="submit" />
        // </form>
      )
    }