import React from 'react';
import { useForm } from 'react-hook-form';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import Button from './Button';
import FormError from './FormError';



interface IUserInfoForm {
    address: string;
    phone: string;
    img: string;
    category: string;
};


const UserInfo = () => {

    const dispatch = useDispatch();
    const { user } = useSelector((state: RootStateOrAny) => state.user);

    const { register, handleSubmit, getValues, formState: { errors, isValid } } = useForm<IUserInfoForm>({
        mode: "onChange",
    });

    const onSubmit = () => {
        const { address, phone, img, category } = getValues();
        console.log(address, phone, img, category);
        dispatch({
            type: "ACTION"
        });
    }
    return (
        <div className="w-full max-w-xl flex flex-col px-5 items-center mt-4 lg:mt-10 xl:mt-2 rounded-xl border-2 border-gray-600">
            <form onSubmit={handleSubmit(onSubmit)} className="form">
                <input
                    {...register("address")}
                    type="text"
                    name="address"
                    required
                    placeholder="Address"
                    className="input"
                />
                <input
                    {...register("phone")}
                    name="phone"
                    type="text"
                    required
                    placeholder="Phone"
                    className="input"
                />

                <input
                    {...register("img")}
                    name="img"
                    type="file"
                    required
                    placeholder="Img"
                    className="input"
                />
                {errors.address?.message && (
                    <FormError errorMessage={errors.address?.message} />
                )}
                <input
                    {...register("category")}
                    name="category"
                    type="text"
                    required
                    placeholder="Category"
                    className="input"
                />
                <Button canClick={true}
                    loading={false}
                    actionText={"수정하기"}
                />
            </form>
        </div>
    );
};

export default UserInfo;