import React, { useRef } from "react";
import { sendContact } from "../../services/appClient";
import Button from "../elements/Button";
import { useForm } from "react-hook-form";
import { check } from "prettier";

const Contact = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();


    const onSubmit = handleSubmit((data) => {

        try {
            const postForm = async () => {
                await sendContact(data);
            };
            postForm()
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <div className="flex justify-center">
            <div className="bg-white px-10 py-5 ">
                <form onSubmit={onSubmit}>
                    <div className="mb-5">
                        <label className="block">
                            お名前を入力してください
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300"
                            id="name"
                            {...register('name',{required: true})}
                        />
                        {errors.email && <div>入力が必須の項目です</div>}
                    </div>
                    <div className="mb-5">
                        <label className="block">
                            返信先のメールアドレスを入力してください
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300"
                            id='email'
                            {...register('email',{required: true})}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block">年齢を教えて下さい</label>
                        <input
                            type="dropdown"
                            className="border border-gray-300"
                            id='age'
                            {...register('age',{required: true})}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block">件名を入力してください</label>
                        <input
                            type="text"
                            className="border border-gray-300"
                            id='title'
                            {...register('title',{required: true})}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block">お問い合わせ内容</label>
                        <textarea
                            className="border border-gray-300"
                            id='content'
                            {...register('content',{required: true})}
                        />
                    </div>
                    <Button text="送信" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
