import React, { useState, useEffect } from 'react';

import { useForm } from 'react-hook-form';
import { useSelector, RootStateOrAny, useDispatch } from 'react-redux';

import Link from 'next/link';
import Router from 'next/router';

import FormError from '../components/FormError'
import Button from '../components/Button'

interface IcreateAccountForm {
    email: string;
    password: string;
    passwordConfirm: string;
    address: string;
    phone: number;
}


const CreateAccount = () => {
    const [loading, setLoading] = useState(false);
    const [passwordMatchesWhenSubmit, setPasswordMatchesWhenSubmit] = useState(true);
    const { user } = useSelector((state: RootStateOrAny) => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            alert('회원가입이 되었습니다');
            Router.push('/login');
        }
    }, [user])

    const { register, handleSubmit, getValues, formState: { errors, isValid }, watch, } = useForm<IcreateAccountForm>({
        mode: "onChange",
    });


    const onSubmit = () => {
        const { email, password, passwordConfirm, address, phone } = getValues();
        setLoading(true);
        if (password !== passwordConfirm) {
            setPasswordMatchesWhenSubmit(false);
            return;
        };
        dispatch({
            type: "CREATE_ACCOUNT",
            data: {
                email,
                password,
                address,
                phone,
            }
        });
        setLoading(false);
    }
    return (
        <div className="formWrapper">
            <h4 className="formTitle">
                WelCome
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
                        required: "Email is requred",
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

                <input
                    {...register("passwordConfirm", {
                        validate: value => value === watch('password'),
                    })}
                    name="passwordConfirm"
                    type="password"
                    required
                    placeholder="passwordConfirm"
                    className="input"
                />
                {(errors.passwordConfirm?.type === 'validate')
                    && (
                        <FormError errorMessage={'Password must match'} />
                    )}

                <input
                    {...register("address", {
                        required: "Address is requred",
                    })}
                    name="address"
                    type="address"
                    required
                    placeholder="Address"
                    className="input"
                />
                {errors.address?.message && (
                    <FormError errorMessage={errors.address?.message} />
                )}
                <input
                    {...register("phone", {
                        required: "Phone is requred",
                    })}
                    name="phone"
                    type="phone"
                    required
                    placeholder="phone"
                    className="input"
                />
                {errors.phone?.message && (
                    <FormError errorMessage={errors.phone?.message} />
                )}
                <Button canClick={isValid}
                    loading={loading}
                    actionText={"Create Account"}
                />
            </form>
            <div className="mb-4">
                <span className="text-gray-100">Already have an account?{" "}</span>
                <Link href="/login">
                    <a className="text-blue-600 hover:underline">Log in now</a>
                </Link>
            </div>
        </div>
    );
};

export default CreateAccount;