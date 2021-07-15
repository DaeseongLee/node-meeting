import React from 'react';
import { useForm } from 'react-hook-form';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import FormError from './FormError';



interface IcreateMeetingForm {
    title: string;
    description: string;
    img: string;
    category: string;
    userId: string;
};

interface IProps {
    showModal: boolean;
}



const CreateMeetingModal: React.FC<IProps> = ({ showModal }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state: RootStateOrAny) => state.user);

    const { register, handleSubmit, getValues, formState: { errors, isValid } } = useForm<IcreateMeetingForm>({
        mode: "onChange",
    });

    const onSubmit = () => {
        const { title, description, img, category } = getValues();
        dispatch({
            type: "ACTION"
        });
    }
    return (
        <>
            {
                showModal ? (<div className="formWrapper">
                    <form className="form" placeholder="ID" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
                        <div className="grid grid-cols-1 space-y-2">
                            <div className="flex items-center justify-center w-full">
                                <label className="flex flex-col rounded-lg border-4 border-dashed w-full h-60 p-10 group text-center">
                                    <div className="h-full w-full text-center flex flex-col items-center justify-center">
                                        <div className="flex flex-auto max-h-48 w-2/5 mx-auto -mt-10">
                                            <img id="img-preview" className="h-36 object-center"
                                                src="https://img.freepik.com/free-vector/image-upload-concept-landing-page_52683-27130.jpg?size=338&ext=jpg"
                                                alt="freepik image" />
                                        </div>
                                        <p className="pointer-none text-gray-500 ">
                                            <span className="text-blue-600 hover:underline">select a file</span> from your computer
                                        </p>
                                    </div>
                                    <input {...register('img')}
                                        type="file"
                                        name="img"
                                        id="img"
                                        // className="hidden"
                                        accept="image/*" />
                                </label>
                            </div>
                        </div>
                        <input  {...register("title", {
                            required: "Title is required",
                        })}
                            type="text"
                            name="title"
                            required
                            placeholder="Title"
                            className="input bg-gray-200 text-gray-700"
                        />
                        {errors.title?.message && (
                            <FormError errorMessage={errors.title?.message} />
                        )}
                        <input {...register("userId")}
                            className="input" placeholder="Creater" type="text" name="creater" value={user?.email} disabled />
                        <input  {...register("category", {
                            required: "Category is required",
                        })}
                            type="text"
                            name="category"
                            required
                            placeholder="Category"
                            className="input bg-gray-200 text-gray-700"
                        />
                        {errors.category?.message && (
                            <FormError errorMessage={errors.category?.message} />
                        )}
                        <textarea {...register("description", {
                            required: "Description is required",
                        })}
                            className="input h-60"
                            placeholder="Describe everything about this post here"
                            name="description" required></textarea>
                        {errors.description?.message && (
                            <FormError errorMessage={errors.description?.message} />
                        )}

                        <input id="img-url" className="hidden" name="url" />
                        <button className="mb-4 text-center text-lg font-medium focus:outline-none text-white py-4  transition-colors bg-red-600 hover:bg-red-700 rounded-xl">
                            만들기</button>
                    </form>
                </div >) : ''}
        </>
    );
};

export default CreateMeetingModal;