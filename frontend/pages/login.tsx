import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

import Link from 'next/link';
import Router from 'next/router';

import { loginAction } from '../reducers/user';

import FormError from '../components/FormError'
import Button from '../components/Button'





interface IcreateAccountForm {
    email: string;
    password: string;
}


const Login = () => {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector((state: RootStateOrAny) => state.user);

    useEffect(() => {
        if (isLoggedIn) {
            Router.replace('/');
        }
    }, [isLoggedIn]);

    const { register, handleSubmit, getValues, formState: { errors, isValid } } = useForm<IcreateAccountForm>({
        mode: "onChange",
    });

    const onSubmit = () => {
        const { email, password } = getValues();
        dispatch(loginAction({ email, password }))
    }
    return (
        <div className="formWrapper">
            <h4 className="formTitle">
                Login
            </h4>
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input
                    {...register("email", {
                        required: "Email is required",
                        pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    })}
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    className="input"
                />
                {errors.email?.message && (
                    <FormError errorMessage={errors.email?.message} />
                )}
                {errors.email?.type === "pattern" && (
                    <FormError errorMessage={"Please enter a vaild email"} />
                )}
                <input
                    {...register("password", {
                        required: "Password is requred",
                    })}
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                    className="input"
                />
                {errors.password?.message && (
                    <FormError errorMessage={errors.password?.message} />
                )}
                <Button canClick={isValid}
                    loading={loading}
                    actionText={"Login"}
                />
            </form>
            <div className="mb-4">
                <span className="text-gray-100">Don't have an account??{" "}</span>
                <Link href="/createAccount">
                    <a className="text-blue-600 hover:underline">Create Account now</a>
                </Link>
            </div>
        </div>
    );
};

export default Login;