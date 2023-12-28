import React, { useRef } from "react";
import { sendContact } from "../../services/appClient";
import Button from "../elements/Button";

const Contact = () => {
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputGenderRef = useRef<HTMLInputElement>(null);
    const inputAgeRef = useRef<HTMLInputElement>(null);
    const inputTitleRef = useRef<HTMLInputElement>(null);
    const inputContentRef = useRef<HTMLTextAreaElement>(null);
    const inputFileRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            name: inputNameRef.current?.value,
            email: inputEmailRef.current?.value,
            gender: inputGenderRef.current?.value,
            age: inputAgeRef.current?.value,
            title: inputTitleRef.current?.value,
            content: inputContentRef.current?.value,
            file: inputFileRef.current?.value,
        };

        try {
            async () => {
                await sendContact(formData);
            };
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex justify-center">
            <div className="bg-white px-10 py-5 ">
                <form onSubmit={handleSubmit}>
                    <div className="mb-5">
                        <label className="block">
                            お名前を入力してください
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300"
                            name="name"
                            ref={inputNameRef}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block">
                            返信先のメールアドレスを入力してください
                        </label>
                        <input
                            type="text"
                            className="border border-gray-300"
                            ref={inputEmailRef}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block">性別を教えて下さい</label>
                        <div>
                            <input
                                type="radio"
                                id="male"
                                name="gender"
                                value="男性"
                                ref={inputGenderRef}
                            />
                            <label htmlFor="male">男性</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                id="female"
                                name="gender"
                                value="女性"
                                ref={inputGenderRef}
                            />
                            <label htmlFor="female">女性</label>
                        </div>
                    </div>
                    <div className="mb-5">
                        <label className="block">年齢を教えて下さい</label>
                        <input
                            type="dropdown"
                            className="border border-gray-300"
                            ref={inputAgeRef}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block">件名を入力してください</label>
                        <input
                            type="text"
                            className="border border-gray-300"
                            ref={inputTitleRef}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block">お問い合わせ内容</label>
                        <textarea
                            className="border border-gray-300"
                            ref={inputContentRef}
                        />
                    </div>
                    <div className="mb-5">
                        <label className="block">画像を選択してください</label>
                        <input type="file" ref={inputFileRef} />
                    </div>
                    <Button text="送信" />
                </form>
            </div>
        </div>
    );
};

export default Contact;
